<template>
<div>
  <input type="checkbox" v-model="todoItem.done">
  <span>{{todoItem.title}}</span>
  <button @click="deleteTodoHandle(todoItem.id)">删除</button>
</div>
</template>

<script>
export default {
  name: "Item",
  props:["todoItem","deleteTodo"],
  methods:{
    deleteTodoHandle(id){
      if (confirm("确定删除吗?")){
        this.deleteTodo(id)
      }
    }
  },
};
</script>

<style scoped>
</style>