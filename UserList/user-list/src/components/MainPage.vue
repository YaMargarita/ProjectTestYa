<template>
  <div class="mainPage">
    <div class="loading" v-if="isLoading">
      Loading...
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data(){
    return{
      isLoading: false
    }
  },
  async created() {
    this.isLoading = true
    await this.$store.dispatch('getUsers')
    this.isLoading = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
*{
  font-family: 'Raleway', sans-serif;
}
.mainPage{
  width: 90%;
  margin: 20px auto;
}
.loading{
  font-size: 56px;
  margin-top: 60px;
  color: #0d61ff;
}
</style>