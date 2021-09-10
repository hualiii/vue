<template>
  <div>
    <Item v-for="todo in todos" :key="todo.id" :todoItem="todo"></Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "List",
  props:["todos"],
  components:{
    Item
  }
}
</script>

<style scoped>

</style>