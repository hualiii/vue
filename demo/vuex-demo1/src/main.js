import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        count: 0,
        todolist: [
            {
                id: 1,
                content: "hello world1",
                done: true
            },
            {
                id: 2,
                content: "hello world2",
                done: false
            },
            {
                id: 3,
                content: "hello world1",
                done: true
            },
            {
                id: 4,
                content: "hello world1",
                done: true
            }
        ]
    },
    getters: {
        getTodoDone(state) {
            return state.todolist.filter((item) => item.done)
        },
        getTodoDoneCount(state, getters) {
            return getters.getTodoDone.length
        },
        getTodoById(state) {
            return (id) => {
                return state.todolist.find(todo => todo.id === id)
            }
        }
    },
    mutations: {
        add(state) {
            setTimeout(() => {
                state.count++
            }, 2000)
        },
        sub(state, payload) {
            state.count -= payload.n
        }
    },
    actions: {
        asyncAdd(context) {
            setTimeout(() => {
                context.commit('add')
            }, 3000)
        },
        asyncSub(context, payload) {
            context.commit('sub', payload)
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
