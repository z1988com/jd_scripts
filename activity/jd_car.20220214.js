/*
京东汽车，签到满500赛点可兑换500京豆，一天运行一次即可
长期活动
活动入口：京东APP首页-京东汽车-屏幕右中部，车主福利
更新地址：jd_car.js
已支持IOS双京东账号, Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, 小火箭，JSBox, Node.js
============Quantumultx===============
[task_local]
#京东汽车
10 7 * * * jd_car.js, tag=京东汽车, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_redPacket.png, enabled=true

================Loon==============
[Script]
cron "10 7 * * *" script-path=jd_car.js, tag=京东汽车

===============Surge=================
京东汽车 = type=cron,cronexp="10 7 * * *",wake-system=1,timeout=3600,script-path=jd_car.js

============小火箭=========
京东汽车 = type=cron,script-path=jd_car.js, cronexpr="10 7 * * *", timeout=3600, enable=true
 */
const $ = new Env('京东汽车');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let jdNotify = true;//是否关闭通知，false打开通知推送，true关闭通知推送
const randomCount = $.isNode() ? 20 : 5;
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
  };
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
const JD_API_HOST = 'https://car-member.jd.com/api/';
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      message = '';
      await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      await jdCar();
      await showMsg();
    }
  }
})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

async function jdCar() {
  await check()
  await sign()
  await $.wait(1000)
  await mission()
  await $.wait(1000)
  await getPoint()
}

function showMsg() {
  return new Promise(resolve => {
    $.msg($.name, '', `【京东账号${$.index}】${$.nickName}\n${message}`);
    resolve()
  })
}

function check() {
  return new Promise(resolve => {
    $.get(taskUrl('v1/user/exchange/bean/check'), (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body)
          console.log(`${data.error.msg}`)
          message += `签到失败，${data.error.msg}\n`
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            console.log(`兑换结果：${JSON.stringify(data)}`)
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

function sign() {
  return new Promise(resolve => {
    $.post(taskUrl('v1/user/sign'), (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body)
          console.log(`${data.error.msg}`)
          message += `签到失败，${data.error.msg}\n`
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.status) {
              console.log(`签到成功，获得${data.data.point}，已签到${data.data.signDays}天`)
              message += `签到成功，获得${data.data.point}，已签到${data.data.signDays}天\n`
            }
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

function mission() {
  return new Promise(resolve => {
    $.get(taskUrl('v1/user/mission'), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.status) {
              let missions = data.data.missionList
              for (let i = 0; i < missions.length; ++i) {
                const mission = missions[i]
                if (mission['missionStatus'] === 0 && (mission['missionType'] === 1 || mission['missionType'] === 5)) {
                  console.log(`去做任务：${mission['missionName']}`)
                  await doMission(mission['missionId'])
                  await $.wait(1000) // 等待防黑
                }
              }
            }
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

function doMission(missionId) {
  return new Promise(resolve => {
    $.post(taskPostUrl('v1/game/mission', {"missionId": missionId}), async (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body)
          console.log(`${data.error.msg}`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.status) {
              console.log("任务领取成功")
              await receiveMission(missionId)
            }
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

function receiveMission(missionId) {
  return new Promise(resolve => {
    $.post(taskPostUrl('v1/user/mission/receive', {"missionId": missionId}), async (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body)
          console.log(`${data.error.msg}`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.status) {
              console.log("任务完成成功")
            }
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

function getPoint() {
  return new Promise(resolve => {
    $.get(taskUrl('v1/user/point'), async (err, resp, data) => {
      try {
        if (err) {
          data = JSON.parse(resp.body)
          console.log(`${data.error.msg}`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.status) {
              if (data.data.remainPoint >= data.data.oncePoint) {
                console.log(`当前赛点：${data.data.remainPoint}/${data.data.oncePoint}，可以兑换京豆，请打开APP兑换`)
                message += `当前赛点：${data.data.remainPoint}/${data.data.oncePoint}，可以兑换京豆，请打开APP兑换\n`
              }else{
                console.log(`当前赛点：${data.data.remainPoint}/${data.data.oncePoint}无法兑换京豆`)
                message += `当前赛点：${data.data.remainPoint}/${data.data.oncePoint}，无法兑换京豆\n`
              }
            }
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

function taskUrl(function_id, body = {}) {
  return {
    url: `${JD_API_HOST}${function_id}?timestamp=${new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000}`,
    headers: {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Host": "car-member.jd.com",
      "Referer": "https://h5.m.jd.com/babelDiy/Zeus/44bjzCpzH9GpspWeBzYSqBA7jEtP/index.html",
      "Cookie": cookie,
      "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
    }
  }
}

function taskPostUrl(function_id, body = {}) {
  return {
    url: `${JD_API_HOST}${function_id}?timestamp=${new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000}`,
    body: JSON.stringify(body),
    headers: {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/json;charset=UTF-8",
      "Host": "car-member.jd.com",
      "activityid": "39443aee3ff74fcb806a6f755240d127",
      "Referer": "https://h5.m.jd.com/babelDiy/Zeus/44bjzCpzH9GpspWeBzYSqBA7jEtP/index.html",
      "Cookie": cookie,
      "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
    }
  }
}

function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return
            }
            if (data['retcode'] === 0) {
              $.nickName = (data['base'] && data['base'].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName
            }
          } else {
            console.log(`京东服务器返回空数据`)
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

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
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

