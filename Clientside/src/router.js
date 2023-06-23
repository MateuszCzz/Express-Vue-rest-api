import { createRouter, createWebHistory } from 'vue-router'
import registrationForm from './components/user/registrationForm.vue'
import loginForm from './components/user/loginForm.vue'
import mainPage from './components/MainPage.vue'
import createCastle from './components/CreateCastle.vue'
import axios from 'axios'
import store from './store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main page',
      component: mainPage,
      meta: { requiresAuth: true } 
    },
    {
        path: '/create',
        name: 'Build new castles',
        component: createCastle,
        meta: { requiresAuth: true } 
      },
    {
      path: '/register',
      name: 'registration',
      component: registrationForm
    },
    {
      path: '/login',
      name: 'login',
      component: loginForm
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      const token = localStorage.getItem('token');
      console.log('Validating token...');
      const response = await axios.post('http://localhost:3000/check-token', { token });

      if (response.data.valid) {
        const { userId, name } = response.data;

        console.log('Token validated. User is authenticated.');
        store.dispatch('updateAuthentication', true);
        store.dispatch('setUserId', userId); 
        next();
      } else {
        console.log('Token invalid. Redirecting to login page.');
        store.dispatch('updateAuthentication', false);
        next('/login');
      }
    } catch (error) {
      console.error('Error validating token:', error);
      store.dispatch('updateAuthentication', false);
      next('/login');
    }
  } else {
    console.log('No authentication required. Proceeding to the route.');
    next();
  }
});


export default router
