<template>
  <div>
    <h2>input v-model demo</h2>
    <input type="text" v-bind:value="value" v-on:input="$emit('input',$event.target.value)">
    <div>{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "InputText",
  model: {
    prop: 'value',
    event: 'input'
  },
  props: ['value']
}
</script>

<style scoped>

</style>