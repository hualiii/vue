<template>
  <div>
    <h2 @click="showName">学校:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["name", "address"],
  methods: {
    showName() {
      console.log("hhhh");
    },
  },
};
</script>

<style scoped>
</style>