<template>
  <div>
    <h1>home</h1>
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/messages">messages</router-link>
    <keep-alive :include="['News']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
</style>