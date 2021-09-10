<template>
<div>
  <input type="text" @keyup.enter="addTodoHandel" v-model="title">
</div>
</template>

<script>
import {nanoid} from "nanoid"
export default {
  name: "Header",
  data(){
    return{
      title:""
    }
  },
  props:["addTodo"],
  methods:{
    addTodoHandel(){
      const todo = {id:nanoid(),title:this.title,done:false}
      this.addTodo(todo)
    }
  }
}
</script>

<style scoped>

</style>