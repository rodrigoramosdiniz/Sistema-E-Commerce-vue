import http from './config'
import store from "../store";

export  default {
    listar: () => {

        return http.get("/category/list");
    },

    create:(category)=>{
      const user = store.getters.authUser

        const headers = {
          Authorization: 'Bearer '+user.token
        };

      return http.post('/category', category,{headers:headers})
    }
}

