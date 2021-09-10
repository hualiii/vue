<template>
  <div>
    <h2 @click="showName">学校:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: ["name", "age"],
  methods: {
    showName() {
      console.log("hhhh");
    },
  },
};
</script>

<style scoped>
</style>