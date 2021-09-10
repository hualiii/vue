<template>
  <div>
    <h3>姓名:{{ name }}</h3>
    <h3>性别:{{ sex }}</h3>
    <h3>年龄:{{ age }}</h3>
    <button @click="sendStudent">向父组件传参</button>
    <button @click="unbind">解绑自定义事件</button>
  </div>
</template>

<script>
export default {
  props: {
    name:{
      type:String,
      require:true
    },
    sex:{
      type:String,
      default:"male"
    },
    age:{
      type:Number,
      require: true,
      default: 18
    }
  },
  methods:{
    sendStudent(){
      this.$emit("student",this.name)
    },
    unbind(){
      this.$off()
    }
  }
};
</script>