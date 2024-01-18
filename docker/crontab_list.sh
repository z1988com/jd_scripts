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
#20 7,16 * * * node /scripts/jd_joypark_task.js >> /scripts/logs/jd_joypark_task.log 2>&1

#牛牛乐园任务每日任务
#10 9,19 * * * node /scripts/jx_joypark_task.js >> /scripts/logs/jx_joypark_task.log 2>&1

# 京东种豆得豆
01 7-22/6 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1

# 京豆变动通知
20 10,21 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1

# 京东快递签到
47 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1

# 导到所有互助码
23 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1

# 签到领现金
#53 */4 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
#48 */4 * * * node /scripts/jd_cash_panda.js >> /scripts/logs/jd_cash_panda.log 2>&1
#48 */4 * * * node /scripts/jd_cashsign.js >> /scripts/logs/jd_cashsign.log 2>&1

#东东乐园
#30 7 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1

#店铺签到
13 0,16  * * * node /scripts/jd_shop_sign.js >> /scripts/logs/jd_shop_sign.log 2>&1

#18 3,17 * * * node /scripts/jd_sign_activity.js >> /scripts/logs/jd_sign_activity.log 2>&1

#MM领京豆 入口：首页-领京豆-升级赚京豆
0 9 * * * node /scripts/gua_MMdou.js >> /scripts/logs/gua_MMdou.log 2>&1

# 玩一玩成就
36 8,22 * * *  node /scripts/jd_wyw.js >> /scripts/logs/jd_wyw.log 2>&1

25 6,10,18 * * * node /scripts/jd_superBrandZII.js >> /scripts/logs/jd_superBrandZII.log 2>&1

#微信签到红包
09 5 * * * node /scripts/jd_wxSignRed.js >> /scripts/logs/jd_wxSignRed.log 2>&1

#天天来赚钱 天天来赚钱，入口：小程序-下面分割横幅 只做任务，无签到，待完善
13 10,19 * * * node /scripts/jd_wxttzq.js >> /scripts/logs/jd_wxttzq.log 2>&1

#特务之明星送好礼
10 8,20 * * * node /scripts/jd_superBrandStar.js >> /scripts/logs/jd_superBrandStar.log 2>&1

# 京享值任务领豆，每周一次
19 10 * * * node /scripts/jd_vipgrowth.js >> /scripts/logs/jd_vipgrowth.log 2>&1

#每日抽豆
39 8,13 * * *  node /scripts/jd_dygetbeans.js >> /scripts/logs/jd_dygetbeans.log 2>&1

#天天签到礼享金 入口：app首页-家电家居-底部签到
#38 13 * * *  node /scripts/jd_ttqdlxj.js >> /scripts/logs/jd_ttqdlxj.log 2>&1


#京喜特价金币
05 13,19 * * *  node /scripts/jd_speed_sign2.js >> /scripts/logs/jd_speed_sign2.log 2>&1

#极速模式签到
08 12,17 * * *  node /scripts/jd_speedtx.js >> /scripts/logs/jd_speedtx.log 2>&1


#摇钱树任务 等级达到40级为满级，需要停止浇水3天，7天后开启新一轮活动
38 10,19 * * *  node /scripts/jd_yqs.js >> /scripts/logs/jd_yqs.log 2>&1


#Jd转赚红包
36 0,8 * * *  node /scripts/jd_zzhb.js >> /scripts/logs/jd_zzhb.log 2>&1

#Jd京喜特价抽现金
46 0,9 * * *  node /scripts/jx_cxjhelp.js >> /scripts/logs/jx_cxjhelp.log 2>&1

#Jd每日红包
23 6,16 * * *  node /scripts/jd_mrhb.js >> /scripts/logs/jd_mrhb.log 2>&1


#汪汪乐园任务
10 7,21 * * *  node /scripts/jd_wwpark_task.js >> /scripts/logs/jd_wwpark_task.log 2>&1

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


#天天领红包
10 1,16  * * *  node /scripts/jd_ttlhb.js >> /scripts/logs/jd_ttlhb.log 2>&1



#活动名称：京东跨年狂欢助力20红包
#10 3, 15 * * *  node /scripts/jd_newYear_party_invite.js >> /scripts/logs/jd_newYear_party_invite.log 2>&1



#京东跨年狂欢抽奖
16 4,16  * * *  node /scripts/jd_newYear_party.js >> /scripts/logs/jd_newYear_party.log 2>&1



#每次领取红包次数
19 0,18  * * *  node /scripts/jd_nhjred.js >> /scripts/logs/jd_nhjred.log 2>&1

#炸年兽抽红包_助力
19 1,16  * * *  node /scripts/jd_znshb_help.js >> /scripts/logs/jd_znshb_help.log 2>&1

#炸年兽抽红包_抽奖提现
40 1,17  * * *  node /scripts/jd_znshb_draw.js >> /scripts/logs/jd_znshb_draw.log 2>&1

#炸年兽红包雨
0 20 * * *  node /scripts/jd_znshby.js >> /scripts/logs/jd_znshby.log 2>&1



#金融签到，领取双签礼包
#36 6,18  * * *  node /scripts/jd_jrsign.js >> /scripts/logs/jd_jrsign.log 2>&1

#接龙车抢888元超市卡
#36 7,17  * * *  node /scripts/jd_jlong.js >> /scripts/logs/jd_jlong.log 2>&1


##############值得买##############

#10 0 * * * * node /scripts/smzdm_mission.js >> /scripts/logs/smzdm_mission.log 2>&1

############## 联通 ##############

#10 10,18 * * * node /scripts/unicom_day_sign.js >> /scripts/logs/unicom_day_sign.log 2>&1