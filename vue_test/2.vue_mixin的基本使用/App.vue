<template>
  <div id="app">
    <School name="北京大学" address="中国北京"></School>
    <hr>
    <Student name="张三" :age="18"></Student>
  </div>
</template>

<script>
import School from "./component/School";
import Student from "./component/Student";
export default {
  name: "App",
  components:{
    Student,
    School
  }
};
</script>

<style>
</style>