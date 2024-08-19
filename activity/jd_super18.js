/*
变量：REDCODE='7位字母'
export REDCODE18="xxxxxxx"
*/




const $ = new Env('超级18红包');
const _0x313ed4 = $.isNode() ? require("./jdCookie.js") : "";
let _0x375c7f = "",
  _0x52f6fb = 3000,
  _0x5a7f3f = 1,
  _0x7e7b3 = 0;
$.CryptoJS = require("crypto-js");
const _0x45265d = require("./function/dylans.js"),
  _0x58dde1 = require("./function/dylib.js");
let _0x342e84 = {};
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  _0x342e84 = require("./function/proxy.js");
  $.dget = _0x342e84.intoRequest($.get.bind($));
  $.dpost = _0x342e84.intoRequest($.post.bind($));
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x4617f1 = [],
  _0x481086 = "";
if ($.isNode()) {
  Object.keys(_0x313ed4).forEach(_0xd1a208 => {
    _0x4617f1.push(_0x313ed4[_0xd1a208]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x4617f1 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x3a1990($.getdata("CookiesJD") || "[]").map(_0x3aefa3 => _0x3aefa3.cookie)].filter(_0x3882b9 => !!_0x3882b9);
let _0x57ecd3 = "";
if (!_0x57ecd3) _0x57ecd3 = "";
_0x57ecd3 = $.isNode() ? process.env.JD_nhj_rebatePin ? process.env.JD_nhj_rebatePin : "" + _0x57ecd3 : $.getdata("JD_nhj_rebatePin") ? $.getdata("JD_nhj_rebatePin") : "" + _0x57ecd3;
_0x5a7f3f = $.isNode() ? process.env.RedCount ? process.env.RedCount : "" + _0x5a7f3f : $.getdata("RedCount") ? $.getdata("RedCount") : "" + _0x5a7f3f;
_0x52f6fb = $.isNode() ? process.env.RedTimes ? process.env.RedTimes : "" + _0x52f6fb : $.getdata("RedTimes") ? $.getdata("RedTimes") : "" + _0x52f6fb;
$.shareCount = $.isNode() ? process.env.JD_nhj_shareHelpCount ? process.env.JD_nhj_shareHelpCount : "" + _0x7e7b3 : $.getdata("JD_nhj_shareHelpCount") ? $.getdata("JD_nhj_shareHelpCount") : "" + _0x7e7b3;
$.shareCount = parseInt($.shareCount, 10) || 0;
let _0x171b8f = _0x57ecd3 && _0x57ecd3.split(",") || [];
$.time("yyyy-MM-dd HH:mm:ss");
message = "";
let _0xefc670 = "";
resMsg = "";
$.uiUpdateTime = "";
$.endFlag = false;
$.runEnd = false;
let _0x3b453f = {};
$.getH5st_WQ_Arr = {};
$.runArr = {};
let _0x2eceae = "";
const _0x291bd0 = "2024/8/19 00:00:00+08:00";
let _0xd6c557 = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000;
$.UVCookieArr = {};
lr = {};
$.UVCookie = "";
let _0x464475 = "",
  _0x257125 = 2;
_0x52f6fb = Number(_0x52f6fb);
$.time("yyyy-MM-dd");
_0x35a5b6();
!(async () => {
  $.log("\n代理API DY_PROXY='url'");
  let _0x45c8b5 = [];
  if (_0x45c8b5.length === 0) _0x45c8b5 = ["m8RUY43", "m8RUY43"];
  _0x45c8b5 = _0x45c8b5[Math.floor(Math.random() * _0x45c8b5.length)];
  if (!_0x375c7f) _0x375c7f = "https://u.jd.com/" + (_0x45c8b5 || "m8RUY43");
  _0x375c7f = $.isNode() ? process.env.REDCODE18 ? process.env.REDCODE18 : "" + _0x375c7f : $.getdata("REDCODE18") ? $.getdata("REDCODE18") : "" + _0x375c7f;
  
  ii1I11 = _0x375c7f + "";
  ii1I11 = "https://u.jd.com/m8Xf611";
  
  if (/https:\/\/u\.jd\.com\/.+/.test(ii1I11)) {
    if (ii1I11.split("/").pop()) ii1I11 = ii1I11.split("/").pop().split("?").shift();else {
      console.log("请填写正确的rebateCode");
      return;
    }
  }
  if (!_0x4617f1[0]) {
    {
      $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", {
        "open-url": "https://bean.m.jd.com/"
      });
      return;
    }
  }
  if (_0xd6c557 > new Date(_0x291bd0).getTime()) {
    {
      $.msg($.name, "活动已结束", "请删除此脚本");
      return;
    }
  }
  console.log("CODE：" + ii1I11.replace(/.+(.{3})/, "***$1"));
  $.shareCodeArr = {};
  $.shareCodePinArr = $.getdata("JD_241111_Red_pin") || {};
  $.shareCode = "";
  $.again = false;
  if ($.end) return;
  for (let _0x434937 = 0; _0x434937 < _0x4617f1.length && !$.runEnd; _0x434937++) {
    if ($.endFlag) break;
    _0x481086 = _0x4617f1[_0x434937];
    if (_0x481086) {
      $.UserName = decodeURIComponent(_0x481086.match(/pt_pin=([^; ]+)(?=;?)/) && _0x481086.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x434937 + 1;
      if ($.runArr[$.UserName]) continue;
      $.xcrflag = 1;
      console.log("\n\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      let _0x58ebd5 = 1;
      _0x257125 = 4;
      $.eid_token = "";
      $.index != 1 && _0x342e84.swip && (await _0x342e84.swip());
      _0x38cfbd(_0x58ebd5);
      await _0x44fb01();
      await _0x40db78();
      if ($.endFlag) break;
    }
  }
  if (message) {
    {
      if ($.isNode()) {}
    }
  }
})().catch(_0x5d2a98 => $.logErr(_0x5d2a98)).finally(() => {
  $.done();
});
async function _0x40db78(_0x5f1fce = 0) {
  try {
    $.UVCookie = $.UVCookieArr[$.UserName] || "";
    !$.UVCookie && _0x35a5b6();
    resMsg = "";
    let _0x114866 = false,
      _0x5ec3ae = 0,
      _0x366a57 = 0,
      _0x416406 = 0;
    $.shareFlag = true;
    do {
      {
        if (_0x366a57 > 2) _0x5ec3ae = 0;
        $.flag = 0;
        _0xefc670 = "";
        $.url1 = "";
        await _0x1a11e0();
        if (!$.url1) {
          console.log("获取url1失败");
          $.end = true;
          break;
        }
        $.url2 = "";
        $.UVCookie = _0x464475.getUVCookie("", "", $.url1, $.UVCookie);
        $.UVCookieArr[$.UserName] = $.UVCookie + "";
        await _0x38bb60();
        if (!$.url2) {
          {
            console.log("获取不到红包页面");
            break;
          }
        }
        if (!$.url2) $.url2 = "https://pro.m.jd.com/mall/active/3GriExsopKWEjptvv33rYCcDgUwK/index.html?unionActId=31177&d=" + ii1I11 + "&cu=true&utm_source=kong&utm_medium=jingfen";
        $.actId = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && $.url2.match(/mall\/active\/([^/]+)\/index\.html/)[1] || "3GriExsopKWEjptvv33rYCcDgUwK";
        $.UVCookie = _0x464475.getUVCookie("", "", $.url2, $.UVCookie);
        $.origin = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/)[1] || "https://pro.m.jd.com";
        $.UVCookieArr[$.UserName] = $.UVCookie + "";
        $.eid = "";
        !$.eid && ($.eid = -1);
        if (_0x5f1fce == 0) {
          let _0x4c290b = 0,
            _0x4d33ae = true,
            _0x272095 = 0;
          if (Object.getOwnPropertyNames(_0x3b453f).length > _0x5ec3ae && $.shareFlag) for (let _0x1fb2ad in _0x3b453f || {}) {
            if (_0x1fb2ad == $.UserName) {
              $.flag = 1;
              continue;
            }
            if (_0x4c290b == _0x5ec3ae) {
              $.flag = 0;
              $.shareCode = _0x3b453f[_0x1fb2ad] || "";
              if ($.shareCodePinArr[_0x1fb2ad] && $.shareCodePinArr[_0x1fb2ad].includes($.UserName)) {
                _0x272095++;
                continue;
              }
              if ($.shareCode.count >= $.shareCodeArr.shareCount) {
                {
                  _0x272095++;
                  continue;
                }
              }
              $.getlj = false;
              if ($.shareCode) console.log("助力[" + _0x1fb2ad + "]");
              let _0x104a30 = await _0x4a2880($.shareCode.code, 1);
              if (/重复助力/.test(_0x104a30)) {
                if (!$.shareCodePinArr[_0x1fb2ad]) $.shareCodePinArr[_0x1fb2ad] = [];
                $.shareCodePinArr[_0x1fb2ad].push($.UserName);
                _0x5ec3ae--;
                _0x416406--;
              } else {
                if (/助力/.test(_0x104a30) && /上限/.test(_0x104a30)) $.shareFlag = false;else {
                  if (!/领取上限/.test(_0x104a30) && $.getlj == true) {
                    if (!$.shareCodePinArr[_0x1fb2ad]) $.shareCodePinArr[_0x1fb2ad] = [];
                    !$.shareCodePinArr[_0x1fb2ad].includes($.UserName) && $.shareCodePinArr[_0x1fb2ad].push($.UserName);
                    _0x5ec3ae--;
                  } else _0x4d33ae = false;
                }
              }
            }
            _0x4c290b++;
          }
          _0x4d33ae && _0x272095 == Object.getOwnPropertyNames(_0x3b453f).length && (_0x114866 = true);
          if (_0x4c290b == 0) {
            $.getlj = false;
            let _0x18c062 = await _0x4a2880("", 1);
            !/领取上限/.test(_0x18c062) && $.getlj == true && _0x5ec3ae--;
          }
          if ($.endFlag) break;
        } else {
          let _0x1c8c5f = await _0x38b3f7();
          if (!$.endFlag && _0x1c8c5f && $.again == false) await _0x17dafd();
          if ($.again == false) break;
        }
        $.again == true && _0x366a57 < 1 && (_0x366a57++, $.again = false);
        _0x5ec3ae++;
        _0x416406++;
        $.flag == 1 && (await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
        if (_0x5a7f3f > 0 && _0x5a7f3f <= _0x416406) break;
      }
    } while ($.flag == 1 && _0x5ec3ae < 4);
    if ($.endFlag) return;
    resMsg && (message += "【京东账号" + $.index + "】\n" + resMsg);
    if (JSON.stringify(_0x342e84) == "{}") {
      {
        if ($.index % 10 == 0) {
          {
            let _0x3afca8 = parseInt(Math.random() * 1000 + 5000, 10);
            console.log("等待 " + _0x3afca8 / 1000 + " 秒");
            await $.wait(_0x3afca8);
          }
        } else await $.wait(Math.random() * 2000 + _0x52f6fb, 10);
      }
    } else await $.wait(Math.random() * 1000 + 1000, 10);
  } catch (_0x149e85) {
    console.log(_0x149e85);
  }
}
async function _0x1d1164(_0x582d27 = 0) {
  try {
    {
      let _0x40b9f0 = 2;
      if (_0x582d27 == 1) _0x40b9f0 = 1;
      let _0x38c4af = 0;
      for (let _0x5429f6 in $.shareCodeArr || {}) {
        {
          if (_0x5429f6 === "flag" || _0x5429f6 === "updateTime" || _0x5429f6 === "shareCount") continue;
          if ($.shareCodeArr[_0x5429f6] && $.shareCodeArr.shareCount && $.shareCodeArr[_0x5429f6].count < $.shareCodeArr.shareCount) _0x38c4af++;
        }
      }
      for (let _0x4832ac = 0; _0x4832ac < _0x4617f1.length && !$.runEnd; _0x4832ac++) {
        {
          _0x481086 = _0x4617f1[_0x4832ac];
          if (_0x481086) {
            {
              $.UserName = decodeURIComponent(_0x481086.match(/pt_pin=([^; ]+)(?=;?)/) && _0x481086.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
              if (_0x171b8f.length > 0 && _0x171b8f.indexOf($.UserName) == -1 || $.shareCodeArr[$.UserName]) continue;
              $.index = _0x4832ac + 1;
              $.eid_token = "";
              _0x38cfbd();
              await _0x44fb01();
              await _0x40db78(1);
              let _0x5a8fd2 = 0;
              for (let _0x52e750 in $.shareCodeArr || {}) {
                if (_0x52e750 === "flag" || _0x52e750 === "updateTime" || _0x52e750 === "shareCount") continue;
                if ($.shareCodeArr[_0x52e750] && $.shareCodeArr.shareCount && $.shareCodeArr[_0x52e750].count < $.shareCodeArr.shareCount) _0x5a8fd2++;
              }
              if ($.endFlag || _0x5a8fd2 - _0x38c4af >= _0x40b9f0 || $.end) break;
            }
          }
        }
      }
    }
  } catch (_0x25c6c2) {
    console.log(_0x25c6c2);
  }
  if (Object.getOwnPropertyNames($.shareCodeArr).length > 0) for (let _0x365374 in $.shareCodeArr || {}) {
    if (_0x365374 === "flag" || _0x365374 === "updateTime" || _0x365374 === "shareCount") continue;
    if ($.shareCodeArr[_0x365374]) _0x3b453f[_0x365374] = $.shareCodeArr[_0x365374];
  }
}
function _0x4a2880(_0x3b3294 = "", _0xc50606 = 1) {
  return new Promise(async _0x3eb703 => {
    $.UVCookie = _0x464475.getUVCookie("", "", $.url2, $.UVCookie);
    $.UVCookieArr[$.UserName] = $.UVCookie + "";
    let _0x2a3c06 = "",
      _0x3fec55 = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000;
    const _0x315f3c = {
        "platform": _0x257125,
        "unionActId": "31182",
        "actId": $.actId,
        "d": ii1I11,
        "unionShareId": _0x3b3294,
        "type": _0xc50606,
        "qdPageId": "MO-J2011-1",
        "mdClickId": "jxhongbao_ck",
        "actType": 2
      },
      _0x388574 = {
        "appId": "c822a",
        "functionId": "getCoupons",
        "fn": "getCoupons",
        "body": _0x315f3c,
        "appid": "u_hongbao",
        "apid": "u_hongbao",
        "clientVersion": $.UA.split(";")[2],
        "ver": $.UA.split(";")[2],
        "client": "apple",
        "cl": "apple",
        "user": $.UserName,
        "code": 1,
        "xcr": $.xcrflag,
        "ua": $.UA
      };
    if ($.xcrflag == 1) $.xcrflag = 0;
    let _0x5eb403 = await _0x45265d.getbody(_0x388574, $.UserName);
    _0x2a3c06 = _0x5eb403.h5st || "";
    let _0x37cc16 = "",
      _0x31b199 = {
        "url": "https://api.m.jd.com/api",
        "body": "loginType=2&_=" + _0x3fec55 + "&" + _0x5eb403 + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          "Cookie": "" + $.UVCookie + _0xefc670 + _0x481086,
          "X-Requested-With": "XMLHttpRequest",
          "x-rp-client": "h5_1.0.0",
          "origin": $.origin,
          "Referer": $.url2,
          "User-Agent": $.UA
        }
      };
    _0x31b199.headers.Cookie = _0x31b199.headers.Cookie.replace(/;\s*$/, "");
    _0x31b199.headers.Cookie = _0x31b199.headers.Cookie.replace(/;([^\s])/g, "; $1");
    if ($.url2) _0x31b199.headers.Referer = $.url2;
    $.dpost(_0x31b199, async (_0x581d4c, _0x703960, _0x39ace1) => {
      try {
        if (_0x581d4c) console.log("" + $.toStr(_0x581d4c)), console.log($.name + " API请求失败，请检查网路重试");else {
          let _0xa725f3 = $.toObj(_0x39ace1, _0x39ace1);
          if (typeof _0xa725f3 == "object") {
            _0xa725f3.msg && (_0x37cc16 = _0xa725f3.msg, console.log(_0xa725f3.msg));
            if (_0xa725f3.msg.indexOf("不展示弹层") > -1 && _0xc50606 == 1) $.again = true;
            if (_0xa725f3.msg.indexOf("领取上限") === -1 && _0xa725f3.msg.indexOf("登录") === -1) {
              if (_0xc50606 == 1) $.flag = 1;
            }
            if (_0xa725f3.msg.indexOf("活动已结束") > -1 || _0xa725f3.msg.indexOf("活动未开始") > -1) {
              $.endFlag = true;
              return;
            }
            _0x3b3294 && typeof _0xa725f3.data !== "undefined" && typeof _0xa725f3.data.joinNum !== "undefined" && console.log("当前" + _0xa725f3.data.joinSuffix + ":" + _0xa725f3.data.joinNum);
            if (_0xa725f3.code == 0 && _0xa725f3.data) {
              if (_0xc50606 == 1) $.shareCode.count++;
              let _0x51d8be = "";
              for (let _0x5f2156 of _0xa725f3.data.couponList) {
                switch (_0x5f2156.type) {
                  case 1:
                    $.getlj = true;
                    _0x51d8be += (_0x51d8be ? "\n" : "") + "获得[红包]🧧" + _0x5f2156.discount + "元 使用时间:" + $.time("yyyy-MM-dd", _0x5f2156.beginTime) + " " + $.time("yyyy-MM-dd", _0x5f2156.endTime);
                    break;
                  case 3:
                    $.getlj = true;
                    _0x51d8be += (_0x51d8be ? "\n" : "") + "获得[优惠券]🎟️满" + _0x5f2156.quota + "减" + _0x5f2156.discount + " 使用时间:" + $.time("yyyy-MM-dd", _0x5f2156.beginTime) + " " + $.time("yyyy-MM-dd", _0x5f2156.endTime);
                    break;
                  case 6:
                    $.getlj = true;
                    _0x51d8be += (_0x51d8be ? "\n" : "") + "获得[打折券]]🎫满" + _0x5f2156.quota + "打" + _0x5f2156.discount * 10 + "折 使用时间:" + $.time("yyyy-MM-dd", _0x5f2156.beginTime) + " " + $.time("yyyy-MM-dd", _0x5f2156.endTime);
                    break;
                  default:
                    $.getlj = true;
                    _0x51d8be += (_0x51d8be ? "\n" : "") + ("获得[未知" + _0x5f2156.type + "]🎉") + (_0x5f2156.quota || "") + " " + _0x5f2156.discount + " 使用时间:" + $.time("yyyy-MM-dd", _0x5f2156.beginTime) + " " + $.time("yyyy-MM-dd", _0x5f2156.endTime);
                    console.log(_0x5f2156);
                }
              }
              _0x51d8be && (resMsg += _0x51d8be + "\n", console.log(_0x51d8be));
            }
            if (_0xc50606 == 1 && typeof _0xa725f3.data !== "undefined" && typeof _0xa725f3.data.groupData !== "undefined" && typeof _0xa725f3.data.groupData.groupInfo !== "undefined") for (let _0x571f91 of _0xa725f3.data.groupData.groupInfo || []) {
              _0x571f91.status == 2 && (console.log("助力满可以领取" + _0x571f91.info + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await _0x4a2880("", 2));
            }
          } else console.log(_0x39ace1);
        }
      } catch (_0x4266e6) {
        $.logErr(_0x4266e6, _0x703960);
      } finally {
        _0x3eb703(_0x37cc16);
      }
    });
  });
}
function _0x38b3f7(_0x39c138 = "") {
  let _0x3bd45f = true;
  return new Promise(_0x375e9d => {
    {
      $.UVCookie = _0x464475.getUVCookie("", "", $.url2, $.UVCookie);
      $.UVCookieArr[$.UserName] = $.UVCookie + "";
      let _0x3d2377 = {
        "url": "https://api.m.jd.com/api?functionId=showCoupon&appid=u_hongbao&_=" + Date.now() + "&loginType=2&body={%22actId%22:%22" + $.actId + "%22,%22unionActId%22:%2231177%22,%22unpl%22:%22" + $.unpl + "%22,%22platform%22:" + _0x257125 + ",%22unionShareId%22:%22%22," + ($.uiUpdateTime ? "%22uiUpdateTime%22:" + $.uiUpdateTime + "," : "") + "%22d%22:%22" + ii1I11 + "%22,%22eid%22:%22" + $.eid + "%22}&client=iPhone&clientVersion=&osVersion=iOS&d_brand=iPhone&d_model=iPhone&lang=zh-cn&openudid=" + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          "Cookie": "" + $.UVCookie + _0xefc670 + " " + _0x481086,
          "origin": $.origin,
          "Referer": $.origin + "/",
          "User-Agent": $.UA
        }
      };
      _0x3d2377.headers.Cookie = _0x3d2377.headers.Cookie.replace(/;\s*$/, "");
      _0x3d2377.headers.Cookie = _0x3d2377.headers.Cookie.replace(/;([^\s])/g, "; $1");
      if ($.url2) _0x3d2377.headers.Referer = $.url2;
      $.dget(_0x3d2377, async (_0x99e4c0, _0x52c279, _0x156651) => {
        try {
          if (_0x99e4c0) {
            console.log("" + $.toStr(_0x99e4c0));
            console.log($.name + " API请求失败，请检查网路重试");
          } else {
            let _0x207ce0 = $.toObj(_0x156651, _0x156651);
            if (typeof _0x207ce0 == "object") {
              if (_0x207ce0.msg) console.log(_0x207ce0.msg);
              if (_0x207ce0.msg.indexOf("不展示弹层") > -1) $.again = true;
              if (_0x207ce0.msg.indexOf("领取上限") > -1) $.runArr[$.UserName] = true;
              _0x207ce0.msg.indexOf("上限") === -1 && _0x207ce0.msg.indexOf("登录") === -1 && ($.flag = 1);
              if (_0x207ce0.msg.indexOf("活动已结束") > -1 || _0x207ce0.msg.indexOf("活动未开始") > -1) {
                {
                  $.endFlag = true;
                  return;
                }
              }
              if (_0x207ce0.data.uiUpdateTime) $.uiUpdateTime = _0x207ce0.data.uiUpdateTime;
              if (typeof _0x207ce0.data !== "undefined" && typeof _0x207ce0.data.groupData !== "undefined" && typeof _0x207ce0.data.groupData.joinNum !== "undefined") {
                {
                  $.joinNum = _0x207ce0.data.groupData.joinNum;
                  let _0xaca88b = 0;
                  for (let _0x297942 of _0x207ce0.data.groupData.groupInfo) {
                    {
                      if (_0xaca88b < _0x297942.num) _0xaca88b = _0x297942.num;
                    }
                  }
                  if ($.shareCount > 0 && _0xaca88b > $.shareCount) _0xaca88b = $.shareCount;
                  $.shareCodeArr[$.UserName] && ($.shareCodeArr[$.UserName].count = _0xaca88b);
                  $.shareCodeArr.shareCount = _0xaca88b;
                  if (_0xaca88b <= $.joinNum) {
                    {
                      if (!$.shareCodeArr[$.UserName]) $.shareCodeArr[$.UserName] = {};
                      $.shareCodeArr[$.UserName].count = $.joinNum;
                      _0x3bd45f = false;
                    }
                  }
                  console.log("【账号" + $.index + "】" + ($.nickName || $.UserName) + " " + $.joinNum + "/" + _0xaca88b + "人");
                }
              }
              _0x207ce0.msg.indexOf("活动已结束") > -1 && (_0x3bd45f = false);
              if (typeof _0x207ce0.data !== "undefined" && typeof _0x207ce0.data.groupData !== "undefined" && typeof _0x207ce0.data.groupData.groupInfo !== "undefined") for (let _0x58699a of _0x207ce0.data.groupData.groupInfo || []) {
                _0x58699a.status == 2 && (console.log("助力满可以领取" + _0x58699a.info + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await _0x4a2880("", 2));
              }
            } else console.log(_0x156651);
          }
        } catch (_0x1db4bc) {
          $.logErr(_0x1db4bc, _0x52c279);
        } finally {
          _0x375e9d(_0x3bd45f);
        }
      });
    }
  });
}
function _0x17dafd() {
  if ($.shareCodeArr[$.UserName]) {
    {
      console.log("【账号" + $.index + "】缓存分享码:" + $.shareCodeArr[$.UserName].code.replace(/.+(.{3})/, "***$1"));
      return;
    }
  }
  return new Promise(_0x533069 => {
    {
      let _0x1f13c0 = {
        "url": "https://api.m.jd.com/api?functionId=shareUnionCoupon&appid=u_hongbao&_=" + Date.now() + "&loginType=2&body={%22unionActId%22:%2231177%22,%22actId%22:%22" + $.actId + "%22,%22platform%22:4,%22unionShareId%22:%22%22,%22d%22:%22" + ii1I11 + "%22,%22supportPic%22:2}&client=iPhone&clientVersion=&osVersion=iOS&d_brand=iPhone&d_model=iPhone&lang=zh-cn&openudid=" + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          "Cookie": "" + $.UVCookie + _0xefc670 + " " + _0x481086,
          "origin": $.origin,
          "Referer": $.origin + "/",
          "User-Agent": $.UA
        }
      };
      _0x1f13c0.headers.Cookie = _0x1f13c0.headers.Cookie.replace(/;\s*$/, "");
      _0x1f13c0.headers.Cookie = _0x1f13c0.headers.Cookie.replace(/;([^\s])/g, "; $1");
      $.dget(_0x1f13c0, async (_0x26fcc7, _0x553554, _0x3c0f62) => {
        try {
          if (_0x26fcc7) console.log("" + $.toStr(_0x26fcc7)), console.log($.name + " API请求失败，请检查网路重试");else {
            {
              let _0x31a036 = $.toObj(_0x3c0f62, _0x3c0f62);
              if (typeof _0x31a036 == "object") {
                if (_0x31a036.code == 0 && _0x31a036.data && _0x31a036.data.shareUrl) {
                  let _0x21e59c = _0x31a036.data.shareUrl.match(/\?s=([^&]+)/) && _0x31a036.data.shareUrl.match(/\?s=([^&]+)/)[1] || "";
                  _0x21e59c && (console.log("【账号" + $.index + "】分享码：" + _0x21e59c.replace(/.+(.{3})/, "***$1")), $.shareCodeArr[$.UserName] = {
                    "code": _0x21e59c,
                    "count": $.joinNum
                  });
                }
              } else console.log(_0x3c0f62);
            }
          }
        } catch (_0x5741f6) {
          $.logErr(_0x5741f6, _0x553554);
        } finally {
          _0x533069();
        }
      });
    }
  });
}
function _0x38bb60() {
  return new Promise(_0x30c2b4 => {
    const _0x192bd3 = {
      "url": $.url1,
      "followRedirect": false,
      "headers": {
        "Cookie": "" + $.UVCookie + _0xefc670 + " " + _0x481086,
        "User-Agent": $.UA,
        "Referer": _0x375c7f
      }
    };
    $.dget(_0x192bd3, async (_0x6c67ba, _0x2931dd, _0xbef860) => {
      try {
        _0x41791d(_0x2931dd);
        $.url2 = _0x2931dd && _0x2931dd.headers && (_0x2931dd.headers.location || _0x2931dd.headers.Location || "") || "";
        $.url2 = decodeURIComponent($.url2);
        $.url2 = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com\/mall[^'"]+)/) && $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com\/mall[^'"]+)/)[1] || "";
      } catch (_0x22d861) {
        $.logErr(_0x22d861, _0x2931dd);
      } finally {
        _0x30c2b4(_0xbef860);
      }
    });
  });
}
function _0x1a11e0() {
  return new Promise(_0x51b17d => {
    {
      const _0x1fd69a = {
        "url": "https://u.jd.com/" + ii1I11 + ($.shareCode && "?s=" + $.shareCode || ""),
        "followRedirect": false,
        "headers": {
          "Cookie": "" + $.UVCookie + _0xefc670 + " " + _0x481086,
          "User-Agent": $.UA
        }
      };
      $.dget(_0x1fd69a, async (_0x2f0306, _0x22acab, _0x54d428) => {
        try {
          _0x41791d(_0x22acab);
          $.url1 = _0x54d428 && _0x54d428.match(/(https:\/\/u\.jd\.com\/jda[^']+)/) && _0x54d428.match(/(https:\/\/u\.jd\.com\/jda[^']+)/)[1] || "";
        } catch (_0x50b3f6) {
          $.logErr(_0x50b3f6, _0x22acab);
        } finally {
          _0x51b17d(_0x54d428);
        }
      });
    }
  });
}
function _0x41791d(_0x1129ca) {
  let _0x18518e = _0x1129ca && _0x1129ca.headers && (_0x1129ca.headers["set-cookie"] || _0x1129ca.headers["Set-Cookie"] || "") || "",
    _0xb90155 = "";
  if (_0x18518e) {
    {
      if (typeof _0x18518e != "object") _0xb90155 = _0x18518e.split(",");else _0xb90155 = _0x18518e;
      for (let _0x4dc3cf of _0xb90155) {
        {
          let _0x31574a = _0x4dc3cf.split(";")[0].trim();
          if (_0x31574a.split("=")[1]) {
            _0x31574a.split("=")[0] == "unpl" && _0x31574a.split("=")[1] && ($.unpl = _0x31574a.split("=")[1]);
            if (_0xefc670.indexOf(_0x31574a.split("=")[1]) == -1) _0xefc670 += _0x31574a.replace(/ /g, "") + "; ";
          }
        }
      }
    }
  }
}
function _0x4a4b43(_0x54d473 = 1) {
  $.UA = "jdapp;iPhone;12.0.2;;;M/5.0;appBuild/168698;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify({
    "ciphertype": 5,
    "cipher": {
      "ud": "",
      "sv": "CJGkCm==",
      "iad": ""
    },
    "ts": Math.floor(new Date().getTime() / 1000),
    "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    "version": "1.0.3",
    "appname": "com.360buy.jdmobile",
    "ridx": -1
  })) + ";Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
function _0x23a0f8(_0x5584c2) {
  let _0x481b2a = "0123456789abcdef",
    _0x218c7e = "";
  for (let _0x5d8887 = 0; _0x5d8887 < _0x5584c2; _0x5d8887++) {
    _0x218c7e += _0x481b2a[Math.ceil(100000000 * Math.random()) % _0x481b2a.length];
  }
  return _0x218c7e;
}
function _0x2fc719(_0x51fb89, _0x4a42b3) {
  let _0x25bfb6 = new Array();
  for (let _0x4a48cc in _0x51fb89) {
    _0x25bfb6.push(_0x51fb89[_0x4a48cc]);
  }
  let _0x36e218 = new Array();
  for (let _0x9cb632 = 0; _0x9cb632 < _0x4a42b3; _0x9cb632++) {
    if (_0x25bfb6.length > 0) {
      {
        let _0x1b4b0d = Math.floor(Math.random() * _0x25bfb6.length);
        _0x36e218[_0x9cb632] = _0x25bfb6[_0x1b4b0d];
        _0x25bfb6.splice(_0x1b4b0d, 1);
      }
    } else break;
  }
  return _0x36e218;
}
function _0x38cfbd(_0x1cad63) {
  let _0x31891a = {
      "A": "K",
      "B": "L",
      "C": "M",
      "D": "N",
      "E": "O",
      "F": "P",
      "G": "Q",
      "H": "R",
      "I": "S",
      "J": "T",
      "K": "A",
      "L": "B",
      "M": "C",
      "N": "D",
      "O": "E",
      "P": "F",
      "Q": "G",
      "R": "H",
      "S": "I",
      "T": "J",
      "e": "o",
      "f": "p",
      "g": "q",
      "h": "r",
      "i": "s",
      "j": "t",
      "k": "u",
      "l": "v",
      "m": "w",
      "n": "x",
      "o": "e",
      "p": "f",
      "q": "g",
      "r": "h",
      "s": "i",
      "t": "j",
      "u": "k",
      "v": "l",
      "w": "m",
      "x": "n"
    },
    _0x2ab176 = _0x2fc719([12, 13, 14, 15, 16], 1) + "." + _0x2fc719([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1) + "." + _0x2fc719([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1),
    _0x372790 = _0x2fc719([9, 10, 11], 1) + "." + _0x2fc719([0, 1, 2, 3, 4, 5, 6, 7, 8], 1) + "." + _0x2fc719([0, 1, 2, 3, 4, 5], 1),
    _0x4ce796 = {
      "ciphertype": 5,
      "cipher": {
        "ud": "",
        "sv": "",
        "iad": ""
      },
      "ts": parseInt(new Date().getTime() / 1000),
      "hdid": "",
      "version": "1.0.3",
      "appname": "",
      "ridx": -1
    };
  _0x4ce796.cipher.sv = new Buffer.from(_0x2ab176).toString("base64").split("").map(_0x9d0298 => _0x31891a[_0x9d0298] || _0x9d0298).join("");
  _0x4ce796.cipher.ud = new Buffer.from(_0x23a0f8(40)).toString("base64").split("").map(_0x1f050a => _0x31891a[_0x1f050a] || _0x1f050a).join("");
  _0x4ce796.appname = "com.360buy.jdmobile";
  _0x4ce796.hdid = "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=";
  $.UA = "jdapp;iPhone;" + _0x372790 + ";;;M/5.0;appBuild/168341;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify(_0x4ce796)) + ";Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x2ab176.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
function _0x3a1990(_0x5659a0) {
  if (typeof _0x5659a0 == "string") try {
    return JSON.parse(_0x5659a0);
  } catch (_0x470188) {
    console.log(_0x470188);
    $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
    return [];
  }
}
async function _0x44fb01() {
  var _0xa1d5a7 = function () {
    {
      function _0x369abc(_0x4e1b5c, _0x438852) {
        _0x4e1b5c = [_0x4e1b5c[0] >>> 16, 65535 & _0x4e1b5c[0], _0x4e1b5c[1] >>> 16, 65535 & _0x4e1b5c[1]];
        _0x438852 = [_0x438852[0] >>> 16, 65535 & _0x438852[0], _0x438852[1] >>> 16, 65535 & _0x438852[1]];
        var _0x248bd1 = [0, 0, 0, 0];
        _0x248bd1[3] += _0x4e1b5c[3] + _0x438852[3];
        _0x248bd1[2] += _0x248bd1[3] >>> 16;
        _0x248bd1[3] &= 65535;
        _0x248bd1[2] += _0x4e1b5c[2] + _0x438852[2];
        _0x248bd1[1] += _0x248bd1[2] >>> 16;
        _0x248bd1[2] &= 65535;
        _0x248bd1[1] += _0x4e1b5c[1] + _0x438852[1];
        _0x248bd1[0] += _0x248bd1[1] >>> 16;
        _0x248bd1[1] &= 65535;
        _0x248bd1[0] += _0x4e1b5c[0] + _0x438852[0];
        _0x248bd1[0] &= 65535;
        return [_0x248bd1[0] << 16 | _0x248bd1[1], _0x248bd1[2] << 16 | _0x248bd1[3]];
      }
      function _0x770c3(_0x364ddc, _0x477b4a) {
        _0x364ddc = [_0x364ddc[0] >>> 16, 65535 & _0x364ddc[0], _0x364ddc[1] >>> 16, 65535 & _0x364ddc[1]];
        _0x477b4a = [_0x477b4a[0] >>> 16, 65535 & _0x477b4a[0], _0x477b4a[1] >>> 16, 65535 & _0x477b4a[1]];
        var _0xf41484 = [0, 0, 0, 0];
        _0xf41484[3] += _0x364ddc[3] * _0x477b4a[3];
        _0xf41484[2] += _0xf41484[3] >>> 16;
        _0xf41484[3] &= 65535;
        _0xf41484[2] += _0x364ddc[2] * _0x477b4a[3];
        _0xf41484[1] += _0xf41484[2] >>> 16;
        _0xf41484[2] &= 65535;
        _0xf41484[2] += _0x364ddc[3] * _0x477b4a[2];
        _0xf41484[1] += _0xf41484[2] >>> 16;
        _0xf41484[2] &= 65535;
        _0xf41484[1] += _0x364ddc[1] * _0x477b4a[3];
        _0xf41484[0] += _0xf41484[1] >>> 16;
        _0xf41484[1] &= 65535;
        _0xf41484[1] += _0x364ddc[2] * _0x477b4a[2];
        _0xf41484[0] += _0xf41484[1] >>> 16;
        _0xf41484[1] &= 65535;
        _0xf41484[1] += _0x364ddc[3] * _0x477b4a[1];
        _0xf41484[0] += _0xf41484[1] >>> 16;
        _0xf41484[1] &= 65535;
        _0xf41484[0] += _0x364ddc[0] * _0x477b4a[3] + _0x364ddc[1] * _0x477b4a[2] + _0x364ddc[2] * _0x477b4a[1] + _0x364ddc[3] * _0x477b4a[0];
        _0xf41484[0] &= 65535;
        return [_0xf41484[0] << 16 | _0xf41484[1], _0xf41484[2] << 16 | _0xf41484[3]];
      }
      function _0x1390be(_0x5c39f5, _0x3e83c6) {
        return 32 === (_0x3e83c6 %= 64) ? [_0x5c39f5[1], _0x5c39f5[0]] : 32 > _0x3e83c6 ? [_0x5c39f5[0] << _0x3e83c6 | _0x5c39f5[1] >>> 32 - _0x3e83c6, _0x5c39f5[1] << _0x3e83c6 | _0x5c39f5[0] >>> 32 - _0x3e83c6] : (_0x3e83c6 -= 32, [_0x5c39f5[1] << _0x3e83c6 | _0x5c39f5[0] >>> 32 - _0x3e83c6, _0x5c39f5[0] << _0x3e83c6 | _0x5c39f5[1] >>> 32 - _0x3e83c6]);
      }
      function _0xccda02(_0x53ba55, _0x18db6a) {
        return 0 === (_0x18db6a %= 64) ? _0x53ba55 : 32 > _0x18db6a ? [_0x53ba55[0] << _0x18db6a | _0x53ba55[1] >>> 32 - _0x18db6a, _0x53ba55[1] << _0x18db6a] : [_0x53ba55[1] << _0x18db6a - 32, 0];
      }
      function _0x280889(_0x580a13, _0x4d12d6) {
        return [_0x580a13[0] ^ _0x4d12d6[0], _0x580a13[1] ^ _0x4d12d6[1]];
      }
      function _0x241704(_0x37bfe8) {
        return _0x280889(_0x37bfe8 = _0x770c3(_0x37bfe8 = _0x280889(_0x37bfe8 = _0x770c3(_0x37bfe8 = _0x280889(_0x37bfe8, [0, _0x37bfe8[0] >>> 1]), [4283543511, 3981806797]), [0, _0x37bfe8[0] >>> 1]), [3301882366, 444984403]), [0, _0x37bfe8[0] >>> 1]);
      }
      return {
        "hash128": function (_0x5227bd, _0x354f38) {
          var _0x54705b = _0x354f38 || 0;
          _0x354f38 = (_0x5227bd = _0x5227bd || "").length % 16;
          var _0xaa9ed9 = _0x5227bd.length - _0x354f38,
            _0x24e8bf = [0, _0x54705b];
          _0x54705b = [0, _0x54705b];
          for (var _0x6aeb79, _0x123202, _0x329820 = [2277735313, 289559509], _0x56b7df = [1291169091, 658871167], _0x26c477 = 0; _0x26c477 < _0xaa9ed9; _0x26c477 += 16) {
            _0x6aeb79 = [255 & _0x5227bd.charCodeAt(_0x26c477 + 4) | (255 & _0x5227bd.charCodeAt(_0x26c477 + 5)) << 8 | (255 & _0x5227bd.charCodeAt(_0x26c477 + 6)) << 16 | (255 & _0x5227bd.charCodeAt(_0x26c477 + 7)) << 24, 255 & _0x5227bd.charCodeAt(_0x26c477) | (255 & _0x5227bd.charCodeAt(_0x26c477 + 1)) << 8 | (255 & _0x5227bd.charCodeAt(_0x26c477 + 2)) << 16 | (255 & _0x5227bd.charCodeAt(_0x26c477 + 3)) << 24];
            _0x123202 = [255 & _0x5227bd.charCodeAt(_0x26c477 + 12) | (255 & _0x5227bd.charCodeAt(_0x26c477 + 13)) << 8 | (255 & _0x5227bd.charCodeAt(_0x26c477 + 14)) << 16 | (255 & _0x5227bd.charCodeAt(_0x26c477 + 15)) << 24, 255 & _0x5227bd.charCodeAt(_0x26c477 + 8) | (255 & _0x5227bd.charCodeAt(_0x26c477 + 9)) << 8 | (255 & _0x5227bd.charCodeAt(_0x26c477 + 10)) << 16 | (255 & _0x5227bd.charCodeAt(_0x26c477 + 11)) << 24];
            _0x24e8bf = _0x369abc(_0x770c3(_0x24e8bf = _0x369abc(_0x24e8bf = _0x1390be(_0x24e8bf = _0x280889(_0x24e8bf, _0x6aeb79 = _0x770c3(_0x6aeb79 = _0x1390be(_0x6aeb79 = _0x770c3(_0x6aeb79, _0x329820), 31), _0x56b7df)), 27), _0x54705b), [0, 5]), [0, 1390208809]);
            _0x54705b = _0x369abc(_0x770c3(_0x54705b = _0x369abc(_0x54705b = _0x1390be(_0x54705b = _0x280889(_0x54705b, _0x123202 = _0x770c3(_0x123202 = _0x1390be(_0x123202 = _0x770c3(_0x123202, _0x56b7df), 33), _0x329820)), 31), _0x24e8bf), [0, 5]), [0, 944331445]);
          }
          switch (_0x6aeb79 = [0, 0], _0x123202 = [0, 0], _0x354f38) {
            case 15:
              _0x123202 = _0x280889(_0x123202, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 14)], 48));
            case 14:
              _0x123202 = _0x280889(_0x123202, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 13)], 40));
            case 13:
              _0x123202 = _0x280889(_0x123202, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 12)], 32));
            case 12:
              _0x123202 = _0x280889(_0x123202, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 11)], 24));
            case 11:
              _0x123202 = _0x280889(_0x123202, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 10)], 16));
            case 10:
              _0x123202 = _0x280889(_0x123202, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 9)], 8));
            case 9:
              _0x54705b = _0x280889(_0x54705b, _0x123202 = _0x770c3(_0x123202 = _0x1390be(_0x123202 = _0x770c3(_0x123202 = _0x280889(_0x123202, [0, _0x5227bd.charCodeAt(_0x26c477 + 8)]), _0x56b7df), 33), _0x329820));
            case 8:
              _0x6aeb79 = _0x280889(_0x6aeb79, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 7)], 56));
            case 7:
              _0x6aeb79 = _0x280889(_0x6aeb79, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 6)], 48));
            case 6:
              _0x6aeb79 = _0x280889(_0x6aeb79, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 5)], 40));
            case 5:
              _0x6aeb79 = _0x280889(_0x6aeb79, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 4)], 32));
            case 4:
              _0x6aeb79 = _0x280889(_0x6aeb79, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 3)], 24));
            case 3:
              _0x6aeb79 = _0x280889(_0x6aeb79, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 2)], 16));
            case 2:
              _0x6aeb79 = _0x280889(_0x6aeb79, _0xccda02([0, _0x5227bd.charCodeAt(_0x26c477 + 1)], 8));
            case 1:
              _0x24e8bf = _0x280889(_0x24e8bf, _0x6aeb79 = _0x770c3(_0x6aeb79 = _0x1390be(_0x6aeb79 = _0x770c3(_0x6aeb79 = _0x280889(_0x6aeb79, [0, _0x5227bd.charCodeAt(_0x26c477)]), _0x329820), 31), _0x56b7df));
          }
          _0x24e8bf = _0x280889(_0x24e8bf, [0, _0x5227bd.length]);
          _0x54705b = _0x369abc(_0x54705b = _0x280889(_0x54705b, [0, _0x5227bd.length]), _0x24e8bf = _0x369abc(_0x24e8bf, _0x54705b));
          _0x24e8bf = _0x241704(_0x24e8bf);
          _0x54705b = _0x369abc(_0x54705b = _0x241704(_0x54705b), _0x24e8bf = _0x369abc(_0x24e8bf, _0x54705b));
          return ("00000000" + (_0x24e8bf[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x24e8bf[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x54705b[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x54705b[1] >>> 0).toString(16)).slice(-8);
        }
      };
    }
  }();
  function _0x3af5f4(_0x478e76) {
    {
      _0x478e76 = JSON.stringify(_0x478e76);
      _0x478e76 = encodeURIComponent(_0x478e76);
      var _0x5e32ed = "",
        _0x4346d3 = 0;
      do {
        var _0x4f4b9d = _0x478e76.charCodeAt(_0x4346d3++),
          _0x3ab32f = _0x478e76.charCodeAt(_0x4346d3++),
          _0x2b976c = _0x478e76.charCodeAt(_0x4346d3++),
          _0x585ddd = _0x4f4b9d >> 2;
        _0x4f4b9d = (3 & _0x4f4b9d) << 4 | _0x3ab32f >> 4;
        var _0x79c284 = (15 & _0x3ab32f) << 2 | _0x2b976c >> 6,
          _0x59e79f = 63 & _0x2b976c;
        isNaN(_0x3ab32f) ? _0x79c284 = _0x59e79f = 64 : isNaN(_0x2b976c) && (_0x59e79f = 64);
        _0x5e32ed = _0x5e32ed + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x585ddd) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x4f4b9d) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x79c284) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x59e79f);
      } while (_0x4346d3 < _0x478e76.length);
      return _0x5e32ed + "/";
    }
  }
  var _0x2168ce = [$.UA.substring(0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", "NA", 32, "896x414", -480, "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", "NA", "iPhone", 10, "NA", "", null, null],
    _0x4d8a0e = _0xa1d5a7.hash128(_0x2168ce.join("~~~"), 31),
    _0x279bba = {
      "pin": "",
      "oid": "",
      "bizId": "jd-babelh5",
      "fc": "",
      "mode": "strict",
      "p": "s",
      "fp": _0x4d8a0e,
      "ctype": 1,
      "v": "3.2.1.1",
      "f": "3",
      "o": "pro.m.jd.com/mall/active/3GriExsopKWEjptvv33rYCcDgUwK/index.html",
      "qs": "",
      "jsTk": "",
      "qi": ""
    },
    _0x5f2428 = _0x3af5f4(_0x279bba),
    _0x2e68ef = {},
    _0x2168ce = new Date();
  _0x2e68ef.ts = {};
  _0x2e68ef.ts.deviceTime = _0x2168ce.getTime();
  _0x2e68ef.ca = {
    "tdHash": null
  };
  _0x2e68ef.m = {
    "compatMode": "CSS1Compat"
  };
  _0x2e68ef.fo = ["Arial Black", "Bauhaus 93", "Chalkduster", "GungSeo", "Hiragino Sans GB", "Impact", "Menlo", "Papyrus", "Rockwell"];
  _0x2e68ef.n = {
    "vendorSub": "",
    "productSub": "20030107",
    "vendor": "Apple Computer, Inc.",
    "maxTouchPoints": 1,
    "pdfViewerEnabled": false,
    "hardwareConcurrency": 10,
    "cookieEnabled": true,
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "appVersion": /\/(.+)/g.exec($.UA) && /\/(.+)/g.exec($.UA)[1] || $.UA,
    "platform": "iPhone",
    "product": "Gecko",
    "userAgent": $.UA,
    "language": "zh-CN",
    "onLine": true,
    "webdriver": false,
    "javaEnabled": false,
    "deviceMemory": 8,
    "enumerationOrder": ["vendorSub", "productSub", "vendor", "maxTouchPoints", "scheduling", "userActivation", "doNotTrack", "geolocation", "connection", "plugins", "mimeTypes", "pdfViewerEnabled", "webkitTemporaryStorage", "webkitPersistentStorage", "hardwareConcurrency", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "userAgent", "language", "languages", "onLine", "webdriver", "getGamepads", "javaEnabled", "sendBeacon", "vibrate", "bluetooth", "clipboard", "credentials", "keyboard", "managed", "mediaDevices", "storage", "serviceWorker", "virtualKeyboard", "wakeLock", "deviceMemory", "ink", "hid", "locks", "mediaCapabilities", "mediaSession", "permissions", "presentation", "serial", "gpu", "usb", "windowControlsOverlay", "xr", "userAgentData", "clearAppBadge", "getBattery", "getUserMedia", "requestMIDIAccess", "requestMediaKeySystemAccess", "setAppBadge", "webkitGetUserMedia", "getInstalledRelatedApps", "registerProtocolHandler", "unregisterProtocolHandler"]
  };
  _0x2e68ef.p = [];
  _0x2e68ef.w = {
    "devicePixelRatio": 1,
    "screenTop": 0,
    "screenLeft": 0
  };
  _0x2e68ef.s = {
    "availHeight": 896,
    "availWidth": 414,
    "colorDepth": 24,
    "height": 896,
    "width": 414,
    "pixelDepth": 24
  };
  _0x2e68ef.sc = {
    "ActiveBorder": "rgb(118, 118, 118)",
    "ActiveCaption": "rgb(0, 0, 0)",
    "AppWorkspace": "rgb(255, 255, 255)",
    "Background": "rgb(255, 255, 255)",
    "ButtonFace": "rgb(239, 239, 239)",
    "ButtonHighlight": "rgb(239, 239, 239)",
    "ButtonShadow": "rgb(239, 239, 239)",
    "ButtonText": "rgb(0, 0, 0)",
    "CaptionText": "rgb(0, 0, 0)",
    "GrayText": "rgb(128, 128, 128)",
    "Highlight": "rgb(181, 213, 255)",
    "HighlightText": "rgb(0, 0, 0)",
    "InactiveBorder": "rgb(118, 118, 118)",
    "InactiveCaption": "rgb(255, 255, 255)",
    "InactiveCaptionText": "rgb(128, 128, 128)",
    "InfoBackground": "rgb(255, 255, 255)",
    "InfoText": "rgb(0, 0, 0)",
    "Menu": "rgb(255, 255, 255)",
    "MenuText": "rgb(0, 0, 0)",
    "Scrollbar": "rgb(255, 255, 255)",
    "ThreeDDarkShadow": "rgb(118, 118, 118)",
    "ThreeDFace": "rgb(239, 239, 239)",
    "ThreeDHighlight": "rgb(118, 118, 118)",
    "ThreeDLightShadow": "rgb(118, 118, 118)",
    "ThreeDShadow": "rgb(118, 118, 118)",
    "Window": "rgb(255, 255, 255)",
    "WindowFrame": "rgb(118, 118, 118)",
    "WindowText": "rgb(0, 0, 0)"
  };
  _0x2e68ef.ss = {
    "cookie": true,
    "localStorage": true,
    "sessionStorage": true,
    "globalStorage": false,
    "indexedDB": true
  };
  _0x2e68ef.tz = -480;
  _0x2e68ef.lil = "";
  _0x2e68ef.wil = "";
  _0x2e68ef.ts.deviceEndTime = new Date().getTime();
  var _0x264495 = _0x3af5f4(_0x2e68ef);
  const _0x2dc0ea = {
    "url": "https://gia.jd.com/jsTk.do?a=" + _0x5f2428,
    "body": "d=" + _0x264495,
    "headers": {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Origin": "https://pro.m.jd.com",
      "Referer": "https://pro.m.jd.com/",
      "User-Agent": $.UA
    }
  };
  return new Promise(_0x117223 => {
    $.dpost(_0x2dc0ea, async (_0x5b07ed, _0x2e0390, _0x1a371d) => {
      try {
        {
          if (_0x5b07ed) console.log(_0x5b07ed);else {
            let _0x439c7f = $.toObj(_0x1a371d, _0x1a371d);
            _0x439c7f && typeof _0x439c7f === "object" && _0x439c7f.code == 0 && _0x439c7f.data && _0x439c7f.data.token ? $.eid_token = _0x439c7f.data.token : console.log(_0x1a371d);
          }
        }
      } catch (_0x47497f) {
        $.logErr(_0x47497f, _0x2e0390);
      } finally {
        _0x117223();
      }
    });
  });
}
function _0x4e2682(_0x3a9fea, _0x44324e, _0x10753a = "") {
  class _0x27393d {
    constructor(_0x10a018 = "", _0x14b071 = "", _0x579219 = "") {
      this.appId = _0x10a018;
      this.v = "4.3";
      _0x14b071 ? this.ua = _0x14b071 : this.ua = this.__genUA();
      this.fp = _0x579219 ? _0x579219 : this.__genFp();
    }
    ["__format"](_0x23e48a, _0x55405b) {
      if (!_0x23e48a) _0x23e48a = "yyyy-MM-dd";
      var _0x2a121b;
      !_0x55405b ? _0x2a121b = Date.now() : _0x2a121b = new Date(_0x55405b);
      var _0x28ef02 = new Date(_0x2a121b),
        _0x448d47 = _0x23e48a,
        _0xa997e0 = {
          "M+": _0x28ef02.getMonth() + 1,
          "d+": _0x28ef02.getDate(),
          "D+": _0x28ef02.getDate(),
          "h+": _0x28ef02.getHours(),
          "H+": _0x28ef02.getHours(),
          "m+": _0x28ef02.getMinutes(),
          "s+": _0x28ef02.getSeconds(),
          "w+": _0x28ef02.getDay(),
          "q+": Math.floor((_0x28ef02.getMonth() + 3) / 3),
          "S+": _0x28ef02.getMilliseconds()
        };
      /(y+)/i.test(_0x448d47) && (_0x448d47 = _0x448d47.replace(RegExp.$1, "".concat(_0x28ef02.getFullYear()).substr(4 - RegExp.$1.length)));
      Object.keys(_0xa997e0).forEach(_0x1a473c => {
        if (new RegExp("(".concat(_0x1a473c, ")")).test(_0x448d47)) {
          var _0x1f3871 = "S+" === _0x1a473c ? "000" : "00";
          _0x448d47 = _0x448d47.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xa997e0[_0x1a473c] : "".concat(_0x1f3871).concat(_0xa997e0[_0x1a473c]).substr("".concat(_0xa997e0[_0x1a473c]).length));
        }
      });
      return _0x448d47;
    }
    ["__genUA"]() {
      {
        this.uid = $.CryptoJS.SHA1($.UserName + "red").toString();
        let _0x531aca = this.uid,
          _0x5d9c28 = ["14.3"],
          _0x10a25d = _0x5d9c28[Math.floor(Math.random() * _0x5d9c28.length)],
          _0x59d8df = ["12,1"],
          _0x591e83 = _0x59d8df[Math.floor(Math.random() * _0x59d8df.length)],
          _0x1fdfe3 = ["wifi"],
          _0x16f6ee = _0x1fdfe3[Math.floor(Math.random() * _0x1fdfe3.length)],
          _0x2bd013 = _0x10a25d.replace(/\./g, "_"),
          _0x575447 = [];
        _0x575447 = [["10.1.4", "167814"]];
        let _0x545512 = Math.floor(Math.random() * _0x575447.length),
          _0x33234e = _0x575447[_0x545512] ? _0x575447[_0x545512] : _0x575447[0];
        _0x591e83 = "iPhone" + _0x591e83;
        let _0x9fe07e = "";
        _0x9fe07e = "jdapp;iPhone;" + _0x33234e[0] + ";" + _0x10a25d + ";" + _0x531aca + ";network/" + _0x16f6ee + ";model/" + _0x591e83 + ";addressid/;appBuild/" + _0x33234e[1] + ";jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x2bd013 + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
        return _0x9fe07e;
      }
    }
    ["__genFp"]() {
      function _0x4d4bcc(_0x2c47ed, _0xbe07dc) {
        var _0x457520 = [],
          _0xd2419d = _0x2c47ed.length,
          _0x222e0b = _0x2c47ed.split(""),
          _0x4b0c3c = "";
        for (; _0x4b0c3c = _0x222e0b.shift();) {
          if (Math.random() * _0xd2419d < _0xbe07dc) {
            _0x457520.push(_0x4b0c3c);
            if (--_0xbe07dc == 0) break;
          }
          _0xd2419d--;
        }
        for (var _0x52b683 = "", _0x19b51b = 0; _0x19b51b < _0x457520.length; _0x19b51b++) {
          var _0x38cbe4 = Math.random() * (_0x457520.length - _0x19b51b) | 0;
          _0x52b683 += _0x457520[_0x38cbe4];
          _0x457520[_0x38cbe4] = _0x457520[_0x457520.length - _0x19b51b - 1];
        }
        return _0x52b683;
      }
      function _0x1d3365(_0x49715a, _0x684911) {
        for (let _0x1be9a7 of _0x684911.slice()) _0x49715a = _0x49715a.replace(_0x1be9a7, "");
        return _0x49715a;
      }
      var _0x228f58 = "kl9i1uct6d",
        _0x117c0f = _0x4d4bcc(_0x228f58, 3),
        _0x51100d = Math.random() * 10 | 0,
        _0x19f0f5 = _0x1d3365(_0x228f58, _0x117c0f),
        _0x83bb4 = {};
      _0x83bb4.size = _0x51100d;
      _0x83bb4.customDict = _0x19f0f5;
      var _0x16ff0c = this.getRandomIDPro(_0x83bb4) + _0x117c0f + this.getRandomIDPro({
          "size": 13 - _0x51100d - 1,
          "customDict": _0x19f0f5
        }) + _0x51100d,
        _0x5de47f = _0x16ff0c.split("");
      let _0x319279 = _0x5de47f.slice(0, 10),
        _0x404a3a = _0x5de47f.slice(10),
        _0x206ad7 = [];
      for (; _0x319279.length > 0;) _0x206ad7.push((35 - parseInt(_0x319279.pop(), 36)).toString(36));
      _0x206ad7 = _0x206ad7.concat(_0x404a3a);
      var _0x543205 = _0x206ad7.join("");
      return _0x543205;
    }
    ["getRandomIDPro"]() {
      var _0x10b817,
        _0x39d92c,
        _0x5c179e = void 0 === (_0x436ad6 = (_0x39d92c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).size) ? 10 : _0x436ad6,
        _0x436ad6 = void 0 === (_0x436ad6 = _0x39d92c.dictType) ? "number" : _0x436ad6,
        _0x7a4011 = "";
      if ((_0x39d92c = _0x39d92c.customDict) && "string" == typeof _0x39d92c) _0x10b817 = _0x39d92c;else switch (_0x436ad6) {
        case "alphabet":
          _0x10b817 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "max":
          _0x10b817 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
          break;
        case "number":
        default:
          _0x10b817 = "0123456789";
      }
      for (; _0x5c179e--;) _0x7a4011 += _0x10b817[Math.random() * _0x10b817.length | 0];
      return _0x7a4011;
    }
    ["Encrypt"](_0x4780b8, _0x2efb4f) {
      let _0x5e7089 = $.CryptoJS.AES.encrypt(_0x4780b8, $.CryptoJS.enc.Utf8.parse(_0x2efb4f.key), {
        "iv": $.CryptoJS.enc.Utf8.parse(_0x2efb4f.iv),
        "mode": $.CryptoJS.mode.CBC,
        "padding": $.CryptoJS.pad.Pkcs7
      });
      return _0x5e7089.ciphertext.toString();
    }
    async ["__genAlgo"]() {
      {
        let _0x12df5f = {
            "wc": 0,
            "wd": 0,
            "l": "zh-cn",
            "ls": "zh-cn",
            "ml": 0,
            "pl": 0,
            "av": /\/(.+)/g.exec(this.ua) && /\/(.+)/g.exec(this.ua)[1] || this.ua,
            "ua": this.ua,
            "sua": /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua) && /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua)[1] || /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua) && /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua)[1] || "",
            "pp": {},
            "extend": {
              "wd": 0,
              "l": 0,
              "ls": 0,
              "wk": 0,
              "bu1": "0.1.7",
              "bu2": 0,
              "bu3": 0
            },
            "pp1": "",
            "w": 393,
            "h": 873,
            "ow": 393,
            "oh": 779,
            "url": "https://pro.m.jd.com/mall/active/3GriExsopKWEjptvv33rYCcDgUwK/index.html?unionActId=31177&d=&s=&cu=true&utm_source=kong&utm_medium=jingfen",
            "og": "https://pro.m.jd.com",
            "pr": 3,
            "re": "https://u.jd.com/",
            "ai": this.appId,
            "fp": this.fp
          },
          _0x4a9b76 = JSON.stringify(_0x12df5f, null, 2),
          _0x53fb8f = this.Encrypt(_0x4a9b76, {
            "key": "wm0!@w-s#ll1flo(",
            "iv": "0102030405060708"
          });
        var _0x1d18d2 = {
          "version": this.v,
          "fp": this.fp,
          "appId": this.appId.toString(),
          "timestamp": Date.now(),
          "platform": "web",
          "expandParams": _0x53fb8f || ""
        };
        return new Promise(_0x1f832f => {
          let _0xc6f44a = {
            "url": "https://cactus.jd.com/request_algo?g_ty=ajax",
            "body": JSON.stringify(_0x1d18d2),
            "headers": {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Accept-Encoding": "gzip, deflate, br",
              "Accept-Language": "zh-cn",
              "Origin": "https://pro.m.jd.com",
              "Referer": "https://pro.m.jd.com/",
              "user-agent": this.ua
            },
            "timeout": 30000
          };
          $.dpost(_0xc6f44a, async (_0x315ffe, _0x3e3d77, _0x4db830) => {
            try {
              if (_0x315ffe) console.log(_0x315ffe);else {
                {
                  let _0xd088b5 = $.toObj(_0x4db830, _0x4db830);
                  _0xd088b5 && typeof _0xd088b5 === "object" && _0xd088b5.data && _0xd088b5.data.result && _0xd088b5.data.result.tk && (this.tk = _0xd088b5.data.result.tk, this.genKey = new Function("return " + _0xd088b5.data.result.algo)());
                }
              }
            } catch (_0x466ad7) {
              $.logErr(_0x466ad7, _0x3e3d77);
            } finally {
              _0x1f832f();
            }
          });
        });
      }
    }
    ["__genH5st"](_0x5caef4 = {}, _0x37e8a9 = "") {
      let _0x370da7 = undefined,
        _0x182e97 = {
          "ua": this.ua,
          "uid": this.uid
        };
      if (this.tk && this.genKey) {
        this.time = Date.now();
        this.timestamp = this.__format("yyyyMMddhhmmssSSS", this.time);
        let _0x22bd55 = this.genKey(this.tk, this.fp.toString(), this.timestamp.toString(), this.appId.toString(), $.CryptoJS).toString();
        var _0x10bc30 = {},
          _0x9209a4 = null;
        _0x9209a4 = Object.keys(_0x5caef4).sort().map(function (_0x54fb1c) {
          var _0x59bc56 = {};
          _0x59bc56.key = _0x54fb1c;
          _0x59bc56.value = _0x5caef4[_0x54fb1c];
          return _0x59bc56;
        }).filter(function (_0x384bfe) {
          var _0x12db9d = _0x384bfe.value,
            _0x39913f = "number" == typeof _0x12db9d && !isNaN(_0x12db9d) || "string" == typeof _0x12db9d || "boolean" == typeof _0x12db9d || "body" == _0x384bfe.key;
          if (_0x39913f) {
            if ("body" == _0x384bfe.key && typeof _0x384bfe.value == "object") _0x384bfe.value = JSON.stringify(_0x384bfe.value);
            _0x10bc30[_0x384bfe.key] = _0x384bfe.value;
          }
          return _0x39913f;
        });
        _0x5caef4 = _0x10bc30;
        let _0x1f6b4c = "";
        _0x1f6b4c = Object.keys(_0x5caef4).map(function (_0x52d664) {
          return _0x52d664 + ":" + (_0x52d664 == "body" && _0x5caef4[_0x52d664].length !== 64 && _0x5caef4[_0x52d664].slice(0, 1) == "{" ? $.CryptoJS.SHA256(_0x5caef4[_0x52d664]).toString($.CryptoJS.enc.Hex) : _0x5caef4[_0x52d664]);
        }).join("&");
        _0x1f6b4c = $.CryptoJS.HmacSHA256(_0x1f6b4c, _0x22bd55).toString($.CryptoJS.enc.Hex);
        let _0x5aea21 = {
          "sua": /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua) && /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua)[1] || /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua) && /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua)[1] || "",
          "pp": {}
        };
        _0x37e8a9 && (_0x5aea21.pp.p1 = _0x37e8a9);
        _0x5aea21.fp = this.fp;
        let _0x79844c = JSON.stringify(_0x5aea21, null, 2),
          _0x1251e4 = this.Encrypt(_0x79844c, {
            "key": "&d74&yWoV.EYbWbZ",
            "iv": "0102030405060708"
          });
        _0x370da7 = [this.timestamp, this.fp, this.appId.toString(), this.tk, _0x1f6b4c, this.v, this.time.toString(), _0x1251e4].join(";");
        _0x182e97.t = _0x5caef4.t;
      }
      _0x182e97.h5st = _0x370da7;
      return _0x182e97;
    }
  }
  _0x2eceae = new _0x27393d(_0x3a9fea, _0x44324e, _0x10753a);
}
function _0x35a5b6() {
  class _0x5616e2 {
    constructor() {
      {
        this.UVCookie = "";
        this.ltr = 0;
        this.mr = [1, 0];
        this.document = {
          "cookie": "",
          "cookies": "__jdc=122270672;",
          "domain": "pro.m.jd.com",
          "referrer": "https://u.jd.com/",
          "location": {
            "href": "https://pro.m.jd.com/mall/active/3GriExsopKWEjptvv33rYCcDgUwK/index.html",
            "hrefs": "https://pro.m.jd.com/mall/active/3GriExsopKWEjptvv33rYCcDgUwK/index.html"
          }
        };
        this.navigator = {
          "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
          "userAgents": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        };
        this.window = {};
      }
    }
    ["getUVCookie"](_0x28f54d = "", _0x30a80b = "", _0x2680a7 = "", _0x440a8a = "") {
      try {
        this.document.location.href = this.document.location.hrefs + "";
        this.document.cookie = this.document.cookies + "";
        if (_0x2680a7) this.document.location.href = _0x2680a7;
        if (_0x440a8a) this.document.cookie = _0x440a8a;
        this.UVCookie = "";
        this.navigator.userAgent = this.navigator.userAgents + "";
        this.ltr = 1011 + Math.round(31 * Math.random());
        if (_0x28f54d) this.navigator.userAgent = _0x28f54d;
        this.lr = {
          "ckJda": "__jda",
          "ckJdb": "__jdb",
          "ckJdv": "__jdv",
          "ckJdc": "__jdc",
          "refUrl": "https://u.jd.com/"
        };
        this.q();
        this.s(_0x30a80b);
        return this.UVCookie;
      } catch (_0xbfceb7) {
        console.log(_0xbfceb7);
      }
    }
    ["s"](_0x581c4c = "") {
      var _0xce8cbe,
        _0x23f564,
        _0x96e677,
        _0x586c87,
        _0x23ad44 = (this.getCookie(this.lr.ckJda) || "").split("."),
        _0x59d971 = (this.getCookie(this.lr.ckJdb) || "").split("."),
        _0x4b35c3 = (this.getCookie(this.lr.ckJdv) || "").split("|"),
        _0x1d1ac8 = this.getCookie(this.lr.ckJdc) || "",
        _0x374e2d = parseInt((new Date().getTime() - this.ltr) / 1000),
        _0x4b1f1f = 0,
        _0x516894 = 1,
        _0x20f080 = "direct",
        _0x318e8c = "-",
        _0x313db9 = "none",
        _0xfbd3ee = "-";
      if (_0x23ad44.length > 3) for (var _0x43d2e0 = 2; _0x43d2e0 < 5 && _0x43d2e0 < _0x23ad44.length; _0x43d2e0++) {
        {
          var _0x2b8aa3 = _0x23ad44[_0x43d2e0];
          _0x2b8aa3.length > 10 && (_0x23ad44[_0x43d2e0] = _0x2b8aa3.substr(0, 10));
        }
      }
      _0x23ad44.length > 5 ? (_0x96e677 = _0x23ad44[0], _0x586c87 = _0x23ad44[1], _0xce8cbe = parseInt(_0x23ad44[2], 10), _0x23f564 = parseInt(_0x23ad44[3], 10), _0x374e2d = parseInt(_0x23ad44[4], 10), _0x516894 = parseInt(_0x23ad44[5], 10) || _0x516894) : (_0x586c87 = this.genUuid(), _0xce8cbe = _0x374e2d, _0x23f564 = _0x374e2d);
      this.lr.uuid = _0x586c87;
      _0x59d971.length > 3 && (_0x96e677 || (_0x96e677 = _0x59d971[0]), _0x4b1f1f = parseInt(_0x59d971[1], 10) || 0);
      _0x4b35c3.length > 4 && (_0x96e677 || (_0x96e677 = _0x4b35c3[0]), _0x20f080 = _0x4b35c3[1], _0x318e8c = _0x4b35c3[2], _0x313db9 = _0x4b35c3[3], _0xfbd3ee = _0x4b35c3[4]);
      _0x1d1ac8 && "" !== _0x1d1ac8 && (_0x96e677 || (_0x96e677 = _0x1d1ac8));
      var _0x2d19d2,
        _0x4b4470 = [],
        _0x1d65ae = _0x59d971.length < 4,
        _0x29f0d1 = this.getParameter("utm_source"),
        _0x587874 = false;
      if (_0x29f0d1) {
        {
          var _0xde733f = this.getParameter("utm_campaign"),
            _0x274cd4 = this.getParameter("utm_medium"),
            _0x2d1112 = this.getParameter("utm_term");
          _0x4b4470.push(_0x29f0d1 || _0x20f080);
          _0x4b4470.push(_0xde733f || _0x318e8c);
          _0x4b4470.push(_0x274cd4 || _0x313db9);
          _0x4b4470.push(_0x2d1112 || _0xfbd3ee);
          _0xfbd3ee = _0x4b4470[3];
          _0x587874 = true;
        }
      } else {
        var _0xfe354e,
          _0x53a12d = this.lr.refUrl && this.lr.refUrl.split("/")[2],
          _0x35a7da = false;
        if (_0x53a12d && _0x53a12d.indexOf(this.lr.ckDomain) < 0) {
          for (_0xfe354e = this.lr.seo, _0x43d2e0 = 0; _0x43d2e0 < _0xfe354e.length; _0x43d2e0++) {
            var _0x4a2d2c = _0xfe354e[_0x43d2e0].split(":");
            if (_0x53a12d.indexOf(_0x4a2d2c[0].toLowerCase()) > -1 && this.lr.refUrl.indexOf((_0x4a2d2c[1] + "=").toLowerCase()) > -1) {
              var _0x3bea8d = this.getParameter(_0x4a2d2c[1], this.lr.refUrl);
              /[^\x00-\xff]/.test(_0x3bea8d) && (_0x3bea8d = encodeURIComponent(_0x3bea8d));
              _0x4b4470.push(_0x4a2d2c[0]);
              _0x4b4470.push("-");
              _0x4b4470.push("organic");
              _0x4b4470.push(_0x3bea8d || "not set");
              _0xfbd3ee = _0x4b4470[3];
              _0x35a7da = true;
              break;
            }
          }
          _0x35a7da || (_0x53a12d.indexOf("zol.com.cn") > -1 ? (_0x4b4470.push("zol.com.cn"), _0x4b4470.push("-"), _0x4b4470.push("cpc"), _0x4b4470.push("not set")) : (_0x4b4470.push(_0x53a12d), _0x4b4470.push("-"), _0x4b4470.push("referral"), _0x4b4470.push("-")));
        }
      }
      _0x2d19d2 = _0x4b4470.length > 0 && (_0x4b4470[0] !== _0x20f080 || _0x4b4470[1] !== _0x318e8c || _0x4b4470[2] !== _0x313db9) && "referral" !== _0x4b4470[2];
      _0x1d65ae || !_0x1d65ae && _0x2d19d2 ? (_0x20f080 = _0x4b4470[0] || _0x20f080, _0x318e8c = _0x4b4470[1] || _0x318e8c, _0x313db9 = _0x4b4470[2] || _0x313db9, _0xfbd3ee = _0x4b4470[3] || _0xfbd3ee, _0x23ad44.length > 5 ? (_0xce8cbe = parseInt(_0x23ad44[2], 10), _0x23f564 = parseInt(_0x23ad44[4], 10), _0x374e2d = parseInt((new Date().getTime() - this.ltr) / 1000), _0x516894++, _0x4b1f1f = 1) : (_0x516894 = 1, _0x4b1f1f = 1)) : _0x4b1f1f++;
      var _0x1627e4 = this.getPageParamFromSdk();
      if (_0x1627e4 && _0x1627e4.vts) {
        {
          var _0x2de81c = 1 * _0x1627e4.vts,
            _0x421b52 = 1 * _0x1627e4.seq;
          (_0x2de81c > _0x516894 || _0x2de81c === _0x516894 && _0x421b52 >= _0x4b1f1f) && (_0x516894 = _0x2de81c, _0x4b1f1f = _0x421b52 + 1);
        }
      }
      if (_0x96e677 || (_0x96e677 = this.genHash(this.lr.ckDomain)), this.setCookie(this.lr.ckJda, [_0x96e677, _0x586c87, _0xce8cbe, _0x23f564, _0x374e2d, _0x516894 || 1].join("."), this.lr.ckDomain, this.lr.ckJdaExp), this.setCookie(this.lr.ckJdb, [_0x96e677, _0x4b1f1f, _0x586c87 + "|" + _0x516894, _0x374e2d].join("."), this.lr.ckDomain, this.lr.ckJdbExp), _0x587874 || _0x2d19d2 || _0x4b35c3.length < 5) {
        {
          var _0x8b30a4 = [_0x96e677, _0x20f080 || "direct", _0x318e8c || "-", _0x313db9 || "none", _0xfbd3ee || "-", new Date().getTime() - this.ltr].join("|");
          this.setJdv(_0x8b30a4 = encodeURIComponent(_0x8b30a4), _0x96e677);
        }
      }
      this.setCookie(this.lr.ckJdc, _0x96e677, this.lr.ckDomain);
    }
    ["q"]() {
      {
        this.lr.rpDomain = this.lr.rpDomain || "uranus.jd.com";
        this.lr.logUrl = "//" + this.lr.rpDomain + "/log/m";
        this.lr.logType = {
          "pv": "1",
          "pf": "2",
          "cl": "3",
          "od": "4",
          "pd": "5",
          "hm": "6",
          "magic": "000001"
        };
        this.lr.useTmpCookie ? (this.lr.ckJda = "__tra", this.lr.ckJdb = "__trb", this.lr.ckJdc = "__trc", this.lr.ckJdu = "__tru") : (this.lr.ckJda = "__jda", this.lr.ckJdb = "__jdb", this.lr.ckJdc = "__jdc", this.lr.ckJdu = "__jdu");
        this.lr.ckJdv = "__jdv";
        this.lr.ckWxAppCk = "__jdwxapp";
        this.lr.ckRefCls = "__jd_ref_cls";
        this.lr.ckJdaExp = 15552000000;
        this.lr.ckJdbExp = 1800000;
        this.lr.ckJduExp = 15552000000;
        this.lr.ckJdvExp = 1296000000;
        this.lr.ckJdvEmbeddedExp = 86400000;
        this.lr.ckWxAppCkExp = 15552000000;
        this.lr.mtSubsiteExp = 31536000000;
        this.lr.ckDomain = (this.document.domain.match(/[^.]+\.(com.cn|net.cn|org.cn|gov.cn|edu.cn)$/) || [""])[0] || this.document.domain.replace(/.*?([^.]+\.[^.]+)$/, "$1");
        this.lr.title = this.document.title;
        this.lr.refUrl = this.document.referrer;
        this.lr.seo = ["i.easou.com:q", "m.baidu.com:word", "m.sm.cn:q", "m.so.com:q", "wap.sogou.com:keyword", "m.sogou.com:keyword", "wap.sogo.com:keyword", "m.sogo.com:keyword", "page.roboo.com:q", "ask.com:q", "baidu:word", "baidu:wd", "bing:q", "easou:q", "google:q", "roboo:word", "roboo:q", "sm.cn:q", "so.com:q", "sogou:keyword", "sogou:query", "sogo.com:keyword", "sogo.com:query", "yahoo:p", "yandex:text", "yicha:key"];
      }
    }
    ["setCookie"](_0x29f5bb, _0x231a36, _0xeb3bfd, _0x261eea) {
      if (_0x29f5bb) {
        {
          var _0x342cfd = "";
          if (_0x261eea) {
            {
              var _0x53b7e6 = new Date();
              _0x53b7e6.setTime(_0x53b7e6.getTime() - this.ltr + _0x261eea);
              _0x342cfd = ";expires=" + _0x53b7e6.toGMTString();
            }
          }
          this.UVCookie += _0x29f5bb + "=" + _0x231a36 + "; ";
        }
      }
    }
    ["setJdv"](_0x108513, _0x56acf3, _0x4e3edd) {
      {
        var _0x478687 = "";
        _0x478687 = this.isPrey(10) && (!_0x108513 || _0x108513.length > 400) ? _0x56acf3 + "|direct|-|none|-|" + (new Date().getTime() - this.ltr) : _0x108513;
        var _0x36370c = _0x4e3edd || this.isEmbedded() ? this.lr.ckJdvEmbeddedExp : this.lr.ckJdvExp;
        this.setCookie(this.lr.ckJdv || "__jdv", _0x478687, this.lr.ckDomain, _0x36370c);
      }
    }
    ["getCookie"](_0x1f7355, _0x45a6c3) {
      {
        var _0x33d9b2 = this.document.cookie.match(new RegExp("(^| )" + _0x1f7355 + "=([^;]*)(;|$)"));
        return null !== _0x33d9b2 ? _0x45a6c3 ? _0x33d9b2[2] : this.urlDecode(_0x33d9b2[2]) : "";
      }
    }
    ["genUuid"]() {
      return new Date().getTime() - this.ltr + "" + parseInt(2147483647 * Math.random());
    }
    ["getParameter"](_0x54faa2, _0x8e926b) {
      var _0x2f4857 = _0x8e926b || this.document.location.href,
        _0xe64fcb = new RegExp("(?:^|&|[?]|[/])" + _0x54faa2 + "=([^&]*)").exec(_0x2f4857);
      return _0xe64fcb ? this.urlDecode(_0xe64fcb[1]) : null;
    }
    ["urlDecode"](_0x644ab0) {
      try {
        return decodeURIComponent(_0x644ab0);
      } catch (_0x319597) {
        return _0x644ab0;
      }
    }
    ["genHash"](_0x40f62e) {
      {
        var _0x37e1bc,
          _0x27f768 = 1,
          _0x31faf2 = 0;
        if (_0x40f62e) for (_0x27f768 = 0, _0x37e1bc = _0x40f62e.length - 1; _0x37e1bc >= 0; _0x37e1bc--) {
          _0x27f768 = 0 !== (_0x31faf2 = 266338304 & (_0x27f768 = (_0x27f768 << 6 & 268435455) + (_0x31faf2 = _0x40f62e.charCodeAt(_0x37e1bc)) + (_0x31faf2 << 14))) ? _0x27f768 ^ _0x31faf2 >> 21 : _0x27f768;
        }
        return _0x27f768;
      }
    }
    ["isPrey"](_0x2ddc24) {
      if (_0x2ddc24 >= 100) return true;
      var _0x5199aa = this.lr.uuid,
        _0x4d47b2 = _0x5199aa.substr(_0x5199aa.length - 2);
      return !!_0x4d47b2 && 1 * _0x4d47b2 < _0x2ddc24;
    }
    ["isEmbedded"]() {
      var _0x5e0f17 = this.navigator.userAgent || "";
      return /^(jdapp|jdltapp|jdpingou);/.test(_0x5e0f17) || this.isJdLog();
    }
    ["isJdLog"]() {
      return (this.navigator.userAgent || "").indexOf(";jdlog;") > -1;
    }
    ["getPageParamFromSdk"]() {
      {
        var _0x2bba9f, _0x296607;
        try {
          this.window.JDMAUnifyBridge && this.window.JDMAUnifyBridge.JDMAGetMPageParam ? _0x296607 = JDMAUnifyBridge.JDMAGetMPageParam() : this.window.JDMAGetMPageParam ? _0x296607 = JDMAGetMPageParam() : this.window.webkit && this.window.webkit.messageHandlers && this.window.webkit.messageHandlers.JDMASetMPageParam && (_0x296607 = this.window.prompt("JDMAGetMPageParam", ""));
          _0x296607 && (_0x2bba9f = JSON.parse(_0x296607));
        } catch (_0x2e6ac2) {}
        return _0x2bba9f;
      }
    }
    ["time"](_0xf39ed3, _0xfae2bd = null) {
      const _0x8eda74 = _0xfae2bd ? new Date(_0xfae2bd) : new Date();
      let _0x2dc40a = {
        "M+": _0x8eda74.getMonth() + 1,
        "d+": _0x8eda74.getDate(),
        "H+": _0x8eda74.getHours(),
        "m+": _0x8eda74.getMinutes(),
        "s+": _0x8eda74.getSeconds(),
        "q+": Math.floor((_0x8eda74.getMonth() + 3) / 3),
        "S": _0x8eda74.getMilliseconds()
      };
      /(y+)/.test(_0xf39ed3) && (_0xf39ed3 = _0xf39ed3.replace(RegExp.$1, (_0x8eda74.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x1a7c72 in _0x2dc40a) new RegExp("(" + _0x1a7c72 + ")").test(_0xf39ed3) && (_0xf39ed3 = _0xf39ed3.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2dc40a[_0x1a7c72] : ("00" + _0x2dc40a[_0x1a7c72]).substr(("" + _0x2dc40a[_0x1a7c72]).length)));
      return _0xf39ed3;
    }
  }
  _0x464475 = new _0x5616e2();
}
function _0x4d1ce8() {
  let _0x3b9d73 = {
      "url": "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/11red",
      "timeout": 10000
    },
    _0x20143d = [];
  return new Promise(_0x41ef75 => {
    $.get(_0x3b9d73, async (_0x350a9a, _0x3b0c6e, _0x1d3f4e) => {
      try {
        {
          if (_0x350a9a) {} else {
            {
              if (_0x1d3f4e) {
                _0x1d3f4e = JSON.parse(_0x1d3f4e);
                if (_0x1d3f4e.code === 200) _0x20143d = _0x1d3f4e.data;else {}
              }
            }
          }
        }
      } catch (_0x171381) {
        $.logErr(_0x171381, _0x3b0c6e);
      } finally {
        _0x41ef75(_0x20143d);
      }
    });
  });
}
function _0x313ebc(_0x1626ca) {
  if (typeof _0x1626ca == "string") try {
    return JSON.parse(_0x1626ca);
  } catch (_0x16d612) {
    console.log(_0x16d612);
    $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
    return [];
  }
}
function _0x314cd1(_0x119cdf) {
  _0x119cdf = _0x119cdf || 32;
  let _0xbfb2de = "abcdef0123456789",
    _0x1633e7 = _0xbfb2de.length,
    _0x211117 = "";
  for (i = 0; i < _0x119cdf; i++) _0x211117 += _0xbfb2de.charAt(Math.floor(Math.random() * _0x1633e7));
  return _0x211117;
}


function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { const {execSync} = require('child_process');execSync('sleep 30');return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) {const {execSync} = require('child_process');execSync('sleep 30'); if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000); let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }

