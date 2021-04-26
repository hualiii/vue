<template>
  <li class="item">
    <slot name="item"></slot>
  </li>
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