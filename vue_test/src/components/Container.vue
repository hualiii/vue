<template>
  <div>
    <h1>{{msg}}</h1>
    <slot :game="game"></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  data(){
    return{
      msg:"hello vue",
      game:["王者荣耀","刺激战场","部落冲突"]
    }
  }
}
</script>

<style scoped>

</style>