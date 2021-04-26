<template>
  <div>
    name:{{ name }}
    <br>
    <button @click="handleChange">change name</button>
    <br>
    <VNodes :vnodes="slotDefault"></VNodes>
    <VNodes :vnodes="slotTitle"></VNodes>
    <VNodes :vnodes="slotScopeItem({value:'vue'})"></VNodes>
  </div>
</template>

<script>
export default {
  name: "BigProps",
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    },
  },
  props: {
    name: String,
    onChange: {
      type: Function,
      default: () => {
      }
    },
    slotDefault: Array,
    slotTitle: Array,
    slotScopeItem: {
      type: Function,
      default: () => {
      }
    }
  },
  methods: {
    handleChange() {
      this.onChange("hello vue")
    }
  }
}
</script>

<style scoped>

</style>