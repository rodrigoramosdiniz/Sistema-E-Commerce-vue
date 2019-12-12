import http from './config'
import store from "../store";

export  default {
    listar: (category, page) => {

        return http.get("/product/list/" +category+"/"+page);
    },

    create:(produto)=>{
        const user = store.getters.authUser

        const headers = {
            Authorization: 'Bearer '+user.token
        };

        return http.post('/product', produto,{headers:headers})
    }
}

