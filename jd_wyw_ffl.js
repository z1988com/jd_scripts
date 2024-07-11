/*
35 0-23/3 * * * jd_wyw_ffl.js
*/

const $ = new Env('玩一玩-翻翻乐');
const bdy_0x2d2f06 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x3d38c8 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x4ff426 = require("./function/dylans"),
  bdy_0x4bff68 = require("./function/dylib.js"),
  bdy_0x526e28 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100",
  bdy_0x480def = process.env.WYW_DBCOUNT ? process.env.WYW_DBCOUNT : "1";
let bdy_0x51b4ca = "",
  bdy_0x252c8a = {};
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    bdy_0x252c8a = require("./function/proxy.js");
    $.dget = bdy_0x252c8a.intoRequest($.get.bind($));
    $.dpost = bdy_0x252c8a.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x9905c = [],
  bdy_0xe29040 = "",
  bdy_0x58d725 = 9036 + 394 * -12 + -4308;
if ($.isNode()) {
  var bdy_0x5652d6 = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(bdy_0x2d2f06).forEach(_0x4af453 => {
    bdy_0x9905c.push(bdy_0x2d2f06[_0x4af453]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x9905c = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x330579 => _0x330579.cookie)].filter(_0x5437e7 => !!_0x5437e7);
}
const bdy_0x45449f = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  bdy_0x354b87 = new Date().setHours(bdy_0x45449f);
$.helpId = [];
$.fullId = [];
!(async () => {
  if (!bdy_0x9905c[-2 * -4374 + 8359 + -1 * 17107]) {
    const _0x25858b = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x25858b);
    return;
  }
  console.log("当前版本：20240708 ");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_DBNUM='200' 翻翻乐投注多少奖票，默认100\n    WYW_DBCOUNT='2' 翻倍次数，默认1");
  console.log("\n每天可参与10次，每次投注最大100");
  $.total_join = -2079 + -3096 * 2 + 8271;
  $.total_suc = -1 * 474 + 1658 + -1184;
  for (let _0x666612 = 3006 + -1 * 7599 + 4593; _0x666612 < bdy_0x9905c.length; _0x666612++) {
    bdy_0xe29040 = bdy_0x9905c[_0x666612];
    originCookie = bdy_0x9905c[_0x666612];
    if (bdy_0xe29040) {
      $.UserName = decodeURIComponent(bdy_0xe29040.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0xe29040.match(/pt_pin=([^; ]+)(?=;?)/)[-2081 * -4 + 9091 + -1 * 17414]);
	  
	  if($.UserName == "jd_50372081dbc4c" || $.UserName == "hjiahui_m" || $.UserName == "jd_FJDHxgZSUfgD"  || $.UserName == "jd_hUAtWfbkEhbI" || $.UserName == "李厚才"    || $.UserName == "jd_685ab0b493712"   || $.UserName == "jd_TXjFVtOIjvqp"  || $.UserName == "jd_59e73f887dcda"  || $.UserName == "YANG138138"  || $.UserName == "wdXUzazTIXdHEH"   || $.UserName == "jd_4d0a8b1d27ece" ){
		  $.msg($.UserName,"黑号跳过");
		   continue;
	  }
	  
      $.index = _0x666612 + (-19 * -91 + 14 * -577 + 6350);
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      bdy_0x51b4ca = bdy_0x526e28;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x54f247();
      if (!$.isLogin) {
        const _0x56eb03 = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x56eb03);
        $.isNode() && (await bdy_0x3d38c8.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      $.index != -1 * 9757 + -5907 * -1 + 3851 && bdy_0x252c8a.swip && (await bdy_0x252c8a.swip());
      await bdy_0x4d1d1a();
      if ($.outFlag) {
        break;
      }
    }
  }
  console.log("\n以上执行账号今日总战绩：" + $.total_suc + "/" + $.total_join + " 胜率：" + ($.total_suc / $.total_join * (8 * -144 + -2114 + 3366)).toFixed(12810 + -12808) + "%");
})().catch(_0x5b94e1 => {
  return $.logErr(_0x5b94e1);
}).finally(() => {
  return $.done();
});
async function bdy_0x591360() {
  for (let _0x1eb67b = -2947 + 1293 + 1654; _0x1eb67b < bdy_0x9905c.length; _0x1eb67b++) {
    {
      bdy_0xe29040 = bdy_0x9905c[_0x1eb67b];
      if (bdy_0xe29040) {
        {
          $.UserName = decodeURIComponent(bdy_0xe29040.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0xe29040.match(/pt_pin=([^; ]+)(?=;?)/)[-3724 + -5 * 1850 + 12975]);
          $.index = _0x1eb67b + (2377 + -3414 + 1038);
          console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
          bdy_0x54f247();
          $.nonum = false;
          $.hphotflag = false;
          $.fullId.length != 11212 + -11212 && ($.helpId = $.helpId.filter(_0x7c033f => !$.fullId.includes(_0x7c033f)), $.fullId = []);
          for (let _0x20c763 of $.helpId) {
            $.itemId = _0x20c763;
            console.log("去助力 --> " + $.itemId);
            await bdy_0x46612f("wanyiwan_assist");
            if ($.nonum || $.hphotflag) {
              break;
            }
            await $.wait(parseInt(Math.random() * (-6430 + -3456 + 10886) + (1 * -6310 + 8220 + 90), 8056 + 10 * -839 + 344));
          }
          if ($.outFlag) {
            break;
          }
        }
      }
    }
  }
}
async function bdy_0x4d1d1a() {
  try {
    $.taskList = [];
    $.detailList = [];
    await bdy_0x46612f("turnHappyHome");
    if ($.joinTimes === "") {
      return;
    }
    if (parseInt(bdy_0x51b4ca) > -7288 + -4287 * 1 + 11675) {
      bdy_0x51b4ca = 366 + -2149 + 1883;
    }
    if ($.joinTimes == -7021 + -7117 + 14148) {
      console.log("\n今日已翻10次，明日再来吧！");
    } else {
      if ($.leftTime == 1391 + -2 * 3457 + 5523) {
        console.log("\n去翻翻乐(投注" + bdy_0x51b4ca + "奖票,翻倍" + bdy_0x480def + "次)...");
        $.dbsuc = false;
        for (let _0x59e1a3 = -8968 + -263 * 37 + -18699 * -1; _0x59e1a3 < bdy_0x480def; _0x59e1a3++) {
          console.log("开始" + (_0x59e1a3 + (1921 + 1 * -2671 + 751)) + "次翻倍...");
          if (_0x59e1a3 > -9349 + -3807 * -2 + 1735) {
            bdy_0x51b4ca = -(-548 * 10 + 1839 + 3642);
          }
          await bdy_0x46612f("turnHappyDouble");
          if (!$.dbsuc) {
            break;
          }
		  await $.wait(1000*30)
          await $.wait(parseInt(Math.random() * (7617 + -4410 + -2207) + (-6218 + 6224 + 1494), 11857 + -11847));
        }
        $.dbsuc && (await bdy_0x46612f("turnHappyReceive"));
      } else {
        console.log("\n" + bdy_0x4bff68.SecToTime(parseInt($.leftTime / (-2474 * -2 + -97 * -7 + -4627 * 1))) + "后可参与翻翻乐");
      }
    }
	await $.wait(1000*30)
	
    await $.wait(parseInt(Math.random() * (7689 + -1211 * -5 + -14 * 946) + (-1 * -8081 + 6153 + -13734), 5882 + -213 * -26 + 10 * -1141));
    await bdy_0x46612f("turnHappyDetailList", 6548 + -390 + 47 * -131);
    $.detailList.length == 4766 + -72 * 8 + -4160 && (await $.wait(parseInt(Math.random() * (-5250 + 5112 + 638) + (491 * -7 + 619 * -13 + 11984), -1405 + -5536 + -6951 * -1)), await bdy_0x46612f("turnHappyDetailList", -4 * -1637 + -3 * 697 + -5 * 891));
    if ($.detailList.length != 9739 + -1 * 7937 + -1802) {
      let _0x31e746 = new Date().getDate(),
        _0xa397ab = $.detailList.filter(_0xea90c3 => new Date(_0xea90c3.time).getDate() == _0x31e746 && _0xea90c3.operateType == -6114 * -1 + -36 * 57 + -4061),
        _0x1ecd98 = $.detailList.filter(_0x3c51af => new Date(_0x3c51af.time).getDate() == _0x31e746 && _0x3c51af.operateType == -1263 + 1662 + -396),
        _0x62ee18 = _0x1ecd98.reduce((_0x42a06e, _0x2441e5) => _0x42a06e + _0x2441e5.num, 9514 + -9879 + 365),
        _0x2d276b = _0xa397ab.reduce((_0x259301, _0x17aa81) => _0x259301 + _0x17aa81.num, -417 * 9 + 9556 + 829 * -7),
        _0x2aff53 = _0x2d276b - _0x62ee18;
      console.log("\n今日翻倍战绩：" + _0xa397ab.length + "/" + _0x1ecd98.length + " " + (_0x1ecd98.length > -7213 * 1 + -397 * -23 + 137 * -14 ? "胜率：" + (_0xa397ab.length / _0x1ecd98.length * (268 + -6260 + -2 * -3046)).toFixed(-1 * 5533 + -6882 + 12417) + "%" : "") + " 【" + (_0x2aff53 >= -113 * -46 + 4563 + -9761 ? "赚" : "亏") + " " + Math.abs(_0x2aff53) + "奖票】");
      let _0x4b1d1b = new Date().getDate() - (-3373 + 187 + 3187),
        _0xfc1d01 = $.detailList.filter(_0x1d9aa9 => new Date(_0x1d9aa9.time).getDate() == _0x4b1d1b && _0x1d9aa9.operateType == 5531 + 5083 * -1 + -447 * 1),
        _0x201601 = $.detailList.filter(_0x3c13c7 => new Date(_0x3c13c7.time).getDate() == _0x4b1d1b && _0x3c13c7.operateType == -7339 * -1 + -3938 + -3398);
      console.log("昨日翻倍战绩：" + _0xfc1d01.length + "/" + _0x201601.length + " " + (_0x201601.length > -9310 + -34 * -239 + -148 * -8 ? "胜率：" + (_0xfc1d01.length / _0x201601.length * (-1 * 1166 + -4 * 2381 + 10790)).toFixed(-1 * 838 + -2810 + 3650) + "%" : ""));
      $.total_join += _0x1ecd98.length;
      $.total_suc += _0xa397ab.length;
    } else {
      console.log("\n没有历史翻倍战绩");
    }
    await $.wait(parseInt(Math.random() * (151 + -3 * 2787 + -9210 * -1) + (713 + -4734 + 6021), 5622 + -1 * -9036 + -14648));
  } catch (_0x4b0cef) {
    console.log(_0x4b0cef);
  }
}
async function bdy_0x46612f(_0x37c7e1, ..._0x59edc7) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x5684a3 = "",
    _0x4afacd,
    _0x54bba4,
    _0x49576a = "post",
    _0xb58ebc = "https://api.m.jd.com/client.action",
    _0x5c4758 = "signed_wh5";
  switch (_0x37c7e1) {
    case "wanyiwan_sign":
      const _0x1f377 = {
        version: 1
      };
      _0x5684a3 = _0x1f377;
      _0x4afacd = "d12dd";
      _0x54bba4 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0x210390 = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0x5684a3 = _0x210390;
      _0x4afacd = "c81ad";
      _0x54bba4 = "wanyiwan_home";
      break;
    case "apTaskList":
      _0xb58ebc = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x49576a = "get";
      break;
    case "startTask":
      const _0x354c29 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0x5684a3 = _0x354c29;
      _0x4afacd = "89db2";
      _0x54bba4 = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x37108e = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x5684a3 = _0x37108e;
      _0x4afacd = "89db2";
      _0x54bba4 = "wanyiwan_do_task";
      break;
    case "award":
      const _0x28343d = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x5684a3 = _0x28343d;
      _0x54bba4 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x407831 = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x5684a3 = _0x407831;
      _0x4afacd = "ba505";
      _0x54bba4 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0xb58ebc = "https://api.m.jd.com/api";
      const _0x5d4954 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x5684a3 = _0x5d4954;
      _0x5c4758 = "activities_platform";
      _0x54bba4 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0xb58ebc = "https://api.m.jd.com/api";
      _0x5684a3 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x51b4ca)
      };
      _0x4afacd = "614f1";
      _0x5c4758 = "activities_platform";
      _0x54bba4 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0xb58ebc = "https://api.m.jd.com/api";
      const _0x9c68d0 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x5684a3 = _0x9c68d0;
      _0x4afacd = "25fac";
      _0x5c4758 = "activities_platform";
      _0x54bba4 = "turnHappyReceive";
      break;
    case "turnHappyDetailList":
      _0xb58ebc = "https://api.m.jd.com/api";
      const _0x477eab = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        pageNum: _0x59edc7[-4806 * -1 + -1660 + 2 * -1573],
        pageSize: 50
      };
      _0x5684a3 = _0x477eab;
      _0x5c4758 = "activities_platform";
      _0x54bba4 = "turnHappyDetailList";
      break;
    case "superRedBagHome":
      _0xb58ebc = "https://api.m.jd.com/api";
      const _0x56c47e = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x5684a3 = _0x56c47e;
      _0x4afacd = "5be1b";
      _0x5c4758 = "activity_platform_se";
      _0x54bba4 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0xb58ebc = "https://api.m.jd.com/api";
      const _0x323c3b = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x5684a3 = _0x323c3b;
      _0x4afacd = "89cfe";
      _0x5c4758 = "activity_platform_se";
      _0x54bba4 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x37c7e1);
  }
  if (_0x4afacd) {
    let _0x5c0484 = {
      appId: _0x4afacd,
      functionId: _0x54bba4,
      body: _0x5684a3,
      appid: _0x5c4758,
      clientVersion: $.UA.split(";")[4184 + 1969 * -5 + 5663],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x5684a3 = await bdy_0x4ff426.getbody(_0x5c0484);
    if (!_0x5684a3) {
      return;
    }
  } else {
    _0x5684a3 && (_0x5684a3 = "functionId=" + _0x54bba4 + "&body=" + encodeURIComponent(JSON.stringify(_0x5684a3)) + "&t=" + Date.now() + "&appid=" + _0x5c4758 + "&client=ios&" + $.UA.split(";")[-1226 * 1 + 1107 + -121 * -1] + "&cthr=1&networkType=wifi");
  }
  let _0x23a937 = bdy_0x114e0a(_0xb58ebc, _0x5684a3);
  return new Promise(async _0x32923b => {
    $["d" + _0x49576a](_0x23a937, async (_0x1af343, _0x477a1d, _0x174434) => {
      try {
        if (_0x1af343) {
          if (_0x477a1d && typeof _0x477a1d.statusCode != "undefined") {
            if (_0x477a1d.statusCode == 13238 + -12745) {
              if (bdy_0x58d725 < -4280 + -6 + 4292) {
                bdy_0x58d725++;
                await bdy_0x46612f(_0x37c7e1);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0x1af343, _0x1af343));
        } else {
          if (_0x174434.includes("doctype") && bdy_0x58d725 < -7566 * -1 + 6492 + 3513 * -4) {
            bdy_0x58d725++;
            await bdy_0x46612f(_0x37c7e1);
            return;
          }
          bdy_0x58d725 = 14447 + -14447;
          bdy_0x2cd52c(_0x37c7e1, _0x174434);
        }
      } catch (_0x19d6f7) {
        console.log(_0x19d6f7, _0x477a1d);
      } finally {
        _0x32923b();
      }
    });
  });
}
function bdy_0x5a6825(_0x407264) {
  let _0x38da37 = "";
  switch (type) {
    case [_0x38da37]:
      const _0x44c731 = {
        ed: ed
      };
      _0xf1f6le = _0x44c731;
      break;
    case [_0x38da37]:
      const _0x12aa30 = {
        bd: bd
      };
      _0xf1f6lc = _0x12aa30;
      break;
    case [_0x38da37]:
      const _0x554789 = {
        ed: ed
      };
      _0xf1f6lf = _0x554789;
      break;
    case [_0x38da37]:
      const _0x3b0741 = {
        ed: ed
      };
      _0xf1f6lg = _0x3b0741;
      break;
    case [_0x38da37]:
      const _0x2c7f0c = {
        ed: ed
      };
      _0xf1f6lv = _0x2c7f0c;
      break;
  }
}
async function bdy_0x2cd52c(_0x900954, _0x54d875) {
  let _0x1e3ee3 = "";
  try {
    _0x1e3ee3 = JSON.parse(_0x54d875);
  } catch (_0x6456b9) {
    console.log(_0x900954 + " 执行任务异常");
  }
  try {
    switch (_0x900954) {
      case "award":
        _0x1e3ee3.code == -6169 + -43 * 16 + 6857 ? _0x1e3ee3.data.bizCode == 7803 + -4106 + 3697 * -1 ? console.log("任务完成，获得" + _0x1e3ee3.data.result.rewardCount + "奖票 🎫") : console.log(_0x1e3ee3.data.bizMsg) : console.log(_0x1e3ee3.message);
        break;
      case "wanyiwan_sign":
        _0x1e3ee3.code == -1 * -821 + -3181 * -2 + 7183 * -1 ? _0x1e3ee3.data.bizCode == 9934 + -9934 ? console.log("签到成功,获得" + _0x1e3ee3.data.result.getScore + "奖票 🎫") : console.log(_0x1e3ee3.data.bizMsg) : console.log(_0x1e3ee3.message);
        break;
      case "wanyiwan_assist":
        if (_0x1e3ee3.code == -69 * -57 + 3667 + -7600) {
          if (_0x1e3ee3.data.bizCode == -7 * -1162 + 498 * -8 + -4150) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x1e3ee3.data.bizMsg.includes("太多人") || _0x1e3ee3.data.bizMsg.includes("重复")) {
              console.log("❌", _0x1e3ee3.data.bizCode, _0x1e3ee3.data.bizMsg);
              $.nonum = true;
            } else {
              if (_0x1e3ee3.data.bizMsg.includes("已经完成")) {
                console.log("❌", _0x1e3ee3.data.bizCode, _0x1e3ee3.data.bizMsg);
                $.fullId.push($.itemId);
              } else {
                _0x1e3ee3.data.bizMsg.includes("火爆") ? (console.log("❌", _0x1e3ee3.data.bizCode, _0x1e3ee3.data.bizMsg), $.hphotflag = true) : console.log("❌", _0x1e3ee3.data.bizCode, _0x1e3ee3.data.bizMsg);
              }
            }
          }
        } else {
          console.log(_0x1e3ee3.message);
          _0x1e3ee3.message.includes("火爆") && ($.hphotflag = true);
        }
        break;
      case "wanyiwan_home":
        _0x1e3ee3.code == -1 * 4177 + -25 * -239 + -62 * 29 ? _0x1e3ee3.data.bizCode == -5 * -904 + -61 * -49 + -7509 ? (_0x1e3ee3.data.result.popWindows.length != -6586 + 9119 + -1 * 2533 && console.log("获得新手奖励：", _0x1e3ee3.data.result.popWindows[-6249 + -1825 + 8074].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x1e3ee3.data.result.score + " 🎫"), $.isLogin = _0x1e3ee3.data?.["result"]?.["isLogin"], $.taskList = _0x1e3ee3.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x1e3ee3.data?.["result"]?.["signBoard"]?.["status"] || 11625 + -11625) : console.log(_0x1e3ee3.data.bizMsg) : console.log(_0x1e3ee3.message);
        break;
      case "turnHappyHome":
        _0x1e3ee3.success ? ($.leftTime = _0x1e3ee3.data.leftTime, $.joinTimes = _0x1e3ee3.data.joinTimes, $.logIn = _0x1e3ee3.data.logIn) : (console.log(_0x1e3ee3.errMsg), $.leftTime = "", $.joinTimes = "");
        break;
      case "turnHappyDouble":
        if (_0x1e3ee3.success) {
          {
            if (_0x1e3ee3.data.rewardState == 12543 + 6271 * -2) {
              console.log("翻倍成功，获得 " + _0x1e3ee3.data.rewardValue + "奖票 🎫");
              $.dbsuc = true;
            } else {
              {
                $.dbsuc = false;
                console.log("叼了，翻倍失败！再接再厉！");
              }
            }
          }
        } else {
          console.log(_0x1e3ee3.errMsg);
          $.dbsuc = false;
        }
        break;
      case "turnHappyDouble":
        if (_0x1e3ee3.success) {
          {
            if (_0x1e3ee3.data.rewardState == 11626 + -93 * 125) {
              console.log("翻倍成功，获得 " + _0x1e3ee3.data.rewardValue + "奖票 🎫");
              $.dbsuc = true;
            } else {
              {
                $.dbsuc = false;
                console.log("叼了，翻倍失败！再接再厉！");
              }
            }
          }
        } else {
          {
            console.log(_0x1e3ee3.errMsg);
            $.dbsuc = false;
          }
        }
        break;
      case "turnHappyDetailList":
        if (_0x1e3ee3.success) {
          if ($.detailList.length == -5770 + 742 + 5028) {
            $.detailList = _0x1e3ee3.data.result.detailList || [];
          } else {
            $.detailList = $.detailList.concat(_0x1e3ee3.data.result.detailList || []);
          }
        } else {
          console.log(_0x1e3ee3.errMsg);
          $.detailList = [];
        }
        break;
      case "superRedBagHome":
        _0x1e3ee3.success ? ($.sceneStatus = _0x1e3ee3.data.sceneStatus, $.nextLeftTime = _0x1e3ee3.data.nextLeftTime) : console.log(_0x1e3ee3.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x1e3ee3.success) {
          $.shakeLeftTime = _0x1e3ee3.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x1e3ee3.data;
          if (prizeDrawVo) {
            switch (prizeDrawVo.prizeType) {
              case 4136 + 257 * -16:
                console.log("获得：" + prizeDrawVo.amount + "票奖 🎫");
                $.sucdraw++;
                break;
              case -821 + -449 * 11 + 5761:
                console.log("获得:" + prizeDrawVo.prizeConfigName);
                break;
              default:
                console.log(prizeDrawVo);
                break;
            }
          } else {
            console.log(_0x54d875);
          }
        } else {
          console.log(_0x1e3ee3.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x900954 + " -> " + _0x54d875);
    }
    typeof _0x1e3ee3 == "object" && _0x1e3ee3.errorMessage && _0x1e3ee3.errorMessage.indexOf("火爆") > -(4376 * -2 + -9583 * 1 + 18336) && ($.hotFlag = true);
  } catch (_0x4b870f) {
    {
      console.log(_0x900954 + " " + _0x4b870f);
    }
  }
}
function bdy_0x114e0a(_0x2c9012, _0x2f2565) {
  let _0x142532 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0xe29040,
    "User-Agent": $.UA
  };
  const _0xf7c4a7 = {
    url: _0x2c9012,
    headers: _0x142532,
    timeout: 30000,
    ...(_0x2f2565 ? {
      body: _0x2f2565
    } : {})
  };
  return _0xf7c4a7;
}
async function bdy_0x54f247() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x16d36f(6372 + -6332 * 1) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x16d36f(_0x426f6c) {
  _0x426f6c = _0x426f6c || 1356 + -9300 + -2 * -3988;
  let _0x122516 = "abcdef0123456789",
    _0x4069a2 = _0x122516.length,
    _0x543fda = "";
  for (i = 11456 + -11456; i < _0x426f6c; i++) {
    _0x543fda += _0x122516.charAt(Math.floor(Math.random() * _0x4069a2));
  }
  return _0x543fda;
}
function bdy_0x50dec6(_0x4cd8bc) {
  if (typeof _0x4cd8bc == "string") {
    try {
      return JSON.parse(_0x4cd8bc);
    } catch (_0x20068a) {
      {
        console.log(_0x20068a);
        $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
        return [];
      }
    }
  }
}
async function bdy_0x3ed1c5() {
  if (!$.joinVenderId) {
    {
      return;
    }
  }
  return new Promise(async _0x5c1722 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x146fab = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x146fab.activityId;
    let _0x360380 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x146fab,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x146fab = await dyy.getbody(_0x360380);
    const _0x40e329 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0xe29040,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x573eed = {
      url: "https://api.m.jd.com/client.action?" + _0x146fab + "&uuid=88888",
      headers: _0x40e329,
      timeout: 30000
    };
    $.dget(_0x573eed, async (_0x2dc40e, _0x11e523, _0x45e747) => {
      try {
        _0x45e747 = _0x45e747 && _0x45e747.match(/jsonp_.*?\((.*?)\);/) && _0x45e747.match(/jsonp_.*?\((.*?)\);/)[3 * -2767 + -1093 * 2 + 10488] || _0x45e747;
        let _0xf0df16 = $.toObj(_0x45e747, _0x45e747);
        if (_0xf0df16 && typeof _0xf0df16 == "object") {
          if (_0xf0df16 && _0xf0df16.success === true) {
            console.log("    " + _0xf0df16.message);
            $.errorJoinShop = _0xf0df16.message;
            if (_0xf0df16.result && _0xf0df16.result.giftInfo) {
              for (let _0x1842f8 of _0xf0df16.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x1842f8.discountString + _0x1842f8.prizeName + _0x1842f8.secondLineDesc);
              }
            }
          } else {
            _0xf0df16 && typeof _0xf0df16 == "object" && _0xf0df16.message ? ($.errorJoinShop = _0xf0df16.message, console.log("" + (_0xf0df16.message || ""))) : console.log(_0x45e747);
          }
        } else {
          console.log(_0x45e747);
        }
      } catch (_0xbcacc7) {
        $.logErr(_0xbcacc7, _0x11e523);
      } finally {
        _0x5c1722();
      }
    });
  });
}
async function bdy_0x2d7f5b() {
  return new Promise(async _0x379186 => {
    let _0x33b205 = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x31735b = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x33b205,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x33b205 = await dyy.getbody(_0x31735b);
    const _0x463c16 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0xe29040,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x509b76 = {
      url: "https://api.m.jd.com/client.action?" + _0x33b205 + "&uuid=88888",
      headers: _0x463c16,
      timeout: 60000
    };
    $.get(_0x509b76, async (_0x29dbc7, _0x2790a8, _0x3ea63f) => {
      try {
        _0x3ea63f = _0x3ea63f && _0x3ea63f.match(/jsonp_.*?\((.*?)\);/) && _0x3ea63f.match(/jsonp_.*?\((.*?)\);/)[-438 * -19 + -1313 + -7008] || _0x3ea63f;
        let _0x14efc6 = $.toObj(_0x3ea63f, _0x3ea63f);
        if (_0x14efc6 && typeof _0x14efc6 == "object") {
          {
            _0x14efc6 && _0x14efc6.success == true && (console.log("去加入 -> " + (_0x14efc6.result[1570 + 3 * -416 + -322].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x14efc6.result[-17 * -313 + 8250 + -13571].interestsRuleList && _0x14efc6.result[5743 * -1 + -1 * -5449 + 294].interestsRuleList[-3521 + 23 * -398 + 12675] && _0x14efc6.result[-3170 + 373 + 2797].interestsRuleList[-1606 + 355 + 1251].interestsInfo && _0x14efc6.result[-9964 + -1 * 8320 + 18284].interestsRuleList[1591 + -1 * -379 + -1970].interestsInfo.activityId || "");
          }
        } else {
          console.log(_0x3ea63f);
        }
      } catch (_0x1250c3) {
        $.logErr(_0x1250c3, _0x2790a8);
      } finally {
        _0x379186();
      }
    });
  });
}
function bdy_0x4cf5f3(_0x4d0104, _0x5a9e45) {
  return Math.floor(Math.random() * (_0x5a9e45 - _0x4d0104)) + _0x4d0104;
}
function bdy_0x4f522b(_0x307b50 = +new Date()) {
  var _0x38d9b5 = new Date(_0x307b50 + (9219 + 3505 * -2 + -2201) * (-241 * -14 + 8255 * -1 + 8481) * (2064 + 163 * -35 + 4641));
  return _0x38d9b5.toJSON().substr(166 + -3 * -1269 + -3973, -2029 * -1 + 65 * -74 + 2800).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x4e797a() {
  return new Promise(_0x4fa8f7 => {
    const _0x63bd99 = {
      Cookie: bdy_0xe29040,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x20ebdd = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x63bd99,
      timeout: 10000
    };
    $.get(_0x20ebdd, (_0x409aa9, _0x7088b3, _0x597360) => {
      try {
        if (_0x597360) {
          _0x597360 = JSON.parse(_0x597360);
          if (!(_0x597360.islogin === "1")) {
            _0x597360.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x14b4a9) {
        console.log(_0x14b4a9);
      } finally {
        _0x4fa8f7();
      }
    });
  });
}

function Env(o, t) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? { url: t } : t;
      let s = this.get;
      return (
        "POST" === e && (s = this.post),
        new Promise((r, i) => {
          s.call(this, t, (t, e, s) => {
            t ? i(t) : r(e);
          });
        })
      );
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
		console.log("等待50秒")
      const { execSync } = require("child_process");
      execSync("sleep 50");

      return this.send.call(this.env, t, "POST");
    }
  }
  return new (class {
    constructor(t, e) {
      (this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }),
        (this.logLevelPrefixs = {
          debug: "[DEBUG] ",
          info: "[INFO] ",
          warn: "[WARN] ",
          error: "[ERROR] ",
        }),
        (this.logLevel = "info"),
        (this.name = t),
        (this.http = new s(this)),
        (this.data = null),
        (this.dataFile = "box.dat"),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = "\n"),
        (this.encoding = "utf-8"),
        (this.startTime = new Date().getTime()),
        Object.assign(this, e),
        this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"]
        ? "Surge"
        : "undefined" != typeof $environment && $environment["stash-version"]
          ? "Stash"
          : "undefined" != typeof module && module.exports
            ? "Node.js"
            : "undefined" != typeof $task
              ? "Quantumult X"
              : "undefined" != typeof $loon
                ? "Loon"
                : "undefined" != typeof $rocket
                  ? "Shadowrocket"
                  : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t))
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise((r) => {
        this.get({ url: t }, (t, e, s) => r(s));
      });
    }
    runScript(a, o) {
      return new Promise((r) => {
        let t = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        t = t && t.replace(/\n/g, "").trim();
        var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))
            ? +e
            : 20,
          [s, i] = ((e = o && o.timeout ? o.timeout : e), t.split("@"));
        this.post(
          {
            url: `http://${i}/v1/scripting/evaluate`,
            body: { script_text: a, mock_type: "cron", timeout: e },
            headers: { "X-Key": s, Accept: "*/*" },
            timeout: e,
          },
          (t, e, s) => r(s),
        );
      }).catch((t) => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      (this.fs = this.fs || require("fs")),
        (this.path = this.path || require("path"));
      var t = this.path.resolve(this.dataFile),
        e = this.path.resolve(process.cwd(), this.dataFile),
        s = this.fs.existsSync(t),
        r = !s && this.fs.existsSync(e);
      if (!s && !r) return {};
      r = s ? t : e;
      try {
        return JSON.parse(this.fs.readFileSync(r));
      } catch (t) {
        return {};
      }
    }
    writedata() {
      var t, e, s, r, i;
      this.isNode() &&
        ((this.fs = this.fs || require("fs")),
        (this.path = this.path || require("path")),
        (t = this.path.resolve(this.dataFile)),
        (e = this.path.resolve(process.cwd(), this.dataFile)),
        (r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e)),
        (i = JSON.stringify(this.data)),
        !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i));
    }
    lodash_get(t, e, s) {
      let r = t;
      for (const t of e.replace(/\[(\d+)\]/g, ".$1").split("."))
        if (((r = Object(r)[t]), void 0 === r)) return s;
      return r;
    }
    lodash_set(t, r, e) {
      return (
        Object(t) === t &&
          ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || [])
            .slice(0, -1)
            .reduce(
              (t, e, s) =>
                Object(t[e]) === t[e]
                  ? t[e]
                  : (t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}),
              t,
            )[r[r.length - 1]] = e),
        t
      );
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t);
        if ((s = s ? this.getval(s) : ""))
          try {
            const t = JSON.parse(s);
            e = t ? this.lodash_get(t, r, "") : e;
          } catch (t) {
            e = "";
          }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e),
          a = this.getval(r),
          a = r ? ("null" === a ? null : a || "{}") : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, i, t), (s = this.setval(JSON.stringify(e), r));
        } catch (e) {
          this.lodash_set((a = {}), i, t),
            (s = this.setval(JSON.stringify(a), r));
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          return (this.data = this.loaddata()), this.data[t];
        default:
          return (this.data && this.data[t]) || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          return (
            (this.data = this.loaddata()),
            (this.data[e] = t),
            this.writedata(),
            !0
          );
        default:
          return (this.data && this.data[e]) || null;
      }
    }
    initGotEnv(t) {
      (this.got = this.got || require("got")),
        (this.cktough = this.cktough || require("tough-cookie")),
        (this.ckjar = this.ckjar || new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers || {}), t) &&
          ((t.headers = t.headers || {}), void 0 === t.headers.cookie) &&
          void 0 === t.headers.Cookie &&
          void 0 === t.cookieJar &&
          (t.cookieJar = this.ckjar);
    }
    tmout() {
      return new Promise((t, e) => {
        this.tmoutId = setTimeout(() => {
          this.prms.cancel(), e({ message: "timemout", response: "" });
        }, 5e4);
      });
    }
    get(t, a = () => {}) {
      switch (
        (t.headers &&
          (delete t.headers["Content-Type"],
          delete t.headers["Content-Length"],
          delete t.headers["content-type"],
          delete t.headers["content-length"]),
        t.params && (t.url += "?" + this.queryStr(t.params)),
        void 0 === t.followRedirect ||
          t.followRedirect ||
          ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1),
          this.isQuanX() &&
            (t.opts
              ? (t.opts.redirection = !1)
              : (t.opts = { redirection: !1 }))),
        this.getEnv())
      ) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() &&
            this.isNeedRewrite &&
            ((t.headers = t.headers || {}),
            Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
            $httpClient.get(t, (t, e, s) => {
              !t &&
                e &&
                ((e.body = s),
                (e.statusCode = e.status || e.statusCode),
                (e.status = e.statusCode)),
                a(t, e, s);
            });
          break;
        case "Quantumult X":
          this.isNeedRewrite &&
            ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
            $task.fetch(t).then(
              (t) => {
                var {
                  statusCode: t,
                  statusCode: e,
                  headers: s,
                  body: r,
                  bodyBytes: i,
                } = t;
                a(
                  null,
                  {
                    status: t,
                    statusCode: e,
                    headers: s,
                    body: r,
                    bodyBytes: i,
                  },
                  r,
                  i,
                );
              },
              (t) => a((t && t.error) || "UndefinedError"),
            );
          break;
        case "Node.js":
          this.initGotEnv(t),
            (this.prms = this.got(t).on("redirect", (t, e) => {
              try {
                var s;
                t.headers["set-cookie"] &&
                  ((s = t.headers["set-cookie"]
                    .map(this.cktough.Cookie.parse)
                    .toString()) && this.ckjar.setCookieSync(s, null),
                  (e.cookieJar = this.ckjar));
              } catch (t) {
                this.logErr(t);
              }
            })),
            Promise.race([this.prms, this.tmout()]).then(
              (t) => {
                var {
                  statusCode: t,
                  statusCode: e,
                  headers: s,
                  rawBody: r,
                  body: i,
                } = t;
                a(
                  null,
                  { status: t, statusCode: e, headers: s, rawBody: r, body: i },
                  i,
                ),
                  clearTimeout(this.tmoutId);
              },
              (t) => {
                var { message: t, response: e } = t;
                clearTimeout(this.tmoutId), a(t, e, e && e.body);
              },
            );
      }
    }
    post(t, a = () => {}) {
	  var e = t.method ? t.method.toLocaleLowerCase() : "post";

      switch (
        (t.body &&
          t.headers &&
          !t.headers["Content-Type"] &&
          !t.headers["content-type"] &&
          (t.headers["content-type"] = "application/x-www-form-urlencoded"),
        t.headers &&
          (delete t.headers["Content-Length"],
          delete t.headers["content-length"]),
        void 0 === t.followRedirect ||
          t.followRedirect ||
          ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1),
          this.isQuanX() &&
            (t.opts
              ? (t.opts.redirection = !1)
              : (t.opts = { redirection: !1 }))),
        this.getEnv())
      ) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() &&
            this.isNeedRewrite &&
            ((t.headers = t.headers || {}),
            Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
            $httpClient[e](t, (t, e, s) => {
              !t &&
                e &&
                ((e.body = s),
                (e.statusCode = e.status || e.statusCode),
                (e.status = e.statusCode)),
                a(t, e, s);
            });
          break;
        case "Quantumult X":
          (t.method = e),
            this.isNeedRewrite &&
              ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
            $task.fetch(t).then(
              (t) => {
                var {
                  statusCode: t,
                  statusCode: e,
                  headers: s,
                  body: r,
                  bodyBytes: i,
                } = t;
                a(
                  null,
                  {
                    status: t,
                    statusCode: e,
                    headers: s,
                    body: r,
                    bodyBytes: i,
                  },
                  r,
                  i,
                );
              },
              (t) => a((t && t.error) || "UndefinedError"),
            );
          break;
        case "Node.js":
          this.initGotEnv(t);
          var { url: s, ...r } = t;
          (this.prms = this.got[e](s, r)),
            Promise.race([this.prms, this.tmout()]).then(
              (t) => {
                var {
                  statusCode: t,
                  statusCode: e,
                  headers: s,
                  rawBody: r,
                  body: i,
                } = t;
                a(
                  null,
                  { status: t, statusCode: e, headers: s, rawBody: r, body: i },
                  i,
                ),
                  clearTimeout(this.tmoutId);
              },
              (t) => {
                var { message: t, response: e } = t;
                clearTimeout(this.tmoutId), a(t, e, e && e.body);
              },
            );
      }
    }
    time(t, e = null) {
      var s,
        r = {
          "M+": (e = e ? new Date(e) : new Date()).getMonth() + 1,
          "d+": e.getDate(),
          "H+": e.getHours(),
          "m+": e.getMinutes(),
          "s+": e.getSeconds(),
          "q+": Math.floor((e.getMonth() + 3) / 3),
          S: e.getMilliseconds(),
        };
      for (s in (/(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (e.getFullYear() + "").substr(4 - RegExp.$1.length),
        )),
      r))
        new RegExp("(" + s + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? r[s]
              : ("00" + r[s]).substr(("" + r[s]).length),
          ));
      return t;
    }
    queryStr(e) {
      let s = "";
      for (const r in e) {
        let t = e[r];
        null != t &&
          "" !== t &&
          ("object" == typeof t && (t = JSON.stringify(t)),
          (s += `${r}=${t}&`));
      }
      return (s = s.substring(0, s.length - 1));
    }
    msg(t = o, e = "", s = "", r = {}) {
      var i,
        a = (r) => {
          const { $open: t, $copy: e, $media: i, $mediaMime: a } = r;
          switch (typeof r) {
            case void 0:
              return r;
            case "string":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                default:
                  return { url: r };
                case "Loon":
                case "Shadowrocket":
                  return r;
                case "Quantumult X":
                  return { "open-url": r };
                case "Node.js":
                  return;
              }
            case "object":
              switch (this.getEnv()) {
                case "Surge":
                case "Stash":
                case "Shadowrocket":
                default:
                  var o = {},
                    s = r.openUrl || r.url || r["open-url"] || t;
                  if (
                    (s && Object.assign(o, { action: "open-url", url: s }),
                    (s = r["update-pasteboard"] || r.updatePasteboard || e) &&
                      Object.assign(o, { action: "clipboard", text: s }),
                    i)
                  ) {
                    let t, e, s;
                    if (i.startsWith("http")) t = i;
                    else if (i.startsWith("data:")) {
                      const [r] = i.split(";"),
                        [, a] = i.split(",");
                      (e = a), (s = r.replace("data:", ""));
                    } else
                      (e = i),
                        (s = ((t) => {
                          var e,
                            s = {
                              JVBERi0: "application/pdf",
                              R0lGODdh: "image/gif",
                              R0lGODlh: "image/gif",
                              iVBORw0KGgo: "image/png",
                              "/9j/": "image/jpg",
                            };
                          for (e in s) if (0 === t.indexOf(e)) return s[e];
                          return null;
                        })(i));
                    Object.assign(o, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": a ?? s,
                    });
                  }
                  return (
                    Object.assign(o, {
                      "auto-dismiss": r["auto-dismiss"],
                      sound: r.sound,
                    }),
                    o
                  );
                case "Loon": {
                  const e = {};
                  (s = r.openUrl || r.url || r["open-url"] || t) &&
                    Object.assign(e, { openUrl: s });
                  var n = r.mediaUrl || r["media-url"];
                  return (
                    (n = i?.startsWith("http") ? i : n) &&
                      Object.assign(e, { mediaUrl: n }),
                    console.log(JSON.stringify(e)),
                    e
                  );
                }
                case "Quantumult X": {
                  const a = {};
                  (o = r["open-url"] || r.url || r.openUrl || t) &&
                    Object.assign(a, { "open-url": o });
                  n = r["media-url"] || r.mediaUrl;
                  return (
                    (n = i?.startsWith("http") ? i : n) &&
                      Object.assign(a, { "media-url": n }),
                    (s = r["update-pasteboard"] || r.updatePasteboard || e) &&
                      Object.assign(a, { "update-pasteboard": s }),
                    console.log(JSON.stringify(a)),
                    a
                  );
                }
                case "Node.js":
                  return;
              }
            default:
              return;
          }
        };
      if (!this.isMute)
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(t, e, s, a(r));
            break;
          case "Quantumult X":
            $notify(t, e, s, a(r));
            break;
          case "Node.js":
        }
      this.isMuteLog ||
        ((i = ["", "==============📣系统通知📣=============="]).push(t),
        e && i.push(e),
        s && i.push(s),
        console.log(i.join("\n")),
        (this.logs = this.logs.concat(i)));
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug &&
        (0 < t.length && (this.logs = [...this.logs, ...t]),
        console.log(
          "" +
            this.logLevelPrefixs.debug +
            t.map((t) => t ?? String(t)).join(this.logSeparator),
        ));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info &&
        (0 < t.length && (this.logs = [...this.logs, ...t]),
        console.log(
          "" +
            this.logLevelPrefixs.info +
            t.map((t) => t ?? String(t)).join(this.logSeparator),
        ));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn &&
        (0 < t.length && (this.logs = [...this.logs, ...t]),
        console.log(
          "" +
            this.logLevelPrefixs.warn +
            t.map((t) => t ?? String(t)).join(this.logSeparator),
        ));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error &&
        (0 < t.length && (this.logs = [...this.logs, ...t]),
        console.log(
          "" +
            this.logLevelPrefixs.error +
            t.map((t) => t ?? String(t)).join(this.logSeparator),
        ));
    }
    log(...t) {
      0 < t.length && (this.logs = [...this.logs, ...t]),
        console.log(t.map((t) => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log(
            "",
            `❗️${this.name}, 错误!`,
            void 0 !== t.message ? t.message : t,
          );
      }
    }
    wait(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    done(t = {}) {
      var e = (new Date().getTime() - this.startTime) / 1e3;
      switch (
        (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`),
        this.log(),
        this.getEnv())
      ) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  })(o, t);
}
