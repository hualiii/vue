import Vue from "vue";
import Vuex from "vuex";
import countStore from "./countStore";
import todosStore from "./todosStore";
Vue.use(Vuex);

const store = new Vuex.Store({
    strict:true,
    modules:{
        a:countStore,
        b:todosStore
    },
    state:{
        demo:19
    },
    mutations:{
        setDemo(state,value){
            state.demo = value
        }
    }
})

export default  store