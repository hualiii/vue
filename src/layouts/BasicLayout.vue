<template>
  <div>
    <Header></Header>
    <Footer></Footer>
    <SliderMenu></SliderMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SliderMenu from "./SliderMenu";
export default {
  name: "BasicLayout",
  components: {
    Header,
    Footer,
    SliderMenu,
  },
};
</script>

<style scoped></style>
