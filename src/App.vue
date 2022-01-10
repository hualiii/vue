<template>
  <div id="app">
    <PropsDemo></PropsDemo>
    <hr>
    <EmitDemo></EmitDemo>
  </div>
</template>

<script>
import PropsDemo from "./components/props父传子/PropsDemo";
import EmitDemo from "./components/emit子传父/EmitDemo";

export default {
  name: 'App',
  components: {
    PropsDemo,
    EmitDemo
  }
}
</script>

