<template>
<div id="app">
  <Hello></Hello>
  <hr>
  <Hello2></Hello2>
  <hr>
  <Hello3></Hello3>
</div>
</template>

<script>
import Hello from "./components/Hello";
import Hello2 from "./components/Hello2";
import Hello3 from "./components/Hello3";
export default {
  name: "App",
  components:{
    Hello,
    Hello2,
    Hello3
  }
}
</script>

<style scoped>

</style>