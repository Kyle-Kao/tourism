import axios from "axios";
import JsSHA from "jssha";
const Request = axios.create({
  baseURL: "https://ptx.transportdata.tw",
});

//  加密方法
const GetAuthorizationHeader = () => {
  const AppID = 'a5cb54fa7602434e9910b040e236e716';
  const AppKey = 'RAGsoyJTfDxd5zKp1Ckedm8YdMU';
  const GMTString = new Date().toGMTString();
  const ShaObj = new JsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update(`x-date: ${GMTString}`);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization, 'X-Date': GMTString };
};

//  封裝get方法
function get(api,params) {
  return new Promise((resole, reject) => {
    Request.get(api, { headers: GetAuthorizationHeader(),params: params })
      .then((res) => {
        resole(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

//  此處可以export多個funtion，看要取要哪一些，也可以拉出去變成一支js檔，可以分的更清楚
//  管理api，一支api寫成一支Function，並語意化命名
export function getAll(){
  return get('/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON')
}

export function getXXXX(){
  //  第二個參數丟所需參數
  return get('something',{})
}