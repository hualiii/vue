<template>
  <div id="app">
    <router-link to="foo1/18">foo</router-link>
    <router-view></router-view>
    <button @click="showRouter()">showRouter</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    showRouter() {
      console.log(this.$route)
    }
  }
}
</script>

<style>

</style>
