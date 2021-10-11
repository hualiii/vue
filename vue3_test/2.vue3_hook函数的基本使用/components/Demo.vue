<template>
  <div>
    <h2>当前求和为:{{ sum }}</h2>
    <button @click="sum++">add</button>
    <hr />
    <h2>当前坐标点为:x:{{ point.x }},y:{{ point.y }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
import userPoint from "../hooks/usePoint";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let point = userPoint();
    return {
      sum,
      point,
    };
  },
};
</script>

<style>
</style>