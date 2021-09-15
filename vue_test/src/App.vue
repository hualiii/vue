<template>
<div id="app">
  <Count></Count>
  <hr>
<!--  <GetterDemo></GetterDemo>-->
</div>
</template>

<script>
import Count from "./components/Count";
// import GetterDemo from "./components/GetterDemo";
export default {
  name:"App",
  components:{
    Count,
    // GetterDemo
  }
}
</script>

<style scoped>

</style>