<template>
  <div>
    <ul>
      <li>消息编号:{{ id }},消息内容:{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>