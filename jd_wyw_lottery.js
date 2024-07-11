/*
9 9,19 * * * jd_wyw_lottery.js
 */

const $ = new Env('玩一玩-任务抽奖');

const bdy_0x39058a = $.isNode() ? require("./sendNotify") : "",
  bdy_0x5390bb = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x2ab2a6 = require("./USER_AGENTS"),
  bdy_0x197df5 = require("./function/dylans");
let bdy_0xe8af08 = [],
  bdy_0x377563 = [],
  bdy_0x1a4005 = "",
  bdy_0x39108a = "";
if ($.isNode()) {
  Object.keys(bdy_0x5390bb).forEach(_0x1bdfa5 => {
    bdy_0x377563.push(bdy_0x5390bb[_0x1bdfa5]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x377563 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x2bae31($.getdata("CookiesJD") || "[]").map(_0x216ce5 => _0x216ce5.cookie)].filter(_0x1c935e => !!_0x1c935e);
}
$.linkId = "6QiYAqxOTkn2Mf-I8miO5A";
!(async () => {
  if (!bdy_0x377563[-2195 + 8295 + -10 * 610]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("问题反馈：https://t.me/dylan_jdpro");
  for (let _0x5c4a52 = -8998 + -8986 + -17984 * -1; _0x5c4a52 < bdy_0x377563.length; _0x5c4a52++) {
    {
      if (bdy_0x377563[_0x5c4a52]) {
        {
          bdy_0x1a4005 = bdy_0x377563[_0x5c4a52];
          $.UserName = decodeURIComponent(bdy_0x1a4005.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x1a4005.match(/pt_pin=([^; ]+)(?=;?)/)[9892 + -21 * 471]);
          $.index = _0x5c4a52 + (431 + -3 * 755 + 1835);
          $.isLogin = true;
          $.nickName = "";
          $.UA = bdy_0x2ab2a6.UARAM ? bdy_0x2ab2a6.UARAM() : bdy_0x2ab2a6.USER_AGENT;
          $.xcr = 8812 + -8851 + 40;
          console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
          if (!$.isLogin) {
            const _0x1e0608 = {
              "open-url": "https://bean.m.jd.com/bean/signIndex.action"
            };
            $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x1e0608);
            if ($.isNode()) {
              {
                await bdy_0x39058a.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
              }
            }
            continue;
          }
          let _0x4434e2 = await bdy_0xfc1185();
          if (_0x4434e2.length != -9941 * -1 + -5140 + -4801) {
            {
              console.log("\n去做任务...");
              for (let _0x101664 of _0x4434e2) {
                {
                  if (/好友|购买|下单/.test(_0x101664.taskTitle)) {
                    continue;
                  }
                  if (_0x101664.taskFinished) {
                    console.log(_0x101664.taskShowTitle + " ---- 已完成");
                    continue;
                  }
                  console.log("去做任务 " + _0x101664.taskShowTitle);
                  let _0xc4895d = _0x101664.timeLimitPeriod || -8933 + -2247 + -86 * -130;
                  if (_0x101664.taskType === "FOLLOW_CHANNEL") {
                    await bdy_0x3ef191();
                  }
                  let _0x2e1343 = await bdy_0x59a6cc(_0x101664.taskType, _0x101664.id);
                  if (_0x2e1343.code) {
                    break;
                  }
                  let _0x5935ab = _0x101664.taskLimitTimes - _0x101664.taskDoTimes;
                  for (let _0x2c65d1 of _0x2e1343) {
                    if (_0x5935ab == -9464 * 1 + 9225 + 239) {
                      break;
                    }
                    _0x101664.id == 4 * -1607 + -1128 + -566 * -23 && (_0x2c65d1.itemId = _0x2c65d1.itemName);
                    _0xc4895d != 2107 + -508 * -13 + -8711 * 1 ? (await bdy_0x3dcf1d(_0x101664.id, _0x2c65d1.itemId), await $.wait(parseInt(Math.random() * (9219 + -8719) + _0xc4895d * (-194 * -19 + -8616 + 5930), -367 * 2 + -422 * 1 + 1166)), await bdy_0x40304e(), await $.wait(parseInt(Math.random() * (-1 * 5453 + -815 * -2 + 4823), -8557 + -2050 + 10617))) : (await bdy_0x730d2d(_0x2c65d1.itemId, _0x101664.taskType, _0x101664.id), await $.wait(parseInt(Math.random() * (3460 + -2960) + (-9327 + -3389 + 13716), 9 * -53 + -7646 + -8133 * -1)));
                    _0x5935ab--;
                  }
                }
              }
            }
          } else {
            console.log("获取任务失败！");
            continue;
          }
          $.xcr = -4595 + 4564 * -1 + 9160;
          await bdy_0x2ad74b();
          if ($.remainchance > 9784 + -4510 * -2 + -18804) {
            $.log("\n开始抽奖...");
            for (let _0x126b64 = -5323 + -1 * 8974 + 14297; _0x126b64 < $.remainchance; _0x126b64++) {
              $.log("第" + (_0x126b64 + (-232 + 4496 + 21 * -203)) + "次抽奖：");
              await bdy_0x22f7d8();
              await $.wait(parseInt(Math.random() * (263 + -8063 * 1 + -160 * -55) + (6790 + 31 * -269 + 2549), 3885 + 1 * -2249 + -1626));
            }
          }
          await $.wait(parseInt(Math.random() * (2598 + -2779 * -2 + -7156) + (287 * -17 + 3 * -2411 + 13612), -2232 + 7810 + -48 * 116));
        }
      }
    }
  }
  bdy_0x39108a;
})().catch(_0xadbd79 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0xadbd79 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x2ad74b() {
  let _0x391309 = {
      linkId: $.linkId,
      taskId: "",
      inviter: "",
      inJdApp: true
    },
    _0x23b42f = {
      appId: "b7d17",
      functionId: "superLeagueHome",
      body: _0x391309,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[-9215 * 1 + 5004 + 4213],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x391309 = await bdy_0x197df5.getbody(_0x23b42f);
  if (!_0x391309) {
    return;
  }
  return new Promise(async _0x5b4e8f => {
    $.post(bdy_0x5ee1d7(_0x391309), async (_0x3d0c6d, _0x575e50, _0x1c0019) => {
      try {
        if (_0x3d0c6d) {
          console.log("" + JSON.stringify(_0x3d0c6d));
          console.log(" API请求失败，请检查网路重试");
        } else {
          {
            _0x1c0019 = JSON.parse(_0x1c0019);
            if (_0x1c0019.code == 1 * -8147 + 3486 + -59 * -79) {
              {
                $.remainchance = _0x1c0019.data.remainTimes || -24 * -31 + -602 + -142 * 1;
                bdy_0xe8af08.push(_0x1c0019.data.userCode);
              }
            } else {
              console.log(_0x1c0019.errMsg);
            }
          }
        }
      } catch (_0x24e19e) {
        {
          $.logErr(_0x24e19e, _0x575e50);
        }
      } finally {
        _0x5b4e8f(_0x1c0019);
      }
    });
  });
}
async function bdy_0x4cca2a(_0x8fc6da) {
  let _0x2a8aac = {
      linkId: $.linkId,
      taskId: 5144,
      inviter: _0x8fc6da,
      inJdApp: true
    },
    _0x602d72 = {
      appId: "b7d17",
      functionId: "superLeagueHome",
      body: _0x2a8aac,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[4825 + -1761 + -2 * 1531],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x2a8aac = await bdy_0x197df5.getbody(_0x602d72);
  if (!_0x2a8aac) {
    return;
  }
  return new Promise(async _0xeee7d4 => {
    $.post(bdy_0x5ee1d7(_0x2a8aac), async (_0x4f7c5b, _0x1408af, _0x1b3b7e) => {
      {
        try {
          _0x4f7c5b ? (console.log("" + JSON.stringify(_0x4f7c5b)), console.log(" API请求失败，请检查网路重试")) : (_0x1b3b7e = JSON.parse(_0x1b3b7e), _0x1b3b7e.code == -1845 + -98 + 1943 ? $.remainchance = _0x1b3b7e.data.remainTimes || -2333 + -8005 + 10338 : console.log(_0x1b3b7e.errMsg));
        } catch (_0x5c87dd) {
          $.logErr(_0x5c87dd, _0x1408af);
        } finally {
          _0xeee7d4(_0x1b3b7e);
        }
      }
    });
  });
}
async function bdy_0x3ef191() {
  let _0x556938 = {
    url: "https://api.m.jd.com/userFollow",
    body: "appid=jd-super-market&t=" + Date.now() + "&functionId=userFollow&client=m&body=%7B%22pin%22%3A%22" + encodeURIComponent($.UserName) + "%22%2C%22type%22%3A%220%22%2C%22businessId%22%3A1%2C%22themeId%22%3A127%2C%22babelChannel%22%3A%22ttt9%22%2C%22isJdApp%22%3A%221%22%2C%22isWx%22%3A%220%22%7D",
    headers: {
      Host: "api.m.jd.com",
      Origin: "https://pro.m.jd.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      Cookie: bdy_0x1a4005
    }
  };
  return new Promise(async _0x225720 => {
    $.post(_0x556938, async (_0x11e8bb, _0x3c21a9, _0x4b2f9f) => {
      {
        try {
          if (_0x11e8bb) {
            console.log("" + JSON.stringify(_0x11e8bb));
            console.log(" API请求失败，请检查网路重试");
          } else {
            _0x4b2f9f = JSON.parse(_0x4b2f9f);
            !(_0x4b2f9f.code == -5 * -1055 + 1752 + -7027);
          }
        } catch (_0x135eb8) {
          $.logErr(_0x135eb8, _0x3c21a9);
        } finally {
          _0x225720(_0x4b2f9f);
        }
      }
    });
  });
}
async function bdy_0xfc1185() {
  let _0x3804db = "";
  return new Promise(async _0x70a47d => {
    $.post(bdy_0x5ee1d7("functionId=apTaskList&body=%7B%22linkId%22%3A%22" + $.linkId + "%22%7D&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0"), async (_0x58674d, _0x5736d5, _0x5721b4) => {
      try {
        _0x58674d ? (console.log("" + JSON.stringify(_0x58674d)), console.log(" API请求失败，请检查网路重试")) : (_0x5721b4 = JSON.parse(_0x5721b4), _0x5721b4.code == 2419 + -16 * -320 + -7539 ? _0x3804db = _0x5721b4.data : console.log(_0x5721b4.errMsg));
      } catch (_0x19af40) {
        $.logErr(_0x19af40, _0x5736d5);
      } finally {
        _0x70a47d(_0x3804db);
      }
    });
  });
}
async function bdy_0x22f7d8() {
  let _0x49690c = {
      linkId: $.linkId
    },
    _0x581815 = {
      appId: "60dc4",
      functionId: "superLeagueLottery",
      body: _0x49690c,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[12692 + -12690],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  $.xcr == -9057 + 3204 + -1 * -5854 && ($.xcr = 3 * -1219 + -6679 * 1 + -38 * -272);
  _0x49690c = await bdy_0x197df5.getbody(_0x581815);
  if (!_0x49690c) {
    return;
  }
  return new Promise(async _0x3175b6 => {
    $.post(bdy_0x5ee1d7(_0x49690c), async (_0xbcb43c, _0x41ce48, _0x124f2e) => {
      try {
        {
          if (_0xbcb43c) {
            console.log("" + JSON.stringify(_0xbcb43c));
            console.log(" API请求失败，请检查网路重试");
          } else {
            _0x124f2e = JSON.parse(_0x124f2e);
            if (_0x124f2e.success) {
              if (_0x124f2e.data.prizeConfigName) {
                {
                  if (_0x124f2e.data.prizeConfigName.includes("超市卡")) {
                    console.log("----获得：" + _0x124f2e.data.prizeConfigName + " 🤑");
                    _0x124f2e.data.prizeConfigName === "50元超市卡" && (bdy_0x39108a += "[账号" + $.index + $.UserName + "]获得：  " + _0x124f2e.data.prizeConfigName + "\n");
                  } else {
                    if (_0x124f2e.data.prizeType == 3371 * -1 + -9530 + 12903) {
                      console.log("----获得：" + _0x124f2e.data.amount + " " + _0x124f2e.data.prizeConfigName + " 🧧 [" + _0x124f2e.data.endTime + "过期]");
                    } else {
                      if (_0x124f2e.data.prizeType == -8659 * -1 + 6545 + -5060 * 3) {
                        console.log("----获得：" + _0x124f2e.data.amount + " 奖票");
                      } else {
                        if (_0x124f2e.data.prizeType == 10064 + -10063) {
                          {
                            console.log("----获得：" + _0x124f2e.data.prizeConfigName + "[" + _0x124f2e.data.useLimit + "-" + _0x124f2e.data.amount + "]");
                          }
                        } else {
                          console.log("----获得：[" + _0x124f2e.data.prizeType + "] " + _0x124f2e.data.prizeConfigName + " " + _0x124f2e.data.codeDesc);
                        }
                      }
                    }
                  }
                }
              } else {
                console.log("----空气");
              }
            } else {
              console.log(_0x124f2e.errMsg);
            }
          }
        }
      } catch (_0x225627) {
        $.logErr(_0x225627, _0x41ce48);
      } finally {
        _0x3175b6();
      }
    });
  });
}
async function bdy_0x730d2d(_0x2ea971, _0x113d54, _0x2cf875) {
  let _0x1e8487 = {
      taskType: "" + _0x113d54,
      taskId: _0x2cf875,
      channel: 4,
      checkVersion: true,
      cityId: 0,
      provinceId: 0,
      countyId: 0,
      linkId: $.linkId,
      taskInsert: false,
      resourceType: null,
      itemId: "" + _0x2ea971
    },
    _0x5119a1 = {
      appId: "54ed7",
      functionId: "apsDoTask",
      body: _0x1e8487,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[5651 + -6328 + 679],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x1e8487 = await bdy_0x197df5.getbody(_0x5119a1);
  if (!_0x1e8487) {
    return;
  }
  return new Promise(async _0x172d41 => {
    {
      $.post(bdy_0x5ee1d7(_0x1e8487), async (_0x46a33a, _0x355bf0, _0x49e356) => {
        {
          try {
            _0x46a33a ? (console.log("" + JSON.stringify(_0x46a33a)), console.log(" API请求失败，请检查网路重试")) : (_0x49e356 = JSON.parse(_0x49e356), _0x49e356.code == -9285 * 1 + 7116 + 2169 ? $.log("任务成功，抽奖次数 +" + _0x49e356.data.awardInfo[-3 * -2693 + 1 * -3147 + -4932].factAwardNum) : console.log(_0x49e356.errMsg));
          } catch (_0x30a3e7) {
            $.logErr(_0x30a3e7, _0x355bf0);
          } finally {
            _0x172d41();
          }
        }
      });
    }
  });
}
async function bdy_0x59a6cc(_0x5ce082, _0xba33b6) {
  let _0x490157 = "functionId=apTaskDetail&body={\"taskType\":\"" + _0x5ce082 + "\",\"taskId\":" + _0xba33b6 + ",\"channel\":4,\"checkVersion\":true,\"cityId\":0,\"provinceId\":0,\"countyId\":0,\"linkId\":\"" + $.linkId + "\"}&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.3.2&loginType=2&loginWQBiz=wegame&h5st=null";
  return new Promise(async _0x1ad3f8 => {
    {
      $.post(bdy_0x5ee1d7(_0x490157), async (_0x205ea5, _0x2d6503, _0x5a7a92) => {
        try {
          {
            _0x205ea5 ? (console.log("" + JSON.stringify(_0x205ea5)), console.log(" API请求失败，请检查网路重试")) : (_0x5a7a92 = JSON.parse(_0x5a7a92), _0x5a7a92.code == -1 * -1822 + -263 * -19 + -1 * 6819 ? _0x5a7a92 = _0x5a7a92.data.taskItemList : console.log(_0x5a7a92.errMsg));
          }
        } catch (_0x10c0eb) {
          $.logErr(_0x10c0eb, _0x2d6503);
        } finally {
          _0x1ad3f8(_0x5a7a92);
        }
      });
    }
  });
}
async function bdy_0x3dcf1d(_0x4888fa, _0x5be1dc) {
  let _0x1a535e = {
    linkId: $.linkId,
    taskId: _0x4888fa,
    itemId: encodeURIComponent(_0x5be1dc),
    channel: 4
  };
  _0x1a535e = "functionId=apStartTaskTime&body=" + JSON.stringify(_0x1a535e) + "&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=12.1.0";
  return new Promise(async _0x3d2222 => {
    $.post(bdy_0x5ee1d7(_0x1a535e), async (_0x4b1548, _0x551702, _0x5f209d) => {
      try {
        {
          if (_0x4b1548) {
            console.log("" + JSON.stringify(_0x4b1548));
            console.log(" API请求失败，请检查网路重试");
          } else {
            _0x5f209d = JSON.parse(_0x5f209d);
            if (!(_0x5f209d.code == -1 * -5386 + 1344 + -10 * 673)) {
              console.log(_0x5f209d.errMsg);
            }
          }
        }
      } catch (_0x464879) {
        $.logErr(_0x464879, _0x551702);
      } finally {
        _0x3d2222(_0x5f209d);
      }
    });
  });
}
async function bdy_0x33322b(_0x368e40) {
  let _0x5afa81 = {
    linkId: "l-yLvQMhLwCqYy6_nXUBgg",
    taskId: _0x368e40
  };
  _0x5afa81 = "functionId=apCheckAndResetTaskTime&body=" + JSON.stringify(_0x5afa81) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0";
  return new Promise(async _0x316c2f => {
    $.post(bdy_0x5ee1d7(_0x5afa81), async (_0x484153, _0x44e1e0, _0xb62e59) => {
      {
        try {
          {
            if (_0x484153) {
              {
                console.log("" + JSON.stringify(_0x484153));
                console.log(" API请求失败，请检查网路重试");
              }
            } else {
              {
                _0xb62e59 = JSON.parse(_0xb62e59);
                if (!(_0xb62e59.code == -4370 + 1058 + 3312)) {
                  {
                    console.log(_0xb62e59.errMsg);
                  }
                }
              }
            }
          }
        } catch (_0x220892) {
          $.logErr(_0x220892, _0x44e1e0);
        } finally {
          _0x316c2f(_0xb62e59);
        }
      }
    });
  });
}
async function bdy_0x40304e() {
  let _0x44e974 = {
      linkId: $.linkId
    },
    _0x3785bd = {
      appId: "ebecc",
      functionId: "apDoLimitTimeTask",
      body: _0x44e974,
      appid: "activities_platform",
      clientVersion: $.UA.split(";")[-134 * 44 + 7650 + -1752],
      client: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x44e974 = await bdy_0x197df5.getbody(_0x3785bd);
  if (!_0x44e974) {
    return;
  }
  return new Promise(async _0x2ec594 => {
    $.post(bdy_0x5ee1d7(_0x44e974), async (_0x10160d, _0x1f35b8, _0x1e8efc) => {
      {
        try {
          {
            if (_0x10160d) {
              console.log("" + JSON.stringify(_0x10160d));
              console.log(" API请求失败，请检查网路重试");
            } else {
              {
                _0x1e8efc = JSON.parse(_0x1e8efc);
                if (_0x1e8efc.code == 14018 + -14018) {
                  $.log("任务成功，抽奖次数 +" + _0x1e8efc.data.awardInfo[-1937 + 7174 + 5237 * -1].factAwardNum);
                } else {
                  {
                    console.log(_0x1e8efc.errMsg);
                  }
                }
              }
            }
          }
        } catch (_0x25f154) {
          $.logErr(_0x25f154, _0x1f35b8);
        } finally {
          _0x2ec594(_0x1e8efc);
        }
      }
    });
  });
}
async function bdy_0x44e2c2(_0x150f6c) {
  let _0x2a29cc = {
    linkId: $.linkId,
    taskId: String(_0x150f6c)
  };
  _0x2a29cc = "functionId=apCheckTaskTimeEnd&body=" + JSON.stringify(_0x2a29cc) + "&t=" + Date.now() + "&appid=activities_platform&client=android&clientVersion=12.1.0";
  return new Promise(async _0x447f3e => {
    $.post(bdy_0x5ee1d7(_0x2a29cc), async (_0x369648, _0x267f63, _0x3f7b8a) => {
      try {
        if (_0x369648) {
          console.log("" + JSON.stringify(_0x369648));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x3f7b8a = JSON.parse(_0x3f7b8a);
          if (!(_0x3f7b8a.code == -9447 + 422 * -12 + 14511)) {
            console.log(_0x3f7b8a.errMsg);
          }
        }
      } catch (_0x43be62) {
        $.logErr(_0x43be62, _0x267f63);
      } finally {
        {
          _0x447f3e(_0x3f7b8a);
        }
      }
    });
  });
}
function bdy_0x5ee1d7(_0x2af6a6) {
  const _0x57ca3b = {
    Host: "api.m.jd.com",
    Origin: "https://prodev.m.jd.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x1a4005
  };
  const _0x5a1248 = {
    url: "https://api.m.jd.com/api",
    body: _0x2af6a6,
    headers: _0x57ca3b
  };
  return _0x5a1248;
}
function bdy_0x2a3c01() {
  return new Promise(_0x21f801 => {
    const _0x40ee5e = {
      Cookie: bdy_0x1a4005,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x44b181 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x40ee5e,
      timeout: 10000
    };
    $.get(_0x44b181, (_0x643edd, _0x140da3, _0x5c2d66) => {
      {
        try {
          {
            if (_0x5c2d66) {
              _0x5c2d66 = JSON.parse(_0x5c2d66);
              if (!(_0x5c2d66.islogin === "1")) {
                _0x5c2d66.islogin === "0" && ($.isLogin = false);
              }
            }
          }
        } catch (_0xa738fb) {
          console.log(_0xa738fb);
        } finally {
          _0x21f801();
        }
      }
    });
  });
}
function bdy_0x2b0eb1() {
  return new Promise(_0x1803e4 => {
    {
      $.log("京东账号" + $.index + $.nickName + "\n" + bdy_0x39108a);
      _0x1803e4();
    }
  });
}
function bdy_0x690577(_0x29090e) {
  try {
    if (typeof JSON.parse(_0x29090e) == "object") {
      return true;
    }
  } catch (_0x2766e0) {
    {
      console.log(_0x2766e0);
      console.log("京东服务器访问数据为空，请检查自身设备网络情况");
      return false;
    }
  }
}
function bdy_0x2bae31(_0x226001) {
  if (typeof _0x226001 == "string") {
    try {
      {
        return JSON.parse(_0x226001);
      }
    } catch (_0x51a7f9) {
      {
        console.log(_0x51a7f9);
        $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
        return [];
      }
    }
  }
}

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) {const {execSync} = require('child_process');execSync('sleep 30');  return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { const {execSync} = require('child_process');execSync('sleep 30'); if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }