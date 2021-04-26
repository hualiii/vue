<template>
  <div>
    name:{{ name || "--" }}
    <br>
    <input type="text" :value="name" @change="handleChange">
    <br>
    <br>
    <div @click="handleDivClick">
      <button @click="handleClick">重置成功</button>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <button @click.stop="handleClick">重置失败</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: ['name'],
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.value)
    },
    handleDivClick() {
      this.$emit('change', '')
    },
    handleClick(e) {
      e.stopPropagation()
    }
  }
}
</script>

<style scoped>

</style>