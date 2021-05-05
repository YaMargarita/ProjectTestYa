<template>
  <div class="pageNotFound">
    <div class="error">404</div>
    <div class="message">
      <p>This page is not found</p>
      <p>Go to the <router-link to="/" class="link">main page</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
}
</script>

<style scoped>
.pageNotFound{
  width: 100%;
  margin: 50px auto;
}
.error{
  margin-bottom: 20px;
  font-size: 56px;
  text-align: center;
  color: #0d61ff;
}
.message{
  font-size: 38px;
  text-align: center;
}
p:first-child{
  margin-bottom: 10px;
}
.link{
  color: #0d61ff;
}
</style>