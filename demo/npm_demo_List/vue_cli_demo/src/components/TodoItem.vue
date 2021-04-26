<template>
  <li class="item">{{ item }}</li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ['item']
}
</script>

<style scoped>
.item {
  color: red;
}
</style>