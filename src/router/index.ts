import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/Auth/Login.vue';
import Expenses from '../views/Expenses.vue';
import Payable from '../views/Payable.vue';
import Receivable from '../views/Receivable.vue';

const routes: Array<RouteRecordRaw> = [  
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/expenses',
    name: 'Expenses',
    component: Expenses
  },
  {
    path: '/payable',
    name: 'Payable',
    component: Payable
  },
  {
    path: '/receivable',
    name: 'Receivable',
    component: Receivable
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;