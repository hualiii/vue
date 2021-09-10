<template>
<div>
  <h3>学校:{{ name }}</h3>
  <h3>地址:{{ address }}</h3>
  <button @click="sendSchoolName">向父组件传参</button>
</div>
</template>

<script>
export default {
  name: "School",
  props:["name","address","getSchoolName"],
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>

</style>