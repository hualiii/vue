<template>
  <div id="app">
    <Checkbox v-model="checked1"></Checkbox>
    <Checkbox v-model="checked2"></Checkbox>
    <Checkbox v-model="checked3"></Checkbox>
    <InputText v-model="text1"></InputText>
    <InputText v-model="text2"></InputText>
    <InputText v-model="text3"></InputText>
    <SelectDemo v-model="selected1" name="select1" id="select1" :options="options1"></SelectDemo>
    <SelectDemo v-model="selected2" name="select2" id="select2" :options="options2"></SelectDemo>
  </div>
</template>

<script>

import Checkbox from "@/components/Checkbox";
import InputText from "@/components/InputText";
import SelectDemo from "@/components/Select";

export default {
  name: 'App',
  components: {
    Checkbox,
    InputText,
    SelectDemo
  },
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
      text1: "",
      text2: "hello world",
      text3: "hello vue",
      options1: ['上海', '北京', '杭州', '南京', '苏州'],
      options2: ['北京大学', '清华大学', '浙江大学', '南开大学', '南京大学'],
      selected1: '',
      selected2: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
