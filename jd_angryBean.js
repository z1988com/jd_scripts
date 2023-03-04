const { reverse } = require('dns');

/*
真·抢京豆
更新时间：2021-7-22
备注：高速并发抢京豆，专治偷助力。设置环境变量angryBeanPins为指定账号助力，默认不助力。
TG学习交流群：https://t.me/cdles
0 0 * * * https://raw.githubusercontent.com/cdle/jd_study/main/jd_angryBean.js
*/
const $ = new Env("真·抢京豆")
const ua = `jdltapp;iPhone;3.1.0;${Math.ceil(Math.random()*4+10)}.${Math.ceil(Math.random()*4)};${randomString(40)}`
var pins = process.env.ANGRY_BEAN_PINS ?? ""
let cookiesArr = []
var helps = [];
var tools = [];
var maxTimes = 3;
var finished = [];
!(async () => {
     if (!pins) {
          console.log("请在环境变量中填写需要助力的账号")
          return
     }
	requireConfig()
	
	//增加额外的 JD_COOKIE 互助
	if ( process.env.OTHER_JD_COOKIE ){
		cookiesArr.unshift(process.env.OTHER_JD_COOKIE ) ;
	}
	
	 
     for (let i in cookiesArr) {
          cookie = cookiesArr[i]
          if (pins.indexOf(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]) != -1) {
               await requestApi('signGroupHit', cookie, {
                    activeType: 2
               });
               var data = await requestApi('signBeanGroupStageIndex', cookie, {
                    rnVersion: "3.9",
                    fp: "-1",
                    shshshfp: "-1",
                    shshshfpa: "-1",
                    referUrl: "-1",
                    userAgent: "-1",
                    jda: "-1",
                    monitor_source: "bean_m_bean_index"
               });
               groupCode = data?.data?.groupCode
               shareCode = data?.data?.shareCode
               activityId = data?.data?.activityMsg?.activityId
               if (shareCode) {
                    helps.push({
                         id: +i,
                         cookie: cookie,
                         groupCode: groupCode,
                         shareCode: shareCode,
                         activityId: activityId,
                         success: false,
                    })
               }
          }
          tools.push({
               id: +i,
               cookie: cookie,
               helps: [],
               times: 0,
               timeout: 0,
          })
     }
     for (let help of helps)
     open(help)
     while (finished.length != helps.length)
     await $.wait(100)
})().catch((e) => {
          $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
     })
     .finally(() => {
          $.done();
     })

function open(help) {
     var tool = tools.pop()
     if (!tool) {
          finished.push(help.id)
          return
     }
     requestApi('signGroupHelp', tool.cookie, {
          activeType: 2,
          groupCode: help.groupCode,
          shareCode: help.shareCode,
          activeId: help.activityId+"",
          source: "guest",
     }).then(function (data) {
          var helpToast = data?.data?.helpToast
          tool.timeout++
          if(helpToast){
               tool.helps.push(help.id)
               console.log(`${tool.id+1}->${help.id+1} ${helpToast}`)
               if(helpToast.indexOf("助力成功")!=-1){ //助力成功
                    tool.times++
               }
               if(helpToast.indexOf("满")!=-1){ //该团已经满啦~去帮别人助力吧~
                    help.success = true
               }
               if(helpToast.indexOf("今日助力次数已达上限")!=-1){ //您今日助力次数已达上限~
                    tool.times = maxTimes
               }
               if(helpToast.indexOf("火爆")!=-1){ //活动太火爆啦~请稍后再试~
                    tool.times = maxTimes
               }
               if(tool.timeout >= helps.length*2){
                    tool.times = maxTimes
               }
               if(tool.times < maxTimes){
                    if(Array.from(new Set(tool.helps)).length != helps.length){
                         tools.unshift(tool)
                    }
               }
          }
          if(!help.success){
               open(help)
          }else{
               finished.push(help.id)
          }
          
     })
}

function requestApi(functionId, cookie, body = {}) {
     var url = `https://api.m.jd.com/client.action?functionId=${functionId}&body=${JSON.stringify(body)}&appid=ld&client=apple&clientVersion=10.0.4&networkType=wifi&osVersion=13.7&uuid=&openudid=`
     return new Promise(resolve => {
          $.get({
               url: url,
               headers: {
                    "Cookie": cookie,
                    "Accept": '*/*',
                    "Connection": 'keep-alive',
                    'Referer': 'https://h5.m.jd.com/rn/3MQXMdRUTeat9xqBSZDSCCAE9Eqz/index.html?has_native=0',
                    "origin": "https://h5.m.jd.com",
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "X-Requested-With": "com.jingdong.app.mall",
                    "User-Agent": ua,
                    "Host": "api.m.jd.com",
               },
               timeout: 1000,
          }, (_, resp, data) => {
               if(data){
                    resolve(JSON.parse(data))
               }else{
                    resolve(0)
               }
          })
     })
}

function requireConfig() {
     return new Promise(resolve => {
          notify = $.isNode() ? require('./sendNotify') : '';
          const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
          if ($.isNode()) {
               Object.keys(jdCookieNode).forEach((item) => {
                    if (jdCookieNode[item]) {
                         cookiesArr.push(jdCookieNode[item])
                    }
               })
               if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
          } else {
               cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
          }
          console.log(`共${cookiesArr.length}个京东账号\n`)
          resolve()
     })
}

function randomString(e) {
     e = e || 32;
     let t = "abcdefhijkmnprstwxyz2345678",
          a = t.length,
          n = "";
     for (i = 0; i < e; i++)
          n += t.charAt(Math.floor(Math.random() * a));
     return n
}

function Env(t, e) {
     "undefined" != typeof process && JSON.stringify(process.env).indexOf("GIT_HUB") > -1 && process.exit(0);
     class s {
          constructor(t) {
               this.env = t
          }
          send(t, e = "GET") {
               t = "string" == typeof t ? {
                    url: t
               } : t;
               let s = this.get;
               return "POST" === e && (s = this.post), new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                         t ? i(t) : e(s)
                    })
               })
          }
          get(t) {
               return this.send.call(this.env, t)
          }
          post(t) {
               return this.send.call(this.env, t, "POST")
          }
     }
     return new class {
          constructor(t, e) {
               this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
          }
          isNode() {
               return "undefined" != typeof module && !!module.exports
          }
          isQuanX() {
               return "undefined" != typeof $task
          }
          isSurge() {
               return "undefined" != typeof $httpClient && "undefined" == typeof $loon
          }
          isLoon() {
               return "undefined" != typeof $loon
          }
          toObj(t, e = null) {
               try {
                    return JSON.parse(t)
               } catch (e) {
                    return e
               }
          }
          toStr(t, e = null) {
               try {
                    return JSON.stringify(t)
               } catch (e) {
                    return e
               }
          }
          getjson(t, e) {
               let s = e;
               const i = this.getdata(t);
               if (i) try {
                    s = JSON.parse(this.getdata(t))
               } catch {}
               return s
          }
          setjson(t, e) {
               try {
                    return this.setdata(JSON.stringify(t), e)
               } catch {
                    return !1
               }
          }
          getScript(t) {
               return new Promise(e => {
                    this.get({
                         url: t
                    }, (t, s, i) => e(i))
               })
          }
          runScript(t, e) {
               return new Promise(s => {
                    let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                    i = i ? i.replace(/\n/g, "").trim() : i;
                    let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                    r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                    const [o, h] = i.split("@"), n = {
                         url: `http://${h}/v1/scripting/evaluate`,
                         body: {
                              script_text: t,
                              mock_type: "cron",
                              timeout: r
                         },
                         headers: {
                              "X-Key": o,
                              Accept: "*/*"
                         }
                    };
                    this.post(n, (t, e, i) => s(i))
               }).catch(t => this.logErr(t))
          }
          loaddata() {
               if (!this.isNode()) return {}; {
                    this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                    const t = this.path.resolve(this.dataFile),
                         e = this.path.resolve(process.cwd(), this.dataFile),
                         s = this.fs.existsSync(t),
                         i = !s && this.fs.existsSync(e);
                    if (!s && !i) return {}; {
                         const i = s ? t : e;
                         try {
                              return JSON.parse(this.fs.readFileSync(i))
                         } catch (t) {
                              return {}
                         }
                    }
               }
          }
          writedata() {
               if (this.isNode()) {
                    this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                    const t = this.path.resolve(this.dataFile),
                         e = this.path.resolve(process.cwd(), this.dataFile),
                         s = this.fs.existsSync(t),
                         i = !s && this.fs.existsSync(e),
                         r = JSON.stringify(this.data);
                    s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
               }
          }
          lodash_get(t, e, s) {
               const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
               let r = t;
               for (const t of i)
                    if (r = Object(r)[t], void 0 === r) return s;
               return r
          }
          lodash_set(t, e, s) {
               return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
          }
          getdata(t) {
               let e = this.getval(t);
               if (/^@/.test(t)) {
                    const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                    if (r) try {
                         const t = JSON.parse(r);
                         e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                         e = ""
                    }
               }
               return e
          }
          setdata(t, e) {
               let s = !1;
               if (/^@/.test(e)) {
                    const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                    try {
                         const e = JSON.parse(h);
                         this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                    } catch (e) {
                         const o = {};
                         this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                    }
               } else s = this.setval(t, e);
               return s
          }
          getval(t) {
               return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
          }
          setval(t, e) {
               return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
          }
          initGotEnv(t) {
               this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
          }
          get(t, e = (() => {})) {
               t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
               })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
               })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
               })), $task.fetch(t).then(t => {
                    const {
                         statusCode: s,
                         statusCode: i,
                         headers: r,
                         body: o
                    } = t;
                    e(null, {
                         status: s,
                         statusCode: i,
                         headers: r,
                         body: o
                    }, o)
               }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                         if (t.headers["set-cookie"]) {
                              const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                              s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                         }
                    } catch (t) {
                         this.logErr(t)
                    }
               }).then(t => {
                    const {
                         statusCode: s,
                         statusCode: i,
                         headers: r,
                         body: o
                    } = t;
                    e(null, {
                         status: s,
                         statusCode: i,
                         headers: r,
                         body: o
                    }, o)
               }, t => {
                    const {
                         message: s,
                         response: i
                    } = t;
                    e(s, i, i && i.body)
               }))
          }
          post(t, e = (() => {})) {
               if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
               })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
               });
               else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
               })), $task.fetch(t).then(t => {
                    const {
                         statusCode: s,
                         statusCode: i,
                         headers: r,
                         body: o
                    } = t;
                    e(null, {
                         status: s,
                         statusCode: i,
                         headers: r,
                         body: o
                    }, o)
               }, t => e(t));
               else if (this.isNode()) {
                    this.initGotEnv(t);
                    const {
                         url: s,
                         ...i
                    } = t;
                    this.got.post(s, i).then(t => {
                         const {
                              statusCode: s,
                              statusCode: i,
                              headers: r,
                              body: o
                         } = t;
                         e(null, {
                              status: s,
                              statusCode: i,
                              headers: r,
                              body: o
                         }, o)
                    }, t => {
                         const {
                              message: s,
                              response: i
                         } = t;
                         e(s, i, i && i.body)
                    })
               }
          }
          time(t, e = null) {
               const s = e ? new Date(e) : new Date;
               let i = {
                    "M+": s.getMonth() + 1,
                    "d+": s.getDate(),
                    "H+": s.getHours(),
                    "m+": s.getMinutes(),
                    "s+": s.getSeconds(),
                    "q+": Math.floor((s.getMonth() + 3) / 3),
                    S: s.getMilliseconds()
               };
               /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
               for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
               return t
          }
          msg(e = t, s = "", i = "", r) {
               const o = t => {
                    if (!t) return t;
                    if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                         "open-url": t
                    } : this.isSurge() ? {
                         url: t
                    } : void 0;
                    if ("object" == typeof t) {
                         if (this.isLoon()) {
                              let e = t.openUrl || t.url || t["open-url"],
                                   s = t.mediaUrl || t["media-url"];
                              return {
                                   openUrl: e,
                                   mediaUrl: s
                              }
                         }
                         if (this.isQuanX()) {
                              let e = t["open-url"] || t.url || t.openUrl,
                                   s = t["media-url"] || t.mediaUrl;
                              return {
                                   "open-url": e,
                                   "media-url": s
                              }
                         }
                         if (this.isSurge()) {
                              let e = t.url || t.openUrl || t["open-url"];
                              return {
                                   url: e
                              }
                         }
                    }
               };
               if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                    let t = ["", "==============📣系统通知📣=============="];
                    t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
               }
          }
          log(...t) {
               t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
          }
          logErr(t, e) {
               const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
               s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
          }
          wait(t) {
               return new Promise(e => setTimeout(e, t))
          }
          done(t = {}) {
               const e = (new Date).getTime(),
                    s = (e - this.startTime) / 1e3;
               this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
          }
     }(t, e)
}