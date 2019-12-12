<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>
                    Cadastro
                    <small class="text-muted"> | Produtos</small>
                </h3>
            </div>
        </b-row>
        <produto-list v-bind:produtos="produto"></produto-list>
    </div>
</template>

<script>
    import {BRow} from 'bootstrap-vue'
    import produtoService from "../services/produto"
    import ProdutoList from "../components/ProdutoList";
    export default {
        name: "Produto",
        components: {ProdutoList,BRow},
        data(){
            return {
                produto: []
            }
        },
        methods: {
            newProduto(){
                produtoService.listar(this.$route.params.idCategory, this.$route.params.page)
                    .then((response) => {
                        this.produto = response.data
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            }
        },
        mounted() {
            this.newProduto()
        },
        watch: {
            '$route': 'newProduto'
        }
    }
</script>

<style scoped>

</style>>