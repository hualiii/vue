<template>
  <div>
    <h2 @click="showName">学校:{{name}}</h2>
    <h2>地址:{{address}}</h2>
  </div>
</template>

<script>
import {mixin1,mixin2} from "../mixin";

export default {
  name: "School",
  props:["name","address"],
  methods:{
    showName() {
      console.log("hhhh")
    }
  },
  mixins:[mixin1,mixin2]
}
</script>

<style scoped>

</style>