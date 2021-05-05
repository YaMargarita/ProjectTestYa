<template>
  <div class="user-page" v-if="getCurrentUser">

    <slot_btn class="back-btn"
              @click.native="$router.push({ name: 'AllList' })">
      <slot>Back</slot>
    </slot_btn>

    <div v-for="(item, index) in info" :key="index">
      <div class="row-title">{{ item.title }}</div>
      <div class="info-wrapper">
        <div class="info-item" v-for="(param, index) in item.params" :key="index">
          <div class="info-title">{{ param.title }}</div>
          <div class="info-value" v-if="param.check !==''">{{ getCurrentUser[param.check] ? getCurrentUser[param.check][param.value] : 'no info' }}</div>
          <div class="info-value" v-else>{{ getCurrentUser[param.value] ? getCurrentUser[param.value] : 'no info' }}</div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import slot_btn from './slots/btn'
export default {
  components: {
    slot_btn
  },
  name: "User",
  data(){
    return{
      info: [
        {
          title: 'General information',
          params: [
            {
              title: "Name",
              check: '',
              value: 'name'
            },
            {
              title: "Username",
              check: '',
              value: 'username'
            },
            {
              title: "Email",
              check: '',
              value: 'email'
            }
          ]
        },
        {
          title: 'Address',
          params: [
            {
              title: "City",
              check: 'address',
              value: 'city'
            },
            {
              title: "Street",
              check: 'address',
              value: 'street'
            },
            {
              title: "Apartment",
              check: 'address',
              value: 'suite'
            }
          ]
        },
        {
          title: 'Contact information',
          params: [
            {
              title: "Phone",
              check: '',
              value: 'phone'
            },
            {
              title: "Website",
              check: '',
              value: 'website'
            },
          ]
        }
      ]
    }
  },
  computed: {
    getCurrentUser() {
      const id = this.$route.params.id
      return this.$store.getters.getCurrentUser(id)
    },
  },
  async created() {
     let id = this.$route.params.id
     let user = this.$store.getters.getCurrentUser(id)
     if(!user) await this.$router.push({ name: 'PageNotFound' })
  },
}
</script>


<style scoped>
.user-page{
  padding: 30px;
}
.back-btn{
  margin-top: 30px;
  width: 100px;
}
.row-title{
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 26px;
  color: #0d61ff;
}
.info-wrapper{
  width: 900px;
  display: flex;
  align-items: center;
}
.info-item{
  font-size: 20px;
  width: 30%;
}
.info-title{
  margin-bottom: 10px;
  color: #646464;
}
.info-value{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media (max-width: 910px) {
  .user-page{
    padding: 20px;
  }
  .row-title{
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .info-wrapper{
    flex-direction: column;
    align-items: flex-start;
  }
  .info-item{
    font-size: 28px;
    width: 30%;
  }
  .info-item:not(:last-child){
    margin-bottom: 30px;
  }
}
</style>