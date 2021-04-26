<template>
  <div id="app">
    <input type="text" v-model="info">
    <button @click="addInfo">添加</button>
    <ul>
      <TodoItem v-for="(item,index) in list" :key="index">
        <template v-slot:item="propObj">
          <span :style="{fontSize: '30px',color:propObj.checked?'red':'blue'}">{{ item }}</span>
        </template>
      </TodoItem>
    </ul>
    <hr>
    <h1>props</h1>
    <Props
        name="hello vue"
        :type="type"
        :is-visible="false"
        :list="list"
        title="props demo"
        class="test1"
        :style="{fontSize: '20px'}"
        style="color: #42b983"
    ></Props>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import Props from "@/components/Props";

export default {
  name: 'App',
  data() {
    return {
      info: "",
      list: [],
      type: "success"
    }
  },
  methods: {
    addInfo() {
      this.list.push(this.info)
      this.info = ''
    }
  },
  components: {
    TodoItem,
    Props
  }
}
</script>

<style>
#app {

}
</style>
