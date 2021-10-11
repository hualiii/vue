<template>
  <div>
    <p>{{ person }}</p>
    <h1>roRef</h1>
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>salary:{{ salary }} k</h2>
    <button @click="salary++">salary++</button>
    <button @click="age++">age++</button>
    <button @click="name += '~'">name++</button>
  </div>
</template>

<script>
import { reactive, toRef } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "web前端工程师",
        salary: 18,
      },
    });
    return {
      person,
      name: toRef(person, "name"),
      age: toRef(person, "age"),
      salary: toRef(person.job, "salary"),
    };
  },
};
</script>

<style>
</style>