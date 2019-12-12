<template>
    <div>

<form-produto v-on:save="salvar"></form-produto>

    </div>
</template>

<script>

    import FormProduto from "../components/FormProduto";
    import serviceProduto from "../services/produto";


    export default {
        name: "ProdutoForm",
        data(){
            return{

            }
        },

        components:{
          FormProduto
        },

        methods:{
            salvar(product){
                console.log(product);
                serviceProduto.create(product)
                    .then((response) => {
                            console.log(response);
                        this.$router.push("/produtos/"+product.category.id+'/1');

                    })
                    .catch((response) => {
                        console.log("Erro: ");
                        console.log(response);
                    })
            }
        }
    }
</script>

<style scoped>

</style>