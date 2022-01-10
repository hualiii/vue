<template>
  <div>
    <h1>父组件</h1>
    <div>title：{{ title }}</div>
    <Son2 @getTitle="getTitleHandle"></Son2>
  </div>
</template>

<script>
import Son2 from "./Son2"

export default {
  name: "Father",
  data() {
    return {
      title: "父组件title"
    }
  },
  methods: {
    getTitleHandle(data) {
      this.title = data
    }
  },
  components: {
    Son2
  }
}
</script>

<style scoped>

</style>