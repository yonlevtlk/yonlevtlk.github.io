import{k as B,r as y,c as o,bz as C,I as c,J as q,N as k,P as i,f as p,M as r}from"./index.662f4498.js";const N={class:"column items-center"},R={class:"col q-pb-md"},$={class:"col"},h=B({__name:"TaskPage",setup(P){const s=y("IN_PROGRESS"),d=[{label:"\u0412 \u0440\u0430\u0431\u043E\u0442\u0435",value:"IN_PROGRESS",default:!0},{label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0435",value:"COMPLETED"}],m=["createdAt","authorUser","status","assignedToUser","requestTitle","approveReject"],{result:f,loading:T,error:v}=o.providers.userTask.getUserCurrentTasks();async function _(u){await n("approve",u)&&o.providers.userTask.approveTask(u.id)}async function E(u){await n("reject",u)&&o.providers.userTask.rejectTask(u.id)}const a=C();async function n(u,e){return new Promise((t,l)=>{a.dialog({html:!0,title:`<b style="text-decoration: underline">${u==="approve"?"\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0442\u044C":"\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C"}</b> \u0437\u0430\u0434\u0430\u0447\u0443?`,message:b(e),ok:{flat:!0,label:"\u0414\u0430",color:"positive"},cancel:{flat:!0,label:"\u041D\u0435\u0442",color:"negative"}}).onOk(()=>{t(!0),a.notify(`\u0417\u0430\u0434\u0430\u0447\u0430 ${u==="approve"?"\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0430":"\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0430"}`)}).onCancel(()=>t(!1))})}function b(u){return`${u.request.requestTypeName} ${u.authorUser.firstName} ${u.authorUser.lastName} <br>
          \u041F\u0435\u0440\u0438\u043E\u0434: ${u.request.payload.dateFrom} - ${u.request.payload.dateTo}<br>
          \u0422\u0438\u043F: ${u.request.payload.isPayable?"\u041E\u043F\u0430\u0447\u0438\u0432\u0430\u0435\u043C\u044B\u0439":"\u0417\u0430 \u0441\u0432\u043E\u0439 \u0441\u0447\u0435\u0442"}`}return(u,e)=>{const t=c("KT-ButtonToggle"),l=c("KT-SmartTable");return q(),k("div",N,[i("div",R,[p(t,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=g=>s.value=g),options:d},null,8,["modelValue"])]),i("div",$,[p(l,{columns:m,result:r(f),loading:r(T),error:r(v),isRowClickable:"",onItemApprove:_,onItemReject:E},null,8,["result","loading","error"])])])}}});export{h as default};
