<template>
  <div>
    <h3>学校:{{name}}</h3>
    <h3>地址:{{address}}</h3>
    <button @click="sendSchoolName">将学校姓名传递给学生组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "School",
  props:["name","address"],
  methods:{
    sendSchoolName(){
      pubsub.publish("schoolName",this.name)
    }
  }
}
</script>

<style scoped>

</style>