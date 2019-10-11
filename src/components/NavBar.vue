<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="secondary">
            <b-navbar-brand to="/">SisCommerce</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/dashboard">Dashboard</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-button variant="success" to="/login">Login</b-button>
                        <b-button variant="info" to="/signup">Signup</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item v-on:click="logout">Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import {
        BNavbar,
        BNavbarBrand,
        BNavbarToggle,
        BNavForm,
        BNavItem,
        BNavbarNav,
        BNavItemDropdown,
        BCollapse,
        BDropdownItem,
        BButton
    } from 'bootstrap-vue'

    export default {
        name: "NavBar",
        components: {
            BNavbar,
            BNavbarBrand,
            BNavbarToggle,
            BNavbarNav,
            BNavItemDropdown,
            BNavItem,
            BNavForm,
            BCollapse,
            BDropdownItem,
            BButton
        },
        methods: {
            logout: function(){
                sessionStorage.removeItem('user');
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>
