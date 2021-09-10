<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>姓名:{{ name }}</h3>
    <h3>性别:{{ sex }}</h3>
    <h3>年龄:{{ age }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "学生的基本信息",
    };
  },
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
  }
};
</script>