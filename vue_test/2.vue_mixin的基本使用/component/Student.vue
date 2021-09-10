<template>
 <div>
   <h2 @click="showName">学校:{{name}}</h2>
   <h2>年龄:{{age}}</h2>
 </div>
</template>

<script>
import {mixin1} from "../mixin";
export default {
  name: "Student",
  props:["name","age"],
  mixins:[mixin1]
}
</script>

<style scoped>

</style>