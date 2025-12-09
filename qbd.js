/*
版本：v3
入口：https://h5.qbida.vip/#/?shareCode=83NPKAI
奖励：低价寄快递+看广告得积分换余额
实现功能：签到+看广告+自动积分换现金
7.26修复代码执行报错
需要安装axios和crypto-js依赖
npm install axios crypto-js -g
年终奖项目，可接码使用

登录需要填写邀请码才能进入：83NPKAI
变量名：qbd
变量值：export qbd="账号#密码"
多账号换行或@分隔，或新建变量qbd
*/

const axios = require("axios"),

  CryptoJS = require("crypto-js"),
  UA = "okhttp-okgo/jeasonlzy";
function log(_0x341db5) {
  console.log(_0x341db5);
}
function readEnvAccounts() {
  const _0x3869df = (process.env.qbd || "").trim();
  if (!_0x3869df) return [];
  return _0x3869df.split(/[@\r\n]+/).map(_0x140281 => _0x140281.trim()).filter(Boolean).map(_0x169197 => {
    const [_0x30acaf, _0x3e7b98] = _0x169197.split("#");
    return _0x30acaf && _0x3e7b98 ? {
      "phone": _0x30acaf,
      "pwd": _0x3e7b98
    } : null;
  }).filter(Boolean);
}
async function request(_0x141927, _0x32bc85 = "GET", _0x358192 = null, _0x4ce774 = "") {
  const _0x58d122 = Date.now(),
    _0x64a7bd = {
      "User-Agent": UA,
      "source": "ANDROID",
      "appId": "com.qsongq.fjqexpress",
      "version": "1835",
      "token": _0x4ce774 || ""
    },
    _0x1e2b5f = {
      "method": _0x32bc85,
      "url": _0x141927 + "?t=" + _0x58d122,
      "headers": _0x64a7bd,
      "timeout": 10000
    };
  _0x358192 && (_0x64a7bd["Content-Type"] = "application/json;charset=utf-8", _0x1e2b5f.data = _0x358192);
  try {
    return (await axios(_0x1e2b5f)).data;
  } catch (_0x2c10ea) {
    return {
      "code": -1,
      "msg": _0x2c10ea.message
    };
  }
}
async function login(_0x36d807, _0x136ec8) {
  const _0x1269ca = await request("http://y3zhmdginr.wuliucps.com/ht/web/login/loginNew", "POST", {
    "editionCode": 1835,
    "deviceType": 1,
    "password": _0x136ec8,
    "genre": 0,
    "edition": "1.9.5",
    "deviceNo": "",
    "account": _0x36d807
  });
  console.log(_0x1269ca)
  return _0x1269ca.code === 0 ? _0x1269ca.data.token : null;
}
async function getUserInfo(_0xa52aaf) {
  const _0x3d5205 = await request("http://wuliucps.com/ht/web/login/info", "GET", null, _0xa52aaf);
  console.log(_0x3d5205);
  return _0x3d5205.code === 0 ? _0x3d5205.data : null;
}
async function getTaskList(_0xa552c) {
  const _0x1a57f4 = await request("http://y3zhmdginr.wuliucps.com/ht/web/task/taskList", "GET", null, _0xa552c);
  if (_0x1a57f4.code !== 0) return {};
  const _0x479dc8 = {};
  _0x1a57f4.data.forEach(_0x2b5c65 => _0x2b5c65.list.forEach(_0x3afa2e => _0x479dc8[_0x3afa2e.title] = _0x3afa2e));
  return _0x479dc8;
}
async function doSign(_0x41c07f) {
  const _0xdc172f = await request("http://wuliucps.com/ht/web/mine/signIn", "POST", {
    "group": ""
  }, _0x41c07f);
  return _0xdc172f.code === 0 ? _0xdc172f.data : null;
}
async function doDouble(_0x71f0b8) {
  const _0x4ae7f3 = {
      "data": "verify:true amount:10 name:积分 errorCode:0 errorMsg:"
    },
    _0x10fa3d = await request("http://wuliucps.com/ht/web/mine/doublePoint", "POST", _0x4ae7f3, _0x71f0b8);
  return _0x10fa3d.code === 0 ? _0x10fa3d.data : null;
}
async function watchVideo(_0x50bab6) {
  const _0x476a75 = {
      "data": "verify:true amount:10 name:积分 errorCode:0 errorMsg:"
    },
    _0x596c26 = await request("http://wuliucps.com/ht/web/task/watchVideo", "POST", _0x476a75, _0x50bab6);
  return _0x596c26.code === 0 ? _0x596c26.data : null;
}
async function runAccount(_0x2bd4e2, _0x118644) {
  const _0x199ce3 = await login(_0x2bd4e2, _0x118644);
  if (!_0x199ce3) {
    log("❌ 账号 " + _0x2bd4e2 + " 登录失败");
    return;
  }
  const _0x4608c5 = await getUserInfo(_0x199ce3);
  if (!_0x4608c5) {
    {
      log("❌ 账号 " + _0x2bd4e2 + " 获取用户信息失败");
      return;
    }
  }
  const _0x4ba94d = await getTaskList(_0x199ce3),
    _0x434c86 = _0x2bd4e2.length >= 7 ? _0x2bd4e2.slice(0, 3) + "****" + _0x2bd4e2.slice(-4) : _0x2bd4e2;
  let _0x491874 = "📊 账号：" + _0x434c86 + "\n💰 当前积分：" + _0x4608c5.integral + "\n";
  if (_0x4ba94d["签到赚积分"]?.["status"] === 1) {
    _0x491874 += "✅ 今日已签到 (任务列表确认)\n";
  } else {
    {
      const _0x10b214 = await doSign(_0x199ce3);
      _0x491874 += _0x10b214 != null ? "✅ 签到成功，获得 " + _0x10b214 + " 积分\n" : "❌ 签到失败\n";
    }
  }
  if (_0x4608c5.isSignDouble) _0x491874 += "✅ 今日已看广告\n";else {
    const _0x4a4904 = await doDouble(_0x199ce3);
    _0x491874 += _0x4a4904 != null ? "✅ 看广告成功，获得 " + _0x4a4904 + " 积分\n" : "❌ 看广告失败\n";
  }
  if (_0x4ba94d["看视频领好运"]?.["status"] === 1) _0x491874 += "✅ 今日已完成所有看视频任务 (任务列表确认)\n";else {
    {
      let _0x5687da = 0;
      for (let _0x1210c0 = 0; _0x1210c0 < 3; _0x1210c0++) {
        const _0x5e6e17 = await watchVideo(_0x199ce3);
        if (_0x5e6e17 != null) _0x5687da += _0x5e6e17;
      }
      _0x491874 += _0x5687da > 0 ? "✅ 看视频完成，共获得 " + _0x5687da + " 积分\n" : "❌ 看视频任务失败\n";
    }
  }
  log(_0x491874);
}
!(async () => {
  const _0x399151 = readEnvAccounts();
  if (!_0x399151.length) {
    {
      log("😅 未找到任何账号，请在环境变量里添加 qbd=手机号#密码");
      return;
    }
  }
  log("🎯 共找到 " + _0x399151.length + " 个账号");
  for (const {
    phone: _0x3e3755,
    pwd: _0x21efc3
  } of _0x399151) await runAccount(_0x3e3755, _0x21efc3);
})();