# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

##############短期活动##############

#京东极速版红包(活动时间：2021-5-5至2021-5-31)
#45 0,23 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1

#超级直播间红包雨(活动时间不定期，出现异常提示请忽略。红包雨期间会正常)
#1,31 0-23/1 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1

#金榜创造营 活动时间：2021-05-21至2021-12-31
0 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#5G超级盲盒(活动时间：2021-06-2到2021-07-31)
#0 0-23/4 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1

#省钱大赢家之翻翻乐
#25 6-23 * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1

#全民抢京豆2021-07-02---2021-07-15
1 0-23/1 * 6 * node /scripts/jd_618redpacket.js >> /scripts/logs/jd_618redpacket.log 2>&1


#女装盲盒 2021-10-31至2021-11-30
23 1,23 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1

#粉丝互动-粉丝互动
56 5,17 * * * node /scripts/jd_wxfans_inter.js >> /scripts/logs/jd_wxfans_inter.log 2>&1

#特物Z|万物皆可国创
25 9,17 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1

#特物Z|万物皆可国创
10 10,18,20 * * * node /scripts/jd_superBrandJXZ.js >> /scripts/logs/jd_superBrandJXZ.log 2>&1


#七夕情报局🐶 2021-08-04---2021-08-15
56 0,10,21 4-15 8 * node /scripts/gua_doge.js >> /scripts/logs/gua_doge.log 2>&1


#京东手机狂欢城 结束时间2021/11/13
0 0-18/6 * 10,11 * node /scripts/gua_carnivalcity.js >> /scripts/logs/gua_carnivalcity.log 2>&1


#家电
54 5 9-15 8 * node /scripts/jd_appliances.js >> /scripts/logs/jd_appliances.log 2>&1

#8.12-8.20 汽车生活节
30 9,21 12-20 8 * node /scripts/jd_qcshj.js >> /scripts/logs/jd_qcshj.log 2>&1
  
#8.13-8.25 骁龙品牌日 [gua_xiaolong.js]
#18 9,19 13-25 8 * node /scripts/gua_xiaolong.js >> /scripts/logs/gua_xiaolong.log 2>&1

#活动路径  首页搜索 金机馆
33 3,6 8-20 8 * node /scripts/jd_golden_machine.js >> /scripts/logs/jd_golden_machine.log 2>&1

#京东工业品抽奖
10 5 17,18 8 * node /scripts/jd_industryLottery.js >> /scripts/logs/jd_industryLottery.log 2>&1

#来电好物季
#10 1 * * * node /scripts/jd_ldhwj.js >> /scripts/logs/jd_ldhwj.log 2>&1
#积分换话费 入口：首页-生活·缴费-积分换话费
#33 5,17 * * * node /scripts/jd_dwapp.js >> /scripts/logs/jd_dwapp.log 2>&1


#领券中心签到
#25 0 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1

#寻找内容鉴赏官
#27 8,18 * 9 * node /scripts/gua_UnknownTask3.js >> /scripts/logs/gua_UnknownTask3.log 2>&1

#清空购物车
#20 4,11 * * * node /scripts/jd_cleancart.js >> /scripts/logs/jd_cleancart.log 2>&1


#东东世界
20 12 * * * node /scripts/gua_ddworld.js >> /scripts/logs/gua_ddworld.log 2>&1

#10.20~10.31 城城领现金
#27 22,0-23/5 9-21 1 *  node /scripts/gua_city.js >> /scripts/logs/gua_city.log 2>&1



#年货节红包
#0 0,8,20,22 * * * node /scripts/gua_nhjRed.js >> /scripts/logs/gua_nhjRed.log 2>&1


#炸年兽
#6 3-23/5 * * * node /scripts/jd_zns.js >> /scripts/logs/jd_zns.log 2>&1


#特务Z，默认选择左边战队 脚本没有自动开卡，会尝试领取开卡奖励 一天要跑2次
11 11,20 * * * node /scripts/jd_tw.js >> /scripts/logs/jd_tw.log 2>&1



# 京喜-首页-牛牛福利
15 1,9,19,23 * * * node /scripts/jd_nnfls.js >> /scripts/logs/jd_nnfls.log 2>&1


# 通天塔签到共建,签到类cron自行设置.
#13 1,13  * * * node /scripts/jd_babel_sign.js >> /scripts/logs/jd_babel_sign.log 2>&1


##############长期活动##############
# 签到 
#13 7 * * * cd /scripts && node jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1

 50 0,17 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
 
 
# 东东超市兑换奖品
#0,30 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
6 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
43 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 东东农场内部水滴互助
26 5,17 * * *  node /scripts/jd_fruit_help.js >> /scripts/logs/jd_fruit_help.log 2>&1

# 宠汪汪
#45 */2,23 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪积分兑换京豆
0 0-16/8 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪喂食
23 15 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪邀请助力
7 13 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 宠汪汪偷好友积分与狗粮
#8 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1

#汪汪乐园开工位
#20 9 * * * node /scripts/jd_joypark_open.js >> /scripts/logs/jd_joypark_open.log 2>&1
#汪汪乐园每日任务
20 7,17 * * * node /scripts/jd_joypark_task.js >> /scripts/logs/jd_joypark_task.log 2>&1
#汪汪乐园养joy
#20 0-23/3 * * * node /scripts/jd_joypark_joy.js >> /scripts/logs/jd_joypark_joy.log 2>&1

# 摇钱树
#23 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
35 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东种豆得豆
01 7-22/6 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 京东种豆得豆助力
34 6,18 * * * node /scripts/jd_plantBean_help.js >> /scripts/logs/jd_plantBean_help.log 2>&1

# 京东全民开红包
#3 1,2,23 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
6 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 京东超市-星币
59 7 * * * node /scripts/jd_supermarket.js >> /scripts/logs/jd_supermarket.log 2>&1

# 京东超市-星币兑换
#22 * * * * node /scripts/jd_supermarket_ex.js >> /scripts/logs/jd_supermarket_ex.log 2>&1

# 取关京东店铺商品
45 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
20 10,21 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京东抽奖机
#0 0,12,23 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 京东排行榜
21 9 * * * node /scripts/jd_rankingList.js >> /scripts/logs/jd_rankingList.log 2>&1
# 天天提鹅
#28 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 京东金融养猪猪 20211124停用
# 33 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1


# 京喜工厂
#50 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 东东小窝16 22 * * *
25 6,23 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 东东工厂
#26 * * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
# 东东工厂
45 5,17 * * *node /scripts/jd_jdfactory_help.js >> /scripts/logs/jd_jdfactory_help.log 2>&1

# 赚京豆(微信小程序) 10,40 0,1 * * *  火爆任务暂停[20220112] 可以运行 20220222
21,50 0,1 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1


# 京东快递签到
47 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
#0 0 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
#23 1,12,22 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1


# 微信小程序京东赚赚
6 0-5/1,11 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# crazyJoy自动每日任务
#30 7,23 * * * node /scripts/jd_crazy_joy.js >> /scripts/logs/jd_crazy_joy.log 2>&1
# 京东汽车旅程赛点兑换金豆
#0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 导到所有互助码
23 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 口袋书店
#38 8,12,18 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1
# 京喜农场
30 9,12,18 * * * node /scripts/jd_jxnc.js >> /scripts/logs/jd_jxnc.log 2>&1

# 签到领现金
#53 */4 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
#48 */4 * * * node /scripts/jd_cash_panda.js >> /scripts/logs/jd_cash_panda.log 2>&1
48 */4 * * * node /scripts/jd_cashsign.js >> /scripts/logs/jd_cashsign.log 2>&1

# 闪购盲盒
#47 8,22 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 京东秒秒币火爆
#10 6,21 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
#美丽研究院
#09 8 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1

#京东保价
#41 0,23 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
#京东极速版签到+赚现金任务
21 9,16 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
#监控crazyJoy分红
#10 12 * * * node /scripts/jd_crazy_joy_bonus.js >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
#京喜财富岛

#京喜财富岛提现


# 删除优惠券(默认注释，如需要自己开启，如有误删，已删除的券可以在回收站中还原，慎用)
#20 9 * * 6 node /scripts/jd_delCoupon.js >> /scripts/logs/jd_delCoupon.log 2>&1
#家庭号
#10 6,7 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
#京东直播（又回来了）
#30-50/5 12,23 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
#京东健康社区
13 1,6,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
#京东健康社区收集健康能量
#5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
# 幸运大转盘
10 10,23 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
# 领金贴
#5 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# 跳跳乐瓜分京豆
15 0,12,22 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
#京喜牧场
#11 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1

#欧洲狂欢杯
#15 0,12,22 * * * node /scripts/jd_europeancup.js >> /scripts/logs/jd_europeancup.log 2>&1

#点点券
#18 0,20 * * * * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1


#京东超级盒子
#15 9,20 * 5,6 * node /scripts/jd_adolf_superbox.js >> /scripts/logs/jd_adolf_superbox.log 2>&1

#领现金兑换红包
#0,1,2 0 * * * node /scripts/jd_cash_exchange.js >> /scripts/logs/jd_cash_exchange.log 2>&1

#东东乐园
30 7 * * * node /scripts/jd_ddly.js >> /scripts/logs/jd_ddly.log 2>&1

#京享值PK
#30 7 * * * node /scripts/jd_jxzpk.js >> /scripts/logs/jd_jxzpk.log 2>&1

#东东电竞经理
#0 0-23/2 * * * node /scripts/jd_djjl.js >> /scripts/logs/jd_djjl.log 2>&1

#半点京豆雨
#0 0-23/2 * * * node /scripts/jd_half_redrain.js >> /scripts/logs/jd_half_redrain.log 2>&1

#京东零食街
0 11 * * * node /scripts/jd_lsj.js >> /scripts/logs/jd_lsj.log 2>&1

#柠檬东东泡泡大战
#1 0 * * * node /scripts/jd_ppdz.js >> /scripts/logs/jd_ppdz.log 2>&1

#星系牧场
12 13 1 12 *  node /scripts/jd_qqxing.js >> /scripts/logs/jd_qqxing.log 2>&1

#整点京豆雨
1 0-23/2 * * *  node /scripts/jd_super_redrain.js >> /scripts/logs/jd_super_redrain.log 2>&1

#极速版 我是大老板农场
5 0-23/6 * * *  node /scripts/jd_wsdlb.js >> /scripts/logs/jd_wsdlb.log 2>&1

#京东 我的 全民挖现金
0 10 * * *  node /scripts/jd_wxj.js >> /scripts/logs/jd_wxj.log 2>&1

#东东健康社区
13 1,6,22 * * *  node /scripts/jd_z_health_community.js >> /scripts/logs/jd_z_health_community.log 2>&1

#健康社区-收能量
#25 * * * *  node /scripts/jd_z_health_energy.js >> /scripts/logs/jd_z_health_energy.log 2>&1
#赚金币
0 5 * * * node /scripts/jd_zjb.js >> /scripts/logs/jd_zjb.log 2>&1

#财富岛老虎机


#东东乐园
30 7 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1

#京享值PK
#15 0,6,13,19,21 * * * node /scripts/jd_jxzpk.js >> /scripts/logs/jd_jxzpk.log 2>&1

#京享值PK
#15 0,6,13,19,21 * * * node /scripts/jd_jxzpk.js >> /scripts/logs/jd_jxzpk.log 2>&1

#许愿池
58 1,3 * * *  node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1

#燃动夏季
#1 7,13 * * *  node /scripts/jd_summer_movement.js >> /scripts/logs/jd_summer_movement.log 2>&1

#14/41 7-14 * * *  node /scripts/jd_summer_movement_help.js >> /scripts/logs/jd_summer_movement_help.log 2>&1

#早起福利
#31 6 * * * node /scripts/jd_goodMorning.js >> /scripts/logs/jd_goodMorning.log 2>&1
#早起赢现金
31 7 * * * node /scripts/jd_morningSc.js >> /scripts/logs/jd_morningSc.log 2>&1

#愤怒的现金
#3 0 * * * node /scripts/jd_angryCash.js >> /scripts/logs/jd_angryCash.log 2>&1

#财富大陆 只运行合成珍珠
33 0-23/2 * * * node /scripts/gua_wealth_island.js >> /scripts/logs/gua_wealth_island.log 2>&1
#财富大陆 
45 0-23/6 * * *  node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1


#店铺签到
13 0,16  * * * node /scripts/jd_shop_sign.js >> /scripts/logs/jd_shop_sign.log 2>&1

#18 3,17 * * * node /scripts/jd_sign_activity.js >> /scripts/logs/jd_sign_activity.log 2>&1


#MM领京豆 入口：首页-领京豆-升级赚京豆
0 9 * * * node /scripts/gua_MMdou.js >> /scripts/logs/gua_MMdou.log 2>&1

#京东到家鲜豆任务脚本
#35 0,6,12 * * * node /scripts/jd_jddj_bean.js >> /scripts/logs/jd_jddj_bean.log 2>&1

#京东到家果园水车收水滴任务脚本
#0-59/30 * * * * node /scripts/jd_jddj_collectWater.js >> /scripts/logs/jd_jddj_collectWater.log 2>&1
#京东到家果园任务脚本
#5 0,8,11,17 * * * node /scripts/jd_jddj_fruit.js >> /scripts/logs/jd_jddj_fruit.log 2>&1
#京东到家鲜豆庄园收水滴脚本
#45 * * * * node /scripts/jd_jddj_getPoints.js >> /scripts/logs/jd_jddj_getPoints.log 2>&1
#京东到家鲜豆庄园脚本
#20 0-23/6 * * * node /scripts/jd_jddj_plantBeans.js >> /scripts/logs/jd_jddj_plantBeans.log 2>&1
#京喜领88元红包
#4 2,10 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1

#全民摸冰
#6  9,12 * * *  node /scripts/jd_mb.js >> /scripts/logs/jd_mb.log 2>&1

#送豆得豆
#12 0,12  * * *  node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1

#京喜签到
#32 1,7  * * *  node /scripts/jd_jxsign.js >> /scripts/logs/jd_jxsign.log 2>&1

#超级直播间盲盒抽京豆
2 18,20 * * *  node /scripts/jd_super_mh.js >> /scripts/logs/jd_super_mh.log 2>&1



#京东小魔方
#36 2,8 * * * node /scripts/jd_mf.js >> /scripts/logs/jd_mf.log 2>&1

#36 2,20 * * * node /scripts/jd_xmf.js >> /scripts/logs/jd_xmf.log 2>&1

#京东饭粒
#23 0,9,17 * * * node /scripts/jd_fanli.js >> /scripts/logs/jd_fanli.log 2>&1

# 京喜-首页-牛牛福利
#7 3,9,21 * * * node /scripts/jd_fanli.js >> /scripts/logs/jd_fanli.log 2>&1


# 搞基大神-推一推
53 3 * * * node /scripts/jd_tyt.js >> /scripts/logs/jd_tyt.log 2>&1


#  过期京豆兑换为喜豆
#33 10 * * * node /scripts/jd_exchangejxbeans.js >> /scripts/logs/jd_exchangejxbeans.log 2>&1

# 农场集勋章
#36 7,16 * * * node /scripts/jd_medal.js >> /scripts/logs/jd_medal.log 2>&1

# 一分钱抽奖
#33 0 * * * node /scripts/jd_lottery_drew.js >> /scripts/logs/jd_lottery_drew.log 2>&1

# 东东世界兑换
#0 0 * * * node /scripts/jd_ddworld_exchange.js >> /scripts/logs/jd_ddworld_exchange.log 2>&1


# 京车会签到 入口：京东京车会APP,我的-右上角
#58 6 * * * node /scripts/jd_jchsign.js >> /scripts/logs/jd_jchsign.log 2>&1

# 京喜签到-喜豆
45 2,19 * * * node /scripts/jx_sign_xd.js >> /scripts/logs/jx_sign_xd.log 2>&1

# 写情书抽京豆
9 1,14 12-25 12 * node /scripts/jd_xqscjd.js >> /scripts/logs/jd_xqscjd.log 2>&1


# 玩一玩成就
36 8,22 * * *  node /scripts/jd_wyw.js >> /scripts/logs/jd_wyw.log 2>&1


# 京东金融天天拼图
20 1,17 * * * node /scripts/jd_ttpt.js >> /scripts/logs/jd_ttpt.log 2>&1


# 见缝插针 活动地址: 京东极速版-百元生活费-玩游戏现金可提现
#45 3,20 * * *  node /scripts/jd_jfcz.js >> /scripts/logs/jd_jfcz.log 2>&1

# 京东答题领金豆
52 6,18 * 11,12 *  node /scripts/jd_jddt.js >> /scripts/logs/jd_jddt.log 2>&1

# 京东工业品
31 7,19 * 12 *  node /scripts/jd_gyp.js >> /scripts/logs/jd_gyp.log 2>&1


#发财挖宝
30 7,17 * * *  node /scripts/jd_fcwb_help.js >> /scripts/logs/jd_fcwb_help.log 2>&1

#愤怒的锦鲤
#58 6 * * *   node /scripts/jd_angryKoi.js >> /scripts/logs/jd_angryKoi.log 2>&1


#财富岛珍珠兑换 京喜APP-我的-京喜财富岛-最左侧建筑
#47 0-23/1 * * *   node /scripts/jd_cfd_pearl_ex.js >> /scripts/logs/jd_cfd_pearl_ex.log 2>&1

#年货节签到
2 2,22 * * *   node /scripts/jd_nh_sign.js >> /scripts/logs/jd_nh_sign.log 2>&1


#京东通天塔--签到
#11 8,21 * * *   node /scripts/jd_m_sign.js >> /scripts/logs/jd_m_sign.log 2>&1


#把智能生活带给TA
#53 4,19 * * *   node /scripts/jd_bzlshdgt.js >> /scripts/logs/jd_bzlshdgt.log 2>&1

#京东小魔方--收集兑换
#31 9 * * *   node /scripts/jd_mofang_ex.js >> /scripts/logs/jd_mofang_ex.log 2>&1


#京东汽车 - 右下角 - 领京豆
#活动入口:京东汽车 - 右下角 - 领京豆
32 9 * * *   node /scripts/jd_mpdzcar.js >> /scripts/logs/jd_mpdzcar.log 2>&1

#京东汽车  y- 右下角 - 领京豆
#50 6,10,12 * * *   node /scripts/jd_mpdzcar_game.js >> /scripts/logs/jd_mpdzcar_game.log 2>&1


#京东汽车 助力 - 右下角 - 领京豆 
12 7 * * *   node /scripts/jd_mpdzcar_help.js >> /scripts/logs/jd_mpdzcar_help.log 2>&1



#超级无线店铺签到 
46 0 * * *   node /scripts/jd_sevenDay.js >> /scripts/logs/jd_sevenDay.log 2>&1

#关注店铺抽奖 看脸活动
#59 0 * * *   node /scripts/jd_wxShopFollowActivity.js >> /scripts/logs/jd_wxShopFollowActivity.log 2>&1

#京东超级盒子
#53 3,13 * * *   node /scripts/jd_cjhz.js >> /scripts/logs/jd_cjhz.log 2>&1

#京东金榜
36 6 * * *   node /scripts/jd_gold_sign.js >> /scripts/logs/jd_gold_sign.log 2>&1

#京东超市年货日历  火爆需要修复 2022-01-19
#33 3,14 * * *   node /scripts/year.js >> /scripts/logs/year.log 2>&1


#来客有礼小程序  送豆得豆
#23 11 * * *   node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1

#来客有礼小程序  送豆得豆
#cron 6 13 * * *   node /scripts/jd_dj_bean.js >> /scripts/logs/jd_dj_bean.log 2>&1


#京东签到翻牌
#10 7 * * *   node /scripts/jd_sign_graphics1.js >> /scripts/logs/jd_sign_graphics1.log 2>&1

#京东生鲜每日抽奖
#11 8 * * *   node /scripts/jd_sxLottery.js >> /scripts/logs/jd_sxLottery.log 2>&1

#微信签到领红包 
9 9 * * *   node /scripts/jd_wq_wxsign.js >> /scripts/logs/jd_wq_wxsign.log 2>&1


#京东超级盲盒
10 6,18 * * *   node /scripts/jd_plusLottery.js >> /scripts/logs/jd_plusLottery.log 2>&1




# 特务集卡
 5 10,18,20 * * * node /scripts/jd_superBrandJK.js >> /scripts/logs/jd_superBrandJK.log 2>&1

# 小鸽有礼-每日抽奖
#18 2,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1

#特务Z，首页下拉 不自动开卡，会尝试领取开卡奖励


25 6,10,18 * * * node /scripts/jd_superBrandZII.js >> /scripts/logs/jd_superBrandZII.log 2>&1


#京享周周乐
2 6 * * 5 node /scripts/jd_xs_zzl.js >> /scripts/logs/jd_xs_zzl.log 2>&1

#9.1-9.29 云养牛，免费赢好礼
18 2 * * * node /scripts/jd_yyn.js >> /scripts/logs/jd_yyn.log 2>&1

#微信签到红包
09 5 * * * node /scripts/jd_wxSignRed.js >> /scripts/logs/jd_wxSignRed.log 2>&1


#微信签到红包
#6 7,21 * * * node /scripts/jd_hwj_sb.js >> /scripts/logs/jd_hwj_sb.log 2>&1

#个护爱消除 入口： APP-个护馆-中间，目前兑换不用抢 日常任务，助力，游戏 默认定时不跑，自己改，一天5次
9 5,9,13,17,21 * * * node /scripts/jd_gehugame.js >> /scripts/logs/jd_gehugame.log 2>&1

#天天来赚钱 天天来赚钱，入口：小程序-下面分割横幅 只做任务，无签到，待完善
3 10,19 * * * node /scripts/jd_wxttzq.js >> /scripts/logs/jd_wxttzq.log 2>&1

#特务之明星送好礼
10 8,20 * * * node /scripts/jd_superBrandStar.js >> /scripts/logs/jd_superBrandStar.log 2>&1



#京东宝藏榜 入口：排行榜-宝藏榜
19 6,21 * * * node /scripts/jd_TreasureRank.js >> /scripts/logs/jd_TreasureRank.log 2>&1


#新百货大楼 入口：APP-主页-新百货频道-底部中间
23 7,22 * * * node /scripts/jd_xbhdl.js >> /scripts/logs/jd_xbhdl.log 2>&1


#赚京豆 定时自定义，一天三次 一组30豆，一天最多开三组，至少5个CK才能保证成一次！
43 8,13,19 * * * node /scripts/jd_zjd_new.js >> /scripts/logs/jd_zjd_new.log 2>&1

# 京享值任务领豆，每周一次
19 10 * * 5 node /scripts/jd_vipgrowth.js >> /scripts/logs/jd_vipgrowth.log 2>&1


# 卷民空间站分红包 京享值任务领豆，入口：领券中心-右侧悬浮
1 9,13 * * * node /scripts/jd_couponspace.js >> /scripts/logs/jd_couponspace.log 2>&1


# 需要滑块验证的签到
48 7,17 * * * node /scripts/jd_slider_sign.js >> /scripts/logs/jd_slider_sign.log 2>&1


##魔方红包雨 空气、18豆、36豆、72豆
5 16 * * * node /scripts/jd_mfredrain.js >> /scripts/logs/jd_mfredrain.log 2>&1


#集魔方
36 5,20 * * * node /scripts/jd_desire.js >> /scripts/logs/jd_desire.log 2>&1

#1111红包
#0 0,10,20 * * * node /scripts/gua_221111_Red.js >> /scripts/logs/gua_221111_Red.log 2>&1



#京东小魔方 入口：京东app首页-新品-右侧悬浮 签到 + 任务 + 3魔方兑换10或35豆
#50 9,18 * * * node /scripts/jd_mf_new.js >> /scripts/logs/jd_mf_new.log 2>&

#短视频点赞抽奖 点赞5次抽奖1-5豆，完成后瓜分都池；
36 9,20 * * * node /scripts/jd_subject.js >> /scripts/logs/jd_subject.log 2>&


#特价版大赢家 京东特价APP首页-赚钱大赢家
30 13 * * * node /scripts/jd_makemoneyshop.js >> /scripts/logs/jd_makemoneyshop.log 2>&


#秒秒币 add 20221130
26 11 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1

#点点券 add 20221130
26 12 * * * node /scripts/jd_necklace_6dy.js >> /scripts/logs/jd_necklace_6dy.log 2>&1


#入口：京东app-搜小时购-抽888 
16 11 * * * node /scripts/jd_lotty888.js >> /scripts/logs/jd_lotty888.log 2>&1


#京东小魔方
55 11 * * * node /scripts/jd_mf_new.js >> /scripts/logs/jd_mf_new.log 2>&1


#医药馆抽豆
55 8 * * * node /scripts/jd_lottery_yyg.js >> /scripts/logs/jd_lottery_yyg.log 2>&1


#吃喝玩乐抽豆
25 10 * * * node /scripts/jd_lottery_chwl.js >> /scripts/logs/jd_lottery_chwl.log 2>&1

# 特务集卡 脚本没有自动开卡，会尝试领取开卡奖励
56 13,18 * * * node /scripts/jd_twjk_new.js >> /scripts/logs/jd_twjk_new.log 2>&1

#集魔方
2 16 26-31,1 12,1 * node /scripts/jd_jmf.js >> /scripts/logs/jd_jmf.log 2>&1

#1.1-1.31 云养牛，免费赢好礼
2 16 26-31,1 12,1 * node /scripts/jd_mnyyn.js >> /scripts/logs/jd_mnyyn.log 2>&1

#1.1-1.31 新年货投票
55 10,18 * * *  node /scripts/jd_xnhvote.js >> /scripts/logs/jd_xnhvote.log 2>&1

#1.5-1.28 喜开盲盒 好运酒来
55 12,19 * * *  node /scripts/jd_xkmh.js >> /scripts/logs/jd_xkmh.log 2>&1

#京东超市任务 活动入口：京东超市 --游戏
50 9,17 * * *  node /scripts/jd_supermarket_task.js >> /scripts/logs/jd_supermarket_task.log 2>&1


#京东超市兑换
3 0 * * *  node /scripts/jd_supermarket_dh.js >> /scripts/logs/jd_supermarket_dh.log 2>&1


#超级品牌殿堂
3 10 * * *  node /scripts/jd_ppdt.js >> /scripts/logs/jd_ppdt.log 2>&1



#特价版团圆红包
35 10 * * *  node /scripts/jd_festivalhb.js >> /scripts/logs/jd_festivalhb.log 2>&1

#东东爱消除
30 11 * * *  node /scripts/jd_moxigame.js >> /scripts/logs/jd_moxigame.log 2>&1


#东东爱消除
19 10 * * *  node /scripts/jd_jrsign.js >> /scripts/logs/jd_jrsign.log 2>&1


#赛跑兑10红包
1 1 * * *  node /scripts/jd_joyrunred.js >> /scripts/logs/jd_joyrunred.log 2>&1

#赛跑兑10红包
15 11 * * *  node /scripts/jd_joymatch.js >> /scripts/logs/jd_joymatch.log 2>&1


#每日抽豆
39 13 * * *  node /scripts/jd_dygetbeans.js >> /scripts/logs/jd_dygetbeans.log 2>&1



#京喜特价抽现金
23 8 * * *  node /scripts/jd_cxjhelp.js >> /scripts/logs/jd_cxjhelp.log 2>&1


#天天签到礼享金 入口：app首页-家电家居-底部签到
38 13 * * *  node /scripts/jd_ttqdlxj.js >> /scripts/logs/jd_ttqdlxj.log 2>&1

#天天领红包 任务+开红包
28 14 * * *  node /scripts/jd_ttlhb.js >> /scripts/logs/jd_ttlhb.log 2>&1


#4.29-5.10 超级品牌日
31 0,16 29-30,1-10 4,5 *  node /scripts/jd_pp.js >> /scripts/logs/jd_pp.log 2>&1

##############值得买##############

#10 0 * * * * node /scripts/smzdm_mission.js >> /scripts/logs/smzdm_mission.log 2>&1

