<template>
  <div id="app">
    <h1>你好啊</h1>
    <School name="北京大学" address="中国北京" :getSchoolName="getSchoolName" />
    <hr />
    <Student name="张三" sex="男" :age="18" @student="getStudentName" />
    <hr />
    <Student name="李四" sex="女" :age="19" ref="student" />
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  methods: {
    getSchoolName(name) {
      console.log("父组件收到了学校的名字:", name);
    },
    getStudentName(name) {
      console.log("父组件收到了学生的名字:", name);
    },
  },
  components: {
    Student,
    School,
  },
  mounted() {
    this.$refs.student.$on("student", this.getStudentName);
  },
};
</script>
