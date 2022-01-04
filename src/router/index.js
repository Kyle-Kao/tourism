import { createRouter, createWebHistory } from 'vue-router';
// import store from '../store/index.js';
// import store from '../store/city/singleData.js';

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
  },
  {
    path: '/landscape/:place',
    name: 'place',
    component: () => import('../views/place.vue'),
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import('../views/restaurant.vue'),
  },
  {
    path: '/restaurant/:restaurantname',
    name: 'restaurantname',
    component: () => import('../views/restaurantname.vue'),
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('../views/hotel.vue'),
  },
  {
    path: '/hotel/:hotelname',
    name: 'hotelname',
    component: () => import('../views/hotelName.vue'),
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../views/activity.vue'),
  },
  {
    path: '/activity/:activityname',
    name: 'activityname',
    component: () => import('../views/activityName.vue'),
  },
  {
    path: '/:notFound(.*)',
    component: () => import('../views/notfound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//     console.log(to.params.place)
//     store.commit("single/getCity",{city: to.params.place})
//     next()
//   });

export default router;
