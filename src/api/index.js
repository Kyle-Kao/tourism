import axios from "axios";
import JsSHA from "jssha";
const Request = axios.create({
  baseURL: "https://ptx.transportdata.tw",
});

//  加密方法
const GetAuthorizationHeader = () => {
  const AppID = process.env.VUE_APP_ID;
  const AppKey = process.env.VUE_APP_KEY;
  const GMTString = new Date().toGMTString();
  const ShaObj = new JsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update(`x-date: ${GMTString}`);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization, 'X-Date': GMTString };
};

//  封裝get方法
export function get(api,params) {
  console.log(api)
  return new Promise((resolve, reject) => {
    Request.get(api, { headers: GetAuthorizationHeader(),params: params })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
