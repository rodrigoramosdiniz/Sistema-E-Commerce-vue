<template>

    <div>

        <b-form @submit="onSubmit">
            <b-form-group
                    label="descrição:">
                <b-form-input
                        v-model="product.description"
                        type="text"
                        required
                        placeholder="Insira a Descrição">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Preço:">
                <b-form-input
                        v-model="product.price"
                        type="text"
                        required
                        placeholder="Insira o preço do Produto">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Categoria:">
                <b-form-input
                        v-model="product.category.id"
                        type="number"
                        required
                        placeholder="Insira o categoria do Produto">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Preço Promocional:">
                <b-form-input
                        v-model="product.promotionPrice"
                        type="text"
                        required
                        placeholder="Insira o Preço Promocional">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Marca:">
                <b-form-input
                        v-model="product.brand"
                        type="text"
                        required
                        placeholder="Insira a Marca do Produto">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Quantidade:">
                <b-form-input
                        v-model="product.quantity"
                        type="text"
                        required
                        placeholder="Insira a quantidade">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Img:">
                <b-form-file
                        v-on:change="loadFile"
                        required
                        placeholder="">
                </b-form-file>
            </b-form-group>


            <b-button variant="success" class="mr-2" type="submit">Salvar</b-button>

            <router-link to="/categoria">
                <b-button variant="danger">Cancelar</b-button>
            </router-link>


        </b-form>


    </div>

</template>

<script>

    import Produto from "../models/Produto";
    import {BForm, BFormGroup, BFormInput, BButton, BFormFile} from 'bootstrap-vue'
    import categoryService from "../services/categoria";

    export default {
        name: "ProductForm",
        components: {
            BForm,
            BFormGroup,
            BFormInput,
            BButton,
            BFormFile
        },
        data() {
            return {
                product: new Produto(),
                categories: [],
                options: [],
                show: true,
                previewImage: true,
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                this.$emit('save', this.product)
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.product.description = ''
                this.product.price = ''
                this.product.category = {}
                this.product.promotionalPrice = 0
                this.product.brand = ''
                this.product.quantity = 0
                // Trick to reset/clear native browser form validation state
                // this.show = false
            },
            loadCategories() {
                categoryService.listar()
                    .then((response) => {
                        this.categories = response.data;
                        this.categories.forEach(this.loadOptions)
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            },
            loadOptions(item) {
                this.options.push({'value': item.id, 'text': item.description})
            },
            loadFile(event) {
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0])
                reader.onloadend = () => {
                    this.product.img = reader.result
                    this.product.img = this.product.img.replace('data:image/jpeg;base64,', '')
                    this.product.img = this.product.img.replace('data:image/png;base64,', '')
                    this.product.img = this.product.img.replace('data:image/jpg;base64,', '')
                }
            }
        },
        mounted() {
            this.loadCategories()
        }
    }
</script>

<style scoped>

</style>