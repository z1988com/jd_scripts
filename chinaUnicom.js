/*
中国联通 v2.08

包含以下功能:
阅光宝盒, 首页签到, 立减金打卡, 阅读专区抽奖, 云盘抽奖, 联通祝福
支付日活动 (每个月26-28号)
618集卡活动 (5.31-6.20)

首页签到默认运行, 需要关闭的设置变量 chinaUnicomSign='false'
联通祝福默认运行, 需要关闭的设置变量 chinaUnicomLtzf='false'

定时每天两三次
需要在联通APP中选择退出登录-切换账号登录, 捉下面这个包
https://m.client.10010.com/mobileService/onLine.htm
把请求体(body)里面的token_online参数填到变量 chinaUnicomCookie 里, 多账号换行或&或@隔开:
export chinaUnicomCookie="a3e4c1ff25da2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
不会捉包的可以使用网页获取: https://service.leafxxx.win/unicom/login.html

cron: 0 0,7,20 * * *
const $ = new Env("中国联通");
*/
const _0x4c672b = _0x4a9430("中国联通"),
  _0x2bba68 = require("got"),
  _0x2bbc1d = require("path"),
  {
    exec: _0x526718
  } = require("child_process"),
  _0x368aa5 = require("crypto-js"),
  {
    CookieJar: _0x4484a5
  } = require("tough-cookie"),
  _0x24434b = "chinaUnicom",
  _0x55899c = ["\n", "&", "@"],
  _0x52f10b = [_0x24434b + "Cookie"],
  _0x159493 = process.env[_0x24434b + "Sign"] === "false",
  _0xedc529 = process.env[_0x24434b + "Ltzf"] === "false",
  _0x148eb1 = 12787 + -40769 + 77982,
  _0x1cbe1e = -1195 + -3 * -1916 + -4550;
const _0x2bad9c = 14319 + -14317 * 1 + 0.08000000000000007,
  _0x4a2c68 = "chinaUnicom",
  _0x2eca5f = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x1971e5 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x4a2c68 + ".json",
  _0x239ea0 = 10 * -83 + -171 * -12 + -1 * 1217,
  _0x469423 = "iphone_c@11.0503",
  _0x546817 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:" + _0x469423 + "}",
  _0x281cdf = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x3d9810 = "10000002",
  _0xa01453 = "7k1HcDL8RKvc",
  _0x49426e = "woreadst^&*12345",
  _0x4872bf = "10000006",
  _0x457ac0 = "yQsp9gUqv7qX",
  _0x20c0ff = "QzUzOUM2QTQ2MTc4",
  _0x18c84f = "16-Bytes--String",
  _0x3e622c = "225",
  _0x46b3a9 = "225",
  _0x127422 = "party",
  _0x5b10f9 = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x460d74 = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x558192 = "7cb46449-3b11-4414-bb49-cbd15525fb88",
  _0x3bb78f = "9",
  _0x3db78e = "1",
  _0x2f3d25 = "wocareMBHServiceLife1",
  _0x12fe67 = "beea1c7edf7c4989b2d3621c4255132f",
  _0x5f2a5c = "f4cd4ffeb5554586acf65ba7110534f5",
  _0x4e5ad9 = "0123456789",
  _0x4192c6 = "qwertyuiopasdfghjklzxcvbnm",
  _0x27f1a2 = process.env[_0x24434b + "Uuid"] || _0x4c672b.randomUuid(),
  _0x26ccd8 = [1059 + -4159 + -3109 * -1, 2830 + 1 * -274 + -2546, 6675 + -3 * -3068 + -15868, 8232 + -376 + -7844, -4289 + -619 * -1 + -127 * -29],
  _0x123877 = -2426 + -3824 + 7250,
  _0x5d9e11 = -8981 + 6018 + 7963,
  _0x392042 = "1001000003",
  _0x2a3518 = "100002",
  _0x353847 = "";
let _0x333e1b = [],
  _0x1051da = [],
  _0x188394 = [],
  _0x55391c = null,
  _0x5724ea = [7554 + -52 * -73 + 471 * -10, -50 * 185 + 2444 + 13447];
const _0x36a6fc = -1316 + -1 * -4015 + -2692,
  _0x52ff20 = -797 * 7 + 9959 + -4375,
  _0x4cffb4 = 9040 + -2746 + -1 * 6289;
const _0x5868aa = {
    ttlxj: "TTLXJ20210330",
    card_618: "NZJK618CJHD"
  },
  _0x166d60 = {
    name: "星座配对",
    id: 2
  };
const _0x5a4a00 = {
  name: "大转盘",
  id: 3
};
const _0x1b5ea0 = {
  name: "盲盒抽奖",
  id: 4
};
const _0x4376d8 = [_0x166d60, _0x5a4a00, _0x1b5ea0];
const _0x9c4c5b = {
  ZFGJBXXCY1: "空气",
  GJBNZJK19: "[6]",
  GJBNZJK20: "[1]",
  GJBNZJK21: "[8]",
  GJBNZJK22: "[狂]",
  GJBNZJK23: "[欢]"
};
const _0xe19164 = {
  "抽奖": "01",
  "首次进入": "02",
  "卡片合成": "03",
  "瓜分奖励": "04"
};
function _0x71b805(_0x6a8fe2, _0x1dd78a, _0x1e36ab, _0x3359f8, _0x2c8970, _0x16f3cf) {
  return _0x368aa5[_0x6a8fe2].encrypt(_0x368aa5.enc.Utf8.parse(_0x3359f8), _0x368aa5.enc.Utf8.parse(_0x2c8970), {
    mode: _0x368aa5.mode[_0x1dd78a],
    padding: _0x368aa5.pad[_0x1e36ab],
    iv: _0x368aa5.enc.Utf8.parse(_0x16f3cf)
  }).ciphertext.toString(_0x368aa5.enc.Hex);
}
function _0x26715b(_0x186221, _0x49588d, _0x1d0a7d, _0x469ed4, _0x25017e, _0x48835f) {
  return _0x368aa5[_0x186221].decrypt({
    ciphertext: _0x368aa5.enc.Hex.parse(_0x469ed4)
  }, _0x368aa5.enc.Utf8.parse(_0x25017e), {
    mode: _0x368aa5.mode[_0x49588d],
    padding: _0x368aa5.pad[_0x1d0a7d],
    iv: _0x368aa5.enc.Utf8.parse(_0x48835f)
  }).toString(_0x368aa5.enc.Utf8);
}
let _0x191c8c = 1 * -1237 + 5362 + -4125,
  _0x13c734 = 13874 + -13874;
function _0x169d23() {
  const _0x2ab377 = {
    fzVCB: function (_0x51dd75, _0x2057c2) {
      return _0x51dd75 || _0x2057c2;
    },
    psKPi: function (_0x4a3955, _0x1c533a, _0x33dc12) {
      return _0x4a3955(_0x1c533a, _0x33dc12);
    },
    mviKy: function (_0x5ea80d, _0x298bfe, _0x3bb082) {
      return _0x5ea80d(_0x298bfe, _0x3bb082);
    },
    KttST: function (_0x5abbf9, _0x21b93e) {
      return _0x5abbf9 == _0x21b93e;
    },
    GWvIY: function (_0x5bc8ac, _0x467415, _0x47dd6b) {
      return _0x5bc8ac(_0x467415, _0x47dd6b);
    },
    DNfSO: "SIGTERM",
    SbJJV: "timeout",
    JwjEk: "grep",
    VeSwI: "ps afx",
    XqxJR: function (_0x553d22) {
      return _0x553d22();
    }
  };
  _0x13c734 = -87 * -15 + -133 * -1 + -1 * 1437;
  process.on(_0x2ab377.DNfSO, () => {
    _0x13c734 = 10138 + -1448 * 7;
    process.exit(16949 + -16949);
  });
  const _0x1067e7 = _0x2bbc1d.basename(process.argv[2 * -4597 + -121 + 9316]),
    _0x485af0 = ["bash", _0x2ab377.SbJJV, _0x2ab377.JwjEk];
  let _0x58df8a = [_0x2ab377.VeSwI];
  _0x58df8a.push("grep " + _0x1067e7);
  _0x58df8a = _0x58df8a.concat(_0x485af0.map(_0x12a62f => "grep -v \"" + _0x12a62f + " \""));
  _0x58df8a.push("wc -l");
  const _0x5ef64e = _0x58df8a.join("|"),
    _0x3b614a = () => {
      _0x2ab377.mviKy(_0x526718, _0x5ef64e, (_0x3ebb06, _0x1bb818, _0x1b4324) => {
        if (_0x2ab377.fzVCB(_0x3ebb06, _0x1b4324)) {
          return;
        }
        _0x191c8c = _0x2ab377.psKPi(parseInt, _0x1bb818.trim(), -3363 + -37 * 81 + 6370);
      });
      if (_0x2ab377.KttST(_0x13c734, -89 * -1 + 6767 + -1371 * 5)) {
        _0x2ab377.GWvIY(setTimeout, _0x3b614a, 743 * -13 + -4243 + 15902);
      }
    };
  _0x2ab377.XqxJR(_0x3b614a);
}
class _0x1e60de {
  constructor() {
    this.index = _0x4c672b.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x1dc10b = {
      limit: 0
    };
    const _0x3e8908 = {
      Connection: "keep-alive"
    };
    const _0x7705b4 = {
      retry: _0x1dc10b,
      timeout: _0x148eb1,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x3e8908
    };
    this.got = _0x2bba68.extend(_0x7705b4);
    if (_0x13c734 == 44 * -90 + 5911 + -1951 * 1) {
      _0x169d23();
    }
  }
  log(_0x269c59, _0x301c3b = {}) {
    var _0x18a4a7 = "",
      _0x732521 = _0x4c672b.userCount.toString().length;
    if (this.index) {
      _0x18a4a7 += "账号[" + _0x4c672b.padStr(this.index, _0x732521) + "]";
    }
    if (this.name) {
      _0x18a4a7 += "[" + this.name + "]";
    }
    _0x4c672b.log(_0x18a4a7 + _0x269c59, _0x301c3b);
  }
  set_cookie(_0x2599f0, _0x6eb0f3, _0x312d79, _0x193e1e, _0x5c93b8 = {}) {
    this.cookieJar.setCookieSync(_0x2599f0 + "=" + _0x6eb0f3 + ("; Domain=") + _0x312d79 + ";", "" + _0x193e1e);
  }
  async request(_0x433feb) {
    const _0x290a0a = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x23df85 = ["TimeoutError"],
      _0x668150 = ["EPROTO"],
      _0x1a1818 = [];
    var _0x4a443f = null,
      _0x1a7b45 = -1 * -1862 + -2754 + -1 * -892,
      _0x3f4231 = _0x433feb.fn || _0x433feb.url;
    let _0x5e1d36 = _0x4c672b.get(_0x433feb, "valid_code", _0x1a1818);
    _0x433feb.method = _0x433feb?.["method"]?.["toUpperCase"]() || "GET";
    let _0x823091, _0x173cf5;
    while (_0x1a7b45 < _0x1cbe1e) {
      try {
        _0x1a7b45++;
        _0x823091 = "";
        _0x173cf5 = "";
        let _0x179710 = null,
          _0x58a24f = _0x433feb?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x148eb1,
          _0x143403 = false,
          _0x3d7559 = Math.max(this.index - (-9436 * 1 + 3677 + 5761), -101 * -83 + 7790 + -16173),
          _0x37401b = Math.min(Math.max(this.index - (-1302 + -2 * 563 + 2430), -164 * 57 + -7025 + 16374), 3443 + -1765 + 9 * -186),
          _0x123345 = Math.min(Math.max(this.index - (-8503 * 1 + 1439 + 7068), -5813 + 5493 * -1 + 11307), -71 * 102 + 4126 + -3121 * -1),
          _0x45246d = _0x3d7559 * _0x37401b * _0x123345 * _0x123345 * (5037 + -2939 + -1498),
          _0x315014 = _0x3d7559 * _0x37401b * _0x123345 * _0x123345 * (16376 + -12376),
          _0xcde5b2 = _0x45246d + Math.floor(Math.random() * _0x315014),
          _0x359a88 = _0x191c8c * (_0x191c8c - (-1 * 283 + 5245 + -4961)) * (-4955 + -4 * -1233 + 3023),
          _0x3a57f5 = (_0x191c8c - (6114 + 4726 * -2 + -477 * -7)) * (_0x191c8c - (7202 + 19 * -379)) * (2938 + -311 * -29 + 773 * -9),
          _0x307da0 = _0x359a88 + Math.floor(Math.random() * _0x3a57f5),
          _0x17e433 = Math.max(_0x4c672b.userCount - (1 * -2701 + 4698 + -665 * 3), -7226 + 6652 + -7 * -82),
          _0xeb7e25 = Math.max(_0x4c672b.userCount - (-7121 + -1 * -4971 + 2153), -4368 + -7210 + 11578),
          _0x36d37b = _0x17e433 * (536 * -17 + -6325 + 15837),
          _0x55e6b9 = _0xeb7e25 * (-39 * 11 + -193 * 50 + 11079),
          _0x2c7717 = _0x36d37b + Math.floor(Math.random() * _0x55e6b9),
          _0x2a8da8 = _0xcde5b2 + _0x307da0 + _0x2c7717;
        await _0x4c672b.wait(_0x2a8da8);
        await new Promise(async _0x57cb0a => {
          setTimeout(() => {
            _0x143403 = true;
            _0x57cb0a();
          }, _0x58a24f);
          await this.got(_0x433feb).then(_0x4366f3 => {
            _0x4a443f = _0x4366f3;
          }, _0x30aa0f => {
            _0x179710 = _0x30aa0f;
            _0x4a443f = _0x30aa0f.response;
            _0x823091 = _0x179710?.["code"] || "";
            _0x173cf5 = _0x179710?.["name"] || "";
          });
          _0x57cb0a();
        });
        if (_0x143403) {
          this.log("[" + _0x3f4231 + ("]请求超时(") + _0x58a24f / (1844 + -9559 + 8715) + ("秒)，重试第") + _0x1a7b45 + "次");
        } else {
          if (_0x668150.includes(_0x823091)) {
            this.log("[" + _0x3f4231 + ("]请求错误[") + _0x823091 + "][" + _0x173cf5 + "]");
            if (_0x179710?.["message"]) {
              console.log(_0x179710.message);
            }
            break;
          } else {
            if (_0x23df85.includes(_0x173cf5)) {
              this.log("[" + _0x3f4231 + ("]请求错误[") + _0x823091 + "][" + _0x173cf5 + "]，重试第" + _0x1a7b45 + "次");
            } else {
              if (_0x290a0a.includes(_0x823091)) {
                this.log("[" + _0x3f4231 + ("]请求错误[") + _0x823091 + "][" + _0x173cf5 + "]，重试第" + _0x1a7b45 + "次");
              } else {
                let _0x26ca58 = _0x4a443f?.["statusCode"] || "",
                  _0xeb6c6a = _0x26ca58 / (-1 * -8830 + -4599 + -153 * 27) | -351 * 22 + -2343 + 10065;
                if (_0x26ca58) {
                  _0xeb6c6a > -2 * -1735 + 1116 + -4583 && !_0x5e1d36.includes(_0x26ca58) && (_0x26ca58 ? this.log("请求[" + _0x3f4231 + "]返回[" + _0x26ca58 + "]") : this.log("请求[" + _0x3f4231 + "]错误[" + _0x823091 + "][" + _0x173cf5 + "]"));
                  if (_0xeb6c6a <= 12441 + 12437 * -1) {
                    break;
                  }
                } else {
                  this.log("请求[" + _0x3f4231 + "]错误[" + _0x823091 + "][" + _0x173cf5 + "]");
                }
              }
            }
          }
        }
      } catch (_0x3004fb) {
        _0x3004fb.name == "TimeoutError" ? this.log("[" + _0x3f4231 + ("]请求超时，重试第") + _0x1a7b45 + "次") : this.log("[" + _0x3f4231 + ("]请求错误(") + _0x3004fb.message + ")，重试第" + _0x1a7b45 + "次");
      }
    }
    if (_0x4a443f == null) {
      return Promise.resolve({
        statusCode: _0x823091 || -(7857 + -2914 + -4942),
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x50b741,
      headers: _0x590c9b,
      body: _0x1d560d
    } = _0x4a443f;
    if (_0x1d560d) {
      try {
        _0x1d560d = JSON.parse(_0x1d560d);
      } catch {}
    }
    const _0x44d302 = {
      statusCode: _0x50b741,
      headers: _0x590c9b,
      result: _0x1d560d
    };
    return Promise.resolve(_0x44d302);
  }
}
let _0x24046c = _0x1e60de;
try {
  let _0x12396e = require("./LocalBasic");
  _0x24046c = _0x12396e;
} catch {}
let _0x23c014 = new _0x24046c(_0x4c672b);
class _0x333e45 extends _0x24046c {
  constructor(_0xd93737) {
    const _0x407c9b = {
      WROXG: "chinaunicom-",
      DmhlF: function (_0x4d7cc5, _0x4de221) {
        return _0x4d7cc5 + _0x4de221;
      },
      CNjTW: "TOKENID_COOKIE",
      ryArg: "UNICOM_TOKENID",
      eDGTA: "sdkuuid"
    };
    super(_0x4c672b);
    this.cookieJar = new _0x4484a5();
    const _0x320a64 = {
      "User-Agent": _0x546817
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x320a64
    });
    let _0x52e0a3 = _0xd93737.split("#");
    this.token_online = _0x52e0a3[-4883 * -2 + 2217 * -2 + -5332];
    this.unicomTokenId = _0x4c672b.randomString(-9734 + -4447 * 1 + 14213);
    this.tokenId_cookie = _0x407c9b.WROXG + _0x4c672b.randomString(-3527 * 1 + 626 * -7 + 7941, _0x407c9b.DmhlF(_0x4e5ad9, _0x4192c6)).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 241 * -13 + -2883 * -3 + -4 * 1379;
    this.t_woread_draw = -9 * -757 + -2 * 1620 + -3573;
    this.need_read_rabbit = false;
    this.moonbox_task_record = {};
    this.moonbox_notified = [];
    this.set_cookie(_0x407c9b.CNjTW, this.tokenId_cookie);
    this.set_cookie(_0x407c9b.ryArg, this.unicomTokenId);
    this.set_cookie(_0x407c9b.eDGTA, this.unicomTokenId);
  }
  set_cookie(_0x693930, _0x1088e8, _0x52b165 = {}) {
    const _0x35ade9 = {
      clXCL: "10010.com",
      RyWee: "https://epay.10010.com"
    };
    let _0x44b4f4 = _0x52b165?.["domain"] || _0x35ade9.clXCL,
      _0x3b30c6 = _0x52b165?.["currentUrl"] || _0x35ade9.RyWee;
    super.set_cookie(_0x693930, _0x1088e8, _0x44b4f4, _0x3b30c6, _0x52b165);
  }
  get_bizchannelinfo() {
    const _0x2fbd5b = {
      bizChannelCode: _0x46b3a9,
      disriBiz: _0x127422,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x2ae285 = JSON.stringify(_0x2fbd5b);
    return _0x2ae285;
  }
  get_epay_authinfo() {
    const _0x31fa00 = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x31fa00);
  }
  get_flmf_data(_0x30396c = "welfareCenter") {
    const _0x1e4b94 = {
      sid: this.flmf_sid,
      actcode: _0x30396c
    };
    return _0x1e4b94;
  }
  encode_woread(_0x1fb841, _0x2edf26 = _0x49426e) {
    let _0x5d406d = _0x71b805("AES", "CBC", "Pkcs7", JSON.stringify(_0x1fb841), _0x2edf26, _0x18c84f);
    return Buffer.from(_0x5d406d, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x4c672b.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_woread_m_param() {
    return {
      timestamp: _0x4c672b.time("yyyyMMddhhmmss"),
      signtimestamp: Date.now(),
      source: _0x3bb78f,
      token: this.woread_token
    };
  }
  get_ltyp_sign_header(_0x535fbf) {
    let _0x4ebb05 = Date.now(),
      _0x334431 = Math.floor((-1 * 173260 + -39889 * -4 + 103703) * Math.random()) + (-6 * -26633 + -55205 + -4593),
      _0x26bfbe = _0x2a3518,
      _0x5ba8fb = _0x353847,
      _0x461c52 = _0x368aa5.MD5(_0x535fbf + _0x4ebb05 + _0x334431 + _0x26bfbe + _0x5ba8fb).toString();
    const _0x59dfc6 = {
      key: _0x535fbf,
      resTime: _0x4ebb05,
      reqSeq: _0x334431,
      channel: _0x26bfbe,
      version: _0x5ba8fb,
      sign: _0x461c52
    };
    return _0x59dfc6;
  }
  async onLine(_0x12cbf8 = {}) {
    const _0x1806a5 = {
      Gluni: "post",
      fKvKY: "yyyy-MM-dd hh:mm:ss",
      qFlCD: "iPhone",
      okIhw: "code",
      Oxncn: "6|4|2|5|3|0|1"
    };
    let _0x4d2878 = false;
    try {
      let _0x248c36 = {
          fn: "onLine",
          method: _0x1806a5.Gluni,
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x4c672b.time(_0x1806a5.fKvKY),
            appId: _0x281cdf,
            version: _0x469423,
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: _0x1806a5.qFlCD
          }
        },
        {
          result: _0x1b682a,
          statusCode: _0x152ca4
        } = await this.request(_0x248c36),
        _0x5655f9 = _0x4c672b.get(_0x1b682a, _0x1806a5.okIhw, _0x152ca4);
      if (_0x5655f9 == 19202 + -19202) {
        const _0x2df69f = _0x1806a5.Oxncn.split("|");
        let _0x20fbdb = -7 * -1282 + -9407 + -1 * -433;
        while (true) {
          switch (_0x2df69f[_0x20fbdb++]) {
            case "0":
              this.city = _0x1b682a?.["list"];
              continue;
            case "1":
              this.log("登录成功");
              continue;
            case "2":
              this.mobile = _0x1b682a?.["desmobile"];
              continue;
            case "3":
              this.ecs_token = _0x1b682a?.["ecs_token"];
              continue;
            case "4":
              this.valid = true;
              continue;
            case "5":
              this.name = _0x1b682a?.["desmobile"];
              continue;
            case "6":
              _0x4d2878 = true;
              continue;
          }
          break;
        }
      } else {
        this.valid = false;
        this.log("登录失败[" + _0x5655f9 + "]");
      }
    } catch (_0x158d45) {
      console.log(_0x158d45);
    } finally {
      return _0x4d2878;
    }
  }
  async openPlatLineNew(_0x214a77, _0x356709 = {}) {
    let _0x6e6d39 = {
      ticket: "",
      type: "",
      loc: ""
    };
    try {
      const _0x4299db = {
        to_url: _0x214a77
      };
      let _0x1c37d3 = {
          fn: "openPlatLineNew",
          method: "get",
          url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
          searchParams: _0x4299db
        },
        {
          headers: _0x1ad54b,
          statusCode: _0x3bb878
        } = await this.request(_0x1c37d3);
      if (_0x1ad54b?.["location"]) {
        let _0x4d5939 = new URL(_0x1ad54b.location),
          _0x5c9903 = _0x4d5939.searchParams.get("type") || "02",
          _0x10c474 = _0x4d5939.searchParams.get("ticket");
        !_0x10c474 && this.log("获取ticket失败");
        const _0x3aab7e = {
          loc: _0x1ad54b.location,
          ticket: _0x10c474,
          type: _0x5c9903
        };
        _0x6e6d39 = _0x3aab7e;
      } else {
        this.log("获取ticket失败[" + _0x3bb878 + "]");
      }
    } catch (_0x2f04bf) {
      console.log(_0x2f04bf);
    } finally {
      return _0x6e6d39;
    }
  }
  async gettaskip(_0x14bf80 = {}) {
    let _0x4d9a4f = _0x4c672b.randomString(-7057 + -1513 * -4 + 1037).toUpperCase();
    try {
      const _0x21c80b = {
        mobile: this.mobile,
        orderId: _0x4d9a4f
      };
      let _0x19b4ac = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x21c80b
      };
      await this.request(_0x19b4ac);
    } catch (_0x39c470) {
      console.log(_0x39c470);
    } finally {
      return _0x4d9a4f;
    }
  }
  async draw_28_queryChance(_0x4fee58 = {}) {
    try {
      let _0x21348e = {
          fn: "draw_28_queryChance",
          method: "post",
          url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
        },
        {
          result: _0x264d2c,
          statusCode: _0x1270ec
        } = await this.request(_0x21348e),
        _0x16eb3b = _0x4c672b.get(_0x264d2c, "status", _0x1270ec);
      if (_0x16eb3b == "0000") {
        let _0x16c184 = parseInt(_0x264d2c?.["data"]?.["allRemainTimes"] || 4509 + 2 * -1639 + -1 * 1231),
          _0x20fa50 = Math.min(_0x4cffb4, _0x16c184);
        this.log("28日五折日可以抽奖" + _0x16c184 + "次, 去抽" + _0x20fa50 + "次");
        let _0x3cbcdc = false;
        while (_0x20fa50-- > -7361 + -1 * 1941 + -2 * -4651) {
          if (_0x3cbcdc) {
            await _0x4c672b.wait(28110 + -20110 * 1);
          }
          _0x3cbcdc = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x10a2a1 = _0x264d2c?.["message"] || _0x264d2c?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x16eb3b + "]: " + _0x10a2a1);
      }
    } catch (_0x30dd28) {
      console.log(_0x30dd28);
    }
  }
  async draw_28_lottery(_0x30b1c2 = {}) {
    try {
      let _0x35834f = {
          fn: "draw_28_lottery",
          method: "post",
          url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
        },
        {
          result: _0x49d94d,
          statusCode: _0x1541b9
        } = await this.request(_0x35834f),
        _0x201a54 = _0x4c672b.get(_0x49d94d, "status", _0x1541b9);
      if (_0x201a54 == "0000") {
        let _0x2f5c79 = _0x4c672b.get(_0x49d94d?.["data"], "code", -(-29 * 94 + -4523 + 7250));
        if (_0x49d94d?.["data"]?.["uuid"]) {
          await _0x4c672b.wait(9 * -994 + 2332 + -8614 * -1);
          await this.draw_28_winningRecord(_0x49d94d.data.uuid);
        } else {
          let _0x385a86 = _0x49d94d?.["data"]?.["message"] || _0x49d94d?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x2f5c79 + "]: " + _0x385a86);
        }
      } else {
        let _0x10529b = _0x49d94d?.["message"] || _0x49d94d?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x201a54 + "]: " + _0x10529b);
      }
    } catch (_0x184f71) {
      console.log(_0x184f71);
    }
  }
  async draw_28_winningRecord(_0xefc971, _0x31e980 = {}) {
    try {
      const _0x1a1822 = {
        requestId: _0xefc971
      };
      let _0x49b45f = {
          fn: "draw_28_winningRecord",
          method: "post",
          url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
          form: _0x1a1822
        },
        {
          result: _0x555923,
          statusCode: _0x24354c
        } = await this.request(_0x49b45f),
        _0x4f5744 = _0x4c672b.get(_0x555923, "status", _0x24354c);
      if (_0x4f5744 == "0000") {
        let _0x1d3b22 = _0x4c672b.get(_0x555923?.["data"], "code", -(-3 * 3247 + -4965 + -7 * -2101));
        if (_0x1d3b22 == "0000") {
          const _0x38cfce = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x555923?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x38cfce);
        } else {
          let _0x1218f5 = _0x555923?.["data"]?.["message"] || _0x555923?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0x1d3b22 + "]: " + _0x1218f5);
        }
      } else {
        let _0x408868 = _0x555923?.["message"] || _0x555923?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x4f5744 + "]: " + _0x408868);
      }
    } catch (_0xfa9340) {
      console.log(_0xfa9340);
    }
  }
  async ttlxj_authorize(_0x11f5a4, _0x2307cf, _0x3da8d2, _0x10b4d4 = {}) {
    const _0xc30660 = {
      JlPFZ: "ttlxj_authorize",
      TveUZ: "post",
      iAKgq: "https://epay.10010.com",
      PBFcY: "rptid",
      BTrJp: "https://epay.10010.com/ci-mps-st-web/",
      NHGhM: "st_ticket",
      HVEoY: "app_sjyyt",
      sGeZk: "status",
      eUcAA: function (_0x1667b2, _0x474426) {
        return _0x1667b2 == _0x474426;
      }
    };
    try {
      let _0x388582 = {
          fn: _0xc30660.JlPFZ,
          method: _0xc30660.TveUZ,
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: {
            Origin: _0xc30660.iAKgq,
            Referer: _0x3da8d2
          },
          json: {
            response_type: _0xc30660.PBFcY,
            client_id: _0x460d74,
            redirect_uri: _0xc30660.BTrJp,
            login_hint: {
              credential_type: _0xc30660.NHGhM,
              credential: _0x11f5a4,
              st_type: _0x2307cf,
              force_logout: true,
              source: _0xc30660.HVEoY
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x4c672b.randomString(-23 * 255 + 491 * -17 + -569 * -25),
              trace_id: _0x4c672b.randomString(-7193 + -348 * 27 + 16621)
            }
          }
        },
        {
          result: _0x1ef66b
        } = await this.request(_0x388582),
        _0x58c1b9 = _0x4c672b.get(_0x1ef66b, _0xc30660.sGeZk, -(7925 + -4 * 1981));
      if (_0xc30660.eUcAA(_0x58c1b9, -5666 + -7546 + 13412)) {
        await this.ttlxj_authCheck();
      } else {
        let _0x29da44 = _0x1ef66b?.["message"] || _0x1ef66b?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x58c1b9 + "]: " + _0x29da44);
      }
    } catch (_0x588690) {
      console.log(_0x588690);
    }
  }
  async ttlxj_authCheck(_0x4f6022 = {}) {
    try {
      let _0x4d99f0 = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x3b9b60
        } = await this.request(_0x4d99f0),
        _0x225a71 = _0x4c672b.get(_0x3b9b60, "code", -(-7593 + -8083 * -1 + -1 * 489));
      if (_0x225a71 == "0000") {
        let {
          mobile: _0x3d95dc,
          sessionId: _0x4d0c33,
          tokenId: _0x49ad12,
          userId: _0x31f9ba
        } = _0x3b9b60?.["data"]?.["authInfo"];
        const _0x253112 = {
          sessionId: _0x4d0c33,
          tokenId: _0x49ad12,
          userId: _0x31f9ba
        };
        Object.assign(this, _0x253112);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x225a71 == "2101000100") {
          let _0x3c284b = _0x3b9b60?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x3c284b);
        } else {
          let _0x118393 = _0x3b9b60?.["msgInside"] || _0x3b9b60?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x225a71 + "]: " + _0x118393);
        }
      }
    } catch (_0x241235) {
      console.log(_0x241235);
    }
  }
  async ttlxj_login(_0x1b4633, _0x14425a = {}) {
    try {
      _0x1b4633 += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x3e622c + ("&bizChannelCode=") + _0x46b3a9;
      let _0x306538 = {
          fn: "ttlxj_login",
          method: "get",
          url: _0x1b4633
        },
        {
          headers: _0x3fd535,
          statusCode: _0x11cbd3
        } = await this.request(_0x306538);
      if (_0x3fd535?.["location"]) {
        let _0x48f551 = new URL(_0x3fd535.location);
        this.rptId = _0x48f551.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x11cbd3 + "]");
      }
    } catch (_0x5dbd52) {
      console.log(_0x5dbd52);
    }
  }
  async ttlxj_userDrawInfo(_0x37fbc0 = {}) {
    try {
      let _0x4d8335 = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x45a3ac
        } = await this.request(_0x4d8335),
        _0x5c07d0 = _0x4c672b.get(_0x45a3ac, "code", -(-5440 + 6827 + -231 * 6));
      if (_0x5c07d0 == "0000") {
        let _0x588d7e = _0x45a3ac?.["data"]?.["dayOfWeek"],
          _0x54a427 = "day" + _0x588d7e,
          _0x2e460c = _0x45a3ac?.["data"]?.[_0x54a427] == "1";
        const _0x21c565 = {
          notify: true
        };
        this.log("天天领现金今天" + (_0x2e460c ? "未" : "已") + "打卡", _0x21c565);
        if (_0x2e460c) {
          let _0x8aadbb = new Date().getDay();
          _0x8aadbb % (773 + -1 * 409 + 3 * -119) == 11 * -299 + 2397 + 892 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x164c15 = _0x45a3ac?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x5c07d0 + "]: " + _0x164c15);
      }
    } catch (_0xe34553) {
      console.log(_0xe34553);
    }
  }
  async ttlxj_unifyDrawNew(_0x58b44e, _0x1be412 = {}) {
    try {
      const _0x3a6ffd = {
        drawType: _0x58b44e,
        bizFrom: _0x3e622c,
        activityId: "TTLXJ20210330"
      };
      let _0x1d3a15 = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x3a6ffd
        },
        {
          result: _0x5dd24a
        } = await this.request(_0x1d3a15),
        _0x5783a6 = _0x4c672b.get(_0x5dd24a, "code", -(6914 + -2001 + 1 * -4912));
      if (_0x5783a6 == "0000" && _0x5dd24a?.["data"]?.["returnCode"] == 4 * -2048 + -1444 + -11 * -876) {
        let _0x46ba0e = _0x5dd24a?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x5dd24a?.["data"]?.["amount"]);
        const _0x59731c = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0x46ba0e, _0x59731c);
      } else {
        let _0x366f6b = _0x5dd24a?.["data"]?.["returnMsg"] || _0x5dd24a?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x5dd24a?.["data"]?.["returnCode"] || _0x5783a6) + "]: " + _0x366f6b);
      }
    } catch (_0x28cf1a) {
      console.log(_0x28cf1a);
    }
  }
  async ttlxj_h(_0x47d16c = {}) {
    try {
      const _0x2f3dc6 = {
        bizFrom: _0x3e622c,
        activityId: _0x5868aa.ttlxj,
        uid: _0x5b10f9
      };
      let _0x469865 = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: _0x2f3dc6
      };
      await this.request(_0x469865);
    } catch (_0x173381) {
      console.log(_0x173381);
    }
  }
  async ttlxj_queryAvailable(_0x23c9d2 = {}) {
    const _0x38ece1 = {
      yiTuy: function (_0xac0bdb, _0x6a86a0) {
        return _0xac0bdb == _0x6a86a0;
      },
      ddKjJ: function (_0x3d96f9, _0x2e1dbd) {
        return _0x3d96f9 < _0x2e1dbd;
      },
      EIgQu: function (_0x2b89d6, _0x4c8772) {
        return _0x2b89d6(_0x4c8772);
      },
      NlICz: "ttlxj_queryAvailable",
      QJwBh: "post",
      GISrE: "code",
      TjRjC: function (_0x813ab, _0x50aab1) {
        return _0x813ab == _0x50aab1;
      },
      ULzsJ: "0000",
      LcDwJ: function (_0x53dc9d, _0x45014e) {
        return _0x53dc9d / _0x45014e;
      },
      TEVNA: function (_0xe0a7b7, _0x482c81) {
        return _0xe0a7b7 + _0x482c81;
      },
      rqHSd: function (_0x55cd7d, _0x37fb6a) {
        return _0x55cd7d + _0x37fb6a;
      },
      dTylq: function (_0x33cd44, _0x47c2e9) {
        return _0x33cd44 + _0x47c2e9;
      },
      FGLWH: function (_0x21d812, _0x2cbbe3) {
        return _0x21d812 + _0x2cbbe3;
      },
      TNGvJ: " 00:00:00",
      UAunu: function (_0x11b7e3, _0x4e3aa0) {
        return _0x11b7e3 * _0x4e3aa0;
      }
    };
    try {
      let _0x2f3ee4 = {
          fn: _0x38ece1.NlICz,
          method: _0x38ece1.QJwBh,
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x351127
        } = await this.request(_0x2f3ee4),
        _0x22c4f9 = _0x4c672b.get(_0x351127, _0x38ece1.GISrE, -(12034 + -1 * 12033));
      if (_0x38ece1.TjRjC(_0x22c4f9, _0x38ece1.ULzsJ) && _0x351127?.["data"]?.["returnCode"] == -5078 + -774 + 5852) {
        let _0x11a97b = _0x351127?.["data"]?.["availableAmount"] || -1 * -8124 + -5239 + -2885;
        const _0x3dffbb = {
          notify: true
        };
        this.log("可用立减金: " + _0x38ece1.LcDwJ(_0x11a97b, 9362 + -1 * -1601 + 1 * -10863).toFixed(-13 * -397 + 2074 + -7233) + "元", _0x3dffbb);
        let _0x3a9ca0 = [],
          _0x4a77d6 = Date.now();
        for (let _0x22c5c5 of _0x351127?.["data"]?.["prizeList"]?.["filter"](_0xac5521 => _0xac5521.status == "A")) {
          let _0xdf42c9 = _0x22c5c5.endTime,
            _0x148118 = new Date(_0x38ece1.TEVNA(_0x38ece1.rqHSd(_0x38ece1.dTylq(_0x38ece1.FGLWH(_0xdf42c9.slice(-8870 + 83 * -73 + -14929 * -1, 11939 + -11935) + "-", _0xdf42c9.slice(-3346 + -3119 * -1 + -11 * -21, -4455 + -9090 + 13551)), "-"), _0xdf42c9.slice(6234 + 4 * -919 + -2552, -1717 * -3 + 864 + 6007 * -1)), _0x38ece1.TNGvJ)),
            _0xc3cc5f = _0x148118.getTime();
          if (_0x38ece1.ddKjJ(_0xc3cc5f - _0x4a77d6, _0x38ece1.UAunu(_0x38ece1.UAunu(_0x36a6fc * (-4455 + 3483 + 996) * (1 * -744 + 5662 + -4858), 49 * -81 + -8785 + 12814), 3533 + 17 * -149))) {
            let _0x24bd89 = _0x4c672b.time("yyyy-MM-dd", _0xc3cc5f);
            const _0x4d3dd0 = {
              timestamp: _0xc3cc5f,
              date: _0x24bd89,
              amount: _0x22c5c5.amount
            };
            _0x3a9ca0.push(_0x4d3dd0);
          }
        }
        if (_0x3a9ca0.length) {
          let _0xb33342 = {
              timestamp: 0
            },
            _0x296b80 = _0x3a9ca0.reduce(function (_0x11f322, _0x3cd209) {
              (_0x38ece1.yiTuy(_0xb33342.timestamp, 7129 + -7129 * 1) || _0x38ece1.ddKjJ(_0x3cd209.timestamp, _0xb33342.timestamp)) && (_0xb33342 = _0x3cd209);
              return _0x11f322 + _0x38ece1.EIgQu(parseFloat, _0x3cd209.amount);
            }, -818 + 2468 + -1650);
          const _0x5d32b7 = {
            notify: true
          };
          this.log(_0x36a6fc + ("天内过期立减金: ") + _0x296b80.toFixed(-1 * 7671 + 5 * -873 + 12038) + "元", _0x5d32b7);
          const _0x2dff48 = {
            notify: true
          };
          this.log("最早过期立减金: " + _0xb33342.amount + "元 -- " + _0xb33342.date + "过期", _0x2dff48);
        } else {
          const _0x437216 = {
            notify: true
          };
          this.log(_0x36a6fc + "天内没有过期的立减金", _0x437216);
        }
      } else {
        let _0x1a23ec = _0x351127?.["data"]?.["returnMsg"] || _0x351127?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x351127?.["data"]?.["returnCode"] || _0x22c4f9) + "]: " + _0x1a23ec);
      }
    } catch (_0x2d80a8) {
      console.log(_0x2d80a8);
    }
  }
  async epay_28_authCheck(_0x1d0fd8 = {}) {
    try {
      let _0x35ae82 = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x1d449e
        } = await this.request(_0x35ae82),
        _0x4e8f00 = _0x4c672b.get(_0x1d449e, "code", -(2660 + 1 * -9622 + 6963));
      if (_0x4e8f00 == "0000") {
        let {
          mobile: _0x4668a5,
          sessionId: _0xb2b5be,
          tokenId: _0x7c73d9,
          userId: _0x42df1c
        } = _0x1d449e?.["data"]?.["authInfo"];
        const _0x4d9ca1 = {
          sessionId: _0xb2b5be,
          tokenId: _0x7c73d9,
          userId: _0x42df1c
        };
        Object.assign(this, _0x4d9ca1);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x4e8f00 == "2101000100") {
          let _0x5892fa = _0x1d449e?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x5892fa);
        } else {
          let _0x1fb8e2 = _0x1d449e?.["msgInside"] || _0x1d449e?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x4e8f00 + "]: " + _0x1fb8e2);
        }
      }
    } catch (_0x268652) {
      console.log(_0x268652);
    }
  }
  async epay_28_login(_0x139155, _0x3721a9 = {}) {
    try {
      let _0x236f54 = _0x4c672b.time("yyyyMM") + "28ZFR";
      _0x139155 += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x236f54 + ("&bizFrom=225&bizChannelCode=225&channelType=WDQB");
      let _0x489347 = {
          fn: "epay_28_login",
          method: "get",
          url: _0x139155
        },
        {
          headers: _0x10b4ba,
          statusCode: _0x1c60e3
        } = await this.request(_0x489347);
      if (_0x10b4ba?.["location"]) {
        let _0xbf5a4c = new URL(_0x10b4ba.location);
        this.rptId = _0xbf5a4c.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x1c60e3 + "]");
      }
    } catch (_0x24e61c) {
      console.log(_0x24e61c);
    }
  }
  async epay_28_queryUserPage(_0x593a59 = {}) {
    try {
      let _0x52a117 = _0x4c672b.time("yyyyMM") + "28ZFR";
      const _0xa4a05 = {
        templateName: _0x52a117
      };
      let _0x2b8287 = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0xa4a05
        },
        {
          result: _0x316895
        } = await this.request(_0x2b8287),
        _0x2a5e2b = _0x4c672b.get(_0x316895, "code", -(3675 + -5 * -1058 + 249 * -36));
      if (_0x2a5e2b == "0000" && _0x316895?.["data"]?.["returnCode"] == -621 + 7622 + -7001) {
        for (let _0x29cca7 of _0x316895?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          _0x29cca7?.["rainbowUnitInfos"]?.[-6600 + -7332 + 13932]?.["unitActivityId"] && (await this.epay_28_unifyDraw(_0x29cca7.rainbowUnitInfos[2452 + -2452]));
          if (_0x29cca7?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x52a117, _0x29cca7.mouldName);
            break;
          }
        }
      } else {
        let _0x253476 = _0x316895?.["message"] || _0x316895?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x2a5e2b + "]: " + _0x253476);
      }
    } catch (_0x4d57b5) {
      console.log(_0x4d57b5);
    }
  }
  async epay_28_queryMiddleUnit(_0x5c5db5, _0x392918, _0x5f3e9d = {}) {
    try {
      const _0x52c66e = {
        activityId: _0x5c5db5,
        mouldName: _0x392918
      };
      let _0x272e95 = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x52c66e
        },
        {
          result: _0x3851a6
        } = await this.request(_0x272e95),
        _0x4b44ce = _0x4c672b.get(_0x3851a6, "code", -(1766 + -867 + -898));
      if (_0x4b44ce == "0000") {
        let _0xcad9a9 = _0x4c672b.time("dd");
        _0x3851a6?.["data"]?.[_0xcad9a9] == "1" ? this.log("联通支付日今日(" + _0xcad9a9 + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x5c5db5, _0x392918);
      } else {
        let _0x42d4bb = _0x3851a6?.["message"] || _0x3851a6?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x4b44ce + "]: " + _0x42d4bb);
      }
    } catch (_0x56f54c) {
      console.log(_0x56f54c);
    }
  }
  async epay_28_unifyDrawNew(_0x32455a, _0x3b23ed, _0x4b4480 = {}) {
    try {
      const _0x1af316 = {
        bizFrom: _0x3e622c,
        activityId: _0x32455a,
        mouldName: _0x3b23ed
      };
      let _0x1e4109 = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x1af316
        },
        {
          result: _0x39b4c5
        } = await this.request(_0x1e4109),
        _0x372dd5 = _0x4c672b.get(_0x39b4c5, "code", -(-9669 + 9201 + 469));
      if (_0x372dd5 == "0000" && _0x39b4c5?.["data"]?.["returnCode"] == 3013 + -6912 + -3899 * -1) {
        let _0xc69fe5 = _0x39b4c5?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x39b4c5?.["data"]?.["amount"]);
        const _0x5e238f = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0xc69fe5, _0x5e238f);
      } else {
        let _0x5dd5bd = _0x39b4c5?.["data"]?.["returnMsg"] || _0x39b4c5?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x39b4c5?.["data"]?.["returnCode"] || _0x372dd5) + "]: " + _0x5dd5bd);
      }
    } catch (_0xe6df9) {
      console.log(_0xe6df9);
    }
  }
  async epay_28_unifyDraw(_0x38a578, _0x5c8b17 = {}) {
    try {
      const _0x3bf056 = {
        activityId: _0x38a578.unitActivityId,
        isBigActivity: _0x38a578.isBigActivity,
        bigActivityId: _0x38a578.bigActivityId,
        bizFrom: _0x3e622c
      };
      let _0x59ed9a = {
          fn: "epay_28_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x3bf056
        },
        {
          result: _0x34ea6b
        } = await this.request(_0x59ed9a),
        _0x384c09 = _0x4c672b.get(_0x34ea6b, "code", -(-7815 + 8911 + 5 * -219));
      if (_0x384c09 == "0000" && _0x34ea6b?.["data"]?.["returnCode"] == 13326 + -13326) {
        const _0x3b6f17 = {
          notify: true
        };
        this.log("联通支付日抽奖: " + (_0x34ea6b?.["data"]?.["prizeName"] || ""), _0x3b6f17);
      } else {
        let _0x22895a = _0x34ea6b?.["data"]?.["returnMsg"] || _0x34ea6b?.["msg"] || "";
        this.log("联通支付日抽奖失败[" + (_0x34ea6b?.["data"]?.["returnCode"] || _0x384c09) + "]: " + _0x22895a);
      }
    } catch (_0x4e021a) {
      console.log(_0x4e021a);
    }
  }
  async appMonth_28_bind(_0x2ae53c, _0x28e539 = {}) {
    try {
      const _0x5e8346 = {
        shareCode: _0x2ae53c,
        cl: "WeChat"
      };
      let _0x4810fa = {
          fn: "appMonth_28_bind",
          method: "post",
          url: "https://activity.10010.com/AppMonthly/appMonth/bind",
          form: _0x5e8346,
          valid_code: [-1574 * -2 + 7580 + 23 * -449]
        },
        {
          result: _0x147b99
        } = await this.request(_0x4810fa);
    } catch (_0x24f7a3) {
      console.log(_0x24f7a3);
    }
  }
  async appMonth_28_queryChance(_0x29ac74 = {}) {
    try {
      let _0x38c5b2 = {
          fn: "appMonth_28_queryChance",
          method: "post",
          url: "https://activity.10010.com/AppMonthly/appMonth/queryChance"
        },
        {
          result: _0x5916d9
        } = await this.request(_0x38c5b2),
        _0x54ad44 = _0x4c672b.get(_0x5916d9, "status", -(9330 + -9395 + -2 * -33));
      if (_0x54ad44 == "0000") {
        let {
          allRemainTimes: _0x2c03ad,
          isUnicom: _0xb9f5d3
        } = _0x5916d9?.["data"];
        if (_0xb9f5d3) {
          let _0x4254ed = Math.min(_0x52ff20, _0x2c03ad);
          this.log("联通支付日可以开宝箱" + _0x2c03ad + "次, 去抽" + _0x4254ed + "次");
          while (_0x4254ed-- > -7419 + 2303 + 5116) {
            await this.appMonth_28_lottery();
          }
        }
      } else {
        let _0x5ac723 = _0x5916d9?.["msg"] || "";
        this.log("联通支付日查询开宝箱次数失败[" + _0x54ad44 + "]: " + _0x5ac723);
      }
    } catch (_0x38708c) {
      console.log(_0x38708c);
    }
  }
  async appMonth_28_lottery(_0x32fff2 = {}) {
    try {
      let _0x87bf1b = {
          fn: "appMonth_28_lottery",
          method: "post",
          url: "https://activity.10010.com/AppMonthly/appMonth/lottery"
        },
        {
          result: _0x360c8d
        } = await this.request(_0x87bf1b),
        _0x1faa78 = _0x4c672b.get(_0x360c8d, "status", -(3855 + -1 * 8306 + 4452));
      if (_0x1faa78 == "0000") {
        let {
          code: _0x4506d5,
          uuid: _0x217783
        } = _0x360c8d?.["data"];
        _0x217783 ? await this.appMonth_28_winningRecord(_0x217783) : this.log("联通支付日开宝箱失败[" + _0x4506d5 + "]");
      } else {
        let _0x1c765a = _0x360c8d?.["msg"] || "";
        this.log("联通支付日开宝箱失败[" + _0x1faa78 + "]: " + _0x1c765a);
      }
    } catch (_0x1e578f) {
      console.log(_0x1e578f);
    }
  }
  async appMonth_28_winningRecord(_0x49f5fb, _0x539daf = {}) {
    try {
      const _0x4e44da = {
        requestId: _0x49f5fb
      };
      let _0x376b8f = {
          fn: "appMonth_28_winningRecord",
          method: "post",
          url: "https://activity.10010.com/AppMonthly/appMonth/winningRecord",
          form: _0x4e44da
        },
        {
          result: _0x3de180
        } = await this.request(_0x376b8f),
        _0x51662d = _0x4c672b.get(_0x3de180, "status", -(2 * -2577 + 4831 + 324));
      if (_0x51662d == "0000") {
        let {
          code: _0x20040f,
          prizeName: _0x428599
        } = _0x3de180?.["data"];
        if (_0x20040f == "0000") {
          const _0x194d8b = {
            notify: true
          };
          this.log("联通支付日开宝箱: " + _0x428599, _0x194d8b);
        } else {
          let _0x4a0327 = _0x3de180?.["data"]?.["message"] || "";
          this.log("联通支付日开宝箱[" + _0x20040f + "]: " + _0x4a0327);
        }
      } else {
        let _0x507948 = _0x3de180?.["msg"] || "";
        this.log("联通支付日查询中奖奖品错误[" + _0x51662d + "]: " + _0x507948);
      }
    } catch (_0x12630e) {
      console.log(_0x12630e);
    }
  }
  async sign_getContinuous(_0x4a5ad2 = {}) {
    try {
      const _0x4c871f = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: {}
      };
      _0x4c871f.form.taskId = "";
      _0x4c871f.form.channel = "shouye";
      _0x4c871f.form.imei = "";
      let _0x16a9a5 = _0x4c871f,
        {
          result: _0x375bbc
        } = await this.request(_0x16a9a5),
        _0x390277 = _0x4c672b.get(_0x375bbc, "status", -(-3889 + 4203 + -313));
      if (_0x390277 == "0000") {
        let _0x2ddb99 = _0x375bbc?.["data"]?.["todaySigned"] || -1211 + 9183 + -3986 * 2;
        const _0x4e43ef = {
          notify: true
        };
        this.log("签到区今天" + (_0x2ddb99 == "1" ? "未" : "已") + "签到", _0x4e43ef);
        _0x2ddb99 == "1" && (await _0x4c672b.wait(11676 + -10676), await this.sign_daySign());
      } else {
        let _0x2d9f11 = _0x375bbc?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x390277 + "]: " + _0x2d9f11);
      }
    } catch (_0x1e4db0) {
      console.log(_0x1e4db0);
    }
  }
  async sign_daySign(_0x43121e = {}) {
    try {
      const _0x5c6a1c = {
        shareCl: "",
        shareCode: ""
      };
      let _0x65dc92 = {
          fn: "sign_daySign",
          method: "post",
          url: "https://act.10010.com/SigninApp/signin/daySign",
          form: _0x5c6a1c
        },
        {
          result: _0x45b961
        } = await this.request(_0x65dc92),
        _0x3dd664 = _0x4c672b.get(_0x45b961, "status", -(12030 + -12029));
      if (_0x3dd664 == "0000") {
        let {
          prizeName: _0x3544fb,
          redSignMessage: _0x5016bf
        } = _0x45b961?.["data"];
        const _0x49da7c = {
          notify: true
        };
        this.log("签到区签到成功: [" + _0x3544fb + "]" + _0x5016bf, _0x49da7c);
      } else {
        let _0x33d8bc = _0x45b961?.["msg"] || "";
        this.log("签到区签到失败[" + _0x3dd664 + "]: " + _0x33d8bc);
      }
    } catch (_0x31a630) {
      console.log(_0x31a630);
    }
  }
  async sign_queryBubbleTask(_0x2777e8 = {}) {
    try {
      let _0x1ab3ae = {
          fn: "sign_queryBubbleTask",
          method: "post",
          url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
        },
        {
          result: _0xff3076
        } = await this.request(_0x1ab3ae),
        _0x1e9efb = _0x4c672b.get(_0xff3076, "status", -(7921 + -2047 + -5873 * 1));
      if (_0x1e9efb == "0000") {
        for (let _0xe8b4f5 of _0xff3076?.["data"]?.["paramsList"]?.["filter"](_0xb17880 => _0xb17880.taskState == 7566 + -1513 * 5)) {
          let _0x411132 = await this.gettaskip();
          await this.sign_doTask(_0xe8b4f5, _0x411132);
        }
      } else {
        let _0xac9a0b = _0xff3076?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x1e9efb + "]: " + _0xac9a0b);
      }
    } catch (_0x24c5dc) {
      console.log(_0x24c5dc);
    }
  }
  async sign_doTask(_0x4cf867, _0x22748d, _0x5bbfdb = {}) {
    try {
      const _0x4a9479 = {
        id: _0x4cf867.id,
        orderId: _0x22748d,
        imei: "BB97982E-3F03-46D3-B904-819D626DF478",
        prizeType: _0x4cf867.rewardType,
        positionFlag: 0
      };
      let _0xa5d8b0 = {
          fn: "sign_doTask",
          method: "post",
          url: "https://act.10010.com/SigninApp/task/doTask",
          form: _0x4a9479
        },
        {
          result: _0x329766
        } = await this.request(_0xa5d8b0),
        _0x1d5e4d = _0x4c672b.get(_0x329766, "status", -(9785 + -9784));
      if (_0x1d5e4d == "0000") {
        this.log("完成任务[" + _0x4cf867.actName + "]获得: " + _0x329766?.["data"]?.["prizeCount"] + _0x329766?.["data"]?.["prizeName"]);
      } else {
        let _0x5cf326 = _0x329766?.["msg"] || "";
        this.log("完成任务[" + _0x4cf867.actName + "]失败[" + _0x1d5e4d + "]: " + _0x5cf326);
      }
    } catch (_0x4ad671) {
      console.log(_0x4ad671);
    }
  }
  async game_login(_0x5f500f, _0x639e7 = {}) {
    try {
      const _0x2730f4 = {
        identityType: "esToken",
        code: this.ecs_token,
        ticket: _0x5f500f,
        uuid: _0x27f1a2
      };
      const _0x204877 = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: {},
        json: _0x2730f4
      };
      _0x204877.headers.channelid = "GAMELTAPP_90005";
      let _0x4cc22d = _0x204877,
        {
          result: _0x206034
        } = await this.request(_0x4cc22d),
        _0xe387fd = _0x4c672b.get(_0x206034, "code", -(6134 + -14 * -98 + -79 * 95));
      if (_0xe387fd == 2444 + -1 * -58 + -2 * 1151) {
        this.game_token = _0x206034?.["data"]?.["access_token"];
        this.got = this.got.extend({
          headers: {
            Authorization: this.game_token
          }
        });
        await this.game_getMemberInfo();
        await this.game_signRecord();
        await this.game_lottery();
        await this.game_playSave();
        await this.game_taskList();
        await this.game_getMemberInfo();
        const _0x563fcb = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x563fcb);
      } else {
        let _0x1d6aa5 = _0x206034?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0xe387fd + "]: " + _0x1d6aa5);
      }
    } catch (_0x22daa6) {
      console.log(_0x22daa6);
    }
  }
  async game_getMemberInfo(_0x1119ca = {}) {
    try {
      let _0x1380c8 = {
          fn: "game_getMemberInfo",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
        },
        {
          result: _0x25b820
        } = await this.request(_0x1380c8),
        _0x4c45ab = _0x4c672b.get(_0x25b820, "code", -(-49 * 40 + 2633 + -672));
      if (_0x4c45ab == 1 * -11 + -6 * -1383 + -1 * 8087) {
        this.point = _0x25b820?.["data"]?.["userIntegral"];
      } else {
        let _0x31251d = _0x25b820?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x4c45ab + "]: " + _0x31251d);
      }
    } catch (_0x3a8d0c) {
      console.log(_0x3a8d0c);
    }
  }
  async game_signRecord(_0x47d803 = {}) {
    try {
      let _0x398039 = {
          fn: "game_signRecord",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/signRecord"
        },
        {
          result: _0x3d9d1c
        } = await this.request(_0x398039),
        _0x56bc7f = _0x4c672b.get(_0x3d9d1c, "code", -(-2 * -2962 + -2028 + -3895));
      if (_0x56bc7f == -197 * 17 + -43 * -223 + -6040) {
        for (let _0x48dbac of _0x3d9d1c?.["data"]) {
          if (_0x48dbac.now == -5768 + 5061 + 707) {
            continue;
          }
          this.log("联通畅游今天" + (_0x48dbac.signStatus == 5 * -1987 + -6690 + -1279 * -13 ? "未" : "已") + "签到");
          if (_0x48dbac.signStatus == -4030 + -2921 + -6953 * -1) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x4c5073 = _0x3d9d1c?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x56bc7f + "]: " + _0x4c5073);
      }
    } catch (_0x8f9b0b) {
      console.log(_0x8f9b0b);
    }
  }
  async game_signIn(_0x170c89 = {}) {
    try {
      let _0xe7c56e = {
          fn: "game_signIn",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/signIn"
        },
        {
          result: _0x1f4677
        } = await this.request(_0xe7c56e),
        _0x478093 = _0x4c672b.get(_0x1f4677, "code", -(8842 + -1 * 8165 + -52 * 13));
      if (_0x478093 == 11601 + -11401) {
        this.log("联通畅游签到成功");
      } else {
        let _0x2b40f2 = _0x1f4677?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0x478093 + "]: " + _0x2b40f2);
      }
    } catch (_0xfac145) {
      console.log(_0xfac145);
    }
  }
  async game_checkSlider(_0x5ca38c = {}) {
    let _0x3c3f88 = false;
    try {
      const _0x536f3f = {
        xPos: 234
      };
      let _0x209ec8 = {
          fn: "game_checkSlider",
          method: "post",
          url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
          searchParams: _0x536f3f
        },
        {
          result: _0x31be4b
        } = await this.request(_0x209ec8),
        _0x29af87 = _0x4c672b.get(_0x31be4b, "code", -(9763 + -9762));
      if (_0x29af87 == 3765 + -115 * 31) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x661bc2 = _0x31be4b?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x29af87 + "]: " + _0x661bc2);
      }
    } catch (_0x441ee4) {
      console.log(_0x441ee4);
    } finally {
      return _0x3c3f88;
    }
  }
  async game_lottery(_0x12d231 = {}) {
    try {
      let _0x597145 = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x4c672b.get(_0x12d231, "id", -1931 * 5 + 8513 + 1143)
          }
        },
        {
          result: _0x375b1d
        } = await this.request(_0x597145),
        _0x44ca98 = _0x4c672b.get(_0x375b1d, "code", -(-3 * -2927 + -5363 * -1 + 14143 * -1));
      if (_0x44ca98 == -178 * 44 + 2228 * -1 + 10260) {
        const _0x46c4cd = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x375b1d?.["data"]?.["productName"], _0x46c4cd);
      } else {
        let _0x172e69 = _0x375b1d?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x44ca98 + "]: " + _0x172e69);
      }
    } catch (_0x5cc5c9) {
      console.log(_0x5cc5c9);
    }
  }
  async game_taskList(_0x38dc2c = {}) {
    try {
      let _0x3dd85a = {
          fn: "game_taskList",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/task/list"
        },
        {
          result: _0x24a55d
        } = await this.request(_0x3dd85a),
        _0x641976 = _0x4c672b.get(_0x24a55d, "code", -(-293 * -2 + -5660 + 5075));
      if (_0x641976 == 3273 + -7 + -3066) {
        for (let _0x2b6e2e of _0x24a55d?.["data"]) {
          switch (_0x2b6e2e.receiveStatus) {
            case -1204 + -5805 + 7009:
              break;
            case 4 * -431 + 3331 + -1606:
              await this.game_taskReceive(_0x2b6e2e);
              break;
            case -6945 + 7093 + -146 * 1:
              break;
            default:
              _0x4c672b.log("任务[" + _0x2b6e2e.taskName + ("]未知状态[") + _0x2b6e2e.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0x3e9a0f = _0x24a55d?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x641976 + "]: " + _0x3e9a0f);
      }
    } catch (_0x169b29) {
      console.log(_0x169b29);
    }
  }
  async game_taskReceive(_0xe2b155, _0x5671ea = {}) {
    try {
      const _0x591582 = {
        productId: _0xe2b155.productId,
        taskId: _0xe2b155.id
      };
      let _0x5f827d = {
          fn: "game_taskReceive",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/task/receive",
          searchParams: _0x591582
        },
        {
          result: _0x2f8fb3
        } = await this.request(_0x5f827d),
        _0x288264 = _0x4c672b.get(_0x2f8fb3, "code", -(-9432 + -9999 + 19432));
      if (_0x288264 == -6442 + -9165 + 15807) {
        this.log("领取任务[" + _0xe2b155.taskName + "]奖励成功");
      } else {
        let _0x261128 = _0x2f8fb3?.["msg"] || "";
        this.log("领取任务[" + _0xe2b155.taskName + ("]奖励失败[") + _0x288264 + "]: " + _0x261128);
      }
    } catch (_0x33f03b) {
      console.log(_0x33f03b);
    }
  }
  async game_playSave(_0x2b6d36 = {}) {
    try {
      let _0x1b839f = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x4c672b.randomString(-3935 + -8919 + 12856, "0123456789")
          }
        },
        {
          result: _0x435b34
        } = await this.request(_0x1b839f),
        _0x405dad = _0x4c672b.get(_0x435b34, "code", -(8966 + -1 * 8965));
      if (!(_0x405dad == -1637 * 3 + 3 * -519 + -4 * -1667)) {
        let _0x407e03 = _0x435b34?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x405dad + "]: " + _0x407e03);
      }
    } catch (_0x10eb8a) {
      console.log(_0x10eb8a);
    }
  }
  async flmf_login(_0x3a709c, _0x3e346c = {}) {
    try {
      let _0x2ae0c4 = {
          fn: "flmf_login",
          method: "get",
          url: _0x3a709c
        },
        {
          headers: _0x44fb4d,
          statusCode: _0x2923d9
        } = await this.request(_0x2ae0c4);
      if (_0x44fb4d?.["location"]) {
        let _0x366f8a = new URL(_0x44fb4d.location);
        this.flmf_sid = _0x366f8a.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x2923d9 + "]");
      }
    } catch (_0x27766a) {
      console.log(_0x27766a);
    }
  }
  async flmf_signInInit(_0x5dabbc = {}) {
    try {
      let _0x2014b6 = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x41327b
        } = await this.request(_0x2014b6),
        _0x2732b9 = _0x4c672b.get(_0x41327b, "resultCode", -(-3172 + 37 * -177 + 9722));
      if (_0x2732b9 == "0000") {
        this.log("福利魔方今天" + (_0x41327b?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x41327b?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x41327b?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0x1a8187 = _0x41327b?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x2732b9 + "]: " + _0x1a8187);
      }
    } catch (_0x517caa) {
      console.log(_0x517caa);
    }
  }
  async flmf_signIn(_0x51ae1e = {}) {
    try {
      let _0x3128b3 = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x4485f1
        } = await this.request(_0x3128b3),
        _0x1564ca = _0x4c672b.get(_0x4485f1, "resultCode", -(8877 + -3270 + -5606));
      if (_0x1564ca == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0xfa6532 = _0x4485f1?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0x1564ca + "]: " + _0xfa6532);
      }
    } catch (_0x22c453) {
      console.log(_0x22c453);
    }
  }
  async flmf_taskList(_0x47a943 = {}) {
    try {
      let _0x3b119a = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x1be38d
        } = await this.request(_0x3b119a),
        _0x56b419 = _0x4c672b.get(_0x1be38d, "resultCode", -(-2 * 1312 + 3981 + -1356));
      if (_0x56b419 == "0000") {
        for (let _0x21c855 of _0x1be38d?.["data"]?.["taskInfoList"]) {
          for (let _0x3ddbd8 of _0x21c855.taskInfoList.filter(_0x539de9 => !_0x539de9.done)) {
            for (let _0xcf0709 = _0x3ddbd8.hascount; _0xcf0709 < _0x3ddbd8.count; _0xcf0709++) {
              await this.flmf_gogLance(_0x3ddbd8.id);
            }
          }
        }
      } else {
        let _0x3affb1 = _0x1be38d?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x56b419 + "]: " + _0x3affb1);
      }
    } catch (_0x172024) {
      console.log(_0x172024);
    }
  }
  async flmf_scanTask() {
    for (let _0xa11d9d of _0x26ccd8) {
      await this.flmf_gogLance(_0xa11d9d);
    }
  }
  async flmf_gogLance(_0x3534eb, _0x4a0142 = {}) {
    try {
      let _0x1d2f2 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x3534eb,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x422380
        } = await this.request(_0x1d2f2);
      await _0x4c672b.wait_gap_interval(this.t_flmf_task, _0x123877);
      let _0x213f2c = _0x4c672b.get(_0x422380, "resultCode", -(6058 + 2019 * -3));
      this.t_flmf_task = Date.now();
      if (_0x213f2c == "0000") {
        this.log("完成任务[" + _0x3534eb + "]成功");
      } else {
        let _0x2aacea = _0x422380?.["resultMsg"] || "";
        this.log("完成任务[" + _0x3534eb + "]失败[" + _0x213f2c + "]: " + _0x2aacea);
      }
    } catch (_0x229114) {
      console.log(_0x229114);
    }
  }
  async woread_api(_0x34880c) {
    let _0x1db761 = await this.request(_0x4c672b.copy(_0x34880c)),
      _0x3e48ad = _0x1db761?.["result"]?.["message"] || "";
    _0x3e48ad?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x1db761 = await this.request(_0x4c672b.copy(_0x34880c)));
    return _0x1db761;
  }
  switch_woread_token(_0x56b38b) {
    const _0x2c6986 = {
      accesstoken: _0x56b38b
    };
    const _0x14d38a = {
      headers: _0x2c6986
    };
    this.got = this.got.extend(_0x14d38a);
  }
  async woread_auth(_0x7b7459 = {}) {
    let _0x547982 = false;
    try {
      let _0x43ac40 = _0x4c672b.time("yyyyMMddhhmmss");
      const _0x371d90 = {
        timestamp: _0x43ac40
      };
      let _0x2b69e1 = this.encode_woread(_0x371d90),
        _0x281e8f = Date.now().toString(),
        _0x2c469e = _0x368aa5.MD5(_0x3d9810 + _0xa01453 + _0x281e8f).toString();
      const _0x40e0b0 = {
        sign: _0x2b69e1
      };
      let _0x380868 = {
          fn: "woread_auth",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x3d9810 + "/" + _0x281e8f + "/" + _0x2c469e,
          json: _0x40e0b0
        },
        {
          result: _0x10c758
        } = await this.request(_0x380868),
        _0x1540b2 = _0x4c672b.get(_0x10c758, "code", -(1824 + 1109 * -5 + 3722));
      if (_0x1540b2 == "0000") {
        _0x547982 = true;
        this.woread_accesstoken = _0x10c758?.["data"]?.["accesstoken"];
        this.switch_woread_token(this.woread_accesstoken);
      } else {
        let _0x2c8b85 = _0x10c758?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x1540b2 + "]: " + _0x2c8b85);
      }
    } catch (_0x3f8fdd) {
      console.log(_0x3f8fdd);
    } finally {
      return _0x547982;
    }
  }
  async woread_login(_0x26d717 = {}) {
    let _0x5c0c95 = false;
    try {
      let _0x10a4cc = {
          phone: this.mobile,
          timestamp: _0x4c672b.time("yyyyMMddhhmmss")
        },
        _0x544576 = this.encode_woread(_0x10a4cc);
      const _0x148f49 = {
        sign: _0x544576
      };
      let _0x4f9d64 = {
          fn: "woread_login",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
          json: _0x148f49
        },
        {
          result: _0x28bf76
        } = await this.request(_0x4f9d64),
        _0x5e778d = _0x4c672b.get(_0x28bf76, "code", -(1 * -403 + -7364 + 7768));
      if (_0x5e778d == "0000") {
        _0x5c0c95 = true;
        let {
          userid: _0x58fe9a,
          userindex: _0x42fa05,
          token: _0x346b8f,
          verifycode: _0xdef795
        } = _0x28bf76?.["data"];
        this.woread_token = _0x346b8f;
        this.woread_verifycode = _0xdef795;
        const _0x3bda74 = {
          woread_userid: _0x58fe9a,
          woread_userindex: _0x42fa05,
          woread_token: _0x346b8f,
          woread_verifycode: _0xdef795
        };
        Object.assign(this, _0x3bda74);
      } else {
        let _0x32f4f4 = _0x28bf76?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x5e778d + "]: " + _0x32f4f4);
      }
    } catch (_0x315b1a) {
      console.log(_0x315b1a);
    } finally {
      return _0x5c0c95;
    }
  }
  async woread_m_auth(_0x50ab9e = {}) {
    let _0x1d0afe = false;
    try {
      let _0x45205b = Date.now().toString(),
        _0x2cc763 = _0x368aa5.MD5(_0x4872bf + _0x457ac0 + _0x45205b).toString();
      let _0x33aba2 = {
          fn: "woread_auth",
          method: "get",
          url: "https:///m.woread.com.cn/api/union/app/auth/" + _0x4872bf + "/" + _0x45205b + "/" + _0x2cc763
        },
        {
          result: _0x531e72
        } = await this.request(_0x33aba2),
        _0x1f1163 = _0x4c672b.get(_0x531e72, "code", -(9736 + -9735));
      if (_0x1f1163 == "0000") {
        _0x1d0afe = true;
        this.woread_m_accesstoken = _0x531e72?.["data"]?.["accesstoken"];
        this.switch_woread_token(this.woread_m_accesstoken);
      } else {
        let _0x2ce2e6 = _0x531e72?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x1f1163 + "]: " + _0x2ce2e6);
      }
    } catch (_0x53fed2) {
      console.log(_0x53fed2);
    } finally {
      return _0x1d0afe;
    }
  }
  async woread_m_login(_0x1f5f78 = {}) {
    let _0x1dc636 = false;
    try {
      let _0x55a5ea = {
          userid: this.woread_userid,
          token: this.woread_token,
          timestamp: Date.now()
        },
        _0x2debbf = {
          userData: Buffer.from(JSON.stringify(_0x55a5ea), "utf-8").toString("base64"),
          ...this.get_woread_m_param()
        };
      delete _0x2debbf.token;
      let _0x25c9d8 = this.encode_woread(_0x2debbf, _0x20c0ff);
      const _0x87c20b = {
        sign: _0x25c9d8
      };
      let _0x445ffa = {
          fn: "woread_login",
          method: "post",
          url: "https://m.woread.com.cn/api/union/user/thirdPartyFreeLogin",
          json: _0x87c20b
        },
        {
          result: _0x253805
        } = await this.request(_0x445ffa),
        _0x2410c4 = _0x4c672b.get(_0x253805, "code", -(43 * -148 + -5479 * 1 + 11844));
      if (_0x2410c4 == "0000") {
        _0x1dc636 = true;
      } else {
        let _0xab03b2 = _0x253805?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x2410c4 + "]: " + _0xab03b2);
      }
    } catch (_0x5b576c) {
      console.log(_0x5b576c);
    } finally {
      return _0x1dc636;
    }
  }
  async woread_getSeeVideoAddNumber(_0x12ab92, _0x486335 = {}) {
    try {
      let _0x3140d3 = {
          activityIndex: _0x12ab92,
          ...this.get_woread_param()
        },
        _0x8e1656 = this.encode_woread(_0x3140d3);
      const _0xce314c = {
        sign: _0x8e1656
      };
      let _0xb96f4b = {
          fn: "woread_getSeeVideoAddNumber",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
          json: _0xce314c
        },
        {
          result: _0x5028e4
        } = await this.woread_api(_0xb96f4b),
        _0x3c20dc = _0x4c672b.get(_0x5028e4, "code", -(83 * -1 + 65 * -22 + 1514));
      if (_0x3c20dc == "0000") {
        _0x5028e4?.["data"] == -(-559 * -3 + -623 * -11 + 1 * -8529) && (await this.woread_addUserSeeVideo(_0x12ab92));
      } else {
        let _0x366c05 = _0x5028e4?.["message"] || "";
        this.log("阅读活动[" + _0x12ab92 + ("]查询抽奖视频失败[") + _0x3c20dc + "]: " + _0x366c05);
      }
    } catch (_0x3cd6e0) {
      console.log(_0x3cd6e0);
    }
  }
  async woread_addUserSeeVideo(_0x27e075, _0x5be693 = {}) {
    try {
      let _0x1b56c7 = _0x5be693.num || 8705 + -7413 * 1 + 1 * -1287,
        _0x211340 = {
          activityIndex: _0x27e075,
          num: _0x1b56c7,
          ...this.get_woread_param()
        },
        _0x530fc3 = this.encode_woread(_0x211340);
      const _0x29270d = {
        sign: _0x530fc3
      };
      let _0x2a3f7d = {
          fn: "woread_addUserSeeVideo",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
          json: _0x29270d
        },
        {
          result: _0x4521b8
        } = await this.woread_api(_0x2a3f7d),
        _0x2480f3 = _0x4c672b.get(_0x4521b8, "code", -(7572 + -9480 + -83 * -23));
      if (_0x2480f3 == "0000") {
        this.log("阅读活动[" + _0x27e075 + ("]看视频增加抽奖次数成功"));
      } else {
        let _0x4a4ae0 = _0x4521b8?.["message"] || "";
        this.log("阅读活动[" + _0x27e075 + ("]看视频增加抽奖次数失败[") + _0x2480f3 + "]: " + _0x4a4ae0);
      }
    } catch (_0x4b1856) {
      console.log(_0x4b1856);
    }
  }
  async woread_getActivityNumber(_0x5ba90a, _0x3cdf38 = {}) {
    try {
      let _0xb90653 = {
          activeIndex: _0x5ba90a,
          ...this.get_woread_param()
        },
        _0x437404 = this.encode_woread(_0xb90653);
      const _0x4b9c36 = {
        sign: _0x437404
      };
      let _0x3c6136 = {
          fn: "woread_getActivityNumber",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
          json: _0x4b9c36
        },
        {
          result: _0x4f72f1
        } = await this.woread_api(_0x3c6136),
        _0x1a6ca5 = _0x4c672b.get(_0x4f72f1, "code", -(-5981 + -531 + 6513));
      if (_0x1a6ca5 == "0000") {
        let _0x8a22f5 = _0x4f72f1?.["data"] || 7379 + 2 * -1388 + 4603 * -1;
        this.log("阅读活动[" + _0x5ba90a + "]可以抽奖" + _0x8a22f5 + "次");
        while (_0x8a22f5-- > -2077 + -998 * 2 + 4073) {
          await _0x4c672b.wait(8120 + -4961 * -1 + 1 * -8081);
          await this.woread_doDraw(_0x5ba90a);
        }
      } else {
        let _0x3842fa = _0x4f72f1?.["message"] || "";
        this.log("阅读活动[" + _0x5ba90a + ("]查询抽奖次数失败[") + _0x1a6ca5 + "]: " + _0x3842fa);
      }
    } catch (_0x5a0a0a) {
      console.log(_0x5a0a0a);
    }
  }
  async woread_addDrawTimes(_0x2ff3ba, _0x15efe7 = {}) {
    try {
      let _0x311995 = {
          activetyindex: _0x2ff3ba,
          ...this.get_woread_param()
        },
        _0x248190 = this.encode_woread(_0x311995);
      const _0x486c6d = {
        sign: _0x248190
      };
      let _0x46efcc = {
        fn: "woread_addDrawTimes",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes",
        json: _0x486c6d
      };
      await _0x4c672b.wait_gap_interval(this.t_woread_draw, _0x5d9e11);
      let {
        result: _0x9db755
      } = await this.woread_api(_0x46efcc);
      this.t_woread_draw = Date.now();
      let _0x358f34 = _0x4c672b.get(_0x9db755, "code", -(1642 + -9048 + 7407));
      if (_0x358f34 == "0000") {
        this.log("阅读活动[" + _0x2ff3ba + ("]打卡增加抽奖次数成功"));
      } else {
        if (_0x358f34 != "9999") {
          let _0x494cdf = _0x9db755?.["message"] || "";
          this.log("阅读活动[" + _0x2ff3ba + ("]打卡增加抽奖次数失败[") + _0x358f34 + "]: " + _0x494cdf);
        }
      }
    } catch (_0x3bd142) {
      console.log(_0x3bd142);
    }
  }
  async woread_doDraw(_0x397f0b, _0x3c1c53 = {}) {
    try {
      let _0x2027d0 = {
          activeindex: _0x397f0b,
          ...this.get_woread_param()
        },
        _0x36bfe3 = this.encode_woread(_0x2027d0);
      const _0xba593a = {
        sign: _0x36bfe3
      };
      let _0x2a69b9 = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0xba593a
      };
      await _0x4c672b.wait_gap_interval(this.t_woread_draw, _0x5d9e11);
      let {
        result: _0x33f591
      } = await this.woread_api(_0x2a69b9);
      this.t_woread_draw = Date.now();
      let _0x81a5cb = _0x4c672b.get(_0x33f591, "code", -(-1915 + -4127 + 6043));
      if (_0x81a5cb == "0000") {
        const _0x2e804e = {
          notify: true
        };
        this.log("阅读活动[" + _0x397f0b + "]抽奖: " + (_0x33f591?.["data"]?.["prizedesc"] || "空气"), _0x2e804e);
      } else {
        let _0x4d9a5c = _0x33f591?.["message"] || "";
        this.log("阅读活动[" + _0x397f0b + ("]抽奖失败[") + _0x81a5cb + "]: " + _0x4d9a5c);
      }
    } catch (_0x4cbb04) {
      console.log(_0x4cbb04);
    }
  }
  async woread_queryTicketAccount(_0x23aff5 = {}) {
    try {
      let _0x4a62c4 = this.get_woread_param(),
        _0x1a7869 = this.encode_woread(_0x4a62c4);
      const _0x13787c = {
        sign: _0x1a7869
      };
      let _0x26cbe1 = {
          fn: "woread_queryTicketAccount",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
          json: _0x13787c
        },
        {
          result: _0x3fd342
        } = await this.woread_api(_0x26cbe1),
        _0x6ce29d = _0x4c672b.get(_0x3fd342, "code", -(5147 + -5146));
      if (_0x6ce29d == "0000") {
        let _0x2284a4 = (_0x3fd342?.["data"]?.["usableNum"] / (16013 + -1 * 15913)).toFixed(5463 + -17 * -282 + -10255 * 1);
        const _0x45bce9 = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x2284a4, _0x45bce9);
      } else {
        let _0xd876d5 = _0x3fd342?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x6ce29d + "]: " + _0xd876d5);
      }
    } catch (_0x46f510) {
      console.log(_0x46f510);
    }
  }
  async woread_m_queryTicketAccount(_0x5f56cc = {}) {
    try {
      let _0x1f1089 = this.get_woread_m_param(),
        _0x599be3 = this.encode_woread(_0x1f1089, _0x20c0ff);
      const _0x5e2907 = {
        sign: _0x599be3
      };
      let _0x5890b1 = {
          fn: "woread_m_queryTicketAccount",
          method: "post",
          url: "https://m.woread.com.cn/api/union/phone/vouchers/queryTicketAccount",
          json: _0x5e2907
        },
        {
          result: _0x5c632b
        } = await this.woread_api(_0x5890b1),
        _0x5ec93b = _0x4c672b.get(_0x5c632b, "code", -(-952 + 7711 + -62 * 109));
      if (_0x5ec93b == "0000") {
        let _0x29f71b = (_0x5c632b?.["data"]?.["usableNum"] / (130 * -23 + 8921 + 119 * -49)).toFixed(-5531 + 1 * -5521 + 11054);
        const _0x45667c = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x29f71b, _0x45667c);
      } else {
        let _0x51a7d0 = _0x5c632b?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x5ec93b + "]: " + _0x51a7d0);
      }
    } catch (_0x1fbab2) {
      console.log(_0x1fbab2);
    }
  }
  async woread_addReadTime(_0x1f2346 = {}) {
    try {
      let {
          readTime = -8 * 1 + -1 * -2153 + -2143 * 1,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = 9112 + -2200 + -6911,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 6534 + -6852 + 319,
          channelid = "",
          chapterid = "-1",
          readtype = 4956 + -2 * -2894 + -10743,
          isend = "0"
        } = _0x1f2346,
        _0x3f4dd2 = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_param()
        },
        _0x223104 = this.encode_woread(_0x3f4dd2);
      const _0x4e8958 = {
        sign: _0x223104
      };
      let _0x1104f8 = {
          fn: "woread_addReadTime",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
          json: _0x4e8958
        },
        {
          result: _0x1f9eec
        } = await this.request(_0x1104f8),
        _0x4851e5 = _0x4c672b.get(_0x1f9eec, "code", -(-181 * -46 + -17 * 251 + 2 * -2029));
      if (_0x4851e5 == "0000") {
        this.log("刷新读小说时间: " + _0x1f9eec?.["data"]?.["readtime"] / (-7860 + 6992 + 928) / (-1 * 5426 + -7274 + 13700) + "分钟");
        _0x1f9eec?.["data"]?.["readtime"] >= (19 * -268 + -610 * -7 + 834) * (2 * -2225 + 7548 + -3093) * (-1973 * -1 + 740 + 2653 * -1) * (8979 + -2729 * -1 + -2 * 5354) && (this.read_stop = true);
      } else {
        let _0x797aad = _0x1f9eec?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x4851e5 + "]: " + _0x797aad);
      }
    } catch (_0x5e3330) {
      console.log(_0x5e3330);
    }
  }
  async woread_m_addReadTime(_0x513b98 = {}) {
    try {
      let {
          readTime = -1 * -9458 + -8 * -707 + -8 * 1889,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = -8861 + 29 * -263 + 16489,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 209 * -19 + 719 + 3253,
          channelid = "",
          chapterid = "-1",
          readtype = -163 * -47 + 8 * -355 + -241 * 20,
          isend = "0"
        } = _0x513b98,
        _0x335ecd = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_m_param()
        },
        _0x1eb6f5 = this.encode_woread(_0x335ecd, _0x20c0ff);
      const _0x3f838f = {
        sign: _0x1eb6f5
      };
      let _0x4a0eb8 = {
          fn: "woread_m_addReadTime",
          method: "post",
          url: "https:///m.woread.com.cn/api/union/history/addReadTime",
          json: _0x3f838f
        },
        {
          result: _0xc66009
        } = await this.request(_0x4a0eb8),
        _0x22bdf8 = _0x4c672b.get(_0xc66009, "code", -(-5691 + 1484 + 4208));
      if (_0x22bdf8 == "0000") {
        this.log("刷新读小说时间: " + _0xc66009?.["data"]?.["readtime"] / (2074 + -8050 + 6036) / (-1294 + -337 * 10 + 5664) + "分钟");
        _0xc66009?.["data"]?.["readtime"] >= (13479 + 13467 * -1) * (-4629 * -1 + 6605 + -11229) * (-229 * 37 + 1989 + 6544) * (-481 + -8183 * 1 + 9664) && (this.read_stop = true);
      } else {
        let _0x179f91 = _0xc66009?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x22bdf8 + "]: " + _0x179f91);
      }
    } catch (_0x9c51e0) {
      console.log(_0x9c51e0);
    }
  }
  async rabblit_queryActivityData(_0x166566 = {}) {
    try {
      let _0x2faf53 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x2725ec = this.encode_woread(_0x2faf53);
      const _0x35f6cf = {
        sign: _0x2725ec
      };
      let _0x24ac04 = {
          fn: "rabblit_queryActivityData",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
          json: _0x35f6cf
        },
        {
          result: _0x22129d
        } = await this.woread_api(_0x24ac04),
        _0x2490e0 = _0x4c672b.get(_0x22129d, "code", -(334 * -2 + 9130 + 8461 * -1));
      if (_0x2490e0 == "0000") {
        let {
          totalcharpternums: _0x22d281,
          totalreadnums: _0x3ba6a6,
          status: _0x2b7eba,
          activitystatus: _0x34b882
        } = _0x22129d?.["data"];
        if (_0x34b882 == -464 + -1 * -6689 + -6224) {
          this.need_read_rabbit = false;
          const _0x4e6bbb = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0x4e6bbb);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x3ba6a6 + "/" + _0x22d281 + "分钟");
        if (_0x2b7eba == -2599 + 4216 + -404 * 4) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x3ba6a6 >= _0x22d281) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x3bbb94 = _0x22129d?.["message"] || "";
        _0x3bbb94?.["includes"]("未参加") && !_0x166566.join_retry && (await this.rabblit_joinRuning()) ? (_0x166566.join_retry = true, await this.rabblit_queryActivityData(_0x166566)) : this.log("龟兔赛跑查询状态失败[" + _0x2490e0 + "]: " + _0x3bbb94);
      }
    } catch (_0x5a5d83) {
      console.log(_0x5a5d83);
    }
  }
  async rabblit_joinRuning(_0x22f9b4 = {}) {
    let _0x2a36d7 = false;
    try {
      let _0x5cd0b6 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x25fe34 = this.encode_woread(_0x5cd0b6);
      const _0x6d40e3 = {
        sign: _0x25fe34
      };
      let _0x5e3156 = {
          fn: "rabblit_joinRuning",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
          json: _0x6d40e3
        },
        {
          result: _0x19cc43
        } = await this.woread_api(_0x5e3156),
        _0x1dfb20 = _0x4c672b.get(_0x19cc43, "code", -(45 * -12 + -4917 + 5458));
      if (_0x1dfb20 == "0000") {
        _0x2a36d7 = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0x5d645 = _0x19cc43?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0x1dfb20 + "]: " + _0x5d645);
      }
    } catch (_0x2c4557) {
      console.log(_0x2c4557);
    } finally {
      return _0x2a36d7;
    }
  }
  async rabblit_wakeRabbit(_0x36c542 = {}) {
    try {
      let _0x1237f5 = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0xaf381f = this.encode_woread(_0x1237f5);
      const _0x162f7e = {
        sign: _0xaf381f
      };
      let _0x38de4c = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x162f7e
      };
      await _0x4c672b.wait_gap_interval(this.t_woread_draw, _0x5d9e11);
      let {
        result: _0x5f4ee4
      } = await this.woread_api(_0x38de4c);
      this.t_woread_draw = Date.now();
      let _0x531c58 = _0x4c672b.get(_0x5f4ee4, "code", -(1323 + -1 * -1215 + -1 * 2537));
      if (_0x531c58 == "0000") {
        const _0x19370a = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x5f4ee4?.["data"]?.["prizedesc"] || "空气"), _0x19370a);
      } else {
        let _0x59d84e = _0x5f4ee4?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x531c58 + "]: " + _0x59d84e);
      }
    } catch (_0x4b75db) {
      console.log(_0x4b75db);
    }
  }
  async rabblit_finishActivity(_0x451bd0 = {}) {
    try {
      let _0x9cdff4 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x517547 = this.encode_woread(_0x9cdff4);
      const _0x5c2de6 = {
        sign: _0x517547
      };
      let _0xe1dbfc = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x5c2de6
      };
      await _0x4c672b.wait_gap_interval(this.t_woread_draw, _0x5d9e11);
      let {
        result: _0x254943
      } = await this.woread_api(_0xe1dbfc);
      this.t_woread_draw = Date.now();
      let _0x6bb8e = _0x4c672b.get(_0x254943, "code", -(5997 + -7551 * -1 + 589 * -23));
      if (_0x6bb8e == "0000") {
        this.need_read_rabbit = false;
        const _0x2f0d17 = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x254943?.["data"]?.["prizedesc"] || "空气"), _0x2f0d17);
      } else {
        let _0x3e4556 = _0x254943?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x6bb8e + "]: " + _0x3e4556);
      }
    } catch (_0x4f0c17) {
      console.log(_0x4f0c17);
    }
  }
  async moonbox_queryActiveInfo(_0x1aa999 = {}) {
    try {
      let _0x25bfae = this.get_woread_param(),
        _0x30779b = this.encode_woread(_0x25bfae);
      const _0x3df8df = {
        sign: _0x30779b
      };
      let _0x1a1264 = {
          fn: "moonbox_queryActiveInfo",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo",
          json: _0x3df8df
        },
        {
          result: _0x3fef2a
        } = await this.woread_api(_0x1a1264),
        _0x1f3aaf = _0x4c672b.get(_0x3fef2a, "code", -(6735 + 2 * -3367));
      if (_0x1f3aaf == "0000") {
        let {
          activeId: _0x250122,
          activeName: _0x2bfd4e
        } = _0x3fef2a?.["data"];
        _0x55391c = _0x250122;
      } else {
        let _0xa936bf = _0x3fef2a?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x1f3aaf + "]: " + _0xa936bf);
      }
    } catch (_0x1b94a6) {
      console.log(_0x1b94a6);
    }
  }
  async moonbox_queryCurTaskStatus(_0x149c93 = {}) {
    try {
      let _0x5de828 = {
          activeIndex: _0x55391c,
          ...this.get_woread_param()
        },
        _0x3b7ea4 = this.encode_woread(_0x5de828);
      const _0xfd95db = {
        sign: _0x3b7ea4
      };
      let _0x6f81d9 = {
          fn: "moonbox_queryCurTaskStatus",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
          json: _0xfd95db
        },
        {
          result: _0x1d541c
        } = await this.woread_api(_0x6f81d9),
        _0x1054fb = _0x4c672b.get(_0x1d541c, "code", -(47 * -131 + -7810 + -1164 * -12));
      if (_0x1054fb == "0000") {
        for (let _0x252927 of _0x1d541c?.["data"] || []) {
          let {
            taskName: _0x313ae9,
            currentValue: _0x3fdd11,
            taskValue: _0x53dd8d
          } = _0x252927?.["taskDetail"];
          switch (_0x252927.taskStatus) {
            case 4733 + -1580 + -3153:
              {
                this.moonbox_task_record[_0x313ae9] = true;
                this.log("阅光宝盒[" + _0x313ae9 + "]进度: " + parseInt(_0x3fdd11) + "/" + _0x53dd8d + "分钟");
                break;
              }
            case -1 * -1811 + -7972 + 6163:
              {
                await this.moonbox_completeActiveTask(_0x252927);
              }
            case -1592 * 2 + 5 * -1927 + 12820:
              {
                this.moonbox_task_record[_0x313ae9] = false;
                if (!this.moonbox_notified.includes(_0x313ae9)) {
                  this.moonbox_notified.push(_0x313ae9);
                  const _0x52e7f2 = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x313ae9 + "]已完成", _0x52e7f2);
                }
                break;
              }
          }
        }
      } else {
        let _0x325aa9 = _0x1d541c?.["message"] || "";
        _0x325aa9?.["includes"]("未领取") && !_0x149c93.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x149c93.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x149c93)) : this.log("阅光宝盒查询任务状态失败[" + _0x1054fb + "]: " + _0x325aa9);
      }
    } catch (_0x4df7a0) {
      console.log(_0x4df7a0);
    }
  }
  async moonbox_completeActiveTask(_0x4af677, _0x3aeda0 = {}) {
    try {
      let _0x4c63e8 = {
          taskId: _0x4af677.id,
          ...this.get_woread_param()
        },
        _0xa3034 = this.encode_woread(_0x4c63e8);
      const _0x378954 = {
        sign: _0xa3034
      };
      let _0x1c28ac = {
          fn: "moonbox_completeActiveTask",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
          json: _0x378954
        },
        {
          result: _0x40efdd
        } = await this.woread_api(_0x1c28ac),
        _0x37bf24 = _0x4c672b.get(_0x40efdd, "code", -(-6 * -1274 + 3160 + -10803));
      if (_0x37bf24 == "0000") {
        const _0x432c2b = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x40efdd?.["data"]?.["taskDetail"]?.["taskName"] + ("]领取奖励成功: ") + _0x40efdd?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x432c2b);
      } else {
        let _0x355fe8 = _0x40efdd?.["message"] || "";
        this.log("阅光宝盒[" + _0x4af677?.["taskDetail"]?.["taskName"] + ("]领取奖励失败[") + _0x37bf24 + "]: " + _0x355fe8);
      }
    } catch (_0x5d1580) {
      console.log(_0x5d1580);
    }
  }
  async moonbox_queryActiveTaskList(_0x5b4f5d = {}) {
    try {
      let _0x29dc0b = {
          activeIndex: _0x55391c,
          ...this.get_woread_param()
        },
        _0x416ead = this.encode_woread(_0x29dc0b);
      const _0x3d0c02 = {
        sign: _0x416ead
      };
      let _0x11d05c = {
          fn: "moonbox_queryActiveTaskList",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
          json: _0x3d0c02
        },
        {
          result: _0x391626
        } = await this.woread_api(_0x11d05c),
        _0x42ede6 = _0x4c672b.get(_0x391626, "code", -(47 * -67 + 6553 + -3403));
      if (_0x42ede6 == "0000") {
        let _0x1cff30 = _0x391626?.["data"]?.["sort"](function (_0x1792cf, _0xe10a9b) {
            let _0x3ecb2c = parseInt(_0xe10a9b.taskDetail.taskValue),
              _0x243b54 = parseInt(_0x1792cf.taskDetail.taskValue);
            return _0x3ecb2c - _0x243b54;
          }),
          _0xe49ce3 = _0x1cff30.filter(_0x5ed25d => _0x5ed25d.maxNum - _0x5ed25d.receiveNum > -489 + 7518 + 11 * -639 && _0x5ed25d.taskDetail.materialGroup.groupName.includes("红包"));
        _0xe49ce3?.["length"] ? await this.moonbox_receiveActiveTask(_0xe49ce3) : this.log("没有可领取的阅光宝盒红包任务了");
      } else {
        let _0x37141c = _0x391626?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x42ede6 + "]: " + _0x37141c);
      }
    } catch (_0x3346d3) {
      console.log(_0x3346d3);
    }
  }
  async moonbox_receiveActiveTask(_0x17d7d6, _0x642063 = {}) {
    try {
      if (!_0x17d7d6.length) {
        return;
      }
      let _0x471744 = _0x17d7d6.shift(),
        _0x3180c7 = _0x471744?.["taskDetail"]?.["taskName"] || "",
        _0x35c4b9 = {
          activeId: _0x55391c,
          taskId: _0x471744.secondTaskId,
          ...this.get_woread_param()
        },
        _0x9d13eb = this.encode_woread(_0x35c4b9);
      const _0x1abd0a = {
        sign: _0x9d13eb
      };
      let _0x35bca9 = {
          fn: "moonbox_queryActiveTaskList",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
          json: _0x1abd0a
        },
        {
          result: _0x4cc772
        } = await this.woread_api(_0x35bca9),
        _0x45290e = _0x4c672b.get(_0x4cc772, "code", -(-8834 + -63 * 47 + 11796));
      if (_0x45290e == "0000") {
        this.moonbox_task_record[_0x3180c7] = true;
        this.log("领取阅光宝盒任务[" + _0x3180c7 + "]成功");
      } else {
        let _0x4cc9d9 = _0x4cc772?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x3180c7 + "]失败[" + _0x45290e + "]: " + _0x4cc9d9);
        (_0x4cc9d9?.["includes"]("今天无法完成") || _0x4cc9d9?.["includes"]("领光了")) && _0x17d7d6.length > -1 * 2233 + -4459 + 6692 && (await _0x4c672b.wait(1683 + -5165 + -2 * -1991), await this.moonbox_receiveActiveTask(_0x17d7d6, _0x642063));
      }
    } catch (_0x2fbd0d) {
      console.log(_0x2fbd0d);
    }
  }
  async moonbox_queryReadStatus(_0x27c1b2 = {}) {
    try {
      let _0x4dd0d9 = {
          activeIndex: _0x55391c,
          ...this.get_woread_param()
        },
        _0x3f59e7 = this.encode_woread(_0x4dd0d9);
      const _0x2456fd = {
        sign: _0x3f59e7
      };
      let _0xae8f56 = {
          fn: "moonbox_queryReadStatus",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
          json: _0x2456fd
        },
        {
          result: _0x3fc97e
        } = await this.woread_api(_0xae8f56),
        _0x479ae3 = _0x4c672b.get(_0x3fc97e, "code", -(-5915 + -3910 + 9826));
      if (_0x479ae3 == "0000") {
        switch (_0x3fc97e?.["data"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              this.switch_woread_token(this.woread_m_accesstoken);
              const _0x4dd67c = {
                readTime: 2
              };
              await this.woread_m_addReadTime(_0x4dd67c);
              this.switch_woread_token(this.woread_accesstoken);
              await this.moonbox_drawReadActivePrize();
              break;
            }
          case "3":
            {
              this.log("阅光宝盒今天已抽奖");
              break;
            }
          case "4":
            {
              this.log("阅光宝盒今天可以抽奖");
              await this.moonbox_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0x3fc97e?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x9b31af = _0x3fc97e?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x479ae3 + "]: " + _0x9b31af);
      }
    } catch (_0x71eb7f) {
      console.log(_0x71eb7f);
    }
  }
  async moonbox_drawReadActivePrize(_0x56938e = {}) {
    try {
      let _0x3eabf6 = {
          activeIndex: _0x55391c,
          ...this.get_woread_param()
        },
        _0x3ad9f4 = this.encode_woread(_0x3eabf6);
      const _0xe79885 = {
        sign: _0x3ad9f4
      };
      let _0x2288d5 = {
          fn: "moonbox_drawReadActivePrize",
          method: "post",
          url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
          json: _0xe79885
        },
        {
          result: _0x1633e7
        } = await this.woread_api(_0x2288d5),
        _0x27c470 = _0x4c672b.get(_0x1633e7, "code", -(8956 + -8955));
      if (_0x27c470 == "0000") {
        const _0x4d8266 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x1633e7?.["data"]?.["prizedesc"] || JSON.stringify(_0x1633e7)), _0x4d8266);
      } else {
        let _0x55fb06 = _0x1633e7?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x27c470 + "]: " + _0x55fb06);
      }
    } catch (_0xf0a009) {
      console.log(_0xf0a009);
    }
  }
  async moonbox_m_queryActiveInfo(_0x2f8e7f = {}) {
    try {
      let _0x14f205 = this.get_woread_m_param(),
        _0x121f46 = this.encode_woread(_0x14f205, _0x20c0ff);
      const _0x45f3ae = {
        sign: _0x121f46
      };
      let _0x1f7d7c = {
          fn: "moonbox_m_queryActiveInfo",
          method: "post",
          url: "https://m.woread.com.cn/api/union/activity423/queryActiveInfo",
          json: _0x45f3ae
        },
        {
          result: _0x425b85
        } = await this.woread_api(_0x1f7d7c),
        _0x40ba28 = _0x4c672b.get(_0x425b85, "code", -(-7 * -956 + -1 * 292 + -6399));
      if (_0x40ba28 == "0000") {
        let {
          activeId: _0x3f90b8,
          activeName: _0x2a7af0
        } = _0x425b85?.["data"];
        _0x55391c = _0x3f90b8;
      } else {
        let _0x2087f5 = _0x425b85?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x40ba28 + "]: " + _0x2087f5);
      }
    } catch (_0xfd1d67) {
      console.log(_0xfd1d67);
    }
  }
  async moonbox_m_queryCurTaskStatus(_0xcef68f = {}) {
    try {
      let _0x5e3f1e = {
          activeIndex: _0x55391c,
          ...this.get_woread_m_param()
        },
        _0x7bc91f = this.encode_woread(_0x5e3f1e, _0x20c0ff);
      const _0x509ba5 = {
        sign: _0x7bc91f
      };
      let _0x217196 = {
          fn: "moonbox_m_queryCurTaskStatus",
          method: "post",
          url: "https://m.woread.com.cn/api/union/activity423/queryCurTaskStatus",
          json: _0x509ba5
        },
        {
          result: _0x51e7c5
        } = await this.woread_api(_0x217196),
        _0x3e8bcf = _0x4c672b.get(_0x51e7c5, "code", -(9 * -1011 + 4903 + 4197));
      if (_0x3e8bcf == "0000") {
        for (let _0xe83310 of _0x51e7c5?.["data"] || []) {
          let {
            taskName: _0x4d3802,
            currentValue: _0x58b1af,
            taskValue: _0x54fad8
          } = _0xe83310?.["taskDetail"];
          switch (_0xe83310.taskStatus) {
            case -43 * -66 + 38 * -130 + 2102:
              {
                this.moonbox_task_record[_0x4d3802] = true;
                this.log("阅光宝盒[" + _0x4d3802 + "]进度: " + parseInt(_0x58b1af) + "/" + _0x54fad8 + "分钟");
                break;
              }
            case -4611 + 8236 + -3623:
              {
                await this.moonbox_m_completeActiveTask(_0xe83310);
              }
            case -1 * -8191 + -6626 + -1564:
              {
                this.moonbox_task_record[_0x4d3802] = false;
                if (!this.moonbox_notified.includes(_0x4d3802)) {
                  this.moonbox_notified.push(_0x4d3802);
                  const _0x14eeaa = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x4d3802 + "]已完成", _0x14eeaa);
                }
                break;
              }
          }
        }
      } else {
        let _0x4b5302 = _0x51e7c5?.["message"] || "";
        _0x4b5302?.["includes"]("未领取") && !_0xcef68f.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0xcef68f.activate_retry = true, await this.moonbox_m_queryCurTaskStatus(_0xcef68f)) : this.log("阅光宝盒查询任务状态失败[" + _0x3e8bcf + "]: " + _0x4b5302);
      }
    } catch (_0x2b3c91) {
      console.log(_0x2b3c91);
    }
  }
  async moonbox_m_completeActiveTask(_0x3a9ed6, _0x14d7fc = {}) {
    try {
      let _0x4feba7 = {
          taskId: _0x3a9ed6.id,
          ...this.get_woread_m_param()
        },
        _0x3be902 = this.encode_woread(_0x4feba7, _0x20c0ff);
      const _0x304a2d = {
        sign: _0x3be902
      };
      let _0x2fe437 = {
          fn: "moonbox_m_completeActiveTask",
          method: "post",
          url: "https://m.woread.com.cn/api/union/activity423/completeActiveTask",
          json: _0x304a2d
        },
        {
          result: _0x27b401
        } = await this.woread_api(_0x2fe437),
        _0x1b57e3 = _0x4c672b.get(_0x27b401, "code", -(7944 + -7943));
      if (_0x1b57e3 == "0000") {
        const _0x1dd73a = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x27b401?.["data"]?.["taskDetail"]?.["taskName"] + ("]领取奖励成功: ") + _0x27b401?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x1dd73a);
      } else {
        let _0x3a226a = _0x27b401?.["message"] || "";
        this.log("阅光宝盒[" + _0x3a9ed6?.["taskDetail"]?.["taskName"] + ("]领取奖励失败[") + _0x1b57e3 + "]: " + _0x3a226a);
      }
    } catch (_0x5f2f11) {
      console.log(_0x5f2f11);
    }
  }
  async moonbox_m_queryActiveTaskList(_0x165565 = {}) {
    try {
      let _0x3779e6 = {
          activeIndex: _0x55391c,
          ...this.get_woread_m_param()
        },
        _0x5ec19c = this.encode_woread(_0x3779e6, _0x20c0ff);
      const _0x34cd3e = {
        sign: _0x5ec19c
      };
      let _0x2f4613 = {
          fn: "moonbox_m_queryActiveTaskList",
          method: "post",
          url: "https://m.woread.com.cn/api/union/activity423/queryActiveTaskList",
          json: _0x34cd3e
        },
        {
          result: _0x591b1d
        } = await this.woread_api(_0x2f4613),
        _0x112619 = _0x4c672b.get(_0x591b1d, "code", -(7776 + -311 * 25));
      if (_0x112619 == "0000") {
        let _0x1a7988 = _0x591b1d?.["data"]?.["sort"](function (_0x533bfe, _0x3cbfac) {
            let _0x1619db = parseInt(_0x3cbfac.taskDetail.taskValue),
              _0x5d17d1 = parseInt(_0x533bfe.taskDetail.taskValue);
            return _0x1619db - _0x5d17d1;
          }),
          _0x590d73 = _0x1a7988.filter(_0xa65315 => _0xa65315.maxNum - _0xa65315.receiveNum > -9073 + 8719 + 354 && _0xa65315.taskDetail.materialGroup.groupName.includes("红包"));
        _0x590d73?.["length"] ? await this.moonbox_m_receiveActiveTask(_0x590d73) : this.log("没有可领取的阅光宝盒红包任务了");
      } else {
        let _0x51d622 = _0x591b1d?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x112619 + "]: " + _0x51d622);
      }
    } catch (_0x39e415) {
      console.log(_0x39e415);
    }
  }
  async moonbox_m_receiveActiveTask(_0x222667, _0x20f0f8 = {}) {
    try {
      if (!_0x222667.length) {
        return;
      }
      let _0x5013e3 = _0x222667.shift(),
        _0x5915e5 = _0x5013e3?.["taskDetail"]?.["taskName"] || "",
        _0x499f8f = {
          activeId: _0x55391c,
          taskId: _0x5013e3.secondTaskId,
          ...this.get_woread_m_param()
        },
        _0x5a8196 = this.encode_woread(_0x499f8f, _0x20c0ff);
      const _0x54248e = {
        sign: _0x5a8196
      };
      let _0x51776c = {
          fn: "moonbox_m_queryActiveTaskList",
          method: "post",
          url: "https://m.woread.com.cn/api/union/activity423/receiveActiveTask",
          json: _0x54248e
        },
        {
          result: _0x5b661a
        } = await this.woread_api(_0x51776c),
        _0x12d65d = _0x4c672b.get(_0x5b661a, "code", -(-6728 + 794 + 5935));
      if (_0x12d65d == "0000") {
        this.moonbox_task_record[_0x5915e5] = true;
        this.log("领取阅光宝盒任务[" + _0x5915e5 + "]成功");
      } else {
        let _0x1347e6 = _0x5b661a?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x5915e5 + "]失败[" + _0x12d65d + "]: " + _0x1347e6);
        (_0x1347e6?.["includes"]("今天无法完成") || _0x1347e6?.["includes"]("领光了")) && _0x222667.length > 8580 + -2717 * -2 + -7007 * 2 && (await _0x4c672b.wait(4687 + -1223 * 7 + 4374), await this.moonbox_m_receiveActiveTask(_0x222667, _0x20f0f8));
      }
    } catch (_0x26b16f) {
      console.log(_0x26b16f);
    }
  }
  async moonbox_m_queryReadStatus(_0x2089b8 = {}) {
    try {
      let _0x5361cf = {
          activeIndex: _0x55391c,
          ...this.get_woread_m_param()
        },
        _0x36b85a = this.encode_woread(_0x5361cf, _0x20c0ff);
      const _0x1c1d08 = {
        sign: _0x36b85a
      };
      let _0x27975e = {
          fn: "moonbox_m_queryReadStatus",
          method: "post",
          url: "https://m.woread.com.cn/api/union/activity423/queryReadStatus",
          json: _0x1c1d08
        },
        {
          result: _0x3ac100
        } = await this.woread_api(_0x27975e),
        _0x446cf9 = _0x4c672b.get(_0x3ac100, "code", -(8326 + -6470 + -1855));
      if (_0x446cf9 == "0000") {
        switch (_0x3ac100?.["message"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0x177649 = {
                readTime: 2
              };
              await this.woread_m_addReadTime(_0x177649);
              await this.moonbox_m_drawReadActivePrize();
              break;
            }
          case "3":
            {
              this.log("阅光宝盒今天已抽奖");
              break;
            }
          case "4":
            {
              this.log("阅光宝盒今天可以抽奖");
              await this.moonbox_m_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0x3ac100?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x3e13a2 = _0x3ac100?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x446cf9 + "]: " + _0x3e13a2);
      }
    } catch (_0x370229) {
      console.log(_0x370229);
    }
  }
  async moonbox_m_drawReadActivePrize(_0x577cf6 = {}) {
    try {
      let _0x48a5f2 = {
          activeIndex: _0x55391c,
          ...this.get_woread_m_param()
        },
        _0x52e161 = this.encode_woread(_0x48a5f2, _0x20c0ff);
      const _0x815396 = {
        sign: _0x52e161
      };
      let _0x18aea5 = {
          fn: "moonbox_m_drawReadActivePrize",
          method: "post",
          url: "https://m.woread.com.cn/api/union/activity423/drawReadActivePrize",
          json: _0x815396
        },
        {
          result: _0x13c8d4
        } = await this.woread_api(_0x18aea5),
        _0x3b1c56 = _0x4c672b.get(_0x13c8d4, "code", -(46 * -172 + 1762 + 6151));
      if (_0x3b1c56 == "0000") {
        const _0x75d6a5 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x13c8d4?.["data"]?.["prizedesc"] || JSON.stringify(_0x13c8d4)), _0x75d6a5);
      } else {
        let _0x1d2f3b = _0x13c8d4?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x3b1c56 + "]: " + _0x1d2f3b);
      }
    } catch (_0x2e18c9) {
      console.log(_0x2e18c9);
    }
  }
  async ltyp_login(_0x1ce474, _0x483381 = {}) {
    try {
      const _0x2b5783 = {
        "client-Id": _0x392042,
        accessToken: ""
      };
      const _0x146bcb = {
        clientId: _0x392042,
        ticket: _0x1ce474
      };
      let _0x4efd51 = {
          fn: "ltyp_login",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/dispatcher",
          headers: _0x2b5783,
          json: {
            header: this.get_ltyp_sign_header("HandheldHallAutoLogin"),
            body: _0x146bcb
          }
        },
        {
          result: _0x30e605
        } = await this.request(_0x4efd51),
        _0x4d6db0 = _0x4c672b.get(_0x30e605, "STATUS", -(7075 * -1 + -3178 + 10254));
      if (_0x4d6db0 == 4707 + 16 * -524 + 3877) {
        this.ltyp_token = _0x30e605?.["RSP"]?.["DATA"]?.["token"];
        for (let _0x27bfeb of _0x333e1b) {
          await this.ltyp_incentiveTimes(_0x27bfeb);
          await this.ltyp_lottery(_0x27bfeb);
        }
      } else {
        let _0x13a7ba = _0x30e605?.["msg"] || "";
        this.log("联通云盘登录失败[" + _0x4d6db0 + "]: " + _0x13a7ba);
      }
    } catch (_0x505ae6) {
      console.log(_0x505ae6);
    }
  }
  async ltyp_incentiveTimes(_0x4b3a88, _0x26cec8 = {}) {
    try {
      const _0x1029d2 = {
        "client-Id": _0x392042,
        "Access-Token": this.ltyp_token
      };
      const _0xc10a38 = {
        fn: "ltyp_incentiveTimes",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTimes",
        headers: _0x1029d2,
        searchParams: {}
      };
      _0xc10a38.searchParams.bizKey = "incentiveTimesPipeline";
      _0xc10a38.searchParams.activityId = _0x4b3a88;
      let _0x2a5812 = _0xc10a38,
        {
          result: _0x117383
        } = await this.request(_0x2a5812),
        _0x334590 = _0x4c672b.get(_0x117383?.["meta"], "code", -(8877 + -8876));
      if (_0x334590 == 3405 * -2 + 1087 + 5723) {
        let {
          isIncentiveTask = 7259 * -1 + 8678 * -1 + 15937,
          taskType = -29 * -198 + -9550 + 3808,
          incentiveTimeTotal = -8191 + -9910 + -787 * -23,
          incentiveTimeDone = 8916 + -6904 + -4 * 503
        } = _0x117383?.["result"];
        if (isIncentiveTask) {
          for (let _0x1e30b1 = incentiveTimeDone; _0x1e30b1 < incentiveTimeTotal; _0x1e30b1++) {
            await this.ltyp_incentiveTask(_0x4b3a88);
          }
        }
      } else {
        let _0x17b321 = _0x117383?.["meta"]?.["message"] || "";
        this.log("联通云盘查询任务失败[" + _0x334590 + "]: " + _0x17b321);
      }
    } catch (_0x54a602) {
      console.log(_0x54a602);
    }
  }
  async ltyp_incentiveTask(_0x3ffa2a, _0x291739 = {}) {
    try {
      const _0x4423a2 = {
        "client-Id": _0x392042,
        "Access-Token": this.ltyp_token
      };
      const _0x5d1e51 = {
        activityId: _0x3ffa2a
      };
      const _0x58fc09 = {
        bizKey: "incentiveTaskPipeline",
        bizObject: _0x5d1e51
      };
      let _0x5691cd = {
          fn: "ltyp_incentiveTask",
          method: "post",
          url: "https://panservice.mail.wo.cn/activity/v1/incentiveTask",
          headers: _0x4423a2,
          json: _0x58fc09
        },
        {
          result: _0x4e3742
        } = await this.request(_0x5691cd),
        _0x331ab9 = _0x4c672b.get(_0x4e3742?.["meta"], "code", -(-1 * -3485 + 89 + -3573));
      if (_0x331ab9 == -5303 + 9118 + 109 * -35) {
        let {
          incentiveStatus = -6168 + 9231 + -3 * 1021,
          incentiveMessage = ""
        } = _0x4e3742?.["result"];
        incentiveStatus == 6285 + -4768 + 1 * -1516 ? this.log("联通云盘完成任务成功") : this.log("联通云盘完成任务失败[" + incentiveStatus + "]: " + incentiveMessage);
      } else {
        let _0x172131 = _0x4e3742?.["meta"]?.["message"] || "";
        this.log("联通云盘完成任务错误[" + _0x331ab9 + "]: " + _0x172131);
      }
    } catch (_0x47d039) {
      console.log(_0x47d039);
    }
  }
  async ltyp_lottery_times(_0x5644fa, _0x42508f = {}) {
    try {
      const _0xe7632d = {
        "client-Id": _0x392042,
        token: this.ltyp_token
      };
      const _0x314980 = {
        activityId: _0x5644fa
      };
      let _0x17163b = {
          fn: "ltyp_lottery_times",
          method: "get",
          url: "https://panservice.mail.wo.cn/activity/v1/times",
          headers: _0xe7632d,
          searchParams: _0x314980
        },
        {
          result: _0x2138c5
        } = await this.request(_0x17163b),
        _0x5ede21 = _0x4c672b.get(_0x2138c5, "RSP_CODE", -(-7026 * -1 + 4789 + -11814));
      if (_0x5ede21 == 3851 + 2687 * -1 + -1164) {
        let {
          times = -7 * 883 + -8505 + 14686
        } = _0x2138c5?.["DATA"];
        this.log("联通云盘可以抽奖" + times + "次");
        while (times-- > 31 * -133 + -7595 + -558 * -21) {
          await _0x4c672b.wait(-6891 + 5323 + 2568);
          await this.ltyp_lottery(_0x5644fa);
        }
      } else {
        let _0x54bc65 = _0x2138c5?.["RSP_DESC"] || "";
        this.log("联通云盘查询抽奖次数失败[" + _0x5ede21 + "]: " + _0x54bc65);
      }
    } catch (_0xdeafa3) {
      console.log(_0xdeafa3);
    }
  }
  async ltyp_lottery(_0x3f86e4, _0x2e2814 = {}) {
    try {
      const _0x46983d = {
        "client-Id": _0x392042,
        "Access-Token": this.ltyp_token
      };
      const _0x373c74 = {
        activityId: _0x3f86e4,
        type: 3
      };
      const _0x474c24 = {
        lottery: _0x373c74
      };
      const _0x4a1127 = {
        bizKey: "newLottery",
        bizObject: _0x474c24
      };
      let _0x58e98d = {
          fn: "ltyp_lottery",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/v1/lottery",
          headers: _0x46983d,
          json: _0x4a1127
        },
        {
          result: _0x3f8809
        } = await this.request(_0x58e98d),
        _0x29e0e0 = _0x4c672b.get(_0x3f8809?.["meta"], "code", -(-123 * 47 + 43 * -152 + 12318));
      if (_0x29e0e0 == -26 * -185 + 7420 + -12230) {
        let {
          prizeName = ""
        } = _0x3f8809?.["result"];
        if (prizeName) {
          const _0x59a8ae = {
            notify: true
          };
          this.log("联通云盘抽奖: " + prizeName, _0x59a8ae);
          await this.ltyp_lottery(_0x3f86e4, _0x2e2814);
        }
      } else {
        let _0x2fe581 = _0x3f8809?.["meta"]?.["message"] || "";
        this.log("联通云盘抽奖错误[" + _0x29e0e0 + "]: " + _0x2fe581);
      }
    } catch (_0x6e247d) {
      console.log(_0x6e247d);
    }
  }
  async act_517_userAccount(_0x5d111b = {}) {
    try {
      let _0xb56eb = {
        fn: "act_517_userAccount",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/userAccount"
      };
      {
        let {
            result: _0x12e6e7,
            statusCode: _0x24ba47
          } = await this.request(_0x4c672b.copy(_0xb56eb)),
          _0x3f7586 = _0x4c672b.get(_0x12e6e7, "code", _0x24ba47);
        if (_0x3f7586 == "0000") {
          await this.act_517_taskList();
        } else {
          let _0xa39ecd = _0x12e6e7?.["message"] || _0x12e6e7?.["msg"] || "";
          this.log("517活动进入主页失败[" + _0x3f7586 + "]: " + _0xa39ecd);
          return;
        }
      }
      {
        let {
            result: _0x2d9fa8,
            statusCode: _0x40643e
          } = await this.request(_0x4c672b.copy(_0xb56eb)),
          _0x5caf5e = _0x4c672b.get(_0x2d9fa8, "code", _0x40643e);
        if (_0x5caf5e == "0000") {
          let {
            chances: _0xb8ead9
          } = _0x2d9fa8?.["data"];
          this.log("517活动可以抽奖" + _0xb8ead9 + "次");
          let _0x4a90fa = false;
          while (_0xb8ead9-- > 3421 + 39 * -87 + -28) {
            if (_0x4a90fa) {
              await _0x4c672b.wait(9240 + -6240);
            }
            _0x4a90fa = true;
            await this.act_517_lottery();
          }
        } else {
          let _0x401062 = _0x2d9fa8?.["message"] || _0x2d9fa8?.["msg"] || "";
          this.log("517活动查询抽奖次数失败[" + _0x5caf5e + "]: " + _0x401062);
        }
      }
      {
        let {
            result: _0x112b84,
            statusCode: _0x3d9692
          } = await this.request(_0x4c672b.copy(_0xb56eb)),
          _0x164969 = _0x4c672b.get(_0x112b84, "code", _0x3d9692);
        if (_0x164969 == "0000") {
          let {
            amount: _0x1053c0,
            targetAmount: _0x248ecd
          } = _0x112b84?.["data"];
          const _0x3dbd45 = {
            notify: true
          };
          this.log("517活动现金进度: " + _0x1053c0 + "/" + _0x248ecd, _0x3dbd45);
        } else {
          let _0x53c12d = _0x112b84?.["message"] || _0x112b84?.["msg"] || "";
          this.log("517活动查询进度失败[" + _0x164969 + "]: " + _0x53c12d);
        }
      }
    } catch (_0x55b6a1) {
      console.log(_0x55b6a1);
    }
  }
  async act_517_bind(_0x3ec228, _0x281097 = {}) {
    try {
      const _0x54d111 = {
        fn: "act_517_bind",
        method: "post",
        url: "https://activity.10010.com/2024517charges/openWindows/bind",
        json: {},
        valid_code: [7130 + -809 * 7 + -1066]
      };
      _0x54d111.json.shareCode = _0x3ec228;
      _0x54d111.json.channel = "countersign";
      let _0x4918a9 = _0x54d111,
        {
          result: _0x5b7fc4
        } = await this.request(_0x4918a9);
    } catch (_0x500ea5) {
      console.log(_0x500ea5);
    }
  }
  async act_517_lottery(_0x108752 = {}) {
    try {
      let _0x12ac14 = {
          fn: "act_517_lottery",
          method: "get",
          url: "https://activity.10010.com/2024517charges/lottery/lottery"
        },
        {
          result: _0x4124a9,
          statusCode: _0x2962e5
        } = await this.request(_0x12ac14),
        _0x3d0976 = _0x4c672b.get(_0x4124a9, "code", _0x2962e5);
      if (_0x3d0976 == "0000") {
        _0x4124a9?.["data"]?.["uuid"] ? (await _0x4c672b.wait(8327 + -5909 + -418), await this.act_517_winningRecord(_0x4124a9.data.uuid)) : this.log("517活动抽奖失败, 没有返回uuid");
      } else {
        let _0x52341d = _0x4124a9?.["message"] || _0x4124a9?.["msg"] || "";
        this.log("517活动抽奖失败[" + _0x3d0976 + "]: " + _0x52341d);
      }
    } catch (_0x162e6a) {
      console.log(_0x162e6a);
    }
  }
  async act_517_winningRecord(_0x30fba9, _0x228991 = {}) {
    try {
      const _0x55e850 = {
        requestId: _0x30fba9
      };
      let _0x53245f = {
          fn: "act_517_winningRecord",
          method: "get",
          url: "https://activity.10010.com/2024517charges/lottery/winningRecord",
          searchParams: _0x55e850
        },
        {
          result: _0x171769,
          statusCode: _0x4aedd2
        } = await this.request(_0x53245f),
        _0x57336e = _0x4c672b.get(_0x171769, "code", _0x4aedd2);
      if (_0x57336e == "0000") {
        if (_0x171769?.["data"]?.["isWin"] === "1") {
          let {
              prizeAmount: _0x11e55c,
              prizeList: _0x175f28,
              afterAmount: _0x493574,
              targetAmount: _0x2e20be,
              showAmount = "0"
            } = _0x171769?.["data"],
            _0x48f549 = (_0x175f28 || []).filter(_0x5a6286 => _0x5a6286.prizeName).map(_0x2807d7 => _0x2807d7.prizeName).join(", ") || "";
          const _0x208a94 = {
            notify: true
          };
          if (_0x48f549) {
            this.log("517活动抽奖: " + _0x48f549, _0x208a94);
          }
          if (showAmount === "1") {
            this.log("517活动抽奖现金进度: +" + _0x11e55c + " (" + _0x493574 + "/" + _0x2e20be + ")");
          }
        } else {
          this.log("517活动抽奖: 空气");
        }
      } else {
        let _0xb510ea = _0x171769?.["message"] || _0x171769?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x57336e + "]: " + _0xb510ea);
      }
    } catch (_0x128879) {
      console.log(_0x128879);
    }
  }
  async act_517_taskList(_0x4fe859 = {}) {
    try {
      let _0x173b57 = {
          fn: "act_517_taskList",
          method: "get",
          url: "https://activity.10010.com/2024517charges/dotask/taskList"
        },
        {
          result: _0x4ea832,
          statusCode: _0x3a5db6
        } = await this.request(_0x173b57),
        _0x120b88 = _0x4c672b.get(_0x4ea832, "code", _0x3a5db6);
      if (_0x120b88 == "0000") {
        let _0x442045 = _0x4ea832?.["data"]?.["taskList"] || [];
        for (let _0x10da9b of _0x442045) {
          let {
            completeNum = 2 * -34 + 6540 + -1618 * 4,
            maxNum: _0x411a82,
            isComplete: _0x3bded4,
            taskType: _0x11ea96
          } = _0x10da9b;
          if (_0x3bded4) {
            continue;
          }
          if (_0x11ea96 == "5") {
            continue;
          }
          completeNum = parseInt(completeNum);
          _0x411a82 = parseInt(_0x411a82);
          for (let _0x3fa506 = completeNum; _0x3fa506 < _0x411a82; _0x3fa506++) {
            await this.act_517_completeTask(_0x10da9b);
          }
        }
      } else {
        let _0x215aee = _0x4ea832?.["message"] || _0x4ea832?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x120b88 + "]: " + _0x215aee);
      }
    } catch (_0x45301a) {
      console.log(_0x45301a);
    }
  }
  async act_517_completeTask(_0x5c02d6, _0x33c90f = {}) {
    try {
      let _0x50635b = _0x5c02d6.title;
      const _0x20a5f8 = {
        taskId: _0x5c02d6.taskId
      };
      let _0x8b6441 = {
          fn: "act_517_completeTask",
          method: "get",
          url: "https://activity.10010.com/2024517charges/dotask/completeTask",
          searchParams: _0x20a5f8
        },
        {
          result: _0x2c1631,
          statusCode: _0x269980
        } = await this.request(_0x8b6441),
        _0x3c92b5 = _0x4c672b.get(_0x2c1631, "code", _0x269980);
      if (_0x3c92b5 == "0000") {
        if (_0x2c1631?.["data"]) {
          let {
            num: _0x22c1df,
            title: _0x342214
          } = _0x2c1631.data;
          this.log("完成任务[" + _0x342214 + "]成功: " + _0x22c1df + "次抽奖机会");
        } else {
          this.log("完成任务[" + _0x50635b + ("]失败没有获得抽奖机会"));
        }
      } else {
        let _0x140a16 = _0x2c1631?.["message"] || _0x2c1631?.["msg"] || "";
        this.log("完成任务[" + _0x50635b + "]失败[" + _0x3c92b5 + "]: " + _0x140a16);
      }
    } catch (_0x316430) {
      console.log(_0x316430);
    }
  }
  get_wocare_body(_0x4d6de5, _0x2dbc6d = {}) {
    const _0x1771be = _0x4c672b.time("yyyyMMddhhmmssS"),
      _0x1604c8 = Buffer.from(JSON.stringify(_0x2dbc6d)).toString("base64");
    let _0x40e43b = {
        version: _0x3db78e,
        apiCode: _0x4d6de5,
        channelId: _0x12fe67,
        transactionId: _0x1771be + _0x4c672b.randomString(-53 * -79 + 8677 + -12858 * 1, _0x4e5ad9),
        timeStamp: _0x1771be,
        messageContent: _0x1604c8
      },
      _0x38d082 = [];
    Object.keys(_0x40e43b).sort().forEach(_0x430b5e => {
      _0x38d082.push(_0x430b5e + "=" + _0x40e43b[_0x430b5e]);
    });
    _0x38d082.push("sign=" + _0x5f2a5c);
    _0x40e43b.sign = _0x368aa5.MD5(_0x38d082.join("&")).toString();
    return _0x40e43b;
  }
  async wocare_api(_0x5c2ce0, _0x20488d = {}) {
    let _0x4c8f7b = this.get_wocare_body(_0x5c2ce0, _0x20488d);
    let _0x1b9c78 = {
        fn: "wocare_" + _0x5c2ce0,
        method: "post",
        url: "https://wocare.unisk.cn/api/v1/" + _0x5c2ce0,
        form: _0x4c8f7b
      },
      _0x1c081d = await this.request(_0x1b9c78);
    if (_0x1c081d?.["result"]?.["messageContent"]) {
      try {
        let _0x16bed8 = JSON.parse(Buffer.from(_0x1c081d.result.messageContent, "base64").toString());
        _0x1c081d.result.data = _0x16bed8?.["data"] || _0x16bed8;
        if (_0x16bed8?.["resultMsg"]) {
          _0x1c081d.result.resultMsg = _0x16bed8.resultMsg;
        }
      } catch (_0x33899f) {
        this.log("解析联通祝福返回失败:");
        console.log(_0x33899f);
      }
    }
    return _0x1c081d;
  }
  async wocare_getToken(_0x5d6595, _0x338375 = {}) {
    let _0xe03d23 = false;
    try {
      let _0x5a4ebd = {
          fn: "wocare_getToken",
          method: "get",
          url: "https://wocare.unisk.cn/mbh/getToken",
          searchParams: {
            channelType: _0x2f3d25,
            type: "02",
            ticket: _0x5d6595,
            version: _0x469423,
            timestamp: _0x4c672b.time("yyyyMMddhhmmssS"),
            desmobile: this.mobile,
            num: 0,
            postage: _0x4c672b.randomString(2901 + -2869),
            homePage: "home",
            duanlianjieabc: "qAz2m",
            userNumber: this.mobile
          }
        },
        {
          headers: _0x4a51b5,
          statusCode: _0x571bc4
        } = await this.request(_0x5a4ebd);
      if (_0x571bc4 == -1 * -5081 + 7452 + -81 * 151) {
        if (_0x4a51b5?.["location"]) {
          let _0x32c3c4 = new URL(_0x4a51b5.location),
            _0x4aa2d9 = _0x32c3c4.searchParams.get("sid");
          _0x4aa2d9 ? (this.wocare_sid = _0x4aa2d9, _0xe03d23 = await this.wocare_loginmbh()) : this.log("联通祝福没有获取到sid");
        } else {
          this.log("联通祝福没有获取到location");
        }
      } else {
        this.log("联通祝福获取sid失败[" + _0x571bc4 + "]");
      }
    } catch (_0x4a16ba) {
      console.log(_0x4a16ba);
    } finally {
      return _0xe03d23;
    }
  }
  async wocare_loginmbh(_0x11ffd4 = {}) {
    let _0x4f6412 = false;
    try {
      let _0x24493a = "loginmbh";
      let _0x40ac12 = {
          sid: this.wocare_sid,
          channelType: _0x2f3d25,
          apiCode: _0x24493a
        },
        {
          result: _0xca14a,
          statusCode: _0x40c778
        } = await this.wocare_api(_0x24493a, _0x40ac12),
        _0x43410e = _0x4c672b.get(_0xca14a, "resultCode", _0x40c778);
      if (_0x43410e == "0000") {
        _0x4f6412 = true;
        let {
          token: _0x56ac18
        } = _0xca14a?.["data"];
        this.wocare_token = _0x56ac18;
      } else {
        let _0xffa41d = _0xca14a?.["resultMsg"] || _0xca14a?.["resultDesc"] || "";
        this.log("联通祝福登录失败[" + _0x43410e + "]: " + _0xffa41d);
      }
    } catch (_0x1eb84b) {
      console.log(_0x1eb84b);
    } finally {
      return _0x4f6412;
    }
  }
  async wocare_getSpecificityBanner(_0x596f9b = {}) {
    try {
      let _0x4a6368 = "getSpecificityBanner";
      let _0x352643 = {
          token: this.wocare_token,
          apiCode: _0x4a6368
        },
        {
          result: _0x2a4fc0,
          statusCode: _0x29d087
        } = await this.wocare_api(_0x4a6368, _0x352643),
        _0x2c004b = _0x4c672b.get(_0x2a4fc0, "resultCode", _0x29d087);
      if (_0x2c004b == "0000") {
        let _0x160328 = _0x2a4fc0?.["data"] || [];
        for (let _0x4d923c of _0x160328.filter(_0x3704ef => _0x3704ef.activityStatus === "0" && _0x3704ef.isDeleted === "0")) {
          await this.wocare_getDrawTask(_0x4d923c);
          await this.wocare_loadInit(_0x4d923c);
        }
      } else {
        let _0x5452d4 = _0x2a4fc0?.["resultMsg"] || _0x2a4fc0?.["resultDesc"] || "";
        this.log("联通祝福进入活动失败[" + _0x2c004b + "]: " + _0x5452d4);
      }
    } catch (_0x597b13) {
      console.log(_0x597b13);
    }
  }
  async wocare_loadInit(_0xa9b8ad, _0x455970 = {}) {
    try {
      let _0x43cea8 = "loadInit";
      let _0x5e09f2 = {
          token: this.wocare_token,
          channelType: _0x2f3d25,
          type: _0xa9b8ad.id,
          apiCode: _0x43cea8
        },
        {
          result: _0x32f59b,
          statusCode: _0x3c4540
        } = await this.wocare_api(_0x43cea8, _0x5e09f2),
        _0x5b2835 = _0x4c672b.get(_0x32f59b, "resultCode", _0x3c4540);
      if (_0x5b2835 == "0000") {
        let _0x3d1fd0 = _0x32f59b?.["data"],
          _0x2870a7 = _0x3d1fd0?.["zActiveModuleGroupId"],
          _0x4acf9b = -53 * 133 + -7922 + -1 * -14971;
        switch (_0xa9b8ad.id) {
          case -1 * -5099 + -4934 + -163:
            {
              let _0x143f96 = _0x3d1fd0?.["data"]?.["isPartake"] || -21 * 86 + -4591 * -1 + -2785;
              !_0x143f96 && (_0x4acf9b = -1908 * 1 + 1 * -291 + -11 * -200);
              break;
            }
          case -6680 + -10 * 379 + -1 * -10473:
            {
              _0x4acf9b = parseInt(_0x3d1fd0?.["raffleCountValue"] || -645 * 15 + 2487 + 7188);
              break;
            }
          case 9 * -404 + 4205 * -1 + 7845:
            {
              _0x4acf9b = parseInt(_0x3d1fd0?.["mhRaffleCountValue"] || 3676 + -3676);
              break;
            }
        }
        while (_0x4acf9b-- > -6540 + -7087 + 13627) {
          await _0x4c672b.wait(-1892 + -4771 + -1 * -11663);
          await this.wocare_luckDraw(_0xa9b8ad, _0x2870a7);
        }
      } else {
        let _0x10d6ec = _0x32f59b?.["resultMsg"] || _0x32f59b?.["resultDesc"] || "";
        this.log("联通祝福[" + _0xa9b8ad.name + ("]查询活动失败[") + _0x5b2835 + "]: " + _0x10d6ec);
      }
    } catch (_0x52030a) {
      console.log(_0x52030a);
    }
  }
  async wocare_getDrawTask(_0x1fef95, _0xeaa7bc = {}) {
    try {
      let _0x4e8c52 = "getDrawTask";
      let _0x3f13b4 = {
          token: this.wocare_token,
          channelType: _0x2f3d25,
          type: _0x1fef95.id,
          apiCode: _0x4e8c52
        },
        {
          result: _0x38de2a,
          statusCode: _0x628a3b
        } = await this.wocare_api(_0x4e8c52, _0x3f13b4),
        _0x425051 = _0x4c672b.get(_0x38de2a, "resultCode", _0x628a3b);
      if (_0x425051 == "0000") {
        let _0x1335c7 = _0x38de2a?.["data"]?.["taskList"] || [];
        for (let _0x5019b6 of _0x1335c7.filter(_0x529e83 => _0x529e83.taskStatus == 4795 * -2 + 5604 + 3986)) {
          await this.wocare_completeTask(_0x1fef95, _0x5019b6);
        }
      } else {
        let _0x355044 = _0x38de2a?.["resultMsg"] || _0x38de2a?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x1fef95.name + ("]查询任务失败[") + _0x425051 + "]: " + _0x355044);
      }
    } catch (_0x14c042) {
      console.log(_0x14c042);
    }
  }
  async wocare_completeTask(_0x3f5d92, _0x50e428, _0x360522 = "1", _0x2c48eb = {}) {
    try {
      let _0x50f9e4 = _0x50e428.title,
        _0x4facfd = _0x360522 == "1" ? "领取任务" : "完成任务",
        _0x377c39 = "completeTask";
      let _0x180b7b = {
          token: this.wocare_token,
          channelType: _0x2f3d25,
          task: _0x50e428.id,
          taskStep: _0x360522,
          type: _0x3f5d92.id,
          apiCode: _0x377c39
        },
        {
          result: _0x2cc63e,
          statusCode: _0x184c09
        } = await this.wocare_api(_0x377c39, _0x180b7b),
        _0xa787a0 = _0x4c672b.get(_0x2cc63e, "resultCode", _0x184c09);
      if (_0xa787a0 == "0000") {
        this.log(_0x4facfd + "[" + _0x50f9e4 + "]成功");
        _0x360522 == "1" && (await this.wocare_completeTask(_0x3f5d92, _0x50e428, "4"));
      } else {
        let _0x2e4c1b = _0x2cc63e?.["resultMsg"] || _0x2cc63e?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x3f5d92.name + "]" + _0x4facfd + "[" + _0x50f9e4 + "]失败[" + _0xa787a0 + "]: " + _0x2e4c1b);
      }
    } catch (_0x29872e) {
      console.log(_0x29872e);
    }
  }
  async wocare_luckDraw(_0x103614, _0x53be22, _0x51513d = {}) {
    try {
      let _0x62ee5f = "luckDraw";
      let _0x59007a = {
          token: this.wocare_token,
          channelType: _0x2f3d25,
          zActiveModuleGroupId: _0x53be22,
          type: _0x103614.id,
          apiCode: _0x62ee5f
        },
        {
          result: _0x427eea,
          statusCode: _0x26e062
        } = await this.wocare_api(_0x62ee5f, _0x59007a),
        _0x1d084a = _0x4c672b.get(_0x427eea, "resultCode", _0x26e062);
      if (_0x1d084a == "0000") {
        let _0x1a2341 = _0x4c672b.get(_0x427eea?.["data"], "resultCode", -(-1 * 9765 + 353 + 9413));
        if (_0x1a2341 == "0000") {
          let {
            prizeName: _0x50e0e5,
            prizeDesc: _0x4e8140
          } = _0x427eea?.["data"]?.["data"]?.["prize"];
          this.log("联通祝福[" + _0x103614.name + "]抽奖: " + _0x50e0e5 + "[" + _0x4e8140 + "]");
        } else {
          let _0x2529ec = _0x427eea?.["resultMsg"] || _0x427eea?.["resultDesc"] || "";
          this.log("联通祝福[" + _0x103614.name + ("]抽奖失败[") + _0x1a2341 + "]: " + _0x2529ec);
        }
      } else {
        let _0x575c51 = _0x427eea?.["resultMsg"] || _0x427eea?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x103614.name + ("]抽奖错误[") + _0x1d084a + "]: " + _0x575c51);
      }
    } catch (_0x43e414) {
      console.log(_0x43e414);
    }
  }
  async card_618_authCheck(_0xeeb2f2 = {}) {
    try {
      let _0x4aff88 = {
          fn: "card_618_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x3f5ce1
        } = await this.request(_0x4aff88),
        _0x52a304 = _0x4c672b.get(_0x3f5ce1, "code", -(-22 * -423 + 1710 + -2203 * 5));
      if (_0x52a304 == "0000") {
        let {
          mobile: _0x5ece0b,
          sessionId: _0x15409b,
          tokenId: _0x5d8026,
          userId: _0x195001
        } = _0x3f5ce1?.["data"]?.["authInfo"];
        const _0x551929 = {
          sessionId: _0x15409b,
          tokenId: _0x5d8026,
          userId: _0x195001
        };
        Object.assign(this, _0x551929);
        await this.card_618_queryUserCardInfo();
      } else {
        if (_0x52a304 == "2101000100") {
          let _0x5345ac = _0x3f5ce1?.["data"]?.["woauth_login_url"];
          await this.card_618_login(_0x5345ac);
        } else {
          let _0x3f8426 = _0x3f5ce1?.["msgInside"] || _0x3f5ce1?.["msg"] || "";
          this.log("618集卡获取tokenId失败[" + _0x52a304 + "]: " + _0x3f8426);
        }
      }
    } catch (_0x120bbb) {
      console.log(_0x120bbb);
    }
  }
  async card_618_login(_0x4b5e1f, _0x52f369 = {}) {
    const _0x537f2e = {
      eOgbq: "card_618_login",
      wLPTG: "https://epay.10010.com/woauth2/login",
      JKoYg: "https://epay.10010.com/ci-mcss-party-web/cardSelection/?activityId=NZJK618CJHD",
      DKZIG: "WDQB"
    };
    try {
      let _0x324c93 = _0x4c672b.time("yyyyMM") + "28ZFR";
      _0x4b5e1f += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x324c93 + ("&bizFrom=225&bizChannelCode=225&channelType=WDQB");
      const _0x4370f0 = {
        fn: _0x537f2e.eOgbq,
        method: "get",
        url: _0x537f2e.wLPTG,
        searchParams: {}
      };
      _0x4370f0.searchParams.response_type = "web_token";
      _0x4370f0.searchParams.source = "app_sjyyt";
      _0x4370f0.searchParams.union_session_id = "";
      _0x4370f0.searchParams.device_digest_token_id = this.tokenId_cookie;
      _0x4370f0.searchParams.target_client_id = _0x558192;
      _0x4370f0.searchParams.position = null;
      _0x4370f0.searchParams.redirect_url = _0x537f2e.JKoYg;
      _0x4370f0.searchParams.bizFrom = _0x3e622c;
      _0x4370f0.searchParams.bizChannelCode = _0x46b3a9;
      _0x4370f0.searchParams.channelType = _0x537f2e.DKZIG;
      let _0x4830c7 = _0x4370f0,
        {
          headers: _0x3466a2,
          statusCode: _0xb0793d
        } = await this.request(_0x4830c7);
      if (_0x3466a2?.["location"]) {
        let _0x13496c = new URL(_0x3466a2.location);
        this.rptId = _0x13496c.searchParams.get("rptid");
        this.rptId ? await this.card_618_authCheck() : this.log("618集卡获取rptid失败");
      } else {
        this.log("618集卡获取rptid失败[" + _0xb0793d + "]");
      }
    } catch (_0x624f72) {
      console.log(_0x624f72);
    }
  }
  async card_618_queryUserCardInfo(_0x518cd6 = {}) {
    try {
      const _0x37da94 = {
        activityId: "NZJK618CJHD"
      };
      let _0x3e2ef2 = {
          fn: "card_618_queryUserCardInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/mouldCard/queryUserCardInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x37da94
        },
        {
          result: _0x358e5a
        } = await this.request(_0x3e2ef2),
        _0x4802a6 = _0x4c672b.get(_0x358e5a, "code", -(9561 + -32 * -298 + -19096));
      if (_0x4802a6 == "0000" && _0x358e5a?.["data"]?.["returnCode"] == 3106 * -2 + -23 * -65 + -53 * -89) {
        let {
          userRemain = 6399 + -4822 + -1577,
          isFirst = true
        } = _0x358e5a?.["data"];
        if (isFirst) {
          await this.card_618_unifyDraw("首次进入");
        }
        this.log("618集卡可以抽奖" + userRemain + "次");
        while (userRemain-- > 7075 + -285 * -29 + -15340) {
          await this.card_618_unifyDraw("抽奖");
        }
      } else {
        let _0x4ff8ee = _0x358e5a?.["message"] || _0x358e5a?.["msg"] || "";
        this.log("618集卡进入主页失败[" + _0x4802a6 + "]: " + _0x4ff8ee);
      }
    } catch (_0x6371bb) {
      console.log(_0x6371bb);
    }
  }
  async card_618_unifyDraw(_0x431f14, _0x15179c = {}) {
    try {
      let _0x630a5d = {
          fn: "card_618_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/mouldCard/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            bigActivityId: _0x5868aa.card_618,
            activityId: _0x5868aa.card_618 + _0xe19164[_0x431f14],
            bizFrom: _0x3e622c
          }
        },
        {
          result: _0xbbc5a6
        } = await this.request(_0x630a5d),
        _0x2f8420 = _0x4c672b.get(_0xbbc5a6, "code", -(-9818 + -4038 + 13857));
      if (_0x2f8420 == "0000" && _0xbbc5a6?.["data"]?.["returnCode"] == -8788 + 536 + 8252) {
        let _0x46e05e = _0xbbc5a6?.["data"]?.["prizeId"] || "空气",
          _0x583237 = _0x9c4c5b[_0x46e05e] || _0x46e05e;
        const _0x22f8e4 = {
          notify: true
        };
        this.log("618集卡[" + _0x431f14 + "]: " + _0x583237, _0x22f8e4);
      } else {
        let _0xda184 = _0xbbc5a6?.["data"]?.["returnMsg"] || _0xbbc5a6?.["msg"] || "";
        this.log("618集卡[" + _0x431f14 + "]失败[" + (_0xbbc5a6?.["data"]?.["returnCode"] || _0x2f8420) + "]: " + _0xda184);
      }
    } catch (_0x59f330) {
      console.log(_0x59f330);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0xe84731 = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x73ef67
      } = await this.openPlatLineNew(_0xe84731);
    if (!_0x73ef67) {
      return;
    }
    await this.game_login(_0x73ef67);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0x4b2989 = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0xfccd3c,
        type: _0x5be8ca,
        loc: _0x33b6a9
      } = await this.openPlatLineNew(_0x4b2989);
    if (!_0xfccd3c) {
      return;
    }
    await this.ttlxj_authorize(_0xfccd3c, _0x5be8ca, _0x33b6a9);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x3904ee = new Date().getDate();
    if (_0x3904ee >= -1 * 4811 + 9352 + -4515 && _0x3904ee <= 1 * -4787 + 3520 + 1295) {
      await this.epay_28_authCheck();
      if (_0x1051da.length) {
        let _0x3c73d8 = _0x4c672b.randomList(_0x1051da);
        await this.appMonth_28_bind(_0x3c73d8);
      }
      await this.appMonth_28_queryChance();
    }
  }
  async draw_28_task() {
    let _0x3fc66f = new Date().getDate();
    _0x3fc66f == 9063 + 10 * -482 + -5 * 843 && (await this.draw_28_queryChance());
  }
  async act_517_task() {
    const _0x473609 = {
      jgdty: "2024-06-09 00:00:00"
    };
    let _0x19e840 = new Date("2024-05-10 00:00:00"),
      _0x41d2ad = new Date(_0x473609.jgdty),
      _0x2f7f5c = Date.now();
    if (_0x2f7f5c > _0x19e840.getTime() && _0x2f7f5c < _0x41d2ad.getTime()) {
      if (_0x188394.length) {
        let _0x53384d = _0x4c672b.randomList(_0x188394);
        await this.act_517_bind(_0x53384d);
      }
      await this.act_517_userAccount();
    }
  }
  async card_618_task() {
    const _0x537c14 = {
      DrvSU: "2024-06-21 00:00:00",
      eWOgX: function (_0x2e2e75, _0x460530) {
        return _0x2e2e75 > _0x460530;
      },
      yijGr: function (_0x12eb68, _0x4776cb) {
        return _0x12eb68 < _0x4776cb;
      }
    };
    let _0x2ad5cb = new Date("2024-05-31 00:00:00"),
      _0x4ce692 = new Date(_0x537c14.DrvSU),
      _0x1a0657 = Date.now();
    _0x537c14.eWOgX(_0x1a0657, _0x2ad5cb.getTime()) && _0x537c14.yijGr(_0x1a0657, _0x4ce692.getTime()) && (this.rptId = "", await this.card_618_authCheck());
  }
  async flmf_task() {
    if (this.city.filter(_0x5d152b => _0x5d152b.proCode == "091").length == -7029 + -6505 + -6767 * -2) {
      return;
    }
    let _0x552e7c = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x55dcf1
      } = await this.openPlatLineNew(_0x552e7c);
    if (!_0x55dcf1) {
      return;
    }
    await this.flmf_login(_0x55dcf1);
  }
  async ltyp_task() {
    let _0x1cee90 = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x318b1b
      } = await this.openPlatLineNew(_0x1cee90);
    if (!_0x318b1b) {
      return;
    }
    await this.ltyp_login(_0x318b1b);
  }
  async ltzf_task() {
    let _0x2db4d6 = new URL("https://wocare.unisk.cn/mbh/getToken");
    _0x2db4d6.searchParams.append("channelType", _0x2f3d25);
    _0x2db4d6.searchParams.append("homePage", "home");
    _0x2db4d6.searchParams.append("duanlianjieabc", "qAz2m");
    let _0x4acf51 = _0x2db4d6.toString(),
      {
        ticket: _0x588ef9
      } = await this.openPlatLineNew(_0x4acf51);
    if (!_0x588ef9) {
      return;
    }
    if (!(await this.wocare_getToken(_0x588ef9))) {
      return;
    }
    for (let _0x305ba1 of _0x4376d8) {
      await this.wocare_getDrawTask(_0x305ba1);
      await this.wocare_loadInit(_0x305ba1);
    }
  }
  async woread_draw_task(_0x10af6a) {
    await this.woread_getSeeVideoAddNumber(_0x10af6a);
    await this.woread_addDrawTimes(_0x10af6a);
    await this.woread_getActivityNumber(_0x10af6a);
  }
  async woread_task() {
    for (let _0x524680 of _0x5724ea) {
      await this.woread_draw_task(_0x524680);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    this.switch_woread_token(this.woread_m_accesstoken);
    let _0x32573f = Object.values(this.moonbox_task_record).filter(_0x1667b7 => _0x1667b7 === true).length;
    while (this.need_read_rabbit || _0x32573f) {
      let _0x7e565 = -8699 * 1 + 9332 * -1 + -6011 * -3;
      const _0x5ac339 = {
        readTime: _0x7e565
      };
      await this.woread_m_addReadTime(_0x5ac339);
      let _0x4cf515 = Date.now();
      if (_0x32573f) {
        await this.moonbox_m_queryCurTaskStatus();
      }
      _0x32573f = Object.values(this.moonbox_task_record).filter(_0x195813 => _0x195813 === true).length;
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      let _0x24da6c = Date.now(),
        _0x5d5d61 = (16215 + -16090) * (-8192 + 858 + 8334) + _0x4cf515 - _0x24da6c;
      (this.need_read_rabbit || _0x32573f) && _0x5d5d61 > 443 * -5 + 8187 + -5972 && (this.log("等待2分钟..."), await _0x4c672b.wait(_0x5d5d61));
    }
    this.switch_woread_token(this.woread_accesstoken);
  }
  async userLoginTask() {
    const _0x20cddf = ("4|6|7|5|3|2|1|0").split("|");
    let _0x4678ad = -6499 + -1688 + 8187;
    while (true) {
      switch (_0x20cddf[_0x4678ad++]) {
        case "0":
          await this.moonbox_queryCurTaskStatus();
          continue;
        case "1":
          if (!_0x55391c) {
            await this.moonbox_queryActiveInfo();
          }
          continue;
        case "2":
          this.switch_woread_token(this.woread_accesstoken);
          continue;
        case "3":
          if (!(await this.woread_m_login())) {
            return;
          }
          continue;
        case "4":
          if (!(await this.onLine())) {
            return;
          }
          continue;
        case "5":
          if (!(await this.woread_m_auth())) {
            return;
          }
          continue;
        case "6":
          if (!(await this.woread_auth())) {
            return;
          }
          continue;
        case "7":
          if (!(await this.woread_login())) {
            return;
          }
          continue;
      }
      break;
    }
  }
  async userTask() {
    const _0x1f56f4 = {
        QIAyj: "2|1|7|9|8|6|5|0|3|4"
      },
      _0x589495 = _0x1f56f4.QIAyj.split("|");
    let _0x5ecd13 = 12562 + -12562 * 1;
    while (true) {
      switch (_0x589495[_0x5ecd13++]) {
        case "0":
          if (!_0xedc529) {
            await this.ltzf_task();
          }
          continue;
        case "1":
          if (!_0x159493) {
            await this.sign_task();
          }
          continue;
        case "2":
          _0x4c672b.log("\n------------------ 账号[" + this.index + ("] ------------------"));
          continue;
        case "3":
          await this.flmf_task();
          continue;
        case "4":
          await this.woread_task();
          continue;
        case "5":
          await this.card_618_task();
          continue;
        case "6":
          await this.draw_28_task();
          continue;
        case "7":
          await this.ttlxj_task();
          continue;
        case "8":
          await this.epay_28_task();
          continue;
        case "9":
          await this.ltyp_task();
          continue;
      }
      break;
    }
  }
  async userTestTask() {
    _0x4c672b.log("\n------------------ 账号[" + this.index + ("] ------------------"));
    await this.ltyp_task();
  }
}
!(async () => {
  //if (!(await _0x342cb7())) {
  //  return;
  //}
  await _0xdfa6ec();
  _0x4c672b.read_env(_0x333e45);
  _0x4c672b.log("\n------------------------------------");
  _0x4c672b.log("首页签到设置为: " + (_0x159493 ? "不" : "") + "运行");
  _0x4c672b.log("联通祝福设置为: " + (_0xedc529 ? "不" : "") + "运行");
  _0x4c672b.log("------------------------------------\n");
  for (let _0x3a7d7a of _0x4c672b.userList) {
    await _0x3a7d7a.userLoginTask();
  }
  for (let _0x3df144 of _0x4c672b.userList.filter(_0xa33969 => _0xa33969.valid)) {
    await _0x3df144.userTask();
  }
  let _0x1b59a7 = _0x4c672b.userList.filter(_0x3fbb9d => _0x3fbb9d.valid && _0x3fbb9d.woread_verifycode && (_0x3fbb9d.need_read_rabbit || Object.values(_0x3fbb9d.moonbox_task_record).filter(_0x5c7f98 => _0x5c7f98 === true).length));
  if (_0x1b59a7.length) {
    let _0x46ed2b = [];
    _0x4c672b.log("\n============ 开始刷阅读时长 ============");
    for (let _0x5ef13c of _0x1b59a7) {
      _0x46ed2b.push(_0x5ef13c.woread_reading_task());
    }
    await Promise.all(_0x46ed2b);
  }
})().catch(_0x56ffeb => _0x4c672b.log(_0x56ffeb))["finally"](() => _0x4c672b.exitNow());
async function _0x342cb7(_0x1f9ad3 = -1289 + 1 * -3623 + 4912) {
  let _0x3e3c00 = false;
  try {
    let _0x3fa48f = {
        fn: "auth",
        method: "get",
        url: _0x2eca5f,
        timeout: 20000
      },
      {
        statusCode: _0x196f7a,
        result: _0x3b4e95
      } = await _0x23c014.request(_0x3fa48f);
    if (_0x196f7a != 8314 + 2 * -4057) {
      _0x1f9ad3++ < _0x239ea0 && (_0x3e3c00 = await _0x342cb7(_0x1f9ad3));
      return _0x3e3c00;
    }
    if (_0x3b4e95?.["code"] == -3 * 2969 + -4 * -1994 + 931) {
      _0x3b4e95 = JSON.parse(_0x3b4e95.data.file.data);
      if (_0x3b4e95?.["commonNotify"] && _0x3b4e95.commonNotify.length > -5027 + -1 * 4867 + 9894) {
        const _0x3d781c = {
          notify: true
        };
        _0x4c672b.log(_0x3b4e95.commonNotify.join("\n") + "\n", _0x3d781c);
      }
      _0x3b4e95?.["commonMsg"] && _0x3b4e95.commonMsg.length > 10245 + 5 * -2049 && _0x4c672b.log(_0x3b4e95.commonMsg.join("\n") + "\n");
      if (_0x3b4e95[_0x4a2c68]) {
        let _0x589da0 = _0x3b4e95[_0x4a2c68];
        _0x589da0.status == 10646 + -10646 ? _0x2bad9c >= _0x589da0.version ? (_0x3e3c00 = true, _0x4c672b.log(_0x589da0.msg[_0x589da0.status]), _0x4c672b.log(_0x589da0.updateMsg), _0x4c672b.log("现在运行的脚本版本是：" + _0x2bad9c + ("，最新脚本版本：") + _0x589da0.latestVersion)) : _0x4c672b.log(_0x589da0.versionMsg) : _0x4c672b.log(_0x589da0.msg[_0x589da0.status]);
      } else {
        _0x4c672b.log(_0x3b4e95.errorMsg);
      }
    } else {
      _0x1f9ad3++ < _0x239ea0 && (_0x3e3c00 = await _0x342cb7(_0x1f9ad3));
    }
  } catch (_0x4e2a96) {
    _0x4c672b.log(_0x4e2a96);
  } finally {
    return _0x3e3c00;
  }
}
async function _0xdfa6ec() {
  let _0x5ad89b = false;
  try {
    let _0x1c4303 = {
        fn: "getTaskUrl",
        method: "get",
        url: _0x1971e5
      },
      {
        statusCode: _0x10974a,
        result: _0x54f592
      } = await _0x23c014.request(_0x1c4303);
    if (_0x10974a != 53 * -95 + 1 * -4951 + 10186) {
      return Promise.resolve();
    }
    if (_0x54f592?.["code"] == 1958 + -1 * 1958) {
      const _0x6a5424 = "1|0|4|3|2".split("|");
      let _0x504e48 = 1 * -5789 + -690 + 6479;
      while (true) {
        switch (_0x6a5424[_0x504e48++]) {
          case "0":
            _0x333e1b = _0x54f592?.["ltyp_lottery"] || _0x333e1b;
            continue;
          case "1":
            _0x54f592 = JSON.parse(_0x54f592.data.file.data);
            continue;
          case "2":
            _0x188394 = _0x54f592?.["act_517_share"] || _0x188394;
            continue;
          case "3":
            _0x1051da = _0x54f592?.["appMonth_28_share"] || _0x1051da;
            continue;
          case "4":
            _0x5724ea = _0x54f592?.["woread_draw_id"] || _0x5724ea;
            continue;
        }
        break;
      }
    }
  } catch (_0x45222a) {
    _0x4c672b.log(_0x45222a);
  } finally {
    return _0x5ad89b;
  }
}
function _0x4a9430(_0x3dc8ae) {
  const _0x2aafe6 = {
    yvxZl: "8|11|4|6|0|2|9|3|1|5|7|10",
    XQHlw: function (_0xafe411, _0x1a1c93) {
      return _0xafe411 * _0x1a1c93;
    },
    Vqhta: function (_0x1d5f01, _0x309f26) {
      return _0x1d5f01 + _0x309f26;
    },
    DwFpa: function (_0x26d367, _0x74b111) {
      return _0x26d367 > _0x74b111;
    },
    xTofR: function (_0x2e63dc, _0x162576) {
      return _0x2e63dc < _0x162576;
    },
    IVyYG: function (_0x4f1f56, _0x2039d6) {
      return _0x4f1f56 / _0x2039d6;
    },
    FgTOM: function (_0x5aeb62, _0x34bf8a) {
      return _0x5aeb62 + _0x34bf8a;
    },
    veYKf: function (_0x1e33ed, _0x3b519f) {
      return _0x1e33ed + _0x3b519f;
    },
    taswF: function (_0x17285d, _0x4a430c) {
      return _0x17285d == _0x4a430c;
    },
    kLoTN: function (_0x25c385, _0x5cc777) {
      return _0x25c385 + _0x5cc777;
    },
    REgkz: "2|4|1|3|0",
    RYZSb: function (_0x59c1e3, _0x3c0b3c) {
      return _0x59c1e3(_0x3c0b3c);
    },
    bkBSL: "./sendNotify",
    PdJDD: "\n============== 推送 ==============",
    lyHhY: function (_0x567301, _0xd13f19) {
      return _0x567301 && _0xd13f19;
    },
    krXWR: function (_0x159c09, _0x2a2e3a) {
      return _0x159c09(_0x2a2e3a);
    },
    XUMTK: function (_0xadbeca, _0x25979d) {
      return _0xadbeca + _0x25979d;
    },
    JPmDQ: function (_0x3b1bdd, _0x54354c) {
      return _0x3b1bdd == _0x54354c;
    },
    ddlms: function (_0x3e5047, _0x561d91) {
      return _0x3e5047 + _0x561d91;
    },
    XHXqu: function (_0xcd7d43, _0x45675d) {
      return _0xcd7d43(_0x45675d);
    },
    IQdso: function (_0x3d3cbf, _0x57d63b) {
      return _0x3d3cbf == _0x57d63b;
    },
    wNdkC: function (_0x34cff3, _0x297b05) {
      return _0x34cff3 * _0x297b05;
    },
    Wgtxl: "xxxxxxxx-xxxx-4xxx-4xxx-xxxxxxxxxxxx",
    druWp: function (_0x3992f2, _0x202e83) {
      return _0x3992f2 * _0x202e83;
    },
    WKxku: function (_0x292de6, _0x30883b) {
      return _0x292de6 / _0x30883b;
    },
    UQJJY: function (_0x19356e, _0x19dee2) {
      return _0x19356e - _0x19dee2;
    },
    nqEKu: function (_0x1441a0, _0x4c3e0d) {
      return _0x1441a0(_0x4c3e0d);
    },
    ebURY: "string",
    wOjQA: "yyyy-MM-dd ",
    NJgbX: function (_0x232162, _0x4db6cb) {
      return _0x232162 - _0x4db6cb;
    },
    WDhwt: "hh:mm:ss.S",
    SDyoy: function (_0x21e591, _0x53152f) {
      return _0x21e591 * _0x53152f;
    },
    fQvmm: function (_0x3af697, _0x1f0e2b) {
      return _0x3af697 * _0x1f0e2b;
    },
    vJcvo: function (_0x55fce2, _0x54b164) {
      return _0x55fce2 * _0x54b164;
    },
    MmmEu: function (_0x2a7283, _0x4a53cc) {
      return _0x2a7283 > _0x4a53cc;
    },
    iAYju: function (_0x4a2157, _0x3d203a) {
      return _0x4a2157 - _0x3d203a;
    },
    kKnzB: function (_0x3e1d32, _0x276bd9) {
      return _0x3e1d32 - _0x276bd9;
    },
    xZtHr: function (_0x32f7f7, _0x119626) {
      return _0x32f7f7 < _0x119626;
    }
  };
  return new class {
    constructor(_0x20ff7f) {
      const _0x129100 = _0x2aafe6.yvxZl.split("|");
      let _0x391dce = -4002 + -3521 * 2 + 11044;
      while (true) {
        switch (_0x129100[_0x391dce++]) {
          case "0":
            this.notifyFlag = true;
            continue;
          case "1":
            this.default_timestamp_len = -4612 + -5927 + -4 * -2638;
            continue;
          case "2":
            this.userIdx = 220 + -73 * 47 + 3211;
            continue;
          case "3":
            this.userCount = -606 * 8 + -82 * -79 + -10 * 163;
            continue;
          case "4":
            const _0x39680c = {
              time: true
            };
            this.log("[" + this.name + ("]开始运行\n"), _0x39680c);
            continue;
          case "5":
            this.default_wait_interval = -63 * -11 + 4118 + -3811;
            continue;
          case "6":
            this.notifyStr = [];
            continue;
          case "7":
            this.default_wait_limit = _0x2aafe6.XQHlw(-1725 + 41 * -83 + -4 * -1297, 3 * -129 + 4012 * -1 + 4459) * (-8220 + -9531 + -18751 * -1);
            continue;
          case "8":
            this.name = _0x20ff7f;
            continue;
          case "9":
            this.userList = [];
            continue;
          case "10":
            this.default_wait_ahead = -1 * 7817 + 105 * -53 + 13382;
            continue;
          case "11":
            this.startTime = Date.now();
            continue;
        }
        break;
      }
    }
    log(_0x2ae7b7, _0x275447 = {}) {
      let _0x1b963d = {
        console: true
      };
      Object.assign(_0x1b963d, _0x275447);
      if (_0x1b963d.time) {
        let _0x3ef8cb = _0x1b963d.fmt || "hh:mm:ss";
        _0x2ae7b7 = _0x2aafe6.Vqhta("[" + this.time(_0x3ef8cb) + "]", _0x2ae7b7);
      }
      if (_0x1b963d.notify) {
        this.notifyStr.push(_0x2ae7b7);
      }
      if (_0x1b963d.console) {
        console.log(_0x2ae7b7);
      }
    }
    get(_0x2a0329, _0x4bceb4, _0x4a1980 = "") {
      let _0x5317bb = _0x4a1980;
      _0x2a0329?.["hasOwnProperty"](_0x4bceb4) && (_0x5317bb = _0x2a0329[_0x4bceb4]);
      return _0x5317bb;
    }
    pop(_0x1b7e25, _0xe7c4ac, _0x41427d = "") {
      let _0x189530 = _0x41427d;
      _0x1b7e25?.["hasOwnProperty"](_0xe7c4ac) && (_0x189530 = _0x1b7e25[_0xe7c4ac], delete _0x1b7e25[_0xe7c4ac]);
      return _0x189530;
    }
    copy(_0x35e17d) {
      return Object.assign({}, _0x35e17d);
    }
    read_env(_0x313c6f) {
      let _0x2818ab = _0x52f10b.map(_0x4a0e55 => process.env[_0x4a0e55]);
      for (let _0x2db17f of _0x2818ab.filter(_0x898472 => !!_0x898472)) {
        let _0xd94a01 = _0x55899c.filter(_0x477b8e => _0x2db17f.includes(_0x477b8e)),
          _0x40b5c7 = _0x2aafe6.DwFpa(_0xd94a01.length, -2 * 2915 + 6659 * -1 + 12489) ? _0xd94a01[-12 * 281 + 1336 + 2036] : _0x55899c[6125 + -1028 + -5097];
        for (let _0x1c8866 of _0x2db17f.split(_0x40b5c7).filter(_0x32ae75 => !!_0x32ae75)) {
          this.userList.push(new _0x313c6f(_0x1c8866));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x5d04ec = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x52f10b.map(_0x46a071 => "[" + _0x46a071 + "]").join("或"), _0x5d04ec);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x5db126, _0x57b22b, _0x392357 = {}) {
      while (_0x2aafe6.xTofR(_0x57b22b.idx, _0x4c672b.userList.length)) {
        let _0x258f29 = _0x4c672b.userList[_0x57b22b.idx++];
        if (!_0x258f29.valid) {
          continue;
        }
        await _0x258f29[_0x5db126](_0x392357);
      }
    }
    async threadTask(_0xa21bf9, _0x52bb63) {
      let _0x279723 = [];
      let _0x2e43ab = {
        idx: 0
      };
      while (_0x52bb63--) {
        _0x279723.push(this.threads(_0xa21bf9, _0x2e43ab));
      }
      await Promise.all(_0x279723);
    }
    time(_0xc0075d, _0x39d0d0 = null) {
      let _0x47b00f = _0x39d0d0 ? new Date(_0x39d0d0) : new Date(),
        _0x3e8b62 = {
          "M+": _0x2aafe6.Vqhta(_0x47b00f.getMonth(), -851 * -8 + 548 * -7 + -2971),
          "d+": _0x47b00f.getDate(),
          "h+": _0x47b00f.getHours(),
          "m+": _0x47b00f.getMinutes(),
          "s+": _0x47b00f.getSeconds(),
          "q+": Math.floor(_0x2aafe6.IVyYG(_0x2aafe6.FgTOM(_0x47b00f.getMonth(), 3598 + -4 * 354 + 2179 * -1), -1 * 416 + -5369 + 5788)),
          S: this.padStr(_0x47b00f.getMilliseconds(), 17141 + 82 * -209)
        };
      /(y+)/.test(_0xc0075d) && (_0xc0075d = _0xc0075d.replace(RegExp.$1, _0x2aafe6.veYKf(_0x47b00f.getFullYear(), "").substr(-5837 + -6967 * 1 + 12808 - RegExp.$1.length)));
      for (let _0x13db8b in _0x3e8b62) new RegExp(_0x2aafe6.Vqhta("(" + _0x13db8b, ")")).test(_0xc0075d) && (_0xc0075d = _0xc0075d.replace(RegExp.$1, _0x2aafe6.taswF(9414 + -1367 + 3 * -2682, RegExp.$1.length) ? _0x3e8b62[_0x13db8b] : _0x2aafe6.Vqhta("00", _0x3e8b62[_0x13db8b]).substr(_0x2aafe6.kLoTN("", _0x3e8b62[_0x13db8b]).length)));
      return _0xc0075d;
    }
    async showmsg() {
      const _0x5f37a6 = _0x2aafe6.REgkz.split("|");
      let _0x531b48 = 2734 + -2734;
      while (true) {
        switch (_0x5f37a6[_0x531b48++]) {
          case "0":
            await _0x19b840.sendNotify(this.name, this.notifyStr.join("\n"));
            continue;
          case "1":
            var _0x19b840 = _0x2aafe6.RYZSb(require, _0x2aafe6.bkBSL);
            continue;
          case "2":
            if (!this.notifyFlag) {
              return;
            }
            continue;
          case "3":
            this.log(_0x2aafe6.PdJDD);
            continue;
          case "4":
            if (!this.notifyStr.length) {
              return;
            }
            continue;
        }
        break;
      }
    }
    padStr(_0x246b7e, _0x485edb, _0x56d4e8 = {}) {
      let _0x4ec3df = _0x56d4e8.padding || "0",
        _0x5951a7 = _0x56d4e8.mode || "l",
        _0x2508bb = String(_0x246b7e),
        _0x2284d5 = _0x2aafe6.DwFpa(_0x485edb, _0x2508bb.length) ? _0x485edb - _0x2508bb.length : -1012 + 5 * -1777 + 9897,
        _0x4f9fa3 = "";
      for (let _0x325347 = 12269 + -12269 * 1; _0x325347 < _0x2284d5; _0x325347++) {
        _0x4f9fa3 += _0x4ec3df;
      }
      _0x5951a7 == "r" ? _0x2508bb = _0x2508bb + _0x4f9fa3 : _0x2508bb = _0x4f9fa3 + _0x2508bb;
      return _0x2508bb;
    }
    json2str(_0x50c3fd, _0x5546cf, _0x126bf8 = false) {
      let _0x2a028b = [];
      for (let _0xf7404a of Object.keys(_0x50c3fd).sort()) {
        let _0xf3ba9 = _0x50c3fd[_0xf7404a];
        if (_0x2aafe6.lyHhY(_0xf3ba9, _0x126bf8)) {
          _0xf3ba9 = _0x2aafe6.krXWR(encodeURIComponent, _0xf3ba9);
        }
        _0x2a028b.push(_0x2aafe6.kLoTN(_0x2aafe6.XUMTK(_0xf7404a, "="), _0xf3ba9));
      }
      return _0x2a028b.join(_0x5546cf);
    }
    str2json(_0x5ac0e0, _0x2b412e = false) {
      let _0x55b019 = {};
      for (let _0x251032 of _0x5ac0e0.split("&")) {
        if (!_0x251032) {
          continue;
        }
        let _0x1a4334 = _0x251032.indexOf("=");
        if (_0x2aafe6.JPmDQ(_0x1a4334, -(1 * -6722 + -3001 + 9724))) {
          continue;
        }
        let _0x43dbca = _0x251032.substr(3384 + -66 + -3318, _0x1a4334),
          _0x5a058c = _0x251032.substr(_0x2aafe6.ddlms(_0x1a4334, -7573 + 5188 + -2386 * -1));
        if (_0x2b412e) {
          _0x5a058c = _0x2aafe6.XHXqu(decodeURIComponent, _0x5a058c);
        }
        _0x55b019[_0x43dbca] = _0x5a058c;
      }
      return _0x55b019;
    }
    randomPattern(_0x2e6754, _0x2d62bd = "abcdef0123456789") {
      let _0x1ef277 = "";
      for (let _0x24e475 of _0x2e6754) {
        if (_0x2aafe6.IQdso(_0x24e475, "x")) {
          _0x1ef277 += _0x2d62bd.charAt(Math.floor(Math.random() * _0x2d62bd.length));
        } else {
          _0x2aafe6.IQdso(_0x24e475, "X") ? _0x1ef277 += _0x2d62bd.charAt(Math.floor(_0x2aafe6.wNdkC(Math.random(), _0x2d62bd.length))).toUpperCase() : _0x1ef277 += _0x24e475;
        }
      }
      return _0x1ef277;
    }
    randomUuid() {
      return this.randomPattern(_0x2aafe6.Wgtxl);
    }
    randomString(_0x1e4fee, _0x58454d = "abcdef0123456789") {
      let _0x437894 = "";
      for (let _0x5b91d3 = -1 * -4835 + -9872 + 5037; _0x2aafe6.xTofR(_0x5b91d3, _0x1e4fee); _0x5b91d3++) {
        _0x437894 += _0x58454d.charAt(Math.floor(Math.random() * _0x58454d.length));
      }
      return _0x437894;
    }
    randomList(_0x243ee5) {
      let _0x5d4508 = Math.floor(_0x2aafe6.druWp(Math.random(), _0x243ee5.length));
      return _0x243ee5[_0x5d4508];
    }
    wait(_0x7fb1b7) {
      return new Promise(_0x13dc83 => setTimeout(_0x13dc83, _0x7fb1b7));
    }
    async exitNow() {
      await this.showmsg();
      let _0x3b76e8 = Date.now(),
        _0x4e1727 = _0x2aafe6.WKxku(_0x2aafe6.UQJJY(_0x3b76e8, this.startTime), -4982 + 1 * -6298 + 12280);
      this.log("");
      const _0x265b3c = {
        time: true
      };
      this.log("[" + this.name + ("]运行结束，共运行了") + _0x4e1727 + "秒", _0x265b3c);
      process.exit(8114 + -2 * 4057);
    }
    normalize_time(_0x138270, _0x5b6289 = {}) {
      let _0x40e1b4 = _0x5b6289.len || this.default_timestamp_len;
      _0x138270 = _0x138270.toString();
      let _0x2a2577 = _0x138270.length;
      while (_0x2a2577 < _0x40e1b4) {
        _0x138270 += "0";
      }
      _0x2a2577 > _0x40e1b4 && (_0x138270 = _0x138270.slice(7433 + 13 * -389 + -2376, -1 * 2059 + 107 * -77 + -491 * -21));
      return _0x2aafe6.nqEKu(parseInt, _0x138270);
    }
    async wait_until(_0x25aba7, _0x4c0658 = {}) {
      let _0x219c45 = _0x4c0658.logger || this,
        _0x501f43 = _0x4c0658.interval || default_wait_interval,
        _0x51a46f = _0x4c0658.limit || default_wait_limit,
        _0xbc5c1a = _0x4c0658.ahead || default_wait_ahead;
      if (_0x2aafe6.IQdso(typeof _0x25aba7, _0x2aafe6.ebURY) && _0x25aba7.includes(":")) {
        if (_0x25aba7.includes("-")) {
          _0x25aba7 = new Date(_0x25aba7).getTime();
        } else {
          let _0x59861b = this.time(_0x2aafe6.wOjQA);
          _0x25aba7 = new Date(_0x2aafe6.Vqhta(_0x59861b, _0x25aba7)).getTime();
        }
      }
      let _0x1afff0 = _0x2aafe6.NJgbX(this.normalize_time(_0x25aba7), _0xbc5c1a),
        _0x5e4710 = this.time(_0x2aafe6.WDhwt, _0x1afff0),
        _0x1b5a4f = Date.now();
      _0x2aafe6.DwFpa(_0x1b5a4f, _0x1afff0) && (_0x1afff0 += _0x2aafe6.SDyoy(_0x2aafe6.fQvmm(_0x2aafe6.vJcvo(3 * -1091 + -2025 + -6 * -887, -105 * 37 + -3367 + 7312), 3719 + -365 * -11 + 6 * -1279), -8917 + 3 * -1229 + 13604));
      let _0x10797a = _0x2aafe6.NJgbX(_0x1afff0, _0x1b5a4f);
      if (_0x2aafe6.MmmEu(_0x10797a, _0x51a46f)) {
        const _0x1b182a = {
          time: true
        };
        _0x219c45.log("离目标时间[" + _0x5e4710 + "]大于" + _0x51a46f / (-7265 + -3679 + 11944) + "秒,不等待", _0x1b182a);
      } else {
        const _0x2644ea = {
          time: true
        };
        _0x219c45.log("离目标时间[" + _0x5e4710 + "]还有" + _0x2aafe6.WKxku(_0x10797a, -2472 * -1 + 9421 + 3631 * -3) + "秒,开始等待", _0x2644ea);
        while (_0x2aafe6.MmmEu(_0x10797a, 5592 + -82 * 51 + -1410)) {
          let _0x59135c = Math.min(_0x10797a, _0x501f43);
          await this.wait(_0x59135c);
          _0x1b5a4f = Date.now();
          _0x10797a = _0x2aafe6.iAYju(_0x1afff0, _0x1b5a4f);
        }
        const _0x246dd7 = {
          time: true
        };
        _0x219c45.log("已完成等待", _0x246dd7);
      }
    }
    async wait_gap_interval(_0x380985, _0x47b42d) {
      let _0x55e493 = _0x2aafe6.kKnzB(Date.now(), _0x380985);
      _0x2aafe6.xZtHr(_0x55e493, _0x47b42d) && (await this.wait(_0x47b42d - _0x55e493));
    }
  }(_0x3dc8ae);
}