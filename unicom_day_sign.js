

const $ = new Env('联通每日签到');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const unicomCookieNode = $.isNode() ? require('./unicomCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;

if ($.isNode()) {
  Object.keys(unicomCookieNode).forEach((item) => {
    cookiesArr.push(unicomCookieNode[item])
  })
  
  
}else{
	console.log(`\n不支持该环境\n`); 
	return false;
}

!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取联通账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  
	
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/u_account=(.+?);/) && cookie.match(/u_account=(.+?);/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      message = '';
      await TotalBean();
      console.log(`\n******开始【联通账号 ${$.index}】${$.nickName || $.UserName}*********\n`);
      if ( !$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
	  //签到
	  await signinDaySign();
	  await $.wait(1000);
	  //积分
	  await getIntegral();
	  await $.wait(1000);
	  //红包
	  await getConvertTelephone();
	  await $.wait(1000);
	  //签到天数
	  await signinGetContinuous();
	  await $.wait(1000);
      //await signinGetContinuous();
	  //await showMsg()
      //if(i  <1 ) {await showMsg()}
	  if(  i <  cookiesArr.length){
		console.log(`休息120秒`)
		await $.wait(1000*120);   
	  }
	   
    }
  }
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })
  
  
//查询气泡 
//https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask

//获取积分
//URL: https://act.10010.com/SigninApp/signin/getIntegral

//话费红包
//https://act.10010.com/SigninApp/convert/getTelephone

//
//https://act.10010.com/SigninApp/convert/signboard

//签到日历
//https://act.10010.com/SigninApp/signin/getContinuous

//签到
//https://act.10010.com/SigninApp/signin/daySign



async function getTask( ) {

	let url = 'https://act.10010.com/SigninApp/superSimpleTask/getTask';
	let body = 'shareCl=&shareCode=';
	$.post(taskUrl(url, body, cookie ), async (err, resp, data) => {
    try {
      if (err) {
        console.log(`${JSON.stringify(err)}`)
        console.log(`orderReward API请求失败，请检查网路重试`)
      } else {
	console.log(`${data}`)
        if (safeGet(data)) {
			
          data = JSON.parse(data);
          if (data.status === '0000') {
			  
				for (var detail of data.data) {
					$.details = detail.taskMsg
					for (var item of $.details) {
						//任务类型 9=看视频得话费红包
						if( item.taskType == '9'  ){
							if (item.achieve >= item.allocation) {
								console.log( `:${item.title} 已完成`)
							}else{
								
								
							}
							
						}

						if (item.achieve >= item.allocation) {

						  //console.log( `:检测到【下单领红包】有奖励可领取，开始领取奖励`)
						  //await orderReward(item.orderQty, cookie);
						  //await $.wait(2000)
						} else if (item.status === 1) {
						  console.log( `:【下单领红包】暂无奖励可领取，再下${data.data.needOrderQty}单可领取${data.data.rewardAmount}元`)
						  break
						}
					  }
					
				}
				
		  }else if (data.status === '0002') {
			console.log( `当前积分：${data.msg}`)
          } else {
            console.log( `其他情况：${JSON.stringify(data)}`)
          }
        }
      }
    } catch (e) {
      $.logErr(e, resp)
    }
  })
  
  
  
  
}



async function getConvertTelephone(  ) {

	let url = 'https://act.10010.com/SigninApp/convert/getTelephone';
	$.post(taskUrl(url, '', cookie ), async (err, resp, data) => {
    try {
      if (err) {
        console.log(`${JSON.stringify(err)}`)
        console.log(`orderReward API请求失败，请检查网路重试`)
      } else {
        if (safeGet(data)) {
          data = JSON.parse(data);
          if (data.status === '0000') {
            if (data.data) {
				$.userConvertTelephone = data.data
				
				console.log(`当前话费红包：${$.userConvertTelephone.telephone}`)
            } else {
             
                console.log( `其他情况：${JSON.stringify(data)}`)
           
            }
          } else {
            console.log( `其他情况：${JSON.stringify(data)}`)
          }
        }
      }
    } catch (e) {
      $.logErr(e, resp)
    }
  })
	
}

async function getIntegral(  ) {
	
	let url = 'https://act.10010.com/SigninApp/signin/getIntegral';
	$.post(taskUrl(url, '', cookie ), async (err, resp, data) => {
    try {
      if (err) {
        console.log(`${JSON.stringify(err)}`)
        console.log(`orderReward API请求失败，请检查网路重试`)
      } else {
        if (safeGet(data)) {
          data = JSON.parse(data);
          if (data.status === '0000') {
            if (data.data) {
				$.userIntegral = data.data
				
				console.log( `当前积分：${$.userIntegral.integralTotal}`)
            } else {
             
                console.log( `其他情况：${JSON.stringify(data)}`)
           
            }
          } else {
            console.log( `其他情况：${JSON.stringify(data)}`)
          }
        }
      }
    } catch (e) {
      $.logErr(e, resp)
    }
  })
	
}

async function signinDaySign(  ) {

	let url = 'https://act.10010.com/SigninApp/signin/daySign';
	let body = 'shareCl=&shareCode=';
	$.post(taskUrl(url, body, cookie ), async (err, resp, data) => {
    try {
      if (err) {
        console.log(`${JSON.stringify(err)}`)
        console.log(`orderReward API请求失败，请检查网路重试`)
      } else {
	
        if (safeGet(data)) {
			
          data = JSON.parse(data);
          if (data.status === '0000') {
			   if (data.data) {
				//$.userIntegral = data.data
				
				//console.log( `当前积分：${$.userIntegral.integralTotal}`)
				} else {
				 
					console.log( `其他情况：${JSON.stringify(data)}`)
			   
				}
		  }else if (data.status === '0002') {
			console.log( `${data.msg}`)
          } else {
            console.log( `${JSON.stringify(data)}`)
          }
        }
      }
    } catch (e) {
      $.logErr(e, resp)
    }
  })
	
}

async function convertSignboard(  ) {

	let url = 'https://act.10010.com/SigninApp/convert/signboard';
	let body = 'shareCl=&shareCode=';
	$.post(taskUrl(url, body, cookie ), async (err, resp, data) => {
    try {
      if (err) {
        console.log(`${JSON.stringify(err)}`)
        console.log(`orderReward API请求失败，请检查网路重试`)
      } else {
		console.log(`${data}`)
        if (safeGet(data)) {
			
          data = JSON.parse(data);
          if (data.status === '0000') {
			   if (data.data) {
				//$.userIntegral = data.data
				
				//console.log( `当前积分：${$.userIntegral.integralTotal}`)
				} else {
				 
					console.log( `其他情况：${JSON.stringify(data)}`)
			   
				}
		  }else if (data.status === '0002') {
			console.log( `${data.msg}`)
          } else {
            console.log( `${JSON.stringify(data)}`)
          }
        }
      }
    } catch (e) {
      $.logErr(e, resp)
    }
  })
	
}


async function signinGetContinuous(  ) {
	
	let url = 'https://act.10010.com/SigninApp/signin/getContinuous';
	let body = 'taskId=&channel=&imei=';
	$.post(taskUrl(url, body, cookie ), async (err, resp, data) => {
    try {
      if (err) {
        console.log(`${JSON.stringify(err)}`)
        console.log(`orderReward API请求失败，请检查网路重试`)
      } else {

        if (safeGet(data)) {
          data = JSON.parse(data);
          if (data.status === '0000') {
			    if (data.data) {
					//$.userIntegral = data.data
					let doubleBtn = data.data.doubleBtn
					console.log(`已签到：${doubleBtn.yetDays}，再签到 ${doubleBtn.notDays} 天，领 ${doubleBtn.giftName}\n`)
				

				} else {
				 
					console.log( `其他情况：${JSON.stringify(data)}`)
			   
				}
		  
          } else {
            console.log( `${JSON.stringify(data)}`)
          }
        }
      }
    } catch (e) {
      $.logErr(e, resp)
    }
  })
	
}

function TotalBean() {
	
  return new Promise(resolve => {
    const options = {
      url: "https://act.10010.com/SigninApp/signin/getIntegral",
      headers: {
        'Host': 'act.10010.com',
		'accept': 'application/json, text/plain, */*',
		'content-type': 'application/x-www-form-urlencoded',
		'origin': 'https://img.client.10010.com',
		'accept-language': 'zh-cn',
		'x-requested-with': 'com.sinovatech.unicom.ui',
		'accept-encoding': 'gzip, deflate',
		'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7;',
		
		'user-agent':'Mozilla/5.0 (Linux; Android 9; PCT-AL10 Build/PQ3B.190801.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36; unicom{version:android@10.0400,desmobile:18676017878};devicetype{deviceBrand:HUAWEI,deviceModel:PCT-AL10};{yw_code:}',
		'referer': 'https://img.client.10010.com',
		'Cookie': cookie
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
			//{"msg":"您还没有登录，快去登录吧","status":"0001"}
			
            data = JSON.parse(data);
            if (data.status === '0001') {
              $.isLogin = false; //cookie过期
              return
            }
			$.userIntegral = data.data
			
          } else {
            console.log(`联通服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
	
	
  })
}


function taskUrl(url,body, cookie ) {
  return {
    url: `${url}`,
    headers: {
		'Host': 'act.10010.com',
		'accept': 'application/json, text/plain, */*',
		'content-type': 'application/x-www-form-urlencoded',
		'origin': 'https://img.client.10010.com',
		'accept-language': 'zh-cn',
		'x-requested-with': 'com.sinovatech.unicom.ui',
		'accept-encoding': 'gzip, deflate',
		'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7;',
		
		'user-agent':'Mozilla/5.0 (Linux; Android 9; PCT-AL10 Build/PQ3B.190801.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36; unicom{version:android@10.0400,desmobile:18676017878};devicetype{deviceBrand:HUAWEI,deviceModel:PCT-AL10};{yw_code:}',
		'referer': 'https://img.client.10010.com',
		'Cookie': cookie
	  },
	body: body,
	timeout: 1000*10,
  }
}

async function showMsg() {
  if ($.isNode()) {
    $.msg($.name, '', `【联通账号${$.index}】${$.nickName}\n${message}`);
    await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName}`, `【联通账号${$.index}】${$.nickName}\n${message}`);
  }
}


function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`联通服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}

function randomString(e) {
	e = e || 32;
	let t = "0123456789abcdef",
	a = t.length,
	n = "";
	for (let i = 0; i < e; i++)
		n += t.charAt(Math.floor(Math.random() * a));
	return n
}

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
