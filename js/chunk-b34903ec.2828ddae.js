(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b34903ec"],{"3f09":function(t,e,a){"use strict";a("6ffa")},"6ffa":function(t,e,a){},8787:function(t,e,a){"use strict";a("b647")},a393:function(t,e,a){"use strict";a.r(e);var c=a("7a23"),s={class:"place"},i={class:"place-container"},r={class:"left"},n={class:"title"},o=["innerHTML"],u=["innerHTML"],l={class:"img"},d=["src","alt"],v=Object(c["g"])("div",{class:"line line-yellow"},null,-1),h=["innerHTML"],p={class:"right"},b=Object(c["g"])("div",{class:"tag"},"其他景點",-1),f={class:"img"},g=["src","alt"],O={class:"info"},y=["innerHTML"],j=["innerHTML"],D=["innerHTML"],m=Object(c["h"])("詳細資訊"),w={class:"btnbox"};function k(t,e,a,k,H,$){var x=Object(c["x"])("Header"),A=Object(c["x"])("router-link"),I=Object(c["x"])("btn-footer");return Object(c["s"])(),Object(c["f"])("div",null,[Object(c["i"])(x),Object(c["g"])("div",s,[Object(c["g"])("div",i,[Object(c["g"])("div",r,[Object(c["g"])("div",n,[Object(c["g"])("h2",{innerHTML:H.datas.ActivityName},null,8,o),H.datas.Class1?(Object(c["s"])(),Object(c["f"])("div",{key:0,class:"stag",innerHTML:H.datas.Class1},null,8,u)):Object(c["e"])("",!0)]),Object(c["g"])("div",l,[Object(c["g"])("img",{src:H.datas.Picture.PictureUrl1?H.datas.Picture.PictureUrl1:"",alt:H.datas.Picture.PictureDescription1?H.datas.Picture.PictureDescription1:"尚未提供"},null,8,d)]),v,Object(c["g"])("div",{class:"txtbox",innerHTML:H.datas.Description},null,8,h)]),Object(c["g"])("div",p,[b,Object(c["g"])("ul",null,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["w"])(t.getActivityDatas,(function(t,e){return Object(c["s"])(),Object(c["f"])("li",{key:e},[Object(c["g"])("div",f,[Object(c["g"])("img",{src:t.Picture.PictureUrl1,alt:t.Picture.PictureDescription1?t.Picture.PictureDescription1:"尚未提供"},null,8,g)]),Object(c["g"])("div",O,[Object(c["g"])("div",{class:"where",innerHTML:t.ActivityName},null,8,y),H.datas.Class1?(Object(c["s"])(),Object(c["f"])("div",{key:0,class:"stag",innerHTML:t.Class1},null,8,j)):Object(c["e"])("",!0),Object(c["g"])("div",{class:"des",innerHTML:t.Address},null,8,D),Object(c["i"])(A,{class:"detail",to:"/activity/"+t.ActivityID},{default:Object(c["D"])((function(){return[m]})),_:2},1032,["to"])])])})),128))]),Object(c["g"])("div",w,[Object(c["g"])("button",{class:"prev",onClick:e[0]||(e[0]=function(t){return $.shown("prev")})},"上一頁"),Object(c["g"])("button",{class:"next",onClick:e[1]||(e[1]=function(t){return $.shown("next")})},"下一頁")])])])]),Object(c["i"])(I)])}var H=a("5530"),$=(a("4de4"),a("d3b7"),a("c259")),x=a("afe9"),A=a("5502"),I={components:{Header:$["a"],BtnFooter:x["a"]},data:function(){return{datas:[],pageType:"prev"}},created:function(){this.showUrl()},computed:Object(H["a"])({},Object(A["c"])("city",["getActivityDatas"])),methods:{showUrl:function(){var t=this;this.getActivityDatas.filter((function(e){var a=t.$route.params.activityname;e.ActivityID.indexOf(a)>-1&&(t.datas=e)}))},shown:function(t){var e=this;this.getActivityDatas.filter((function(a,c,s){var i=e.$route.params.activityname;a.ActivityID.indexOf(i)>-1&&("prev"==t?c>0&&(e.datas=s[c-1],e.$router.push({path:"/activity/"+e.datas.ActivityID})):c<e.getActivityDatas.length-1&&(e.datas=s[c+1],e.$router.push({path:"/activity/"+e.datas.ActivityID})))}))}},watch:{$route:"showUrl"}},P=(a("8787"),a("d959")),T=a.n(P);const M=T()(I,[["render",k]]);e["default"]=M},afe9:function(t,e,a){"use strict";var c=a("7a23"),s={class:"btn-boxM"};function i(t,e,a,i,r,n){return Object(c["s"])(),Object(c["f"])("footer",null,[Object(c["g"])("div",s,[Object(c["g"])("button",{class:"prev",onClick:e[0]||(e[0]=function(e){return n.shown({type:"prev",category:t.getcheckCategory})})},"上一頁"),Object(c["g"])("button",{class:"next",onClick:e[1]||(e[1]=function(e){return n.shown({type:"next",category:t.getcheckCategory})})},"下一頁")])])}var r=a("5530"),n=(a("4de4"),a("d3b7"),a("5502")),o={data:function(){return{datas:[],pageType:"prev"}},created:function(){this.showUrl({category:this.getcheckCategory})},computed:Object(r["a"])({},Object(n["c"])("city",["getRestaurantDatas","getcheckCategory","getPlaceDatas","getHotelDatas","getActivityDatas"])),methods:{showUrl:function(t){var e=this;switch(t.category){case"landscape":this.getPlaceDatas.filter((function(t){var a=e.$route.params.place;t.ScenicSpotID.indexOf(a)>-1&&(e.datas=t)}));break;case"restaurant":this.getRestaurantDatas.filter((function(t){var a=e.$route.params.restaurantname;t.RestaurantID.indexOf(a)>-1&&(e.datas=t)}));break;case"hotel":this.getHotelDatas.filter((function(t){var a=e.$route.params.hotelname;t.HotelID.indexOf(a)>-1&&(e.datas=t)}));break;case"activity":this.getActivityDatas.filter((function(t){var a=e.$route.params.activityname;t.ActivityID.indexOf(a)>-1&&(e.datas=t)}));break}},shown:function(t){var e=this;switch(t.category){case"landscape":this.getPlaceDatas.filter((function(a,c,s){var i=e.$route.params.place;a.ScenicSpotID.indexOf(i)>-1&&("prev"==t.type?c>0&&(e.datas=s[c-1],e.$router.push({path:"/landscape/"+e.datas.ScenicSpotID})):c<e.getPlaceDatas.length-1&&(e.datas=s[c+1],e.$router.push({path:"/landscape/"+e.datas.ScenicSpotID})))}));break;case"restaurant":this.getRestaurantDatas.filter((function(a,c,s){var i=e.$route.params.restaurantname;a.RestaurantID.indexOf(i)>-1&&("prev"==t.type?c>0&&(e.datas=s[c-1],e.$router.push({path:"/restaurant/"+e.datas.RestaurantID})):c<e.getRestaurantDatas.length-1&&(e.datas=s[c+1],e.$router.push({path:"/restaurant/"+e.datas.RestaurantID})))}));break;case"hotel":this.getHotelDatas.filter((function(a,c,s){var i=e.$route.params.hotelname;a.HotelID.indexOf(i)>-1&&("prev"==t.type?c>0&&(e.datas=s[c-1],e.$router.push({path:"/hotel/"+e.datas.HotelID})):c<e.getHotelDatas.length-1&&(e.datas=s[c+1],e.$router.push({path:"/hotel/"+e.datas.HotelID})))}));break;case"activity":this.getActivityDatas.filter((function(a,c,s){var i=e.$route.params.activityname;a.ActivityID.indexOf(i)>-1&&("prev"==t.type?c>0&&(e.datas=s[c-1],e.$router.push({path:"/activity/"+e.datas.ActivityID})):c<e.getActivityDatas.length-1&&(e.datas=s[c+1],e.$router.push({path:"/activity/"+e.datas.ActivityID})))}));break}}},watch:{$route:"showUrl"}},u=(a("3f09"),a("d959")),l=a.n(u);const d=l()(o,[["render",i]]);e["a"]=d},b647:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b34903ec.2828ddae.js.map