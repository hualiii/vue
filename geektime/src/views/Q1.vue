<template>
  <div>
    <ComponentB v-bind:data1="data1"></ComponentB>
    <ComponentB v-bind:data1="data1"></ComponentB>
    <ComponentB v-bind:data1="data1"></ComponentB>
    <ComponentA v-bind:name="data1.myName" @change="handleMyName"></ComponentA>
    <ComponentC>
      <template v-slot:default>
        <h2>2.6 新语法 第一次</h2>
      </template>
      <template v-slot:default>
        <h2>2.6 新语法 第二次</h2>
      </template>
      <template v-slot:title>
        <p>hello slot first</p>
      </template>
      <template v-slot:title>
        <p>hello slot second</p>
      </template>
      <template v-slot:info="obj">
        obj first
        {{ obj }}
      </template>
      <template v-slot:info="obj">
        obj second
        {{ obj }}
      </template>
    </ComponentC>
    <ComponentC>
      <h2 slot="default">2.5 老语法 第一次</h2>
      <h2 slot="default">2.5 老语法 第二次</h2>
      <p slot="title">hello slot first</p>
      <p slot="title">hello slot second</p>
      <div slot="info" slot-scope="obj">
        obj first
        {{ obj }}
      </div>
      <div slot="info" slot-scope="obj">
        obj second
        {{ obj }}
      </div>
    </ComponentC>
  </div>
</template>

<script>
import ComponentA from "@/components/Q1/ComponentA";
import ComponentB from "@/components/Q1/ComponentB";
import ComponentC from "@/components/Q1/ComponentC";

export default {
  name: "Q1",
  components: {
    ComponentA,
    ComponentB,
    ComponentC
  },
  data() {
    return {
      data1: {
        myName: "qhl",
        age: 18,
        sex: "male"
      }
    }
  },
  methods: {
    handleMyName(val, callback) {
      this.data1.myName = val
      callback('hello emit')
    }
  }
}
</script>

<style scoped>

</style>