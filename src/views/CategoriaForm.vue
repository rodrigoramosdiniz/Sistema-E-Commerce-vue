<template>
    <div>
       <h3>Cadastro de Categoria</h3>

<form-categoria v-on:newCategory="salvar"></form-categoria>

    </div>
</template>

<script>



    import FormCategoria from "../components/FormCategoria";
    import CategoriaService from "../services/categoria"

    export default {
        name: "CategoriaForm",
        data(){
            return{

            }
        },
        components: {FormCategoria},
        methods:{
            salvar(category){
                 CategoriaService.create(category)
                     .then((response) => {
                         console.log(response);
                         this.$router.push("/categoria");
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