<template>
  <div class="allList">
    <div class="allList-menu">
      <div class="search-wrapper">
        <input type="text" class="search-user" placeholder="Search user" v-model="searchUser">
        <i class="fas fa-search search-icon"></i>
      </div>
      <slot_btn class="create-user"
                @click.native="$router.push({ name: 'CreateUser' })">
        <slot>Create user</slot>
      </slot_btn>
    </div>

    <div class="users" v-if="getUsers.length > 0">
      <div class="user" v-for="user in getUsers" :key="user.id">
        <div class="user-item">{{ user.name }}</div>
        <div class="user-item">{{ user.username }}</div>
        <div class="user-item">{{ user.website }}</div>
        <div class="user-item">{{ user.email }}</div>
        <div class="user-btn-wrapper">
          <slot_btn class="detail-btn"
                    @click.native="currentUser(user.id)">
            <slot>Details</slot>
          </slot_btn>
          <i class="fas fa-trash delete-user" @click="deleteUser(user)"></i>
        </div>
      </div>
    </div>

    <div class="emptyList" v-else>There are no users</div>
  </div>
</template>

<script>
import slot_btn from "./slots/btn";
export default {
  components: {
    slot_btn
  },
  name: "AllList",
  data(){
    return{
      searchUser: '',
      users: []
    }
  },
  computed: {
    getUsers(){
      return this.$store.getters.getUsers(this.searchUser)
    }
  },
  methods: {
    currentUser(id){
      this.$router.push({ name: 'User', params: { id } })
    },
    deleteUser(user){
      this.$store.dispatch('deleteUser', user)
    }
  },
}
</script>

<style scoped>
.allList-menu{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search-wrapper{
  position: relative;
}
.search-user{
  padding: 7px;
  padding-right: 35px;
  width: 370px;
  border-radius: 5px;
  border: 1px solid #0d61ff;
  font-family: inherit;
}
.search-icon{
  position: absolute;
  top: 6px;
  right: 7px;
  font-size: 18px;
  color: #0d61ff;
  cursor: pointer;
  padding: 5px;
}
.users{
  margin-top: 50px;
  border: 1px solid #d4d5d8;
  border-radius: 10px;
}
.emptyList{
  margin-top: 50px;
  font-size: 36px;
}
.user{
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #d4d5d8;
  font-size: 20px;
}
.user:last-child{
  margin: 0;
  border: none;
}
.user-item{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 20%;
}
.user-btn-wrapper{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 200px;
  margin-left: auto;
}
.detail-btn{
  border: none;
  margin-right: 30px;
}
.delete-user{
  padding: 7px;
  font-size: 20px;
  color: #0d61ff;
  cursor: pointer;
}



@media (max-width: 1550px) {
  .user-item{
    font-size: 16px;
    padding-right: 10px;
    margin-right: 10px;
  }
  .detail-btn{
    margin-right: 10px;
  }
  .user-btn-wrapper{
    width: 120px;
  }
  .detail-btn{
    font-size: 14px;
  }
  .delete-user{
    font-size: 16px;
  }
}
@media (max-width: 640px) {
  .search-user{
    padding: 5px;
    width: 230px;
  }
}
@media (max-width: 450px) {
  .allList-menu{
    flex-direction: column;
  }
  .search-wrapper{
    width: 100%;
    margin-bottom: 20px;
  }
  .search-user{
    width: 100%;
  }
  .create-user{
    width: 100%;
  }
}
</style>