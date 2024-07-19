/*
23 5,10 * * * jd_wanyiwan.js
*/

const $ = new Env('玩一玩_任务');

const bdy_0x29554c = function () {
  let _0x15c343 = true;
  return function (_0x1d2d78, _0x225312) {
    const _0x5bac93 = _0x15c343 ? function () {
      if (_0x225312) {
        const _0x4a8216 = _0x225312.apply(_0x1d2d78, arguments);
        _0x225312 = null;
        return _0x4a8216;
      }
    } : function () {};
    _0x15c343 = false;
    return _0x5bac93;
  };
}();
(function () {
  bdy_0x29554c(this, function () {
    const _0x35688d = new RegExp("function *\\( *\\)"),
      _0x552778 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0xabf496 = bdy_0x5153bd("init");
    !_0x35688d.test(_0xabf496 + "chain") || !_0x552778.test(_0xabf496 + "input") ? _0xabf496("0") : bdy_0x5153bd();
  })();
})();
const bdy_0x2430b0 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x1f086 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x2934b9 = require("./function/dylans"),
  bdy_0x313757 = require("./function/dylib.js"),
  bdy_0x102f54 = require("./USER_AGENTS"),
  bdy_0x510184 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100",
  bdy_0x2be560 = process.env.WYW_AUTOBAN ? process.env.WYW_AUTOBAN : "false";
let bdy_0xa7448 = "",
  bdy_0x382ae8 = {};
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    bdy_0x382ae8 = require("./function/proxy.js");
    $.dget = bdy_0x382ae8.intoRequest($.get.bind($));
    $.dpost = bdy_0x382ae8.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0xd6a461 = [],
  bdy_0x4092ac = "",
  bdy_0x316200 = -5 * -103 + -18 * -2 + -551 * 1;
const {
    execSync: bdy_0x57f3d7
  } = require("child_process"),
  bdy_0x23dc02 = require("fs");
if ($.isNode()) {
  var bdy_0x59e881 = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(bdy_0x2430b0).forEach(_0x1f3010 => {
    bdy_0xd6a461.push(bdy_0x2430b0[_0x1f3010]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0xd6a461 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x5adf1d => _0x5adf1d.cookie)].filter(_0x5e581c => !!_0x5e581c);
}
const bdy_0x4cad1a = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  bdy_0x3b6867 = new Date().setHours(bdy_0x4cad1a);
$.helpId = [];
$.fullId = [];
$.apiTokenObj = {};
$.banpin = [];
!(async () => {
  if (!bdy_0xd6a461[5798 + 2899 * -2]) {
    {
      $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
        "open-url": "https://bean.m.jd.com/bean/signIndex.action"
      });
      return;
    }
  }
  console.log("当前版本：20240719");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_HELPTM='15' 几点后关闭助力\n    WYW_AUTOBAN='true' 自动管理黑名单，默认关闭");
  console.log("只做任务和助力");
  for (let _0x369e9f = 16900 + -16900; _0x369e9f < bdy_0xd6a461.length; _0x369e9f++) {
    {
      $.UA = bdy_0x102f54.UARAM ? bdy_0x102f54.UARAM("", bdy_0x4092ac) : bdy_0x102f54.USER_AGENT;
      bdy_0x4092ac = bdy_0x313757.buildck(bdy_0xd6a461[_0x369e9f]);
      if (bdy_0x4092ac) {
        try {
          {
            $.UserName = decodeURIComponent(bdy_0x4092ac.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x4092ac.match(/pt_pin=([^; ]+)(?=;?)/)[-3024 + -5340 + -8365 * -1]);
            $.index = _0x369e9f + (-28 * 142 + 5805 + -1 * 1828);
            $.hotFlag = false;
            $.nickName = "";
            $.isLogin = true;
            $.outFlag = false;
            $.isban = false;
            $.hasRisk = false;
            bdy_0xa7448 = bdy_0x510184;
            bdy_0x316200 = -2861 * -1 + -7485 + 4624;
            console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
            let _0x5cb3c2 = await bdy_0x313757.jddToken($.UA);
            if (_0x5cb3c2) {
              $.apitoken = _0x5cb3c2.token;
            }
            $.apiTokenObj[$.UserName] = $.apitoken;
            $.UUID = bdy_0x313757.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            if (!$.isLogin) {
              {
                const _0x351fdf = {
                  "open-url": "https://bean.m.jd.com/bean/signIndex.action"
                };
                $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x351fdf);
                $.isNode() && (await bdy_0x1f086.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
                continue;
              }
            }
            $.index != -6365 + 6020 + 346 && bdy_0x382ae8.swip && (await bdy_0x382ae8.swip());
            await bdy_0x770cc8();
            if ($.outFlag) {
              break;
            }
          }
        } catch (_0x1ef340) {}
      }
    }
  }
  if ($.banpin.length > 13302 + 3 * -4434 || 8574 + -4423 * 1 + -4150) {
    const _0x1e0284 = $.banpin.join(",");
    $.banpin.length > -31 * 257 + -9317 + 17284 && console.log("\n" + JSON.stringify($.banpin.join(",")) + "这些pin的账号是是黑子，不要执行翻翻乐, 禁用变量export BANPIN=\"wyw_ffl@pin1,pin2");
    const _0x5509fe = "/ql/data/config/config.sh",
      _0x2bf0e8 = "tempblock_ck_envs5",
      _0xfac881 = "export tempblock_ck_envs5=\"wyw_ffl@-@" + _0x1e0284 + "\"";
    if (bdy_0x23dc02.existsSync(_0x5509fe) && bdy_0x2be560 === "true") {
      try {
        {
          const _0x344eac = "grep -q \"tempblock_ck_envs_num\" " + _0x5509fe;
          bdy_0x57f3d7(_0x344eac);
          const _0x2dc0e8 = "sed  -i -r 's/(tempblock_ck_envs_num=)\"[^\"]*\"/\\1\"5\"/g' " + _0x5509fe;
          bdy_0x57f3d7(_0x2dc0e8);
        }
      } catch (_0xe7ae99) {
        {
          if ($.banpin.length > -1798 + -4259 * 1 + 6057) {
            {
              const _0x227923 = "echo '\nexport tempblock_ck_envs_num=\"5\"' >> " + _0x5509fe;
              bdy_0x57f3d7(_0x227923);
            }
          }
        }
      }
      try {
        const _0x589d0e = "grep -q " + _0x2bf0e8 + " " + _0x5509fe;
        bdy_0x57f3d7(_0x589d0e);
        const _0x16d7ff = "sed  -i -r 's/(" + _0x2bf0e8 + "=)\"[^\"]*\"/\\1\"wyw_ffl@--@" + _0x1e0284 + "\"/g' " + _0x5509fe;
        bdy_0x57f3d7(_0x16d7ff);
      } catch (_0x10b506) {
        if ($.banpin.length > 4001 * -1 + -5560 + -3187 * -3) {
          const _0x5d7f79 = "echo '\n#禁用黑号翻翻乐\n" + _0xfac881 + "' >> " + _0x5509fe;
          bdy_0x57f3d7(_0x5d7f79);
        }
      }
    }
  }
  if (Date.now() > bdy_0x3b6867) {
    console.log("\n\n已设置" + bdy_0x4cad1a + "点后关闭助力");
  } else {
    $.helpId.length > -38 * -193 + -5615 + -1718 && (console.log("\n\n开始内部助力..."), await bdy_0x268006());
  }
})().catch(_0x9f98d5 => {
  return $.logErr(_0x9f98d5);
}).finally(() => {
  return $.done();
});
async function bdy_0x268006() {
  for (let _0x4af7ac = -5630 + 1416 + 4214; _0x4af7ac < bdy_0xd6a461.length; _0x4af7ac++) {
    $.UA = bdy_0x102f54.UARAM ? bdy_0x102f54.UARAM("", bdy_0x4092ac) : bdy_0x102f54.USER_AGENT;
    bdy_0x4092ac = bdy_0x313757.buildck(bdy_0xd6a461[_0x4af7ac]);
    if (bdy_0x4092ac) {
      $.UserName = decodeURIComponent(bdy_0x4092ac.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x4092ac.match(/pt_pin=([^; ]+)(?=;?)/)[-3617 * -1 + -7919 + 4303]);
      $.index = _0x4af7ac + (-5865 + 6381 + 515 * -1);
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      $.apitoken = $.apiTokenObj[$.UserName];
      $.nonum = false;
      $.hphotflag = false;
      bdy_0x316200 = -6 * 547 + -1682 + 4964;
      $.UUID = bdy_0x313757.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      $.fullId.length != -193 * 37 + 1 * -375 + 7516 && ($.helpId = $.helpId.filter(_0x441193 => !$.fullId.includes(_0x441193)), $.fullId = []);
      bdy_0x382ae8.swip && (await bdy_0x382ae8.swip());
      for (let _0x3a01c1 of $.helpId) {
        $.itemId = _0x3a01c1;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x5a3cf5("wanyiwan_assist");
        if ($.nonum || $.hphotflag || !$.isLogin) {
          break;
        }
        await $.wait(parseInt(Math.random() * (-441 + -4647 + 6088) + (269 + -1 * -1369 + -319 * 2), 1469 + 1 * -1459));
      }
      await $.wait(parseInt(Math.random() * (8240 + -7740) + (-8 * -350 + 2714 * -2 + -52 * -89), 2027 + -1 * 2017));
      if ($.outFlag) {
        break;
      }
    }
  }
}
async function bdy_0x770cc8() {
  try {
    $.taskList = [];
    $.isBan = false;
    $.signstatus = -2126 + -7 * -227 + 537;
    await bdy_0x5a3cf5("wanyiwan_home");
    await $.wait(parseInt(Math.random() * (-8896 + 3282 + -6 * -1019) + (266 + -83 * 69 + 6061), 14440 + -6 * 2405));
    if ($.signstatus == -9953 + 5800 + 4153) {
      {
        console.log("\n去签到...");
        await bdy_0x5a3cf5("wanyiwan_sign");
      }
    } else {
      {
        console.log("\n今日以签过!");
      }
    }
    if ($.isBan) {
      {
        $.banpin.push($.UserName);
        return;
      }
    }
    console.log("\n去做任务...");
    await bdy_0x5a3cf5("wanyiwan_task_list");
    for (let _0x42f452 of $.taskList) {
      $.itemId = -217 * -21 + -3765 * 1 + 2 * -396;
      $.encryptAssignmentId = _0x42f452.encryptAssignmentId;
      $.taskType = _0x42f452.taskType;
      let _0x53451d = _0x42f452.maxTimes - _0x42f452.finishTimes;
      _0x42f452.title.includes("邀请") && _0x42f452.status != -3 * -1928 + 5659 + -11440 && ($.helpId.push(_0x42f452.taskDetail[17461 + -17461].itemId), console.log("入列邀请码：" + _0x42f452.taskDetail[-2 * 2372 + -1243 + 5987].itemId));
      if (_0x42f452.status == -53 * -69 + -89 * 101 + 5334) {
        console.log("领取 " + _0x42f452.title + " 奖励...");
        $.endflag = false;
        for (let _0xa1ffb6 of Array(_0x42f452.finishTimes)) {
          {
            await bdy_0x5a3cf5("award");
            if ($.endflag) {
              break;
            }
            await $.wait(11 * -133 + 241 + 2722);
          }
        }
        continue;
      } else {
        if (_0x42f452.status == 5392 + -1776 + -3613) {
          {
            console.log(_0x42f452.title + " ---- 已完成");
            continue;
          }
        } else {
          if (/邀请|下单/.test(_0x42f452.title)) {
            continue;
          }
        }
      }
      console.log("去做 " + _0x42f452.title);
      for (let _0x168c1a = 3499 + -5 * 677 + -114; _0x168c1a < _0x53451d; _0x168c1a++) {
        _0x42f452.taskDetail && ($.itemId = _0x42f452.taskDetail[_0x168c1a].itemId);
        await bdy_0x5a3cf5("startTask");
        _0x42f452.limitTime != -3 * -691 + 4972 + -1409 * 5 && (await $.wait(_0x42f452.limitTime * (-4767 + 4635 + 1132)), await bdy_0x5a3cf5("endTask"));
        await $.wait(parseInt(Math.random() * (8253 + -7753) + (-1 * -5 + -3 * -604 + -1 * 817), 6268 + -206 * 29 + -284));
        await bdy_0x5a3cf5("award");
        await $.wait(parseInt(Math.random() * (6995 + -1118 + -4877) + (-6673 * 1 + 2967 + 4706), 4170 + -65 * 64));
      }
      await $.wait(parseInt(Math.random() * (383 * -1 + 4206 + 3323 * -1) + (6209 + -4709), 9637 + -9692 * -1 + -19319));
    }
    await $.wait(parseInt(Math.random() * (-1629 + 34 * -151 + 7263) + (3195 * -1 + -444 + 5639), 2 * -4835 + -3625 * -1 + 6055));
  } catch (_0x13a152) {
    console.log(_0x13a152);
  }
}
async function bdy_0x5a3cf5(_0xde8826) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x4cdfd4 = "",
    _0x3a57cc,
    _0xdaf684,
    _0x32ed95 = "post",
    _0x179f3c = "https://api.m.jd.com/client.action",
    _0x308801 = "signed_wh5";
  switch (_0xde8826) {
    case "wanyiwan_sign":
      const _0x20b70f = {
        version: 1
      };
      _0x4cdfd4 = _0x20b70f;
      _0x3a57cc = "d12dd";
      _0xdaf684 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      const _0x3b47ad = {
        outsite: 0,
        firstCall: 1,
        version: 1,
        lbsSwitch: true
      };
      _0x4cdfd4 = _0x3b47ad;
      _0x3a57cc = "c81ad";
      _0xdaf684 = "wanyiwan_home";
      break;
    case "wanyiwan_task_list":
      const _0xd5cb7d = {
        version: 1,
        lbsSwitch: false
      };
      _0x4cdfd4 = _0xd5cb7d;
      _0xdaf684 = "wanyiwan_task_list";
      break;
    case "apTaskList":
      _0x179f3c = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x32ed95 = "get";
      break;
    case "startTask":
      const _0x21abb8 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 1,
        version: 1
      };
      _0x4cdfd4 = _0x21abb8;
      _0x3a57cc = "89db2";
      _0xdaf684 = "wanyiwan_do_task";
      break;
    case "endTask":
      const _0x38b051 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x4cdfd4 = _0x38b051;
      _0x3a57cc = "89db2";
      _0xdaf684 = "wanyiwan_do_task";
      break;
    case "award":
      const _0x3688f3 = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x4cdfd4 = _0x3688f3;
      _0x3a57cc = "d12dd";
      _0xdaf684 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x302b7a = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x4cdfd4 = _0x302b7a;
      _0x3a57cc = "ba505";
      _0xdaf684 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x179f3c = "https://api.m.jd.com/api";
      const _0x5bd692 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x4cdfd4 = _0x5bd692;
      _0x308801 = "activities_platform";
      _0xdaf684 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x179f3c = "https://api.m.jd.com/api";
      _0x4cdfd4 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0xa7448)
      };
      _0x3a57cc = "614f1";
      _0x308801 = "activities_platform";
      _0xdaf684 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x179f3c = "https://api.m.jd.com/api";
      const _0x8560a1 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x4cdfd4 = _0x8560a1;
      _0x3a57cc = "25fac";
      _0x308801 = "activities_platform";
      _0xdaf684 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x179f3c = "https://api.m.jd.com/api";
      const _0x49ede5 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x4cdfd4 = _0x49ede5;
      _0x3a57cc = "5be1b";
      _0x308801 = "activity_platform_se";
      _0xdaf684 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x179f3c = "https://api.m.jd.com/api";
      const _0x4d0c5f = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x4cdfd4 = _0x4d0c5f;
      _0x3a57cc = "89cfe";
      _0x308801 = "activity_platform_se";
      _0xdaf684 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0xde8826);
  }
  if (_0x3a57cc) {
    {
      let _0x34bdb0 = {
        appId: _0x3a57cc,
        functionId: _0xdaf684,
        body: _0x4cdfd4,
        appid: _0x308801,
        clientVersion: $.UA.split(";")[9619 + -9617],
        client: "apple",
        user: $.UserName,
        code: 1,
        ua: $.UA
      };
      _0x4cdfd4 = await bdy_0x1d7be7(_0x34bdb0);
      if (!_0x4cdfd4) {
        return;
      }
    }
  } else {
    _0x4cdfd4 && (_0x4cdfd4 = "functionId=" + _0xdaf684 + "&body=" + encodeURIComponent(JSON.stringify(_0x4cdfd4)) + "&t=" + Date.now() + "&appid=" + _0x308801 + "&client=apple&clientVersion=" + $.UA.split(";")[-2691 + 7 * -5 + 2728] + "&h5st=null");
  }
  let _0x4bcf8e = bdy_0x2a5b24(_0x179f3c, _0x4cdfd4),
    _0x51c111 = await bdy_0x46562b(_0x4bcf8e, _0x32ed95);
  do {
    JSON.stringify(_0x51c111).includes("重试") ? (bdy_0x316200++, await $.wait(7897 + -6117 + -5 * 156), _0x51c111 = await bdy_0x46562b(_0x4bcf8e, _0x32ed95)) : bdy_0x316200 = -1 * -1411 + -1 * 9381 + 7970;
  } while (bdy_0x316200 > -9423 + -7188 + -1 * -16611 & bdy_0x316200 < -3 * -1886 + 883 + -6537);
  bdy_0x4ae88d(_0xde8826, _0x51c111);
}
async function bdy_0x46562b(_0x533836, _0x138331) {
  return new Promise(async _0x51bf05 => {
    $["d" + _0x138331](_0x533836, async (_0x598aa3, _0x3cf59d, _0x476a10) => {
      try {
        {
          if (_0x598aa3) {
            {
              console.log("" + $.toStr(_0x598aa3, _0x598aa3));
            }
          } else {
            if (_0x476a10.includes("登录")) {
              $.isLogin = false;
            }
          }
        }
      } catch (_0x2fa736) {
        console.log(_0x2fa736, _0x3cf59d);
      } finally {
        _0x51bf05(_0x476a10);
      }
    });
  });
}
function bdy_0x2f1e66(_0x2914c5) {
  let _0x51053b = "";
  switch (type) {
    case [_0x51053b]:
      const _0x21ac8e = {
        ed: ed
      };
      _0xf1f6le = _0x21ac8e;
      break;
    case [_0x51053b]:
      const _0x161adb = {
        bd: bd
      };
      _0xf1f6lc = _0x161adb;
      break;
    case [_0x51053b]:
      const _0x8b259c = {
        ed: ed
      };
      _0xf1f6lf = _0x8b259c;
      break;
    case [_0x51053b]:
      const _0x30c6d3 = {
        ed: ed
      };
      _0xf1f6lg = _0x30c6d3;
      break;
    case [_0x51053b]:
      const _0x46278d = {
        ed: ed
      };
      _0xf1f6lv = _0x46278d;
      break;
  }
}
async function bdy_0x4ae88d(_0x3940af, _0x3f2b59) {
  let _0xa2de0d = "";
  try {
    _0xa2de0d = JSON.parse(_0x3f2b59);
  } catch (_0x5b6f2c) {
    console.log(_0x3940af + " 执行任务异常");
  }
  try {
    {
      switch (_0x3940af) {
        case "award":
          _0xa2de0d.code == 12920 + -12920 ? _0xa2de0d.data.bizCode == 3297 + -7008 + 3711 ? console.log("任务完成，获得" + _0xa2de0d.data.result.rewardCount + "奖票 🎫") : (console.log(_0xa2de0d.data.bizCode, _0xa2de0d.data.bizMsg), $.endflag = true) : console.log(_0xa2de0d.message);
          break;
        case "wanyiwan_sign":
          if (_0xa2de0d.code == 11 * -521 + -6197 + 11928) {
            if (_0xa2de0d.data.bizCode == 2305 + -4351 * 1 + 2046) {
              console.log("签到成功,获得" + _0xa2de0d.data.result.getScore + "奖票 🎫");
            } else {
              _0xa2de0d.data.bizCode == -(5992 + -9 * -211 + 2110) ? (console.log("该账户可能黑子！无法签到和任务！"), $.isBan = true) : console.log(_0xa2de0d.data.bizMsg);
            }
          } else {
            console.log(_0xa2de0d.message);
          }
          break;
        case "wanyiwan_assist":
          if (_0xa2de0d.code == 2060 + -907 * 8 + 5196) {
            {
              if (_0xa2de0d.data.bizCode == -7 * -597 + -3095 + -1 * 1084) {
                console.log("✔️ 助力成功");
                $.nonum = true;
              } else {
                if (_0xa2de0d.data.bizMsg.includes("太多人") || _0xa2de0d.data.bizMsg.includes("重复")) {
                  {
                    console.log("❌", _0xa2de0d.data.bizCode, _0xa2de0d.data.bizMsg);
                    $.nonum = true;
                  }
                } else {
                  if (_0xa2de0d.data.bizMsg.includes("已经完成")) {
                    console.log("❌", _0xa2de0d.data.bizCode, _0xa2de0d.data.bizMsg);
                    $.fullId.push($.itemId);
                  } else {
                    if (_0xa2de0d.data.bizMsg.includes("火爆")) {
                      {
                        console.log("❌", _0xa2de0d.data.bizCode, _0xa2de0d.data.bizMsg);
                        $.hphotflag = true;
                      }
                    } else {
                      console.log("❌", _0xa2de0d.data.bizCode, _0xa2de0d.data.bizMsg);
                    }
                  }
                }
              }
            }
          } else {
            console.log("❌", _0xa2de0d.code, _0xa2de0d.message);
            _0xa2de0d.message.includes("火爆") && ($.hphotflag = true);
          }
          break;
        case "wanyiwan_home":
          if (_0xa2de0d.code == 867 + -1155 * -6 + -7797) {
            if (_0xa2de0d.data.bizCode == -1135 * 8 + -3943 + 13023) {
              {
                const _0x41e1ab = "1|0|3|4|2".split("|");
                let _0x5cb94b = 13641 + 4547 * -3;
                while (true) {
                  switch (_0x41e1ab[_0x5cb94b++]) {
                    case "0":
                      console.log("当前奖票总量：" + _0xa2de0d.data.result.score + " 🎫");
                      continue;
                    case "1":
                      _0xa2de0d.data.result.popWindows.length != 3308 + -3287 + 21 * -1 && console.log("获得新手奖励：", _0xa2de0d.data.result.popWindows[5741 + -1 * 6277 + -8 * -67].getScore, "奖票 🎫");
                      continue;
                    case "2":
                      $.signstatus = _0xa2de0d.data?.["result"]?.["signBoard"]?.["status"] || 1855 + -11 * 319 + 1654;
                      continue;
                    case "3":
                      $.isLogin = _0xa2de0d.data?.["result"]?.["isLogin"];
                      continue;
                    case "4":
                      $.taskList = _0xa2de0d.data?.["result"]?.["taskBoard"] || [];
                      continue;
                  }
                  break;
                }
              }
            } else {
              console.log(_0xa2de0d.data.bizMsg);
            }
          } else {
            console.log(_0xa2de0d.message);
          }
          break;
        case "wanyiwan_task_list":
          if (_0xa2de0d.code == -1 * 5147 + -2385 + 7532) {
            _0xa2de0d.data.bizCode == -2 * -1432 + 7425 + -10289 ? $.taskList = _0xa2de0d.data?.["result"]?.["taskList"] || [] : console.log(_0xa2de0d.data.bizMsg);
          } else {
            console.log(_0xa2de0d.message);
          }
          break;
        case "turnHappyHome":
          _0xa2de0d.success ? $.leftTime = _0xa2de0d.data.leftTime : console.log(_0xa2de0d.errMsg);
          break;
        case "turnHappyDouble":
          if (_0xa2de0d.success) {
            _0xa2de0d.data.rewardState == 3120 + -3119 * 1 ? (console.log("翻倍成功，获得 " + _0xa2de0d.data.rewardValue + "奖票 🎫"), $.dbsuc = true) : ($.dbsuc = false, console.log("叼了，翻倍失败！再接再厉！"));
          } else {
            {
              console.log(_0xa2de0d.errMsg);
              $.dbsuc = false;
            }
          }
          break;
        case "superRedBagHome":
          _0xa2de0d.success ? ($.sceneStatus = _0xa2de0d.data.sceneStatus, $.nextLeftTime = _0xa2de0d.data.nextLeftTime) : console.log(_0xa2de0d.errMsg);
          break;
        case "superRedBagDraw":
          if (_0xa2de0d.success) {
            $.shakeLeftTime = _0xa2de0d.data.shakeLeftTime;
            const {
              prizeDrawVo = ""
            } = _0xa2de0d.data;
            if (prizeDrawVo) {
              {
                switch (prizeDrawVo.prizeType) {
                  case -31 * -44 + -5431 * -1 + 183 * -37:
                    console.log("获得：" + prizeDrawVo.amount + "票奖 🎫");
                    $.sucdraw++;
                    break;
                  case -3161 + -1048 + 4210:
                    console.log("获得:" + prizeDrawVo.prizeConfigName);
                    break;
                  default:
                    console.log(prizeDrawVo);
                    break;
                }
              }
            } else {
              console.log(_0x3f2b59);
            }
          } else {
            console.log(_0xa2de0d.errMsg);
          }
          break;
        case "startTask":
        case "turnHappyReceive":
        case "endTask":
          break;
        default:
          console.log(_0x3940af + " -> " + _0x3f2b59);
      }
      if (typeof _0xa2de0d == "object") {
        if (_0xa2de0d.errorMessage) {
          if (_0xa2de0d.errorMessage.indexOf("火爆") > -(-5918 + -6799 + -1 * -12718)) {
            {
              $.hotFlag = true;
            }
          }
        }
      }
    }
  } catch (_0x316958) {
    {
      console.log(_0x3940af + " " + _0x316958);
    }
  }
}
function bdy_0x2a5b24(_0x56c6ef, _0x3fa5a5) {
  _0x3fa5a5 = _0x3fa5a5 + "&rfs=0000&x-api-eid-token=" + $.apitoken;
  let _0x1b275b = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0x4092ac,
    "User-Agent": $.UA,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-referer-page": "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html",
    "request-from": "native",
    "x-rp-client": "h5_1.0.0"
  };
  const _0xf0d5c0 = {
    url: _0x56c6ef,
    headers: _0x1b275b,
    timeout: 30000,
    ciphers: bdy_0x313757.cpstr,
    ...(_0x3fa5a5 ? {
      body: _0x3fa5a5
    } : {})
  };
  return _0xf0d5c0;
}
async function bdy_0x5c1d60() {
  $.UA = "" + "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0xe918f1(9251 + 887 * -1 + -8324) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0xe918f1(_0x546494) {
  _0x546494 = _0x546494 || 7505 + -7473 * 1;
  let _0x538486 = "abcdef0123456789",
    _0x2ee297 = _0x538486.length,
    _0x35df19 = "";
  for (i = 1 * -9235 + 3083 + 6152; i < _0x546494; i++) {
    _0x35df19 += _0x538486.charAt(Math.floor(Math.random() * _0x2ee297));
  }
  return _0x35df19;
}
function bdy_0x2db874(_0x21e2be) {
  if (typeof _0x21e2be == "string") {
    try {
      return JSON.parse(_0x21e2be);
    } catch (_0x21e95e) {
      console.log(_0x21e95e);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x3296c8() {
  if (!$.joinVenderId) {
    {
      return;
    }
  }
  return new Promise(async _0x4243fc => {
    {
      $.errorJoinShop = "活动太火爆，请稍后再试";
      $.shopactivityId = "";
      let _0x2a36ab = {
        venderId: "" + $.joinVenderId + "",
        shopId: "" + $.joinVenderId + "",
        bindByVerifyCodeFlag: 1,
        registerExtend: {},
        writeChildFlag: 0,
        channel: 406
      };
      $.shopactivityId == "" && delete _0x2a36ab.activityId;
      let _0x82d17 = {
        appId: "27004",
        fn: "bindWithVender",
        body: _0x2a36ab,
        apid: "shopmember_m_jd_com",
        ver: "9.2.0",
        cl: "H5",
        user: $.UserName,
        code: 0,
        ua: $.UA
      };
      _0x2a36ab = await dyy.getbody(_0x82d17);
      const _0x4018d0 = {
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        cookie: bdy_0x4092ac,
        origin: "https://shopmember.m.jd.com/",
        "user-agent": $.UA
      };
      const _0x5eadb7 = {
        url: "https://api.m.jd.com/client.action?" + _0x2a36ab + "&uuid=88888",
        headers: _0x4018d0,
        timeout: 30000
      };
      $.dget(_0x5eadb7, async (_0x551d5e, _0x3f7076, _0x3dc530) => {
        try {
          _0x3dc530 = _0x3dc530 && _0x3dc530.match(/jsonp_.*?\((.*?)\);/) && _0x3dc530.match(/jsonp_.*?\((.*?)\);/)[8041 + 12 * -670] || _0x3dc530;
          let _0x30a921 = $.toObj(_0x3dc530, _0x3dc530);
          if (_0x30a921 && typeof _0x30a921 == "object") {
            if (_0x30a921 && _0x30a921.success === true) {
              console.log("    " + _0x30a921.message);
              $.errorJoinShop = _0x30a921.message;
              if (_0x30a921.result && _0x30a921.result.giftInfo) {
                for (let _0x260503 of _0x30a921.result.giftInfo.giftList) {
                  console.log("入会获得:" + _0x260503.discountString + _0x260503.prizeName + _0x260503.secondLineDesc);
                }
              }
            } else {
              _0x30a921 && typeof _0x30a921 == "object" && _0x30a921.message ? ($.errorJoinShop = _0x30a921.message, console.log("" + (_0x30a921.message || ""))) : console.log(_0x3dc530);
            }
          } else {
            console.log(_0x3dc530);
          }
        } catch (_0x3a80d5) {
          $.logErr(_0x3a80d5, _0x3f7076);
        } finally {
          _0x4243fc();
        }
      });
    }
  });
}
async function bdy_0x4dd44e() {
  return new Promise(async _0x4cc9cf => {
    {
      let _0x3538f9 = {
        venderId: $.joinVenderId,
        payUpShop: true,
        queryVersion: "10.5.2",
        appid: "ef79a",
        needSecurity: true,
        bizId: "shop_view_app",
        channel: 406
      };
      let _0x515fa2 = {
        appId: "ef79a",
        fn: "getShopOpenCardInfo",
        body: _0x3538f9,
        apid: "jd_shop_member",
        ver: "9.2.0",
        cl: "H5",
        user: $.UserName,
        code: 0,
        ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      };
      _0x3538f9 = await dyy.getbody(_0x515fa2);
      const _0x5dbec7 = {
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        cookie: bdy_0x4092ac,
        origin: "https://shopmember.m.jd.com/",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      };
      const _0x3e6c40 = {
        url: "https://api.m.jd.com/client.action?" + _0x3538f9 + "&uuid=88888",
        headers: _0x5dbec7,
        timeout: 60000
      };
      $.get(_0x3e6c40, async (_0x2d94f2, _0x41a3f6, _0x4a22f7) => {
        try {
          _0x4a22f7 = _0x4a22f7 && _0x4a22f7.match(/jsonp_.*?\((.*?)\);/) && _0x4a22f7.match(/jsonp_.*?\((.*?)\);/)[-6290 + 3 * -358 + 7365] || _0x4a22f7;
          let _0x31e57d = $.toObj(_0x4a22f7, _0x4a22f7);
          _0x31e57d && typeof _0x31e57d == "object" ? _0x31e57d && _0x31e57d.success == true && (console.log("去加入 -> " + (_0x31e57d.result[-11 * -267 + 430 + -3367].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x31e57d.result[3036 + -7609 + 4573].interestsRuleList && _0x31e57d.result[-4489 * -1 + 1 * -7957 + 3468].interestsRuleList[-36 * -161 + -5132 + 166 * -4] && _0x31e57d.result[-6746 + 8149 + -1403].interestsRuleList[3508 + 1 * -7927 + 4419].interestsInfo && _0x31e57d.result[13454 + 7 * -1922].interestsRuleList[-2164 * -1 + 2 * -4412 + 6660].interestsInfo.activityId || "") : console.log(_0x4a22f7);
        } catch (_0x25c180) {
          $.logErr(_0x25c180, _0x41a3f6);
        } finally {
          _0x4cc9cf();
        }
      });
    }
  });
}
function bdy_0x1d7be7(_0x5cc711) {
  const _0x4551d2 = {
    "Content-Type": "application/json"
  };
  let _0x5a4219 = {
      url: "http://121.40.162.127:9000/bdy_h5",
      body: JSON.stringify(_0x5cc711),
      headers: _0x4551d2,
      timeout: 10000
    },
    _0x54ea9c = "";
  return new Promise(_0x85343a => {
    $.post(_0x5a4219, (_0x167fe2, _0x109aac, _0x2fc47d) => {
      {
        try {
          {
            if (!_0x167fe2) {
              _0x2fc47d = JSON.parse(_0x2fc47d);
              _0x2fc47d.code == 3189 * -1 + -907 * -3 + 668 ? _0x54ea9c = _0x2fc47d.data : $.log(_0x2fc47d.msg);
            }
          }
        } catch (_0x555056) {
          console.log(_0x555056, _0x109aac);
        } finally {
          {
            _0x85343a(_0x54ea9c);
          }
        }
      }
    });
  });
}
function bdy_0x300de4(_0x44c101, _0x5045f2) {
  return Math.floor(Math.random() * (_0x5045f2 - _0x44c101)) + _0x44c101;
}
function bdy_0x576718(_0x3d0f04 = +new Date()) {
  var _0x3ffc52 = new Date(_0x3d0f04 + (7197 + -7311 + -1 * -122) * (-765 * 1 + -32 * 16 + 4877) * (5880 + -3541 * 1 + -1339));
  return _0x3ffc52.toJSON().substr(154 * -13 + -17 * 427 + 9261, 4956 + -8309 * 1 + 3372).replace("T", " ").replace(/-/g, "/");
}
function bdy_0xf9754() {
  return new Promise(_0x507fc6 => {
    {
      const _0x4fa8fb = {
        Cookie: bdy_0x4092ac,
        referer: "https://h5.m.jd.com/",
        "User-Agent": $.UA
      };
      const _0x540d1d = {
        url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
        headers: _0x4fa8fb,
        timeout: 10000
      };
      $.get(_0x540d1d, (_0xf20940, _0x5951aa, _0x4286a7) => {
        try {
          {
            if (_0x4286a7) {
              _0x4286a7 = JSON.parse(_0x4286a7);
              if (!(_0x4286a7.islogin === "1")) {
                _0x4286a7.islogin === "0" && ($.isLogin = false);
              }
            }
          }
        } catch (_0x18d6ef) {
          console.log(_0x18d6ef);
        } finally {
          _0x507fc6();
        }
      });
    }
  });
}
function bdy_0x5153bd(_0x544f46) {
  function _0x374328(_0x40cf99) {
    if (typeof _0x40cf99 === "string") {
      return function (_0x18f54a) {}.constructor("while (true) {}").apply("counter");
    } else {
      ("" + _0x40cf99 / _0x40cf99).length !== 4795 + 50 * -61 + -1744 || _0x40cf99 % (-3 * 3082 + 8734 + 532) === 1620 + -3460 + 1840 ? function () {
        return true;
      }.constructor("debu" + "gger").call("action") : function () {
        {
          return false;
        }
      }.constructor("debu" + "gger").apply("stateObject");
    }
    _0x374328(++_0x40cf99);
  }
  try {
    {
      if (_0x544f46) {
        {
          return _0x374328;
        }
      } else {
        _0x374328(9697 + 2 * -4938 + 179);
      }
    }
  } catch (_0xbf45d2) {}
}

function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { const {execSync} = require('child_process');execSync('sleep 30'); return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { const {execSync} = require('child_process');execSync('sleep 30'); var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }