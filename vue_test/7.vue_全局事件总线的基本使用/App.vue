<template>
<div id="app">
  <h1>你好啊</h1>
  <School name="北京大学" address="中国北京"></School>
  <hr>
  <Student name="张三" age="18"></Student>
</div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  components:{
    School,
    Student
  }
}
</script>

<style scoped>

</style>