<template>
  <div>
    <h1>父组件</h1>
    <Son :title="title"></Son>
  </div>
</template>

<script>
import Son from './Son'

export default {
  name: "Father",
  data() {
    return {
      title: "父组件title"
    }
  },
  components: {
    Son
  },
  provide() {
    return {
      title: this.title
    }
  }
}
</script>
