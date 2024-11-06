import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/',
            name: 'Home`',
            component: HomeView
        }
    ]
})

export default router;