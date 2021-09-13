<template>
  <div>
    <button @click="show=!show">hello</button>
    <transition name="hello" appear>
      <h1 v-show="show">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Hello2",
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