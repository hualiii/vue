<template>
  <div class="info">
    <p class="title">
      <i></i>
      病毒信息
    </p>
    <div class="content">
      <p>{{ infoData.pxark1 }}</p>
      <p>{{ infoData.pxark2 }}</p>
      <p>{{ infoData.pxark3 }}</p>
      <p>{{ infoData.note1 }}</p>
      <p>{{ infoData.note2 }}</p>
      <p>{{ infoData.note3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    infoData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.info {
  padding: 16px;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.title {
  font-size: 17px;
}

.title i {
  display: inline-block;
  width: 4px;
  height: 16px;
  margin-right: 3px;
  vertical-align: middle;
  background: #4169e2;
}
.content {
  padding: 6px 16px;
}

.content p {
  font-size: 13px;
  margin: 5px 0;
}
</style>