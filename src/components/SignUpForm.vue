<template>
    <b-card title="Sign Up"
            sub-title="Cadastre-se para acessar o sistema">
        <b-form>
            <b-form-group
                    label="E-mail:"
                    description="Informe um e-mail válido">
                <b-form-input
                        type="email"
                        required
                        placeholder="Insira seu e-mail">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Senha:"
                    description="A senha deve possuir no minimo 6 caracteres">
                <b-form-input
                        type="password"
                        required
                        placeholder="Insira sua senha">
                </b-form-input>
            </b-form-group>
        </b-form>
        <b-button variant="primary">Login</b-button>
    </b-card>
</template>

<script>
    import {BCard, BForm, BFormGroup, BFormInput, BButton} from 'bootstrap-vue'

    export default {
        name: "SignUp",
        components: {
            BCard,
            BForm,
            BFormGroup,
            BFormInput,
            BButton
        }
    }
</script>

<style scoped>

</style>
