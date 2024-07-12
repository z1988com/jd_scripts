/*
5 0,16 * * * jd_MktV50.js
 */

const $ = new Env('V你50超市卡');

const _0x4c3ebe = $.isNode() ? require("./sendNotify") : "",
  _0x2c2dc2 = $.isNode() ? require("./jdCookie.js") : "",
  _0x2c601e = require("./USER_AGENTS"),
  _0x238b8f = require("./function/dylany");
let _0x3b8c78 = true,
  _0x265df2 = [],
  _0x5bf89d = [],
  _0x35b97a = "",
  _0x5a2c37 = "";
if ($.isNode()) {
  Object.keys(_0x2c2dc2).forEach(_0x45b544 => {
    _0x5bf89d.push(_0x2c2dc2[_0x45b544]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x5bf89d = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x3c91cd($.getdata("CookiesJD") || "[]").map(_0x2eb7a5 => _0x2eb7a5.cookie)].filter(_0x37f85e => !!_0x37f85e);
$.linkId = "efwSCgMYmMaufIsC4qgfIA";
!(async () => {
  if (!_0x5bf89d[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("问题建议：https://t.me/dylan_jdpro");
  for (let _0x3078ba = 0; _0x3078ba < _0x5bf89d.length; _0x3078ba++) {
    if (_0x5bf89d[_0x3078ba]) {
      _0x35b97a = _0x5bf89d[_0x3078ba];
      $.UserName = decodeURIComponent(_0x35b97a.match(/pt_pin=([^; ]+)(?=;?)/) && _0x35b97a.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x3078ba + 1;
      $.isLogin = true;
      $.nickName = "";
      $.UA = _0x2c601e.UARAM ? _0x2c601e.UARAM() : _0x2c601e.USER_AGENT;
      await _0x5884a8();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        {
          $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
            "open-url": "https://bean.m.jd.com/bean/signIndex.action"
          });
          $.isNode() && (await _0x4c3ebe.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
          continue;
        }
      }
      let _0x21ec33 = await _0x5c9a55();
      if (_0x21ec33.length != 0) {
        {
          console.log("\n去做任务...");
          for (let _0x34c8c8 of _0x21ec33) {
            {
              if (_0x34c8c8.taskTitle === "邀请好友助力") continue;
              if (_0x34c8c8.taskFinished) {
                {
                  console.log(_0x34c8c8.taskShowTitle + " ---- 已完成");
                  continue;
                }
              }
              console.log("去做任务 " + _0x34c8c8.taskShowTitle);
              if (_0x34c8c8.taskType === "FOLLOW_CHANNEL") await _0x3223e3();
			  
			  await $.wait( 1000 * 10);
			  
              let _0xb9efb = await _0x3d79aa(_0x34c8c8.taskType, _0x34c8c8.id);
              if (_0xb9efb.code) break;
              let _0x849e10 = _0x34c8c8.taskLimitTimes - _0x34c8c8.taskDoTimes;
              for (let _0xd6d296 of _0xb9efb) {
                if (_0x849e10 == 0) break;
                _0x34c8c8.id == 5724 && (_0xd6d296.itemId = _0xd6d296.itemName);
                await _0x27616d(_0xd6d296.itemId, _0x34c8c8.taskType, _0x34c8c8.id);
                await $.wait(parseInt(Math.random() * 500 + 1000, 10));
                _0x849e10--;
              }
            }
          }
        }
      } else {
        {
          console.log("活动结束了，期待下期！");
          return;
        }
      }
      await _0x6b948();
      if ($.remainchance > 0) {
        $.log("\n开始抽奖...");
        for (let _0x140fbf = 0; _0x140fbf < $.remainchance; _0x140fbf++) {
          $.log("第" + (_0x140fbf + 1) + "次抽奖：");
          await _0x1b9540();
		  await $.wait( 1000 * 10);
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        }
      }
	  await $.wait( 1000 * 10);
      await $.wait(parseInt(Math.random() * 1000 + 1500, 10));
    }
  }
  _0x5a2c37 && (await _0x4c3ebe.sendNotify($.name, _0x5a2c37));
})().catch(_0x5e8927 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x5e8927 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x6b948() {
  let _0x41422f = {
      "linkId": $.linkId,
      "taskId": "",
      "inviter": "",
      "inJdApp": true
    },
    _0x4c2b1e = {
      "appId": "b7d17",
      "fn": "superLeagueHome",
      "body": _0x41422f,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x41422f = await _0x238b8f.getbody(_0x4c2b1e);
  if (!_0x41422f) return;
  return new Promise(async _0xfca757 => {
    $.post(_0x3ac232(_0x41422f), async (_0x460596, _0x39f635, _0x6f75d3) => {
      try {
        _0x460596 ? (console.log("" + JSON.stringify(_0x460596)), console.log(" API请求失败，请检查网路重试")) : (_0x6f75d3 = JSON.parse(_0x6f75d3), _0x6f75d3.code == 0 ? ($.remainchance = _0x6f75d3.data.remainTimes || 0, _0x265df2.push(_0x6f75d3.data.userCode)) : console.log(_0x6f75d3.msg));
      } catch (_0x172ae5) {
        $.logErr(_0x172ae5, _0x39f635);
      } finally {
        _0xfca757(_0x6f75d3);
      }
    });
  });
}
async function _0xdb368(_0x40be8c) {
  let _0x36b27d = {
      "linkId": $.linkId,
      "taskId": 5144,
      "inviter": _0x40be8c,
      "inJdApp": true
    },
    _0xc830c4 = {
      "appId": "b7d17",
      "fn": "superLeagueHome",
      "body": _0x36b27d,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x36b27d = await _0x238b8f.getbody(_0xc830c4);
  if (!_0x36b27d) return;
  return new Promise(async _0x4a54dd => {
    $.post(_0x3ac232(_0x36b27d), async (_0x4d0c5d, _0x3810b8, _0x214149) => {
      try {
        if (_0x4d0c5d) {
          console.log("" + JSON.stringify(_0x4d0c5d));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x214149 = JSON.parse(_0x214149);
          _0x214149.code == 0 ? $.remainchance = _0x214149.data.remainTimes || 0 : console.log(_0x214149.msg);
        }
      } catch (_0x358db0) {
        $.logErr(_0x358db0, _0x3810b8);
      } finally {
        _0x4a54dd(_0x214149);
      }
    });
  });
}
async function _0x3223e3() {
  let _0xc93130 = {
    "url": "https://api.m.jd.com/userFollow",
    "body": "appid=jd-super-market&t=" + Date.now() + "&functionId=userFollow&client=m&body=%7B%22pin%22%3A%22%E9%85%B7%E5%A5%94%E8%B5%B6%E4%B8%8D%E4%B8%8A%22%2C%22type%22%3A%220%22%2C%22businessId%22%3A1%2C%22themeId%22%3A112%2C%22babelChannel%22%3A%22ttt9%22%2C%22isJdApp%22%3A%221%22%2C%22isWx%22%3A%220%22%7D",
    "headers": {
      "Host": "api.m.jd.com",
      "Origin": "https://pro.m.jd.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": _0x35b97a
    }
  };
  return new Promise(async _0x195f75 => {
    $.post(_0xc93130, async (_0x1b9860, _0x25fd22, _0x1b03d3) => {
      try {
        if (_0x1b9860) console.log("" + JSON.stringify(_0x1b9860)), console.log(" API请求失败，请检查网路重试");else {
          {
            _0x1b03d3 = JSON.parse(_0x1b03d3);
            if (_0x1b03d3.code == 0) {} else {}
          }
        }
      } catch (_0x743602) {
        $.logErr(_0x743602, _0x25fd22);
      } finally {
        _0x195f75(_0x1b03d3);
      }
    });
  });
}
async function _0x5c9a55() {
  let _0xdae35c = "";
  return new Promise(async _0x3a7d5c => {
    $.post(_0x3ac232("functionId=apTaskList&body=%7B%22linkId%22%3A%22" + $.linkId + "%22%7D&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0"), async (_0x4d145a, _0x800841, _0xa56780) => {
      try {
        _0x4d145a ? (console.log("" + JSON.stringify(_0x4d145a)), console.log(" API请求失败，请检查网路重试")) : (_0xa56780 = JSON.parse(_0xa56780), _0xa56780.code&&_0xa56780.code == 0 ? _0xdae35c = _0xa56780.data : console.log(_0xa56780.msg));
      } catch (_0x3ef375) {
        $.logErr(_0x3ef375, _0x800841);
      } finally {
        _0x3a7d5c(_0xdae35c);
      }
    });
  });
}
async function _0x1b9540() {
  let _0xc6780e = {
      "linkId": $.linkId
    },
    _0x264c27 = {
      "appId": "60dc4",
      "fn": "superLeagueLottery",
      "body": _0xc6780e,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0xc6780e = await _0x238b8f.getbody(_0x264c27);
  if (!_0xc6780e) return;
  return new Promise(async _0x271a63 => {
    $.post(_0x3ac232(_0xc6780e), async (_0x287354, _0x1121a7, _0x2f1ca8) => {
      try {
        {
          if (_0x287354) console.log("" + JSON.stringify(_0x287354)), console.log(" API请求失败，请检查网路重试");else {
            _0x2f1ca8 = JSON.parse(_0x2f1ca8);
            if (_0x2f1ca8.success) {
              if (_0x2f1ca8.data.prizeConfigName) {
                if (_0x2f1ca8.data.prizeConfigName.includes("超市卡")) {
                  console.log("----获得：" + _0x2f1ca8.data.prizeConfigName + " 🤑");
                  _0x2f1ca8.data.prizeConfigName === "50元超市卡" && (_0x5a2c37 += "[账号" + $.index + $.UserName + "]获得：  " + _0x2f1ca8.data.prizeConfigName + "\n");
                } else console.log("----获得：" + _0x2f1ca8.data.prizeConfigName + " " + _0x2f1ca8.data.codeDesc);
              } else console.log("----空气");
            } else {
              console.log(_0x2f1ca8.msg);
            }
          }
        }
      } catch (_0x2740a0) {
        $.logErr(_0x2740a0, _0x1121a7);
      } finally {
        _0x271a63();
      }
    });
  });
}
async function _0x27616d(_0x557f20, _0x22dcfe, _0x54d19a) {
  let _0x48d860 = {
      "taskType": "" + _0x22dcfe,
      "taskId": _0x54d19a,
      "channel": 4,
      "checkVersion": true,
      "cityId": 0,
      "provinceId": 0,
      "countyId": 0,
      "linkId": $.linkId,
      "taskInsert": false,
      "resourceType": null,
      "itemId": "" + _0x557f20
    },
    _0x2fc042 = {
      "appId": "54ed7",
      "fn": "apsDoTask",
      "body": _0x48d860,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x48d860 = await _0x238b8f.getbody(_0x2fc042);
  if (!_0x48d860) return;
  return new Promise(async _0x3abd85 => {
    $.post(_0x3ac232(_0x48d860), async (_0xb7a124, _0x2ef72d, _0x467252) => {
      try {
        _0xb7a124 ? (console.log("" + JSON.stringify(_0xb7a124)), console.log(" API请求失败，请检查网路重试")) : (_0x467252 = JSON.parse(_0x467252), _0x467252.code == 0 ? $.log("任务成功，抽奖次数 +" + _0x467252.data.awardInfo[0].factAwardNum) : console.log(_0x467252.msg));
      } catch (_0xea38e3) {
        $.logErr(_0xea38e3, _0x2ef72d);
      } finally {
        _0x3abd85();
      }
    });
  });
}
async function _0x3d79aa(_0x5b9490, _0x120d5c) {
  let _0x33789a = "functionId=apTaskDetail&body={\"taskType\":\"" + _0x5b9490 + "\",\"taskId\":" + _0x120d5c + ",\"channel\":4,\"checkVersion\":true,\"cityId\":0,\"provinceId\":0,\"countyId\":0,\"linkId\":\"" + $.linkId + "\"}&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.3.2&loginType=2&loginWQBiz=wegame&h5st=null";
  return new Promise(async _0x369e3a => {
    $.post(_0x3ac232(_0x33789a), async (_0x3fd233, _0x412ef2, _0x3a1811) => {
      try {
        _0x3fd233 ? (console.log("" + JSON.stringify(_0x3fd233)), console.log(" API请求失败，请检查网路重试")) : (_0x3a1811 = JSON.parse(_0x3a1811), _0x3a1811.code == 0 ? _0x3a1811 = _0x3a1811.data.taskItemList : console.log(_0x3a1811.errMsg));
      } catch (_0x2cefbc) {
        $.logErr(_0x2cefbc, _0x412ef2);
      } finally {
        _0x369e3a(_0x3a1811);
      }
    });
  });
}
async function _0x2b0b77(_0x56b0dd, _0x154365) {
  let _0x51c936 = {
    "linkId": "l-yLvQMhLwCqYy6_nXUBgg",
    "taskId": _0x56b0dd,
    "itemId": encodeURIComponent(_0x154365),
    "channel": 4
  };
  _0x51c936 = "functionId=apStartTaskTime&body=" + JSON.stringify(_0x51c936) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0";
  return new Promise(async _0x2e0b54 => {
    $.post(_0x3ac232(_0x51c936), async (_0x198b2f, _0x3005e1, _0x26ffe6) => {
      try {
        {
          if (_0x198b2f) console.log("" + JSON.stringify(_0x198b2f)), console.log(" API请求失败，请检查网路重试");else {
            {
              _0x26ffe6 = JSON.parse(_0x26ffe6);
              if (_0x26ffe6.code == 0) {} else console.log(_0x26ffe6.errMsg);
            }
          }
        }
      } catch (_0x49b298) {
        $.logErr(_0x49b298, _0x3005e1);
      } finally {
        _0x2e0b54(_0x26ffe6);
      }
    });
  });
}
async function _0x1934cd(_0xb0ee73) {
  let _0x1f282d = {
    "linkId": "l-yLvQMhLwCqYy6_nXUBgg",
    "taskId": _0xb0ee73
  };
  _0x1f282d = "functionId=apCheckAndResetTaskTime&body=" + JSON.stringify(_0x1f282d) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0";
  return new Promise(async _0x22d32a => {
    $.post(_0x3ac232(_0x1f282d), async (_0x5523b9, _0x1b2cc0, _0x5bb168) => {
      try {
        {
          if (_0x5523b9) console.log("" + JSON.stringify(_0x5523b9)), console.log(" API请求失败，请检查网路重试");else {
            _0x5bb168 = JSON.parse(_0x5bb168);
            if (_0x5bb168.code == 0) {} else console.log(_0x5bb168.errMsg);
          }
        }
      } catch (_0x1174af) {
        $.logErr(_0x1174af, _0x1b2cc0);
      } finally {
        _0x22d32a(_0x5bb168);
      }
    });
  });
}
async function _0x3cbc1a() {
  let _0x5440c8 = {
      "linkId": "DI7EC1v1FNDMSoTfLID0zg"
    },
    _0x13413b = {
      "appId": "ebecc",
      "fn": "apDoLimitTimeTask",
      "body": _0x5440c8,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "xcr": 1,
      "ua": $.UA
    };
  _0x5440c8 = await _0x238b8f.getbody(_0x13413b);
  if (!_0x5440c8) return;
  return new Promise(async _0x3b9ded => {
    $.post(_0x3ac232(_0x5440c8), async (_0x427e66, _0x1fc0d2, _0x1d1011) => {
      try {
        {
          if (_0x427e66) console.log("" + JSON.stringify(_0x427e66)), console.log(" API请求失败，请检查网路重试");else {
            _0x1d1011 = JSON.parse(_0x1d1011);
            if (_0x1d1011.code == 0) {} else console.log(_0x1d1011.errMsg);
          }
        }
      } catch (_0x33ff35) {
        $.logErr(_0x33ff35, _0x1fc0d2);
      } finally {
        _0x3b9ded(_0x1d1011);
      }
    });
  });
}
async function _0x120371(_0x7eee19) {
  let _0x5404cf = {
    "linkId": "l-yLvQMhLwCqYy6_nXUBgg",
    "taskId": String(_0x7eee19)
  };
  _0x5404cf = "functionId=apCheckTaskTimeEnd&body=" + JSON.stringify(_0x5404cf) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0";
  return new Promise(async _0xa6cc0c => {
    $.post(_0x3ac232(_0x5404cf), async (_0xd8009f, _0x3f957f, _0x48f46d) => {
      try {
        if (_0xd8009f) console.log("" + JSON.stringify(_0xd8009f)), console.log(" API请求失败，请检查网路重试");else {
          {
            _0x48f46d = JSON.parse(_0x48f46d);
            if (_0x48f46d.code == 0) {} else console.log(_0x48f46d.errMsg);
          }
        }
      } catch (_0x1656b9) {
        $.logErr(_0x1656b9, _0x3f957f);
      } finally {
        _0xa6cc0c(_0x48f46d);
      }
    });
  });
}
function _0x3ac232(_0x292edb) {
  return {
    "url": "https://api.m.jd.com/api",
    "body": _0x292edb,
    "headers": {
      "Host": "api.m.jd.com",
      "Origin": "https://prodev.m.jd.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "Cookie": _0x35b97a
    }
  };
}
function _0x5884a8() {
  return new Promise(_0x19eac2 => {
    const _0x1b08f6 = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x35b97a,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x1b08f6, (_0x30ecac, _0x50a567, _0x40dfab) => {
      try {
        if (_0x40dfab) {
          {
            _0x40dfab = JSON.parse(_0x40dfab);
            if (_0x40dfab.islogin === "1") {} else _0x40dfab.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x1170e4) {
        console.log(_0x1170e4);
      } finally {
        _0x19eac2();
      }
    });
  });
}
function _0x30cf0b() {
  return new Promise(_0x12a805 => {
    {
      if (!_0x3b8c78) {
        $.msg($.name, "", "" + _0x5a2c37);
      } else $.log("京东账号" + $.index + $.nickName + "\n" + _0x5a2c37);
      _0x12a805();
    }
  });
}
function _0x361575(_0x474a5c) {
  try {
    if (typeof JSON.parse(_0x474a5c) == "object") return true;
  } catch (_0x52a616) {
    console.log(_0x52a616);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x3c91cd(_0x577a18) {
  if (typeof _0x577a18 == "string") try {
    return JSON.parse(_0x577a18);
  } catch (_0x4b6a17) {
    console.log(_0x4b6a17);
    $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
    return [];
  }
}


function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) {  return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }