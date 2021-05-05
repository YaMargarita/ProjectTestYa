<template>
  <div class="createUser">
    <div class="createUser-title">Create new user</div>
    <form class="create-form">
      <slot_btn class="back-btn"
                @click.native.prevent="$router.push({ name: 'AllList' })">
        <slot>Back</slot>
      </slot_btn>

      <input type="text"
             class="input-item"
             v-for="(item, index) in inputs"
             :key="index"
             :placeholder="item.name"
             v-model="user[item.value]">

      <p :class="{errorText : error}" class="error">
        All fields must not be empty!
      </p>

      <slot_btn class="create-btn"
                @click.native.prevent="createUser">
        <slot>Create user</slot>
      </slot_btn>
    </form>
  </div>
</template>

<script>
import slot_btn from './slots/btn'
export default {
  name: "AllList",
  components: {
    slot_btn
  },
  data() {
    return{
      user: {
        id: new Date().valueOf(),
        name: '',
        username: '',
        email: '',
        website: ''
      },
      inputs: [
        {
          name: 'Name',
          value: 'name',
        },
        {
          name: 'Username',
          value: 'username',
        },
        {
          name: 'Email',
          value: 'email',
        },
        {
          name: 'Website',
          value: 'website',
        }
      ]
    }
  },
  computed: {
    error(){
      return (this.user.name !== '' && this.user.username !== '' && this.user.email !==  '' && this.user.website !== '');
    }
  },
  methods: {
    createUser(){
      if (this.error) {
        this.$store.dispatch('createUser', this.user)
        this.$router.push({ name: 'AllList' })
      }
    },
  }
}
</script>

<style scoped>

.createUser{
  width: 550px;
  margin: 0 auto;
}
.createUser-title{
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
}
.back-btn{
  margin-bottom: 20px;
  width: 100px;
}
.create-form{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.input-item{
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #0d61ff;
  font-family: inherit;
}
.input-item:not(:last-child){
  margin-bottom: 30px;
}
.error{
  color: red;
}
.errorText{
  visibility: hidden;
}
.create-btn{
  margin-top: 20px;
  width: 100%;
  font-size: 24px;
}

@media (max-width: 720px) {
  .createUser{
    width: 100%;
  }
  .createUser-title{
    font-size: 30px;
    margin-bottom: 30px;
  }
}
</style>