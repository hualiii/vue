<template>
  <div>
    <button @click="show=!show">hello</button>
    <!--多个列表transition-group的基本使用-->
    <transition-group name="hello" appear>
      <h1 v-show="show" key="1">你好啊</h1>
      <h1 v-show="!show" key="2">我是张三</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Hello3",
  data(){
    return{
      show:true
    }
  }
}
</script>

<style scoped>
h1{
  background: forestgreen;
  color: white;
}
.hello-enter-active,.hello-leave-active{
  transition: 1s ease;
}
.hello-enter,.hello-leave-to{
  transform: translateX(-100%);
}
.hello-enter-to,.hello-leave{
  transform: translateX(0);
}
</style>