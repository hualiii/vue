<template>
  <div class="home">
    <Header />
    <NcovInfo :infoData="ncovInfo" />
    <CaseNum :caseNumData="caseNumData" />
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header";
import NcovInfo from "../components/NcovInfo";
import CaseNum from "../components/CaseNum";
export default {
  name: "Home",
  data() {
    return {
      ncovInfo: {},
      caseNumData: {},
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
      // ncovInfo components data
      this.ncovInfo = {
        note1: res.data.newslist[0].desc.note1,
        note2: res.data.newslist[0].desc.note2,
        note3: res.data.newslist[0].desc.note3,
        remark1: res.data.newslist[0].desc.remark1,
        remark2: res.data.newslist[0].desc.remark2,
        remark3: res.data.newslist[0].desc.remark3,
      };
      // caseNum components data
      this.caseNumData = {
        modifyTime: res.data.newslist[0].desc.modifyTime,
        currentConfirmedCount: res.data.newslist[0].desc.currentConfirmedCount,
        suspectedCount: res.data.newslist[0].desc.suspectedCount,
        seriousCount: res.data.newslist[0].desc.seriousCount,
        confirmedCount: res.data.newslist[0].desc.confirmedCount,
        deadCount: res.data.newslist[0].desc.deadCount,
        curedCount: res.data.newslist[0].desc.curedCount,
        currentConfirmedIncr: res.data.newslist[0].desc.currentConfirmedIncr, // 现存确诊
        suspectedIncr: res.data.newslist[0].desc.suspectedIncr, // 现存疑似
        seriousIncr: res.data.newslist[0].desc.seriousIncr,
        confirmedIncr: res.data.newslist[0].desc.confirmedIncr,
        deadIncr: res.data.newslist[0].desc.deadIncr,
        curedIncr: res.data.newslist[0].desc.curedIncr,
      };
    });
  },
  components: {
    Header,
    NcovInfo,
    CaseNum,
  },
};
</script>
