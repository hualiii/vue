<template>
<div v-show="total">
  <input type="checkbox"  v-model="isAll">
  <span>已完成{{doneTotal}}/全部{{total}}</span>
  <button @click="clearAllHandle">清除已完成任务</button>
</div>
</template>

<script>
export default {
  name: "Footer",
  props:["todos"],
  methods:{
    clearAllHandle(){
      this.$emit("clearAll")
    }
  },
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      return this.todos.reduce((pre,cur)=> pre + (cur.done ?1:0 ),0)
    },
    isAll:{
      get(){
        return this.total == this.doneTotal && this.total > 0
      },
      set(value){
        this.$emit("checkAllTodos",value)
      }
    },
  }
}
</script>

<style scoped>

</style>