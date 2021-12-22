import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/firstSelect.vue'),
  },
  {
    path: '/landscape',
    name: 'landscape',
    component: () => import('../views/landScape.vue'),
    children: [
      {
        path: ':place',
        name: 'place',
        component: () => import('../views/place.vue'),
      },
    ],
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('../views/food.vue'),
  },
  {
    path: '/lodging',
    name: 'lodging',
    component: () => import('../views/lodGing.vue'),
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../views/activity.vue'),
  },
  { path: '/:notFound(.*)', 
    component: () => import('../views/notfound.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
