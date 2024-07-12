/*
活动名称：批量店铺签到（活动查询）
活动链接：https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=<token>
环境变量：jd_dpqd_tokens // 活动令牌，多个用英文逗号，@，&，换行分割

查询活动信息主脚本，自动去重并过滤无效活动，默认过滤垃圾奖品活动
运行后会在本地目录生成缓存文件以用于签到脚本使用，IP限制严重请勿频繁运行

cron:1 1 1 1 *

*/

const $ = new Env('批量店铺签到（活动查询）')

const _0x26fc48 = $.isNode() ? require("./jdCookie") : "",
  _0x4b2c3e = require("./USER_AGENTS"),
  _0x5673c7 = require("./function/dylib"),
  _0x3759b1 = require("./function/dylanw"),
  _0x53a208 = require("child_process").execSync,
  _0x4f2767 = require("fs"),
  _0x1fa251 = __dirname + "/rs_dpqd_tokens.json";
let _0x3f069a = [],
  _0x5975cd = "",
  _0x59b714,
  _0x427825 = 0,
  _0x40cdb6 = null,
  _0x5588ac = ["6F6AC93814CB680EA1C2F65574813586"];
const _0x41ef1c = "https://api.m.jd.com/api?appid=interCenter_shopSign",
  _0x1c7ca6 = new Date();
_0x1c7ca6.setDate(_0x1c7ca6.getDate() + 1);
_0x1c7ca6.setHours(0, 0, 0, 0);


const share_code_url = process.env.UPDATE_SHARE_CODE_URL ?? '';
const md5 = $.isNode() ? require('md5-node'): '';


if (process.env.DY_PROXY) try {
  ccc = require("./function/proxy.js");
  $.dget = ccc.intoRequest($.get.bind($));
  $.dpost = ccc.intoRequest($.post.bind($));
} catch {
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
if ($.isNode()) {
  Object.keys(_0x26fc48).forEach(_0x23a5c4 => {
    _0x3f069a.push(_0x26fc48[_0x23a5c4]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else {
  let _0x2e3c4b = $.getdata("CookiesJD") || "[]";
  _0x2e3c4b = _0x21e253(_0x2e3c4b);
  _0x3f069a = _0x2e3c4b.map(_0x321faa => _0x321faa.cookie);
  _0x3f069a.reverse();
  _0x3f069a.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
  _0x3f069a.reverse();
  _0x3f069a = _0x3f069a.filter(_0x1d7bcc => _0x1d7bcc !== "" && _0x1d7bcc !== null && _0x1d7bcc !== undefined);
}
let _0x1569c9 = [],
  _0x76c526 = [],
  _0x366c4e = 0;
process.env.jd_dpqd_tokens && (process.env.jd_dpqd_tokens.indexOf("\n") > -1 || process.env.jd_dpqd_tokens.indexOf("&") > -1 || process.env.jd_dpqd_tokens.indexOf(",") > -1 ? _0x1569c9 = process.env.jd_dpqd_tokens.split(/[,&\n]/) : _0x1569c9.push(process.env.jd_dpqd_tokens), _0x5588ac = _0x1569c9);
let _0x3c8fb2 = _0x4f2767.existsSync("/ql/data/config") ? "/ql/data/config/config.sh" : "/ql/config/config.sh";
!(async () => {
  if (!_0x3f069a[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n当前版本：20240401 ");
  console.log("403需换ip或等会在执行，支持DY_PROXY");
  console.log("TG频道：https://t.me/dylan_jdpro\n");
  $.TokenLists = [];
  $.TokenLists.push(..._0x5588ac);
  $.TokenLists = [...new Set($.TokenLists)].filter(_0x4adb06 => !!_0x4adb06 && _0x4adb06.length === 32);
  
  $.UserName = decodeURIComponent(_0x3f069a[0].match(/pt_pin=(.+?);/) && _0x3f069a[0].match(/pt_pin=(.+?);/)[1])
  
	//$.TokenLists = []
	const res = await getAuthorShareCode(`${share_code_url}/jd_shop_sign?type=1`);
	if (res && res.code === 200) {
	  $.TokenLists = res.data || [];
	  console.log("\n在线获取数据");
	}else{
	  console.log(`getAuthorShareCode=${JSON.stringify(res)}`)
	}	
		
  $.index = 1;
  if ($.TokenLists.length === 0) {
    console.log("无店铺签到token，退出！");
    return;
  } else console.log("共" + $.TokenLists.length + "个店铺，开始查询...");
  _0x40cdb6 = new Map();
  _0x5ad93c();
  await _0x4f6c20();
  try {
    _0x366c4e = _0x76c526.length;
    for (let _0x5e21a4 of _0x76c526) {
		updateAuthorShareCode(_0x5e21a4);
		await $.wait(1000*3);
      //_0x53a208("sed -i \"s!" + _0x5e21a4 + "!!g\" " + _0x3c8fb2);
    }
  } catch (_0xb8ae5d) {}
  let _0x3bcf20 = Object.fromEntries(_0x40cdb6);
  _0x4f2767.writeFileSync(_0x1fa251, JSON.stringify(_0x3bcf20, null, 2));
  $.log("\n查询信息缓存成功，去执行店铺签到吧！");
  console.log("\n" + (_0x366c4e > 0 ? _0x366c4e + "个失效token，变量已移除" : ""));
})().catch(_0x4845c7 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x4845c7 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x4f6c20() {
  for (var _0x4877e3 = 0; _0x4877e3 < $.TokenLists.length; _0x4877e3++) {
    {
      _0x5975cd = _0x3f069a[Math.floor(Math.random() * _0x3f069a.length)];
      $.activityId = "";
      $.venderId = "";
      $.tasklist = [];
      $.info = {};
      $.prize = "";
      _0x427825 = 0;
      if ($.TokenLists[_0x4877e3] == "") continue;
      _0x5ad93c();
      console.log("\n店铺->" + (_0x4877e3 + 1) + "：" + $.TokenLists[_0x4877e3]);
      await _0x12d696($.TokenLists[_0x4877e3]);
      if ($.venderId == "") {
        continue;
      } else {
        await _0x401d0d($.venderId);
        const _0x24a4a7 = {};
        _0x24a4a7.index = $.index++;
        _0x24a4a7.shopName = $.shopname;
        _0x24a4a7.venderId = $.venderId;
        _0x24a4a7.activityId = $.activityId;
        _0x24a4a7.startTime = _0x5673c7.Format_Date($.stime);
        _0x24a4a7.endTime = _0x5673c7.Format_Date($.etime);
        _0x24a4a7.prize = $.prize;
        _0x40cdb6.set($.TokenLists[_0x4877e3], _0x24a4a7);
      }
	  $.log("\n休息15秒");
      await $.wait(1000*15);
    }
  }
}
async function _0x12d696(_0x36bda1) {
  let _0x455a82 = {
      "token": "" + _0x36bda1,
      "venderId": ""
    },
    _0x2d5947 = {
      "appId": "4da33",
      "fn": "interact_center_shopSign_getActivityInfo",
      "body": _0x455a82,
      "apid": "interCenter_shopSign",
      "ver": "11.6.5",
      "cl": "android",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x455a82 = await _0x3759b1.getbody(_0x2d5947);
  return new Promise(_0x4f96 => {
    {
      const _0x34cd73 = {
        "url": "https://api.m.jd.com/api?loginType=2&" + _0x455a82,
        "headers": {
          "accept": "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "cookie": _0x5975cd,
          "referer": "https://h5.m.jd.com/",
          "User-Agent": $.UA
        },
        "ciphers": _0x5673c7.cpstr
      };
      $.dget(_0x34cd73, (_0x2bda3a, _0x6c1538, _0x127e3b) => {
        try {
          {
            if (_0x2bda3a) console.log("查询店铺API请求失败‼️"), console.log(_0x2bda3a);else {
              _0x127e3b = JSON.parse(_0x127e3b);
              if (_0x127e3b.code == 402) $.venderId = "", console.log("活动已失效"), $.activityEnd = true, _0x76c526.push(_0x36bda1);else {
                $.venderId = _0x127e3b.data.venderId;
                $.activityId = _0x127e3b.data.id;
                $.stime = _0x127e3b.data.startTime;
                $.etime = _0x127e3b.data.endTime;
                console.log("开始时间：" + _0x5673c7.Format_Date($.stime) + (Date.now() - $.stime > 86400000 ? "" : "") + "\n结束时间：" + _0x5673c7.Format_Date($.etime));
                let _0x5684f9 = [..._0x127e3b.data.prizeRuleList, ..._0x127e3b.data.continuePrizeRuleList];
                for (let _0x4d9bb7 = 0; _0x4d9bb7 < _0x5684f9.length; _0x4d9bb7++) {
                  const _0x2b9d85 = _0x5684f9[_0x4d9bb7].level;
                  for (let _0x3a4da3 of _0x5684f9[_0x4d9bb7].prizeList) {
                    if (_0x3a4da3.type == 4) {
                      if (_0x4d9bb7 != _0x5684f9.length - 1) {
                        $.prize += "" + (_0x2b9d85 == 0 ? "每天" : _0x2b9d85 + "天") + _0x3a4da3.discount + "豆" + _0x3a4da3.number + ("份" + (_0x3a4da3.status === 5 ? "(无)" : "") + "|");
                      } else $.prize += "" + (_0x2b9d85 == 0 ? "每天" : _0x2b9d85 + "天") + _0x3a4da3.discount + "豆" + _0x3a4da3.number + ("份" + (_0x3a4da3.status === 5 ? "(无)" : ""));
                    } else {
                      if (_0x3a4da3.type == 14) _0x4d9bb7 != _0x5684f9.length - 1 ? $.prize += _0x2b9d85 + "天" + _0x3a4da3.discount / 100 + "红包" + _0x3a4da3.number + ("份" + (_0x3a4da3.status === 5 ? "(无)" : "") + "|") : $.prize += _0x2b9d85 + "天" + _0x3a4da3.discount / 100 + "红包" + _0x3a4da3.number + ("份" + (_0x3a4da3.status === 5 ? "(无)" : ""));else {
                        if (_0x3a4da3.type == 10) _0x4d9bb7 != _0x5684f9.length - 1 ? $.prize += _0x2b9d85 + "天" + _0x3a4da3.discount + "E卡" + _0x3a4da3.number + ("份" + (_0x3a4da3.status === 5 ? "(无)" : "") + "|") : $.prize += _0x2b9d85 + "天" + _0x3a4da3.discount + "E卡" + _0x3a4da3.number + ("份" + (_0x3a4da3.status === 5 ? "(无)" : ""));else {
                          if (_0x3a4da3.type == 1) {} else {}
                        }
                      }
                    }
                  }
                }
                !$.prize && ($.prize = "无豆无红包E卡，有积分优惠券！");
                console.log("签到奖品：" + $.prize);
              }
            }
          }
        } catch (_0x1a4556) {
          $.logErr(_0x1a4556, _0x6c1538);
        } finally {
          _0x4f96(_0x127e3b);
        }
      });
    }
  });
}
async function _0x401d0d(_0x254fec) {
  if (!_0x254fec) console.log("店铺名称：未获取到！\n店铺链接：未获取到！");
  return new Promise(_0x4dd550 => {
    {
      const _0x502e5a = {
        "url": "https://api.m.jd.com/client.action?functionId=whx_getMShopDetail&body=%7B%22venderId%22%3A%22" + _0x254fec + "%22%2C%22stamp%22%3A%221%22%2C%22%24taroTimestamp%22%3A" + new Date().valueOf() + "%2C%22source%22%3A%22m-shop%22%7D&t=" + new Date().valueOf() + "&appid=shop_view&clientVersion=11.0.0&client=wh5&area=1_72_2799_0&uuid=16630119447091257705224",
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
      $.dget(_0x502e5a, (_0x3e721c, _0x2922d5, _0x4dd90f) => {
        try {
          _0x3e721c ? (console.log("查询店铺名称API请求失败‼️"), console.log(_0x3e721c)) : (_0x4dd90f = JSON.parse(_0x4dd90f), $.shopname = _0x4dd90f.data.shopBaseInfo.shopName, console.log("店铺名称：" + $.shopname + "\n店铺链接：https://shop.m.jd.com/?venderId=" + _0x254fec), _0x59b714 += "【" + $.shopname + "】");
        } catch (_0x587234) {
          $.logErr(_0x587234, _0x2922d5);
        } finally {
          _0x4dd550(_0x4dd90f);
        }
      });
    }
  });
}
async function _0x24c705(_0x51ffb9) {
  return new Promise(_0x50b177 => {
    {
      const _0x42cc65 = {
        "url": _0x41ef1c + "&t=" + Date.now() + "&loginType=2&functionId=interact_center_shopSign_getActivityInfo&body={%22token%22:%22" + _0x51ffb9 + "%22,%22venderId%22:%22%22}&jsonp=jsonp1005",
        "headers": {
          "accept": "accept",
          "accept-encoding": "gzip, deflate",
          "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "cookie": _0x5975cd,
          "referer": "https://h5.m.jd.com/",
          "User-Agent": $.UA
        }
      };
      $.dget(_0x42cc65, (_0x43c762, _0x15e193, _0x2c499a) => {
        try {
          if (_0x43c762) console.log("查询活动信息API请求失败‼️"), console.log(_0x43c762);else {
            _0x2c499a = JSON.parse(/{(.*)}/g.exec(_0x2c499a)[0]);
            $.activityId = _0x2c499a.data?.["id"];
            if (!$.activityId) return;
            let _0xf5863f = _0x2c499a.data.startTime,
              _0x5764ac = _0x2c499a.data.endTime;
            console.log("开始时间：" + new Date(parseInt(_0xf5863f)).toLocaleString() + "\n结束时间：" + new Date(parseInt(_0x5764ac)).toLocaleString());
            for (let _0xe35f59 = 0; _0xe35f59 < _0x2c499a.data.continuePrizeRuleList.length; _0xe35f59++) {
              {
                const _0x5a077f = _0x2c499a.data.continuePrizeRuleList[_0xe35f59].level;
                for (let _0x2ac12c of _0x2c499a.data.continuePrizeRuleList[_0xe35f59].prizeList) {
                  if (_0x2ac12c.type == 4) {
                    _0xe35f59 != _0x2c499a.data.continuePrizeRuleList.length - 1 ? $.prize += _0x5a077f + "天" + _0x2ac12c.discount + "豆" + _0x2ac12c.number + "份|" : $.prize += _0x5a077f + "天" + _0x2ac12c.discount + "豆" + _0x2ac12c.number + "份";
                  } else {
                    if (_0x2ac12c.type == 14) _0xe35f59 != _0x2c499a.data.continuePrizeRuleList.length - 1 ? $.prize += _0x5a077f + "天" + _0x2ac12c.discount / 100 + "红包" + _0x2ac12c.number + "份|" : $.prize += _0x5a077f + "天" + _0x2ac12c.discount / 100 + "红包" + _0x2ac12c.number + "份";else {}
                  }
                }
              }
            }
            !$.prize && ($.prize = "无豆无红包，可能积分E卡优惠券！");
            console.log("簽到奖励：" + $.prize);
          }
        } catch (_0x51f41c) {
          $.logErr(_0x51f41c, _0x15e193);
        } finally {
          _0x50b177(_0x2c499a);
        }
      });
    }
  });
}
async function _0x35d10f(_0x3333d3, _0x27a214, _0x489147, _0x4dc781, _0xeb9bf2, _0x7e25d5) {
  let _0x3363f1 = {
      "token": "" + _0x4dc781,
      "venderId": $.venderId,
      "activityId": _0xeb9bf2,
      "type": 56,
      "actionType": 7
    },
    _0x1d10d9 = {
      "appId": "4da33",
      "fn": "interact_center_shopSign_signCollectGift",
      "body": _0x3363f1,
      "apid": "interCenter_shopSign",
      "ver": "11.6.5",
      "cl": "android",
      "user": _0x489147,
      "code": 1,
      "ua": _0x7e25d5
    };
  _0x3363f1 = await _0x3759b1.getbody(_0x1d10d9);
  return new Promise(_0x513e39 => {
    const _0x3c94cb = {
      "url": "https://api.m.jd.com/api?loginType=2&" + _0x3363f1,
      "headers": {
        "accept": "accept",
        "accept-encoding": "gzip, deflate",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x3333d3,
        "referer": "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=" + _0x4dc781 + "&sceneval=2",
        "User-Agent": _0x7e25d5
      }
    };
    $.get(_0x3c94cb, async (_0x1b8a9f, _0x2f81f5, _0x1f526e) => {
      try {
        {
          if (_0x1b8a9f) console.log("签到API请求失败‼️"), console.log(_0x1b8a9f);else {
            {
              _0x1f526e = JSON.parse(_0x1f526e);
              if (_0x1f526e.success && _0x1f526e.success === true) {
                let _0x2df5cd = 0;
                for (let _0x339d58 of _0x1f526e.data) {
                  for (i of _0x339d58.prizeList) switch (i.type) {
                    case 4:
                      _0x2df5cd += i.discount;
                      break;
                  }
                }
                let _0x2b0065 = await _0x28b4d4(_0x3333d3, _0x4dc781);
                console.log("┗━[" + _0x27a214 + "][" + _0x489147 + "] 签到成功" + (_0x2df5cd > 0 ? "，获得" + _0x2df5cd + "京豆🥔，" : "，") + "已签" + (_0x2b0065.data?.["days"] || "?") + "天");
                _0x427825 = 0;
              } else {
                if (_0x1f526e.msg) {
                  {
                    let _0x230b20 = await _0x28b4d4(_0x3333d3, _0x4dc781);
                    _0x1f526e.msg.includes("已经") ? console.log("┗━[" + _0x27a214 + "][" + _0x489147 + "] 今日已签过！已签" + (_0x230b20.data?.["days"] || "?") + "天") : $.log("┗━[" + _0x27a214 + "][" + _0x489147 + "] " + _0x1f526e.msg);
                  }
                } else {
                  {
                    console.log("┗━[" + _0x27a214 + "][" + _0x489147 + "] 签到失败,重試❗️❗️❗️");
                    _0x427825++;
                    if (_0x427825 > 20) return;
                    await $.wait(500);
                    await _0x35d10f(_0x3333d3, _0x27a214, _0x489147, _0x4dc781, _0xeb9bf2, _0x7e25d5);
                  }
                }
              }
            }
          }
        }
      } catch (_0x2748c1) {
        $.logErr(_0x2748c1, _0x2f81f5);
      } finally {
        _0x513e39(_0x1f526e);
      }
    });
  });
}
async function _0x28b4d4(_0x6daac5, _0xd04dd0) {
  return new Promise(_0x3906a0 => {
    {
      const _0x19f95f = {
        "url": _0x41ef1c + "&t=" + Date.now() + "&loginType=2&functionId=interact_center_shopSign_getSignRecord&body={%22token%22:%22" + _0xd04dd0 + "%22,%22venderId%22:%22%22,%22activityId%22:%22%22,%22type%22:56}&jsonp=jsonp1006",
        "headers": {
          "accept": "application/json",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "cookie": _0x6daac5,
          "referer": "https://h5.m.jd.com/",
          "User-Agent": $.UA
        }
      };
      $.get(_0x19f95f, (_0x2d78e4, _0x42ca11, _0x196876) => {
        try {
          _0x2d78e4 ? (console.log("API请求失败‼️"), console.log(_0x2d78e4)) : _0x196876 = JSON.parse(/{(.*)}/g.exec(_0x196876)[0]);
        } catch (_0x1547ef) {
          $.logErr(_0x1547ef, _0x42ca11);
        } finally {
          _0x3906a0(_0x196876);
        }
      });
    }
  });
}
function _0x34a660() {
  return new Promise(_0x2a0d89 => {
    {
      const _0x57cf0e = {
        "url": "https://lite-msg.m.jd.com/client.action?functionId=msgEntranceV1",
        "headers": {
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
      $.get(_0x57cf0e, (_0x477a88, _0x4b1811, _0x3ce299) => {
        try {
          _0x3ce299 && (_0x3ce299 = JSON.parse(_0x3ce299), $.difftime = Date.now() - _0x3ce299.timestamp);
        } catch (_0x57f075) {
          console.log(_0x57f075);
        } finally {
          _0x2a0d89();
        }
      });
    }
  });
}
async function _0x517cfc() {
  $.isNode() && ($.msg($.name, "", "【京东账号" + $.index + "】" + $.nickName + "\n" + _0x59b714), allMessage += "【京东账号" + $.index + "】" + $.nickName + "\n" + _0x59b714 + ($.index !== _0x3f069a.length ? "\n\n" : ""));
}
function _0x2f37d5() {
  return new Promise(_0x5bbcf3 => {
    {
      const _0x5bc302 = {
        "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
        "headers": {
          "Cookie": _0x5975cd,
          "referer": "https://h5.m.jd.com/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
      $.get(_0x5bc302, (_0x55ecf4, _0x23a175, _0x475899) => {
        try {
          if (_0x475899) {
            _0x475899 = JSON.parse(_0x475899);
            if (_0x475899.islogin === "1") {} else _0x475899.islogin === "0" && ($.isLogin = false);
          }
        } catch (_0x2c5cca) {
          console.log(_0x2c5cca);
        } finally {
          _0x5bbcf3();
        }
      });
    }
  });
}
function _0x21e253(_0x3c4423) {
  if (typeof _0x3c4423 == "string") try {
    return JSON.parse(_0x3c4423);
  } catch (_0x1722c9) {
    console.log(_0x1722c9);
    $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
    return [];
  }
}
function _0x3b92b4(_0x57c9) {
  _0x57c9 = _0x57c9 || 32;
  let _0x271096 = "abcdef0123456789",
    _0x30d7bd = _0x271096.length,
    _0x1b283c = "";
  for (i = 0; i < _0x57c9; i++) _0x1b283c += _0x271096.charAt(Math.floor(Math.random() * _0x30d7bd));
  return _0x1b283c;
}
function _0x5ad93c() {
  $.UA = "jdapp;iPhone;10.2.2;13.1.2;" + _0x3b92b4(40) + ";M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167863;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}


function getAuthorShareCode(url) {
  return new Promise(async resolve => {
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
        resolve(JSON.parse(data))
      } catch (e) {
        // $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
    await $.wait(10000)
    resolve();
  })
}

function updateAuthorShareCode(code) {
	let key =  process.env.UPDATE_SHARE_CODE_KEY ?? '';
	let time = Date.now();

	let sign = md5(`username=${$.UserName}&code=${code}&type=1&time=${time}&key=${key}`);
	let url = `${share_code_url}/jd_shop_sign/update?sign=${sign}&username=${$.UserName}&code=${code}&type=1&time=${time}`;
	
	
	console.log(`updateAuthorShareCode ：${url}`)
	
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
			console.log(`updateAuthorShareCode ：${data}`)
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


function Env(t, e) {
  "undefined" != typeof process &&
    JSON.stringify(process.env).indexOf("GITHUB") > -1 &&
    process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? { url: t } : t;
      let s = this.get;
      return (
        "POST" === e && (s = this.post),
        new Promise((e, i) => {
          s.call(this, t, (t, s, r) => {
            t ? i(t) : e(s);
          });
        })
      );
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new (class {
    constructor(t, e) {
      (this.name = t),
        (this.http = new s(this)),
        (this.data = null),
        (this.dataFile = "box.dat"),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = "\n"),
        (this.startTime = new Date().getTime()),
        Object.assign(this, e),
        this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i)
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
      return new Promise((e) => {
        this.get({ url: t }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise((s) => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        (r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r);
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: { script_text: t, mock_type: "cron", timeout: r },
            headers: { "X-Key": o, Accept: "*/*" },
          };
        this.post(n, (t, e, i) => s(i));
      }).catch((t) => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        (this.fs = this.fs ? this.fs : require("fs")),
          (this.path = this.path ? this.path : require("path"));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s
          ? this.fs.writeFileSync(t, r)
          : i
            ? this.fs.writeFileSync(e, r)
            : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t
        ? t
        : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []),
          (e
            .slice(0, -1)
            .reduce(
              (t, s, i) =>
                Object(t[s]) === t[s]
                  ? t[s]
                  : (t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}),
              t,
            )[e[e.length - 1]] = s),
          t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r)
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? ("null" === o ? null : o || "{}") : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), i));
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), (s = this.setval(JSON.stringify(o), i));
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.read(t)
        : this.isQuanX()
          ? $prefs.valueForKey(t)
          : this.isNode()
            ? ((this.data = this.loaddata()), this.data[t])
            : (this.data && this.data[t]) || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.write(t, e)
        : this.isQuanX()
          ? $prefs.setValueForKey(t, e)
          : this.isNode()
            ? ((this.data = this.loaddata()),
              (this.data[e] = t),
              this.writedata(),
              !0)
            : (this.data && this.data[e]) || null;
    }
    initGotEnv(t) {
      (this.got = this.got ? this.got : require("got")),
        (this.cktough = this.cktough ? this.cktough : require("tough-cookie")),
        (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers ? t.headers : {}),
          void 0 === t.headers.Cookie &&
            void 0 === t.cookieJar &&
            (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
		const {execSync} = require('child_process');
		execSync('sleep 20');
      t.headers &&
        (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
        this.isSurge() || this.isLoon()
          ? (this.isSurge() &&
              this.isNeedRewrite &&
              ((t.headers = t.headers || {}),
              Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
            $httpClient.get(t, (t, s, i) => {
              !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
            }))
          : this.isQuanX()
            ? (this.isNeedRewrite &&
                ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
              $task.fetch(t).then(
                (t) => {
                  const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o,
                  } = t;
                  e(null, { status: s, statusCode: i, headers: r, body: o }, o);
                },
                (t) => e(t),
              ))
            : this.isNode() &&
              (this.initGotEnv(t),
              this.got(t)
                .on("redirect", (t, e) => {
                  try {
                    if (t.headers["set-cookie"]) {
                      const s = t.headers["set-cookie"]
                        .map(this.cktough.Cookie.parse)
                        .toString();
                      s && this.ckjar.setCookieSync(s, null),
                        (e.cookieJar = this.ckjar);
                    }
                  } catch (t) {
                    this.logErr(t);
                  }
                })
                .then(
                  (t) => {
                    const {
                      statusCode: s,
                      statusCode: i,
                      headers: r,
                      body: o,
                    } = t;
                    e(
                      null,
                      { status: s, statusCode: i, headers: r, body: o },
                      o,
                    );
                  },
                  (t) => {
                    const { message: s, response: i } = t;
                    e(s, i, i && i.body);
                  },
                ));
    }
    post(t, e = () => {}) {
		//const {execSync} = require('child_process');
		///execSync('sleep 20');
      if (
        (t.body &&
          t.headers &&
          !t.headers["Content-Type"] &&
          (t.headers["Content-Type"] = "application/x-www-form-urlencoded"),
        t.headers && delete t.headers["Content-Length"],
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })),
          $httpClient.post(t, (t, s, i) => {
            !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
          });
      else if (this.isQuanX())
        (t.method = "POST"),
          this.isNeedRewrite &&
            ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(null, { status: s, statusCode: i, headers: r, body: o }, o);
            },
            (t) => e(t),
          );
      else if (this.isNode()) {
        this.initGotEnv(t);
        const { url: s, ...i } = t;
        this.got.post(s, i).then(
          (t) => {
            const { statusCode: s, statusCode: i, headers: r, body: o } = t;
            e(null, { status: s, statusCode: i, headers: r, body: o }, o);
          },
          (t) => {
            const { message: s, response: i } = t;
            e(s, i, i && i.body);
          },
        );
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds(),
      };
      /(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (s.getFullYear() + "").substr(4 - RegExp.$1.length),
        ));
      for (let e in i)
        new RegExp("(" + e + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? i[e]
              : ("00" + i[e]).substr(("" + i[e]).length),
          ));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = (t) => {
        if (!t) return t;
        if ("string" == typeof t)
          return this.isLoon()
            ? t
            : this.isQuanX()
              ? { "open-url": t }
              : this.isSurge()
                ? { url: t }
                : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return { openUrl: e, mediaUrl: s };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return { "open-url": e, "media-url": s };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return { url: e };
          }
        }
      };
      if (
        (this.isMute ||
          (this.isSurge() || this.isLoon()
            ? $notification.post(e, s, i, o(r))
            : this.isQuanX() && $notify(e, s, i, o(r))),
        !this.isMuteLog)
      ) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e),
          s && t.push(s),
          i && t.push(i),
          console.log(t.join("\n")),
          (this.logs = this.logs.concat(t));
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]),
        console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s
        ? this.log("", `❗️${this.name}, 错误!`, t.stack)
        : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`),
        this.log(),
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  })(t, e);
}

