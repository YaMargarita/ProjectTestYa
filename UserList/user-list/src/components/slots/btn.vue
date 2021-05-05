<template>
  <button class="main-btn"><slot>Create user</slot></button>
</template>

<script>
export default {
  name: "slot_btn"
}
</script>

<style scoped>
.main-btn{
  padding: 5px;
  background-color: #fff;
  color: #0d61ff;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  border: 1px solid #0d61ff;
  font-family: inherit;
}
.main-btn:hover{
  background-color: #0d61ff;
  color: #fff;
}
</style>