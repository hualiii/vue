<template>
  <div id="app">
    {{ count }}
    <hr>
    <button @click="countAdd()">count ++</button>
    <button @click="countSub()">countSub</button>
    <hr>
    <button @click="asyncAdd()">asyncAdd</button>
    <button @click="asyncSub()">asyncSub</button>
    <hr>
    doneList: {{ doneList }}
    <br>
    doneListLength: {{ doneListLength }}
    <br>
    getDoneListById: {{ $store.getters.getTodoById(2) }}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    countAdd() {
      this.$store.commit('add')
    },
    countSub() {
      this.$store.commit({
        type: "sub",
        n: 2
      })
    },
    asyncAdd() {
      this.$store.dispatch('asyncAdd')
    },
    asyncSub() {
      this.$store.dispatch('asyncSub', {
        n: 10
      })
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    doneList() {
      return this.$store.getters.getTodoDone
    },
    doneListLength() {
      return this.$store.getters.getTodoDoneCount
    }
  }
}
</script>

<style>
#app {

}
</style>
