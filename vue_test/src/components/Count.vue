<template>
<div>
  <h1>当前求和为：{{ $store.state.a.sum }}</h1>
  <h1>大和为：{{ $store.getters.bigSum }}</h1>
  <select v-model.number="number">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
  <button @click="add">+</button>
  <button @click="sub">-</button>
  <button @click="addOdd">odd +</button>
  <button @click="addAsync">async +</button>
</div>
</template>

<script>
export default {
  name: "Count",
  data(){
     return{
       number:1
     }
  },
  methods:{
    add(){
      this.$store.commit("a/add",this.number)
    },
    sub(){
      this.$store.commit("a/sub",this.number)
    },
    addOdd(){
      this.$store.dispatch("a/addOdd",this.number)
    },
    addAsync(){
      this.$store.dispatch("a/addAsync",this.number)
    },
  },
  mounted(){
    console.log(this.$store)
  },
  updated() {
    console.log(this.$store)
  }
}
</script>

<style scoped>

</style>