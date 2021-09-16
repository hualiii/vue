<template>
  <div>
    <input type="text" :value="$store.state.demo" @input="changeValue">
    <hr>
    <input type="text" v-model="message">
  </div>
</template>

<script>
export default {
  name: "Demo",
  methods:{
    changeValue(event){
      this.$store.commit('setDemo',event.target.value)
    }
  },
  computed:{
    message:{
      get(){
        return this.$store.state.demo
      },
      set(value){
        this.$store.commit('setDemo',value)
      }
    }
  }
}
</script>

<style scoped>

</style>