<template>
  <div id="app">
    <input type="text" v-model="info">
    <button @click="addInfo">添加</button>
    <ul>
      <TodoItem v-for="(item,index) in list" :key="index">
        <template v-slot:item>
          <span style="font-size: 30px">{{ item }}</span>
        </template>
      </TodoItem>
    </ul>
  </div>
</template>

<script>
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
    TodoItem
  }
}
</script>

<style>
#app {

}
</style>
