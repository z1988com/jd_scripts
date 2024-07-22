/*
35 0-23/3 * * * jd_wyw_ffl.js
*/

const $ = new Env('玩一玩-翻翻乐');


const _0x2ae343 = $.isNode() ? require("./jdCookie.js") : "",
  _0x22015b = $.isNode() ? require("./sendNotify") : "",
  _0x487ed2 = require("./function/dylans"),
  _0x54c19b = require("./function/dylib.js"),
  _0x3470e8 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100",
  _0x57a2af = process.env.WYW_DBCOUNT ? process.env.WYW_DBCOUNT : "1";
let _0x292789 = "",
  _0x5472fd = {};
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  _0x5472fd = require("./function/proxy.js");
  $.dget = _0x5472fd.intoRequest($.get.bind($));
  $.dpost = _0x5472fd.intoRequest($.post.bind($));
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x1185e4 = [],
  _0x200783 = "",
  _0x56d6aa = 0;
if ($.isNode()) {
  var _0x1e38d3 = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(_0x2ae343).forEach(_0x344a58 => {
    _0x1185e4.push(_0x2ae343[_0x344a58]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x1185e4 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x40a18f => _0x40a18f.cookie)].filter(_0x2192a2 => !!_0x2192a2);
const _0x57fbe8 = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  _0x90674a = new Date().setHours(_0x57fbe8);
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!_0x1185e4[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("当前版本：20240722 ");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_DBNUM='100' 翻翻乐投注多少奖票，默认100\n    WYW_DBCOUNT='2' 翻倍次数，默认1");
  console.log("\n每天可参与10次，每次投注最大100");
  console.log("无法做签到和任务的账号翻倍必定失败，不要执行翻翻乐啦！");
  $.total_join = 0;
  $.total_suc = 0;
  for (let _0x8045c8 = 0; _0x8045c8 < _0x1185e4.length; _0x8045c8++) {
    {
      _0x200783 = _0x1185e4[_0x8045c8];
      originCookie = _0x1185e4[_0x8045c8];
      if (_0x200783) {
        $.UserName = decodeURIComponent(_0x200783.match(/pt_pin=([^; ]+)(?=;?)/) && _0x200783.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x8045c8 + 1;
        $.hotFlag = false;
        $.nickName = "";
        $.isLogin = true;
        $.outFlag = false;
        $.isban = false;
        $.hasRisk = false;
        _0x292789 = _0x3470e8;
        console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
        _0x28217a();
        if (!$.isLogin) {
          {
            $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
              "open-url": "https://bean.m.jd.com/bean/signIndex.action"
            });
            $.isNode() && (await _0x22015b.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
            continue;
          }
        }
        $.index != 1 && _0x5472fd.swip && (await _0x5472fd.swip());
        await _0x24c55d();
        if ($.outFlag) break;
      }
    }
  }
  console.log("\n以上执行账号今日总战绩：" + $.total_suc + "/" + $.total_join + " 胜率：" + ($.total_suc / $.total_join * 100).toFixed(2) + "%");
})().catch(_0x554a0e => {
  return $.logErr(_0x554a0e);
}).finally(() => {
  return $.done();
});
async function _0x17da9f() {
  for (let _0x1f8172 = 0; _0x1f8172 < _0x1185e4.length; _0x1f8172++) {
    {
      _0x200783 = _0x1185e4[_0x1f8172];
      if (_0x200783) {
        $.UserName = decodeURIComponent(_0x200783.match(/pt_pin=([^; ]+)(?=;?)/) && _0x200783.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x1f8172 + 1;
        console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
        _0x28217a();
        $.nonum = false;
        $.hphotflag = false;
        $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x3d2ad2 => !$.fullId.includes(_0x3d2ad2)), $.fullId = []);
        for (let _0x34966f of $.helpId) {
          $.itemId = _0x34966f;
          console.log("去助力 --> " + $.itemId);
          await _0x46fafa("wanyiwan_assist");
          if ($.nonum || $.hphotflag) break;
          await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
        }
        if ($.outFlag) break;
      }
    }
  }
}
async function _0x24c55d() {
  try {
    {
      $.taskList = [];
      $.detailList = [];
      await _0x46fafa("turnHappyHome");
      if ($.joinTimes === "") return;
      if (parseInt(_0x292789) > 100) _0x292789 = 100;
      if ($.joinTimes == 10) console.log("\n今日已翻10次，明日再来吧！");else {
        if ($.leftTime == 0) {
          console.log("\n去翻翻乐(投注" + _0x292789 + "奖票,翻倍" + _0x57a2af + "次)...");
          $.dbsuc = false;
          for (let _0x27170b = 0; _0x27170b < _0x57a2af; _0x27170b++) {
            console.log("开始" + (_0x27170b + 1) + "次翻倍...");
            if (_0x27170b > 0) _0x292789 = -1;
            await _0x46fafa("turnHappyDouble");
            if (!$.dbsuc) break;
            await $.wait(parseInt(Math.random() * 1000 + 1500, 10));
          }
          $.dbsuc && (await _0x46fafa("turnHappyReceive"));
        } else console.log("\n" + _0x54c19b.SecToTime(parseInt($.leftTime / 1000)) + "后可参与翻翻乐");
      }
      await $.wait(parseInt(Math.random() * 500 + 500, 10));
      await _0x46fafa("turnHappyDetailList", 1);
      if ($.detailList.length == 30) {
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        await _0x46fafa("turnHappyDetailList", 2);
      }
      if ($.detailList.length != 0) {
        {
          let _0x3c3f63 = new Date().getDate(),
            _0x3d56af = $.detailList.filter(_0x33cdbd => new Date(_0x33cdbd.time).getDate() == _0x3c3f63 && _0x33cdbd.operateType == 1),
            _0x2dabfd = $.detailList.filter(_0x49ae53 => new Date(_0x49ae53.time).getDate() == _0x3c3f63 && _0x49ae53.operateType == 3),
            _0xe78887 = _0x2dabfd.reduce((_0x4058fb, _0x2df28a) => _0x4058fb + _0x2df28a.num, 0),
            _0x2bdc1f = _0x3d56af.reduce((_0x4fd115, _0x1b205d) => _0x4fd115 + _0x1b205d.num, 0),
            _0x3bf4f0 = _0x2bdc1f - _0xe78887;
          console.log("\n今日翻倍战绩：" + _0x3d56af.length + "/" + _0x2dabfd.length + " " + (_0x2dabfd.length > 0 ? "胜率：" + (_0x3d56af.length / _0x2dabfd.length * 100).toFixed(2) + "%" : "") + " 【" + (_0x3bf4f0 >= 0 ? "赚" : "亏") + " " + Math.abs(_0x3bf4f0) + "奖票】");
          let _0x27de93 = new Date().getDate() - 1,
            _0x526efe = $.detailList.filter(_0x1f23b6 => new Date(_0x1f23b6.time).getDate() == _0x27de93 && _0x1f23b6.operateType == 1),
            _0x22e30b = $.detailList.filter(_0x956693 => new Date(_0x956693.time).getDate() == _0x27de93 && _0x956693.operateType == 3);
          console.log("昨日翻倍战绩：" + _0x526efe.length + "/" + _0x22e30b.length + " " + (_0x22e30b.length > 0 ? "胜率：" + (_0x526efe.length / _0x22e30b.length * 100).toFixed(2) + "%" : ""));
          $.total_join += _0x2dabfd.length;
          $.total_suc += _0x3d56af.length;
        }
      } else console.log("\n没有历史翻倍战绩");
      await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
    }
  } catch (_0x4bea6d) {
    console.log(_0x4bea6d);
  }
}
async function _0x46fafa(_0x1134bc, ..._0x1e9848) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0xea2643 = "",
    _0x89ef78,
    _0x54c8e9,
    _0x577705 = "post",
    _0x27c4e5 = "https://api.m.jd.com/client.action",
    _0xbfde4e = "signed_wh5";
  switch (_0x1134bc) {
    case "wanyiwan_sign":
      _0xea2643 = {
        "version": 1
      };
      _0x89ef78 = "d12dd";
      _0x54c8e9 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      _0xea2643 = {
        "outsite": 0,
        "firstCall": 1,
        "version": 1,
        "lbsSwitch": true
      };
      _0x89ef78 = "c81ad";
      _0x54c8e9 = "wanyiwan_home";
      break;
    case "apTaskList":
      _0x27c4e5 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x577705 = "get";
      break;
    case "startTask":
      _0xea2643 = {
        "itemId": $.itemId,
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "actionType": 1,
        "version": 1
      };
      _0x89ef78 = "89db2";
      _0x54c8e9 = "wanyiwan_do_task";
      break;
    case "endTask":
      _0xea2643 = {
        "itemId": $.itemId,
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "actionType": 0,
        "version": 1
      };
      _0x89ef78 = "89db2";
      _0x54c8e9 = "wanyiwan_do_task";
      break;
    case "award":
      _0xea2643 = {
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "version": 1
      };
      _0x54c8e9 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      _0xea2643 = {
        "inviteCode": $.itemId,
        "version": 1
      };
      _0x89ef78 = "ba505";
      _0x54c8e9 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x27c4e5 = "https://api.m.jd.com/api";
      _0xea2643 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0xbfde4e = "activities_platform";
      _0x54c8e9 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x27c4e5 = "https://api.m.jd.com/api";
      _0xea2643 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ",
        "turnNum": parseInt(_0x292789)
      };
      _0x89ef78 = "614f1";
      _0xbfde4e = "activities_platform";
      _0x54c8e9 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x27c4e5 = "https://api.m.jd.com/api";
      _0xea2643 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x89ef78 = "25fac";
      _0xbfde4e = "activities_platform";
      _0x54c8e9 = "turnHappyReceive";
      break;
    case "turnHappyDetailList":
      _0x27c4e5 = "https://api.m.jd.com/api";
      _0xea2643 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ",
        "pageNum": _0x1e9848[0],
        "pageSize": 50
      };
      _0xbfde4e = "activities_platform";
      _0x54c8e9 = "turnHappyDetailList";
      break;
    case "superRedBagHome":
      _0x27c4e5 = "https://api.m.jd.com/api";
      _0xea2643 = {
        "linkId": "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x89ef78 = "5be1b";
      _0xbfde4e = "activity_platform_se";
      _0x54c8e9 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x27c4e5 = "https://api.m.jd.com/api";
      _0xea2643 = {
        "linkId": "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x89ef78 = "89cfe";
      _0xbfde4e = "activity_platform_se";
      _0x54c8e9 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x1134bc);
  }
  if (_0x89ef78) {
    let _0x53d28b = {
      "appId": _0x89ef78,
      "functionId": _0x54c8e9,
      "body": _0xea2643,
      "appid": _0xbfde4e,
      "clientVersion": $.UA.split(";")[2],
      "client": "ios",
      "user": $.UserName,
      "t": Date.now(),
      "ua": $.UA
    };
    _0xea2643 = await _0x487ed2.getbody(_0x53d28b);
    if (!_0xea2643) return;
  } else _0xea2643 && (_0xea2643 = "functionId=" + _0x54c8e9 + "&body=" + encodeURIComponent(JSON.stringify(_0xea2643)) + "&t=" + Date.now() + "&appid=" + _0xbfde4e + "&client=ios&" + $.UA.split(";")[2] + "&cthr=1&networkType=wifi");
  let _0xca7f2b = _0x5559d7(_0x27c4e5, _0xea2643);
  return new Promise(async _0x261578 => {
    $["d" + _0x577705](_0xca7f2b, async (_0x1d8550, _0x5ecddf, _0x23dbbf) => {
      try {
        if (_0x1d8550) {
          if (_0x5ecddf && typeof _0x5ecddf.statusCode != "undefined") {
            if (_0x5ecddf.statusCode == 493) {
              if (_0x56d6aa < 6) {
                {
                  _0x56d6aa++;
                  await _0x46fafa(_0x1134bc);
                  return;
                }
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x1d8550, _0x1d8550));
        } else {
          if (_0x23dbbf.includes("doctype") && _0x56d6aa < 6) {
            _0x56d6aa++;
            await _0x46fafa(_0x1134bc);
            return;
          }
          _0x56d6aa = 0;
          _0x1283ca(_0x1134bc, _0x23dbbf);
        }
      } catch (_0x1db5e1) {
        console.log(_0x1db5e1, _0x5ecddf);
      } finally {
        _0x261578();
      }
    });
  });
}
function _0x20ff12(_0x550935) {
  let _0x44902a = "";
  switch (type) {
    case [_0x44902a]:
      const _0x4ef73f = {
        "ed": ed
      };
      _0xf1f6le = _0x4ef73f;
      break;
    case [_0x44902a]:
      const _0x86e6e4 = {
        "bd": bd
      };
      _0xf1f6lc = _0x86e6e4;
      break;
    case [_0x44902a]:
      const _0x5529ac = {
        "ed": ed
      };
      _0xf1f6lf = _0x5529ac;
      break;
    case [_0x44902a]:
      const _0x2a26bd = {
        "ed": ed
      };
      _0xf1f6lg = _0x2a26bd;
      break;
    case [_0x44902a]:
      const _0x463a0a = {
        "ed": ed
      };
      _0xf1f6lv = _0x463a0a;
      break;
  }
}
async function _0x1283ca(_0x5309e1, _0x127789) {
  let _0x3bd622 = "";
  try {
    _0x3bd622 = JSON.parse(_0x127789);
  } catch (_0xc494ed) {
    console.log(_0x5309e1 + " 执行任务异常");
  }
  try {
    switch (_0x5309e1) {
      case "award":
        if (_0x3bd622.code == 0) {
          if (_0x3bd622.data.bizCode == 0) console.log("任务完成，获得" + _0x3bd622.data.result.rewardCount + "奖票 🎫");else {
            console.log(_0x3bd622.data.bizMsg);
          }
        } else console.log(_0x3bd622.message);
        break;
      case "wanyiwan_sign":
        _0x3bd622.code == 0 ? _0x3bd622.data.bizCode == 0 ? console.log("签到成功,获得" + _0x3bd622.data.result.getScore + "奖票 🎫") : console.log(_0x3bd622.data.bizMsg) : console.log(_0x3bd622.message);
        break;
      case "wanyiwan_assist":
        if (_0x3bd622.code == 0) {
          {
            if (_0x3bd622.data.bizCode == 0) console.log("✔️ 助力成功"), $.nonum = true;else {
              if (_0x3bd622.data.bizMsg.includes("太多人") || _0x3bd622.data.bizMsg.includes("重复")) console.log("❌", _0x3bd622.data.bizCode, _0x3bd622.data.bizMsg), $.nonum = true;else {
                if (_0x3bd622.data.bizMsg.includes("已经完成")) console.log("❌", _0x3bd622.data.bizCode, _0x3bd622.data.bizMsg), $.fullId.push($.itemId);else _0x3bd622.data.bizMsg.includes("火爆") ? (console.log("❌", _0x3bd622.data.bizCode, _0x3bd622.data.bizMsg), $.hphotflag = true) : console.log("❌", _0x3bd622.data.bizCode, _0x3bd622.data.bizMsg);
              }
            }
          }
        } else console.log(_0x3bd622.message), _0x3bd622.message.includes("火爆") && ($.hphotflag = true);
        break;
      case "wanyiwan_home":
        if (_0x3bd622.code == 0) {
          if (_0x3bd622.data.bizCode == 0) {
            _0x3bd622.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x3bd622.data.result.popWindows[0].getScore, "奖票 🎫");
            console.log("当前奖票总量：" + _0x3bd622.data.result.score + " 🎫");
            $.isLogin = _0x3bd622.data?.["result"]?.["isLogin"];
            $.taskList = _0x3bd622.data?.["result"]?.["taskBoard"] || [];
            $.signstatus = _0x3bd622.data?.["result"]?.["signBoard"]?.["status"] || 0;
          } else console.log(_0x3bd622.data.bizMsg);
        } else console.log(_0x3bd622.message);
        break;
      case "turnHappyHome":
        _0x3bd622.success ? ($.leftTime = _0x3bd622.data.leftTime, $.joinTimes = _0x3bd622.data.joinTimes, $.logIn = _0x3bd622.data.logIn) : (console.log(_0x3bd622.errMsg), $.leftTime = "", $.joinTimes = "");
        break;
      case "turnHappyDouble":
        _0x3bd622.success ? _0x3bd622.data.rewardState == 1 ? (console.log("翻倍成功，获得 " + _0x3bd622.data.rewardValue + "奖票 🎫"), $.dbsuc = true) : ($.dbsuc = false, console.log("叼了，翻倍失败！再接再厉！")) : (console.log(_0x3bd622.errMsg), $.dbsuc = false);
        break;
      case "turnHappyDouble":
        _0x3bd622.success ? _0x3bd622.data.rewardState == 1 ? (console.log("翻倍成功，获得 " + _0x3bd622.data.rewardValue + "奖票 🎫"), $.dbsuc = true) : ($.dbsuc = false, console.log("叼了，翻倍失败！再接再厉！")) : (console.log(_0x3bd622.errMsg), $.dbsuc = false);
        break;
      case "turnHappyDetailList":
        _0x3bd622.success ? $.detailList.length == 0 ? $.detailList = _0x3bd622.data.result.detailList || [] : $.detailList = $.detailList.concat(_0x3bd622.data.result.detailList || []) : (console.log(_0x3bd622.errMsg), $.detailList = []);
        break;
      case "superRedBagHome":
        _0x3bd622.success ? ($.sceneStatus = _0x3bd622.data.sceneStatus, $.nextLeftTime = _0x3bd622.data.nextLeftTime) : console.log(_0x3bd622.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x3bd622.success) {
          $.shakeLeftTime = _0x3bd622.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x3bd622.data;
          if (prizeDrawVo) switch (prizeDrawVo.prizeType) {
            case 24:
              console.log("获得：" + prizeDrawVo.amount + "票奖 🎫");
              $.sucdraw++;
              break;
            case 1:
              console.log("获得:" + prizeDrawVo.prizeConfigName);
              break;
            default:
              console.log(prizeDrawVo);
              break;
          } else console.log(_0x127789);
        } else console.log(_0x3bd622.errMsg);
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x5309e1 + " -> " + _0x127789);
    }
    typeof _0x3bd622 == "object" && _0x3bd622.errorMessage && _0x3bd622.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x50c075) {
    console.log(_0x5309e1 + " " + _0x50c075);
  }
}
function _0x5559d7(_0x45ee92, _0x270160) {
  let _0x163724 = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Origin": "https://pro.m.jd.com",
    "Referer": "https://pro.m.jd.com/",
    "Cookie": _0x200783,
    "User-Agent": $.UA
  };
  return {
    "url": _0x45ee92,
    "headers": _0x163724,
    "timeout": 30000,
    ...(_0x270160 ? {
      "body": _0x270160
    } : {})
  };
}
async function _0x28217a() {
  $.UA = "" + "jdapp;iPhone;10.1.5;13.1.2;" + _0x246cff(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x246cff(_0x6a6b50) {
  _0x6a6b50 = _0x6a6b50 || 32;
  let _0x3c6863 = "abcdef0123456789",
    _0x5863f8 = _0x3c6863.length,
    _0x2b8887 = "";
  for (i = 0; i < _0x6a6b50; i++) {
    _0x2b8887 += _0x3c6863.charAt(Math.floor(Math.random() * _0x5863f8));
  }
  return _0x2b8887;
}
function _0x3c3150(_0x5943fb) {
  if (typeof _0x5943fb == "string") {
    try {
      return JSON.parse(_0x5943fb);
    } catch (_0x3b4f44) {
      console.log(_0x3b4f44);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function _0x5d69b0() {
  if (!$.joinVenderId) return;
  return new Promise(async _0x5d7217 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x30f7ff = {
      "venderId": "" + $.joinVenderId + "",
      "shopId": "" + $.joinVenderId + "",
      "bindByVerifyCodeFlag": 1,
      "registerExtend": {},
      "writeChildFlag": 0,
      "channel": 406
    };
    $.shopactivityId == "" && delete _0x30f7ff.activityId;
    let _0x1e9ec1 = {
      "appId": "27004",
      "fn": "bindWithVender",
      "body": _0x30f7ff,
      "apid": "shopmember_m_jd_com",
      "ver": "9.2.0",
      "cl": "H5",
      "user": $.UserName,
      "code": 0,
      "ua": $.UA
    };
    _0x30f7ff = await dyy.getbody(_0x1e9ec1);
    const _0x46b205 = {
      "url": "https://api.m.jd.com/client.action?" + _0x30f7ff + "&uuid=88888",
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x200783,
        "origin": "https://shopmember.m.jd.com/",
        "user-agent": $.UA
      },
      "timeout": 30000
    };
    $.dget(_0x46b205, async (_0x3fc507, _0x27b129, _0x5c8e67) => {
      try {
        {
          _0x5c8e67 = _0x5c8e67 && _0x5c8e67.match(/jsonp_.*?\((.*?)\);/) && _0x5c8e67.match(/jsonp_.*?\((.*?)\);/)[1] || _0x5c8e67;
          let _0x571401 = $.toObj(_0x5c8e67, _0x5c8e67);
          if (_0x571401 && typeof _0x571401 == "object") {
            if (_0x571401 && _0x571401.success === true) {
              console.log("    " + _0x571401.message);
              $.errorJoinShop = _0x571401.message;
              if (_0x571401.result && _0x571401.result.giftInfo) for (let _0x4016c1 of _0x571401.result.giftInfo.giftList) {
                console.log("" + "入会获得:" + _0x4016c1.discountString + _0x4016c1.prizeName + _0x4016c1.secondLineDesc);
              }
            } else {
              _0x571401 && typeof _0x571401 == "object" && _0x571401.message ? ($.errorJoinShop = _0x571401.message, console.log("" + (_0x571401.message || ""))) : console.log(_0x5c8e67);
            }
          } else {
            console.log(_0x5c8e67);
          }
        }
      } catch (_0x2812f2) {
        $.logErr(_0x2812f2, _0x27b129);
      } finally {
        _0x5d7217();
      }
    });
  });
}
async function _0x2cc105() {
  return new Promise(async _0x5c60c4 => {
    {
      let _0x40f7c6 = {
          "venderId": $.joinVenderId,
          "payUpShop": true,
          "queryVersion": "10.5.2",
          "appid": "ef79a",
          "needSecurity": true,
          "bizId": "shop_view_app",
          "channel": 406
        },
        _0x20f8c4 = {
          "appId": "ef79a",
          "fn": "getShopOpenCardInfo",
          "body": _0x40f7c6,
          "apid": "jd_shop_member",
          "ver": "9.2.0",
          "cl": "H5",
          "user": $.UserName,
          "code": 0,
          "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        };
      _0x40f7c6 = await dyy.getbody(_0x20f8c4);
      const _0x5d9c55 = {
        "url": "https://api.m.jd.com/client.action?" + _0x40f7c6 + "&uuid=88888",
        "headers": {
          "accept": "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "cookie": _0x200783,
          "origin": "https://shopmember.m.jd.com/",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
        },
        "timeout": 60000
      };
      $.get(_0x5d9c55, async (_0x10495c, _0x3e8663, _0x34a565) => {
        try {
          _0x34a565 = _0x34a565 && _0x34a565.match(/jsonp_.*?\((.*?)\);/) && _0x34a565.match(/jsonp_.*?\((.*?)\);/)[1] || _0x34a565;
          let _0x3556e3 = $.toObj(_0x34a565, _0x34a565);
          _0x3556e3 && typeof _0x3556e3 == "object" ? _0x3556e3 && _0x3556e3.success == true && (console.log("去加入 -> " + (_0x3556e3.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x3556e3.result[0].interestsRuleList && _0x3556e3.result[0].interestsRuleList[0] && _0x3556e3.result[0].interestsRuleList[0].interestsInfo && _0x3556e3.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x34a565);
        } catch (_0x18ecde) {
          $.logErr(_0x18ecde, _0x3e8663);
        } finally {
          _0x5c60c4();
        }
      });
    }
  });
}
function _0x490d2c(_0x546441, _0x54a0e3) {
  return Math.floor(Math.random() * (_0x54a0e3 - _0x546441)) + _0x546441;
}
function _0x4e70d1(_0x20a5e6 = +new Date()) {
  var _0x1ed1d2 = new Date(_0x20a5e6 + 28800000);
  return _0x1ed1d2.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x3eb706() {
  return new Promise(_0xbf0b4d => {
    const _0x5b109b = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x200783,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x5b109b, (_0x3d03f6, _0x5ca5cc, _0x5e333d) => {
      try {
        if (_0x5e333d) {
          {
            _0x5e333d = JSON.parse(_0x5e333d);
            if (_0x5e333d.islogin === "1") {} else _0x5e333d.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x1284b4) {
        console.log(_0x1284b4);
      } finally {
        _0xbf0b4d();
      }
    });
  });
}

function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { const {execSync} = require('child_process');execSync('sleep 30'); return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { const {execSync} = require('child_process');execSync('sleep 30'); var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }