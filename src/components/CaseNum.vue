<template>
  <div class="case-num">
    <div class="container">
      <div class="title">
        <span>截至 {{ formatData(caseNumData.modifyTime) }} 全国数据统计</span>
      </div>
    </div>
    <div class="num">
      <ul class="count">
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em style="color: rgb(247, 76, 49)">{{
                  dataIncrDecr(caseNumData.currentConfirmedIncr)
                }}</em>
              </b>
            </div>
            <strong style="color: rgb(247, 76, 49)">{{
              caseNumData.currentConfirmedCount
            }}</strong>
            <span>现存确诊</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em style="color: rgb(247, 130, 7)">{{
                  dataIncrDecr(caseNumData.suspectedIncr)
                }}</em>
              </b>
            </div>
            <strong style="color: rgb(247, 130, 7)">{{
              caseNumData.suspectedCount
            }}</strong>
            <span>现存疑似</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em style="color: rgb(162, 90, 78)">{{
                  dataIncrDecr(caseNumData.seriousIncr)
                }}</em>
              </b>
            </div>
            <strong style="color: rgb(162, 90, 78)">{{
              caseNumData.seriousCount
            }}</strong>
            <span>现存重症</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em style="color: rgb(174, 33, 44)"
                  >+{{ caseNumData.confirmedIncr }}</em
                >
              </b>
            </div>
            <strong style="color: rgb(174, 33, 44)">{{
              caseNumData.confirmedCount
            }}</strong>
            <span>累计确诊</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em style="color: rgb(93, 112, 146)"
                  >+{{ caseNumData.deadIncr }}</em
                >
              </b>
            </div>
            <strong style="color: rgb(93, 112, 146)">{{
              caseNumData.deadCount
            }}</strong>
            <span>累计死亡</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日
                <em style="color: rgb(40, 183, 163)"
                  >+{{ caseNumData.curedIncr }}</em
                >
              </b>
            </div>
            <strong style="color: rgb(40, 183, 163)">{{
              caseNumData.curedCount
            }}</strong>
            <span>累计治愈</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseNum",
  props: {
    caseNumData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    formatData(date) {
      var date = new Date(date);
      var YY = date.getFullYear() + "-";
      var MM =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var DD =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + "   ";
      var hh =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var mm =
        date.getMinutes() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return YY + MM + DD + hh + mm;
    },
    dataIncrDecr(data) {
      if (data > 0 && data != 0) {
        return "+" + data;
      } else if (data < 0 && data != 0) {
        return "-" + data;
      } else {
        return data;
      }
    },
  },
};
</script>

<style scoped>
.case-num {
  padding: 16px;
  background: #fff;
}
.container {
  font-size: 12px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 7px;
  line-height: 24px;
}
.title span {
  color: #666;
}
.title em {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  margin-right: 16px;
  padding: 0 8px;
  color: #666;
  font-style: normal;
  background-color: #f7f7f7;
  border-radius: 12px 0 0 12px;
}
.title em img {
  width: 12.3px;
  height: 12.3px;
  margin-right: 3.7px;
}
.num {
  position: relative;
  text-align: center;
  background: #fff;
}
.num::after {
  position: absolute;
  top: 1px;
  left: 1px;
  display: block;
  width: 200%;
  height: 200%;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  transform: scale(0.5);
  transform-origin: 0 0;
  content: "";
}
.num ul {
  flex-flow: wrap;
  position: relative;
  display: flex;
  margin: 0;
  padding: 8px 0 12px;
}
.num ul li {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 33.3333333%;
  margin: 10px 0;
}
.num ul li .create-item {
  position: relative;
  text-align: center;
}
.num ul li .create-item .create-count {
  display: flex;
  align-items: center;
  height: 12px;
  margin-bottom: 2px;
  color: #666;
  font-weight: 400;
  font-size: 9px;
}
.num ul li .create-item .create-count em {
  font-weight: 400;
  font-style: normal;
}
.num ul li strong {
  margin-bottom: 1px;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
}
.num ul li span {
  display: block;
  color: #333;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
}
</style>