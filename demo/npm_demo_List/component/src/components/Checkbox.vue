<template>
  <div>
    <h2>checkbox v-model demo</h2>
    <input type="checkbox" v-bind:checked="checked"
           v-on:change="$emit('change',$event.target.checked)"><span>{{ checked }}</span>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  }
}
</script>

<style scoped>

</style>