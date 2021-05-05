import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        setUsers: (state, data) => {
            state.users = data
        },
    },
    actions: {
        async getUsers(ctx){
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(resp => {
                    ctx.commit('setUsers', resp.data);
                })
        },
        deleteUser(ctx, user){
            let userList = ctx.state.users
            let index = userList.findIndex(el => el.id === user.id)
            userList.splice(index, 1)
            ctx.commit('setUsers', userList)
        },
        createUser(ctx, user){
            let userList = ctx.state.users
            userList.unshift(user)
            ctx.commit('setUsers', userList)
        }
    },
    getters: {
        getUsers: state  => text => {
            return state.users.filter(el => el.name.includes(text))
        },
        getCurrentUser: state => (id = 1) => {
            return state.users.find(user => user.id == id)
        },
    }
})

export default store