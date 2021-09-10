<template>
  <div  id="app">
    <Header :addTodo="addTodo"></Header>
    <List :todos="todos" :deleteTodo="deleteTodo"></List>
    <Footer :todos="todos" :checkAllTodos="checkAllTodos" :clearAll="clearAll"></Footer>
  </div>
</template>

<script>
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
export default {
  name:"App",
  data() {
    return {
      todos: [
        {
          id: "001",
          title: "吃饭",
          done: true,
        },
        {
          id: "002",
          title: "睡觉",
          done: true,
        },
        {
          id: "003",
          title: "打豆豆",
          done: false,
        },
      ],
    };
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo=>todo.id !== id)
    },
    checkAllTodos(done){
      this.todos.forEach(todo=>todo.done = done)
    },
    clearAll(){
      this.todos = this.todos.filter(todo=>!todo.done)
    }
  },
  components:{
    Header,
    List,
    Footer
  }
};
</script>

<style>
#app{
  margin: 0 auto;
}
</style>