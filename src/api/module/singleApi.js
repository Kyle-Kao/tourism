import { get } from '@/api/index.js';

export function getAll(){
  return get('/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON')
}

// 取得特定城市景點資訊
export function getSingleCity(city){
  return get(`/MOTC/v2/Tourism/ScenicSpot/${city}?%24top=30&%24format=JSON`)
}