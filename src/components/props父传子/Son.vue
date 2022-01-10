<template>
  <div>
    <h2>子组件</h2>
    父组件的title是：{{ title }}
    <Grandson></Grandson>
  </div>
</template>

<script>
import Grandson from "./Grandson";

export default {
  name: "Son",
  props: ['title'],
  components: {
    Grandson
  }
}
</script>
