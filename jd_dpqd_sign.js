/*
活动名称：批量店铺签到
活动链接：https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=<token>
环境变量：jd_dpqd_tokens // 活动令牌，多个用英文逗号分割
58 59 23 * * * jd_dpqd_sign.js
*/

const $ = new Env('批量店铺签到')
const _0x3fb231 = $.isNode() ? require("./jdCookie") : "",
  _0x72a0f4 = require("./USER_AGENTS"),
  _0x32834e = require("./function/dylib"),
  _0xf8ef7b = require("./function/dylans"),
  _0x40cd6c = require("./function/dylanv"),
  _0x1635fa = require("fs");

var _0x24f6be = [];
const _0x2be633 = process.env.dpqd_concNum ? process.env.dpqd_concNum : "5";
let _0x5ef776 = [],
  _0x4cd0a1 = "",
  _0x3c5286;
const _0x4d5d82 = "https://api.m.jd.com/api?appid=interCenter_shopSign",
  _0x4d1f3e = new Date();
_0x4d1f3e.setDate(_0x4d1f3e.getDate() + 1);
_0x4d1f3e.setHours(0, 0, 0, 0);
if ($.isNode()) {
  Object.keys(_0x3fb231).forEach(_0x452b4d => {
    _0x5ef776.push(_0x3fb231[_0x452b4d]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else {
  let _0x7fcf49 = $.getdata("CookiesJD") || "[]";
  _0x7fcf49 = _0x1e0d4c(_0x7fcf49);
  _0x5ef776 = _0x7fcf49.map(_0x46ab5b => _0x46ab5b.cookie);
  _0x5ef776.reverse();
  _0x5ef776.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
  _0x5ef776.reverse();
  _0x5ef776 = _0x5ef776.filter(_0xecd566 => _0xecd566 !== "" && _0xecd566 !== null && _0xecd566 !== undefined);
}
let _0x496408 = (process.env.jd_dpqd_tokens || "").split(/,|@|&/) || [],
  _0x48174b = [];
_0x496408.length > 0 && (_0x24f6be = _0x496408);
let _0x557cff = new Map(),
  _0x2f4215 = __dirname + "/rs_dpqd_tokens.json",
  _0xcb3233 = new Map();
  
$.TokenLists = [];
if (_0x1635fa.existsSync(_0x2f4215)) {
  const _0x92a8ed = _0x1635fa.readFileSync(_0x2f4215, "utf-8"),
    _0x719d1f = JSON.parse(_0x92a8ed);
  for (const _0x2f88e9 in _0x719d1f) {
    _0x557cff.set(_0x2f88e9, _0x719d1f[_0x2f88e9]);
	
	console.log(`${_0x2f88e9}`);
	
	$.TokenLists.push(_0x2f88e9);
  }
}
!(async () => {
  if (!_0x5ef776[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  //$.TokenLists = [];
  //$.TokenLists.push(..._0x24f6be);
  $.TokenLists = [...new Set($.TokenLists)].filter(_0x37ba41 => !!_0x37ba41 && _0x37ba41.length === 32);
  console.log("变量：dpqd_concNum 并发数量，默认5\n");
  if ($.TokenLists.length === 0) {
    console.log("无店铺签到token，退出！");
    return;
  } else console.log("共" + $.TokenLists.length + "个店铺，开始签到...");
  await _0x469ed1();
})().catch(_0xc3ca48 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0xc3ca48 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x469ed1() {
  for (var _0x509a19 = 0; _0x509a19 < $.TokenLists.length; _0x509a19++) {
    _0x4cd0a1 = _0x5ef776[Math.floor(Math.random() * _0x5ef776.length)];
    $.activityId = "";
    $.venderId = "";
    $.tasklist = [];
    if ($.TokenLists[_0x509a19] == "") continue;
    console.log("\n店铺->" + (_0x509a19 + 1) + "：" + $.TokenLists[_0x509a19]);
    let _0xb1ce7e = _0x557cff.get($.TokenLists[_0x509a19]);
    if (!_0xb1ce7e) {
      {
        console.log("缓存未命中，请先执行店铺签到活动查询任务！");
        continue;
      }
    }
    $.log("签到详情：↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓");
    await _0x1e2534(_0x2be633, _0x5ef776, _0x2aeb04, $.TokenLists[_0x509a19], _0xb1ce7e.venderId, _0xb1ce7e.activityId);
  }
}
async function _0x59671f(_0x4d373a, _0x4100d9) {
  let _0x46de6b = _0x32834e.getUA("", _0x4100d9);
  await _0x2aeb04(_0x4100d9, _0x4d373a, username, $.TokenLists[O00QQ0], _0x24f6be.venderId, _0x24f6be.activityId, _0x46de6b);
}
async function _0x1345a5(_0x54a30d) {
  let _0x40e66e = {
      "token": "" + _0x54a30d,
      "venderId": ""
    },
    _0x1675e0 = {
      "appId": "4da33",
      "functionId": "interact_center_shopSign_getActivityInfo",
      "body": _0x40e66e,
      "appid": "interCenter_shopSign",
      "clientVersion": $.UA.split(";")[2],
      "client": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x40e66e = await _0xf8ef7b.getbody(_0x1675e0);
  return new Promise(_0x4e05fa => {
    const _0x7ac7ff = {
      "url": "https://api.m.jd.com/api?loginType=2&" + _0x40e66e,
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x4cd0a1,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "ciphers": _0x32834e.cpstr
    };
    $.dget(_0x7ac7ff, (_0x5e549d, _0x42bc84, _0x2f2940) => {
      try {
        {
          if (_0x5e549d) console.log("查询店铺API请求失败‼️"), console.log(_0x5e549d);else {
            _0x2f2940 = JSON.parse(_0x2f2940);
            if (_0x2f2940.code == 402) $.venderId = "", console.log("活动已失效"), $.activityEnd = true, _0x48174b.push(_0x54a30d);else {
              $.venderId = _0x2f2940.data.venderId;
              $.activityId = _0x2f2940.data.id;
              let _0x2074f3 = _0x2f2940.data.startTime,
                _0x591e89 = _0x2f2940.data.endTime;
              console.log("开始时间：" + new Date(parseInt(_0x2074f3)).toLocaleString() + "\n结束时间：" + new Date(parseInt(_0x591e89)).toLocaleString());
              let _0x3833e0 = "";
              for (let _0x257aff = 0; _0x257aff < _0x2f2940.data.continuePrizeRuleList.length; _0x257aff++) {
                {
                  const _0x19f537 = _0x2f2940.data.continuePrizeRuleList[_0x257aff].level;
                  for (let _0x6c478e of _0x2f2940.data.continuePrizeRuleList[_0x257aff].prizeList) {
                    if (_0x6c478e.type == 4) _0x257aff != _0x2f2940.data.continuePrizeRuleList.length - 1 ? _0x3833e0 += _0x19f537 + "天" + _0x6c478e.discount + "豆" + _0x6c478e.number + "份|" : _0x3833e0 += _0x19f537 + "天" + _0x6c478e.discount + "豆" + _0x6c478e.number + "份";else {
                      if (_0x6c478e.type == 14) _0x257aff != _0x2f2940.data.continuePrizeRuleList.length - 1 ? _0x3833e0 += _0x19f537 + "天" + _0x6c478e.discount / 100 + "红包" + _0x6c478e.number + "份|" : _0x3833e0 += _0x19f537 + "天" + _0x6c478e.discount / 100 + "红包" + _0x6c478e.number + "份";else {
                        if (_0x6c478e.type == 10) {
                          {
                            if (_0x257aff != _0x2f2940.data.continuePrizeRuleList.length - 1) _0x3833e0 += _0x19f537 + "天" + _0x6c478e.discount + "E卡" + _0x6c478e.number + "份|";else {
                              _0x3833e0 += _0x19f537 + "天" + _0x6c478e.discount + "E卡" + _0x6c478e.number + "份";
                            }
                          }
                        } else {
                          if (_0x6c478e.type == 1) {} else {}
                        }
                      }
                    }
                  }
                }
              }
              !_0x3833e0 && (_0x3833e0 = "无豆无红包，积分优惠券！");
              console.log("奖励：" + _0x3833e0);
            }
          }
        }
      } catch (_0x23d604) {
        $.logErr(_0x23d604, _0x42bc84);
      } finally {
        _0x4e05fa(_0x2f2940);
      }
    });
  });
}
async function _0x5a2af7(_0x2679fa) {
  if (!_0x2679fa) console.log("店铺名称：未获取到！\n店铺链接：未获取到！");
  return new Promise(_0x129f11 => {
    const _0x33bc58 = {
      "url": "https://api.m.jd.com/client.action?functionId=whx_getMShopDetail&body=%7B%22venderId%22%3A%22" + _0x2679fa + "%22%2C%22stamp%22%3A%221%22%2C%22%24taroTimestamp%22%3A" + new Date().valueOf() + "%2C%22source%22%3A%22m-shop%22%7D&t=" + new Date().valueOf() + "&appid=shop_view&clientVersion=11.0.0&client=wh5&area=1_72_2799_0&uuid=16630119447091257705224",
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "Referer": "https://shop.m.jd.com/",
        "User-Agent": $.UA
      }
    };
    $.get(_0x33bc58, (_0x29afa4, _0x4905ca, _0x1aa615) => {
      try {
        if (_0x29afa4) console.log("查询店铺名称API请求失败‼️"), console.log(_0x29afa4);else {
          {
            _0x1aa615 = JSON.parse(_0x1aa615);
            let _0x39d7e4 = _0x1aa615.data.shopBaseInfo.shopName;
            console.log("店铺名称：" + _0x39d7e4 + "\n店铺链接：https://shop.m.jd.com/?venderId=" + _0x2679fa);
            _0x3c5286 += "【" + _0x39d7e4 + "】";
          }
        }
      } catch (_0x4cf752) {
        $.logErr(_0x4cf752, _0x4905ca);
      } finally {
        _0x129f11(_0x1aa615);
      }
    });
  });
}
async function _0x50d30e(_0x1c8a5b) {
  return new Promise(_0x92a7d5 => {
    const _0x1bc6d8 = {
      "url": _0x4d5d82 + "&t=" + Date.now() + "&loginType=2&functionId=interact_center_shopSign_getActivityInfo&body={%22token%22:%22" + _0x1c8a5b + "%22,%22venderId%22:%22%22}&jsonp=jsonp1005",
      "headers": {
        "accept": "accept",
        "accept-encoding": "gzip, deflate",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x4cd0a1,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      }
    };
    $.get(_0x1bc6d8, (_0x14a92e, _0x1b37bd, _0x473463) => {
      try {
        if (_0x14a92e) console.log("查询活动信息API请求失败‼️"), console.log(_0x14a92e);else {
          _0x473463 = JSON.parse(/{(.*)}/g.exec(_0x473463)[0]);
          $.activityId = _0x473463.data?.["id"];
          if (!$.activityId) return;
          let _0x127724 = _0x473463.data.startTime,
            _0x5b4c78 = _0x473463.data.endTime;
          console.log("开始时间：" + new Date(parseInt(_0x127724)).toLocaleString() + "\n结束时间：" + new Date(parseInt(_0x5b4c78)).toLocaleString());
          let _0x3e2590 = "";
          for (let _0x541ea3 = 0; _0x541ea3 < _0x473463.data.continuePrizeRuleList.length; _0x541ea3++) {
            const _0x232fce = _0x473463.data.continuePrizeRuleList[_0x541ea3].level;
            for (let _0x21eb82 of _0x473463.data.continuePrizeRuleList[_0x541ea3].prizeList) {
              {
                if (_0x21eb82.type == 4) {
                  {
                    if (_0x541ea3 != _0x473463.data.continuePrizeRuleList.length - 1) {
                      _0x3e2590 += _0x232fce + "天" + _0x21eb82.discount + "豆" + _0x21eb82.number + "份|";
                    } else _0x3e2590 += _0x232fce + "天" + _0x21eb82.discount + "豆" + _0x21eb82.number + "份";
                  }
                } else {
                  if (_0x21eb82.type == 14) _0x541ea3 != _0x473463.data.continuePrizeRuleList.length - 1 ? _0x3e2590 += _0x232fce + "天" + _0x21eb82.discount / 100 + "红包" + _0x21eb82.number + "份|" : _0x3e2590 += _0x232fce + "天" + _0x21eb82.discount / 100 + "红包" + _0x21eb82.number + "份";else {}
                }
              }
            }
          }
          !_0x3e2590 && (_0x3e2590 = "无豆无红包，可能积分E卡优惠券！");
          console.log("簽到奖励：" + _0x3e2590);
        }
      } catch (_0x55ee47) {
        $.logErr(_0x55ee47, _0x1b37bd);
      } finally {
        _0x92a7d5(_0x473463);
      }
    });
  });
}
async function _0x2aeb04(_0x414949, _0x5c38, _0x3d1d22, _0x47a8f7, _0x26b3e7, _0x56ca4d, _0x21f1b2) {
  if (_0xcb3233.get(_0x26b3e7)) return;
  let _0x5941c7 = {
      "token": "" + _0x26b3e7,
      "venderId": _0x56ca4d,
      "activityId": _0x21f1b2,
      "type": 56,
      "actionType": 7
    },
    _0x3a249f = {
      "appId": "4da33",
      "functionId": "interact_center_shopSign_signCollectGift",
      "body": _0x5941c7,
      "appid": "interCenter_shopSign",
      "clientVersion": _0x47a8f7.split(";")[2],
      "client": "ios",
      "user": _0x3d1d22,
      "code": 1,
      "ua": _0x47a8f7
    };
  _0x5941c7 = await _0xf8ef7b.getbody(_0x3a249f);
  return new Promise(_0x34464d => {
    {
      const _0x45ee74 = {
        "url": "https://api.m.jd.com/api?loginType=2&" + _0x5941c7,
        "headers": {
          "accept": "accept",
          "accept-encoding": "gzip, deflate",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "cookie": _0x414949,
          "referer": "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=" + _0x26b3e7 + "&sceneval=2",
          "User-Agent": _0x47a8f7
        }
      };
      $.get(_0x45ee74, async (_0x2801b7, _0x139437, _0x3f6535) => {
        try {
          if (_0x2801b7) console.log("签到API请求失败‼️"), console.log(_0x2801b7);else {
            {
              _0x3f6535 = JSON.parse(_0x3f6535);
              let _0x18e31b = 0;
              if (_0x3f6535.success && _0x3f6535.success === true) {
                let _0xe2c456 = 0;
                for (let _0x400a6c of _0x3f6535.data) {
                  {
                    for (i of _0x400a6c.prizeList) switch (i.type) {
                      case 4:
                        _0xe2c456 += i.discount;
                        break;
                    }
                  }
                }
                let _0xbdbae2 = await _0x47424e(_0x414949, _0x26b3e7);
                console.log("┗━[" + _0x5c38 + "][" + _0x3d1d22 + "] 签到成功" + (_0xe2c456 > 0 ? "，获得" + _0xe2c456 + "京豆🥔，" : "，") + "已签" + (_0xbdbae2.data?.["days"] || "?") + "天");
              } else {
                if (_0x3f6535.msg) {
                  {
                    let _0x2885e8 = await _0x47424e(_0x414949, _0x26b3e7);
                    if (_0x3f6535.msg.includes("已经")) console.log("┗━[" + _0x5c38 + "][" + _0x3d1d22 + "] 今日已签过！已签" + (_0x2885e8.data?.["days"] || "?") + "天");else {
                      {
                        $.log("┗━[" + _0x5c38 + "][" + _0x3d1d22 + "] " + _0x3f6535.msg);
                        if (_0x3f6535.msg.includes("不存在")) _0xcb3233.set(_0x26b3e7, 1);
                      }
                    }
                  }
                } else {
                  console.log("┗━[" + _0x5c38 + "][" + _0x3d1d22 + "] 签到失败,重試❗️❗️❗️");
                  _0x18e31b++;
                  if (_0x18e31b > 3) return;
                  await $.wait(500);
                  await _0x2aeb04(_0x414949, _0x5c38, _0x3d1d22, _0x47a8f7, _0x26b3e7, _0x56ca4d, _0x21f1b2);
                }
              }
            }
          }
        } catch (_0x5326a9) {
          $.logErr(_0x5326a9, _0x139437);
        } finally {
          _0x34464d(_0x3f6535);
        }
      });
    }
  });
}
async function _0x47424e(_0x5cd30b, _0x1cc234) {
  return new Promise(_0xbefe3a => {
    {
      const _0x3f552e = {
        "url": _0x4d5d82 + "&t=" + Date.now() + "&loginType=2&functionId=interact_center_shopSign_getSignRecord&body={%22token%22:%22" + _0x1cc234 + "%22,%22venderId%22:%22%22,%22activityId%22:%22%22,%22type%22:56}&jsonp=jsonp1006",
        "headers": {
          "accept": "application/json",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "cookie": _0x5cd30b,
          "referer": "https://h5.m.jd.com/",
          "User-Agent": $.UA
        }
      };
      $.get(_0x3f552e, (_0x23cf44, _0x45fa1f, _0x3ac430) => {
        try {
          _0x23cf44 ? (console.log("API请求失败‼️"), console.log(_0x23cf44)) : _0x3ac430 = JSON.parse(/{(.*)}/g.exec(_0x3ac430)[0]);
        } catch (_0xbdad74) {
          $.logErr(_0xbdad74, _0x45fa1f);
        } finally {
          _0xbefe3a(_0x3ac430);
        }
      });
    }
  });
}
async function _0x5c38ba() {
  if ($.isNode()) {
    $.msg($.name, "", "【京东账号" + $.index + "】" + $.nickName + "\n" + _0x3c5286);
    allMessage += "【京东账号" + $.index + "】" + $.nickName + "\n" + _0x3c5286 + ($.index !== _0x5ef776.length ? "\n\n" : "");
  }
}
function _0x4bf1c3() {
  return new Promise(_0x26868c => {
    const _0x2559ac = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x4cd0a1,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x2559ac, (_0x238220, _0x5431fb, _0x3501ff) => {
      try {
        {
          if (_0x3501ff) {
            {
              _0x3501ff = JSON.parse(_0x3501ff);
              if (_0x3501ff.islogin === "1") {} else _0x3501ff.islogin === "0" && ($.isLogin = false);
            }
          }
        }
      } catch (_0x279eee) {
        console.log(_0x279eee);
      } finally {
        _0x26868c();
      }
    });
  });
}
function _0x1e0d4c(_0x57fb1e) {
  if (typeof _0x57fb1e == "string") {
    try {
      return JSON.parse(_0x57fb1e);
    } catch (_0x16321a) {
      console.log(_0x16321a);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function _0x315afa(_0x446aae) {
  _0x446aae = _0x446aae || 32;
  let _0x357ae0 = "abcdef0123456789",
    _0x44c4eb = _0x357ae0.length,
    _0x5bd332 = "";
  for (i = 0; i < _0x446aae; i++) _0x5bd332 += _0x357ae0.charAt(Math.floor(Math.random() * _0x44c4eb));
  return _0x5bd332;
}
function _0xc089a0() {
  $.UA = "jdapp;iPhone;10.2.2;13.1.2;" + _0x315afa(40) + ";M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167863;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
async function _0x1e2534(_0x3a20af = 3, _0x408489, _0xe7d2e6, ..._0x1b82a0) {
  const _0x25b2d3 = _0x408489.slice();
  let _0x6e35c5 = 0,
    _0x51342d = 0;
  async function _0x53db57(_0x3e76cd, _0x672e8a) {
    {
      const _0x1e0baa = _0x32834e.getUA("", _0x3e76cd),
        _0xb6aa65 = _0x3e76cd ? decodeURIComponent(_0x3e76cd.match(/pt_pin=([^; ]+)(?=;?)/) && _0x3e76cd.match(/pt_pin=([^; ]+)(?=;?)/)[1]) : "";
      await _0xe7d2e6(_0x3e76cd, _0x672e8a, _0xb6aa65, _0x1e0baa, ..._0x1b82a0);
      _0x6e35c5--;
      _0xbf39cf();
    }
  }
  async function _0xbf39cf() {
    while (_0x6e35c5 < _0x3a20af && _0x25b2d3.length > 0) {
      {
        const _0x587ee0 = _0x25b2d3.shift();
        _0x6e35c5++;
        _0x51342d++;
        _0x53db57(_0x587ee0, _0x51342d);
      }
    }
  }
  const _0x38641c = Math.min(_0x25b2d3.length, _0x3a20af),
    _0x27bf57 = [];
  for (let _0x161295 = 0; _0x161295 < _0x38641c; _0x161295++) {
    const _0x5512f3 = _0x25b2d3.shift();
    _0x6e35c5++;
    _0x51342d++;
    _0x27bf57.push(_0x53db57(_0x5512f3, _0x51342d));
  }
  await Promise.all(_0x27bf57);
  await new Promise(_0x3f91d0 => {
    const _0x4e9e5c = setInterval(() => {
      _0x6e35c5 === 0 && _0x25b2d3.length === 0 && (clearInterval(_0x4e9e5c), _0x3f91d0());
    }, 100);
  });
}




function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
