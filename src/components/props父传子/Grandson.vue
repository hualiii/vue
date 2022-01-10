<template>
  <div>
    <h1>Grandson組件</h1>
    <div> Father组件传来的title：{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Grandson",
  inject: ['title']
}
</script>

<style scoped>

</style>