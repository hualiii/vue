<template>
  <div class="a">
    <h2>this is component a</h2>
    name:{{ name }}<input type="text" @change="changeMyName">
  </div>
</template>

<script>
export default {
  name: "ComponentA",
  props: ['name'],
  methods: {
    changeMyName(e) {
      const res = this.$emit('change', e.target.value, (value) => {
        console.log('component a :' + value)
      })
      console.log(res)
    }
  }
}
</script>

<style scoped>

</style>