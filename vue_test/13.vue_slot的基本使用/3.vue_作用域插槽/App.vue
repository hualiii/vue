<template>
<div id="app">
  <!--2.6以上新语法-->
  <Container >
    <template v-slot:default="propObj">
      <ul>
        <li v-for="(item,index) in propObj.game" :key="index">
          {{item}}
        </li>
      </ul>
    </template>
  </Container>
  <Container >
    <template v-slot:default="{game}">
      <ol>
        <li v-for="(item,index) in game" :key="index">
          {{item}}
        </li>
      </ol>
    </template>
  </Container>
  <hr>
  <!--2.6以下老语法-->
  <Container>
    <template scope="propObj">
      <ul>
        <li v-for="(item,index) in propObj.game" :key="index">
          {{item}}
        </li>
      </ul>
    </template>
  </Container>
</div>
</template>

<script>
import Container from "./components/Container";
export default {
  name:"App",
  components:{
    Container
  }
}
</script>

<style scoped>

</style>