<template>
  <div id="app">
    <template>
      <el-tabs v-model="activeName">
        <el-tab-pane label="todolist" name="first">
          <input type="text" v-model="info">
          <button @click="addInfo">添加</button>
          <ul>
            <TodoItem v-for="(item,index) in list" :key="index">
              <template v-slot:item="propObj">
                <span :style="{fontSize: '30px',color:propObj.checked?'black':'red'}">{{ item }}</span>
              </template>
            </TodoItem>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="props" name="second">
          <Props
              name="hello vue"
              :type="type"
              :is-visible="false"
              :list="list"
              title="props demo"
              class="test1"
              :style="{fontSize: '20px'}"
              style="color: black"
          ></Props>
        </el-tab-pane>
        <el-tab-pane label="event" name="third">
          <Event :name="eventInfo" @change="handleChange"></Event>
        </el-tab-pane>
        <el-tab-pane label="slot" name="fourth">slot</el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import Props from "@/components/Props";
import Event from "@/components/Event";

export default {
  name: 'App',
  data() {
    return {
      activeName: "first",
      info: "",
      list: [],
      type: "success",
      eventInfo: ""
    }
  },
  methods: {
    addInfo() {
      this.list.push(this.info)
      this.info = ''
    },
    handleChange(value) {
      this.eventInfo = value
    }
  },
  components: {
    TodoItem,
    Props,
    Event
  }
}
</script>

<style>
#app {

}
</style>
