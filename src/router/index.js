import { createRouter, createWebHistory } from 'vue-router';
// import { getSingleCity, getSingleRestaurant, getSingleHotel, getSingleActivity } from '@/api/module/singleApi.js';
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
    component: () => import('../views/landscape/landScape.vue'),
  },
  {
    path: '/landscape/:place',
    name: 'place',
    component: () => import('../views/landscape/place.vue'),
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import('../views/restaurant/restaurant.vue'),
  },
  {
    path: '/restaurant/:restaurantname',
    name: 'restaurantname',
    component: () => import('../views/restaurant/restaurantname.vue'),
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('../views/hotel/hotel.vue'),
  },
  {
    path: '/hotel/:hotelname',
    name: 'hotelname',
    component: () => import('../views/hotel/hotelName.vue'),
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../views/activity/activity.vue'),
  },
  {
    path: '/activity/:activityname',
    name: 'activityname',
    component: () => import('../views/activity/activityName.vue'),
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

router.beforeEach((to, from, next) => {
  // console.log(to);
  next();
});

export default router;
