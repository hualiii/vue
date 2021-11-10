<template>
  <div class="home">
    <Header />
    <NcovInfo :infoData="ncovInfo" />
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header";
import NcovInfo from "../components/NcovInfo";
export default {
  name: "Home",
  data() {
    return {
      ncovInfo: {},
    };
  },
  mounted() {
    axios({
      url: "/ncov/index",
      params: {
        key: "b1e09762b1a8d164d8c68543cc81142b",
      },
    }).then((res) => {
      console.log(res);
      this.ncovInfo = {
        note1: res.data.newslist[0].desc.note1,
        note2: res.data.newslist[0].desc.note2,
        note3: res.data.newslist[0].desc.note3,
        remark1: res.data.newslist[0].desc.remark1,
        remark2: res.data.newslist[0].desc.remark2,
        remark3: res.data.newslist[0].desc.remark3,
      };
    });
  },
  components: {
    Header,
    NcovInfo,
  },
};
</script>
