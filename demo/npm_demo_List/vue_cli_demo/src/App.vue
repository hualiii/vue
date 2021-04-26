<template>
  <div id="app">
    <input type="text" v-model="info">
    <button @click="addInfo">添加</button>
    <ul>
      <TodoItem v-for="(item,index) in list" :item="item" :key="index"></TodoItem>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoItem from "@/components/TodoItem";

export default {
  name: 'App',
  data() {
    return {
      info: "",
      list: []
    }
  },
  methods: {
    addInfo() {
      this.list.push(this.info)
      this.info = ''
    }
  },
  components: {
    // HelloWorld
    TodoItem
  }
}
</script>

<style>
#app {
}
</style>
