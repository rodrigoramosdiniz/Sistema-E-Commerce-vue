<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>Cadastro
                    <small class="text-muted"> | Produtos</small>
                </h3>
            </div>
        </b-row>
        <form-produto v-on:save="save"></form-produto>
    </div>
</template>

<script>
    import {BRow} from 'bootstrap-vue'
    import FormProduto from "../components/FormProduto";
    import produtoService from '../services/produto'
    export default {
        name: "CriarProduto",
        components: {
            FormProduto,
            BRow,

        },
        methods: {
            save(produto) {
                produtoService.create(produto)
                    .then((response) => {
                        console.log(response.data)
                        this.$router.push('/produtos/'+produto.category.id+'/1')
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>