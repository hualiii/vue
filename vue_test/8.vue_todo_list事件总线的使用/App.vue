<template>
  <div  id="app">
    <Header @addTodo="addTodo"></Header>
    <List :todos="todos" @deleteTodo="deleteTodo"></List>
    <Footer :todos="todos" @checkAllTodos="checkAllTodos" @clearAll="clearAll"></Footer>
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
      todos: JSON.parse(localStorage.getItem('todos')) || []
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
  },
  mounted() {
    this.$bus.$on("deleteTodo",this.deleteTodo)
  },
  watch:{
    todos:{
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      },
      deep:true
    }
  }
};
</script>

<style>
#app{
  margin: 0 auto;
}
</style>