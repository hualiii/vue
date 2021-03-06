import Vue from "vue";
import App from "./App.vue";
import AntDesignVue from "ant-design-vue";
import router from "./router";
import store from "./store";
import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false;
Vue.use(AntDesignVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
