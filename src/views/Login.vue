<template>
    <div>
        <login-form @user="login"></login-form>
    </div>
</template>

<script>
    import LoginForm from '../components/LoginForm'
    import userService from '../services/user'

    export default {
        name: "Login",
        components: {
            LoginForm
        },
        methods: {
            login(user) {
                userService.login(user.email, user.senha)
                    .then((response) => {
                        const authenticatedUser = response.data;
                        sessionStorage.setItem('user',JSON.stringify(authenticatedUser));
                        this.$router.push("/dashboard");
                        console.log(authenticatedUser);
                    })
                    .catch()
            }
        }
    }
</script>

<style scoped>

</style>
