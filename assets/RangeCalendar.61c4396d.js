import{e as d,aL as oa,aM as N,t as ra,aJ as ua,al as ia,am as sa,aN as da,r as k,w as $,aO as ca,h as u,s as K,C as va,g as fa,aK as ma,aP as ha,aQ as je,aR as ya,aS as ga,aT as ge,n as Oe,ay as S,G as _a,k as ba,aU as Da,J as Ca,K as xa,L as Ma,P as qa,f as wa,aV as ka,M as Ha}from"./index.662f4498.js";import{Q as Va}from"./QField.533f9238.js";import{d as Ya}from"./quasar-i18n.df545d46.js";function Sa(){const n=new Map;return{getCache:function(y,h){return n[y]===void 0?n[y]=h:n[y]},getCacheWithFn:function(y,h){return n[y]===void 0?n[y]=h():n[y]}}}const Ta=["gregorian","persian"],Fa={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:n=>Ta.includes(n),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},ja=["update:modelValue"];function F(n){return n.year+"/"+N(n.month)+"/"+N(n.day)}function Oa(n,y){const h=d(()=>n.disable!==!0&&n.readonly!==!0),H=d(()=>n.editable===!0?0:-1),M=d(()=>{const v=[];return n.color!==void 0&&v.push(`bg-${n.color}`),n.textColor!==void 0&&v.push(`text-${n.textColor}`),v.join(" ")});function U(){return n.locale!==void 0?{...y.lang.date,...n.locale}:y.lang.date}function g(v){const _=new Date,V=v===!0?null:0;if(n.calendar==="persian"){const A=oa(_);return{year:A.jy,month:A.jm,day:A.jd}}return{year:_.getFullYear(),month:_.getMonth()+1,day:_.getDate(),hour:V,minute:V,second:V,millisecond:V}}return{editable:h,tabindex:H,headerClass:M,getLocale:U,getCurrentDate:g}}const R=20,Ba=["Calendar","Years","Months"],Be=n=>Ba.includes(n),_e=n=>/^-?[\d]+\/[0-1]\d$/.test(n),Q=" \u2014 ";function j(n){return n.year+"/"+N(n.month)}var Ia=ra({name:"QDate",props:{...Fa,...ua,...ia,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:_e},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:_e},navigationMaxYearMonth:{type:String,validator:_e},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Be}},emits:[...ja,"range-start","range-end","navigation"],setup(n,{slots:y,emit:h}){const{proxy:H}=fa(),{$q:M}=H,U=sa(n,M),{getCache:g}=Sa(),{tabindex:v,headerClass:_,getLocale:V,getCurrentDate:A}=Oa(n,M);let G;const Ie=da(n),Re=ma(Ie),le=k(null),O=k(ke()),m=k(V()),$e=d(()=>ke()),Ne=d(()=>V()),Y=d(()=>A()),i=k(He(O.value,m.value)),x=k(n.defaultView),be=M.lang.rtl===!0?"right":"left",X=k(be.value),oe=k(be.value),re=i.value.year,Z=k(re-re%R-(re<0?R:0)),b=k(null),Ae=d(()=>{const e=n.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${n.minimal===!0?"minimal":"standard"}`+(U.value===!0?" q-date--dark q-dark":"")+(n.bordered===!0?" q-date--bordered":"")+(n.square===!0?" q-date--square no-border-radius":"")+(n.flat===!0?" q-date--flat no-shadow":"")+(n.disable===!0?" disabled":n.readonly===!0?" q-date--readonly":"")}),B=d(()=>n.color||"primary"),E=d(()=>n.textColor||"white"),p=d(()=>n.emitImmediately===!0&&n.multiple!==!0&&n.range!==!0),ue=d(()=>Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue!==null&&n.modelValue!==void 0?[n.modelValue]:[]),w=d(()=>ue.value.filter(e=>typeof e=="string").map(e=>ce(e,O.value,m.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),P=d(()=>{const e=a=>ce(a,O.value,m.value);return ue.value.filter(a=>ha(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:e(a.from),to:e(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ee=d(()=>n.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const a=je(e.year,e.month,e.day);return new Date(a.gy,a.gm-1,a.gd)}),ie=d(()=>n.calendar==="persian"?F:(e,a,t)=>ya(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),a===void 0?O.value:a,t===void 0?m.value:t,e.year,e.timezoneOffset)),z=d(()=>w.value.length+P.value.reduce((e,a)=>e+1+ga(ee.value(a.to),ee.value(a.from)),0)),De=d(()=>{if(n.title!==void 0&&n.title!==null&&n.title.length>0)return n.title;if(b.value!==null){const t=b.value.init,o=ee.value(t);return m.value.daysShort[o.getDay()]+", "+m.value.monthsShort[t.month-1]+" "+t.day+Q+"?"}if(z.value===0)return Q;if(z.value>1)return`${z.value} ${m.value.pluralDay}`;const e=w.value[0],a=ee.value(e);return isNaN(a.valueOf())===!0?Q:m.value.headerTitle!==void 0?m.value.headerTitle(a,e):m.value.daysShort[a.getDay()]+", "+m.value.monthsShort[e.month-1]+" "+e.day}),Ee=d(()=>w.value.concat(P.value.map(a=>a.from)).sort((a,t)=>a.year-t.year||a.month-t.month)[0]),Pe=d(()=>w.value.concat(P.value.map(a=>a.to)).sort((a,t)=>t.year-a.year||t.month-a.month)[0]),Ce=d(()=>{if(n.subtitle!==void 0&&n.subtitle!==null&&n.subtitle.length>0)return n.subtitle;if(z.value===0)return Q;if(z.value>1){const e=Ee.value,a=Pe.value,t=m.value.monthsShort;return t[e.month-1]+(e.year!==a.year?" "+e.year+Q+t[a.month-1]+" ":e.month!==a.month?Q+t[a.month-1]:"")+" "+a.year}return w.value[0].year}),ae=d(()=>{const e=[M.iconSet.datetime.arrowLeft,M.iconSet.datetime.arrowRight];return M.lang.rtl===!0?e.reverse():e}),xe=d(()=>n.firstDayOfWeek!==void 0?Number(n.firstDayOfWeek):m.value.firstDayOfWeek),Le=d(()=>{const e=m.value.daysShort,a=xe.value;return a>0?e.slice(a,7).concat(e.slice(0,a)):e}),T=d(()=>{const e=i.value;return n.calendar!=="persian"?new Date(e.year,e.month,0).getDate():ge(e.year,e.month)}),We=d(()=>typeof n.eventColor=="function"?n.eventColor:()=>n.eventColor),D=d(()=>{if(n.navigationMinYearMonth===void 0)return null;const e=n.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),C=d(()=>{if(n.navigationMaxYearMonth===void 0)return null;const e=n.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),se=d(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return D.value!==null&&D.value.year>=i.value.year&&(e.year.prev=!1,D.value.year===i.value.year&&D.value.month>=i.value.month&&(e.month.prev=!1)),C.value!==null&&C.value.year<=i.value.year&&(e.year.next=!1,C.value.year===i.value.year&&C.value.month<=i.value.month&&(e.month.next=!1)),e}),te=d(()=>{const e={};return w.value.forEach(a=>{const t=j(a);e[t]===void 0&&(e[t]=[]),e[t].push(a.day)}),e}),Me=d(()=>{const e={};return P.value.forEach(a=>{const t=j(a.from),o=j(a.to);if(e[t]===void 0&&(e[t]=[]),e[t].push({from:a.from.day,to:t===o?a.to.day:void 0,range:a}),t<o){let l;const{year:c,month:r}=a.from,s=r<12?{year:c,month:r+1}:{year:c+1,month:1};for(;(l=j(s))<=o;)e[l]===void 0&&(e[l]=[]),e[l].push({from:void 0,to:l===o?a.to.day:void 0,range:a}),s.month++,s.month>12&&(s.year++,s.month=1)}}),e}),J=d(()=>{if(b.value===null)return;const{init:e,initHash:a,final:t,finalHash:o}=b.value,[l,c]=a<=o?[e,t]:[t,e],r=j(l),s=j(c);if(r!==q.value&&s!==q.value)return;const f={};return r===q.value?(f.from=l.day,f.includeFrom=!0):f.from=1,s===q.value?(f.to=c.day,f.includeTo=!0):f.to=T.value,f}),q=d(()=>j(i.value)),Qe=d(()=>{const e={};if(n.options===void 0){for(let t=1;t<=T.value;t++)e[t]=!0;return e}const a=typeof n.options=="function"?n.options:t=>n.options.includes(t);for(let t=1;t<=T.value;t++){const o=q.value+"/"+N(t);e[t]=a(o)}return e}),Ue=d(()=>{const e={};if(n.events===void 0)for(let a=1;a<=T.value;a++)e[a]=!1;else{const a=typeof n.events=="function"?n.events:t=>n.events.includes(t);for(let t=1;t<=T.value;t++){const o=q.value+"/"+N(t);e[t]=a(o)===!0&&We.value(o)}}return e}),ze=d(()=>{let e,a;const{year:t,month:o}=i.value;if(n.calendar!=="persian")e=new Date(t,o-1,1),a=new Date(t,o-1,0).getDate();else{const l=je(t,o,1);e=new Date(l.gy,l.gm-1,l.gd);let c=o-1,r=t;c===0&&(c=12,r--),a=ge(r,c)}return{days:e.getDay()-xe.value-1,endDay:a}}),qe=d(()=>{const e=[],{days:a,endDay:t}=ze.value,o=a<0?a+7:a;if(o<6)for(let r=t-o;r<=t;r++)e.push({i:r,fill:!0});const l=e.length;for(let r=1;r<=T.value;r++){const s={i:r,event:Ue.value[r],classes:[]};Qe.value[r]===!0&&(s.in=!0,s.flat=!0),e.push(s)}if(te.value[q.value]!==void 0&&te.value[q.value].forEach(r=>{const s=l+r-1;Object.assign(e[s],{selected:!0,unelevated:!0,flat:!1,color:B.value,textColor:E.value})}),Me.value[q.value]!==void 0&&Me.value[q.value].forEach(r=>{if(r.from!==void 0){const s=l+r.from-1,f=l+(r.to||T.value)-1;for(let ye=s;ye<=f;ye++)Object.assign(e[ye],{range:r.range,unelevated:!0,color:B.value,textColor:E.value});Object.assign(e[s],{rangeFrom:!0,flat:!1}),r.to!==void 0&&Object.assign(e[f],{rangeTo:!0,flat:!1})}else if(r.to!==void 0){const s=l+r.to-1;for(let f=l;f<=s;f++)Object.assign(e[f],{range:r.range,unelevated:!0,color:B.value,textColor:E.value});Object.assign(e[s],{flat:!1,rangeTo:!0})}else{const s=l+T.value-1;for(let f=l;f<=s;f++)Object.assign(e[f],{range:r.range,unelevated:!0,color:B.value,textColor:E.value})}}),J.value!==void 0){const r=l+J.value.from-1,s=l+J.value.to-1;for(let f=r;f<=s;f++)e[f].color=B.value,e[f].editRange=!0;J.value.includeFrom===!0&&(e[r].editRangeFrom=!0),J.value.includeTo===!0&&(e[s].editRangeTo=!0)}i.value.year===Y.value.year&&i.value.month===Y.value.month&&(e[l+Y.value.day-1].today=!0);const c=e.length%7;if(c>0){const r=7-c;for(let s=1;s<=r;s++)e.push({i:s,fill:!0})}return e.forEach(r=>{let s="q-date__calendar-item ";r.fill===!0?s+="q-date__calendar-item--fill":(s+=`q-date__calendar-item--${r.in===!0?"in":"out"}`,r.range!==void 0&&(s+=` q-date__range${r.rangeTo===!0?"-to":r.rangeFrom===!0?"-from":""}`),r.editRange===!0&&(s+=` q-date__edit-range${r.editRangeFrom===!0?"-from":""}${r.editRangeTo===!0?"-to":""}`),(r.range!==void 0||r.editRange===!0)&&(s+=` text-${r.color}`)),r.classes=s}),e}),Je=d(()=>n.disable===!0?{"aria-disabled":"true"}:n.readonly===!0?{"aria-readonly":"true"}:{});$(()=>n.modelValue,e=>{if(G===e)G=0;else{const{year:a,month:t}=He(O.value,m.value);L(a,t)}}),$(x,()=>{le.value!==null&&le.value.focus()}),$(()=>i.value.year,e=>{h("navigation",{year:e,month:i.value.month})}),$(()=>i.value.month,e=>{h("navigation",{year:i.value.year,month:e})}),$($e,e=>{Fe(e,m.value,"mask"),O.value=e}),$(Ne,e=>{Fe(O.value,e,"locale"),m.value=e});function we(){const e=Y.value,a=te.value[j(e)];(a===void 0||a.includes(e.day)===!1)&&fe(e),de(e.year,e.month)}function Ke(e){Be(e)===!0&&(x.value=e)}function Ge(e,a){["month","year"].includes(e)&&(e==="month"?Ye:ve)(a===!0?-1:1)}function de(e,a){x.value="Calendar",L(e,a)}function Xe(e,a){if(n.range===!1||!e){b.value=null;return}const t=Object.assign({...i.value},e),o=a!==void 0?Object.assign({...i.value},a):t;b.value={init:t,initHash:F(t),final:o,finalHash:F(o)},de(t.year,t.month)}function ke(){return n.calendar==="persian"?"YYYY/MM/DD":n.mask}function ce(e,a,t){return ca(e,a,t,n.calendar,{hour:0,minute:0,second:0,millisecond:0})}function He(e,a){const t=Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue?[n.modelValue]:[];if(t.length===0)return Ve();const o=t[t.length-1],l=ce(o.from!==void 0?o.from:o,e,a);return l.dateHash===null?Ve():l}function Ve(){let e,a;if(n.defaultYearMonth!==void 0){const t=n.defaultYearMonth.split("/");e=parseInt(t[0],10),a=parseInt(t[1],10)}else{const t=Y.value!==void 0?Y.value:A();e=t.year,a=t.month}return{year:e,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+N(a)+"/01"}}function Ye(e){let a=i.value.year,t=Number(i.value.month)+e;t===13?(t=1,a++):t===0&&(t=12,a--),L(a,t),p.value===!0&&ne("month")}function ve(e){const a=Number(i.value.year)+e;L(a,i.value.month),p.value===!0&&ne("year")}function Ze(e){L(e,i.value.month),x.value=n.defaultView==="Years"?"Months":"Calendar",p.value===!0&&ne("year")}function pe(e){L(i.value.year,e),x.value="Calendar",p.value===!0&&ne("month")}function ea(e,a){const t=te.value[a];(t!==void 0&&t.includes(e.day)===!0?me:fe)(e)}function I(e){return{year:e.year,month:e.month,day:e.day}}function L(e,a){D.value!==null&&e<=D.value.year&&(e=D.value.year,a<D.value.month&&(a=D.value.month)),C.value!==null&&e>=C.value.year&&(e=C.value.year,a>C.value.month&&(a=C.value.month));const t=e+"/"+N(a)+"/01";t!==i.value.dateHash&&(X.value=i.value.dateHash<t==(M.lang.rtl!==!0)?"left":"right",e!==i.value.year&&(oe.value=X.value),Oe(()=>{Z.value=e-e%R-(e<0?R:0),Object.assign(i.value,{year:e,month:a,day:1,dateHash:t})}))}function Se(e,a,t){const o=e!==null&&e.length===1&&n.multiple===!1?e[0]:e;G=o;const{reason:l,details:c}=Te(a,t);h("update:modelValue",o,l,c)}function ne(e){const a=w.value[0]!==void 0&&w.value[0].dateHash!==null?{...w.value[0]}:{...i.value};Oe(()=>{a.year=i.value.year,a.month=i.value.month;const t=n.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ge(a.year,a.month);a.day=Math.min(Math.max(1,a.day),t);const o=W(a);G=o;const{details:l}=Te("",a);h("update:modelValue",o,e,l)})}function Te(e,a){return a.from!==void 0?{reason:`${e}-range`,details:{...I(a.target),from:I(a.from),to:I(a.to)}}:{reason:`${e}-day`,details:I(a)}}function W(e,a,t){return e.from!==void 0?{from:ie.value(e.from,a,t),to:ie.value(e.to,a,t)}:ie.value(e,a,t)}function fe(e){let a;if(n.multiple===!0)if(e.from!==void 0){const t=F(e.from),o=F(e.to),l=w.value.filter(r=>r.dateHash<t||r.dateHash>o),c=P.value.filter(({from:r,to:s})=>s.dateHash<t||r.dateHash>o);a=l.concat(c).concat(e).map(r=>W(r))}else{const t=ue.value.slice();t.push(W(e)),a=t}else a=W(e);Se(a,"add",e)}function me(e){if(n.noUnset===!0)return;let a=null;if(n.multiple===!0&&Array.isArray(n.modelValue)===!0){const t=W(e);e.from!==void 0?a=n.modelValue.filter(o=>o.from!==void 0?o.from!==t.from&&o.to!==t.to:!0):a=n.modelValue.filter(o=>o!==t),a.length===0&&(a=null)}Se(a,"remove",e)}function Fe(e,a,t){const o=w.value.concat(P.value).map(l=>W(l,e,a)).filter(l=>l.from!==void 0?l.from.dateHash!==null&&l.to.dateHash!==null:l.dateHash!==null);h("update:modelValue",(n.multiple===!0?o:o[0])||null,t)}Object.assign(H,{setToday:we,setView:Ke,offsetCalendar:Ge,setCalendarTo:de,setEditingRange:Xe});function aa(){if(n.minimal!==!0)return u("div",{class:"q-date__header "+_.value},[u("div",{class:"relative-position"},[u(K,{name:"q-transition--fade"},()=>u("div",{key:"h-yr-"+Ce.value,class:"q-date__header-subtitle q-date__header-link "+(x.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:v.value,...g("vY",{onClick(){x.value="Years"},onKeyup(e){e.keyCode===13&&(x.value="Years")}})},[Ce.value]))]),u("div",{class:"q-date__header-title relative-position flex no-wrap"},[u("div",{class:"relative-position col"},[u(K,{name:"q-transition--fade"},()=>u("div",{key:"h-sub"+De.value,class:"q-date__header-title-label q-date__header-link "+(x.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:v.value,...g("vC",{onClick(){x.value="Calendar"},onKeyup(e){e.keyCode===13&&(x.value="Calendar")}})},[De.value]))]),n.todayBtn===!0?u(S,{class:"q-date__header-today self-start",icon:M.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:v.value,onClick:we}):null])])}function he({label:e,type:a,key:t,dir:o,goTo:l,boundaries:c,cls:r}){return[u("div",{class:"row items-center q-date__arrow"},[u(S,{round:!0,dense:!0,size:"sm",flat:!0,icon:ae.value[0],tabindex:v.value,disable:c.prev===!1,...g("go-#"+a,{onClick(){l(-1)}})})]),u("div",{class:"relative-position overflow-hidden flex flex-center"+r},[u(K,{name:"q-transition--jump-"+o},()=>u("div",{key:t},[u(S,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:v.value,...g("view#"+a,{onClick:()=>{x.value=a}})})]))]),u("div",{class:"row items-center q-date__arrow"},[u(S,{round:!0,dense:!0,size:"sm",flat:!0,icon:ae.value[1],tabindex:v.value,disable:c.next===!1,...g("go+#"+a,{onClick(){l(1)}})})])]}const ta={Calendar:()=>[u("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[u("div",{class:"q-date__navigation row items-center no-wrap"},he({label:m.value.months[i.value.month-1],type:"Months",key:i.value.month,dir:X.value,goTo:Ye,boundaries:se.value.month,cls:" col"}).concat(he({label:i.value.year,type:"Years",key:i.value.year,dir:oe.value,goTo:ve,boundaries:se.value.year,cls:""}))),u("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},Le.value.map(e=>u("div",{class:"q-date__calendar-item"},[u("div",e)]))),u("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[u(K,{name:"q-transition--slide-"+X.value},()=>u("div",{key:q.value,class:"q-date__calendar-days fit"},qe.value.map(e=>u("div",{class:e.classes},[e.in===!0?u(S,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:v.value,...g("day#"+e.i,{onClick:()=>{na(e.i)},onMouseover:()=>{la(e.i)}})},e.event!==!1?()=>u("div",{class:"q-date__event bg-"+e.event}):null):u("div",""+e.i)]))))])])],Months(){const e=i.value.year===Y.value.year,a=o=>D.value!==null&&i.value.year===D.value.year&&D.value.month>o||C.value!==null&&i.value.year===C.value.year&&C.value.month<o,t=m.value.monthsShort.map((o,l)=>{const c=i.value.month===l+1;return u("div",{class:"q-date__months-item flex flex-center"},[u(S,{class:e===!0&&Y.value.month===l+1?"q-date__today":null,flat:c!==!0,label:o,unelevated:c,color:c===!0?B.value:null,textColor:c===!0?E.value:null,tabindex:v.value,disable:a(l+1),...g("month#"+l,{onClick:()=>{pe(l+1)}})})])});return n.yearsInMonthView===!0&&t.unshift(u("div",{class:"row no-wrap full-width"},[he({label:i.value.year,type:"Years",key:i.value.year,dir:oe.value,goTo:ve,boundaries:se.value.year,cls:" col"})])),u("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},t)},Years(){const e=Z.value,a=e+R,t=[],o=l=>D.value!==null&&D.value.year>l||C.value!==null&&C.value.year<l;for(let l=e;l<=a;l++){const c=i.value.year===l;t.push(u("div",{class:"q-date__years-item flex flex-center"},[u(S,{key:"yr"+l,class:Y.value.year===l?"q-date__today":null,flat:!c,label:l,dense:!0,unelevated:c,color:c===!0?B.value:null,textColor:c===!0?E.value:null,tabindex:v.value,disable:o(l),...g("yr#"+l,{onClick:()=>{Ze(l)}})})]))}return u("div",{class:"q-date__view q-date__years flex flex-center"},[u("div",{class:"col-auto"},[u(S,{round:!0,dense:!0,flat:!0,icon:ae.value[0],tabindex:v.value,disable:o(e),...g("y-",{onClick:()=>{Z.value-=R}})})]),u("div",{class:"q-date__years-content col self-stretch row items-center"},t),u("div",{class:"col-auto"},[u(S,{round:!0,dense:!0,flat:!0,icon:ae.value[1],tabindex:v.value,disable:o(a),...g("y+",{onClick:()=>{Z.value+=R}})})])])}};function na(e){const a={...i.value,day:e};if(n.range===!1){ea(a,q.value);return}if(b.value===null){const t=qe.value.find(l=>l.fill!==!0&&l.i===e);if(n.noUnset!==!0&&t.range!==void 0){me({target:a,from:t.range.from,to:t.range.to});return}if(t.selected===!0){me(a);return}const o=F(a);b.value={init:a,initHash:o,final:a,finalHash:o},h("range-start",I(a))}else{const t=b.value.initHash,o=F(a),l=t<=o?{from:b.value.init,to:a}:{from:a,to:b.value.init};b.value=null,fe(t===o?a:{target:a,...l}),h("range-end",{from:I(l.from),to:I(l.to)})}}function la(e){if(b.value!==null){const a={...i.value,day:e};Object.assign(b.value,{final:a,finalHash:F(a)})}}return()=>{const e=[u("div",{class:"q-date__content col relative-position"},[u(K,{name:"q-transition--fade"},ta[x.value])])],a=va(y.default);return a!==void 0&&e.push(u("div",{class:"q-date__actions"},a)),n.name!==void 0&&n.disable!==!0&&Re(e,"push"),u("div",{class:Ae.value,...Je.value},[aa(),u("div",{ref:le,class:"q-date__main col column",tabindex:-1},e)])}}});const Ra={class:"kt-calendar"},$a=ba({__name:"RangeCalendar",props:{modelValue:null,restrictTo:null},emits:["update:modelValue"],setup(n,{emit:y}){const h=n,H=k("");$(H,v=>{if(!v)return;let _=null;typeof v=="string"||v instanceof String?_={dateFrom:v,dateTo:v}:_={dateFrom:v.from,dateTo:v.to},y("update:modelValue",_)});const M={options:U()};function U(){if(h.restrictTo)return function(v){return Da.getDateDiff(v,Date.now())>=h.restrictTo}}function g(){return H.value==""?"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438\u043B\u0438 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0434\u0430\u0442":!0}return(v,_)=>(Ca(),xa(Va,{"stack-label":"",rules:[g],"no-error-icon":"","hide-bottom-space":!0,"bottom-slots":!0},{default:Ma(()=>[qa("div",Ra,[wa(Ia,ka({modelValue:H.value,"onUpdate:modelValue":_[0]||(_[0]=V=>H.value=V),locale:Ha(Ya),"today-btn":"","first-day-of-week":"1",range:""},M),null,16,["modelValue","locale"])])]),_:1},8,["rules"]))}});var Pa=_a($a,[["__scopeId","data-v-e8d0507a"]]);export{Pa as default};
