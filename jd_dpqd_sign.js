/*
活动名称：批量店铺签到
活动链接：https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=<token>
环境变量：jd_dpqd_tokens // 活动令牌，多个用英文逗号分割
        jd_dpqd_task_threads // 控制签到并发线程数（正整数），默认1
        jd_dpqd_account_threads // 控制账号并发线程数（正整数），默认1
        jd_dpqd_account_interval // 自定义运行间隔时长（整数，单位毫秒），默认0
        jd_dpqd_max_retry // 签到火爆时的最大重试次数（整数），默认0
        jd_dpqd_prize_notify // 是否推送中奖信息（true/false），默认不推送

此脚本为高并发签到本，需要读取主脚本生成的活动信息缓存，自动过滤无效活动

58 59 23 * * * jd_dpqd_sign.js

*/

const $ = new Env('批量店铺签到')
const jdCookie = require('./jdCookie')
const notify = require('./function/sendJDNotify')
const common = require('./function/jdCommon')
const { H5st, jsTk } = require('./function/jdCrypto')

let tokensList = (process.env.jd_dpqd_tokens || "").split(/,|@|&/) || [],
  taskThreads = process.env.jd_dpqd_task_threads || "1",
  accountThreads = process.env.jd_dpqd_account_threads || "1";
const runInterval = process.env.jd_dpqd_account_interval || "";
let signHotMaxRetryTimes = process.env.jd_dpqd_max_retry || "0";
const isNotify = process.env.jd_dpqd_prize_notify === "true";
let TokensMap = new Map();
const signStatusMessages = {
    403030023: "今日已签",
    407100001: "活动尚未开始",
    407100002: "活动已经结束",
    407000007: "账号无效",
    402: "活动无效",
    "-1": "服务器繁忙"
  },
  invalidTokensMap = new Map(),
  CacheFile = __dirname + "/rs_dpqd_tokens.json",
  cookiesArr = Object.keys(jdCookie).map(II1l1lli => jdCookie[II1l1lli]).filter(iI1l1ill => iI1l1ill);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  try {
    notify.config({
      "title": $.name
    });
    if (tokensList.length > 0) tokensList = [...new Set(tokensList.filter(lliIllII => lliIllII !== ""))];
    if (tokensList.length <= 0) {
      console.log("⚠ 请先定义必要的环境变量后再运行脚本！");
      return;
    }
    const i1IIlII = require("fs");
    if (i1IIlII.existsSync(CacheFile)) {
      const lIl1ilil = i1IIlII.readFileSync(CacheFile, "utf-8"),
        lIl11iil = JSON.parse(lIl1ilil);
      for (const iiiiliil in lIl11iil) {
        TokensMap.set(iiiiliil, lIl11iil[iiiiliil]);
      }
    }
    $.waitTime = null;
    if (runInterval) {
      try {
        {
          const iliiiIiI = parseInt(runInterval);
          iliiiIiI > 0 && ($.waitTime = iliiiIiI);
        }
      } catch {
        console.log("⚠ 自定义运行间隔时长设置错误");
      }
    }
    try {
      {
        const IiIIIIll = parseInt(signHotMaxRetryTimes);
        signHotMaxRetryTimes = IiIIIIll > 0 ? IiIIIIll : 0;
      }
    } catch {
      signHotMaxRetryTimes = 3;
    }
    try {
      const l1ilIIi = parseInt(taskThreads);
      l1ilIIi > 0 && l1ilIIi !== 1 && (taskThreads = l1ilIIi);
    } catch {
      taskThreads = 1;
    }
    try {
      const llliIiI = parseInt(accountThreads);
      if (llliIiI > 0 && llliIiI !== 1) {
        accountThreads = llliIiI;
      }
    } catch {
      accountThreads = 1;
    }
    await common.concTask(accountThreads, cookiesArr, async (I1i1III, l1li1ii1) => {
      await concMain(taskThreads, tokensList, I1i1III, l1li1ii1, Main);
      if ($.waitTime) $.wait($.waitTime);
    });
    isNotify && notify.getMessage() && (notify.updateContent(notify.content), await notify.push());
  } catch (iIliiiIl) {
    console.log("❌ 脚本运行遇到了错误\n" + iIliiiIl);
  }
})().catch(I1iiii => $.logErr(I1iiii)).finally(() => $.done());
async function Main(iiIli11i, liiliI1i) {
  const {
    title: iIli1lI1,
    UA: lIIiiiii,
    cookie: IlIi11i,
    message: IlIilIli,
    jsToken: li1I1lI1
  } = liiliI1i;
  if (invalidTokensMap.get(iiIli11i)) return;
  let IlIi1li = "",
    iIilll1l = "";
  const IiiIIi11 = TokensMap.get(iiIli11i);
  if (IiiIIi11) IlIi1li = IiiIIi11.venderId, iIilll1l = IiiIIi11.activityId;else {
    if (iiIli11i.includes(":")) try {
      const liII1l1l = iiIli11i.split(":");
      iiIli11i = liII1l1l[0];
      iIilll1l = liII1l1l[1];
      IlIi1li = liII1l1l[2];
      TokensMap.set(iiIli11i, {
        "index": null,
        "venderId": IlIi1li,
        "shopName": "",
        "activityId": iIilll1l,
        "startTime": "",
        "endTime": "",
        "isValid": true,
        "rules": [],
        "minLevel": null,
        "maxLevel": null
      });
    } catch (iIll111l) {
      return;
    } else return;
  }
  if (!IlIi1li || !iIilll1l) return;
  const iillII1l = Math.floor(Date.now() / 1000) + "000";
  if (invalidTokensMap.get(iiIli11i)) return;
  let I11li11l = false;
  await l1lliiIi("signCollectGift");
  if ($.waitTime) $.wait($.waitTime);
  if (I11li11l && signHotMaxRetryTimes > 0) {
    {
      let lil1ill = 0;
      while (lil1ill < signHotMaxRetryTimes) {
        if (invalidTokensMap.get(iiIli11i)) return;
        await l1lliiIi("signCollectGift");
        if ($.waitTime) $.wait($.waitTime);
        if (!I11li11l) break;
        lil1ill++;
      }
    }
  }
  function Il111Il1(iiliI1l1, iii1lii) {
    try {
      switch (iiliI1l1) {
        case "signCollectGift":
          if (iii1lii.code === 200 && iii1lii.success === true) {
            const lI11I1l = [];
            if (iii1lii.data && iii1lii.data.length > 0) {
              for (const iI1I1li of iii1lii.data) {
                const l11illli = iI1I1li?.["prizeList"] || [];
                for (const iiiIilIi of l11illli) {
                  {
                    const I1II1lll = iiiIilIi?.["type"],
                      IIiIlII = iiiIilIi?.["discount"];
                    let iIiI1lil = "";
                    switch (I1II1lll) {
                      case 1:
                        iIiI1lil = "优惠券🗑️";
                        break;
                      case 4:
                        iIiI1lil = IIiIlII + "京豆🐶";
                        break;
                      case 6:
                        iIiI1lil = IIiIlII + "店铺积分🎟️";
                        break;
                      case 9:
                        iIiI1lil = iiiIilIi?.["interactPrizeSkuList"][0]?.["skuName"] + "🎁";
                        break;
                      case 10:
                        iIiI1lil = IIiIlII + "元E卡🎁";
                        break;
                      case 14:
                        iIiI1lil = IIiIlII / 100 + "元红包🧧";
                        break;
                      default:
                        iIiI1lil = "未知奖品（" + I1II1lll + "）";
                    }
                    lI11I1l.push(iIiI1lil);
                  }
                }
              }
            }
            if (lI11I1l.length > 0) {
              {
                console.log("" + iIli1lI1 + iiIli11i + " ➜ ✅ 签到成功（" + lI11I1l.join("，") + "）");
                for (const Ilili11i of lI11I1l) {
                  IlIilIli.insert(Ilili11i);
                }
              }
            } else console.log("" + iIli1lI1 + iiIli11i + " ➜ ✅ 签到成功");
            I11li11l = false;
          } else {
            if (iii1lii.code !== 200) {
              const illll1iI = signStatusMessages[iii1lii.code] || iii1lii.code + "|活动太火爆";
              [407100001, 407100002, 402].includes(iii1lii.code) && invalidTokensMap.set(iiIli11i, true);
              console.log("" + iIli1lI1 + iiIli11i + " ➜ ❌ 签到失败（" + illll1iI + "）");
              (iii1lii.code === "-1" || iii1lii.code === -1) && (I11li11l = true);
            } else {
              if (iii1lii.msg) {
                console.log("" + iIli1lI1 + iiIli11i + " ➜ ❌ 签到失败（" + iii1lii.msg + "）");
                if (!signStatusMessages[iii1lii.code]) I11li11l = true;
              } else console.log("" + iIli1lI1 + iiIli11i + " ➜ ❌ 签到失败 - " + JSON.stringify(iii1lii));
            }
          }
          break;
      }
    } catch (iII1l1li) {
      console.log("❌ 未能正确处理 " + iiliI1l1 + " 请求响应 " + (iII1l1li.message || iII1l1li));
    }
  }
  async function l1lliiIi(iI1liiI) {
    let IIi1i1lI = "",
      lilliI1 = null,
      ll1lIII1 = null,
      lilI11 = "GET",
      iI1i11Ii = {},
      IlIillil = {};
    switch (iI1liiI) {
      case "signCollectGift":
        IlIillil = {
          "appId": "4da33",
          "functionId": "interact_center_shopSign_signCollectGift",
          "appid": "interCenter_shopSign",
          "body": {
            "token": iiIli11i,
            "venderId": parseInt(IlIi1li) || "",
            "activityId": parseInt(iIilll1l) || "",
            "type": 56,
            "actionType": 7
          },
          "version": "4.4",
          "ua": lIIiiiii
        };
        iI1i11Ii = await H5st.getH5st(IlIillil);
        IIi1i1lI = "https://api.m.jd.com/api";
        ll1lIII1 = Object.assign({}, iI1i11Ii.paramsData, {
          "jsonp": "jsonp1003"
        });
        break;
    }
    const lilll11 = {
      "t": iillII1l,
      "loginType": "2",
      "x-api-eid-token": li1I1lI1
    };
    if (lilliI1) {
      Object.assign(lilliI1, lilll11);
    }
    ll1lIII1 && Object.assign(ll1lIII1, lilll11);
    const iIIIlIl = {
      "url": IIi1i1lI,
      "method": lilI11,
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "text/plain",
        "Host": "api.m.jd.com",
        "Referer": "https://h5.m.jd.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": lIIiiiii,
        "Cookie": IlIi11i
      },
      "params": ll1lIII1,
      "data": lilliI1,
      "timeout": 30000
    };
    lilI11 === "GET" && (delete iIIIlIl.data, delete iIIIlIl.headers["Content-Type"]);
    const ill1I11I = 3;
    let li1lliil = 0,
      i1l1iiIi = null,
      I1lli1Ii = false;
    while (li1lliil < ill1I11I) {
      const Ili1iliI = await common.request(iIIIlIl);
      if (!Ili1iliI.success) {
        i1l1iiIi = "" + iIli1lI1 + iiIli11i + " ➜ 请求失败（" + Ili1iliI.error + "）🚫";
        li1lliil++;
        continue;
      }
      if (!Ili1iliI.data) {
        i1l1iiIi = "" + iIli1lI1 + iiIli11i + " ➜ 请求失败（无响应数据）🚫";
        li1lliil++;
        continue;
      }
      Il111Il1(iI1liiI, Ili1iliI.data);
      I1lli1Ii = false;
      break;
    }
    if (li1lliil >= ill1I11I) {
      console.log(i1l1iiIi);
      I1lli1Ii && ($.outFlag = true);
    }
  }
}
async function concMain(iIilIlil = 1, llII1i, IIii1Iil, iIi11lll, Illl1II1) {
  const li11Ili1 = llII1i.map(i1l1I11l => i1l1I11l),
    l1llill1 = decodeURIComponent(common.getCookieValue(IIii1Iil, "pt_pin")),
    IilIl11l = "【账号" + iIi11lll + "】" + l1llill1 + "：",
    iIlIilI1 = await common.getLoginStatus(IIii1Iil);
  if (!iIlIilI1 && typeof iIlIilI1 === "boolean") {
    console.log(IilIl11l + "账号无效 🚫");
    return;
  }
  const ll11l1I1 = notify.create(iIi11lll, l1llill1),
    liIllili = common.genUA(l1llill1),
    {
      jsToken: lI1lliiI
    } = await jsTk(liIllili, "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html", {
      "bizId": "SJHT-DPQDH5",
      "v": "3.2.1.0",
      "qs": "token=" + llII1i[0]
    }),
    ill1iiI1 = {
      "cookie": IIii1Iil,
      "index": iIi11lll,
      "title": IilIl11l,
      "UA": liIllili,
      "message": ll11l1I1,
      "jsToken": lI1lliiI
    };
  let lIlIiII1 = 0;
  async function lllII11i(Ii1lli) {
    await Illl1II1(Ii1lli, ill1iiI1);
    lIlIiII1--;
    l1lI1I1i();
  }
  async function l1lI1I1i() {
    while (lIlIiII1 < iIilIlil && li11Ili1.length > 0) {
      {
        const ll1ll1i = li11Ili1.shift();
        lIlIiII1++;
        await lllII11i(ll1ll1i);
      }
    }
  }
  const l11llI1l = Math.min(li11Ili1.length, iIilIlil),
    illIilI1 = [];
  for (let liiI1lil = 0; liiI1lil < l11llI1l; liiI1lil++) {
    const iiiIlil1 = li11Ili1.shift();
    lIlIiII1++;
    illIilI1.push(lllII11i(iiiIlil1));
  }
  await Promise.all(illIilI1);
  l1lI1I1i();
  await new Promise(iI1Ill11 => {
    const i1i1iI1i = setInterval(() => {
      lIlIiII1 === 0 && (clearInterval(i1i1iI1i), iI1Ill11());
    }, 100);
  });
}

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
