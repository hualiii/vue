<template>
  <div>
    <h1>props父传子</h1>
    <Father></Father>
  </div>
</template>

<script>
import Father from "./Father";

export default {
  name: "PropsDemo",
  components:{
    Father
  }
}
</script>
