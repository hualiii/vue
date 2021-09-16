<template>
<div id="app">
  <Count></Count>
  <hr>
  <Demo></Demo>
</div>
</template>

<script>
import Count from "./components/Count";
import Demo from "./components/Demo";
export default {
  name:"App",
  components:{
    Count,
    // GetterDemo
    Demo
  }
}
</script>

<style scoped>

</style>