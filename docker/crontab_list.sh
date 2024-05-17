# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

##############短期活动##############

#积分换话费 入口：首页-生活·缴费-积分换话费
26 8,17 * * * node /scripts/jd_dwapp.js >> /scripts/logs/jd_dwapp.log 2>&1

##############长期活动##############
# 签到 
#13 7 * * * cd /scripts && node jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1

50 0,16 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1

# 东东农场
43 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1

# 东东农场内部水滴互助
26 5,17 * * *  node /scripts/jd_fruit_help.js >> /scripts/logs/jd_fruit_help.log 2>&1

#汪汪乐园每日任务
20 7,16 * * * node /scripts/jd_joypark_task.js >> /scripts/logs/jd_joypark_task.log 2>&1

#牛牛乐园任务每日任务
10 9,19 * * * node /scripts/jx_joypark_task.js >> /scripts/logs/jx_joypark_task.log 2>&1

# 京东种豆得豆
01 7-22/6 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1

# 种豆得豆内部互助
06 8,20 * * * node /scripts/jd_plantBean_help.js >> /scripts/logs/jd_plantBean_help.log 2>&1

# 京豆变动通知
20 10,21 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1

# 京东快递签到
47 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1

# 导到所有互助码
# 23 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1

# 签到领现金
#53 */4 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
#48 */4 * * * node /scripts/jd_cash_panda.js >> /scripts/logs/jd_cash_panda.log 2>&1
#48 */4 * * * node /scripts/jd_cashsign.js >> /scripts/logs/jd_cashsign.log 2>&1

#东东乐园
#30 7 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1

#店铺签到
#13 0,16  * * * node /scripts/jd_shop_sign.js >> /scripts/logs/jd_shop_sign.log 2>&1

#18 3,17 * * * node /scripts/jd_sign_activity.js >> /scripts/logs/jd_sign_activity.log 2>&1

#MM领京豆 入口：首页-领京豆-升级赚京豆
0 9,19 * * * node /scripts/gua_MMdou.js >> /scripts/logs/gua_MMdou.log 2>&1

# 玩一玩成就
36 8,22 * * *  node /scripts/jd_wyw.js >> /scripts/logs/jd_wyw.log 2>&1

25 6,10,18 * * * node /scripts/jd_superBrandZII.js >> /scripts/logs/jd_superBrandZII.log 2>&1

#微信签到红包
09 5 * * * node /scripts/jd_wxSignRed.js >> /scripts/logs/jd_wxSignRed.log 2>&1

#天天来赚钱 天天来赚钱，入口：小程序-下面分割横幅 只做任务，无签到，待完善
13 10,19 * * * node /scripts/jd_wxttzq.js >> /scripts/logs/jd_wxttzq.log 2>&1

#特务之明星送好礼
10 8,20 * * * node /scripts/jd_superBrandStar.js >> /scripts/logs/jd_superBrandStar.log 2>&1

#特务之明星送好礼
10 7,13,,21 * * * node /scripts/jd_superBrandStar_.js >> /scripts/logs/jd_superBrandStar_.log 2>&1

# 京享值任务领豆，每周一次
#19 10 * * * node /scripts/jd_vipgrowth.js >> /scripts/logs/jd_vipgrowth.log 2>&1

#每日抽豆
39 8,13 * * *  node /scripts/jd_dygetbeans.js >> /scripts/logs/jd_dygetbeans.log 2>&1

#天天签到礼享金 入口：app首页-家电家居-底部签到
#38 13 * * *  node /scripts/jd_ttqdlxj.js >> /scripts/logs/jd_ttqdlxj.log 2>&1


#京喜特价金币 已下架（2024-05-07）
05 13,19 * * *  cd /scripts && node jd_speed_sign2.js >> /scripts/logs/jd_speed_sign2.log 2>&1

#特价版签到提现
36 11,21 * * *  cd /scripts && node jd_tj_signcash.js >> /scripts/logs/jd_tj_signcash.log 2>&1


#极速模式签到 失效
#08 12,17 * * *  node /scripts/jd_speedtx.js >> /scripts/logs/jd_speedtx.log 2>&1


#摇钱树任务 等级达到40级为满级，需要停止浇水3天，7天后开启新一轮活动
38 10,19 * * *  node /scripts/jd_yqs.js >> /scripts/logs/jd_yqs.log 2>&1




#Jd京喜特价抽现金
46 0,9 * * *  node /scripts/jx_cxjhelp.js >> /scripts/logs/jx_cxjhelp.log 2>&1

#Jd每日红包
#23 6,16 * * *  node /scripts/jd_mrhb.js >> /scripts/logs/jd_mrhb.log 2>&1


#汪汪乐园任务
#10 7,21 * * *  node /scripts/jd_wwpark_task.js >> /scripts/logs/jd_wwpark_task.log 2>&1

#10.28-11.12 签到瓜分京豆
#12 8,18 * * *  node /scripts/jd_dlgf.js >> /scripts/logs/jd_dlgf.log 2>&1

#新农场任务
18 9,19 * * *  node /scripts/jd_fruit_new.js >> /scripts/logs/jd_fruit_new.log 2>&1


#东东农场助力
02 6,16 * * *  node /scripts/jd_farm_help.js >> /scripts/logs/jd_farm_help.log 2>&1

#新东东农场助力
02 7,17 * * *  node /scripts/jd_farm_help_new.js >> /scripts/logs/jd_farm_help_new.log 2>&1


#双十一红包
#3 0,10,20 * * *  node /scripts/gua_231111_Red.js >> /scripts/logs/gua_231111_Red.log 2>&1

#全民大乐透抽奖
#42 0,16  * * *  node /scripts/jd_qmLottery.js >> /scripts/logs/jd_qmLottery.log 2>&1


#秒杀浏览商品领豆
12 8,15  * * *  node /scripts/jd_seckillViewTask.js >> /scripts/logs/jd_seckillViewTask.log 2>&1


#天天领红包 失效20240509
10 1,16  * * *  node /scripts/jd_ttlhb.js >> /scripts/logs/jd_ttlhb.log 2>&1



#活动名称：京东跨年狂欢助力20红包
#10 3, 15 * * *  node /scripts/jd_newYear_party_invite.js >> /scripts/logs/jd_newYear_party_invite.log 2>&1



#京东跨年狂欢抽奖
#16 4,16  * * *  node /scripts/jd_newYear_party.js >> /scripts/logs/jd_newYear_party.log 2>&1

#每次领取红包次数
#19 0,18  * * *  node /scripts/jd_nhjred.js >> /scripts/logs/jd_nhjred.log 2>&1

#炸年兽抽红包_助力
#19 1,16  * * *  node /scripts/jd_znshb_help.js >> /scripts/logs/jd_znshb_help.log 2>&1

#炸年兽抽红包_抽奖提现
#40 1,17  * * *  node /scripts/jd_znshb_draw.js >> /scripts/logs/jd_znshb_draw.log 2>&1

#炸年兽红包雨
#0,20 20 * * *  node /scripts/jd_znshby.js >> /scripts/logs/jd_znshby.log 2>&1

#集龙运抽好礼
#32 6,21 * * *  node /scripts/jd_jlychl.js >> /scripts/logs/jd_jlychl.log 2>&1




#接龙车抢888元超市卡
#36 7,17  * * *  node /scripts/jd_jlong.js >> /scripts/logs/jd_jlong.log 2>&1

#东东健康社区
47 0,6,16,,22 * * *  node /scripts/jd_health_task.js >> /scripts/logs/jd_health_task.log 2>&1

#东东健康社区收集能量收集
#5-45/20 0-4 * * *  node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1

#超市红包雨
#6,36 20 * * * node /scripts/jd_mkredrain.js >> /scripts/logs/jd_mkredrain.log 2>&1


#新春红包_助力
#6 2,12 * * * node /scripts/jd_xchb_help.js >> /scripts/logs/jd_xchb_help.log 2>&1

#京豆国际  {"code":"25","msg":"监测到您的账号存在一定风险，请稍后重试"}
# 13 0,12 * * * node /scripts/jd_ddgj.js >> /scripts/logs/jd_ddgj.log 2>&1


#天天领红包小程序版
52 2,13 * * * node /scripts/jd_wechat_ttlzq.js >> /scripts/logs/jd_wechat_ttlzq.log 2>&1

 
#轻松赚豆 403
#51 8,18 * * * node /scripts/jd_qszd.js >> /scripts/logs/jd_qszd.log 2>&1

#批量店铺签到
3 0,18 * * * node /scripts/jd_dpqd_sign.js >> /scripts/logs/jd_dpqd_sign.log 2>&1


#赚汪贝兑超市卡
32 9,21 * * * node /scripts/jd_mk_game.js >> /scripts/logs/jd_mk_game.log 2>&1

#做任务赚汪贝
10 11,19 * * * node /scripts/jd_zwb.js >> /scripts/logs/jd_zwb.log 2>&1


#一键价保
20 11,23 * * * node /scripts/jd_OnceApply.js >> /scripts/logs/jd_OnceApply.log 2>&1
 
#Jd转赚红包
5 0-23/2 * * * cd /scripts && node jd_zzhb.js >> /scripts/logs/jd_zzhb.log 2>&1

#Jd转赚红包_抽奖提现
55 7,17,21 * * *  cd /scripts && node jd_zzhb_draw.js >> /scripts/logs/jd_zzhb_draw.log 2>&1

#Jd转赚红包2
36 0-23/2 * * *  cd /scripts && node jd_zzhb_new.js >> /scripts/logs/jd_zzhb_new.log 2>&1


#Jd转赚红包2_抽奖提现
55 9,15,19 * * *  cd /scripts && node jd_zzhb_draw_new.js >> /scripts/logs/jd_zzhb_draw_new.log 2>&1


#Jd邀好友抽大奖_助力
6 0-23/3 * * *  cd /scripts && node jd_cdj_help.js >> /scripts/logs/jd_cdj_help.log 2>&1
#Jd邀好友抽大奖_抽奖
41 0-23/3 * * *  cd /scripts && node jd_cdj_draw.js >> /scripts/logs/jd_cdj_draw.log 2>&1

#Jd邀好友抽大奖2_助力
26 0-23/3 * * *  cd /scripts && node jd_cdj2_help.js >> /scripts/logs/jd_cdj2_help.log 2>&1
#Jd邀好友抽大奖2_抽奖
51 0-23/3 * * *  cd /scripts && node jd_cdj2_draw.js >> /scripts/logs/jd_cdj2_draw.log 2>&1

#服装抽奖 抽奖都空气 停用20240519
#32 7,15 * * *  node /scripts/jd_clothing_draw.js >> /scripts/logs/jd_clothing_draw.log 2>&1


############## 金融 ##############

# APP首页-领京豆 金融双签领取
#52 9,21 * * *  node /scripts/jd_signbeanact.js >> /scripts/logs/jd_signbeanact.log 2>&1

#金融签到，领取双签礼包
53 6,18  * * *  node /scripts/jd_jrsign.js >> /scripts/logs/jd_jrsign.log 2>&1


#欢乐淘金（发财挖宝）助力  入口：京东APP——玩一玩——欢乐淘金
05 1,13,21  * * *  node /scripts/jd_fcwb_help.js >> /scripts/logs/jd_fcwb_help.log 2>&1
#欢乐淘金（发财挖宝）
09 8,14,22  * * *  node /scripts/jd_fcwb_auto.js >> /scripts/logs/jd_fcwb_auto.log 2>&1


#京喜 欢乐淘金（发财挖宝）助力  入口：京东APP——玩一玩——欢乐淘金
05 2,11,19  * * *  node /scripts/jx_fcwb_help.js >> /scripts/logs/jx_fcwb_help.log 2>&1
#京喜 欢乐淘金（发财挖宝）
01 3,13,21  * * *  node /scripts/jx_fcwb_auto.js >> /scripts/logs/jx_fcwb_auto.log 2>&1





############## 值得买 ##############

#签到
1 7,19 * * * node /scripts/smzdm_checkin.js >> /scripts/logs/smzdm_checkin.log 2>&1

#抽奖脚本
12 10,20 * * * node /scripts/smzdm_lottery.js >> /scripts/logs/smzdm_lottery.log 2>&1

#每日任务
36 8,13,19,22 * * * node /scripts/smzdm_task.js >> /scripts/logs/smzdm_task.log 2>&1

#抽奖
16 9,21 * * * node /scripts/smzdm_lottery.js >> /scripts/logs/smzdm_lottery.log 2>&1

#全民众测能量值任务
46 11,23 * * * node /scripts/smzdm_testing.js >> /scripts/logs/smzdm_testing.log 2>&1

############## 顺丰 ##############

11 6,18 * * * node /scripts/sfsyV2.js >> /scripts/logs/sfsyV2.log 2>&1


############## 联通 ##############

#10 10,18 * * * node /scripts/unicom_day_sign.js >> /scripts/logs/unicom_day_sign.log 2>&1

