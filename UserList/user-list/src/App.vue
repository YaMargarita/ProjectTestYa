<template>
  <div id="app">
    <MainPage></MainPage>
  </div>
</template>

<script>
import MainPage from "./components/MainPage";
export default {
  name: 'App',
  components: {
    MainPage
  },
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app{
  width: 90%;
  margin: 0 auto;
}
</style>
