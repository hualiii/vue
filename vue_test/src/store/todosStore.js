export default {
    // namespaced:true,
    state:{
        todos:[
            {id:1, title:"study", done:true},
            {id:2, title:"eat", done:false},
            {id:3, title:"run", done:true},
            {id:4, title:"go swimming", done:false},
        ]
    },
    getters:{
        doneTodos(state){
            return state.todos.filter(todo=>todo.done)
        },
        doneTodosCount(state,getters){
            return getters.doneTodos.length
        },
        getTodoByID(state){
            return (id)=>{
                return state.todos.find((todo=>todo.id === id))
            }
        },
    },
}