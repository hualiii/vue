<template>
  <div>
    <header>
      <slot name="header">默认插槽的默认值</slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
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