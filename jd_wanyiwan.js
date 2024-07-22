/*
23 5,10 * * * jd_wanyiwan.js
*/

const $ = new Env('玩一玩_任务');

const _0x55b8bf = $.isNode() ? require("./jdCookie.js") : "",
  _0x42a5eb = $.isNode() ? require("./sendNotify") : "",
  _0x222310 = require("./function/dylans"),
  _0x3a0626 = require("./function/dylib.js"),
  _0x31659a = require("./USER_AGENTS"),
  _0x3e7b41 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "100",
  _0x4acc17 = process.env.WYW_AUTOBAN ? process.env.WYW_AUTOBAN : "false";
let _0x46b89f = "",
  _0x448fb5 = {};
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  _0x448fb5 = require("./function/proxy.js");
  $.dget = _0x448fb5.intoRequest($.get.bind($));
  $.dpost = _0x448fb5.intoRequest($.post.bind($));
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x33dad5 = [],
  _0x36b7bf = "",
  _0x4e1400 = 0;
const {
    execSync: _0x569762
  } = require("child_process"),
  _0x40cb1e = require("fs");
if ($.isNode()) {
  var _0x1e0969 = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(_0x55b8bf).forEach(_0x1c23e0 => {
    _0x33dad5.push(_0x55b8bf[_0x1c23e0]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x33dad5 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0xb92dae => _0xb92dae.cookie)].filter(_0x558077 => !!_0x558077);
const _0xce014a = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  _0x16a3ca = new Date().setHours(_0xce014a);
$.helpId = [];
$.fullId = [];
$.apiTokenObj = {};
$.banpin = [];
!(async () => {
  if (!_0x33dad5[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("当前版本：20240722");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_HELPTM='15' 几点后关闭助力\n    WYW_AUTOBAN='true' 自动管理黑名单，默认关闭");
  console.log("只做任务和助力");
  for (let _0x44a268 = 0; _0x44a268 < _0x33dad5.length; _0x44a268++) {
    {
      $.UA = _0x31659a.UARAM ? _0x31659a.UARAM("", _0x36b7bf) : _0x31659a.USER_AGENT;
      _0x36b7bf = _0x3a0626.buildck(_0x33dad5[_0x44a268]);
      if (_0x36b7bf) {
        try {
          $.UserName = decodeURIComponent(_0x36b7bf.match(/pt_pin=([^; ]+)(?=;?)/) && _0x36b7bf.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
          $.index = _0x44a268 + 1;
          $.hotFlag = false;
          $.nickName = "";
          $.isLogin = true;
          $.outFlag = false;
          $.isban = false;
          $.hasRisk = false;
          _0x46b89f = _0x3e7b41;
          _0x4e1400 = 0;
          console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
          let _0x2eec6f = await _0x3a0626.jddToken($.UA);
          if (_0x2eec6f) $.apitoken = _0x2eec6f.token;
          $.apiTokenObj[$.UserName] = $.apitoken;
          $.UUID = _0x3a0626.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
          if (!$.isLogin) {
            {
              $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
                "open-url": "https://bean.m.jd.com/bean/signIndex.action"
              });
              $.isNode() && (await _0x42a5eb.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
              continue;
            }
          }
          $.index != 1 && _0x448fb5.swip && (await _0x448fb5.swip());
          await _0x2a1b7b();
          if ($.outFlag) break;
        } catch (_0x1ec857) {}
      }
    }
  }
  if ($.banpin.length > 0 || 1) {
    const _0x694b0e = $.banpin.join(",");
    $.banpin.length > 0 && console.log("\n" + JSON.stringify($.banpin.join(",")) + "这些pin的账号是是黑子，不要执行翻翻乐, 禁用变量export BANPIN=\"wyw_ffl@pin1,pin2\"");
    const _0x195e4 = "/ql/data/config/config.sh",
      _0x3fb84c = "tempblock_ck_envs5",
      _0x613b84 = "export tempblock_ck_envs5=\"wyw_ffl@-@" + _0x694b0e + "\"";
    if (_0x40cb1e.existsSync(_0x195e4)) {
      if (_0x4acc17 === "true") {
        {
          console.log("自动添加黑名单变量完成，禁止上述pin的账号执行翻翻乐");
          try {
            const _0x59f107 = "grep -q \"tempblock_ck_envs_num\" " + _0x195e4;
            _0x569762(_0x59f107);
            const _0x482c6a = "sed  -i -r 's/(tempblock_ck_envs_num=)\"[^\"]*\"/\\1\"5\"/g' " + _0x195e4;
            _0x569762(_0x482c6a);
          } catch (_0x16913e) {
            if ($.banpin.length > 0) {
              {
                const _0x3efb47 = "echo '\nexport tempblock_ck_envs_num=\"5\"' >> " + _0x195e4;
                _0x569762(_0x3efb47);
              }
            }
          }
          try {
            const _0xe9a3ad = "grep -q " + _0x3fb84c + " " + _0x195e4;
            _0x569762(_0xe9a3ad);
            const _0x23c11c = "sed  -i -r 's/(" + _0x3fb84c + "=)\"[^\"]*\"/\\1\"wyw_ffl@--@" + _0x694b0e + "\"/g' " + _0x195e4;
            _0x569762(_0x23c11c);
          } catch (_0x5903d0) {
            {
              if ($.banpin.length > 0) {
                {
                  const _0x504bfd = "echo '\n#禁用黑号翻翻乐\n" + _0x613b84 + "' >> " + _0x195e4;
                  _0x569762(_0x504bfd);
                }
              }
            }
          }
        }
      } else _0x569762("sed -i '/tempblock_ck_envs5/d' " + _0x195e4);
    }
  }
  if (Date.now() > _0x16a3ca) console.log("\n\n已设置" + _0xce014a + "点后关闭助力");else {
    {
      if ($.helpId.length > 1) {
        console.log("\n\n开始内部助力...");
        await _0x1f3ca5();
      }
    }
  }
})().catch(_0xc7dff2 => {
  return $.logErr(_0xc7dff2);
}).finally(() => {
  return $.done();
});
async function _0x1f3ca5() {
  for (let _0x338198 = 0; _0x338198 < _0x33dad5.length; _0x338198++) {
    $.UA = _0x31659a.UARAM ? _0x31659a.UARAM("", _0x36b7bf) : _0x31659a.USER_AGENT;
    _0x36b7bf = _0x3a0626.buildck(_0x33dad5[_0x338198]);
    if (_0x36b7bf) {
      {
        $.UserName = decodeURIComponent(_0x36b7bf.match(/pt_pin=([^; ]+)(?=;?)/) && _0x36b7bf.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x338198 + 1;
        console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
        $.apitoken = $.apiTokenObj[$.UserName];
        $.nonum = false;
        $.hphotflag = false;
        _0x4e1400 = 0;
        $.UUID = _0x3a0626.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x5f157f => !$.fullId.includes(_0x5f157f)), $.fullId = []);
        _0x448fb5.swip && (await _0x448fb5.swip());
        for (let _0x5508d7 of $.helpId) {
          $.itemId = _0x5508d7;
          console.log("去助力 --> " + $.itemId);
          await _0x3445ab("wanyiwan_assist");
          if ($.nonum || $.hphotflag || !$.isLogin) break;
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        }
        await $.wait(parseInt(Math.random() * 500 + 2000, 10));
        if ($.outFlag) break;
      }
    }
  }
}
async function _0x2a1b7b() {
  try {
    {
      $.taskList = [];
      $.isBan = false;
      $.signstatus = 0;
      await _0x3445ab("wanyiwan_home");
      await $.wait(parseInt(Math.random() * 500 + 600, 10));
      $.signstatus == 0 ? (console.log("\n去签到..."), await _0x3445ab("wanyiwan_sign")) : console.log("\n今日以签过!");
      if ($.isBan) {
        $.banpin.push($.UserName);
        return;
      }
      console.log("\n去做任务...");
      await _0x3445ab("wanyiwan_task_list");
      for (let _0x40e8c7 of $.taskList) {
        {
          $.itemId = 0;
          $.encryptAssignmentId = _0x40e8c7.encryptAssignmentId;
          $.taskType = _0x40e8c7.taskType;
          let _0x20ad44 = _0x40e8c7.maxTimes - _0x40e8c7.finishTimes;
          if (_0x40e8c7.title.includes("邀请")) {
            _0x40e8c7.status != 3 && ($.helpId.push(_0x40e8c7.taskDetail[0].itemId), console.log("入列邀请码：" + _0x40e8c7.taskDetail[0].itemId));
          }
          if (_0x40e8c7.status == 2) {
            {
              console.log("领取 " + _0x40e8c7.title + " 奖励...");
              $.endflag = false;
              for (let _0x3da7ef of Array(_0x40e8c7.finishTimes)) {
                await _0x3445ab("award");
                if ($.endflag) break;
                await $.wait(1500);
              }
              continue;
            }
          } else {
            if (_0x40e8c7.status == 3) {
              console.log(_0x40e8c7.title + " ---- 已完成");
              continue;
            } else {
              if (/邀请|下单/.test(_0x40e8c7.title)) {
                continue;
              }
            }
          }
          console.log("去做 " + _0x40e8c7.title);
          for (let _0x5886db = 0; _0x5886db < _0x20ad44; _0x5886db++) {
            _0x40e8c7.taskDetail && ($.itemId = _0x40e8c7.taskDetail[_0x5886db].itemId);
            await _0x3445ab("startTask");
            _0x40e8c7.limitTime != 0 && (await $.wait(_0x40e8c7.limitTime * 1000), await _0x3445ab("endTask"));
            await $.wait(parseInt(Math.random() * 500 + 1000, 10));
            await _0x3445ab("award");
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          }
          await $.wait(parseInt(Math.random() * 500 + 1500, 10));
        }
      }
      await $.wait(parseInt(Math.random() * 500 + 2000, 10));
    }
  } catch (_0x33a9ba) {
    console.log(_0x33a9ba);
  }
}
async function _0x3445ab(_0x539312) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x7fe915 = "",
    _0x492ec0,
    _0x217995,
    _0x4f885e = "post",
    _0x23fbde = "https://api.m.jd.com/client.action",
    _0x2b1eec = "signed_wh5";
  switch (_0x539312) {
    case "wanyiwan_sign":
      _0x7fe915 = {
        "version": 1
      };
      _0x492ec0 = "d12dd";
      _0x217995 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      _0x7fe915 = {
        "outsite": 0,
        "firstCall": 1,
        "version": 1,
        "lbsSwitch": true
      };
      _0x492ec0 = "c81ad";
      _0x217995 = "wanyiwan_home";
      break;
    case "wanyiwan_task_list":
      _0x7fe915 = {
        "version": 1,
        "lbsSwitch": false
      };
      _0x217995 = "wanyiwan_task_list";
      break;
    case "apTaskList":
      _0x23fbde = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x4f885e = "get";
      break;
    case "startTask":
      _0x7fe915 = {
        "itemId": $.itemId,
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "actionType": 1,
        "version": 1
      };
      _0x492ec0 = "89db2";
      _0x217995 = "wanyiwan_do_task";
      break;
    case "endTask":
      _0x7fe915 = {
        "itemId": $.itemId,
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "actionType": 0,
        "version": 1
      };
      _0x492ec0 = "89db2";
      _0x217995 = "wanyiwan_do_task";
      break;
    case "award":
      _0x7fe915 = {
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "version": 1
      };
      _0x492ec0 = "d12dd";
      _0x217995 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      _0x7fe915 = {
        "inviteCode": $.itemId,
        "version": 1
      };
      _0x492ec0 = "ba505";
      _0x217995 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x23fbde = "https://api.m.jd.com/api";
      _0x7fe915 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x2b1eec = "activities_platform";
      _0x217995 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x23fbde = "https://api.m.jd.com/api";
      _0x7fe915 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ",
        "turnNum": parseInt(_0x46b89f)
      };
      _0x492ec0 = "614f1";
      _0x2b1eec = "activities_platform";
      _0x217995 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x23fbde = "https://api.m.jd.com/api";
      _0x7fe915 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x492ec0 = "25fac";
      _0x2b1eec = "activities_platform";
      _0x217995 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x23fbde = "https://api.m.jd.com/api";
      _0x7fe915 = {
        "linkId": "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x492ec0 = "5be1b";
      _0x2b1eec = "activity_platform_se";
      _0x217995 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x23fbde = "https://api.m.jd.com/api";
      _0x7fe915 = {
        "linkId": "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x492ec0 = "89cfe";
      _0x2b1eec = "activity_platform_se";
      _0x217995 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x539312);
  }
  if (_0x492ec0) {
    let _0x27b3ac = {
      "appId": _0x492ec0,
      "functionId": _0x217995,
      "body": _0x7fe915,
      "appid": _0x2b1eec,
      "clientVersion": $.UA.split(";")[2],
      "client": "apple",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
    _0x7fe915 = await _0x6399d5(_0x27b3ac);
    if (!_0x7fe915) return;
  } else _0x7fe915 && (_0x7fe915 = "functionId=" + _0x217995 + "&body=" + encodeURIComponent(JSON.stringify(_0x7fe915)) + "&t=" + Date.now() + "&appid=" + _0x2b1eec + "&client=apple&clientVersion=" + $.UA.split(";")[2] + "&h5st=null");
  let _0x3ab9a3 = _0x1ed716(_0x23fbde, _0x7fe915),
    _0x367c8d = await _0x18d87c(_0x3ab9a3, _0x4f885e);
  do {
    JSON.stringify(_0x367c8d).includes("重试") ? (_0x4e1400++, await $.wait(1000), _0x367c8d = await _0x18d87c(_0x3ab9a3, _0x4f885e)) : _0x4e1400 = 0;
  } while (_0x4e1400 > 0 & _0x4e1400 < 4);
  _0x35bfc5(_0x539312, _0x367c8d);
}
async function _0x18d87c(_0x31e3c8, _0x13c8df) {
  return new Promise(async _0x39df8a => {
    $["d" + _0x13c8df](_0x31e3c8, async (_0x42cfdc, _0x7daf2f, _0x4cbccd) => {
      try {
        if (_0x42cfdc) console.log("" + $.toStr(_0x42cfdc, _0x42cfdc));else {
          if (_0x4cbccd.includes("登录")) $.isLogin = false;
        }
      } catch (_0x3ad3af) {
        console.log(_0x3ad3af, _0x7daf2f);
      } finally {
        _0x39df8a(_0x4cbccd);
      }
    });
  });
}
function _0x22e27d(_0x1d63ec) {
  let _0xaab741 = "";
  switch (type) {
    case [_0xaab741]:
      const _0x2b199a = {
        "ed": ed
      };
      _0xf1f6le = _0x2b199a;
      break;
    case [_0xaab741]:
      const _0x5b4d2c = {
        "bd": bd
      };
      _0xf1f6lc = _0x5b4d2c;
      break;
    case [_0xaab741]:
      const _0x495ef5 = {
        "ed": ed
      };
      _0xf1f6lf = _0x495ef5;
      break;
    case [_0xaab741]:
      const _0x392f59 = {
        "ed": ed
      };
      _0xf1f6lg = _0x392f59;
      break;
    case [_0xaab741]:
      const _0x33d8b1 = {
        "ed": ed
      };
      _0xf1f6lv = _0x33d8b1;
      break;
  }
}
async function _0x35bfc5(_0x4dc870, _0x5774c7) {
  let _0xdd8ec6 = "";
  try {
    _0xdd8ec6 = JSON.parse(_0x5774c7);
  } catch (_0x4a5ac3) {
    console.log(_0x4dc870 + " 执行任务异常");
  }
  try {
    switch (_0x4dc870) {
      case "award":
        _0xdd8ec6.code == 0 ? _0xdd8ec6.data.bizCode == 0 ? console.log("任务完成，获得" + _0xdd8ec6.data.result.rewardCount + "奖票 🎫") : (console.log(_0xdd8ec6.data.bizCode, _0xdd8ec6.data.bizMsg), $.endflag = true) : console.log(_0xdd8ec6.message);
        break;
      case "wanyiwan_sign":
        if (_0xdd8ec6.code == 0) {
          if (_0xdd8ec6.data.bizCode == 0) console.log("签到成功,获得" + _0xdd8ec6.data.result.getScore + "奖票 🎫");else _0xdd8ec6.data.bizCode == -10001 ? (console.log("该账户可能黑子！无法签到和任务！"), $.isBan = true) : console.log(_0xdd8ec6.data.bizMsg);
        } else console.log(_0xdd8ec6.message);
        break;
      case "wanyiwan_assist":
        if (_0xdd8ec6.code == 0) {
          if (_0xdd8ec6.data.bizCode == 0) console.log("✔️ 助力成功"), $.nonum = true;else {
            if (_0xdd8ec6.data.bizMsg.includes("太多人") || _0xdd8ec6.data.bizMsg.includes("重复")) console.log("❌", _0xdd8ec6.data.bizCode, _0xdd8ec6.data.bizMsg), $.nonum = true;else {
              if (_0xdd8ec6.data.bizMsg.includes("已经完成")) {
                console.log("❌", _0xdd8ec6.data.bizCode, _0xdd8ec6.data.bizMsg);
                $.fullId.push($.itemId);
              } else _0xdd8ec6.data.bizMsg.includes("火爆") ? (console.log("❌", _0xdd8ec6.data.bizCode, _0xdd8ec6.data.bizMsg), $.hphotflag = true) : console.log("❌", _0xdd8ec6.data.bizCode, _0xdd8ec6.data.bizMsg);
            }
          }
        } else console.log("❌", _0xdd8ec6.code, _0xdd8ec6.message), _0xdd8ec6.message.includes("火爆") && ($.hphotflag = true);
        break;
      case "wanyiwan_home":
        if (_0xdd8ec6.code == 0) {
          if (_0xdd8ec6.data.bizCode == 0) {
            _0xdd8ec6.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0xdd8ec6.data.result.popWindows[0].getScore, "奖票 🎫");
            console.log("当前奖票总量：" + _0xdd8ec6.data.result.score + " 🎫");
            $.isLogin = _0xdd8ec6.data?.["result"]?.["isLogin"];
            $.taskList = _0xdd8ec6.data?.["result"]?.["taskBoard"] || [];
            $.signstatus = _0xdd8ec6.data?.["result"]?.["signBoard"]?.["status"] || 0;
          } else console.log(_0xdd8ec6.data.bizMsg);
        } else console.log(_0xdd8ec6.message);
        break;
      case "wanyiwan_task_list":
        _0xdd8ec6.code == 0 ? _0xdd8ec6.data.bizCode == 0 ? $.taskList = _0xdd8ec6.data?.["result"]?.["taskList"] || [] : console.log(_0xdd8ec6.data.bizMsg) : console.log(_0xdd8ec6.message);
        break;
      case "turnHappyHome":
        if (_0xdd8ec6.success) {
          $.leftTime = _0xdd8ec6.data.leftTime;
        } else console.log(_0xdd8ec6.errMsg);
        break;
      case "turnHappyDouble":
        if (_0xdd8ec6.success) {
          if (_0xdd8ec6.data.rewardState == 1) console.log("翻倍成功，获得 " + _0xdd8ec6.data.rewardValue + "奖票 🎫"), $.dbsuc = true;else {
            $.dbsuc = false;
            console.log("叼了，翻倍失败！再接再厉！");
          }
        } else console.log(_0xdd8ec6.errMsg), $.dbsuc = false;
        break;
      case "superRedBagHome":
        if (_0xdd8ec6.success) $.sceneStatus = _0xdd8ec6.data.sceneStatus, $.nextLeftTime = _0xdd8ec6.data.nextLeftTime;else {
          console.log(_0xdd8ec6.errMsg);
        }
        break;
      case "superRedBagDraw":
        if (_0xdd8ec6.success) {
          {
            $.shakeLeftTime = _0xdd8ec6.data.shakeLeftTime;
            const {
              prizeDrawVo = ""
            } = _0xdd8ec6.data;
            if (prizeDrawVo) {
              switch (prizeDrawVo.prizeType) {
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
              }
            } else console.log(_0x5774c7);
          }
        } else console.log(_0xdd8ec6.errMsg);
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x4dc870 + " -> " + _0x5774c7);
    }
    typeof _0xdd8ec6 == "object" && _0xdd8ec6.errorMessage && _0xdd8ec6.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x45286e) {
    console.log(_0x4dc870 + " " + _0x45286e);
  }
}
function _0x1ed716(_0x3ff7e0, _0x18625c) {
  _0x18625c = _0x18625c + "&rfs=0000&x-api-eid-token=" + $.apitoken;
  let _0xaeb6ae = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://pro.m.jd.com",
    "Referer": "https://pro.m.jd.com/",
    "Cookie": _0x36b7bf,
    "User-Agent": $.UA,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-referer-page": "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html",
    "request-from": "native",
    "x-rp-client": "h5_1.0.0"
  };
  return {
    "url": _0x3ff7e0,
    "headers": _0xaeb6ae,
    "timeout": 30000,
    "ciphers": _0x3a0626.cpstr,
    ...(_0x18625c ? {
      "body": _0x18625c
    } : {})
  };
}
async function _0x531f50() {
  $.UA = "" + "jdapp;iPhone;10.1.5;13.1.2;" + _0x22d5b5(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x22d5b5(_0x2c1fc1) {
  _0x2c1fc1 = _0x2c1fc1 || 32;
  let _0x51737d = "abcdef0123456789",
    _0xf0db10 = _0x51737d.length,
    _0x33ec8e = "";
  for (i = 0; i < _0x2c1fc1; i++) {
    _0x33ec8e += _0x51737d.charAt(Math.floor(Math.random() * _0xf0db10));
  }
  return _0x33ec8e;
}
function _0x164c61(_0x1f2cc9) {
  if (typeof _0x1f2cc9 == "string") try {
    return JSON.parse(_0x1f2cc9);
  } catch (_0x497d1c) {
    console.log(_0x497d1c);
    $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
    return [];
  }
}
async function _0x2c92a5() {
  if (!$.joinVenderId) return;
  return new Promise(async _0x58be35 => {
    {
      $.errorJoinShop = "活动太火爆，请稍后再试";
      $.shopactivityId = "";
      let _0x3c05d4 = {
        "venderId": "" + $.joinVenderId + "",
        "shopId": "" + $.joinVenderId + "",
        "bindByVerifyCodeFlag": 1,
        "registerExtend": {},
        "writeChildFlag": 0,
        "channel": 406
      };
      $.shopactivityId == "" && delete _0x3c05d4.activityId;
      let _0x3c0a16 = {
        "appId": "27004",
        "fn": "bindWithVender",
        "body": _0x3c05d4,
        "apid": "shopmember_m_jd_com",
        "ver": "9.2.0",
        "cl": "H5",
        "user": $.UserName,
        "code": 0,
        "ua": $.UA
      };
      _0x3c05d4 = await dyy.getbody(_0x3c0a16);
      const _0x195eef = {
        "url": "https://api.m.jd.com/client.action?" + _0x3c05d4 + "&uuid=88888",
        "headers": {
          "accept": "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "cookie": _0x36b7bf,
          "origin": "https://shopmember.m.jd.com/",
          "user-agent": $.UA
        },
        "timeout": 30000
      };
      $.dget(_0x195eef, async (_0x1c2cab, _0x555046, _0x314b50) => {
        try {
          _0x314b50 = _0x314b50 && _0x314b50.match(/jsonp_.*?\((.*?)\);/) && _0x314b50.match(/jsonp_.*?\((.*?)\);/)[1] || _0x314b50;
          let _0x3245a8 = $.toObj(_0x314b50, _0x314b50);
          if (_0x3245a8 && typeof _0x3245a8 == "object") {
            {
              if (_0x3245a8 && _0x3245a8.success === true) {
                console.log("    " + _0x3245a8.message);
                $.errorJoinShop = _0x3245a8.message;
                if (_0x3245a8.result && _0x3245a8.result.giftInfo) {
                  for (let _0x122bac of _0x3245a8.result.giftInfo.giftList) {
                    console.log("" + "入会获得:" + _0x122bac.discountString + _0x122bac.prizeName + _0x122bac.secondLineDesc);
                  }
                }
              } else _0x3245a8 && typeof _0x3245a8 == "object" && _0x3245a8.message ? ($.errorJoinShop = _0x3245a8.message, console.log("" + (_0x3245a8.message || ""))) : console.log(_0x314b50);
            }
          } else console.log(_0x314b50);
        } catch (_0xc181cc) {
          $.logErr(_0xc181cc, _0x555046);
        } finally {
          _0x58be35();
        }
      });
    }
  });
}
async function _0x5e057c() {
  return new Promise(async _0x1dff2f => {
    let _0xc0b276 = {
        "venderId": $.joinVenderId,
        "payUpShop": true,
        "queryVersion": "10.5.2",
        "appid": "ef79a",
        "needSecurity": true,
        "bizId": "shop_view_app",
        "channel": 406
      },
      _0x974815 = {
        "appId": "ef79a",
        "fn": "getShopOpenCardInfo",
        "body": _0xc0b276,
        "apid": "jd_shop_member",
        "ver": "9.2.0",
        "cl": "H5",
        "user": $.UserName,
        "code": 0,
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      };
    _0xc0b276 = await dyy.getbody(_0x974815);
    const _0x4f7260 = {
      "url": "https://api.m.jd.com/client.action?" + _0xc0b276 + "&uuid=88888",
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x36b7bf,
        "origin": "https://shopmember.m.jd.com/",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      },
      "timeout": 60000
    };
    $.get(_0x4f7260, async (_0x57474c, _0x2433e8, _0x33a07d) => {
      try {
        {
          _0x33a07d = _0x33a07d && _0x33a07d.match(/jsonp_.*?\((.*?)\);/) && _0x33a07d.match(/jsonp_.*?\((.*?)\);/)[1] || _0x33a07d;
          let _0xf74b6b = $.toObj(_0x33a07d, _0x33a07d);
          if (_0xf74b6b && typeof _0xf74b6b == "object") {
            if (_0xf74b6b && _0xf74b6b.success == true) {
              console.log("去加入 -> " + (_0xf74b6b.result[0].shopMemberCardInfo.venderCardName || ""));
              $.shopactivityId = _0xf74b6b.result[0].interestsRuleList && _0xf74b6b.result[0].interestsRuleList[0] && _0xf74b6b.result[0].interestsRuleList[0].interestsInfo && _0xf74b6b.result[0].interestsRuleList[0].interestsInfo.activityId || "";
            }
          } else console.log(_0x33a07d);
        }
      } catch (_0x2c7750) {
        $.logErr(_0x2c7750, _0x2433e8);
      } finally {
        _0x1dff2f();
      }
    });
  });
}
function _0x6399d5(_0x511d9f) {
  let _0x4f5c13 = {
      "url": "http://121.40.162.127:9000/bdy_h5",
      "body": JSON.stringify(_0x511d9f),
      "headers": {
        "Content-Type": "application/json"
      },
      "timeout": 10000
    },
    _0x5c3926 = "";
  return new Promise(_0x55ca00 => {
    $.post(_0x4f5c13, (_0x4544cf, _0x107696, _0x2fc4d7) => {
      try {
        if (_0x4544cf) {} else _0x2fc4d7 = JSON.parse(_0x2fc4d7), _0x2fc4d7.code == 200 ? _0x5c3926 = _0x2fc4d7.data : $.log(_0x2fc4d7.msg);
      } catch (_0x1b9b19) {
        console.log(_0x1b9b19, _0x107696);
      } finally {
        _0x55ca00(_0x5c3926);
      }
    });
  });
}
function _0x183fc5(_0x56e2d5, _0x523522) {
  return Math.floor(Math.random() * (_0x523522 - _0x56e2d5)) + _0x56e2d5;
}
function _0x487a05(_0x4065ff = +new Date()) {
  var _0x1185ab = new Date(_0x4065ff + 28800000);
  return _0x1185ab.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x4cfeb0() {
  return new Promise(_0xcf9235 => {
    {
      const _0xe2e1f7 = {
        "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
        "headers": {
          "Cookie": _0x36b7bf,
          "referer": "https://h5.m.jd.com/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
      $.get(_0xe2e1f7, (_0x59c064, _0x44b4fb, _0x570253) => {
        try {
          if (_0x570253) {
            {
              _0x570253 = JSON.parse(_0x570253);
              if (_0x570253.islogin === "1") {} else _0x570253.islogin === "0" && ($.isLogin = false);
            }
          }
        } catch (_0x57089b) {
          console.log(_0x57089b);
        } finally {
          _0xcf9235();
        }
      });
    }
  });
}


function Env(o, t) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((r, i) => { s.call(this, t, (t, e, s) => { t ? i(t) : r(e) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { const {execSync} = require('child_process');execSync('sleep 30'); return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }, this.logLevelPrefixs = { debug: "[DEBUG] ", info: "[INFO] ", warn: "[WARN] ", error: "[ERROR] " }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null, ...s) { try { return JSON.stringify(t, ...s) } catch { return e } } getjson(t, e) { let s = e; if (this.getdata(t)) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(r => { this.get({ url: t }, (t, e, s) => r(s)) }) } runScript(a, o) { return new Promise(r => { let t = this.getdata("@chavy_boxjs_userCfgs.httpapi"); t = t && t.replace(/\n/g, "").trim(); var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20, [s, i] = (e = o && o.timeout ? o.timeout : e, t.split("@")); this.post({ url: `http://${i}/v1/scripting/evaluate`, body: { script_text: a, mock_type: "cron", timeout: e }, headers: { "X-Key": s, Accept: "*/*" }, timeout: e }, (t, e, s) => r(s)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; this.fs = this.fs || require("fs"), this.path = this.path || require("path"); var t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), r = !s && this.fs.existsSync(e); if (!s && !r) return {}; r = s ? t : e; try { return JSON.parse(this.fs.readFileSync(r)) } catch (t) { return {} } } writedata() { var t, e, s, r, i; this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i)) } lodash_get(t, e, s) { let r = t; for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, r, e) { return Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e), t } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t); if (s = s ? this.getval(s) : "") try { const t = JSON.parse(s); e = t ? this.lodash_get(t, r, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e), a = this.getval(r), a = r ? "null" === a ? null : a || "{}" : "{}"; try { const e = JSON.parse(a); this.lodash_set(e, i, t), s = this.setval(JSON.stringify(e), r) } catch (e) { this.lodash_set(a = {}, i, t), s = this.setval(JSON.stringify(a), r) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got || require("got"), this.cktough = this.cktough || require("tough-cookie"), this.ckjar = this.ckjar || new this.cktough.CookieJar, t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, void 0 === t.headers.cookie) && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar) } tmout() { return new Promise((t, e) => { this.tmoutId = setTimeout(() => { this.prms.cancel(), e({ message: "timemout", response: "" }) }, 5e4) }) } get(t, a = () => { }) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t), this.prms = this.got(t).on("redirect", (t, e) => { try { var s; t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } post(t, a = () => { }) { const {execSync} = require('child_process');execSync('sleep 30'); var e = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = { redirection: !1 })), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[e](t, (t, e, s) => { !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode), a(t, e, s) }); break; case "Quantumult X": t.method = e, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { var { statusCode: t, statusCode: e, headers: s, body: r, bodyBytes: i } = t; a(null, { status: t, statusCode: e, headers: s, body: r, bodyBytes: i }, r, i) }, t => a(t && t.error || "UndefinedError")); break; case "Node.js": this.initGotEnv(t); var { url: s, ...r } = t; this.prms = this.got[e](s, r), Promise.race([this.prms, this.tmout()]).then(t => { var { statusCode: t, statusCode: e, headers: s, rawBody: r, body: i } = t; a(null, { status: t, statusCode: e, headers: s, rawBody: r, body: i }, i), clearTimeout(this.tmoutId) }, t => { var { message: t, response: e } = t; clearTimeout(this.tmoutId), a(t, e, e && e.body) }) } } time(t, e = null) { var s, r = { "M+": (e = e ? new Date(e) : new Date).getMonth() + 1, "d+": e.getDate(), "H+": e.getHours(), "m+": e.getMinutes(), "s+": e.getSeconds(), "q+": Math.floor((e.getMonth() + 3) / 3), S: e.getMilliseconds() }; for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length))); return t } queryStr(e) { let s = ""; for (const r in e) { let t = e[r]; null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`) } return s = s.substring(0, s.length - 1) } msg(t = o, e = "", s = "", r = {}) { var i, a = r => { const { $open: t, $copy: e, $media: i, $mediaMime: a } = r; switch (typeof r) { case void 0: return r; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: r }; case "Loon": case "Shadowrocket": return r; case "Quantumult X": return { "open-url": r }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: var o = {}, s = r.openUrl || r.url || r["open-url"] || t; if (s && Object.assign(o, { action: "open-url", url: s }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, { action: "clipboard", text: s }), i) { let t, e, s; if (i.startsWith("http")) t = i; else if (i.startsWith("data:")) { const [r] = i.split(";"), [, a] = i.split(","); e = a, s = r.replace("data:", "") } else e = i, s = (t => { var e, s = { JVBERi0: "application/pdf", R0lGODdh: "image/gif", R0lGODlh: "image/gif", iVBORw0KGgo: "image/png", "/9j/": "image/jpg" }; for (e in s) if (0 === t.indexOf(e)) return s[e]; return null })(i); Object.assign(o, { "media-url": t, "media-base64": e, "media-base64-mime": a ?? s }) } return Object.assign(o, { "auto-dismiss": r["auto-dismiss"], sound: r.sound }), o; case "Loon": { const e = {}; (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, { openUrl: s }); var n = r.mediaUrl || r["media-url"]; return (n = i?.startsWith("http") ? i : n) && Object.assign(e, { mediaUrl: n }), console.log(JSON.stringify(e)), e } case "Quantumult X": { const a = {}; (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, { "open-url": o }); n = r["media-url"] || r.mediaUrl; return (n = i?.startsWith("http") ? i : n) && Object.assign(a, { "media-url": n }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, { "update-pasteboard": s }), console.log(JSON.stringify(a)), a } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(t, e, s, a(r)); break; case "Quantumult X": $notify(t, e, s, a(r)); break; case "Node.js": }this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i)) } debug(...t) { this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator))) } info(...t) { this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator))) } warn(...t) { this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator))) } error(...t) { this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator))) } log(...t) { 0 < t.length && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name}, 错误!`, t); break; case "Node.js": this.log("", `❗️${this.name}, 错误!`, void 0 !== t.message ? t.message : t) } } wait(e) { return new Promise(t => setTimeout(t, e)) } done(t = {}) { var e = ((new Date).getTime() - this.startTime) / 1e3; switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(o, t) }