<template>
  <ul>
    <li v-for="item in newsList" :key="item.id">
      <router-link
        :to="{
          name: 'newsdetail',
          params: {
            id: item.id,
            title: item.title,
          },
        }"
        >{{ item.title }}</router-link
      >
      <input type="text" />
    </li>
    <hr />
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: [
        {
          id: "001",
          title: "news1",
        },
        {
          id: "002",
          title: "news2",
        },
        {
          id: "003",
          title: "news3",
        },
        {
          id: "004",
          title: "news4",
        },
      ],
    };
  },
  activated() {
    console.log("news组件被激活了");
  },
  deactivated() {
    console.log("news组件失活了");
  },
};
</script>

<style>
</style>