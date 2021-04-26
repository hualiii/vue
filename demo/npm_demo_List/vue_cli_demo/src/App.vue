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
        <el-tab-pane label="slot" name="fourth">
          <h2>2.6 新语法</h2>
          <SlotDemo>
            <template v-slot:default>
              <p>default slot</p>
            </template>
            <template v-slot:title>
              <p>title slot1</p>
              <p>title slot2</p>
            </template>
            <template v-slot:item="props">
              <p>item:{{ props }}</p>
            </template>
          </SlotDemo>
          <h2>2.6以下 老语法</h2>
          <SlotDemo>
            <p slot="default">default slot</p>
            <p slot="title">title slot1</p>
            <p slot="title">title slot2</p>
            <p slot="item" slot-scope="prop">item:{{ prop }}</p>
          </SlotDemo>
        </el-tab-pane>
        <el-tab-pane label="BigProps" name="fifth">
          <BigProps
              :name="bigPropsName"
              :on-change="handleBigPropChange"
              :slot-default="getDefault()"
              :slot-title="getTitle()"
              :slot-scope-item="getItem"
          ></BigProps>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import Props from "@/components/Props";
import Event from "@/components/Event";
import SlotDemo from "@/components/Slot";
import BigProps from "@/components/BigProps";


export default {
  name: 'App',
  data() {
    return {
      activeName: "first",
      info: "",
      list: [],
      type: "success",
      eventInfo: "",
      bigPropsName: "bigPropsName",
    }
  },
  methods: {
    addInfo() {
      this.list.push(this.info)
      this.info = ''
    },
    handleChange(value) {
      this.eventInfo = value
    },
    handleBigPropChange(value) {
     this.bigPropsName = value
    },
    getDefault() {
      return [this.$createElement('p', 'default slot')]
    },
    getTitle() {
      return [this.$createElement('p', 'title slot1'), this.$createElement('p', 'title slot2')]
    },
    getItem(props) {
      return [this.$createElement('p', `item slot-scope ${JSON.stringify(props)}}`)]
    }
  },
  components: {
    TodoItem,
    Props,
    Event,
    SlotDemo,
    BigProps
  }
}
</script>

<style>
#app {
}
</style>
