<template>
  <div>
    <h3>姓名:{{name}}</h3>
    <h3>年龄:{{age}}</h3>
  </div>
</template>

<script>
export default {
  name: "Student",
  props:["name","age"],
  mounted() {
    this.$bus.$on("hello",(data)=>{
      console.log("学生组件收到了数据:",data)
    })
  },
}
</script>

<style scoped>

</style>