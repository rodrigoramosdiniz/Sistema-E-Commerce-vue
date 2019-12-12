<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <b-table :bordered="bordered" :items=categoria :fields = fields >
            <template v-slot:cell(actions)="row">
                <b-button size="sm" variant="primary" class="button">
                 Editar
                </b-button>

                <b-button size="sm" variant="danger">
                    Excluir
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
    import {BTable,BButton} from 'bootstrap-vue'

    export default {
        name: "CategoriaList",
        props: ['categoria'],
        data() {
            return {

                fields: [
                    {key:'id', label:'ID'},
                    {key:'description', label:'Descrição'},
                    {key:'actions', label:'Ações'}
            ]}
        },
        components: {
            BTable,
            BButton

        }
    }
</script>

<style scoped>
 .button{
     margin-left: 5px;
     margin-right: 5px;
 }
</style>