<template>
  <div class="slot">
    <slot></slot>
    <slot name="title"></slot>
    <slot name="info" v-bind="{name:'vue',age:8}"></slot>
  </div>
</template>

<script>
export default {
  name: "ComponentC"
}
</script>

<style scoped>

</style>