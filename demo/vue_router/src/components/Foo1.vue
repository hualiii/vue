<template>
  <div>
    <h1>this is foo 1 and user id is {{ $route.params.id }}</h1>
    <input type="text" v-model="path">
    <button @click="toBar()">to bar</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Foo1",
  data() {
    return {
      path: ""
    }
  },
  methods: {
    toBar() {
      let path = this.$route.path + '/' + this.path
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

</style>