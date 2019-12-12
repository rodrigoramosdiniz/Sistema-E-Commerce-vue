<template>
    <div>
        <h2>Listagem de Categorias</h2>


        <b-button to="/categoriaForm" variant="primary">Nova Categoria</b-button>


        <categoria-list v-bind:categoria="categoria"></categoria-list>
    </div>

</template>

<script>

    import CategoriaList from '../components/CategoriaList'
    import categoriaService from '../services/categoria'
    import {BButton} from 'bootstrap-vue'

    export default {
        name: "Categoria",
        data() {
            return {
                categoria: []
            }

        },

        mounted() {
            this.carregarCategoria();
        },
        components: {
            CategoriaList,
            BButton
        },
        methods: {
            carregarCategoria() {
                categoriaService.listar()
                    .then((response) => {
                        this.categoria = response.data;
                    })
                    .catch((response) => {
                        alert(response.data);
                    })
            }
        }

    }
</script>

<style scoped>

</style>