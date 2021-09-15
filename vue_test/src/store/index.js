import Vue from "vue";
import Vuex from "vuex";
import countStore from "./countStore";
import todosStore from "./todosStore";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        a:countStore,
        b:todosStore
    }
})

export default  store