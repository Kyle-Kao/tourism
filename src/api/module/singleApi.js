import { get } from '@/api/index.js';
//  此處可以export多個funtion，看要取要哪一些，也可以拉出去變成一支js檔，可以分的更清楚
//  管理api，一支api寫成一支Function，並語意化命名
export function getAll(){
  return get('/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON')
}

export function getXXXX(){
  //  第二個參數丟所需參數
  return get('something',{})
}