<template>
  <div id="app">
    <div id="nav">
      <router-link to="/user/login">Home</router-link> |
      <router-link to="/user/register">About</router-link>
      <a-button type="primary">hello</a-button>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  color: #2c3e50;
}
</style>
