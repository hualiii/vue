<template>
  <div>
    <h3>姓名:{{name}}</h3>
    <h3>年龄:{{age}}</h3>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "Student",
  props:["name","age"],
  mounted() {
    this.subId = pubsub.subscribe("schoolName",(subName,data)=>{
      console.log("学生组件收到了信息：",data,"，订阅的消息名为：",subName)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.subId)
  }
}
</script>

<style scoped>

</style>