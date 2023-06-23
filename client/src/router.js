import { createRouter, createWebHistory } from 'vue-router'
import ListOfTasks from './components/ListOfTasks.vue'
import CreateButton from './components/CreateButton.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Update from './components/Update.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main page',
            component: ListOfTasks
        },
        {
            path: '/task',
            name: 'create task',
            component: CreateButton
        },
        {
            path: '/login',
            name: 'login screen',
            component: Login
        },
        {
            path: '/register',
            name: 'register screen',
            component: Register
        },
        {
            path: '/update/:taskId',
            name: 'update screen',
            component: Update,
            props: true
        }
    ]
})

export default router