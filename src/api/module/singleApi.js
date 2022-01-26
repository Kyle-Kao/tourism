import { get } from '@/api/index.js';

export function getAll(){
  return get('/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON')
}

// 取得特定城市景點資訊
export function getSingleCity(city){
  return get(`/MOTC/v2/Tourism/ScenicSpot/${city}?%24top=24&%24format=JSON`)
}

// 取得特定城市餐飲資訊
export function getSingleRestaurant(city){
  return get(`/MOTC/v2/Tourism/Restaurant/${city}?%24top=24&%24format=JSON`)
}

// 取得特定城市旅宿資訊
export function getSingleHotel(city){
  return get(`/MOTC/v2/Tourism/Hotel/${city}?%24top=24&%24format=JSON`)
}

// 取得特定城市活動資訊
export function getSingleActivity(city){
  return get(`/MOTC/v2/Tourism/Activity/${city}?%24top=24&%24format=JSON`)
}