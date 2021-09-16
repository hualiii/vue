<template>
<div>
  <h2>todos</h2>
  <ul>
    <li v-for="(doneTodo,index) in doneTodos" :key="index">{{doneTodo}}</li>
  </ul>
  <p>已做总个数为{{doneTodosCount}}</p>
  <p>id为2的todo为 {{getTodoByID(2)}}</p>
</div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "GetterDemo",
  computed:{
      ...mapGetters(['doneTodos','doneTodosCount','getTodoByID'])
  }

}
</script>

<style scoped>

</style>