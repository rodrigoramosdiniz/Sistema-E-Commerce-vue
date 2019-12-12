<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <b-link to="/produto">Voltar</b-link>
        <b-link to="/produtoForm">
            <b-button size="md" variant="primary" class="float-right mb-1">
                Novo
            </b-button>
        </b-link>
        <b-table striped hover :fields="fields" :items="produtos">
            <template v-slot:cell(Imagem)="row">
                <img v-if="row.item.img" width="50" height="50" :src="`data:image/png;base64,${row.item.img}`" />
                <p v-else>Sem Imagem</p>
            </template>
            <template v-slot:cell(Ação)="row" >
                <b-button size="md" variant="success" class="mr-2">
                    Editar
                </b-button>
                <b-button size="md" variant="danger">
                    Excluir
                </b-button>
            </template>
        </b-table>

    </div>
</template>

<script>
    import {BLink,BButton,BTable} from 'bootstrap-vue'
    export default {
        name: "ProdutoList",
        components: {
          BLink,
            BButton,
            BTable
        },
        props:['produtos'],
           data() {
               return {

                    fields: [
                        {key:'id', label:'ID'},
                        {key:'description', label:'Descrição'},
                        {key:'actions', label:'Ações'}
                    ]}
        },
    }
</script>

<style scoped>

</style>