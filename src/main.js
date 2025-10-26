import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue'
// router 쓰일 component
import Home from './views/Home.vue'
import About from './views/About.vue'
import UserDetail from './views/UserDetail.vue'
import Users from './views/Users.vue'

// routes 정해 줌. 길을 정함
const routes = [
    { path: '/', component: Home, name:'home'},
    { path: '/about', component: About, name:'about'},
    { path: '/user', component: Users, name:'users'},
    { path: '/user/:id', component: UserDetail, name:'user', props:true },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
