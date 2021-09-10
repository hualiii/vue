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
  methods:{
    addTodoHandel(){
      const todo = {id:nanoid(),title:this.title,done:false}
      this.$emit("addTodo",todo)
    }
  }
}
</script>

<style scoped>

</style>