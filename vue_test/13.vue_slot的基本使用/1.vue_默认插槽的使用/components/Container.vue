<template>
  <div>
    <h1>{{title}}</h1>
    <slot>插槽的默认值</slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  props:["title"]
}
</script>

<style scoped>

</style>
