
<template>

    <div>

            <b-form>
                <b-form-group
                        label="descrição:">
                    <b-form-input
                            type="text"
                            required
                            v-model="categoria.description"
                            placeholder="Insira o Produto">
                    </b-form-input>
                </b-form-group>

            </b-form>

            <b-button variant="success" v-on:click="emitirEvento" class="mr-2">Salvar</b-button>

               <router-link to="/categoria">
                <b-button variant="danger">Cancelar</b-button>
               </router-link>

    </div>
</template>

<script>
    import {BForm, BFormGroup, BFormInput, BButton} from 'bootstrap-vue'
    import Categoria from "../models/Categoria";

    export default {
        name: "FormCategoria",
        data(){
            return{
            categoria: new Categoria()
            }
        },
        components:{

            BForm,
            BFormGroup,
            BFormInput,
            BButton
        },
        methods:{
            emitirEvento(){
                this.$emit('newCategory',this.categoria)
            }
        }

    }

</script>

<style scoped>

</style>