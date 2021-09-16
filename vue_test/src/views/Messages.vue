<template>
  <ul>
    <li v-for="item in messageList" :key="item.id">
      <!-- 模板字符串写法 -->
      <router-link
        :to="`/home/messages/detail?id=${item.id}&title=${item.title}`"
      >
        {{ item.title }}</router-link
      >
      <button @click="pushShow(item)">push查看</button>
      <button @click="replaceShow(item)">replace查看</button>
    </li>
    <hr />
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "Messages",
  data() {
    return {
      messageList: [
        {
          id: "001",
          title: "Messages1",
        },
        {
          id: "002",
          title: "Messages2",
        },
        {
          id: "003",
          title: "Messages3",
        },
        {
          id: "004",
          title: "Messages4",
        },
      ],
    };
  },
  methods: {
    pushShow(item) {
      this.$router.push({
        path: "/home/messages/detail",
        query: {
          id: item.id,
          title: item.title,
        },
      });
    },
    replaceShow(item) {
      this.$router.replace({
        path: "/home/messages/detail",
        query: {
          id: item.id,
          title: item.title,
        },
      });
    },
  },
};
</script>

<style>
</style>