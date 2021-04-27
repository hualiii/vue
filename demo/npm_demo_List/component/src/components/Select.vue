<template>
  <div>
    <h2>select v-model demo</h2>
    <select :name="name" :id="id" v-bind:selected="selected" v-on:change="$emit('change',$event.target.value)">
      <option v-for="(item,index) in options" :value="item" :key="index">{{ item }}</option>
    </select>
    <div>selected:{{ selected }}</div>
  </div>
</template>

<script>
export default {
  name: "Select",
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    name: String,
    id: String,
    options: {
      type: Array,
      default: () => []
    },
    selected: String
  }
}
</script>

<style scoped>

</style>