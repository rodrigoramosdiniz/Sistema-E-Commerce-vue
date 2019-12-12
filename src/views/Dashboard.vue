<template>

    <div>

        <b-row>

            <div class="col-lg mb-2">

                <h3>Dashboard

                    <small class="text-muted"> | resumo</small>

                </h3>

            </div>

        </b-row>

        <NovoChart v-if="loaded" v-bind:chartdata="chartData"></NovoChart>

    </div>

</template>



<script>

    import {BRow} from 'bootstrap-vue'

    import NovoChart from "../components/NovoChart"

    import dash from "../services/dash"

    export default {

        name: 'dashboard',

        components: {

            NovoChart,

            BRow

        },

        data() {

            return {

                chartData: {},

                options: {responsive: true},

                loaded: false,

            }

        },

        mounted() {

            this.chart()

        },

        methods: {

            chart(){

                dash.dashboard()

                    .then((response) => {

                        this.chartData = {

                            labels: [
    'Janeiro','Fevereiro','Março', 'Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'

                            ],

                            datasets: [

                                {

                                    label: 'Situação das Vendas',

                                    backgroundColor: "orange",

                                    data: response.data

                                }

                            ]

                        }

                        this.loaded = true

                        console.log(response.data)

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