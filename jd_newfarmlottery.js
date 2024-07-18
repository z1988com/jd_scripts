/*
26 5,13 * * * jd_newfarmlottery.js
*/
const $ = new Env('新农场幸运转盘');

let bdy_0x4b0e82 = false,
  bdy_0x213fd6 = [],
  bdy_0x3147e0 = "",
  bdy_0x4d1e9e,
  bdy_0x38b594,
  bdy_0x26e83c = "",
  bdy_0x456112 = "",
  bdy_0x1aec99 = "",
  bdy_0x3f2d9a = {};
const bdy_0x1faee2 = "https://api.m.jd.com/client.action",
  bdy_0x2643f3 = require("./USER_AGENTS"),
  bdy_0x4b28dd = require("fs"),
  bdy_0x48f5a8 = require("./function/dylib"),
  bdy_0x6d6a1f = require("./function/dylans"),
  bdy_0xe6157e = require("./function/dylanw");
if (process.env.DY_PROXY) {
  const bdy_0x1d4925 = require("./function/proxy.js");
  $.get = bdy_0x1d4925.intoRequest($.get.bind($));
  $.post = bdy_0x1d4925.intoRequest($.post.bind($));
}
$.reqnum = 3530 + 141 * -3 + -3106;
const bdy_0x37ac73 = {
  dongDongFarmSignHome: "deba1",
  dongDongFarmSignIn: "65f9d",
  wheelsHome: "c06b7",
  wheelsLottery: "bd6c8",
  apsDoTask: "54ed7"
};
!(async () => {
  await bdy_0x4b084a();
  if (!bdy_0x213fd6[-3 * 1282 + 9067 * -1 + -37 * -349]) {
    const _0x15697c = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x15697c);
    return;
  }
  $.log("\n容易403，建议上代理");
  $.log("版本：20240618");
  $.log("问题建议：https://t.me/dylan_jdpro");
  $.log("环境变量（可选项）：");
  $.log("export DY_PROXY='api_url' 可使用代理API");
  for (let _0x100a21 = 2055 + -85 * -29 + -4520; _0x100a21 < bdy_0x213fd6.length; _0x100a21++) {
    {
      if (bdy_0x213fd6[_0x100a21]) {
        bdy_0x3147e0 = bdy_0x213fd6[_0x100a21];
        $.UserName = decodeURIComponent(bdy_0x3147e0.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x3147e0.match(/pt_pin=([^; ]+)(?=;?)/)[5281 + -801 * -1 + -6081]);
        $.index = _0x100a21 + (12395 + 1 * -12394);
        $.isLogin = true;
        $.nickName = "";
        $.farmInfo = "";
        ct = 8993 + -5047 + 1973 * -2;
        $.kuwei = false;
        await bdy_0x78197e();
        console.log("\n------------------【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "-------------------\n");
		if( $.index != 1 ){
			continue;
		}
        if (!$.isLogin) {
          {
            const _0x55c02f = {
              "open-url": "https://bean.m.jd.com/bean/signIndex.action"
            };
            $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x55c02f);
            $.isNode() && (await bdy_0x4d1e9e.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
            continue;
          }
        }
        bdy_0x456112 = "";
        bdy_0x1aec99 = "";
        bdy_0x3f2d9a = {};
        $.UA = bdy_0x2643f3.UARAM ? bdy_0x2643f3.UARAM() : bdy_0x2643f3.USER_AGENT;
        $.UUID = bdy_0x48f5a8.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        await bdy_0x25d2c6();
		
		console.log("休息30秒");
		await $.wait(1000*30);
		  
        await $.wait(6534 + 4 * -100 + -4134);
      }
    }
  }
})().catch(_0x18e025 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x18e025 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x25d2c6() {
  bdy_0x1aec99 = "【京东账号" + $.index + "🆔】" + ($.nickName || $.UserName);
  try {
    await bdy_0x198469();
  } catch (_0xd32a62) {
    console.log("任务执行异常，请检查执行日志 ‼️‼️\n\n");
    $.logErr(_0xd32a62);
  }
  await bdy_0x344e6c();
}
async function bdy_0x198469() {
  await bdy_0x1378f9();
}
async function bdy_0x1378f9() {
  await bdy_0x358796();
  if ($.initForTurntableFarmRes && $.initForTurntableFarmRes.code === 4099 + 2 * -4255 + 4411) {
    console.log("\n开始天天抽奖任务...");
    await bdy_0x4ad11f();
    if ($.wheeltaskRes.code == -22 * 326 + 3940 + 3232) {
      {
        for (let _0x2764c1 of $.wheeltaskRes.data) {
          if (_0x2764c1.taskFinished) {
            console.log(_0x2764c1.taskTitle + "----" + _0x2764c1.taskShowTitle + " 已完成");
            continue;
          }
          await bdy_0x16e20a(_0x2764c1.taskType, _0x2764c1.id, _0x2764c1.taskSourceUrl);
          if ($.wheeldoRes && $.wheeldoRes.code == -3841 + 1003 * -1 + -28 * -173) {
            console.log("任务完成，获得1次抽奖机会");
          } else {
            {
              console.log("错误了，403");
              break;
            }
          }
		  console.log("休息15秒");
		  await $.wait(1000*15);
		  
          //await $.wait(9050 + 15 * -526 + 1840);
        }
      }
    }
	console.log("休息15秒");
		  await $.wait(1000*15);
		  
    await bdy_0x358796();
    if ($.initForTurntableFarmRes.data.lotteryChances > 9184 + -2 * 4592) {
      console.log("\n天天抽奖次数 " + $.initForTurntableFarmRes.data.lotteryChances);
      console.log("开始抽奖...");
      let _0x2c8572 = "";
      for (let _0x48825a = 2547 + -7 * -381 + -5214; _0x48825a < $.initForTurntableFarmRes.data.lotteryChances; _0x48825a++) {
        await bdy_0x40e4c5();
        console.log("第" + (_0x48825a + (11 * -457 + 4913 + 115)) + "次抽奖");
        if ($.lotteryRes && $.lotteryRes.code === -7306 + 8951 * -1 + -3 * -5419) {
          {
            _0x2c8572 += $.lotteryRes.data.prizeName + "，";
            if ($.lotteryRes.data.lotteryChances === 9232 + -20 * -364 + 8 * -2064) {
              break;
            }
          }
        } else {
          console.log("错误了！");
          break;
        }
		console.log("休息30秒");
		await $.wait(1000*30);
		  
        await $.wait(-533 * 13 + -1 * 3919 + -12 * -1154);
      }
      _0x2c8572 && console.log("天天抽奖奖励：" + _0x2c8572.substr(9713 + 5099 * -1 + -4614, _0x2c8572.length - (-5791 * 1 + 894 * -2 + 7580)) + "\n");
    } else {
      console.log("天天抽奖无次数！");
    }
  } else {
    console.log("初始化天天抽奖得好礼失败！");
  }
}
async function bdy_0x5569e0() {
  await bdy_0x59f1d5();
  if ($.farmAssistResult.code === 6323 * -1 + 9386 + -3063 * 1) {
    if ($.farmAssistResult.data.result.assistFriendList && $.farmAssistResult.data.result.assistFriendList.length >= 1 * -7537 + -3 * -121 + -24 * -299) {
      if ($.farmAssistResult.data.result.status === -9810 + 7648 + -2164 * -1) {
        {
          let _0x1d8df4 = -245 + -9 * 101 + 1154;
          for (let _0x4df6c7 of Object.keys($.farmAssistResult.data.result.assistStageList)) {
            let _0x664ffb = $.farmAssistResult.data.result.assistStageList[_0x4df6c7];
            if (_0x664ffb.stageStaus === -81 * -18 + -8631 + -1025 * -7) {
              await bdy_0x2267f5();
              await $.wait(24 * -170 + 8820 + -4240);
              if ($.receiveStageEnergy.code === 1 * -4988 + 4691 * -1 + 9679) {
                console.log("成功领取第" + (Number(_0x4df6c7) + (-8720 + -1531 * 5 + -712 * -23)) + "段助力奖励：" + $.receiveStageEnergy.data.result.amount + "g💧");
                _0x1d8df4 += $.receiveStageEnergy.data.result.amount;
              }
            }
          }
          bdy_0x456112 += "【额外奖励】" + _0x1d8df4 + "g💧领取完成\n";
          console.log("【额外奖励】" + _0x1d8df4 + "g💧领取完成\n");
        }
      } else {
        $.farmAssistResult.data.result.status === -1 * -1337 + 9927 + -11261 * 1 && (console.log("已经领取过好友助力额外奖励"), bdy_0x456112 += "【额外奖励】已领取过\n");
      }
    } else {
      console.log("助力好友未达到2个");
      bdy_0x456112 += "【额外奖励】领取失败,原因：给您助力的人未达2个\n";
    }
    if ($.farmAssistResult.data.result.assistFriendList && $.farmAssistResult.data.result.assistFriendList.length > -4701 + -9957 + 14658) {
      let _0x331416 = "";
      $.farmAssistResult.data.result.assistFriendList.map((_0x19605b, _0x5d5aaf) => {
        {
          _0x5d5aaf === $.farmAssistResult.data.result.assistFriendList.length - (-6389 + 5984 + 406) ? _0x331416 += _0x19605b.nickname || "匿名用户" : _0x331416 += (_0x19605b.nickname || "匿名用户") + ",";
          let _0x5e9411 = new Date(_0x19605b.time),
            _0x4fe80c = _0x5e9411.getFullYear() + "/" + ("0" + (_0x5e9411.getMonth() + (4 * -772 + -6431 + 9520))).slice(-(-29 * -299 + 8970 + -17639)) + "/" + ("0" + _0x5e9411.getDate()).slice(-(-4169 * 2 + -9315 + 17655)) + " " + ("0" + _0x5e9411.getHours()).slice(-(6200 + -1679 * -5 + -14593)) + ":" + ("0" + _0x5e9411.getMinutes()).slice(-(-2928 + -151 * -59 + -5979 * 1)) + ":" + ("0" + _0x5e9411.getSeconds()).slice(-(-6464 + -3 * -2863 + -2123));
          console.log("【" + (_0x19605b.nickname || "匿名用户") + "】 在 " + _0x4fe80c + " 给您助过力");
        }
      });
      bdy_0x456112 += "【助力您的好友】" + _0x331416 + "\n";
    }
    console.log("\n领取额外奖励水滴结束\n");
  } else {
    {
      await bdy_0x29b4b5();
      if ($.masterHelpResult.code === "0") {
        $.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length >= -3685 + -1 * 1255 + 4945 ? !$.masterHelpResult.masterGotFinal ? (await bdy_0x3426fd(), $.masterGotFinished.code === "0" && (console.log("已成功领取好友助力奖励：【" + $.masterGotFinished.amount + "】g💧"), bdy_0x456112 += "【额外奖励】" + $.masterGotFinished.amount + "g💧领取成功\n")) : (console.log("已经领取过5好友助力额外奖励"), bdy_0x456112 += "【额外奖励】已被领取过\n") : (console.log("助力好友未达到5个"), bdy_0x456112 += "【额外奖励】领取失败,原因：给您助力的人未达5个\n");
        if ($.masterHelpResult.masterHelpPeoples && $.masterHelpResult.masterHelpPeoples.length > 2 * -452 + 850 + 54) {
          let _0x14e112 = "";
          $.masterHelpResult.masterHelpPeoples.map((_0x137d0b, _0x5b0c57) => {
            {
              _0x5b0c57 === $.masterHelpResult.masterHelpPeoples.length - (-41 * 51 + -6935 + 9027) ? _0x14e112 += _0x137d0b.nickName || "匿名用户" : _0x14e112 += (_0x137d0b.nickName || "匿名用户") + ",";
              let _0x7abb06 = new Date(_0x137d0b.time),
                _0xa493fa = _0x7abb06.getFullYear() + "-" + (_0x7abb06.getMonth() + (23 * -77 + 2875 + -1103)) + "-" + _0x7abb06.getDate() + " " + _0x7abb06.getHours() + ":" + _0x7abb06.getMinutes() + ":" + _0x7abb06.getMinutes();
              console.log("【" + (_0x137d0b.nickName || "匿名用户") + "】 在 " + _0xa493fa + " 给您助过力");
            }
          });
          bdy_0x456112 += "【助力您的好友】" + _0x14e112 + "\n";
        }
        console.log("领取额外奖励水滴结束\n");
      }
    }
  }
}
async function bdy_0x45d553() {
  let _0x359f06 = !$.farmTask.waterRainInit.f;
  if (_0x359f06) {
    console.log("水滴雨任务，每天两次，最多可得10g水滴");
    console.log("两次水滴雨任务是否全部完成：" + ($.farmTask.waterRainInit.f ? "是" : "否"));
    if ($.farmTask.waterRainInit.lastTime) {
      if (Date.now() < $.farmTask.waterRainInit.lastTime + (-2884 + -7638 + -1 * -10525) * (-3091 * -1 + 8900 + -123 * 97) * (1 * -9691 + -2712 + 12463) * (9 * -883 + 1 * -3551 + 12498)) {
        {
          _0x359f06 = false;
          console.log("【第" + ($.farmTask.waterRainInit.winTimes + (4918 + 1 * -4670 + -247)) + "次水滴雨】还未到时间\n");
        }
      }
    }
    _0x359f06 && (console.log("开始水滴雨任务,这是第" + ($.farmTask.waterRainInit.winTimes + (-9457 * 1 + -2076 + 11534)) + "次，剩余" + (5217 + -7568 + 2353 - ($.farmTask.waterRainInit.winTimes + (2287 + -5929 + -3643 * -1))) + "次"), await bdy_0x999292(), console.log("水滴雨waterRain"), $.waterRain.code === "0" && (console.log("水滴雨任务执行成功，获得水滴：" + $.waterRain.addEnergy + "g💧"), console.log("【第" + ($.farmTask.waterRainInit.winTimes + (7091 + -52 * -68 + -10626)) + "次水滴雨】获得" + $.waterRain.addEnergy + "g💧\n")));
  } else {
    console.log("【水滴雨】已全部完成\n");
  }
}
async function bdy_0x12fd2d() {
  await bdy_0x565bf8();
  if ($.clockInInit.code === -1144 + -5127 * -1 + -3983) {
    {
      if ($.clockInInit.data.signInFlag == -2448 + -1140 * -2 + 168) {
        console.log("\n开始今日签到");
        await bdy_0x5bc8de();
        if ($.clockInForFarmRes.code === -8234 + -7855 + 16089) {
          console.log("获得" + $.clockInForFarmRes.data.prizeDesc + "💧\n");
        } else {
          $.clockInForFarmRes.code === 118911 + -139450 + -1 * -230539 ? (console.log("签到失败：" + JSON.stringify($.clockInForFarmRes)), $.kuwei = true) : console.log("签到失败：" + JSON.stringify($.clockInForFarmRes));
        }
      }
    }
  }
}
async function bdy_0x2af24b() {
  await bdy_0x121226();
  console.log("\n开始给好友浇水...");
  await bdy_0x26efa0();
  const {
    waterFriendCountKey: _0x81f3c2,
    waterFriendMax: _0xd219d2
  } = $.farmTask.waterFriendTaskInit;
  console.log("今日已给" + _0x81f3c2 + "个好友浇水");
  if (_0x81f3c2 < _0xd219d2) {
    let _0x52a120 = [];
    if ($.friendList.friends && $.friendList.friends.length > -16 * 557 + 5926 + 2986) {
      $.friendList.friends.map((_0xe5560b, _0x2cc108) => {
        _0xe5560b.friendState === -8 * 36 + 2762 + -2473 && _0x52a120.length < _0xd219d2 - _0x81f3c2 && _0x52a120.push(_0xe5560b.shareCode);
      });
      _0x52a120.length > 39 * -254 + -4632 + -2423 * -6 && console.log("需要浇水的好友shareCodes:" + JSON.stringify(_0x52a120));
      _0x52a120.length == -1 * 4097 + 2517 + -4 * -395 && console.log("没有需要浇水的好友!\n");
      let _0x4f12f8 = 5481 + -1667 * 5 + 2854,
        _0x7e7117 = "";
      for (let _0x1340d5 = -3336 + 975 + -2361 * -1; _0x1340d5 < _0x52a120.length; _0x1340d5++) {
        await bdy_0x451ff5(_0x52a120[_0x1340d5]);
        console.log("为第" + (_0x1340d5 + (215 * -29 + -2548 + 8784)) + "个好友浇水");
        if ($.waterFriendForFarmRes.code === "0") {
          _0x4f12f8++;
          if ($.waterFriendForFarmRes.cardInfo) {
            console.log("为好友浇水获得道具了");
            if ($.waterFriendForFarmRes.cardInfo.type === "beanCard") {
              console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule);
              _0x7e7117 += "水滴换豆卡,";
            } else {
              if ($.waterFriendForFarmRes.cardInfo.type === "fastCard") {
                console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule);
                _0x7e7117 += "快速浇水卡,";
              } else {
                if ($.waterFriendForFarmRes.cardInfo.type === "doubleCard") {
                  console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule);
                  _0x7e7117 += "水滴翻倍卡,";
                } else {
                  $.waterFriendForFarmRes.cardInfo.type === "signCard" && (console.log("获取道具卡:" + $.waterFriendForFarmRes.cardInfo.rule), _0x7e7117 += "加签卡,");
                }
              }
            }
          }
        } else {
          $.waterFriendForFarmRes.code === "11" && console.log("水滴不够,跳出浇水");
        }
      }
      _0x4f12f8 > -9517 + -1 * 1914 + 11431 && console.log("已给" + _0x4f12f8 + "个好友浇水,消耗" + _0x4f12f8 * (29 * -87 + -6040 + 8573) + "g水\n");
      if (_0x7e7117 && _0x7e7117.length > -1694 + 5969 + -57 * 75) {
        console.log("【好友浇水奖励】" + _0x7e7117.substr(-168 + 9883 + -335 * 29, _0x7e7117.length - (863 + 1619 * -3 + 3995)) + "\n");
      }
    } else {
      console.log("好友列表无好友,快去邀请您的好友吧!\n");
    }
  } else {
    console.log("今日已为" + _0xd219d2 + "个好友浇水\n");
  }
}
async function bdy_0x1d406c() {
  await bdy_0x26efa0();
  const {
    waterFriendCountKey: _0x147771,
    waterFriendMax: _0x2bdd8e,
    waterFriendSendWater: _0x275332,
    waterFriendGotAward: _0x243690
  } = $.farmTask.waterFriendTaskInit;
  _0x147771 >= _0x2bdd8e ? !_0x243690 ? (await bdy_0x1142dc(), $.waterFriendGotAwardRes.code === "0" && console.log("领取给好友浇水奖励" + $.waterFriendGotAwardRes.addWater + "g💧\n")) : console.log("给好友浇水的水滴奖励已领取\n") : console.log("给" + _0x2bdd8e + "个好友浇水未完成\n");
}
async function bdy_0x43ca32() {
  for (let _0x270c85 of bdy_0x38b594) {
    if (_0x270c85 === $.farmInfo.farmUserPro.shareCode) {
      console.log("自己不能邀请自己成为好友噢\n");
      continue;
    }
    await bdy_0x5e8f00(_0x270c85);
    if ($.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "0") {
      console.log("接收邀请成为好友结果成功,您已成为" + $.inviteFriendRes.helpResult.masterUserInfo.nickName + "的好友");
    } else {
      $.inviteFriendRes && $.inviteFriendRes.helpResult && $.inviteFriendRes.helpResult.code === "17" && console.log("接收邀请成为好友结果失败,对方已是您的好友");
    }
  }
}
async function bdy_0x41d620() {
  for (let _0x281169 = 12524 + -12524; _0x281169 < -9031 + -6781 * 1 + 15822; _0x281169++) {
    const _0x20f23e = {
      type: 2,
      version: 24,
      channel: 1,
      babelChannel: "121"
    };
    $.duckRes = await request("getFullCollectionReward", _0x20f23e);
    if ($.duckRes.code === "0") {
      {
        if (!$.duckRes.hasLimit) {
          console.log("小鸭子游戏:" + $.duckRes.title);
        } else {
          console.log("" + $.duckRes.title);
          break;
        }
      }
    } else {
      if ($.duckRes.code === "10") {
        console.log("小鸭子游戏达到上限");
        break;
      }
    }
  }
}
async function bdy_0x3b31c2() {
  const _0x26fe86 = arguments.callee.name.toString();
  $.totalWaterReward = await request("totalWaterTaskForFarm");
}
async function bdy_0x538b5d() {
  const _0xc270bf = arguments.callee.name.toString();
  $.firstWaterReward = await request("firstWaterTaskForFarm");
}
async function bdy_0x445134() {
  const _0x298e1b = {
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.newtaskinfo = await request("gotNewUserTaskForFarm", _0x298e1b);
}
async function bdy_0x52519b() {
  const _0xd1598c = {
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.newtaskinfo = await request("gotLowFreqWaterForFarm", _0xd1598c);
}
async function bdy_0x1b6ad5() {
  const _0x25b7e6 = {
    version: 1
  };
  $.farmInfo = await request("farm_home", _0x25b7e6);
}
async function bdy_0xac975d() {
  const _0x1a97a1 = {
    version: 1
  };
  $.rain_round = await request("farm_rain_round_icon", _0x1a97a1);
}
async function bdy_0x441998(_0x3e9ba9) {
  const _0x13c238 = {
    version: 1,
    token: _0x3e9ba9
  };
  $.rain_page = await request("farm_rain_page", _0x13c238);
}
async function bdy_0x4c3d9c(_0x349d7c) {
  const _0x5bb17b = {
    version: 1,
    token: _0x349d7c,
    bcc: 200,
    scc: 0
  };
  $.rain_reward = await request("farm_rain_reward", _0x5bb17b);
}
async function bdy_0x1142dc() {
  const _0x5c8b58 = arguments.callee.name.toString(),
    _0x556fd = {
      version: 24,
      channel: 1,
      babelChannel: "121"
    };
  $.waterFriendGotAwardRes = await request("waterFriendGotAwardForFarm", _0x556fd);
}
async function bdy_0x10e38c() {
  const _0x5f4535 = arguments.callee.name.toString();
  $.myCardInfoRes = await request("myCardInfoForFarm", {
    version: 24,
    channel: 1,
    babelChannel: "121"
  });
}
async function bdy_0x4a0505(_0x25bf3f) {
  const _0x364f16 = arguments.callee.name.toString(),
    _0x48f6c5 = {
      cardType: _0x25bf3f
    };
  $.userMyCardRes = await request("userMyCardForFarm", _0x48f6c5);
}
async function bdy_0x27cdde(_0x4590e6) {
  const _0xccec83 = {
    type: _0x4590e6
  };
  $.gotStageAwardForFarmRes = await request("gotStageAwardForFarm", _0xccec83);
}
async function bdy_0x49ab4a(_0x175d08) {
  await $.wait(10427 + -857 * 11);
  const _0x5ab51e = {
    version: 1,
    waterType: _0x175d08
  };
  $.waterResult = await request("farm_water", _0x5ab51e);
}
async function bdy_0x358796() {
  $.initForTurntableFarmRes = await bdy_0x3a2735("wheelsHome", {
    linkId: "VssYBUKJOen7HZXpC8dRFA",
    inviteActId: "",
    inviterEncryptPin: ""
  });
}
async function bdy_0x4ad11f() {
  const _0x541f0e = {
    linkId: "VssYBUKJOen7HZXpC8dRFA"
  };
  $.wheeltaskRes = await bdy_0x3a2735("apTaskList", _0x541f0e);
}
async function bdy_0x16e20a(_0x112484, _0x42ae5b, _0x219097) {
  const _0x1c17fd = {
    taskType: _0x112484,
    taskId: _0x42ae5b,
    channel: 4,
    checkVersion: true,
    linkId: "VssYBUKJOen7HZXpC8dRFA",
    itemId: _0x219097
  };
  $.wheeldoRes = await bdy_0x3a2735("apsDoTask", _0x1c17fd);
}
async function bdy_0x40e4c5() {
  const _0x27d0b8 = {
    linkId: "VssYBUKJOen7HZXpC8dRFA"
  };
  $.lotteryRes = await bdy_0x3a2735("wheelsLottery", _0x27d0b8);
}
async function bdy_0x51a2d2() {
  const _0x153137 = {
    version: 1
  };
  $.treeboardRes = await request("farm_tree_board", _0x153137);
}
async function bdy_0x57eee3(_0x385070) {
  const _0x3b3e31 = {
    version: 1,
    uid: _0x385070
  };
  $.planttreeRes = await request("farm_plant_tree", _0x3b3e31);
}
async function bdy_0x3ea445(_0x445214) {
  const _0x25ef49 = {
    type: 2,
    adId: _0x445214,
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.browserForTurntableFarm2Res = await request("browserForTurntableFarm", _0x25ef49);
}
async function bdy_0x582070() {
  const _0x5bd663 = {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[9430 + -680 + -8750] + "-3",
    babelChannel: "3",
    version: 24,
    channel: 1
  };
  $.lotteryMasterHelpRes = await request("initForFarm", _0x5bd663);
}
async function bdy_0x3426fd() {
  const _0x22b86a = arguments.callee.name.toString();
  $.masterGotFinished = await request("masterGotFinishedTaskForFarm");
}
async function bdy_0x29b4b5() {
  const _0x43d37e = arguments.callee.name.toString();
  $.masterHelpResult = await request("masterHelpTaskInitForFarm");
}
async function bdy_0x59f1d5() {
  const _0x1189c8 = {
    version: 1
  };
  $.farmAssistResult = await request("farm_assist_init_info", _0x1189c8);
}
async function bdy_0x2267f5() {
  const _0x7e17a7 = {
    version: 1
  };
  $.receiveStageEnergy = await request("farm_assist_receive_award", _0x7e17a7);
}
async function bdy_0x5e8f00() {
  const _0x55f263 = {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[10130 + -10130] + "-inviteFriend",
    version: 4,
    channel: 2
  };
  $.inviteFriendRes = await request("initForFarm", _0x55f263);
}
async function bdy_0x5bda08() {
  const _0x5c7ded = {
    imageUrl: "",
    nickName: "",
    shareCode: arguments[-15 * 631 + 161 * -9 + 10914],
    babelChannel: "3",
    version: 2,
    channel: 1
  };
  $.helpResult = await request("initForFarm", _0x5c7ded);
}
async function bdy_0x999292() {
  const _0x307369 = arguments.callee.name.toString();
  const _0x5b0c34 = {
    type: 1,
    hongBaoTimes: 100,
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.waterRain = await request("waterRainForFarm", _0x5b0c34);
}
async function bdy_0x565bf8() {
  const _0x77656d = {
    linkId: "LCH-fV7hSnChB-6i5f4ayw"
  };
  $.clockInInit = await bdy_0x3a2735("dongDongFarmSignHome", _0x77656d);
}
async function bdy_0x5bc8de() {
  const _0x2def66 = {
    linkId: "LCH-fV7hSnChB-6i5f4ayw"
  };
  $.clockInForFarmRes = await bdy_0x3a2735("dongDongFarmSignIn", _0x2def66);
}
async function bdy_0x370458(_0xff8604, _0x1d08c4, _0x295a5c) {
  const _0x181da7 = "clockInFollowForFarm";
  let _0x687085 = {
    id: _0xff8604,
    type: _0x1d08c4,
    step: _0x295a5c
  };
  if (_0x1d08c4 === "theme") {
    {
      if (_0x295a5c === "1") {
        $.themeStep1 = await request(_0x181da7, _0x687085);
      } else {
        _0x295a5c === "2" && ($.themeStep2 = await request(_0x181da7, _0x687085));
      }
    }
  } else {
    if (_0x1d08c4 === "venderCoupon") {
      if (_0x295a5c === "1") {
        $.venderCouponStep1 = await request(_0x181da7, _0x687085);
      } else {
        _0x295a5c === "2" && ($.venderCouponStep2 = await request(_0x181da7, _0x687085));
      }
    }
  }
}
async function bdy_0x2f66c2() {
  const _0x26cd45 = {
    type: 2,
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.gotClockInGiftRes = await request("clockInForFarm", _0x26cd45);
}
async function bdy_0x5ed71b() {
  const _0x2c6a86 = arguments.callee.name.toString();
  $.threeMeal = await request("gotThreeMealForFarm");
}
async function bdy_0x25bd5e(_0x325328, _0x2eb94f, _0x5e6844) {
  const _0x375646 = {
    version: 1,
    taskType: _0x325328,
    taskId: _0x2eb94f,
    taskInsert: true,
    itemId: _0x5e6844,
    channel: 0
  };
  $.browseResult = await request("farm_do_task", _0x375646);
}
async function bdy_0x2ca0e8(_0x2b46a0, _0x3ebed9) {
  const _0x195b22 = {
    version: 1,
    taskType: _0x2b46a0,
    taskId: _0x3ebed9,
    channel: 0
  };
  $.dotaskResult = await request("farm_task_receive_award", _0x195b22);
}
async function bdy_0x2e19c4(_0x5b484d, _0x1adc09) {
  const _0x10ef6b = {
    version: 1,
    taskType: _0x5b484d,
    taskId: _0x1adc09,
    channel: 0
  };
  $.taskDetail = await request("farm_task_detail", _0x10ef6b);
}
async function bdy_0x557d94() {
  const _0x2003c3 = {
    type: 3
  };
  $.goalResult = await request("gotWaterGoalTaskForFarm", _0x2003c3);
}
async function bdy_0x26efa0() {
  const _0x205fd7 = arguments.callee.name.toString(),
    _0x1bfa52 = {
      version: 1,
      channel: 0
    };
  $.farmTask = await request("farm_task_list", _0x1bfa52);
}
async function bdy_0x519cb0() {
  const _0x3070d2 = {
    version: 24,
    channel: 1,
    babelChannel: "45",
    lat: "0",
    lng: "0"
  };
  $.farmTask = await request("taskInitForFarm", _0x3070d2);
}
async function bdy_0x121226() {
  const _0x1b9fdf = {
    version: 24,
    channel: 1,
    babelChannel: "121",
    lat: "0",
    lng: "0"
  };
  $.friendList = await request("friendListInitForFarm", _0x1b9fdf);
}
async function bdy_0x12b048() {
  $.awardInviteFriendRes = await request("awardInviteFriendForFarm");
}
async function bdy_0x451ff5(_0x152e94) {
  const _0x372a73 = {
    shareCode: _0x152e94,
    version: 24,
    channel: 1,
    babelChannel: "121"
  };
  $.waterFriendForFarmRes = await request("waterFriendForFarm", _0x372a73);
}
async function bdy_0x344e6c() {
  if ($.isNode() && process.env.FRUIT_NOTIFY_CONTROL) {
    $.ctrTemp = "" + process.env.FRUIT_NOTIFY_CONTROL === "false";
  } else {
    if ($.getdata("jdFruitNotify")) {
      {
        $.ctrTemp = $.getdata("jdFruitNotify") === "false";
      }
    } else {
      {
        $.ctrTemp = "" + bdy_0x4b0e82 === "false";
      }
    }
  }
  $.ctrTemp ? ($.msg($.name, bdy_0x1aec99, bdy_0x456112, bdy_0x3f2d9a), $.isNode() && (bdy_0x26e83c += bdy_0x1aec99 + "\n" + bdy_0x456112 + ($.index !== bdy_0x213fd6.length ? "\n\n" : ""))) : $.log("\n" + bdy_0x456112 + "\n");
}
function bdy_0x4b084a() {
  return new Promise(_0x3a5a76 => {
    console.log("开始获取配置文件\n");
    bdy_0x4d1e9e = $.isNode() ? require("./sendNotify") : "";
    const _0x42f255 = $.isNode() ? require("./jdCookie.js") : "";
    if ($.isNode()) {
      Object.keys(_0x42f255).forEach(_0x30a31c => {
        _0x42f255[_0x30a31c] && bdy_0x213fd6.push(_0x42f255[_0x30a31c]);
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
        console.log = () => {};
      }
    } else {
      {
        bdy_0x213fd6 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x4c2632($.getdata("CookiesJD") || "[]").map(_0x3f3675 => _0x3f3675.cookie)].filter(_0x37fa4d => !!_0x37fa4d);
      }
    }
    _0x3a5a76();
  });
}
function bdy_0x206190() {
  return new Promise(_0x9d9297 => {
    const _0x57e145 = {
      Cookie: bdy_0x3147e0,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x5bf6db = {
      url: "https://api.m.jd.com/client.action?functionId=beanTaskList&body=%7B%22viewChannel%22%3A%22AppHome%22%2C%22beanVersion%22%3A1%2C%22lng%22%3A%22%22%2C%22lat%22%3A%22%22%7D&appid=ld",
      headers: _0x57e145,
      timeout: 10000
    };
    $.get(_0x5bf6db, (_0x46bb97, _0x2aff81, _0x3285cb) => {
      _0x9d9297();
    });
  });
}
function bdy_0x78197e() {
  return new Promise(_0x1d241c => {
    const _0x516dca = {
      Cookie: bdy_0x3147e0,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x3fba05 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x516dca,
      timeout: 10000
    };
    $.get(_0x3fba05, (_0x2842fd, _0x5eeb33, _0x4e4270) => {
      {
        try {
          if (_0x4e4270) {
            _0x4e4270 = JSON.parse(_0x4e4270);
            if (!(_0x4e4270.islogin === "1")) {
              _0x4e4270.islogin === "0" && ($.isLogin = false);
            }
          }
        } catch (_0x112d83) {
          console.log(_0x112d83);
        } finally {
          _0x1d241c();
        }
      }
    });
  });
}
function bdy_0x1658e7(_0x4c8457, _0x5e8e29, _0x474f85) {
  if (_0x4c8457 == null) {
    return "";
  }
  var _0x409f8f = [],
    _0x1aab85 = typeof _0x4c8457;
  if (_0x1aab85 == "string" || _0x1aab85 == "number" || _0x1aab85 == "boolean") {
    _0x409f8f.push(_0x5e8e29 + "=" + (_0x474f85 == null || _0x474f85 ? encodeURIComponent(_0x4c8457) : _0x4c8457));
  } else {
    for (var _0x2b46d5 in _0x4c8457) {
      var _0x2a6559 = _0x5e8e29 == null ? _0x2b46d5 : _0x5e8e29 + (_0x4c8457 instanceof Array ? "[" + _0x2b46d5 + "]" : "." + _0x2b46d5);
      _0x409f8f.push(bdy_0x1658e7(_0x4c8457[_0x2b46d5], _0x2a6559, _0x474f85));
    }
  }
  return _0x409f8f.join("&");
}
async function bdy_0x3a2735(_0x7d53fc, _0xb24c87 = {}, _0xbf09cb = -335 * 29 + -2199 + 13414) {
  $.reqnum++;
  if (bdy_0x37ac73[_0x7d53fc]) {
    if (_0x7d53fc == "wheelsHome" && 4793 * -1 + -6595 + 11388) {
      let _0x18d5ae = {
        appId: bdy_0x37ac73[_0x7d53fc],
        fn: _0x7d53fc,
        apid: "activities_platform",
        ver: $.UA.split(";")[-3370 + -19 * 308 + 9224],
        cl: "ios",
        body: _0xb24c87,
        ua: $.UA,
        code: 1
      };
      _0xb24c87 = await bdy_0xe6157e.getbody(_0x18d5ae);
    } else {
      let _0x279207 = {
        appId: bdy_0x37ac73[_0x7d53fc],
        functionId: _0x7d53fc,
        appid: "activities_platform",
        clientVersion: $.UA.split(";")[-14 * 191 + 8577 + -5901],
        client: "ios",
        body: _0xb24c87,
        ua: $.UA,
        t: Date.now()
      };
      _0xb24c87 = await bdy_0x6d6a1f.getbody(_0x279207);
    }
  } else {
    _0xb24c87 = "functionId=" + _0x7d53fc + "&body=" + encodeURIComponent(JSON.stringify(_0xb24c87)) + "&appid=activities_platform";
  }
  return new Promise(_0x2b92a9 => {
    setTimeout(() => {
      $.post(bdy_0x265240(_0xb24c87), (_0x126570, _0x115133, _0x5dcfd2) => {
        try {
          if (_0x126570) {
            console.log("\n东东农场: API请求失败 ‼️‼️");
            console.log(JSON.stringify(_0x126570));
            console.log("function_id:" + _0x7d53fc);
            $.logErr(_0x126570);
          } else {
            bdy_0x2de21f(_0x5dcfd2) && (_0x5dcfd2 = JSON.parse(_0x5dcfd2));
          }
        } catch (_0x242b58) {
          $.logErr(_0x242b58, _0x115133);
        } finally {
          _0x2b92a9(_0x5dcfd2);
        }
      });
    }, _0xbf09cb);
  });
}
function bdy_0x2de21f(_0x186937) {
  try {
    if (typeof JSON.parse(_0x186937) == "object") {
      return true;
    }
  } catch (_0x215216) {
    console.log(_0x215216);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x3be20f(_0x3a52d9 = {}) {
  const _0x362482 = {
    Host: "api.m.jd.com",
    Accept: "*/*",
    Origin: "https://h5.m.jd.com",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": $.UA,
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    Referer: "https://h5.m.jd.com/",
    Cookie: bdy_0x3147e0
  };
  const _0x308fac = {
    url: bdy_0x1faee2 + "?" + _0x3a52d9,
    headers: _0x362482,
    timeout: 30000
  };
  return _0x308fac;
}
function bdy_0x265240(_0x21002f = {}) {
  const _0x4d407e = {
    url: "http://api.m.jd.com/api",
    body: _0x21002f + "&cthr=1&loginType=&loginWQBiz=wegame&openudid=" + $.UUID + "&uuid=" + $.UUID + "&networkType=wifi&d_brand=iPhone&d_model=iPhone&lang=zh_CN",
    headers: {},
    timeout: 30000
  };
  _0x4d407e.headers.Accept = "application/json, text/plain, */*";
  _0x4d407e.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0x4d407e.headers["Accept-Language"] = "zh-cn";
  _0x4d407e.headers["Content-Type"] = "application/x-www-form-urlencoded";
  _0x4d407e.headers.Cookie = bdy_0x3147e0;
  _0x4d407e.headers.Host = "api.m.jd.com";
  _0x4d407e.headers.Referer = "https://lotterydraw-new.jd.com/";
  _0x4d407e.headers["x-referer-page"] = "https://lotterydraw-new.jd.com/";
  _0x4d407e.headers.Origin = "https://lotterydraw-new.jd.com";
  _0x4d407e.headers["x-rp-client"] = "h5_1.0.0";
  _0x4d407e.headers["User-Agent"] = $.UA;
  _0x4d407e.headers["x-requested-with"] = "native";
  return _0x4d407e;
}
function bdy_0x3baf6e(_0x3a3320, _0x726864 = {}) {
  const _0x1f6577 = {
    Host: "api.m.jd.com",
    Accept: "*/*",
    Origin: "https://carry.m.jd.com",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": $.UA,
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    Referer: "https://carry.m.jd.com/",
    Cookie: bdy_0x3147e0
  };
  const _0x5ac084 = {
    url: bdy_0x1faee2 + "?" + _0x726864,
    headers: _0x1f6577,
    timeout: 10000
  };
  return _0x5ac084;
}
function bdy_0x4c2632(_0x2e8f62) {
  if (typeof _0x2e8f62 == "string") {
    try {
      {
        return JSON.parse(_0x2e8f62);
      }
    } catch (_0x1bf5b8) {
      console.log(_0x1bf5b8);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x193a85() {
  const _0x100aa3 = {
    babelActivityId: "",
    babelPageUrl: "https://lotterydraw-new.jd.com/?id=VssYBUKJOen7HZXpC8dRFA"
  };
  let _0x2e212b = {
      channelId: "10233",
      ext: _0x100aa3
    },
    _0x107add = {
      appId: "5fd3d",
      functionId: "jutouDisplayIndex",
      appid: "pages-factory",
      clientVersion: $.UA.split(";")[-8462 + 4561 + 3903],
      client: "ios",
      body: _0x2e212b,
      ua: $.UA,
      t: Date.now()
    };
  _0x2e212b = await bdy_0x6d6a1f.getbody(_0x107add);
  const _0x48f772 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: bdy_0x3147e0,
    Host: "api.m.jd.com",
    Referer: "https://lotterydraw-new.jd.com/",
    "x-referer-page": "https://lotterydraw-new.jd.com/",
    Origin: "https://lotterydraw-new.jd.com",
    "x-rp-client": "h5_1.0.0",
    "User-Agent": $.UA,
    "x-requested-with": "native"
  };
  let _0x1ee56a = {
    url: "http://api.m.jd.com/",
    body: _0x2e212b,
    headers: _0x48f772,
    timeout: 30000
  };
  return new Promise(_0x588b82 => {
    $.post(_0x1ee56a, (_0x2ea1ac, _0x3cc42f, _0x5ab60a) => {
      try {
        if (_0x2ea1ac) {
          console.log("\n东东农场: API请求失败 ‼️‼️");
          console.log(JSON.stringify(_0x2ea1ac));
          console.log("function_id:" + function_id);
          $.logErr(_0x2ea1ac);
        } else {
          {
            bdy_0x2de21f(_0x5ab60a) && (_0x5ab60a = JSON.parse(_0x5ab60a), _0x5ab60a.code == 4067 * -1 + 6655 + -2388 && ($.aid = _0x5ab60a.data.ext.uuid));
          }
        }
      } catch (_0x2057ed) {
        $.logErr(_0x2057ed, _0x3cc42f);
      } finally {
        _0x588b82(_0x5ab60a);
      }
    });
  });
}
async function bdy_0x23535c() {
  const _0x139c43 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: bdy_0x3147e0,
    Host: "api.m.jd.com",
    Referer: "https://lotterydraw-new.jd.com/",
    "x-referer-page": "https://lotterydraw-new.jd.com/",
    Origin: "https://lotterydraw-new.jd.com",
    "x-rp-client": "h5_1.0.0",
    "User-Agent": $.UA,
    "x-requested-with": "native"
  };
  let _0x1390d7 = {
    url: "http://api.m.jd.com/",
    body: "functionId=getStaticResource&body={\"linkId\":\"VssYBUKJOen7HZXpC8dRFA\"}&t=1716511588400&appid=activities_platform&client=android&clientVersion=13.0.1&cthr=1&loginType=&loginWQBiz=wegame&imei=1346466673661656&aid=1ddf7fae1311d071&h5st=null&x-api-eid-token=jdd03N3YZWKTIUUH6R3CO6AGN3J4OZKY3VLV6U6KOI67XCO34WPMUNBQZFS3RFKJHJHMR3LMLIN53LBLP6NZPNLMQB2M7SMAAAAMPVAH7MEIAAAAAD2L6KJCAR7LZ74X&uuid=1346466673661656-1333131346037313&build=99192&screen=393*873&networkType=wifi&d_brand=Redmi&d_model=Redmi K40S&lang=zh_CN&osVersion=12&partner=xiaomi001&eufv=1&eu=1346466673661656&fv=1333131346037313",
    headers: _0x139c43,
    timeout: 30000
  };
  return new Promise(_0x4728c9 => {
    $.post(_0x1390d7, (_0xfe5dc8, _0x17270f, _0x442e0f) => {
      try {
        if (_0xfe5dc8) {
          console.log("\n东东农场: API请求失败 ‼️‼️");
          console.log(JSON.stringify(_0xfe5dc8));
          console.log("function_id:" + function_id);
          $.logErr(_0xfe5dc8);
        } else {
          console.log(_0x442e0f);
          if (bdy_0x2de21f(_0x442e0f)) {
            _0x442e0f = JSON.parse(_0x442e0f);
            _0x442e0f.code == -8747 + -3843 + 12790;
          }
        }
      } catch (_0x3de001) {
        $.logErr(_0x3de001, _0x17270f);
      } finally {
        _0x4728c9(_0x442e0f);
      }
    });
  });
}


function Env(o,t){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((r,i)=>{s.call(this,t,(t,e,s)=>{t?i(t):r(e)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(r=>{this.get({url:t},(t,e,s)=>r(s))})}runScript(a,o){return new Promise(r=>{let t=this.getdata("@chavy_boxjs_userCfgs.httpapi");t=t&&t.replace(/\n/g,"").trim();var e=(e=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"))?+e:20,[s,i]=(e=o&&o.timeout?o.timeout:e,t.split("@"));this.post({url:`http://${i}/v1/scripting/evaluate`,body:{script_text:a,mock_type:"cron",timeout:e},headers:{"X-Key":s,Accept:"*/*"},timeout:e},(t,e,s)=>r(s))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};this.fs=this.fs||require("fs"),this.path=this.path||require("path");var t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),r=!s&&this.fs.existsSync(e);if(!s&&!r)return{};r=s?t:e;try{return JSON.parse(this.fs.readFileSync(r))}catch(t){return{}}}writedata(){var t,e,s,r,i;this.isNode()&&(this.fs=this.fs||require("fs"),this.path=this.path||require("path"),t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),r=!(s=this.fs.existsSync(t))&&this.fs.existsSync(e),i=JSON.stringify(this.data),!s&&r?this.fs.writeFileSync(e,i):this.fs.writeFileSync(t,i))}lodash_get(t,e,s){let r=t;for(const t of e.replace(/\[(\d+)\]/g,".$1").split("."))if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,r,e){return Object(t)===t&&((r=Array.isArray(r)?r:r.toString().match(/[^.[\]]+/g)||[]).slice(0,-1).reduce((t,e,s)=>Object(t[e])===t[e]?t[e]:t[e]=Math.abs(r[s+1])>>0==+r[s+1]?[]:{},t)[r[r.length-1]]=e),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){var[,s,r]=/^@(.*?)\.(.*?)$/.exec(t);if(s=s?this.getval(s):"")try{const t=JSON.parse(s);e=t?this.lodash_get(t,r,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){var[,r,i]=/^@(.*?)\.(.*?)$/.exec(e),a=this.getval(r),a=r?"null"===a?null:a||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,i,t),s=this.setval(JSON.stringify(e),r)}catch(e){this.lodash_set(a={},i,t),s=this.setval(JSON.stringify(a),r)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got||require("got"),this.cktough=this.cktough||require("tough-cookie"),this.ckjar=this.ckjar||new this.cktough.CookieJar,t&&(t.headers=t.headers||{},t)&&(t.headers=t.headers||{},void 0===t.headers.cookie)&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)}tmout(){return new Promise((t,e)=>{this.tmoutId=setTimeout(()=>{this.prms.cancel(),e({message:"timemout",response:""})},5e4)})}get(t,a=()=>{}){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t),this.prms=this.got(t).on("redirect",(t,e)=>{try{var s;t.headers["set-cookie"]&&((s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString())&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar)}catch(t){this.logErr(t)}}),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}post(t,a=()=>{}){var e=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[e](t,(t,e,s)=>{!t&&e&&(e.body=s,e.statusCode=e.status||e.statusCode,e.status=e.statusCode),a(t,e,s)});break;case"Quantumult X":t.method=e,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{var{statusCode:t,statusCode:e,headers:s,body:r,bodyBytes:i}=t;a(null,{status:t,statusCode:e,headers:s,body:r,bodyBytes:i},r,i)},t=>a(t&&t.error||"UndefinedError"));break;case"Node.js":this.initGotEnv(t);var{url:s,...r}=t;this.prms=this.got[e](s,r),Promise.race([this.prms,this.tmout()]).then(t=>{var{statusCode:t,statusCode:e,headers:s,rawBody:r,body:i}=t;a(null,{status:t,statusCode:e,headers:s,rawBody:r,body:i},i),clearTimeout(this.tmoutId)},t=>{var{message:t,response:e}=t;clearTimeout(this.tmoutId),a(t,e,e&&e.body)})}}time(t,e=null){var s,r={"M+":(e=e?new Date(e):new Date).getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[s]:("00"+r[s]).substr((""+r[s]).length)));return t}queryStr(e){let s="";for(const r in e){let t=e[r];null!=t&&""!==t&&("object"==typeof t&&(t=JSON.stringify(t)),s+=`${r}=${t}&`)}return s=s.substring(0,s.length-1)}msg(t=o,e="",s="",r={}){var i,a=r=>{const{$open:t,$copy:e,$media:i,$mediaMime:a}=r;switch(typeof r){case void 0:return r;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:r};case"Loon":case"Shadowrocket":return r;case"Quantumult X":return{"open-url":r};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:var o={},s=r.openUrl||r.url||r["open-url"]||t;if(s&&Object.assign(o,{action:"open-url",url:s}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(o,{action:"clipboard",text:s}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[r]=i.split(";"),[,a]=i.split(",");e=a,s=r.replace("data:","")}else e=i,s=(t=>{var e,s={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(e in s)if(0===t.indexOf(e))return s[e];return null})(i);Object.assign(o,{"media-url":t,"media-base64":e,"media-base64-mime":a??s})}return Object.assign(o,{"auto-dismiss":r["auto-dismiss"],sound:r.sound}),o;case"Loon":{const e={};(s=r.openUrl||r.url||r["open-url"]||t)&&Object.assign(e,{openUrl:s});var n=r.mediaUrl||r["media-url"];return(n=i?.startsWith("http")?i:n)&&Object.assign(e,{mediaUrl:n}),console.log(JSON.stringify(e)),e}case"Quantumult X":{const a={};(o=r["open-url"]||r.url||r.openUrl||t)&&Object.assign(a,{"open-url":o});n=r["media-url"]||r.mediaUrl;return(n=i?.startsWith("http")?i:n)&&Object.assign(a,{"media-url":n}),(s=r["update-pasteboard"]||r.updatePasteboard||e)&&Object.assign(a,{"update-pasteboard":s}),console.log(JSON.stringify(a)),a}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(t,e,s,a(r));break;case"Quantumult X":$notify(t,e,s,a(r));break;case"Node.js":}this.isMuteLog||((i=["","==============📣系统通知📣=============="]).push(t),e&&i.push(e),s&&i.push(s),console.log(i.join("\n")),this.logs=this.logs.concat(i))}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.debug+t.map(t=>t??String(t)).join(this.logSeparator)))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.info+t.map(t=>t??String(t)).join(this.logSeparator)))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.warn+t.map(t=>t??String(t)).join(this.logSeparator)))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(0<t.length&&(this.logs=[...this.logs,...t]),console.log(""+this.logLevelPrefixs.error+t.map(t=>t??String(t)).join(this.logSeparator)))}log(...t){0<t.length&&(this.logs=[...this.logs,...t]),console.log(t.map(t=>t??String(t)).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,void 0!==t.message?t.message:t)}}wait(e){return new Promise(t=>setTimeout(t,e))}done(t={}){var e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(o,t)}