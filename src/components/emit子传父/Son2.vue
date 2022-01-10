<template>
  <div>
    <button @click="pushTitle('子组件传来的title')">向父组件传参：子组件传来的title</button>
  </div>
</template>

<script>
export default {
  name: "Son",
  methods: {
    pushTitle(data) {
      this.$emit("getTitle", data)
    }
  }
}
</script>

<style scoped>

</style>