/*
* 粉丝互动，没啥水
* 修改温某的脚本，由于温某不干活，只能自己动手修改了
* 注意：脚本会加购，脚本会加购，脚本会加购
* 若发现脚本里没有的粉丝互动活动。欢迎反馈给我
cron  "34 5,17 * * *" jd_wxFans.js
* */
const $ = new Env('粉丝互动');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';

const share_code_url = process.env.UPDATE_SHARE_CODE_URL ?? '';
const md5 = $.isNode() ? require('md5-node'): '';;

let cookiesArr = [];

let lz_jdpin_token_cookie =''
let activityCookie =''

$.sid = 'd6c3291b9309a8dcf1d008c41ecfab5w';

$.activityList = [
     {"actid":"83cf785ee5f74d0f8c35a8ba8a674cf2","endTime":1643644799000},

];

if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
    cookiesArr = [
        $.getdata("CookieJD"),
        $.getdata("CookieJD2"),
        ...$.toObj($.getdata("CookiesJD") || "[]").map((item) => item.cookie)].filter((item) => !!item);
}
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
        return;
    }

	$.activityList = []
	let res = await getAuthorShareCode(`${share_code_url}/jd_wxfans_inter?type=0&username=${$.UserName}`);
	if (res && res.code === 200) {
		$.activityList = res.data || [];
	}else{
		console.log(`getAuthorShareCode=${JSON.stringify(res)}`)
	}

	
    for (let i = 0; i < cookiesArr.length; i++) {
        await getUA();
        $.index = i + 1;
        $.cookie = cookiesArr[i];
        $.oldcookie = cookiesArr[i];
        $.isLogin = true;
        $.nickName = '';
        await TotalBean();
        $.UserName = decodeURIComponent($.cookie.match(/pt_pin=([^; ]+)(?=;?)/) && $.cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        console.log(`\n*****开始【京东账号${$.index}】${$.nickName || $.UserName}*****\n`);
        if (!$.isLogin) {
            $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
            if ($.isNode()) {
                await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
            }
            continue
        }
        $.hotFlag = false;
        for (let j = 0; j < $.activityList.length && !$.hotFlag; j++) {
            $.activityInfo = $.activityList[j];
            $.activityID = $.activityInfo.actid;
            console.log(`互动ID：${JSON.stringify($.activityInfo)}`);
            console.log(`活动地址：https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/${$.activityID}?activityId=${$.activityID}`);
            if($.activityInfo.endTime && Date.now() > $.activityInfo.endTime){
				console.log($.activityID);
                console.log(`活动已结束\n`);
                continue;
            }
            await main();
            await $.wait(1000);
            console.log('\n')
        }
		
		console.log('休息1分钟，别被黑ip了\n可持续发展')
		await $.wait(parseInt(Math.random() * 5000 + 60000, 10))
		
    }
})().catch((e) => {$.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')}).finally(() => {$.done();});

async function main() {
    $.token = ``;
    await getToken();
    if($.token === ``){
        console.log(`获取token失败`);return;
    }
    console.log(`token:${$.token}`);
    await $.wait(1000);
    //await getActCk();
	//console.log(`获取cookie开始`);
	await getCk()
    if (activityCookie == '') {
      console.log(`获取cookie失败`); return;
    }
	console.log(`activityCookie:${activityCookie}`);
	//console.log(`获取cookie结束`);
	
    $.shopId = ``;
    await takePostRequest('getSimpleActInfoVo');
    if($.shopid === ``){
        console.log(`获取shopid失败`);return;
    }
    console.log(`shopid:${$.shopid}`)
    await $.wait(1000);
	
    $.pin = '';
    await takePostRequest('getMyPing');
    if($.pin === ``){
        $.hotFlag = true;
        console.log(`获取pin失败,该账号可能是黑号`);return;
    }
    //$.cookie=$.cookie + `AUTH_C_USER=${$.pin}`;
    //await $.wait(1000);
    //await accessLogWithAD();
    //$.cookie=$.cookie + `AUTH_C_USER=${$.pin}`;
    await $.wait(1000);
    $.activityData = {};
    $.actinfo = '';$.actorInfo='';$.nowUseValue = 0;
	
	
    await takePostRequest('activityContent');
	//console.log(JSON.stringify($.activityData) );
    if(JSON.stringify($.activityData) === `{}`){
        console.log(`获取活动详情失败`);return;
    }
	
    let date = new Date($.activityData.actInfo.endTime)
    let endtime = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    console.log(`${$.actinfo.actName},${$.actinfo.shopName},当前积分：${$.nowUseValue},结束时间：${endtime}，${$.activityData.actInfo.endTime}`);
    let gitList = [];
    let gitTypeList = ['One','Two','Three'];
    for (let i = 0; i < gitTypeList.length; i++) {
        let gitInfo = $.activityData.actInfo['giftLevel'+ gitTypeList[i]] || '';
        if(gitInfo){
            gitInfo = JSON.parse(gitInfo);
            gitList.push(gitInfo[0].name);
        }
    }
    console.log(`奖品列表：` + gitList.toString());
    if($.actorInfo.prizeOneStatus && $.actorInfo.prizeTwoStatus && $.actorInfo.prizeThreeStatus){
        console.log(`已抽过所有奖品`);return;
    }
    await $.wait(1000);
    $.memberInfo = {};
    await takePostRequest('getActMemberInfo');
    if($.memberInfo.actMemberStatus === 1 && !$.memberInfo.openCard){
        console.log(`\n====================该活动需要入会,如需执行，请先手动入会====================`);return ;
    }
    await $.wait(1000);
    $.upFlag = false;
    await doTask();
    await luckDraw();//抽奖
}

async function luckDraw(){
    if($.upFlag){
        await takePostRequest('activityContent');
        await $.wait(1000);
    }
    let nowUseValue = Number($.activityData.actorInfo.fansLoveValue) + Number($.activityData.actorInfo.energyValue) ;
    if (nowUseValue >= $.activityData.actConfig.prizeScoreOne && $.activityData.actorInfo.prizeOneStatus === false) {
        console.log(`开始第一次抽奖`);
        $.drawType = '01';
        await takePostRequest('startDraw');
        await $.wait(1000);
    }
    if (nowUseValue >= $.activityData.actConfig.prizeScoreTwo && $.activityData.actorInfo.prizeTwoStatus === false) {
        console.log(`开始第二次抽奖`);
        $.drawType = '02';
        await takePostRequest('startDraw');
        await $.wait(1000);
    }
    if (nowUseValue >= $.activityData.actConfig.prizeScoreThree && $.activityData.actorInfo.prizeThreeStatus === false) {
        console.log(`开始第三次抽奖`);
        $.drawType = '03';
        await takePostRequest('startDraw');
        await $.wait(1000);
    }
}
async function doTask(){
    $.runFalag = true;
    if($.activityData.actorInfo && !$.activityData.actorInfo.follow){
        console.log(`关注店铺`);
        await takePostRequest('followShop');
        await $.wait(2000);
        $.upFlag = true;
    }else{
        console.log('已关注')
    }
    if ($.activityData.task1Sign && $.activityData.task1Sign.finishedCount === 0 && $.runFalag) {
        console.log(`执行每日签到`);
        await takePostRequest('doSign');
        await $.wait(2000);
        $.upFlag = true;
    }else{
        console.log(`已签到`)
    }
    let needFinishNumber = 0;
    //浏览货品任务
    if ($.activityData.task2BrowGoods && $.runFalag) {
        if($.activityData.task2BrowGoods.finishedCount !== $.activityData.task2BrowGoods.upLimit){
            needFinishNumber = Number($.activityData.task2BrowGoods.upLimit) - Number($.activityData.task2BrowGoods.finishedCount);
            console.log(`开始做浏览商品任务`);
            $.upFlag = true;
            for (let i = 0; i < $.activityData.task2BrowGoods.taskGoodList.length && needFinishNumber > 0 && $.runFalag; i++) {
                $.oneGoodInfo = $.activityData.task2BrowGoods.taskGoodList[i];
                if ($.oneGoodInfo.finished === false) {
                    console.log(`浏览:${$.oneGoodInfo.skuName || ''}`)
                    await takePostRequest('doBrowGoodsTask');
                    await $.wait(2000);
                    needFinishNumber--;
                }
            }
        }else{
            console.log(`浏览商品任务已完成`)
        }
    }
    //加购商品任务
    if($.activityData.task3AddCart && $.runFalag){
        if($.activityData.task3AddCart.finishedCount !== $.activityData.task3AddCart.upLimit){
            needFinishNumber = Number($.activityData.task3AddCart.upLimit) - Number($.activityData.task3AddCart.finishedCount);
            console.log(`开始做加购商品任务`);
            $.upFlag = true;
            for (let i = 0; i < $.activityData.task3AddCart.taskGoodList.length && needFinishNumber > 0 && $.runFalag; i++) {
                $.oneGoodInfo = $.activityData.task3AddCart.taskGoodList[i];
                if ($.oneGoodInfo.finished === false) {
                    console.log(`加购:${$.oneGoodInfo.skuName || ''}`)
                    await takePostRequest('doAddGoodsTask');
                    await $.wait(2000);
                    needFinishNumber--;
                }
            }
        }else{
            console.log(`加购商品已完成`)
        }
    }
    //分享任务
    if ($.activityData.task4Share && $.runFalag) {
        if($.activityData.task4Share.finishedCount !== $.activityData.task4Share.upLimit){
            needFinishNumber = Number($.activityData.task4Share.upLimit) - Number($.activityData.task4Share.finishedCount);
            console.log(`开始做分享任务`);
            $.upFlag = true;
            for (let i = 0; i < needFinishNumber && $.runFalag; i++) {
                console.log(`执行第${i+1}次分享`);
                await takePostRequest('doShareTask');
                await $.wait(2000);
            }
        }else{
            console.log(`分享任务已完成`)
        }
    }
    //设置活动提醒
    if ($.activityData.task5Remind && $.runFalag) {
        if($.activityData.task5Remind.finishedCount !== $.activityData.task5Remind.upLimit){
            console.log(`执行设置活动提醒`);
            $.upFlag = true;
            await takePostRequest('doRemindTask');
            await $.wait(2000);
        }else{
            console.log(`设置活动提醒已完成`)
        }
    }
    //领取优惠券
    if ($.activityData.task6GetCoupon && $.runFalag) {
        if($.activityData.task6GetCoupon.finishedCount !== $.activityData.task6GetCoupon.upLimit){
            needFinishNumber = Number($.activityData.task6GetCoupon.upLimit) - Number($.activityData.task6GetCoupon.finishedCount);
            console.log(`开始做领取优惠券`);
            $.upFlag = true;
            for (let i = 0; i < $.activityData.task6GetCoupon.taskCouponInfoList.length && needFinishNumber > 0 && $.runFalag; i++) {
                $.oneCouponInfo = $.activityData.task6GetCoupon.taskCouponInfoList[i];
                if ($.oneCouponInfo.finished === false) {
                    await takePostRequest('doGetCouponTask');
                    await $.wait(2000);
                    needFinishNumber--;
                }
            }
        }else{
            console.log(`领取优惠券已完成`)
        }
    }
    //逛会场
    if ($.activityData.task7MeetPlaceVo && $.runFalag) {
        if($.activityData.task7MeetPlaceVo.finishedCount !== $.activityData.task7MeetPlaceVo.upLimit){
            console.log(`执行逛会场`);
            $.upFlag = true;
            await takePostRequest('doMeetingTask');
            await $.wait(2000);
        }else{
            console.log(`逛会场已完成`)
        }
    }

}

async function takePostRequest(type){
    let url = '';
    let body = ``;
	let pageUrl = ``;
    switch (type) {
        case 'getSimpleActInfoVo':
            url= 'https://lzkjdz-isv.isvjcloud.com/customer/getSimpleActInfoVo';
            body = `activityId=${$.activityID}`;
            break;
        case 'getMyPing':
            url= 'https://lzkjdz-isv.isvjcloud.com/customer/getMyPing';
            body = `userId=${$.shopid}&token=${encodeURIComponent($.token)}&fromType=APP`;
            break;
        case 'activityContent':
            url= 'https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activityContent';
            //body = `activityId=${$.activityID}&pin=${encodeURIComponent($.pin)}`;

			pageUrl = `https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/${$.activityID}?activityId=${$.activityID}&sid=d6c3291b9309a8dcf1d008c41ecfab5w&un_area=19_1657_59566_0`;
			
			
  
			body = `venderId=${$.shopid}&code=69&pin=${encodeURIComponent($.pin)}&activityId=${$.activityID}&pageUrl=${encodeURIComponent(pageUrl)}&subType=app&adSource=`;

            break;
        case 'getActMemberInfo':
            url= 'https://lzkjdz-isv.isvjcloud.com/wxCommonInfo/getActMemberInfo';
            body = `venderId=${$.shopid}&activityId=${$.activityID}&pin=${encodeURIComponent($.pin)}`;
            break;
        case 'doBrowGoodsTask':
        case 'doAddGoodsTask':
            url= `https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/${type}`;
            body = `activityId=${$.activityID}&uuid=${$.activityData.actorInfo.uuid}&skuId=${$.oneGoodInfo.skuId}`;
            break;
        case 'doSign':
        case 'followShop':
        case 'doShareTask':
        case 'doRemindTask':
        case 'doMeetingTask':
            url= `https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/${type}`;
            body = `activityId=${$.activityID}&uuid=${$.activityData.actorInfo.uuid}`;
            break;
        case 'doGetCouponTask':
            url= `https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/${type}`;
            body= `activityId=${$.activityID}&uuid=${$.activityData.actorInfo.uuid}&couponId=${$.oneCouponInfo.couponInfo.couponId}`;
            break;
        case 'startDraw':
            url= `https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/${type}`;
            body= `activityId=${$.activityID}&uuid=${$.activityData.actorInfo.uuid}&drawType=${$.drawType}`;
            break;
        default:
            console.log(`错误${type}`);
    }
    let myRequest = getPostRequest(url,body);
    return new Promise(async resolve => {
        $.post(myRequest, (err, resp, data) => {
            try {
                dealReturn(type, data);
            } catch (e) {
                console.log(data);
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

function dealReturn(type, data) {
    try {
		console.log(data);
        data = JSON.parse(data);
    }catch (e) {
        console.log(`执行任务异常`);
        console.log(data);
        $.runFalag = false;
    }
    switch (type) {
        case 'getSimpleActInfoVo':
            if (data.result) {
                $.shopid = data.data.venderId;
            }
            break;
        case 'getMyPing':
            if (data.data && data.data.secretPin) {
                $.pin = data.data.secretPin
                $.nickname = data.data.nickname
            }else{
                console.log(JSON.stringify(data));
            }
            break;
        case 'activityContent':
            if (data.data && data.result && data.count === 0) {
                $.activityData = data.data;
                $.actinfo = $.activityData.actInfo
                $.actorInfo = $.activityData.actorInfo
                $.nowUseValue = Number($.actorInfo.fansLoveValue) + Number($.actorInfo.energyValue) ;
            } else {
                console.log(JSON.stringify(data));
            }
            break;
        case 'getActMemberInfo':
            if (data.data && data.result && data.count === 0) {
                $.memberInfo = data.data;
            }
            break;
        case 'doSign':
            if (data.result === true) {
                console.log('签到成功')
            } else {
                console.log(data.errorMessage)
            }
            break;
        case 'followShop':
        case 'doBrowGoodsTask':
        case 'doAddGoodsTask':
        case 'doShareTask':
        case 'doRemindTask':
        case 'doGetCouponTask':
        case 'doMeetingTask':
            if (data.result === true) {
                console.log('执行成功');
            } else {
                console.log(data.errorMessage)
            }
            break;
        case 'startDraw':
            if(data.result && data.data){
                if(data.data.drawInfoType === 6){
                    console.log(`抽奖获得：${data.data.name || ''}`);
                }else if(data.data.drawInfoType === 0){
                    console.log(`未抽中`);
                }else{
                    console.log(`抽奖结果：${data.data.name || ''}`);
                }
            }
            console.log(JSON.stringify(data));
            break;
        default:
            console.log(JSON.stringify(data));
    }
}

function getPostRequest000(url,body) {
    let headers =  {
        'Host': 'lzkjdz-isv.isvjcloud.com',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Referer': 'https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/' + $.activityID + '?activityId=' + $.activityID + '&shareuserid4minipg=jd_4806fb66e0f3e&shopid=undefined',
        'user-agent': $.UA,
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': $.cookie,
    }
    return  {url: url, method: `POST`, headers: headers, body: body};
}
function getPostRequest(url, body, method="POST") {
  let headers = {
	'Host': 'lzkjdz-isv.isvjcloud.com',  
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": $.cookie,
    "User-Agent": $.UA,
    "X-Requested-With": "com.jingdong.app.mall"
  }
  //if(url.indexOf('https://lzdz1-isv.isvjcloud.com') > -1){
    headers["Referer"] = `https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/${$.activityID}?activityId=${$.activityID}&sid=${$.sid}&un_area=19_1657_59566_0`
    //headers["Cookie"] = `${lz_jdpin_token_cookie && lz_jdpin_token_cookie || ''}${$.Pin && "AUTH_C_USER=" + $.Pin + ";" || ""}${activityCookie}`
	headers["Cookie"] = `${$.cookie}${activityCookie}`
	
  //}

  //console.log(headers)
  //console.log(headers.Cookie)
  return  {url: url, method: method, headers: headers, body: body, timeout:30000};
}

function accessLogWithAD() {
	let pageUrl = `https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/${$.activityID}?activityId=${$.activityID}&shareuserid4minipg=&shopid=undefined`;
    let config = {
        url: `https://lzkjdz-isv.isvjcloud.com/common/accessLogWithAD`,
        headers: {
            'Host': 'lzkjdz-isv.isvjcloud.com',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'user-agent': $.UA,
            'Referer': 'https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/' + $.activityID + '?activityId=' + $.activityID + '&shareuserid4minipg=jd_4806fb66e0f3e&shopid=undefined',
            'content-type': 'application/x-www-form-urlencoded',
            'Cookie': $.cookie,
        },
        body:`venderId=${$.shopid}&code=69&pin=${encodeURIComponent($.pin)}&activityId=${$.activityID}&pageUrl=${encodeURIComponent(pageUrl)}&subType=app&adSource=`
    }
    return new Promise(resolve => {
        $.post(config, (err, resp, data) => {
            try {
				//console.log(config)
				//console.log(resp)
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    $.cookie =  $.oldcookie;
					if(resp['headers']['set-cookie']){

						if ($.isNode())
							for (let ck of resp['headers']['set-cookie']) {
								$.cookie = `${$.cookie}${ck.split(";")[0]};`
							}
						else {
							for (let ck of resp['headers']['Set-Cookie'].split(',')) {
								$.cookie = `${$.cookie}${ck.split(";")[0]};`
							}
						}
					}
					
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}
function getActCk() {
	$.cookie = `Cookie:IsvToken=AAFh4RlmADAqQlgDprSlGibkK5p2fIyr3yQ1STe5rMOeZNgyz-qJEPsHQgH2THYaGSn89zRaWdQ; __jdc=60969652; dfs=TF%2FVo%2Bzx5K5tJ49qhitVMIf0f2EzzkPmgZO5%2B2E5XM%2FMdN7Cnq7mzm1rFpS2kqHgqGYu52cCtBA7zr7C0L%2BIjBZCeKtRkG7sBc1OiRiHJmlzrSH8eLfkw2o7dkCwM%2BKQuylpjv00xGpPI%2FkDZpocjheIgdcyrePBu66wrR%2FVuXdDiNBmFogVk56HQB1ww126G05fT7mm%2FJI1qEsauJwZ5VG57vrapHQtJbkjN6p1uM8%3D; mixNick=1vOTSGkgXBfyFC2uhDtf9c7TwJCmNe8NFvhpI0XmJDULVU108%2BUxlHw7qoUuHA4F; userId=149101; jwt=PdwvMPXvlxH%2Bb6mqekTNpQAw8OYymz6j1daJTdCSMaVAvEAI5cnFl4k363skTiwNOSL3Wa70VBcAt9MSHCqkW23AB%2B6ldcu7PmU%2Fm395rhKy6h1J64fKTXX1rG92Pxrtu%2BjC4s4xRtQLspYgkLkIEdEwzAuhJmBrSB3%2F8IW4HA%2Fv2YdTH%2FVexRHWGaXNJ98%2FX%2F0Q3rWL5jODwkdOHoJmMBNIXRFhHErgoXasNTyTqiTn2dmjbGsz0GSEPDBnNG1UYyvixPFoyF3AeXNIQdH%2BdrWj8Ds56hxjvPOKmCieMhAP2OpSEerFa2ti9vnqDRrevmid9QPOYuh07jy5LZV2G3M7Dxyo8eM8GmskVjnwjus%3D; __jda=60969652.1641554379291773158301.1641554379.1642138680.1642140540.20; LZ_TOKEN_VALUE=B0oH3vDY2bhHWuKbVaJ+XQ==; __jdv=60969652%7Candroidapp%7Ct_335139774%7Cappshare%7CWxfriends%7C1642142021506; LZ_TOKEN_KEY=lztokenpagecafe532e839440f6a1ac034013efd847; __jdb=60969652.12.1641554379291773158301|20.1642140540; mba_sid=958.5; pre_session=2+eNp5Bl0ZsGIZzckW5AqNvXaH4xzfr+|1856; pre_seq=4; __jd_ref_cls=join; mba_muid=1641554379291773158301.958.1642142096508;`;
	
	
    let config = {
        url: `https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/{$.activityID}?activityId={$.activityID}&sid=d6c3291b9309a8dcf1d008c41ecfab5w&un_area=19_1657_59566_0`,
        headers: {
            'Host': 'lzkjdz-isv.isvjcloud.com',
            //'Accept': 'application/json',
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;',
            'X-Requested-With': 'com.jingdong.app.mall;',
            'Referer': 'https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/' + $.activityID + '?activityId=' + $.activityID + '&shareuserid4minipg=jd_4806fb66e0f3e&shopid=undefined',
            'user-agent': $.UA,
            'content-type': 'application/x-www-form-urlencoded',
            'Cookie': $.cookie,
        }
    }
	console.log(config);
    return new Promise(resolve => {
        $.get(config, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    $.cookie =  $.oldcookie;
                    if ($.isNode())
                        for (let ck of resp['headers']['set-cookie']) {
                            $.cookie = `${$.cookie}${ck.split(";")[0]};`
                        }
                    else {
                        for (let ck of resp['headers']['Set-Cookie'].split(',')) {
                            $.cookie = `${$.cookie}${ck.split(";")[0]};`
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}
function getToken() {
    let config = {
        url: 'https://api.m.jd.com/client.action?functionId=isvObfuscator&clientVersion=10.0.6&build=88852&client=android&d_brand=Xiaomi&d_model=RedmiK30&osVersion=11&screen=2175*1080&partner=xiaomi001&oaid=b30cf82cacfa8972&openudid=290955c2782e1c44&eid=eidAef5f8122a0sf2tNlFbi9TV+3rtJ+jl5UptrTZo/Aq5MKUEaXcdTZC6RfEBt5Jt3Gtml2hS+ZvrWoDvkVv4HybKpJJVMdRUkzX7rGPOis1TRFRUdU&sdkVersion=30&lang=zh_CN&uuid=290955c2782e1c44&aid=290955c2782e1c44&area=1_2803_2829_0&networkType=wifi&wifiBssid=unknown&uts=0f31TVRjBSsSbxrSGoN9DgdOSm6pBw5mcERcSRBBxns2PPMfI6n6ccc3sDC5tvqojX6KE6uHJtCmbQzfS%2B6T0ggVk1TfVMHdFhgxdB8xiJq%2BUJPVGAaS5duja15lBdKzCeU4J31903%2BQn8mkzlfNoAvZI7hmcbV%2FZBnR1VdoiUChwWlAxuEh75t18FqkjuqQHvhONIbhrfofUoFzbcriHw%3D%3D&uemps=0-0&harmonyOs=0&st=1625157308996&sign=e5ef32369adb2e4b7024cff612395a72&sv=110',
        body: 'body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A%2F%2Flzkjdz-isv.isvjcloud.com%22%7D&',
        headers: {
            'Host': 'api.m.jd.com',
            'accept': '*/*',
            'user-agent': 'JD4iPhone/167490 (iPhone; iOS 14.2; Scale/3.00)',
            'accept-language': 'zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6',
            'content-type': 'application/x-www-form-urlencoded',
            'Cookie': $.cookie
        }
    }
    return new Promise(resolve => {
        $.post(config, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    data = JSON.parse(data);
                    $.token = data['token']
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}

//https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/83cf785ee5f74d0f8c35a8ba8a674cf2?activityId=83cf785ee5f74d0f8c35a8ba8a674cf2&sid=d6c3291b9309a8dcf1d008c41ecfab5w&un_area=19_1657_59566_0

function getCk() {
	
  return new Promise(resolve => {

    let config = {
        url: `https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/${$.activityID}?activityId=${$.activityID}&sid=d6c3291b9309a8dcf1d008c41ecfab5w&un_area=19_1657_59566_0`,
        headers: {
            'Host': 'lzkjdz-isv.isvjcloud.com',
            //'Accept': 'application/json',
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;',
            'X-Requested-With': 'com.jingdong.app.mall',
            'Referer': 'https://lzkjdz-isv.isvjcloud.com/wxFansInterActionActivity/activity/' + $.activityID + '?activityId=' + $.activityID + '&shareuserid4minipg=jd_4806fb66e0f3e&shopid=undefined',
            'user-agent': $.UA,
            //'content-type': 'application/x-www-form-urlencoded',
            'Cookie': $.cookie,
        }
    }
	//console.log(config);
	  
	  
    /*let get = {
      url:`https://lzdz1-isv.isvjcloud.com/wxFansInterActionActivity/activity?activityId=${$.activityId}&sid=${$.sid}`,
      followRedirect:false,
      headers: {
        "User-Agent": $.UA,
      },
      timeout:30000
    }*/
    $.get(config, async(err, resp, data) => {
      try {
        if (err) {
          if(resp && typeof resp.statusCode != 'undefined'){
            if(resp.statusCode == 493){
              console.log('此ip已被限制，请过10分钟后再执行脚本\n')
              $.outFlag = true
            }
          }
          console.log(`${$.toStr(err)}`)
          console.log(`${$.name} cookie API请求失败，请检查网路重试`)
        } else {
			//console.log(data)
          let end = data.match(/(活动已经结束)/) && data.match(/(活动已经结束)/)[1] || ''
          if(end){
            $.activityEnd = true
            console.log('活动已结束')
          }
          setActivityCookie(resp)
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function setActivityCookie(resp){
  let LZ_TOKEN_KEY = ''
  let LZ_TOKEN_VALUE = ''
  let lz_jdpin_token = ''
  let setcookies = resp && resp['headers'] && (resp['headers']['set-cookie'] || resp['headers']['Set-Cookie'] || '') || ''
  let setcookie = ''
  if(setcookies){
    if(typeof setcookies != 'object'){
      setcookie = setcookies.split(',')
    }else setcookie = setcookies
    for (let ck of setcookie) {
      let name = ck.split(";")[0].trim()
      if(name.split("=")[1]){
        // console.log(name.replace(/ /g,''))
        if(name.indexOf('LZ_TOKEN_KEY=')>-1) LZ_TOKEN_KEY = name.replace(/ /g,'')+';'
        if(name.indexOf('LZ_TOKEN_VALUE=')>-1) LZ_TOKEN_VALUE = name.replace(/ /g,'')+';'
        if(name.indexOf('lz_jdpin_token=')>-1) lz_jdpin_token = ''+name.replace(/ /g,'')+';'
      }
    }
  }
  if(LZ_TOKEN_KEY && LZ_TOKEN_VALUE) activityCookie = `${LZ_TOKEN_KEY} ${LZ_TOKEN_VALUE}`
  if(lz_jdpin_token) lz_jdpin_token_cookie = lz_jdpin_token
}

async function getUA000(){
    $.UA = `jdapp;iPhone;10.0.10;14.3;${randomString(40)};network/wifi;model/iPhone12,1;addressid/3364463029;appBuild/167764;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`
	$.UA = `jdapp;android;10.1.2;10;3363431346369326-1333233603135356;network/wifi;model/PCT-AL10;addressid/137880758;aid/3641dc9b132c015e;oaid/00000000-0000-0000-0000-000000000000;osVer/29;appBuild/89743;partner/jingdong;eufv/1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCT-AL10 Build/HUAWEIPCT-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045738 Mobile Safari/537.36;`
	
}

async function getUA(){
  $.UA = `jdapp;iPhone;10.1.4;13.1.2;${randomString(40)};network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`
}
function randomString(e) {
    e = e || 32;
    let t = "abcdef0123456789", a = t.length, n = "";
    for (i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n
}

function TotalBean000() {
    return new Promise(async resolve => {
        const options = {
            "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
            "headers": {
                "Accept": "application/json,text/plain, */*",
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Cookie": $.cookie,
                "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
                "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
            }
        }
        $.post(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    if (data) {
                        data = JSON.parse(data);
                        if (data['retcode'] === 13) {
                            $.isLogin = false; //cookie过期
                            return
                        }
                        if (data['retcode'] === 0) {
                            $.nickName = (data['base'] && data['base'].nickname) || $.UserName;
                        } else {
                            $.nickName = $.UserName
                        }
                    } else {
                        console.log(`京东服务器返回空数据`)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}
function TotalBean() {
	return new Promise(async resolve => {
		const options = {
			url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
			headers: {
				Cookie: $.cookie,
				"User-Agent": "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
				"User-Agent": $.UA,
			}
		}
		$.get(options, (err, resp, data) => {
			try {
				if (err) {
					$.logErr(err)
				} else {
					if (data) {
						data = JSON.parse(data);

						if (data['retcode'] === "1001") {
							$.isLogin = false; //cookie过期
							return;
						}
						if (data['retcode'] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
							$.nickName = data.data.userInfo.baseInfo.nickname;
							$.levelName = data.data.userInfo.baseInfo.levelName;
							$.isPlusVip = data.data.userInfo.isPlusVip;

						} else {
                            $.nickName = $.UserName
                        }
						if (data['retcode'] === '0' && data.data && data.data['assetInfo']) {
							$.beanCount = data.data && data.data['assetInfo']['beanNum'];
						} else {
							$.errorMsg = `数据异常`;
						}
					} else {
						$.log('京东服务器返回空数据,将无法获取等级及VIP信息');
					}
				}
			} catch (e) {
				$.logErr(e)
			}
			finally {
				resolve();
			}
		})
	})
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
	let url = `${share_code_url}/jd_wx_fans_inter/update?sign=${sign}&username=${$.UserName}&code=${code}&type=0&time=${time}`;
	
	
	//console.log(`updateAuthorShareCode ：${url}`)
	
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


function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t+2000))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
