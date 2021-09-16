<template>
  <div id="app">
    <Header></Header>
    <hr />
    <div class="container">
      <div class="left">
        <router-link to="/home">home</router-link>
        <router-link to="/about">about</router-link>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style scoped>
</style>