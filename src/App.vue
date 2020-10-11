<template>
  <WordCard/>
</template>

<script lang="ts">
import WordCard from "./views/components/Word.vue";
import {reactive} from "vue";

export default {
  components: {
    WordCard
  }
};
// @Options({
//   components: {
//     HelloWorld
//   }
// })
// export default class Home extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
