<template>
<div>
  <input type="checkbox" v-model="todoItem.done">
  <span v-show="!todoItem.isEdit">{{todoItem.title}}</span>
  <input ref="inputTitle" type="text" v-model="updateTitle" v-show="todoItem.isEdit" @blur="updateTodoHandle(todoItem.id)">
  <button @click="showEdit(todoItem)">编辑</button>
  <button @click="deleteTodoHandle(todoItem.id)">删除</button>
</div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "Item",
  props:["todoItem"],
  data(){
    return{
      updateTitle:this.todoItem.title
    }
  },
  methods:{
    deleteTodoHandle(id){
      if (confirm("确定删除吗?")){
        pubsub.publish("deleteTodo",id)
      }
    },
    showEdit(todoItem){
      if (todoItem.hasOwnProperty("isEdit")){
        todoItem.isEdit = true
      }else {
        this.$set(todoItem,"isEdit",true)
      }
      this.$nextTick(()=>{
        this.$refs.inputTitle.focus()
      })
    },
    updateTodoHandle(id){
      if (this.updateTitle.trim() == "") alert("12")
      this.todoItem.isEdit = false
      this.$bus.$emit("updateTodo",id,this.updateTitle)
    }
  },
};
</script>

<style scoped>
</style>
