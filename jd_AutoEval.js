/**
带图评价
3 12 3 12 * jd_AutoEval.js
*/
const $ = new Env('带图评价晒单');

const bdy_0x214cd2 = function () {
  let _0x1f3b7e = true;
  return function (_0x9425c1, _0x19d385) {
    {
      const _0x294536 = _0x1f3b7e ? function () {
        if (_0x19d385) {
          const _0x90ccfd = _0x19d385.apply(_0x9425c1, arguments);
          _0x19d385 = null;
          return _0x90ccfd;
        }
      } : function () {};
      _0x1f3b7e = false;
      return _0x294536;
    }
  };
}();
(function () {
  bdy_0x214cd2(this, function () {
    const _0x5357ec = new RegExp("function *\\( *\\)"),
      _0x3f2aff = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x5c9503 = bdy_0x52d3b5("init");
    !_0x5357ec.test(_0x5c9503 + "chain") || !_0x3f2aff.test(_0x5c9503 + "input") ? _0x5c9503("0") : bdy_0x52d3b5();
  })();
})();
const bdy_0x19e6e7 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x10df02 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x53b0cb = require("./function/dylanx"),
  bdy_0x527dd4 = require("./USER_AGENTS");
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    ccc = require("./function/proxy.js");
    $.dget = ccc.intoRequest($.get.bind($));
    $.dpost = ccc.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
let bdy_0x5137de = [],
  bdy_0xcc562f = "";
if ($.isNode()) {
  var bdy_0x3994ef = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(bdy_0x10df02).forEach(_0x1a080 => {
    bdy_0x5137de.push(bdy_0x10df02[_0x1a080]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  let bdy_0x13838b = $.getdata("CookiesJD") || "[]";
  bdy_0x13838b = jsonParse(bdy_0x13838b);
  bdy_0x5137de = bdy_0x13838b.map(_0x3c112d => _0x3c112d.cookie);
  bdy_0x5137de.reverse();
  bdy_0x5137de.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
  bdy_0x5137de.reverse();
  bdy_0x5137de = bdy_0x5137de.filter(_0x3a06a9 => _0x3a06a9 !== "" && _0x3a06a9 !== null && _0x3a06a9 !== undefined);
}
if (process.env.DY_PROXY) {
  const bdy_0x59d212 = require("./function/proxy.js");
  $.get = bdy_0x59d212.intoRequest($.get.bind($));
  $.post = bdy_0x59d212.intoRequest($.post.bind($));
}
const bdy_0x2e9de6 = process.env.EVALNUM ? process.env.EVALNUM : undefined;
let bdy_0xa54c7c = process.env.EVAL_WORD_COUNT ?? -4496 + 3743 + 763,
  bdy_0x1cb31f = process.env.ONEVAL ?? false,
  bdy_0x552b8c = process.env.EVAL_CPKEY ? process.env.EVAL_CPKEY : "",
  bdy_0x6bf456 = ["垃圾", "质量差", "差评", "好差", "欺骗"],
  bdy_0x239a20 = ["非常满意的购物体验！商品质量很好，价格实惠。物流迅速，包装严密。非常感谢商家的耐心解答和及时发货，给予8分好评。", "商品质量非常好，价格实惠，物流速度很快。包装完好，没有损坏。非常感谢商家的耐心解答和热情服务，下次还会再来购买。", "这是一次愉快的购物体验，商品质量非常好，价格也很实惠。物流速度快，包装严密。非常感谢商家的耐心服务和及时回复，给予8分好评。", "商品收到了，非常满意！质量可以，价格也还合理。感谢商家客服的热情服务和及时发货，好的话会推荐给朋友们。", "这次购物真是太棒了！商品质量很好，与描述一致。包装仔细，没有损坏。非常感谢商家的认真态度和及时发货，下次还会再来购买。", "质量非常好,与卖家描述的完全一致,真的很喜欢,完全超出期望值,发货速度非常快,物流公司服务态度很好,运送速度很快,店主态度特好,很好很好!质量好而价低廉，很热情的客服，下次还来祝你生意兴隆质量非常好，出乎我的意料包装非常仔细。", "我为什么喜欢在京东买东西，因为今天买明天就可以送到。我为什么每个商品的评价都一样，因为在京东买的东西太多太多了，导致积累了很多未评价的订单，所以我统一用段话作为评价内容。京东购物这么久，有买到很好的产品，也有买到比较坑的产品，如果我用这段话来评价，说明这款产品没问题，至少85分以上，而比较垃圾的产品，我绝对不会偷懒到复制粘贴评价，我绝对会用心的差评，这样其他消费者在购买的时候会作为参考，会影响该商品销量，而商家也会因此改进商品质量。", "感觉物超所值 服务态度还是可以的，没什么太多可挑剔的，再接再厉，祝老板生意兴隆", "这是一条好评段子，花钱的评价，麻烦你们认真点!先说商品质量：产品总体不错，包装严实。再说商家服务：点赞啦。最后点评快递：发货很快。其他就是感谢店家打折送券活动，毕竟便宜好货更实在。希望店家多多优惠，及时通知老客户，促成回购。祝生意兴隆。", "滴滴滴，我来汇报了，东西还行，客服节能有待提高哈，一贯好评啦，快递是真的快，后面再来追评吧，就这样"],
  bdy_0x25996d = ["赠品", "权益", "非实物", "非卖品", "增值服务", "服务", "券包", "只换不修"],
  bdy_0x32d3ec = ["送的没花钱哈哈", "东西还还不错", "现在的购物体验越来越好", "以前还没有这么多贴心的赠品、增值服务、权益等服务", "给赞", "算不算白嫖"],
  bdy_0x192311 = ["以上是我购物感受和体验，仅供参考，也不要只看好评，适合我的不一定适合你。。。。", "总的来说，还可以，我的评价供大家参考借鉴，根据自己情况。。。。", "总之还行，买不了吃亏，买的了上当，嘿嘿！！！！", "就这样，一惯好评啦，不是非常烂一般不会差评", "最后，希望京东越来越好，感恩"],
  bdy_0x355f78 = [],
  bdy_0xc58a47 = "",
  bdy_0x48746b = true;
!__filename.includes(bdy_0x3994ef) && (bdy_0x48746b = false);
!(async () => {
  if (!bdy_0x5137de[2606 + -1406 + -1200]) {
    {
      const _0x3ece62 = {
        "open-url": "https://bean.m.jd.com/bean/signIndex.action"
      };
      $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x3ece62);
      return;
    }
  }
  console.log("当前版本：20240710 差评内容关键词");
  console.log("每次运行最多20个账号，每个账号最多评价10个商品");
  console.log("差评关键词变量 EVAL_CPKEY='xxx&yyy' 多个&连接");
  console.log("问题反馈：https://t.me/dylan_jdpro");
  if (bdy_0x1cb31f === false) {
    console.log("\n\n默认不执行, 请设置变量 ONEVAL='true'");
    return;
  }
  bdy_0x552b8c != "" && (console.log("\n合并自定义差评内容关键词"), bdy_0x552b8c.includes("&") ? bdy_0x6bf456 = bdy_0x6bf456.concat(bdy_0x552b8c.split("&")) : bdy_0x6bf456.push(bdy_0x552b8c), bdy_0x6bf456 = [...new Set(bdy_0x6bf456)]);
  console.log("\n屏蔽差评内容关键词：" + JSON.stringify(bdy_0x6bf456));
  let _0x5a124d = -1 * 3461 + 9745 + -6284;
  if (bdy_0x5137de.length > 38 * -148 + -6928 + 12572) {
    _0x5a124d = bdy_0x2e9de6 ?? -8450 + 9765 + 5 * -259;
  } else {
    {
      _0x5a124d = bdy_0x5137de.length;
    }
  }
  _0x5a124d = bdy_0x5137de.length;
  
  await bdy_0x487412();
  if (bdy_0xc58a47 == "") {
    {
      console.log("未知错误，反馈作者修！");
      return;
    }
  }
  for (let _0x2939a0 = -20 * 97 + 9781 + -7841; _0x2939a0 < _0x5a124d; _0x2939a0++) {
    {
      if (bdy_0x5137de[_0x2939a0]) {
        {
          bdy_0xcc562f = bdy_0x5137de[_0x2939a0];
          $.UserName = decodeURIComponent(bdy_0xcc562f.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0xcc562f.match(/pt_pin=([^; ]+)(?=;?)/)[-3 * -1152 + 8132 + 1 * -11587]);
          $.index = _0x2939a0 + (2668 + -2 * -3147 + -8961);
          $.isLogin = true;
          $.nickName = "";
          $.commentWareList = "";
          $.commentInfoList = "";
          $.UA = bdy_0x527dd4.UARAM ? bdy_0x527dd4.UARAM(-5807 * 1 + 3 * -2459 + 13185) : bdy_0x527dd4.USER_AGENT;
          $.UA = "okhttp/3.12.16;jdmall;android;version/12.4.2;build/99108;";
          await bdy_0x37e5f4();
          console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
          if (!$.isLogin) {
            const _0x59210f = {
              "open-url": "https://bean.m.jd.com/bean/signIndex.action"
            };
            $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x59210f);
            $.isNode() && (await bdy_0x19e6e7.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
            continue;
          }
          await bdy_0x26af4d();
          console.log("\n等待10秒...");
          await $.wait(15519 + -5519);
        }
      }
    }
  }
})().catch(_0x265016 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x265016 + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x26af4d() {
  try {
    $.commentWareList = [];
    $.caidanList = [];
    await bdy_0x43cdfa();
    if (!$.maxPage) {
      console.log("获取待评价数据失败");
      return;
    }
    if ($.maxPage > -1 * -7418 + 8358 + -1 * 15775) {
      {
        await $.wait(38 * -223 + 643 + 9831);
        await bdy_0x43cdfa($.maxPage);
        $.commentWareList.length == -6053 + -4492 * 2 + 15037 && (await $.wait(8231 + 434 * -12 + 33 * -31), await bdy_0x43cdfa($.maxPage - (10464 + -10463 * 1)));
      }
    }
    await $.wait(2720 + -9343 + 7623);
    console.log("当前有" + Number($.sdnum) + "个待评价晒单，开始评价最后一页的" + $.commentWareList.length + "个商品...");
    for (let _0x30b173 of $.commentWareList.reverse()) {
      let _0x471316 = [],
        _0x4e309f = [],
        _0x5509c9 = "",
        _0x22cde2 = [];
      bdy_0x355f78 = [];
      $.log("\n去评价 👉 " + _0x30b173.wname);
      if (_0x30b173.commentRewardStatus == "1") {
        await bdy_0x3747a7(_0x30b173.orderId, _0x30b173.wareId);
        console.log($.rewardInfo);
        console.log("要求至少" + $.wnezi + "字," + $.saitu + "图");
      } else {
        _0x30b173.estJingBean > -3 * 1129 + 1502 + 1885 && $.log("评价完成最多可得 " + _0x30b173.estJingBean + " 豆 🥔");
      }
      if (bdy_0x25996d.filter(_0x3d9b41 => _0x30b173.wname.includes(_0x3d9b41)).length == -45 * -34 + 6173 + 1 * -7703) {
        {
          console.log("\n开始获取商品好评和图片...");
          await $.wait(-3 * 111 + -4715 + -64 * -157);
          await bdy_0x1f77d5(_0x30b173.wareId);
          $.maxPage > 14314 + 367 * -39 && (await $.wait(-2 * -596 + 8344 + -8536), await bdy_0x1f77d5(_0x30b173.wareId, Math.floor(Math.random() * Math.min.apply(null, [$.maxPage, -4272 + 7336 + 1 * -3054]) + (8432 + 8709 * -1 + 279))));
          await $.wait(-2 * 1354 + 196 * -11 + 6864);
          for (const _0x2310a5 of bdy_0x355f78) {
            if (_0x2310a5.commentInfo.pictureInfoList) {
              {
                for (const _0x290516 of _0x2310a5.commentInfo.pictureInfoList || {}) {
                  {
                    if (_0x290516.mediaType != "2") {
                      let _0x295320 = "";
                      if (_0x290516.picURL.indexOf("dpg") !== -(8872 + -373 * -1 + -4 * 2311)) {
                        _0x295320 = _0x290516.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).dpg/g, "$1");
                      } else {
                        if (_0x290516.picURL.indexOf("webp") !== -(-2138 + -7971 + 10110)) {
                          _0x295320 = _0x290516.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).webp/g, "$1");
                        } else {
                          _0x290516.picURL.indexOf("avif") !== -(13800 + -1 * 13799) && (_0x295320 = _0x290516.picURL.replace(/s[0-9]{3}x[0-9]{3}_(.*).avif/g, "$1"));
                        }
                      }
                      _0x295320 != "" && _0x471316.push(_0x295320);
                    }
                  }
                }
              }
            }
            _0x2310a5.commentInfo.commentScore === "5" && _0x2310a5.commentInfo.commentData.length > bdy_0xa54c7c && _0x4e309f.push(_0x2310a5.commentInfo.commentData);
          }
          for (let _0x14355f of bdy_0x6bf456) {
            _0x4e309f = _0x4e309f.filter(_0x40b741 => !_0x40b741.includes(_0x14355f));
          }
          if (_0x4e309f.length > 8102 + 12 * -675) {
            _0x5509c9 = bdy_0x424316(_0x4e309f);
          } else {
            {
              _0x5509c9 = bdy_0x424316(bdy_0x239a20);
            }
          }
          if (_0x471316.length >= 15716 + -15714) {
            let _0x592b5f = bdy_0x6fa3f2(_0x471316, -1 * -9147 + 2114 + -11259);
            _0x22cde2 = _0x592b5f.slice(11532 + 186 * -62, _0x592b5f.length).map(_0x47db34 => ({
              picUrl: _0x47db34
            }));
          }
        }
      } else {
        {
          console.log("赠品权益，只发布文字评价");
          _0x5509c9 += bdy_0x4c3e4c(bdy_0x32d3ec);
        }
      }
      _0x5509c9 = _0x5509c9.replace(/\*/gi, "");
      _0x30b173.estJingBean > 2219 + 317 * -7 && _0x5509c9.length < 113 * -61 + -1222 * -7 + 1601 * -1 && ($.log("评价有豆，字数不够，我在凑点..."), _0x5509c9 += " " + bdy_0x424316(bdy_0x192311));
      if (_0x30b173.commentRewardStatus == "1") {
        {
          _0x5509c9.length < Number($.wnezi) && (_0x5509c9 += " " + bdy_0x424316(bdy_0x192311));
          _0x5509c9.length < Number($.wnezi) && (_0x5509c9 += " " + "好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了，好评了");
          let _0x34a3dc = bdy_0x6fa3f2(_0x471316, Math.max(5162 + -5160, Number($.saitu)));
          _0x22cde2 = _0x34a3dc.slice(-1321 * -1 + -5237 + 3916, _0x34a3dc.length).map(_0x41c951 => ({
            picUrl: _0x41c951
          }));
        }
      }
      if (_0x22cde2.length != -1618 + 1 * -7988 + 9606 && _0x4e309f.length > -37 * 5 + -5741 * 1 + 5928) {
        {
          console.log("成功获取到图片和评价，去发布✍️✍️✍️...\n");
          const _0x53a77d = {
            mediasExt: "[{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"},{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"}]"
          };
          const _0x125cd3 = {
            productId: _0x30b173.wareId,
            kocSynFlag: "0",
            categoryList: _0x30b173.categoryList,
            voucherStatus: "0",
            extInfo: _0x53a77d,
            officerScore: "1699",
            anonymousFlag: "1",
            commentScore: "5",
            shopType: "0",
            orderId: _0x30b173.orderId,
            shopId: _0x30b173.shopId,
            addPictureFlag: "0",
            commentData: _0x5509c9,
            pictureInfoList: _0x22cde2,
            officerLevel: "3",
            isCommentTagContent: "0"
          };
          await bdy_0x1f7288("pubComment", _0x125cd3);
        }
      } else {
        if (_0x22cde2.length != -1 * -1 + -6061 + 6060 && _0x4e309f.length <= -1 * -3426 + -6732 + -2 * -1654) {
          console.log("成功获取到图片，但没有获取到评价内容，使用内置评价，去发布✍️✍️✍️...\n");
          const _0x6c1bce = {
            mediasExt: "[{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"},{\"VideoIsEditCover\":\"0\",\"ImagePropId\":\"0\",\"ImageTakePhotoFilterId\":\"0\",\"ImageIsCrop\":\"0\",\"VideoIsEditCrop\":\"0\",\"VideoEditFilterId\":\"0\",\"VideoMusicId\":\"0\",\"ImageEditFilterId\":\"0\",\"VideoPropId\":\"0\",\"TakeRate\":\"0\",\"VideoRecordIsMakup\":\"0\",\"ImageTakePhotoIsMakup\":\"0\",\"VideoRecordFilterId\":\"0\",\"ImageFontId\":\"0\",\"FromType\":\"1\",\"ImageStrickId\":\"0\"}]"
          };
          const _0x364505 = {
            productId: _0x30b173.wareId,
            kocSynFlag: "0",
            categoryList: _0x30b173.categoryList,
            voucherStatus: "0",
            extInfo: _0x6c1bce,
            officerScore: "1699",
            anonymousFlag: "1",
            commentScore: "5",
            shopType: "0",
            orderId: _0x30b173.orderId,
            shopId: _0x30b173.shopId,
            addPictureFlag: "0",
            commentData: _0x5509c9,
            pictureInfoList: _0x22cde2,
            officerLevel: "3",
            isCommentTagContent: "0"
          };
          await bdy_0x1f7288("pubComment", _0x364505);
        } else {
          if (_0x22cde2.length == 14456 + -14456 && _0x4e309f.length > -832 + 1719 + -885) {
            {
              console.log("没有获取到图片，但获取到评价，去发布✍️✍️✍️...\n");
              const _0x437d1a = {
                productId: _0x30b173.wareId,
                kocSynFlag: "0",
                categoryList: _0x30b173.ategoryList,
                voucherStatus: "0",
                officerScore: "1699",
                anonymousFlag: "1",
                commentScore: "5",
                shopType: "0",
                orderId: _0x30b173.orderId,
                shopId: _0x30b173.shopId,
                addPictureFlag: "0",
                commentData: _0x5509c9,
                pictureInfoList: "",
                officerLevel: "3",
                isCommentTagContent: "0"
              };
              await bdy_0x1f7288("pubComment", _0x437d1a);
            }
          } else {
            bdy_0x355f78.length <= -307 * -1 + 1 * -3389 + 3083 && (console.log("没有获取到评价和图片,使用内置文字评价，去发布✍️✍️✍️...\n"), await bdy_0x1f7288("pubComment", {
              productId: _0x30b173.wareId,
              kocSynFlag: "0",
              categoryList: _0x30b173.ategoryList,
              voucherStatus: "0",
              officerScore: "1699",
              anonymousFlag: "1",
              commentScore: "5",
              shopType: "0",
              orderId: _0x30b173.orderId,
              shopId: _0x30b173.shopId,
              addPictureFlag: "0",
              commentData: _0x5509c9,
              pictureInfoList: "",
              officerLevel: "3",
              isCommentTagContent: "0"
            }));
          }
        }
      }
      console.log("评价内容(" + _0x5509c9.length + "字) ：" + _0x5509c9);
      if (_0x22cde2.length != 601 * -15 + 3482 + 5533) {
        {
          console.log("晒图详情：");
          _0x22cde2.forEach(_0x5cdf3c => console.log(_0x5cdf3c.picUrl));
        }
      }
      await $.wait(-6267 * -1 + 1912 * -2 + -111 * 13);
    }
  } catch (_0x1274e6) {
    console.log(_0x1274e6);
    console.log("出错了，反馈作者修！！！");
  }
}
switch ($.type) {
  case "nb":
    const bdy_0x535f37 = {
      nb: nb
    };
    _0xf1f6le = bdy_0x535f37;
    break;
}
async function bdy_0x1f77d5(_0x35b06d, _0x4abd77 = -179 * -55 + -903 * 1 + -8941) {
  const _0x26c076 = {
    sortType: "5",
    isCurrentSku: false,
    sku: "" + _0x35b06d,
    pictureCommentType: "A",
    shieldCurrentComment: "1",
    shopType: "0",
    type: "4",
    shadowMainSku: "0",
    num: "10",
    offset: "" + _0x4abd77,
    pageNum: "" + _0x4abd77,
    pageSize: "10"
  };
  s = await bdy_0x1f7288("getCommentListWithCard", _0x26c076);
  bdy_0x355f78 = bdy_0x355f78.concat(s.commentInfoList);
  $.maxPage = s.maxPage;
}
async function bdy_0x3354af(_0x1a58f8, _0x3e235c = 2031 * -1 + 3447 + -1415) {
  const _0x31fffa = {
    bbtf: ""
  };
  const _0x505387 = {
    category: "",
    extInfo: _0x31fffa,
    isCurrentSku: true,
    num: "21",
    offset: "" + _0x3e235c,
    shadowMainSku: "0",
    shopType: "0",
    sku: "" + _0x1a58f8
  };
  s = await bdy_0x1f7288("getShowPictures", _0x505387);
  $.commentInfoList = s.commentShowPicInfoList;
  $.maxPage = s.maxPage;
}
async function bdy_0x451645(_0x390f39, _0x15613c = 1173 + -9933 + 8761) {
  const _0x46a925 = {
    bbtf: ""
  };
  const _0x3a6905 = {
    category: "",
    extInfo: _0x46a925,
    isCurrentSku: false,
    num: "10",
    offset: "" + _0x15613c,
    shopType: "0",
    sku: "" + _0x390f39,
    type: "4"
  };
  s = await bdy_0x1f7288("getFoldCommentList", _0x3a6905);
  bdy_0x355f78 = bdy_0x355f78.concat(s.commentInfoList);
  $.maxPage = s.maxPage;
}
async function bdy_0x3747a7(_0x658018, _0x2578bf) {
  s = await bdy_0x1f7288("commentEditInfo", {
    allFloorsFlag: null,
    business: "1",
    evaAuraVersion: "120602",
    lowSaleQuantity: null,
    orderId: _0x658018,
    qrType: "1",
    sku: _0x2578bf
  });
  $.rewardInfo = s.commentFloorList[-5008 + 8829 + 1 * -3821].productCommentFloor.newCommentRewardMap?.["bannerInfo"] || "评价有礼";
  $.wnezi = JSON.stringify(s).match(new RegExp("(\\d+)字")) ? JSON.stringify(s).match(new RegExp("(\\d+)字"))[5877 + -2777 * 3 + -1 * -2455] : -11 * -514 + 3510 + -1138 * 8;
  $.saitu = JSON.stringify(s).match(new RegExp("(\\d+)晒图")) ? JSON.stringify(s).match(new RegExp("(\\d+)晒图"))[-2126 * -4 + -132 * -58 + 16159 * -1] : 147 * -58 + 8996 + -468;
}
async function bdy_0x43cdfa(_0x52a8a3 = "1", _0x4ee184 = "1") {
  const _0x4c281d = {
    pageIndex: _0x52a8a3,
    pageSize: "10",
    planType: "1",
    status: _0x4ee184
  };
  s = await bdy_0x1f7288("getCommentWareList", _0x4c281d, "12.5.0");
  $.maxPage = s.commentWareListInfo?.["maxPage"];
  $.sdnum = s.commentWareListInfo?.["wait4CommentCount"];
  _0x4ee184 == "4" ? $.caidanList = s.commentWareListInfo?.["commentWareList"] : $.commentWareList = s.commentWareListInfo?.["commentWareList"];
}
async function bdy_0x1f7288(_0x11568f, _0x580f33) {
  let _0x130913 = await bdy_0x53b0cb[bdy_0xc58a47](_0x11568f, _0x580f33, "11.0.2", "1"),
    _0x4905b9 = {
      url: "https://api.m.jd.com/client.action?functionId=" + _0x11568f,
      body: "fuctionId=" + _0x11568f + "&" + _0x130913,
      headers: {
        Host: "api.m.jd.com",
        accept: "*/*",
        "user-agent": $.UA,
        "accept-language": "zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6",
        Cookie: bdy_0xcc562f
      }
    };
  return new Promise(_0x16d50c => {
    $.dpost(_0x4905b9, (_0x4d051d, _0x3b6651, _0x527f7d) => {
      {
        try {
          _0x4d051d ? console.log(_0x4d051d) : _0x527f7d = JSON.parse(_0x527f7d);
          switch (_0x11568f) {
            case "pubComment":
              if (_0x527f7d.message) {
                {
                  console.log(_0x527f7d.message);
                }
              }
              break;
            default:
              break;
          }
        } catch (_0xb44862) {
          {
            console.log(_0xb44862);
          }
        } finally {
          _0x16d50c(_0x527f7d);
        }
      }
    });
  });
}
function bdy_0x58d6fc() {
  return Math.random().toString(-2 * -1234 + -5796 + -1672 * -2).slice(12709 + -131 * 97, 948 + 509 * -10 + 4152) + Math.random().toString(7273 + 41 * -177).slice(-8371 * 1 + 3046 * -2 + 14465, -8919 + 3 * -2269 + -8 * -1967) + Math.random().toString(-287 + 3288 + -2985).slice(-9366 + -9250 + 18618, -4 * 682 + -34 * -109 + -968) + Math.random().toString(-5392 + -1886 * -1 + 3522).slice(-5292 + 7598 + -2304, -1543 * 2 + -8026 * 1 + 11122) + Math.random().toString(-4048 + 3202 * -1 + 7266).slice(-1061 + -21 * 79 + -1 * -2722, 5867 * -1 + -1 * 1039 + 6916);
}
function bdy_0x424316(_0x45335b) {
  return _0x45335b[Math.floor(Math.random() * _0x45335b.length)] || "";
}
function bdy_0x6fa3f2(_0x2d7ead, _0x452f91) {
  const _0x5d17d4 = _0x2d7ead.slice();
  let _0x143774 = _0x2d7ead.length,
    _0x280e89,
    _0xe4f2ca;
  while (_0x143774--) {
    _0xe4f2ca = Math.floor((_0x143774 + (14221 + -158 * 90)) * Math.random());
    _0x280e89 = _0x5d17d4[_0xe4f2ca];
    _0x5d17d4[_0xe4f2ca] = _0x5d17d4[_0x143774];
    _0x5d17d4[_0x143774] = _0x280e89;
  }
  return _0x5d17d4.slice(-9135 + -710 * -6 + 4875, _0x452f91);
}
function bdy_0x487412() {
  let _0x41b413 = {
    url: "https://verify-dy-server-hchdzuwrsu.cn-hangzhou.fcapp.run/pingjia",
    timeout: 30000
  };
  return new Promise(_0x4ec051 => {
    $.post(_0x41b413, async (_0x553584, _0x3092cd, _0x387b2f) => {
      try {
        {
          if (!_0x553584) {
            if (_0x387b2f) {
              _0x387b2f = JSON.parse(_0x387b2f);
              if (_0x387b2f.status === -7473 + -1066 * -5 + -2343 * -1) {
                bdy_0xc58a47 = _0x387b2f.method;
              }
            }
          }
        }
      } catch (_0x5d9eb8) {
        {
          $.logErr(_0x5d9eb8, _0x3092cd);
        }
      } finally {
        _0x4ec051(_0x387b2f);
      }
    });
  });
}
function bdy_0x367389(_0x23c49d) {
  const _0x50fcd1 = [],
    _0x5d00b5 = /[\u4e00-\u9fa5]/;
  for (let _0xd34f14 = -55 * 112 + -9325 + 15485; _0xd34f14 < _0x23c49d.length; _0xd34f14++) {
    {
      const _0xabb22a = _0x23c49d[_0xd34f14];
      _0x5d00b5.test(_0xabb22a) && !_0x50fcd1.includes(_0xabb22a) && _0x50fcd1.push(_0xabb22a);
    }
  }
  return _0x50fcd1.length;
}
function bdy_0x4c3e4c(_0x3ae53a) {
  for (let _0x1ddc96 = _0x3ae53a.length - (-1201 * -3 + 7493 + -11095); _0x1ddc96 > -5782 + -3 * 166 + 6280; _0x1ddc96--) {
    const _0x2bc3de = Math.floor(Math.random() * (_0x1ddc96 + (8992 + -5290 + -3701)));
    [_0x3ae53a[_0x1ddc96], _0x3ae53a[_0x2bc3de]] = [_0x3ae53a[_0x2bc3de], _0x3ae53a[_0x1ddc96]];
  }
  return _0x3ae53a.join(",");
}
function bdy_0x37e5f4() {
  return new Promise(_0x545d0a => {
    const _0x5379a4 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: {},
      timeout: 10000
    };
    _0x5379a4.headers.Cookie = bdy_0xcc562f;
    _0x5379a4.headers.referer = "https://h5.m.jd.com/";
    _0x5379a4.headers["User-Agent"] = $.UA;
    const _0x2e3214 = _0x5379a4;
    $.get(_0x2e3214, (_0x6b820, _0x45d744, _0x39ae73) => {
      {
        try {
          {
            if (_0x39ae73) {
              {
                _0x39ae73 = JSON.parse(_0x39ae73);
                if (!(_0x39ae73.islogin === "1")) {
                  _0x39ae73.islogin === "0" && ($.isLogin = false);
                }
              }
            }
          }
        } catch (_0x1cefa6) {
          console.log(_0x1cefa6);
        } finally {
          _0x545d0a();
        }
      }
    });
  });
}
function bdy_0x52d3b5(_0x1296d1) {
  function _0x5037fc(_0x5ed5b9) {
    if (typeof _0x5ed5b9 === "string") {
      return function (_0x479dc8) {}.constructor("while (true) {}").apply("counter");
    } else {
      ("" + _0x5ed5b9 / _0x5ed5b9).length !== 13214 + -13213 || _0x5ed5b9 % (9178 * -1 + 432 + 8766) === 1 * -1637 + 3 * -971 + 4550 ? function () {
        return true;
      }.constructor("debu" + "gger").call("action") : function () {
        return false;
      }.constructor("debu" + "gger").apply("stateObject");
    }
    _0x5037fc(++_0x5ed5b9);
  }
  try {
    if (_0x1296d1) {
      {
        return _0x5037fc;
      }
    } else {
      _0x5037fc(79 * -111 + -19 * 254 + 13595);
    }
  } catch (_0x1e22c4) {}
}

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) {const {execSync} = require('child_process');execSync('sleep 15'); return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { const {execSync} = require('child_process');execSync('sleep 15');if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }