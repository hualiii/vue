<template>
<div id="app">
  <!--2.6以上新语法-->
  <Container >
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>
    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>
    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </Container>
  <hr>
  <!--2.6以下老语法-->
  <Container>
    <h1 slot="header">Here might be a page title</h1>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
    <p slot="footer">Here's some contact info</p>
    <p slot="footer">Here's some contact info2</p>
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