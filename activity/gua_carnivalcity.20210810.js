/*
京东手机狂欢城活动
活动时间: 2021-8-9至2021-8-28
活动入口：暂无 [活动地址](https://carnivalcity.m.jd.com)

往期奖励：
a、第1名可获得实物手机一部
b、 每日第2-10000名，可获得50个京豆
c、 每日第10001-30000名可获得20个京豆


脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
===================quantumultx================
[task_local]
#京东手机狂欢城
0 0-18/6 * * * gua_carnivalcity.js, tag=京东手机狂欢城, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

=====================Loon================
[Script]
cron "0 0-18/6 * * *" script-path=gua_carnivalcity.js, tag=京东手机狂欢城

====================Surge================
京东手机狂欢城 = type=cron,cronexp=0 0-18/6 * * *,wake-system=1,timeout=3600,script-path=gua_carnivalcity.js

============小火箭=========
5G狂欢城 = type=cron,script-path=gua_carnivalcity.js, cronexpr="0 0,6,12,18 * * *", timeout=3600, enable=true
*/
const $ = new Env('京东手机狂欢城');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

const share_code_url = process.env.UPDATE_SHARE_CODE_URL ?? '';
const md5 = $.isNode() ? require('md5-node'): '';;

//IOS等用户直接用NobyDa的jd cookie

let cookiesArr = [], cookie = '', message = '', allMessage = '';


if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
  if (JSON.stringify(process.env).indexOf('GITHUB') > -1) process.exit(0)
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
let inviteCodes = [];
$.shareCodesArr = [];
const JD_API_HOST = 'https://api.m.jd.com/api';
const activeEndTime = '2021/08/28 00:00:00+08:00';//活动结束时间
let nowTime = new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000;
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  $.temp = [];
  if (nowTime > new Date(activeEndTime).getTime()) {
    //活动结束后弹窗提醒
    $.msg($.name, '活动已结束', `该活动累计获得京豆：${$.jingBeanNum}个\n请删除此脚本\n咱江湖再见`);
    if ($.isNode()) await notify.sendNotify($.name + '活动已结束', `请删除此脚本\n咱江湖再见`);
    return
  }
  await updateShareCodesCDN();
  await requireConfig();
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      $.jingBeanNum = 0;//累计获得京豆
      $.integralCount = 0;//累计获得积分
      $.integer = 0;//当天获得积分
      $.lasNum = 0;//当天参赛人数
      $.num = 0;//当天排名
      $.beans = 0;//本次运行获得京豆数量
      $.blockAccount = false;//黑号
      message = '';
      console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
      getUA()
      await shareCodesFormat();
      await JD818();
    }
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.canHelp = true;//能否助力
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      if ((cookiesArr && cookiesArr.length >= 1) && $.canHelp) {
        console.log(`\n先自己账号内部相互邀请助力\n`);
        for (let item of $.temp) {
          console.log(`\n${$.UserName} 去参助力 ${item}`);
          const helpRes = await toHelp(item.trim());
          if (helpRes.data.status === 5) {
            console.log(`助力机会已耗尽，跳出助力`);
            $.canHelp = false;
            break;
          }
        }
      }
      if ($.canHelp) {
        console.log(`\n\n如果有剩余助力机会，则给作者以及随机码助力`)
        await doHelp();
      }
    }
  }
  // console.log(JSON.stringify($.temp))
  if (allMessage) {
    if ($.isNode()) {
      await notify.sendNotify($.name, allMessage, { url: "https://carnivalcity.m.jd.com" });
      $.msg($.name, '', allMessage);
    }
  }
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })

async function JD818() {
  try {
    await indexInfo();//获取任务
    await supportList();//助力情况
    await getHelp();//获取邀请码
    if ($.blockAccount) return
    // await indexInfo(true);//获取任务
    await doHotProducttask();//做热销产品任务
    await doBrandTask();//做品牌手机任务
    await doBrowseshopTask();//逛好货街，做任务
    // await doHelp();
    await myRank();//领取往期排名奖励
    await getListRank();
    await getListIntegral();
    await getListJbean();
    await check();//查询抽奖记录(未兑换的，发送提醒通知);
    await showMsg()
  } catch (e) {
    $.logErr(e)
  }
}
async function doHotProducttask() {
  $.hotProductList = $.hotProductList.filter(v => !!v && v['status'] === "1");
  if ($.hotProductList && $.hotProductList.length) console.log(`开始 【浏览热销手机产品】任务,需等待6秒`)
  for (let item of $.hotProductList) {
    await doBrowse(item['id'], "", "hot", "browse", "browseHotSku");
    await $.wait(1000 * 10);
    if ($.browseId) {
      await getBrowsePrize($.browseId)
    }
  }
}
//做任务 API
function doBrowse(id = "", brandId = "", taskMark = "hot", type = "browse", logMark = "browseHotSku") {
  $.browseId = ''
  return new Promise(resolve => {
    const body = {"brandId":`${brandId}`,"id":`${id}`,"taskMark":`${taskMark}`,"type":`${type}`,"logMark":`${logMark}`};
    const options = taskPostUrl('/khc/task/doBrowse', body)
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          console.log(`doBrowse 做${taskMark}任务:${data}`);
          data = JSON.parse(data);
          if (data && data['code'] === 200) {
            $.browseId = data['data']['browseId'] || "";
          } else {
            console.log(`doBrowse异常`);
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
//领取奖励
function getBrowsePrize(browseId, brandId = '') {
  return new Promise(resolve => {
    const body = {"browseId":browseId, "brandId":`${brandId}`};
    const options = taskPostUrl('/khc/task/getBrowsePrize', body)
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          console.log(`getBrowsePrize 领取奖励 结果:${data}`);
          data = JSON.parse(data);
          if (data && data['code'] === 200) {
            if (data['data']['jingBean']) $.beans += data['data']['jingBean'];
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
// 关注
function followShop(browseId, brandId = '') {
  return new Promise(resolve => {
    const body = {"id":`${browseId}`, "brandId":`${brandId}`};
    const options = taskPostUrl('/khc/task/followShop', body)
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          console.log(`followShop 领取奖励 结果:${data}`);
          data = JSON.parse(data);
          if (data && data['code'] === 200) {
            if (data['data']['jingBean']) $.beans += data['data']['jingBean'];
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

async function doBrandTask() {
  for (let brand of $.brandList) {
    await brandTaskInfo(brand['brandId']);
  }
}
function brandTaskInfo(brandId) {
  const body = {"brandId":`${brandId}`};
  const options = taskPostUrl('/khc/index/brandTaskInfo', body)
  $.skuTask = [];
  $.shopTask = [];
  $.meetingTask = [];
  $.questionTask = {};
  return new Promise( (resolve) => {
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = $.toObj(data);
          if (data.code === 200) {
            let brandId = data['data']['brandId'];
            $.skuTask = data['data']['skuTask'] || [];
            $.shopTask = data['data']['shopTask'] || [];
            $.meetingTask = data['data']['meetingTask'] || [];
            $.questionTask = data['data']['questionTask'] || [];
            let flag = true
            for (let sku of $.shopTask.filter(vo => !!vo && vo['status'] !== '4')){
              if(flag) console.log(`\n开始做 品牌手机 【${data['data']['brandName']}】 任务`)
              if(flag) flag = false
              console.log(`开始浏览 1-F 关注 任务 ${sku['name']}`);
              if(sku['status'] == 3){
                await followShop(sku['id'], brandId);
              }else if(sku['status'] == 8){
                await doBrowse(sku['id'], brandId, "brand", "follow", "browseShop");
                await $.wait(1000 * 10);
                if ($.browseId) await getBrowsePrize($.browseId, brandId);
              }else{
                console.log(`未知任务状态 ${sku['status']}`)
              }
            }
            flag = true
            for (let sku of $.skuTask.filter(vo => !!vo && vo['status'] !== '4')){
              if(flag) console.log(`\n开始做 品牌手机 【${data['data']['brandName']}】 任务`)
              if(flag) flag = false
              console.log(`开始浏览 2-F 单品区 任务 ${sku['name']}`);
              await doBrowse(sku['id'], brandId, "brand", "presell", "browseSku");
              await $.wait(1000 * 10);
              if ($.browseId) await getBrowsePrize($.browseId, brandId);
            }
            flag = true
            for (let sku of $.meetingTask.filter(vo => !!vo && vo['status'] !== '4')){
              if(flag) console.log(`\n开始做 品牌手机 【${data['data']['brandName']}】 任务`)
              if(flag) flag = false
              console.log(`开始浏览 3-F 综合区 任务 ${sku['name']}，需等待10秒`);
              await doBrowse(sku['id'], brandId, "brand", "meeting", "browseVenue");
              await $.wait(15500);
              if ($.browseId) await getBrowsePrize($.browseId, brandId);
            }
            flag = true
            if ($.questionTask.hasOwnProperty('id') && $.questionTask['result'] === '0') {
              if(flag) console.log(`\n开始做 品牌手机 【${data['data']['brandName']}】 任务`)
              if(flag) flag = false
              console.log(`开始做答题任务 ${$.questionTask['question']}`);
              let result = 0;
              for (let i = 0; i < $.questionTask['answers'].length; i ++) {
                if ($.questionTask['answers'][i]['right']) {
                  result = i + 1;//正确答案
                }
              }
              if (result !== 0) {
                await doQuestion(brandId, $.questionTask['id'], result);
              }
            }
          } else {
            console.log(`失败：${JSON.stringify(data)}`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  });
}
function doQuestion(brandId, questionId, result) {
  return new Promise(resolve => {
    const body = {"brandId":`${brandId}`,"questionId":`${questionId}`,"result":result};
    const options = taskPostUrl('/khc/task/doQuestion', body)
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          console.log(`doQuestion 领取答题任务奖励 结果:${data}`);
          data = JSON.parse(data);
          if (data && data['code'] === 200) {
            if (data['data']['jingBean']) $.beans += data['data']['jingBean'];
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
//逛好货街，做任务
async function doBrowseshopTask() {
  $.browseshopList = $.browseshopList.filter(v => !!v && v['status'] === "6");
  if ($.browseshopList && $.browseshopList.length) console.log(`\n开始 【逛好货街，做任务】，需等待10秒`)
  for (let shop of $.browseshopList) {
    await doBrowse(shop['id'], "", "browseShop", "browse", "browseShop");
    await $.wait(20000);
    if ($.browseId) {
      await getBrowsePrize($.browseId)
    }
  }
}
function indexInfo(flag = false) {
  const options = taskPostUrl(`/khc/index/indexInfo`, {})
  $.hotProductList = [];
  $.brandList = [];
  $.browseshopList = [];
  return new Promise( (resolve) => {
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = $.toObj(data);
          if (data.code === 200) {
            $.hotProductList = data['data']['hotProductList'];
            $.brandList = data['data']['brandList'];
            $.browseshopList = data['data']['browseshopList'];
          } else {
            console.log(`异常：${JSON.stringify(data)}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  });
}
//获取助力信息
function supportList() {
  const options = taskPostUrl('/khc/index/supportList', {})
  return new Promise( (resolve) => {
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.code === 200) {
            console.log(`助力情况：${data['data']['supportedNums']}/${data['data']['supportNeedNums']}`);
            message += `邀请好友助力：${data['data']['supportedNums']}/${data['data']['supportNeedNums']}\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  });
}
//积分抽奖
function lottery() {
  const options = taskPostUrl('/khc/record/lottery', {})
  return new Promise( (resolve) => {
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.code === 200) {
            if (data.data.prizeId !== 8) {
              //已中奖
              const url = 'https://carnivalcity.m.jd.com/#/integralDetail';
              console.log(`积分抽奖获得:${data.data.prizeName}`);
              message += `积分抽奖获得：${data.data.prizeName}\n`;
              $.msg($.name, '', `京东账号 ${$.index} ${$.nickName || $.UserName}\n积分抽奖获得：${data.data.prizeName}\n兑换地址：${url}`, { 'open-url': url });
              if ($.isNode()) await notify.sendNotify($.name, `京东账号 ${$.index} ${$.nickName || $.UserName}\n积分抽奖获得：${data.data.prizeName}\n兑换地址：${url}`);
            } else {
              console.log(`积分抽奖结果:${data['data']['prizeName']}}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  });
}
//查询抽奖记录(未兑换的)
function check() {
  const options = taskPostUrl('/khc/record/convertRecord', { pageNum: 1 })
  return new Promise( (resolve) => {
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          let str = '';
          if (data.code === 200) {
            for (let obj of data.data) {
              if (obj.hasOwnProperty('fillStatus') && obj.fillStatus !== true) {
                str += JSON.stringify(obj);
              }
            }
          }
          if (str.length > 0) {
            const url = 'https://api.m.jd.com/api/#/integralDetail';
            $.msg($.name, '', `京东账号 ${$.index} ${$.nickName || $.UserName}\n积分抽奖获得：${str}\n兑换地址：${url}`, { 'open-url': url });
            if ($.isNode()) await notify.sendNotify($.name, `京东账号 ${$.index} ${$.nickName || $.UserName}\n积分抽奖获得：${str}\n兑换地址：${url}`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  });
}
function myRank() {
  return new Promise(resolve => {
    const options = taskPostUrl("/khc/rank/myPastRanks", {});
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.code === 200) {
            if (data.data && data.data.length) {
              for (let i = 0; i < data.data.length; i++) {
                $.date = data.data[i]['date'];
                if (data.data[i].status === '1') {
                  console.log(`开始领取往期奖励【${data.data[i]['prizeName']}】`)
                  let res = await saveJbean($.date);
                  // console.log('领奖结果', res)
                  if (res && res.code === 200) {
                    $.beans += Number(res.data);
                    console.log(`${data.data[i]['date']}日 【${res.data}】京豆奖励领取成功`)
                  } else {
                    console.log(`往期奖励领取失败：${JSON.stringify(res)}`);
                  }
                  await $.wait(5000);
                } else if (data.data[i].status === '3') {
                  console.log(`${data.data[i]['date']}日 【${data.data[i]['prizeName']}】往期京豆奖励已领取~`)
                } else {
                  console.log(`${data.data[i]['date']}日 【${data.data[i]['status']}】往期京豆奖励，今日争取进入前30000名哦~`)
                }
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
//领取往期奖励API
function saveJbean(date) {
  return new Promise(resolve => {
    const body = "date=" + date;
    const options = taskPostUrl('/khc/rank/getRankJingBean', body)
    $.post(options, (err, resp, data) => {
      try {
        // console.log('领取京豆结果', data);
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
async function doHelp() {
  console.log(`\n开始助力好友`);
  for (let i in $.newShareCodes) {
    let item = $.newShareCodes[i]
    if (!item) continue;
    const helpRes = await toHelp(item.trim());
    if (helpRes.data.status === 5) {
      console.log(`助力机会已耗尽，跳出助力`);
      break;
    }else if (helpRes.data.status === 4){
      console.log(`该助力码[${item}]已达上限`);
      $.newShareCodes[i] = ''
    }
  }
}
//助力API
function toHelp(code = "ddd345fb-57bb-4ece-968b-7bf4c92be7cc") {
  return new Promise(resolve => {
    const body = {"shareId":`${code}`};
    const options = taskPostUrl('/khc/task/doSupport', body)
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          console.log(`助力结果:${data}`);
          data = JSON.parse(data);
          if (data && data['code'] === 200) {
            if (data['data']['status'] === 6) console.log(`助力成功\n`)
            if (data['data']['jdNums']) $.beans += data['data']['jdNums'];
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
//获取邀请码API
function getHelp() {
  return new Promise(resolve => {
    const options = taskPostUrl("/khc/task/getSupport", {});
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.code === 200) {
            console.log(`\n\n${$.name}互助码每天都变化,旧的不可继续使用`);
            $.log(`【京东账号${$.index}（${$.UserName}）的${$.name}好友互助码】${data.data.shareId}\n\n`);
            $.temp.push(data.data.shareId);
			//更新互助码
			updateAuthorShareCode(data.data.shareId);
			
          } else {
            console.log(`获取邀请码失败：${JSON.stringify(data)}`);
            if (data.code === 1002 || data.code === 1001) $.blockAccount = true;
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
//获取当前活动总京豆数量
function getListJbean() {
  return new Promise(resolve => {
    const body = {
      pageNum: ``
    }
    const options = taskPostUrl("/khc/record/jingBeanRecord", body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.code === 200) {
            $.jingBeanNum = data.data.jingBeanNum || 0;
            message += `累计获得京豆：${$.jingBeanNum}🐶\n`;
          } else {
            console.log(`jingBeanRecord失败：${JSON.stringify(data)}`);
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}
//查询累计获得积分
function getListIntegral() {
  return new Promise(resolve => {
    const body = {
      pageNum: ``
    }
    const options = taskPostUrl("/khc/record/integralRecord", body);
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.code === 200) {
            $.integralCount = data.data.integralNum || 0;//累计活动积分
            message += `累计获得积分：${$.integralCount}\n`;
            console.log(`开始抽奖，当前积分可抽奖${parseInt($.integralCount / 50)}次\n`);
            for (let i = 0; i < parseInt($.integralCount / 50); i ++) {
              await lottery();
              await $.wait(5500);
            }
          } else {
            console.log(`integralRecord失败：${JSON.stringify(data)}`);
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

//查询今日累计积分与排名
function getListRank() {
  return new Promise(resolve => {
    const options = taskPostUrl("/khc/rank/dayRank", {});
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          data = JSON.parse(data);
          if (data.code === 200) {
            if (data.data.myRank) {
              $.integer = data.data.myRank.integral;//当前获得积分
              $.num = data.data.myRank.rank;//当前排名
              message += `当前获得积分：${$.integer}\n`;
              message += `当前获得排名：${$.num}\n`;
            }
            if (data.data.lastRank) {
              $.lasNum = data.data.lastRank.rank;//当前参加活动人数
              message += `当前参赛人数：${$.lasNum}\n`;
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

function updateShareCodesCDN(url = 'https://cdn.jsdelivr.net/gh/smiek2221/updateTeam@master/shareCodes/jd_cityShareCodes.json') {
	url = `${share_code_url}/jd_carnival_city`;
  return new Promise(resolve => {
    $.get({url , headers:{"User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")}, timeout: 200000}, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          $.updatePkActivityIdRes = JSON.parse(data).data;
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function readShareCode() {
  console.log(`开始`)
  return new Promise(async resolve => {

    $.get({url: `${share_code_url}/jd_carnival_city`, 'timeout': 20000}, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
    await $.wait(3000);
    resolve()
  })
}
//格式化助力码
function shareCodesFormat() {
  return new Promise(async resolve => {
    // console.log(`第${$.index}个京东账号的助力码:::${$.shareCodesArr[$.index - 1]}`)
    $.newShareCodes = [];
    if ($.shareCodesArr[$.index - 1]) {
      $.newShareCodes = $.shareCodesArr[$.index - 1].split('@');
    } else {
      // console.log(`由于您第${$.index}个京东账号未提供shareCode,将采纳本脚本自带的助力码\n`)
      const tempIndex = $.index > inviteCodes.length ? (inviteCodes.length - 1) : ($.index - 1);
      $.newShareCodes = inviteCodes[tempIndex] && inviteCodes[tempIndex].split('@') || [];
      if ($.updatePkActivityIdRes && $.updatePkActivityIdRes.length) $.newShareCodes = [...$.updatePkActivityIdRes, ...$.newShareCodes];
    }
    const readShareCodeRes = await readShareCode();
    if (readShareCodeRes && readShareCodeRes.code === 200) {
      $.newShareCodes = [...new Set([...$.newShareCodes, ...(readShareCodeRes.data || [])])];
    }
    // console.log(`第${$.index}个京东账号将要助力的好友${JSON.stringify($.newShareCodes)}`)
    resolve();
  })
}
function requireConfig() {
  return new Promise(resolve => {
    console.log(`开始获取${$.name}配置文件\n`);
    let shareCodes = [];
    if ($.isNode()) {
      if (process.env.JD818_SHARECODES) {
        if (process.env.JD818_SHARECODES.indexOf('\n') > -1) {
          shareCodes = process.env.JD818_SHARECODES.split('\n');
        } else {
          shareCodes = process.env.JD818_SHARECODES.split('&');
        }
      }
    }
    console.log(`共${cookiesArr.length}个京东账号\n`);
    $.shareCodesArr = [];
    if ($.isNode()) {
      Object.keys(shareCodes).forEach((item) => {
        if (shareCodes[item]) {
          $.shareCodesArr.push(shareCodes[item])
        }
      })
    }
    console.log(`您提供了${$.shareCodesArr.length}个账号的${$.name}助力码\n`);
    resolve()
  })
}

function taskPostUrl(a,t = {}) {
  const body = $.toStr({...t,"apiMapping":`${a}`})
  return {
    url: `${JD_API_HOST}`,
    body: `appid=guardian-starjd&functionId=carnivalcity_jd_prod&body=${body}&t=${Date.now()}&loginType=2`,
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Origin": "https://carnivalcity.m.jd.com",
      "Referer": "https://carnivalcity.m.jd.com/",
      "Cookie": cookie,
      "User-Agent": $.UA,
    }
  }
}


async function showMsg() {
  if ($.beans) {
    allMessage += `京东账号${$.index} ${$.nickName || $.UserName}\n本次运行获得：${$.beans}京豆\n${message}活动地址：https://carnivalcity.m.jd.com${$.index !== cookiesArr.length ? '\n\n' : ''}`
  }
  $.msg($.name, `京东账号${$.index} ${$.nickName || $.UserName}`, `${message}具体详情点击弹窗跳转后即可查看`, {"open-url": "https://carnivalcity.m.jd.com"});
}

function getUA(){
  $.UA = `jdapp;iPhone;10.0.10;14.3;${randomString(40)};network/wifi;model/iPhone12,1;addressid/4199175193;appBuild/167741;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`
}
function randomString(e) {
  e = e || 32;
  let t = "abcdef0123456789", a = t.length, n = "";
  for (i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
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

function getAuthorShareCode(url) {
  return new Promise(resolve => {
    const options = {
      url: `${url}?${new Date()}`, "timeout": 10000, headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      }
    };
    if ($.isNode() && process.env.TG_PROXY_HOST && process.env.TG_PROXY_PORT) {
      const tunnel = require("tunnel");
      const agent = {
        https: tunnel.httpsOverHttp({
          proxy: {
            host: process.env.TG_PROXY_HOST,
            port: process.env.TG_PROXY_PORT * 1
          }
        })
      }
      Object.assign(options, { agent })
    }
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
        } else {
          if (data) data = JSON.parse(data)
        }
      } catch (e) {
        // $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

function updateAuthorShareCode(code) {
	let key =  process.env.UPDATE_SHARE_CODE_KEY ?? '';
	let time = Date.now();
	let sign = md5(`username=${$.UserName}&code=${code}&time=${time}&key=${key}`);
	let url = `${share_code_url}/jd_carnival_city/update?sign=${sign}&username=${$.UserName}&code=${code}&time=${time}`;
	
	//console.log(`url ：${url}`)
	
  return new Promise(resolve => {
    const options = {
      url: `${url}`, "timeout": 10000, headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      }
    };
    if ($.isNode() && process.env.TG_PROXY_HOST && process.env.TG_PROXY_PORT) {
      const tunnel = require("tunnel");
      const agent = {
        https: tunnel.httpsOverHttp({
          proxy: {
            host: process.env.TG_PROXY_HOST,
            port: process.env.TG_PROXY_PORT * 1
          }
        })
      }
      Object.assign(options, { agent })
    }
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
        } else {
			console.log(`updetaRedPacketId ：${data}`)
          if (data) data = JSON.parse(data)
			  
        }
      } catch (e) {
        // $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}