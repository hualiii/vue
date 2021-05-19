<template>
  <div class="B">
    <h2>this is component b</h2>
    <span>{{data1}}</span><input type="text" v-model="myData" @input="changeMyName">
  </div>
</template>

<script>
export default {
  name: "ComponentB",
  props: ['data1'],
  data() {
    return {
      myData: ''
    }
  },
  methods:{
    changeMyName(){
      this.data1.myName = this.myData
    }
  }
}
</script>

<style scoped>

</style>