/*
欢乐淘金（发财挖宝）
入口：APP —— 玩一玩 —— 欢乐淘金

地址：
https://bnzf.jd.com/?activityId=Bn1VWXtvgTv5ewPoMR-X8A 

助力脚本为： jd_fcwb_help.js 

环境变量：
JD_FCWB_ID         指定活动ID  不指定默认 APP入口  格式：Bn1VWXtvgTv5ewPoMR-X8A 
JD_FCWB_ROUND      指定剩余血量  非必须，不填默认剩余 1 退出
JD_FCWB_TXNUM      轮询提现页数  默认查询第一页，一般无需填写
JD_FCWB_EXCHANGE   达到剩余血量是否领取奖励，默认不启用（领取奖励后相当于结束当天活动，无法继续挖宝，请自行对应设置）
JD_FCWB_SWISH      是否延长提现时间，默认不延长（true/false）

cron:1 1 1 1 *

*/

const $ = new Env('欢乐淘金（发财挖宝）任务')
var iｉl='jsjiami.com.v7';const l1lI1l=iii1II;(function(lI1lIl,liiili,I1ll11,lI1lIi,Iii1Ii,Iii1Il,i1l1I1){return lI1lIl=lI1lIl>>0x1,Iii1Il='hs',i1l1I1='hs',function(lI1lI1,llIl1,l1iIiI,illlli,illlll){const l1lI1i=iii1II;illlli='tfi',Iii1Il=illlli+Iii1Il,illlll='up',i1l1I1+=illlll,Iii1Il=l1iIiI(Iii1Il),i1l1I1=l1iIiI(i1l1I1),l1iIiI=0x0;const IIIIiI=lI1lI1();while(!![]&&--lI1lIi+llIl1){try{illlli=parseInt(l1lI1i(0x1e5,'m!jR'))/0x1+parseInt(l1lI1i(0x1d7,'I3X7'))/0x2+-parseInt(l1lI1i(0x39b,'mIR2'))/0x3+parseInt(l1lI1i(0x3d5,'3%@a'))/0x4+-parseInt(l1lI1i(0x29b,'ZZOd'))/0x5+-parseInt(l1lI1i(0x2b9,'wK#0'))/0x6*(-parseInt(l1lI1i(0x151,'ih1y'))/0x7)+parseInt(l1lI1i(0x397,'N*J8'))/0x8;}catch(II1I1){illlli=l1iIiI;}finally{illlll=IIIIiI[Iii1Il]();if(lI1lIl<=lI1lIi)l1iIiI?Iii1Ii?illlli=illlll:Iii1Ii=illlll:l1iIiI=illlll;else{if(l1iIiI==Iii1Ii['replace'](/[TVghOLXFwuSHqJbMy=]/g,'')){if(illlli===llIl1){IIIIiI['un'+Iii1Il](illlll);break;}IIIIiI[i1l1I1](illlll);}}}}}(I1ll11,liiili,function(i1i111,ii1l1I,lI1lII,lIill1,iiI1i1,ilIlII,iIiil1){return ii1l1I='\x73\x70\x6c\x69\x74',i1i111=arguments[0x0],i1i111=i1i111[ii1l1I](''),lI1lII=`\x72\x65\x76\x65\x72\x73\x65`,i1i111=i1i111[lI1lII]('\x76'),lIill1=`\x6a\x6f\x69\x6e`,(0x15b943,i1i111[lIill1](''));});}(0x17a,0xc2b79,Iii11l,0xbf),Iii11l)&&(iｉl=0xbf);const jdCookie=require('./jdCookie'),notify=require('./utils/Rebels_sendJDNotify'),common=require('./utils/Rebels_jdCommon'),{H5st}=require(l1lI1l(0x1c0,'mQkB'));console[l1lI1l(0x277,'sTv@')](''),console[l1lI1l(0x244,'fC59')]('=========='+$[l1lI1l(0x35a,'a[Ww')]+'变量说明=========='),console[l1lI1l(0x286,'a0u]')](l1lI1l(0x15f,'6f]&')),console[l1lI1l(0x265,'3%@a')](l1lI1l(0x3be,'b4UZ')),console[l1lI1l(0x35f,'sVKb')]('JD_FCWB_EXCHANGE\x20//\x20达到剩余血量是否领取奖励'),console[l1lI1l(0x309,'RU&#')](l1lI1l(0x24a,'sTv@')),console[l1lI1l(0x3e2,'I3X7')](l1lI1l(0x347,'NmQD')+$[l1lI1l(0x3c7,'ih1y')]+l1lI1l(0x134,'mQkB')),console[l1lI1l(0x349,'6f]&')]('');const bloodMinimum=process['env'][l1lI1l(0x1e7,'ZZOd')]||'1',linkId=process[l1lI1l(0x1d8,'a0u]')]['JD_FCWB_ID']||l1lI1l(0x324,'WMsW'),pagination=process[l1lI1l(0x17c,'wYTO')][l1lI1l(0x282,'I3X7')]?process[l1lI1l(0x2a7,'ijPZ')]['JD_FCWB_TXNUM']:'1',Exchange=process['env'][l1lI1l(0x320,'GYE1')]==='true',Swish=process['env'][l1lI1l(0x1ff,'2zzN')]==='true',MAX_RETRY=process[l1lI1l(0x23e,'I3X7')][l1lI1l(0x270,'7caB')]||'3',isNotify=process['env'][l1lI1l(0x118,'fC59')]==='true';let time=Date[l1lI1l(0x1e1,'2(dk')](),business='happyDigger';const roundMaxBombNums={'Bn1VWXtvgTv5ewPoMR-X8A':{0x1:0x7,0x2:0xf,0x3:0x11}};let waitTimes=0x3e8;jdCookie[l1lI1l(0x394,'sIt1')]&&(jdCookie['RS_PROXY_TUNNRL']||jdCookie['RS_PROXY_TUNNRL'])&&(waitTimes=0x64);let cookie='';const cookiesArr=Object['keys'](jdCookie)[l1lI1l(0x20e,'ijPZ')](liI1iI=>jdCookie[liI1iI])[l1lI1l(0x13b,'BQRv')](iI1Il1=>iI1Il1);!cookiesArr[0x0]&&($['msg']($[l1lI1l(0x345,'mIR2')],l1lI1l(0x3b3,'6f]&')),process[l1lI1l(0x38e,'3To[')](0x1));function Iii11l(){const iIiiil=(function(){return[...[iｉl,'wVJjsTubjXhiFaqOmLig.uucTXoXSmM.vyH7HTOb==','W5uGzG','W4lLTABMN53LI6FLI5ZKU7lMLPik','ACkUWPjhcNSAW4K','WQ7cLIZdM34','CCkUWQy','q2a8bCoUytH4gaS','dKedW5BcKva','WQhcKt4','wYHkW6xcKCkAuSkgCa','WQqgW7yXdW','5O6m5A6v5AAX6lsbWP0','W49BoCkZW6O','gmkOW43dTSkriG','n8o3mCo2WOJdNW','g3RcVCo9W7NdSCk3WRmxWPqhg8khW6n8WP4','WQZdMSk3EW','WPBdOCkRb8kVFmkV','sX0gW7eEtIK','WRJdJmkteSkyrmkDbeegWOfLpZblBweJnq','lSkWWOu','hN7cVSo+W6hdKSk7','WRBcKSoTWRVdMG','W7b2ra','d8k1W4RdLCkg','cKqwW7tcKa','W6xcPIS','WOhdI8kPdSky','WRPZW67cOwq','gCk7W4VdMG','eCoDBCklFffS','xNiP','W7iJB0BdSa','W7DO5AAH6lwC772q','W59ps8knW7e','CmktW7hcGSk5','WOtcVHzlEa','Fa1NW4JcT8kPqmkWsSkGW6XzW5C','W6jleSovdLpcGv82','WRVdKmkQAJVdMLS','DKi3eCov','CCoUW5i','8jYAT2a','utFcVCoXW5m','h8ksW5FdRCkM','CSkkW63cJG','W710tmknW4zU','WQhcHmoNiSoHEXjD','ka8FW7K4','WOxcM8ovWOtdTa','W4FdLhpcNZ82how+MUwMIooaIUs6Gos4GUI1O+wpVa','W5yqWPRcG17dMSkd','CCklWOvDhq','tMCoWRBdHvNdGa','WRHia8oIW4q','W5KJAdNdVNhcOSoPcHX9W4e','tmoxgb8tdSoSCCkb','oSoRp8o9WPFdMxm','s8kmx8oI','WQVdNSo1EvS','mCoTaCoRWOW','W7pcOsBdOei','xXPpWQpdMGiNW6/dV8k5Fhu','m8o3mW','W6/cHh3dGSod','WQtcHCoJ','oN42W67cTq','WQFcJ8oEbSoe','DmkICq','rmkfW7tcNmkB','W6LEbSkTW57cS8kYleddHImb','W4H+fHPUW6bI','W4jVW45xW4S','W40brfddUa','W509DW','W4T6fJm','5yAw5PsS6zAu5QE657QT5y2Y','WRRdLmk2Da0','EmkZWRn+c3u','WOJcK8olWOxdNW','dCoppSk0WO7dS8o6sSo8W7ZdHfxdVmk7','tMysWQVdPW','W67dLJ/cUCkwWOhdMCkqj8oqb8kzW5JdJ8o5WQFdICoBW7K','ww0tWQC','WQtdU8kZ','W5WgWOK','vSoTzZpcSa','cINdKZBcTG','mCkukvhXJz6M77M1W4m','W4XZfZWW','EmkFW5pcOmk3','WRVcOWS','zSkUm8oQWPtdIuxcKG','W59nbdGW','Cr/cMSoeW5C','4PQ077QJWPW','eflcRmokW5G','q8kmW4VcOSkn','WQddOmkGpJrYW40fCmkntCo8WQhcTMWpgsVcGCoCW5dcR8k1W7xcL8kyW7ZcJL/dR8ksW5qeWOqgAG1ErSkMW4v1W7zTW7dcL8keWQ9PWPtcKZa','hSkw5RQ65zY86AUp6k69WQNOR7ZLS7NORj/MIAZLI6FPQPNOR6dKUBdMR4dMIiROGlVMM5hMJiNcQJe','oCoXla','cow1RoI/TEwkI+ITHEwSOUwaQo+/TEMcMoweHoAkU+IISE+/RW','sbJdOmoWzW','s8oNoWWz','h8kYW6NdGSkY','WOmnDmodgCkM','W4yuWOFcVW','W61qeq','WOxdQCkLia','WQhdTmkAyY0','WRKWW4KCjq','WP3dNSkLurG','jmoDoCozWRy','q8kvy8osWPC','WPdcTSoX','W79gW5fLW44','WQlcIN8aWPS','WPJcRmoMcmoz','shKoWQi','WQVdR8kqsWa','W7VcQcldO27dJG','W73cU3atWR4NW7K','W79DW6VcLa','W484w3BdUq','W7RdHIJcLSksWOBdJW','WRtcGuS4WRCRWRf9yq','WOddP8k5oSk/','vcZdRmoczG','WQSoW4CYpW','WR3cJqJdOKe','W4HIW67cHmoB','W5uuWPRcQG','WOxcVH5LsW','bXldIsNcIq','W6xdNcW','W4RcGG0qBW','5OY25AYR5AwA6lwoyW','8loiSokdO+kAIuVMNOpOGiRMROVNOPZOJAVLJl7LIPFKUBpPOBtKVR/MGi3VV5/PGQJLHPhMI5ROO7NVVjW','WQhcRq9kxbGfjt1lkmovWRm','tahdISo+tJXcWQixaKNdMG','lY3dUq','W7VdNd7cM8kt','WOqwFmodgCkM','W4SNC37dVtJcOCoRxq','cSk7W5BdJW','avSE','dSkUW43dKSkmiNlcRxW','kI3dRq','pmoPmCkLWRW','WPbCW5tcQLxdPwT3kmkzW58FDmoNgW','WQZcVSomWQS','WRBcOXbOAW8','5ywW5B6V5l6V54+u6yws','WQtdLmkK','WPBcVCo0','xIHiW77cJCk6A8kivSkxW49P','WP3cMCoHpmoAFHPl','gwC0W7RcSG','5BAc5B2c5zg25RAG5yUs77YG57Uh5PYn5PEw6zsqba','uCkNW43cT8kT','W7TgW6/cI8oNW7qQcfq','td/cImkLogyAW79DuXZcJgW','nSkCW7tdRCkQ','cCond8kyWO7dVa','W6xdUq/cM8ks','zCkFW7JcM8kg','W79BW5xcHCoWW4K9hW','bCorhSk5WOJdV8oiua','WOO1AmoIiG','BmkhWQDBaa','W7TWlXKm','E2pcSK0M','W4lcMt4','WRhcRqHa','AglcLhS0','W5/cUcxdKLa','WQddMSkZAHddQ1W+WQxdQh8e','CmovzWhcSh0tWOtdJXzwWRi','4P2Qxow+IowlSoISRUE/MEA0Q+wlI8kTWRhKUkJVVje','f8kEW5BdNCkP','W48YAgm','j8oXpSovWP8','vcbcW4pcH8kz','8lgyLUkaJokzLCkZ5P216ic15Q+U56gk6i+i5y+e5yQC5lU66AcN5l+Y5Oo277YG6ykb5ywO5OMc6kgH77+U','s0uiWOhdUa','WPZcKJhdPK8','WRVdPmk4jZm','WQRcI0G','WQhdLmkW','W4nboZa3','hc0+','dCk7W43dMSkpnG','WQlcGmoHi8oW','FCk/zmoxfCoS','W55YtSk8W5W','D0G4WOddLhVdRdJcNSotasBdJ8olpCkC','oSo4kSk9WRK','WOddP8k7hCk/AW','WRZdOCkon8km','bcZcUZlcT8oFBSouE8kthKRdMComhSkcWOJdL8kEDmkPW7m','W5q8zG','sxSGbCou','W43cNI7dSMC','t2mqWO/dS1q','4PMg77Ugza','W6Ldga','n8oYjmouWP8','W6Tsc8o9dG','WPRdVmk4jmkOkCoWDhqUWQukcKfZtbSsa2qGW7FcGGy','xCopW5ZdOCknu8kjW4tcI8ocpmoUW5dcISoWW4fXW7Hwpa5hv8ohW5yQxZXHsL5DWQ5noSk/WQPifmoiW4fYsSoVBmoJW57cRCobE8kUeCkUW7WZW78FW4uXof3cV8klrdZcI8k9b3CXlwCtmCoRW45QW4VdIJpdGN1FaCk+W43dSa','napdSGBcUq','yhmN','quJcMq','wX/cUSozW7q','WRtcHueDWRuP','WPNcVCo3WRG','W77dKIlcGq','W4DtjSk3W6K','WPddJmkBdbm','BSkQWQHdkMCA','W4ibWO/cVW4','W7XNW45+W4q','geBdMW','ASoKW5ldNZBdPW','zCoepq8S','fCk7W4/dI8kBaxlcRe1FW7RcIG','W715WQfbFmk0WOXGWQ/dISkOjW','FmoXW7BdNYJdQL17WOH3WR/dUCkfaW','5lQm5PAN5Bw46yg+5yAt776l5PIu5AAl5yAr5yYf5lMM5zgyW4i','W4CFWPJcMrm','W71TW7rOW5ZdHmkRmhldJCocW6TaWPDSk2dcKmo/','ECk9vCo7fCoJgbypE1/dUbZcPa','C8onuGW','5OYR5A6r5Aww6lEJWRC','WRixxCkdvGRdRaTLna','hsCQW6GBs3e','W6DBW6e','vZL8W6hcOmkFCCke','WRJdUmkIbCk4','sXxdICoWEGDjWQ8Mc0VdSLP9W4y','W75PW7rf','hxJdSCkWW40','d8ofW5NdPCkVvmkbW4hdGSoLimoRWP/cKmoG','W5NdUsRcR8kz','WPOoW78Vjq','W7rhdmkmW6i','W5XUate+W6bL','h8oQiSojWRC','W6hcVGtdRLe'],...(function(){return[...['dshLPB/OTyhVVPK','nuC8W7JcSG','W77cNHigwq','DmkVWQjFdxyrW50','WQBdTCk5kW','FSkkW6NcN8kACgDmgZpdUKvBWQNcH2m','5Bwk5AYl5zYP54QH5Oks','WQ3dPSkMaZqV','WQFdJSk3xaxdJLi','W4n0bq','CmkGWRe','WONcSmoBWPxdOW','W4RdOmo1W6xdNq','CmojtbRcOGO1','afhdLmktW6O','W73dQshcSmkJ','bmoAA8kuxa','wIHlW7RcPmkmA8kvEW','W5e9D37dPZRcI8oIqbO','b13dJSkWW7CAW7m','WQdcIeawWQG','nVcGKlNcNEAwPUwhKUAXL+AbMmoU','W4S4AgFdGsRcPG','WOausSoHpSkGgbS','h8ooh8kqWQO','W688WQ0','WQFcVCoLWRFdPa','W7flkCkTW47cMq','s1mxi8or','sXtdMmoHBq','W6vvW6pcM8oR','zCkfuSopWOq','wCo5FdlcIW','aSoVoSo6WQm','WQFcVc1gxa','h10jW77cKguMW6ZdQCk/DxdcG8oXrW','DContXNcUIK5W4reWPG','WQ7cKtFdK3X7','ftaRW5yjsW','v2moWQG','amoqgG','bmo3o8kJWQG','whpcMf0C','W5NcSsNdI2a','8jEBS+kbPUkyQwpMNzBOGBJMRAJNOOROJB3LJ7hLIB/KUk7POztKVPhMGO7VVjdPGl7LH5/MIiZOOQ/VVAa','EZBdKCoGuq','pSouomoqWPm','WOldNSkQpSkW','b0ldLCkmW4WCW6K','WRRcHCoZb8oWzW','WQxdUCk9fCkd','W7rTv8kiW5SGW5BdQ8kbnSoqWOFcOfVdGZjYFhe','W64yC1pdIq','W4/dUWxcL8kV','ysXmW6dcHW','WQCEW54QmG','wqtcSSoj','WPxdRCk4hmoUymkR','WOhdVmk+pCk1Dmk2pwW','4P2NWPBMJ5tNJyVMIl7LIRS','W5bMxIBcVw/dPSk9','jCo/oCoAWPBdI1dcMmoSWP8','WQJcGComWO3dQ8kEwgW6D2bgW58','WQlcHCoTia','W6iGzwxdGW','WQS/WRGrWOZcH8o4dhddH8oNW5Du','WOjzW6dcOhpdLN14','voEkN+AcVEAFLUEDU0NIN5pVUPu','4P6fAoAnGoEpIEwLU+I2QE+/O+wfSowTGCo3WO4p55QN6k6/5y6i','lSkBcfNdTf1PW6XAWO4oW6tdPa','tSkox8oQWPDRnrZdJttdPJpdRHS2E8khWPBdNW','W7LBW7hcUmoMW5G','WQdcVXLGFWCKoY0','WQdcJt4','W7ZdReib8jYJLo+5V3CCqrddHFgiOyy','ECoYrdtcQG','mSo7p8o3WPRdJhhcISoSWR/cRmknWRJdG8kXWRG9W7hcSW','WQb/W4ZcUN4','W7hdMWBcO8k6','tCofda','W7VcRcJdHMZdJdWsva','WO7cLmoSWONdMCo5','WPpdUmkpnCkOE8kimMe2WOHwbHHBsuyupgH9W7FcNXW','W71PD8kzW5TXWRxcRCkqla','A3SknSoV','gNxcRSoHW7xdKCk7WQC','qf7cKgKXlG','WOxdUmkUkdi','zmowxdNcHW','iZddUcNcK8oG','aMVdV8kpW7q','cvOlW5BcKva','WO0lAq','44kB5O+K56A844oG6k215yEO6i+K5y6UCSoxlZ/dLee','WQddTCkKpJ4mWOTnwCkysmkIWOddSxuF','zmkVFSkmW4RcIsdcVSo/WRxcLCknWQq','W53cOcJdL0q','4P+wkoAnKoEoLowMJoI2LE+/Low8KoACJUAnNoEmGUMGHUw6Sow0GoA7VW','57Qe5AYe5OIa5P6b5yYm','W6mubG','8kkzRokcSEkAVSk+5P2d6ig65Q+556kk6i+85y2f5yUA5lQW6AgQ5lY15OcY776s6ygk5ywc5OUF6kge772P','m8o3jCoAWPFdLg0','WROTW6q6jCoJWPjVWQC','W5iAWOlcGG/dKq','WQJcTCoDWQJdRSogWQVdHwNcLXTuW7xcN8o4W7/dOUI+S+ITM+AnSEEoOoMHGoAxGa','W4NcKrObwq','8l2PSEkcI+kAS8kI5P6k6ikU5QYB56gF6iYp5y6w5yMK5lQg6Agr5l6W5Ogf77226yk55ywO5OQ16kc877+G','W7zhimk8W4VcGSk+','A8k+5RQA5z+S6AM36k25ooISJUwYHEISQ+AkL+wjLEMPOUITP+s7G+AVQUAjGUIcM+AyQEAnQHWe','WQVcHCoGkW','afZdLCkBW6SiW6NdVq','fNtcUmoPW4u','dCoCcCk8WOVdSSozsSoTW6FdN1FdSCkTWPhcM8kKW7FcGG','EmkkW7tcIG','W6hdKJVcHCkoWRhdLCkeg8o+gSkm','aeCE','BCoMrapcMG','hf3dImkmW61tWQJcTCkfo8o6W4tdPJhcVJNcScNdL8ovjWLRhW','zVcWOP/dTEw+RUwlLUMyK+w6HEwhU+wpTEw1SUMaVEwhRU+/GoE3IUITNoInVow8KU+/Tq','WRNcUrddVLC','amoAg8kHWQNdSSoarG','W5mzWOhcPa8','WPBdQCk4nq','5yEQ5A6Au8krW4BNMP7ORzVLJPe','umoxda4ncCoO','dv/dRSkYW7i','W71ffCoqdW','W7NdJ2JcJsmKq8o8lLDJwa','xeGMkSoI','W63dMIZcT8kyWPJdNSkTjSo8ba','W4LzeCo/mW','d8oTl8ojWQS','ttpdOCoSAq','W75FW45cW5G','DmkeW43cT8kN','WORcHCo2WP7dNSkRW4BcTvZcVZWVW5xcKCk9WRtdRmk+W5BdJd9uW4ddNG','5y635yggyhG','WQhcTbroEW','WQePW6ajm8oiWPbHWORdQmkkba','WQxdImkK','wIzF','W4D25lML5yUe','W50HC1RdOdG','hKCmW7xcHNSQW7VdNW','WRhcJ3uyWRa','lSo2W7ydtYjnW6e6WPVdP8ojoG','zCkFW6VcHSknu2DnkG','qvRcJguGiSoJWQ7dPa','WR4PW7Kn','BmkSzCoXnCoKoG0yDK7dUbe','EmoUW4ddMH4','o8ohg8ktWPS','4P6Qo+AoSUEpOUAjI+wiJa','iIpdVGu','f8oyD8kEwMDTlCkCWORdPG','W7NcPSoTExrWW5zormkQsCk8WQC','5lU85PAS5BEk6yku5yAh77+Y5PIm5AEg5yAt5yY65lQS5zcRW6q','DmoBCa','WO7dIgDu','ACoMrIJcMq','lbhdRHFcHW','WP3cT8oNWPxcJmkIDa','WQGyW581lW','F8oTW5RdKt8','F8kOySozcCoKjbyErxRdPGJcTG','W4nyW7LpW6G','vb3cQ8onW6NdS3KeWQZcMN9U','aqFdNG','jZldNGxcK8oSvSolB8kZ','dSozyW','W60xdSoUW4e','dSkXW5BdI8kWmhu','zN/cOuGgeCoXWPJdHdjslv4a','WPNcHc5Mwq','W4OdcmodW7y','W6TlfmoF','wZTFW6pcLq','W6VdMJhcUmkeWPi','tHpcRSotW7q','W79UW6hcTmoZ','A1WQWQtdKW','b8oeDSk2xum','WRVcN8o0k8oMtrjkW5mqzxpdOhRcUa','dpcrMOye','ASovErxcPLq','AGZcOCopW5i','W63dKJ/cLa','W7msWOpcUrW','W54jW4epl8o+Fa','WRbVW4VcMuG','W580mSov','W7TscmorhW','CmkKWRjagxur','EHdcI8oxW54','WOKXW5mgoa','W70DWQVcJYK','WObgW4dcQG','W71TW7rWW5tdNCkR','WRNcHJhdMMe','WRJdPSk9ncipWPbfzmknBCk2','5OYy56Ab57Iq5P2fvmkscgtdKmk6l1ZdHSk8','dCkxW47dS8kK','oK3dTmkjW7e','W6X5e8omcq','WQW7W70ola','oJi3W4Oz','tw0vWQFdUL/dQGBcR8oQ','W7PWt8kmW41O','xWzHW7FcSa','lSoXWRLIf2mLW4u','WOmiyCoHdG','W5a2yhpdTI3cUW','W5RcLYOFzcNcK8k2kKJdOZPd','5O2L5A6g5AE86lAOWQa','W4VdOCk9W6S','WQqgW7qvjq','W5LbW6jYW4G','W7nqa8kZW4pcU8kYohW','jSoRkmoyWP7dI2C','8lYRKee','W7Xikmo2mq','nLBcV8o/W64','dSo6uCkSqa','WQOuW7W8kG','WOpcGCowWO/dNSo6WQ3dV0NcRJXT','WQ3cNeOYWO8','4P6eWRtOH47MNAlOVPFOOitPGQxLIjRKUPFPL6tOR4VdMa','WOWDz8oGhmkOhXvBWReRWPG','WQhdUmkots4','j8oAWQZdMmosbtPSnb3dN0vD','WRZcOHHeDW','DCoGW4xdJIldHMn1WRrWWPBdRG','WO03W64vmSomkhyFzCkqW5G','WObSW43cIe8','W6ZdGtNcUmkeWPi','cSoxDmklv2bRjCkZWOW','hKKxW7/cJvO','W6nvW7BcGCo7W6q6h3NdNsWKW7fniL4','W6CAeCoXW5ZcTfldTrBdHCkNgfKthSoz','W6zhW6e','eCk1W5G','e8onW4tdSmkAECkfW4/dSSoA','Bmk0zSo/','W4fWW5NcT8obW7Crj2pdTXuAW7KeFGvA5O6+5AYi5yQ75lYP6kkH6yse','W61fd8osdLBcVW','hSoAdmkGWPJdQmoz','W55jmWSl','WP3dP8kXpaKPWO9p','WQRdVmklEW8','xczrW6a'],...(function(){return['zglPMltLU4lLHPpLJ6BVVjBLV7hLIzhLIQ7KVlfF','WR3cRqXrDJmzmbzbemoc','WOhcNSoUWQFdICoP','WOhcLHZdSvC','gKBdIW','W79PabyF','W7RdHYRcGCks','W61cgCoKoG','W4RcLY0v','4P6fAowNHUwsUgO','W5NdPqFcHCk2','W4xdMW7cSCk1','W6JdGWJcLmkeWP3dQ8kkj8o5m8kBW6/dNq','zaVcN8o4W4i','W4XOdr8Q','bmoEdCkLWOtdN8oermomW7S','W4PPeb8OW7q','fMNcV8oaW7pdKG','FmoXW6hdNYJdQuz7WO9R','u8ocgqiTg8oSBCkD','4P6bW57OHypMNPNOV4xOOzdPGBhLIQRKU4xPLipOR4mu','WQlcRrvv','sSkdxq','WRtcVcHaFbW0mIPpfmol','gsW6W7CpsheH','qGJdPSowrG','WRxcKCokWRpdNG','pCozW7BdRmkH','W6rIW4dcP8oy','e0pdQ8kwW4C','W5b4W651W54','WQJcJcVdUgz7','tmkct8oM','FNm1nhH6sCo1uq','W47dVmkN','W7SXtL7dKa','W5XVedS1W7r/WPXC','4P63roI+SowkVUwiG+s+MoIGQ+MgV+AyT+wtUoMJIEwmQ+wLS+wlIJr4','vaxdL8oYFd0','WPNcS8oGWRxdUmk8B0alta','WR3dQmkByWG','W4VcHcSBrq','va/dNG','WRldLCktiIi','yeWveN0','A8oaDGxcVeO','WPfmW4dcMuBdM3T2','W6PeW5lcKmoXW4SFeuldJa','WP7cS8oNWRW','WOpcPYNdT2W','WQ0k6zUE5BIy5ysy5y2w57E+6k6x6i+V5B6E77+x','F8ofrstcSaO','WPddPmkJo8k/','c2OQW7BcGa','BSoQW5ZdJGNdT2q','B1OoWQpdNq','lmoDW4xdGCk7','BSoytqdcRqO5W4v5','dSotASkCwKW','W4iEWOFcUZNdNmkz','W6T8gcuS','cKeb','4P2rWQhMJAxNJi7LPAROTQFVVjdMNlJNUk3LROxLVzxKVARMI7lMIl/MNkZLJ40','t8odW6ZdQaK','WQCEASoBpG','f8odW5m','W7HNW5r8W7K','WOhdUmkGpCkV','pmoNmCk5WQS','WQpcINOaWO4','WQNcMSoql8oNDdnlW6uqA1m','WPhdP8kGhCk/AW','WOPgW5C','WPJcU8oPWPddISk2','W5DogSkFW5u','xIBcLmo3W7y','xmkgqSoZWRn3lW','cSoteSk6WO8','upcVIkhcU+MbUUwhLUAjS+IGNGK','5lQc5BUC6zsF','BSozxaRcPH4J','W71ffCoqd3VcUeuS','W5ZcMs49uZ4','WPBdOCkRfSk0FSk9fwaZWR8','WRFcK+wLUUI3Ko+/Rq','W5SMC0xdVcRcPSoP','W7HHW7PPW47dLW','W7fQra','EvaSiLO','WQNcMSoql8oNDdThW6if','W6BcLmk2BGddG0z2WR/dONaeWPFdSGmG','bfWnW6VcKq1SWQFdISkUEXlcH8kSwvxcSmoff8opWQhdLSknAq','W6HqWR/dHCk7','EKyIWPddVa','4P+hfoAnLUEnGEwMS+I2HE+9IEs5SUs4SEEURoAoKoEpPoI9PEACJUwVNEAiUG','bSoFy8kOwKTY','WPirBCoTd8kYga','fSozv8kpxe1Sjq','5yAG5PEj6zwm5Qsu57Qf5y6Y8jYhTo+9PG','lCk3W4BdRCke','ahNcHCofW5O','sCofwqlcGq','ESkeW74','W5GkemoaW70','W6nfbW','WQCqrmoBka','bmoEdCkLWOtdN8oermoaW7VdRui','g3RcVSoL','bmoMy8kqtW','WPBcTMm1WOa','eI42W7qE','lIpdUHtcMCodC8ofwCk/cXFdNCovkCki','iLddS8kRW7y','b3SbWRNdH8ognSkls8kVW49IW7e','EmoVW4m','c8ovW6FdKSkc','wHxcOW','BmomFX7cVq','W4ydemoVW50','pmo7W47dRCkl','toITIoAWV+wNPoI3Mmk74PYXa+AvQowrMEw4LoAvL+ApSW','xIHiW77cJCk6A8kiw8kaW4fKW7TSWPOM','DmovzaxcMuStWPNdOG','dmozCW','W6jqeSk4','B1tcKhOGkmohW6RdNIrwiq','vsBdNCoJuq','WOjeW5BdVLNcNmkfWQVcVCkuWRddOW','WRRdLCkSlb4','jMWMW53cOwabW5FdUCkrr3lcRG','WQBcUr9cAGqd','WOybESogx8kYhW','uZTkW4pcH8kz','W7NcRd7dTg7dJqCjtq','W4/cHIKyxIxcH8kWieldMgDxdmoVWQldJhXCA8kSW6BdJ8ouduvnWOFcOSoPvSkFvG','WPBWMyMM4Oo14PUQoUwmJUM4LEs5PE+9LoA4TUs5P+A4KUs6T8oz','FCogztZcUL4','W6vhhCkEW4i','W65PW7npW7tdLa','B8kSF8oU','WOW4W70jpSoSjgi','W57cLYSvwJxcOSkLpuW','eeJdImkD','W73dKJJcNSkJWOZdJmkg','xrldI8oyEZi','4PY4cEAnRoEnJowMR+I1Jo++Nq','cCowgCkkWONdTmogrSoM','W4hcGrufqq','x8kmwCoIWOXXbrtdNcy','W5zrW4rXW7K','WOKfFSo+e8kfaHDqWReIWPG','W4vOWQbf','ceKnW7O','WOlcRSoBcmoxsdvXW4iMs2ZdGq','q8o65RMU5z+S6AMU6k6en+ISVowWMoIVPEAlNowjH+MOQEITJUs4G+ASS+AiMoIcHUAyJEAnHf0D','8jkgRU+8Ta','nmoUh8oAWOJdK1dcNmoSWP/cTCkr','lX0ZW78Beq','ag/cV8oKW67dKSk3WRiM','hSk1W5pdSSkgpq','kVcYSOLl5Pw15ysz5Roc5OcWW64','W54/BNJdOq','WRq4W5KohG','54+e6yE4WPddNa','hSoqcmk7WPNdL8oeumo8','E8kPl8kUxW','fVcTIO7cRSo+5B6T5yMp6kkV6yErW5G','4PUx77UcpG','W5uYCq','vmozob8XfCoRBa','ESkHECo1aG','e8onW4tdSmkAECkfW4/dVSoAkmo8','q8kcta','s1yfdhC','d1OCW7RcLLi','5lIq6AcQ5y+P','fxFcOSoIW7i','iu8pW5ZcJW','W5u2CMtdSJJcRq','CmkSzSoQh8opjHGZFhBdRW','sCoycaC2gmoGEa','WPJcM8ogWRJdSa','W4j+ese6W7rZ','WQ/cIKSCWQi','BSohvHNcKrG+','W7HbW6xcKSoNW5mG','ECoeqXdcULi2WORdTa0','vb3cQ8onW6NdS3KeWQhcJxfJwIeGW5C','W7T4W4nfW47dMmkzkNldPmo2W6L3WOu','rgaNea','8jgyPEkcTokBLYJMNB/OG5hMRQJNOiROJ53LJ7RLIO7KU4JLIQ/LJBdML6u','W7q7rfpdKq','FSoUW5hdMW','welcJMS','W6LDW7ZcVmoXW4C','tNKxWQpdPx7dIWpcMCoQjsldP8o2dG','ECoevbdcULeTWORdSXf/WQuHcW','uhXNWRVKUOhLIO3LRPJMIyi','F8kOySosu8o4oW','WRP4u8kiW4f+W4tcPCkalmodWPFdP0xdJNLItgXOWOT8vCkQW47dISoTzSoYamojtmkkD8kKWPevxJ5gz8kKW7nLCSo7WRzPW41qW6rOo09FWOnjDq','h3tcQG','W6nwdmkqW5tcKa','W6KFWRtcRdW','W4pcPb7dKeS','bCkYW7ldRCkV','WQFcOWLpAW','WOBcKmo2WO8','F8kTWQ5Cha','vmoxgaaxbCo1BG','WPDiW5FcPhpdJN52','fSoeBCkw','WQtdSCk6ktmG','sCkHFSojpa','q8oxgamceCoQFSkkWR4','WOxcLmo2WQldGSo2WOddTg7cUZr1W43dJa','EuJcM3Wlj8oEWQi','uYDo','WRaXW6Kaz8obWRqRWQBdO8ohkwSNWRa/WOpdPmkz','WP/cOmoHWPddISk2','D8kUWQHD','DmocxaxcTGK1W5a','W5W6zKtdPZdcUa','qftcMq','WONcPSoHWRtdL8k2AvmC','x2qGa8o3EG','WPe3W60ogmoNngm0B8kOW49d','WRNcOXS','uahdICoLCrffWQWSbuhdMW','W4pcJrpdGuldTaSJCZTtWQW+FNNcSt7MMRBLKk/LU6NPL7/MJ5BNJBdMLAlPLBC','WRVcNSo2j8o6Eb5iW6G','WRJdTCkZkWK9WO8','WRlcVSorWRO','4P2WxoMeLUITQoAnGoEmH+wKOEI1HU+/VUs7V+s4KUESN+ApQ+EpV+I+N+AEMowTHoAiHW','W5agWOFcIJS','W7H4v8kz','WQ4zW5iemq','Ah00oW','WO9gW4m','WQhcMZFdKMf0','4PUd77ItAa','W414l8oPohlcJG','WP7cRSoxfSos','DCoGW4xdJIldHMn1WRr6WPFdU8kOhwvo','5BwD5A2d5z2k54UK5OgA','xCkdW7BcO8ku','WPBcU8oMWPhdNW','hmkQW6VdMSkrlL/cRNfrW77cGW','WQddMSkWCG'];}())];}())];}());Iii11l=function(){return iIiiil;};return Iii11l();};!(async()=>{const l1I1Il=l1lI1l,i1iIl1={'TidPE':l1I1Il(0x215,'mIR2'),'UefKq':function(i1lli1,llIlII){return i1lli1==llIlII;},'tMkmZ':l1I1Il(0x1b5,'NmQD'),'pAGbb':function(IIlII,lIIiII){return IIlII<lIIiII;},'NdHuo':function(i1iIlI,li111){return i1iIlI===li111;},'xRYGR':'8|5|12|3|0|11|7|13|1|6|10|4|2|9','YPykU':function(liI1lI){return liI1lI();},'ZhPPM':function(lIIiI1,ll1I1){return lIIiI1+ll1I1;},'kQflH':function(Ii1ili,iI1Ii1){return Ii1ili+iI1Ii1;},'FHNbX':function(Ii1ill,llIlI1){return Ii1ill*llIlI1;},'ljOML':function(iI1IiI,IIlI1){return iI1IiI+IIlI1;},'PRLLZ':function(i1iIli,i1iIll){return i1iIli(i1iIll);}};console[l1I1Il(0x115,'2(dk')](l1I1Il(0x30f,'3To[')+linkId),console[l1I1Il(0x2b1,'a[Ww')](l1I1Il(0x18b,'6pE7')+(Exchange==!![]?'领取':i1iIl1[l1I1Il(0x3b6,'sTv@')])+'],是否延长提现:['+(i1iIl1[l1I1Il(0x2cc,'mQkB')](Swish,!![])?'延长':i1iIl1['tMkmZ'])+']'),notify[l1I1Il(0x37b,'3%@a')]({'title':$[l1I1Il(0x345,'mIR2')]});for(let i1lliI=0x0;i1iIl1['pAGbb'](i1lliI,cookiesArr[l1I1Il(0x246,'4#Z*')]);i1lliI++){if(i1iIl1[l1I1Il(0x136,'Ad@C')](l1I1Il(0x2e1,'Rd#*'),l1I1Il(0x16b,'sVKb'))){const liI1l1=i1iIl1[l1I1Il(0x372,'4#Z*')][l1I1Il(0x1a9,'7caB')]('|');let IllIlI=0x0;while(!![]){switch(liI1l1[IllIlI++]){case'0':$['UA']=common['genUA']($[l1I1Il(0x2f9,'2zzN')]);continue;case'1':$['hash']=i1iIl1['YPykU'](gen_jda_cookie);continue;case'2':common[l1I1Il(0x3f0,'2(dk')]();continue;case'3':$[l1I1Il(0x23d,'fC59')]=decodeURIComponent(common[l1I1Il(0x110,'sQkq')](cookie,l1I1Il(0x371,'9DAb')));continue;case'4':await i1iIl1[l1I1Il(0x111,'N*J8')](Main);continue;case'5':cookie=cookiesArr[i1lliI];continue;case'6':$[l1I1Il(0x369,'Ad@C')]=l1I1Il(0x203,'9Pe!')+$[l1I1Il(0x25d,'mQkB')]['jda']+l1I1Il(0x26f,'9Pe!')+$['hash'][l1I1Il(0x2cf,'sIt1')]+l1I1Il(0x2d6,'ZY6#')+$[l1I1Il(0x1d1,'[fCF')]['jdc']+l1I1Il(0x128,'3xg[')+$['hash']['jdv']+';;';continue;case'7':$['nickName']='';continue;case'8':$['index']=i1iIl1['ZhPPM'](i1lliI,0x1);continue;case'9':await $[l1I1Il(0x223,'4#Z*')](parseInt(i1iIl1[l1I1Il(0x305,'6pE7')](i1iIl1[l1I1Il(0x38b,'GB^e')](waitTimes,0x1),0x64),0xa));continue;case'10':$['uuid']=i1iIl1['ljOML'](i1iIl1['ZhPPM'](new Date()[l1I1Il(0x131,'N*J8')](),''),i1iIl1[l1I1Il(0x1d3,'ZY6#')](parseInt,i1iIl1['FHNbX'](0x7fffffff,Math['random']())));continue;case'11':$['message']=notify[l1I1Il(0x214,'ZZOd')]($[l1I1Il(0x21d,'ZY6#')],$[l1I1Il(0x163,'a[Ww')]);continue;case'12':common[l1I1Il(0x3bc,'Bc1L')](cookie);continue;case'13':console[l1I1Il(0x2c8,'9DAb')](l1I1Il(0x28f,'3%@a')+$[l1I1Il(0x152,'Rd#*')]+'】'+($['nickName']||$[l1I1Il(0x23d,'fC59')])+'******\x0a');continue;}break;}}else lIII11[l1I1Il(0x33b,'Ad@C')](l1I1Il(0x27e,'Bc1L')+IiilI[l1I1Il(0x35d,'a[Ww')]);}isNotify&&notify['getMessage']()&&(notify['updateContent'](notify['content']+'\x0a'),await notify['push']());})()['catch'](ili11I=>$['logErr'](ili11I))[l1lI1l(0x3bb,'wK#0')](()=>$['done']());async function Main(){const l1I1Ii=l1lI1l,li11l={'LHRGV':function(lliiIl,li11i){return lliiIl===li11i;},'mrgma':function(lliiIi,iiIi1I){return lliiIi===iiIi1I;},'PXLlV':l1I1Ii(0x315,'GYE1'),'pVfjk':'账号无效','csoMq':function(IllIl1){return IllIl1();}};$['skipRun']=![],$[l1I1Ii(0x132,'3%@a')]=![];try{const ll1Ii=await common[l1I1Ii(0x23c,'b4UZ')](cookie);if(!ll1Ii&&li11l[l1I1Ii(0x119,'Rd#*')](typeof ll1Ii,l1I1Ii(0x160,'NmQD'))){if(li11l[l1I1Ii(0x11c,'I3X7')](li11l[l1I1Ii(0x1aa,'bcSz')],li11l['PXLlV'])){console['log'](li11l[l1I1Ii(0x385,'7caB')]),$[l1I1Ii(0x272,'[fCF')][l1I1Ii(0x29c,'wK#0')](li11l[l1I1Ii(0x2ba,'sVKb')]);return;}else Iii11I[l1I1Ii(0x159,'6f]&')]=Iil1II['data'];}await li11l[l1I1Ii(0x174,'sVKb')](happyDigHome);if($[l1I1Ii(0x21e,'mIR2')])return;await doTask();if($[l1I1Ii(0x36c,'ijPZ')])return;await digChunks();if($[l1I1Ii(0x1a1,'m!jR')])return;}catch(iiIi11){console[l1I1Ii(0x1cc,'ih1y')](l1I1Ii(0x17a,'3%@a')+iiIi11);}}async function happyDigHome(){const IIlili=l1lI1l,ill1II={'APhTD':function(llIIii,Ii1I1i){return llIIii/Ii1I1i;},'jbIkr':IIlili(0x30d,'mQkB'),'XhHBQ':function(llIIlI,Ii1I1l,IIlIl){return llIIlI(Ii1I1l,IIlIl);},'uREGk':function(ili11l,Iiilll){return ili11l+Iiilll;},'Fcnxz':function(Iiilli,IIlIi){return Iiilli*IIlIi;},'QnGkU':function(ili11i,iiIi1l){return ili11i(iiIi1l);},'hetFm':IIlili(0x258,'a0u]'),'LkYRV':IIlili(0x23f,'Bc1L'),'VGWhD':function(li11I,lliiII){return li11I<=lliiII;},'EkAmC':function(iiIi1i,liI1ll){return iiIi1i===liI1ll;},'iQMLS':'KdHVQ','rpqpl':IIlili(0x1b0,'9DAb'),'YoEcP':'0|4|2|3|1','nXfDQ':function(ll1II){return ll1II();}};$['happyDigHome']='',$[IIlili(0x2ea,'GB^e')]='',await sendRequest(ill1II[IIlili(0x2ac,'b4UZ')]);if(!$[IIlili(0x3e0,'Bc1L')]?.[IIlili(0x283,'NmQD')]){console[IIlili(0x1cc,'ih1y')](IIlili(0x2e6,'m!jR')),$['skipRun']=!![];return;}await $['wait'](ill1II['XhHBQ'](parseInt,ill1II[IIlili(0x2a6,'ijPZ')](ill1II['Fcnxz'](waitTimes,0x1),0x64),0xa)),$[IIlili(0x35b,'ih1y')]='',await ill1II[IIlili(0x208,'3xg[')](sendRequest,ill1II['hetFm']),await $['wait'](parseInt(waitTimes*0x1+0x64,0xa)),$[IIlili(0x14f,'6pE7')]=$[IIlili(0x153,'a0u]')]?.[IIlili(0x368,'ijPZ')],$[IIlili(0x3f9,'a0u]')]=$['happyDigHome']?.[IIlili(0x210,'sQkq')],$['markedPin']=$[IIlili(0x211,'eLHs')]?.[IIlili(0x3e9,'fC59')];const i1llil=$[IIlili(0x26c,'[fCF')]?.[IIlili(0x1eb,'sTv@')]||0x0;$[IIlili(0x20a,'bcSz')]=$[IIlili(0x219,'sQkq')]?.['roundList']||[];const i1llii=new Date()['valueOf'](),l1i1I1=$[IIlili(0x2a3,'9DAb')]?.[IIlili(0x3ce,'bcSz')]+i1llii,llIIil=$[IIlili(0x2d7,'6f]&')](ill1II[IIlili(0x2b4,'WMsW')],l1i1I1);console[IIlili(0x33b,'Ad@C')](IIlili(0x2fb,'9Pe!')+llIIil+IIlili(0x25f,'a[Ww')+i1llil+IIlili(0x20c,'I3X7')+$[IIlili(0x19a,'7caB')]+'\x20🩸\x20(剩余\x20'+bloodMinimum+IIlili(0x1b4,'9Pe!'));if(ill1II[IIlili(0x321,'bcSz')]($[IIlili(0x116,'Y&Ft')],bloodMinimum)){if(ill1II['EkAmC'](ill1II[IIlili(0x34e,'Ad@C')],ill1II['rpqpl']))return i11ilI[IIlili(0x1b3,'bcSz')](ill1II[IIlili(0x267,'3xg[')](ii1ii1[IIlili(0x2b8,'Rd#*')](),0x3e8));else{const liI1li=ill1II[IIlili(0x357,'ZZOd')][IIlili(0x317,'a[Ww')]('|');let IllIil=0x0;while(!![]){switch(liI1li[IllIil++]){case'0':await ill1II['nXfDQ'](incomeSummary);continue;case'1':return;case'2':console[IIlili(0x2f7,'sIt1')]('🙅‍♂\x20当前血量['+bloodMinimum+IIlili(0x2c2,'wK#0'));continue;case'3':$[IIlili(0x284,'mQkB')]=!![];continue;case'4':console[IIlili(0x2c1,'wK#0')]('');continue;}break;}}}}function iii1II(_0x5c0078,_0x4d034b){const _0x306d42=Iii11l();return iii1II=function(_0x1f6797,_0x30436f){_0x1f6797=_0x1f6797-0x110;let _0x13cbab=_0x306d42[_0x1f6797];if(iii1II['iQDyUa']===undefined){var _0x366804=function(_0x107576){const _0x25beb7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4242c4='',_0x4e02a2='';for(let _0xf00319=0x0,_0x369b2d,_0x4a85dc,_0x2eb273=0x0;_0x4a85dc=_0x107576['charAt'](_0x2eb273++);~_0x4a85dc&&(_0x369b2d=_0xf00319%0x4?_0x369b2d*0x40+_0x4a85dc:_0x4a85dc,_0xf00319++%0x4)?_0x4242c4+=String['fromCharCode'](0xff&_0x369b2d>>(-0x2*_0xf00319&0x6)):0x0){_0x4a85dc=_0x25beb7['indexOf'](_0x4a85dc);}for(let _0x165bef=0x0,_0x296f1f=_0x4242c4['length'];_0x165bef<_0x296f1f;_0x165bef++){_0x4e02a2+='%'+('00'+_0x4242c4['charCodeAt'](_0x165bef)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4e02a2);};const _0x15d63d=function(_0xa76b86,_0x4b3f89){let _0x4d9215=[],_0x3d7e9c=0x0,_0x100051,_0x2f6e8d='';_0xa76b86=_0x366804(_0xa76b86);let _0x479a46;for(_0x479a46=0x0;_0x479a46<0x100;_0x479a46++){_0x4d9215[_0x479a46]=_0x479a46;}for(_0x479a46=0x0;_0x479a46<0x100;_0x479a46++){_0x3d7e9c=(_0x3d7e9c+_0x4d9215[_0x479a46]+_0x4b3f89['charCodeAt'](_0x479a46%_0x4b3f89['length']))%0x100,_0x100051=_0x4d9215[_0x479a46],_0x4d9215[_0x479a46]=_0x4d9215[_0x3d7e9c],_0x4d9215[_0x3d7e9c]=_0x100051;}_0x479a46=0x0,_0x3d7e9c=0x0;for(let _0x5e09de=0x0;_0x5e09de<_0xa76b86['length'];_0x5e09de++){_0x479a46=(_0x479a46+0x1)%0x100,_0x3d7e9c=(_0x3d7e9c+_0x4d9215[_0x479a46])%0x100,_0x100051=_0x4d9215[_0x479a46],_0x4d9215[_0x479a46]=_0x4d9215[_0x3d7e9c],_0x4d9215[_0x3d7e9c]=_0x100051,_0x2f6e8d+=String['fromCharCode'](_0xa76b86['charCodeAt'](_0x5e09de)^_0x4d9215[(_0x4d9215[_0x479a46]+_0x4d9215[_0x3d7e9c])%0x100]);}return _0x2f6e8d;};iii1II['zodiUA']=_0x15d63d,_0x5c0078=arguments,iii1II['iQDyUa']=!![];}const _0x563fb1=_0x306d42[0x0],_0x49b1ef=_0x1f6797+_0x563fb1,_0x2a0190=_0x5c0078[_0x49b1ef];return!_0x2a0190?(iii1II['OgBLPv']===undefined&&(iii1II['OgBLPv']=!![]),_0x13cbab=iii1II['zodiUA'](_0x13cbab,_0x30436f),_0x5c0078[_0x49b1ef]=_0x13cbab):_0x13cbab=_0x2a0190,_0x13cbab;},iii1II(_0x5c0078,_0x4d034b);}async function doTask(){const IIlill=l1lI1l,ill1Ii={'UFBHa':function(llIIl1,ill1Il){return llIIl1(ill1Il);},'iCMWG':IIlill(0x3a9,'BQRv'),'MgvGm':function(i1lll1,Ii1I1I,l1i1Ii){return i1lll1(Ii1I1I,l1i1Ii);},'iOYyD':function(l1iI1,lliiI1){return l1iI1+lliiI1;},'ilrcW':function(IiiI1,lilII){return IiiI1*lilII;},'BTWlJ':function(IIIiI,iii1i1){return IIIiI<iii1i1;},'tZgEq':function(IllIll,i1lllI){return IllIll===i1lllI;},'GLTXN':IIlill(0x173,'3To['),'ELgYI':IIlill(0x1a2,'sVKb'),'mfBqj':IIlill(0x256,'NmQD'),'VVOuW':function(llIIi1,iI1IlI){return llIIi1===iI1IlI;},'BkmDt':'iLsgJ','DWbuf':'apDoTask','FuBlB':function(l1i1Il,ill1I1){return l1i1Il*ill1I1;},'XgNsv':'apTaskDetail','hwHiP':function(l1i1II,ili111){return l1i1II+ili111;},'RVieJ':function(Ii1I11,IllIli){return Ii1I11<IllIli;},'fxhmZ':function(ii1Ii,ii1Il){return ii1Ii!==ii1Il;},'kxeKU':IIlill(0x251,'3xg['),'FzdUT':function(l1iII,iI1Ill){return l1iII(iI1Ill);},'RBYVR':function(lilI1,IIIi1,i1llli){return lilI1(IIIi1,i1llli);}};$[IIlill(0x220,'iP6w')]='',await ill1Ii['UFBHa'](sendRequest,ill1Ii[IIlill(0x150,'mQkB')]);if(!$[IIlill(0x1bf,'2zzN')]){console[IIlill(0x309,'RU&#')]('🙅‍♂\x20未能正确获取到任务参数'),$[IIlill(0x19c,'a0u]')]=!![];return;}await $[IIlill(0x3ea,'Bc1L')](ill1Ii[IIlill(0x217,'ZZOd')](parseInt,ill1Ii[IIlill(0x13c,'I3X7')](ill1Ii['ilrcW'](waitTimes,0x1),0x64),0xa)),console[IIlill(0x248,'Rd#*')]('');for(let i1llll=0x0;ill1Ii['BTWlJ'](i1llll,$['apTaskList'][IIlill(0x1a0,'2(dk')]);i1llll++){if(ill1Ii[IIlill(0x11f,'6f]&')](ill1Ii[IIlill(0x2fc,'ih1y')],ill1Ii[IIlill(0x370,'b4UZ')]))iI1lil['log'](l1lIi1),iIli1l&&(il1i1I[IIlill(0x296,'wK#0')]=!![],lI1li1['message']&&ilil1i[IIlill(0x363,'mIR2')][IIlill(0x32a,'NmQD')](IlIIi));else{const llIIiI=$['apTaskList'][i1llll];$['taskId']=llIIiI?.['id'],$['taskType']=llIIiI?.[IIlill(0x237,'h46O')],$['taskSourceUrl']=llIIiI?.[IIlill(0x2e7,'Rd#*')];const iI1111=llIIiI?.[IIlill(0x2e8,'CaVI')],IIIl1=llIIiI?.['taskShowTitle'],ii1ii=llIIiI?.[IIlill(0x34f,'eLHs')];if(iI1111||ii1ii!==null)continue;if(!$[IIlill(0x1f5,'GB^e')][IIlill(0x304,'bcSz')](ill1Ii['mfBqj']))continue;console[IIlill(0x265,'3%@a')](IIlill(0x3de,'OIES')+IIIl1+IIlill(0x3e3,'3xg['));if($[IIlill(0x140,'RU&#')])ill1Ii[IIlill(0x29f,'ZZOd')](ill1Ii['BkmDt'],ill1Ii[IIlill(0x31f,'BQRv')])?(await sendRequest(ill1Ii['DWbuf']),await $[IIlill(0x335,'GB^e')](parseInt(ill1Ii[IIlill(0x2ca,'mQkB')](ill1Ii[IIlill(0x181,'eLHs')](Math[IIlill(0x2d5,'sTv@')](),0x5dc),0x5dc),0xa))):l1lIll[IIlill(0x14c,'b4UZ')]=I1l1II['data'];else{$[IIlill(0x17d,'Rd#*')]='',await ill1Ii['UFBHa'](sendRequest,ill1Ii[IIlill(0x2a5,'N*J8')]),await $[IIlill(0x311,'ijPZ')](parseInt(ill1Ii[IIlill(0x355,'sTv@')](Math[IIlill(0x333,'ZY6#')]()*0x5dc,0x5dc),0xa));const I1I1lI=$[IIlill(0x202,'wK#0')]?.['taskItemList']||[];for(let ii1il=0x0;ill1Ii[IIlill(0x19d,'GYE1')](ii1il,I1I1lI[IIlill(0x3ac,'fC59')]);ii1il++){ill1Ii[IIlill(0x280,'ih1y')](ill1Ii[IIlill(0x14d,'ZY6#')],ill1Ii['kxeKU'])?(llll1[IIlill(0x35e,'mQkB')]=!![],lil11l['message']&&lil11i[IIlill(0x12c,'kWW8')][IIlill(0x29c,'wK#0')](IlIIl)):($[IIlill(0x3eb,'sQkq')]=I1I1lI[ii1il]?.['itemId'],await ill1Ii[IIlill(0x1a6,'6pE7')](sendRequest,ill1Ii[IIlill(0x327,'sTv@')]),await $[IIlill(0x2ed,'w2lW')](ill1Ii[IIlill(0x1a5,'a0u]')](parseInt,ill1Ii['ilrcW'](Math['random'](),0x5dc)+0x5dc,0xa)));}}}}}async function digChunks(){const IllllI=l1lI1l,iI111I={'McAyG':function(l1lli1,IiiIi){return l1lli1+IiiIi;},'rofDp':function(ii1l1i,l1iIl1){return ii1l1i<=l1iIl1;},'JhyLe':'ffNtO','FtJUB':IllllI(0x3d8,'NmQD'),'zAGle':function(ii1iI,IIIil){return ii1iI-IIIil;},'CIbVu':function(IIIii,iI111i){return IIIii===iI111i;},'sSNVz':function(I1I1l1,iI111l){return I1I1l1===iI111l;},'boTXD':IllllI(0x1e4,'CaVI'),'Mlzfu':function(i1lIii,III11i){return i1lIii<III11i;},'JmRWJ':function(i1lIil,III11l){return i1lIil(III11l);},'gcadd':IllllI(0x157,'2(dk'),'enUyT':function(llIl1i,llIl1l){return llIl1i*llIl1l;},'TkMKW':function(IiiII,Iiil){return IiiII-Iiil;},'PxeLa':function(IIIli,ii1i1){return IIIli!==ii1i1;},'kXCBr':function(Iiii,llIl11){return Iiii<=llIl11;},'cUWmb':function(IIIll,I1I1il){return IIIll===I1I1il;},'cEiGh':IllllI(0x2d2,'2zzN'),'sqbEW':IllllI(0x1fb,'N*J8'),'jSdsg':function(l1llii,liII1){return l1llii>liII1;},'RSbTI':function(I1I1ii){return I1I1ii();},'CTAsg':function(l1llil,IIIlIi){return l1llil<IIIlIi;},'pmrmL':function(llIl1I,i1lIl1){return llIl1I>i1lIl1;},'NiBcW':function(liIli1,IIIlIl){return liIli1!==IIIlIl;},'pySRa':'QJsit','esmwf':function(IIIlI){return IIIlI();}};$[IllllI(0x26e,'7caB')]=![],$[IllllI(0x295,'XqWz')]=![],$[IllllI(0x33e,'w2lW')]='',await sendRequest('happyDigHome');if(!$[IllllI(0x2f8,'I3X7')]?.['markedPin']){console[IllllI(0x318,'ZY6#')](IllllI(0x314,'ijPZ')),$[IllllI(0x1b2,'wYTO')]=!![];return;}await $[IllllI(0x2c7,'m!jR')](parseInt(iI111I[IllllI(0x2bb,'3To[')](waitTimes*0x1,0x64),0xa)),$['blood']=$['happyDigHome']?.['blood'],$['roundList']=$[IllllI(0x3c8,'GB^e')]?.[IllllI(0x145,'9DAb')]||[];const IIIlI1=$[IllllI(0x112,'3To[')]?.[IllllI(0x1bb,'ijPZ')];if(iI111I['rofDp']($[IllllI(0x3f9,'a0u]')],bloodMinimum)){if(iI111I[IllllI(0x375,'wYTO')]!==iI111I[IllllI(0x1cf,'6pE7')])return;else iIIIII=0x64;}const i1lIiI=$[IllllI(0x187,'OIES')][iI111I[IllllI(0x191,'a[Ww')](IIIlI1,0x1)]||{};$[IllllI(0x11e,'3To[')]=i1lIiI?.[IllllI(0x2ea,'GB^e')];const IiiIl=i1lIiI?.[IllllI(0x373,'CaVI')],ii1l1l=$[IllllI(0x233,'Rd#*')]===0x1?'入门':$[IllllI(0x312,'wK#0')]===0x2?'挑战':iI111I[IllllI(0x144,'N*J8')]($[IllllI(0x275,'w2lW')],0x3)?'终极':'未知';if(iI111I['sSNVz'](IiiIl,0x1)){if(IIIlI1===0x3){if(iI111I[IllllI(0x3dc,'ih1y')]===iI111I[IllllI(0x1a8,'N*J8')])console[IllllI(0x2c1,'wK#0')](IllllI(0x341,'WMsW'));else{iIIIIi[IllllI(0x3b2,'6pE7')](IllllI(0x382,'XqWz')),iii1I1[IllllI(0x292,'GYE1')]=!![];return;}}}else{console[IllllI(0x3f3,'iP6w')]('\x0a开始进行\x20\x22'+ii1l1l+IllllI(0x166,'WMsW')+$[IllllI(0x32b,'wK#0')]+IllllI(0x123,'fC59'));const l1iIll=i1lIiI?.['chunks']||[];$['digBombNums']=0x0;for(let l1iIli=0x0;iI111I[IllllI(0x3ad,'a[Ww')](l1iIli,l1iIll[IllllI(0x239,'a[Ww')]);l1iIli++){const iIi1l=l1iIll[l1iIli],i1lIlI=iIi1l?.[IllllI(0x16c,'GB^e')];if(i1lIlI===0x1){const I1I1iI=iIi1l?.[IllllI(0x15e,'sQkq')];if(I1I1iI===0x4)$[IllllI(0x3d7,'GB^e')]++;continue;}$[IllllI(0x322,'7caB')]=iIi1l?.['rowIdx'],$[IllllI(0x3bd,'m!jR')]=iIi1l?.['colIdx'],await iI111I['JmRWJ'](sendRequest,iI111I[IllllI(0x332,'3To[')]),await $[IllllI(0x1f1,'sQkq')](parseInt(iI111I['McAyG'](iI111I[IllllI(0x1ab,'ZY6#')](waitTimes,0x1),0x64),0xa));const l1lliI=iI111I[IllllI(0x307,'sVKb')](l1iIll['length']-l1iIli,0x1);if($[IllllI(0x1c5,'2(dk')]){if(iI111I[IllllI(0x381,'sTv@')](IllllI(0x12e,'3xg['),IllllI(0x2ce,'wYTO'))){console[IllllI(0x190,'CaVI')](IllllI(0x1ed,'BQRv')),$[IllllI(0x27b,'2(dk')]=!![];return;}else{I1iIl1['log'](IllllI(0x224,'CaVI')),i1il['skipRun']=!![];return;}}else{if($[IllllI(0x367,'I3X7')])break;else{if(iI111I['kXCBr']($['blood'],bloodMinimum)){if(iI111I['cUWmb'](iI111I[IllllI(0x155,'h46O')],iI111I[IllllI(0x36e,'bcSz')]))lilIli[IllllI(0x15c,'w2lW')]('>\x20'+Iliili['msg']);else{console[IllllI(0x262,'kWW8')]('\x0a🙅‍♂\x20没血了，溜了溜了~');Exchange&&(iI111I[IllllI(0x3f6,'WMsW')]($[IllllI(0x3cf,'m!jR')],0x0)&&await iI111I[IllllI(0x231,'sTv@')](sendRequest,IllllI(0x221,'3To[')));await iI111I['RSbTI'](incomeSummary);return;}}}}}}$['lastPrize']&&iI111I['CTAsg'](IIIlI1,0x3)&&iI111I['pmrmL']($[IllllI(0x1d4,'9Pe!')],0x0)&&(iI111I[IllllI(0x323,'7caB')](iI111I[IllllI(0x1d9,'eLHs')],IllllI(0x2ff,'w2lW'))?await iI111I[IllllI(0x138,'Bc1L')](digChunks):IIll1[IllllI(0x325,'ijPZ')]('\x20>>\x20'+ll1il[IllllI(0x39f,'3%@a')]));}async function incomeSummary(){const liliil=l1lI1l,ili1Ii={'kQPgZ':function(ll11I,iIi1I){return ll11I(iIi1I);},'pxYeo':function(liIIl,IlI1lI){return liIIl===IlI1lI;},'lZYbl':'aDplB','xhMVM':'aOhgU','qCrbM':'round','moqQu':liliil(0x3a6,'sTv@'),'yvRNl':function(liIIi,IilllI){return liIIi!==IilllI;},'QlhSZ':'HFUqM','MXqYj':function(iI1lIi,l1lllI){return iI1lIi<l1lllI;},'VPMbD':function(llliIi){return llliIi();}};$[liliil(0x211,'eLHs')]='',await ili1Ii[liliil(0x2c4,'XqWz')](sendRequest,'happyDigHome');if(!$[liliil(0x30e,'iP6w')]?.[liliil(0x266,'I3X7')]){if(ili1Ii[liliil(0x2cb,'Bc1L')](ili1Ii[liliil(0x31a,'sVKb')],ili1Ii['lZYbl'])){console['log']('🙅‍♂\x20未能正确获取到主页信息，退出执行！'),$[liliil(0x19c,'a0u]')]=!![];return;}else llIIll[liliil(0x35f,'sVKb')]('❓'+IillIi+'\x20'+lii[liliil(0x204,'[fCF')](IllI1i));}await $['wait'](parseInt(waitTimes*0x1+0x64,0xa)),$['blood']=$[liliil(0x154,'3xg[')]?.[liliil(0x13e,'6pE7')],$['roundList']=$[liliil(0x1d0,'bcSz')]?.[liliil(0x3e5,'ZZOd')]||[];let Iilll1='';for(let i1lIll=0x0;i1lIll<$[liliil(0x1b7,'NmQD')][liliil(0x254,'3%@a')];i1lIll++){if(ili1Ii[liliil(0x3a4,'GB^e')]!==ili1Ii[liliil(0x232,'w2lW')])lI1Ill[liliil(0x274,'BQRv')]('>\x20'+lI1Ili[liliil(0x3d0,'7caB')]?.['bizMsg']);else{const liIlii=$['roundList'][i1lIll],llii1l=liIlii[ili1Ii[liliil(0x2cd,'wK#0')]],liIlil=llii1l===0x1?'入门':ili1Ii[liliil(0x2c3,'CaVI')](llii1l,0x2)?'挑战':llii1l===0x3?'终极':'未知',llii1i=liIlii[ili1Ii['moqQu']],ll11il=liIlii[liliil(0x18d,'sIt1')];if(llii1i||ll11il)switch(llii1l){case 0x1:case 0x2:case 0x3:Iilll1+='\x22'+liIlil+liliil(0x198,'NmQD')+llii1i+liliil(0x1c8,'h46O')+ll11il+'元微信现金\x20💰\x0a';break;default:break;}}}Iilll1&&(ili1Ii[liliil(0x3d3,'Ad@C')](ili1Ii[liliil(0x316,'3%@a')],ili1Ii[liliil(0x23a,'sQkq')])?i1iliI['log'](liliil(0x3f2,'I3X7')):console['log'](liliil(0x206,'XqWz')+Iilll1['trim']()));for(let iiIiII=0x0;ili1Ii['MXqYj'](iiIiII,pagination);iiIiII++){$[liliil(0x3d2,'XqWz')]=iiIiII+0x1,await ili1Ii[liliil(0x120,'GYE1')](goWithdrawal);if($['txhot'])break;}}async function goWithdrawal(){const I1iil1=l1lI1l,Iili={'gjWjY':function(Iil1,ll11lI){return Iil1(ll11lI);},'Snvwb':I1iil1(0x379,'ZZOd'),'VpzrB':function(llliI1,liIII){return llliI1>liIII;},'Wetns':function(llii11,Iillli){return llii11<Iillli;},'oeZHP':'poolBaseId','dtTdX':'prizeBaseId','foNZy':I1iil1(0x222,'N*J8'),'uSXya':function(ll11l1,ll111){return ll11l1===ll111;},'dnPyA':I1iil1(0x2a2,'ih1y'),'uANcU':'✅\x20提现成功','MwOPY':'tPejF','sCeZC':I1iil1(0x376,'iP6w'),'vjvRx':I1iil1(0x35c,'ijPZ'),'PhKrn':I1iil1(0x1dc,'Y&Ft'),'naeji':I1iil1(0x1c4,'6f]&'),'tZjET':I1iil1(0x3d1,'BQRv'),'lJDne':function(llliII,iiIiIl){return llliII!==iiIiIl;},'fPgka':'bZOJf','vBCsj':'未绑定微信','EfAGI':I1iil1(0x3b8,'wK#0'),'lCeTA':I1iil1(0x1a4,'a0u]'),'ECyuV':function(IlI1l1,liIliI){return IlI1l1<liIliI;},'tHfSY':'310','cIaGX':function(llii1I,iiIiIi){return llii1I-iiIiIi;},'rpQgS':function(l1lll1,IilI){return l1lll1+IilI;},'eNQAs':function(liIlli,lil11){return liIlli*lil11;}};$[I1iil1(0x34c,'CaVI')]='',await Iili[I1iil1(0x28e,'b4UZ')](sendRequest,Iili['Snvwb']);const iIi11=($[I1iil1(0x229,'GYE1')]['items']||[])['filter'](Iillll=>Iillll[I1iil1(0x2fd,'6f]&')]===0x4&&Iillll[I1iil1(0x302,'ih1y')]===0x0||Iillll[I1iil1(0x339,'m!jR')]===0x2);if(Iili[I1iil1(0x125,'3To[')](iIi11[I1iil1(0x18c,'CaVI')],0x0))console['log']('');for(i=0x0;Iili[I1iil1(0x38c,'I3X7')](i,iIi11[I1iil1(0x3a7,'b4UZ')]);i++){const lllI1=iIi11[i];console[I1iil1(0x115,'2(dk')]('去提现'+lllI1?.[I1iil1(0x28b,'BQRv')]+'💰'),$[I1iil1(0x3a8,'7caB')]={'prizeType':0x4,'business':business,'id':lllI1['id'],'poolBaseId':lllI1[Iili[I1iil1(0x2a0,'2zzN')]],'prizeGroupId':lllI1[I1iil1(0x133,'a[Ww')],'prizeBaseId':lllI1[Iili[I1iil1(0x2e4,'RU&#')]]},$[I1iil1(0x172,'GB^e')]='',await Iili[I1iil1(0x183,'Ad@C')](sendRequest,Iili[I1iil1(0x33a,'N*J8')]);if($[I1iil1(0x344,'sQkq')]){const III11I=$['apCashWithDraw'][I1iil1(0x193,'iP6w')],Ilii1=$[I1iil1(0x2ad,'bcSz')]['message'];if(Iili[I1iil1(0x3da,'CaVI')](III11I,I1iil1(0x271,'a0u]'))){if(Iili[I1iil1(0x2d1,'ZY6#')]!==Iili['dnPyA']){IiilII[I1iil1(0x277,'sTv@')](I1iil1(0x3c0,'6f]&')),IliI1I[I1iil1(0x36c,'ijPZ')]=!![];return;}else console['log'](Iili['uANcU']);}else{let ili1I1=![],Iill=0x0;const ili1II=MAX_RETRY;if(Ilii1[I1iil1(0x21a,'XqWz')]('上限'))console[I1iil1(0x2f6,'mQkB')](I1iil1(0x3b7,'N*J8')),!Swish&&(Iili[I1iil1(0x18e,'mQkB')](Iili['MwOPY'],Iili[I1iil1(0x278,'7caB')])?lilIii[I1iil1(0x12b,'NmQD')]=!![]:$['txhot']=!![]);else{if(Ilii1[I1iil1(0x242,'mIR2')](Iili[I1iil1(0x342,'m!jR')]))Iili['PhKrn']===Iili[I1iil1(0x358,'RU&#')]?(console['log'](Iili[I1iil1(0x374,'6f]&')]),ili1I1=!![]):llIlil[I1iil1(0x31b,'9Pe!')]('>\x20'+IIlil['msg']);else{if(Ilii1[I1iil1(0x359,'kWW8')](Iili[I1iil1(0x365,'GB^e')])){if(Iili[I1iil1(0x291,'kWW8')](I1iil1(0x1b1,'3To['),Iili[I1iil1(0x1d2,'2(dk')])){IiilIi[I1iil1(0x1ce,'NmQD')](I1iil1(0x3ba,'Ad@C')),IiilIl[I1iil1(0x27b,'2(dk')]=!![];return;}else{console['log'](I1iil1(0x39a,'Bc1L'));if(!Swish)break;}}else{if(Ilii1[I1iil1(0x17e,'9Pe!')](Iili[I1iil1(0x3b0,'Ad@C')])||Ilii1[I1iil1(0x3ab,'[fCF')](Iili['EfAGI'])){console[I1iil1(0x2f7,'sIt1')](Iili['lCeTA']);if(!Swish)break;}else{console[I1iil1(0x2f6,'mQkB')](I1iil1(0x1f7,'Ad@C')+Ilii1);if(!Swish)break;}}}}while(ili1I1&&Iili[I1iil1(0x285,'4#Z*')](Iill,ili1II)){await $[I1iil1(0x17b,'Rd#*')](0xc350),await sendRequest(Iili['foNZy']);const I1I1li=$[I1iil1(0x340,'a0u]')]['status'],l1i11=$[I1iil1(0x22a,'iP6w')]['message'];if(I1I1li===Iili[I1iil1(0x380,'fC59')])console[I1iil1(0x3c9,'ZZOd')](I1iil1(0x3ee,'sVKb')),ili1I1=![];else l1i11[I1iil1(0x28c,'2zzN')](I1iil1(0x259,'sVKb'))?Iill++:(console[I1iil1(0x2f0,'WMsW')](I1iil1(0x24e,'3To[')),ili1I1=![]);}}Iili[I1iil1(0x301,'GB^e')](i,Iili[I1iil1(0x2bd,'[fCF')](iIi11[I1iil1(0x254,'3%@a')],0x1))&&await $[I1iil1(0x2c9,'7caB')](parseInt(Iili[I1iil1(0x378,'Rd#*')](Iili[I1iil1(0x2d0,'N*J8')](Math[I1iil1(0x158,'ZZOd')](),0x7d0),0x1388),0xa));}}}async function handleResponse(IlI1li,IlI1ll){const lIillI=l1lI1l,ll11l={'sjump':'❌\x20重试提现失败：上一笔提现还未完成','uLlxF':lIillI(0x167,'Rd#*'),'wkZaj':function(III111,liIll1){return III111===liIll1;},'XLgnf':'kgJjA','dsJPw':lIillI(0x37f,'bcSz'),'ggCun':'XMFbB','CVhuY':function(l1llli,iI1lII){return l1llli!==iI1lII;},'JtirL':lIillI(0x306,'kWW8'),'CbOIC':'pGoVW','GWzmh':function(ll11iI,l1i1I){return ll11iI===l1i1I;},'PMrJC':lIillI(0x16d,'NmQD'),'bGHaf':lIillI(0x178,'a0u]'),'tGIKB':function(l1llll,I1I1ll){return l1llll===I1I1ll;},'uOMaP':'Efgix','zhjgC':'QzRkA','OBbYa':lIillI(0x1ac,'2zzN'),'NYpBy':function(lil1i,liiiil){return lil1i===liiiil;},'KhoLw':lIillI(0x2dd,'3xg['),'DYjuq':'pNTBf','pMqHF':lIillI(0x36d,'6pE7'),'XzDRl':lIillI(0x1ef,'9DAb'),'bIUeI':function(IIIIli,lllIi){return IIIIli===lllIi;},'FoyoL':function(lil1l,lllIl){return lil1l===lllIl;},'qTxyP':'uEcwn','Soqqs':lIillI(0x182,'6f]&'),'mNdlo':lIillI(0x230,'m!jR'),'GyiYF':lIillI(0x3a1,'iP6w'),'hnFFp':lIillI(0x175,'bcSz'),'FlPjN':function(Iliii,illlii){return Iliii===illlii;},'lLUWn':'OhRam','ntJOT':'boolean','nyFYf':lIillI(0x1f9,'RU&#'),'NdOnM':lIillI(0x2be,'ih1y'),'UOQEb':lIillI(0x122,'2zzN'),'eoudE':function(I1lIIi,l1i1i){return I1lIIi!==l1i1i;},'EMrrn':'lIiHw','QqNsH':function(I1iI1i,l1i1l){return I1iI1i===l1i1l;},'jDifK':function(I1iI1l,illlil){return I1iI1l===illlil;},'Bgmrw':function(Iliil,I1lIIl){return Iliil===I1lIIl;},'asiAP':lIillI(0x3db,'N*J8'),'GGbrW':function(l1ilI1,l1l1Il){return l1ilI1===l1l1Il;},'nVNSx':lIillI(0x1c9,'w2lW'),'gjUET':lIillI(0x30c,'sTv@'),'oIhNa':'JUxEu','psQWT':'OCYng'};try{switch(IlI1li){case ll11l[lIillI(0x1be,'OIES')]:if(ll11l['wkZaj'](IlI1ll?.['code'],0x0)&&IlI1ll?.[lIillI(0x146,'wK#0')]===!![])ll11l['XLgnf']===ll11l[lIillI(0x299,'wK#0')]?iillll[lIillI(0x29e,'2zzN')]('>\x20'+lIIilI[lIillI(0x15b,'6f]&')]):$[lIillI(0x153,'a0u]')]=IlI1ll['data'];else{if(IlI1ll['data']?.['bizMsg'])ll11l[lIillI(0x3bf,'RU&#')]===lIillI(0x28d,'9Pe!')?console['log']('>\x20'+IlI1ll['data']?.[lIillI(0x313,'I3X7')]+'}'):(iillli['skipRun']=!![],I1l1Ii[lIillI(0x3f3,'iP6w')]('>\x20'+I1i11i[lIillI(0x300,'bcSz')]));else{if(IlI1ll[lIillI(0x121,'2(dk')])$[lIillI(0x386,'Ad@C')]=!![],console[lIillI(0x1ce,'NmQD')]('>\x20'+IlI1ll[lIillI(0x3b1,'ZZOd')]);else IlI1ll[lIillI(0x25e,'ijPZ')]?console[lIillI(0x309,'RU&#')]('>\x20'+IlI1ll[lIillI(0x27c,'4#Z*')]):console[lIillI(0x2f7,'sIt1')]('❓'+IlI1li+'\x20'+JSON['stringify'](IlI1ll));}}break;case lIillI(0x15a,'Y&Ft'):if(ll11l[lIillI(0x3e6,'ZY6#')](IlI1ll?.[lIillI(0x130,'h46O')],0x0)&&IlI1ll?.[lIillI(0x2d9,'GB^e')]===!![])$[lIillI(0x258,'a0u]')]=IlI1ll[lIillI(0x126,'GB^e')];else{if(IlI1ll[lIillI(0x252,'OIES')]?.['bizMsg'])console['log']('>\x20'+IlI1ll[lIillI(0x1fe,'ZZOd')]?.[lIillI(0x2c6,'6pE7')]);else{if(IlI1ll['errMsg'])ll11l[lIillI(0x2df,'6f]&')](lIillI(0x352,'9DAb'),ll11l[lIillI(0x354,'wK#0')])?($[lIillI(0x338,'kWW8')]=!![],console[lIillI(0x262,'kWW8')]('>\x20'+IlI1ll[lIillI(0x240,'sIt1')])):l1iIIi[lIillI(0x2c1,'wK#0')](lIillI(0x2e5,'XqWz')+lilIi['data']?.[lIillI(0x26b,'wK#0')]+'}');else IlI1ll['msg']?ll11l[lIillI(0x27f,'BQRv')]('pGoVW',ll11l[lIillI(0x189,'ijPZ')])?I1llil[lIillI(0x1a7,'eLHs')]('❓'+I1llii+'\x20'+lilIll['stringify'](l1i111)):console[lIillI(0x330,'OIES')]('>\x20'+IlI1ll['msg']):ll11l['GWzmh'](ll11l['PMrJC'],lIillI(0x33d,'XqWz'))?IlI11['log'](lIillI(0x14e,'a[Ww')+iIIIIl):console[lIillI(0x2e3,'GB^e')]('❓'+IlI1li+'\x20'+JSON[lIillI(0x179,'XqWz')](IlI1ll));}}break;case ll11l[lIillI(0x164,'mQkB')]:if(ll11l[lIillI(0x2d8,'ijPZ')](IlI1ll?.[lIillI(0x1e2,'9DAb')],0x0)&&ll11l[lIillI(0x3cd,'3%@a')](IlI1ll?.[lIillI(0x146,'wK#0')],!![]))$[lIillI(0x195,'6f]&')]=IlI1ll[lIillI(0x1f4,'Ad@C')]||[];else{if(IlI1ll['data']?.[lIillI(0x22f,'9DAb')])ll11l[lIillI(0x3a3,'h46O')](ll11l[lIillI(0x2fa,'ZZOd')],ll11l['uOMaP'])?IIli1i[lIillI(0x3c9,'ZZOd')]('❓'+I1iIi1+'\x20'+lliil1[lIillI(0x245,'sIt1')](IIllI)):console['log']('>\x20'+IlI1ll['data']?.[lIillI(0x1af,'sIt1')]+'}');else{if(IlI1ll[lIillI(0x3af,'WMsW')])$[lIillI(0x1b2,'wYTO')]=!![],console[lIillI(0x1ce,'NmQD')]('>\x20'+IlI1ll[lIillI(0x185,'3%@a')]);else IlI1ll[lIillI(0x331,'fC59')]?console[lIillI(0x2a1,'sQkq')]('>\x20'+IlI1ll['msg']):ll11l[lIillI(0x29a,'sTv@')]!==lIillI(0x2c5,'w2lW')?console['log']('❓'+IlI1li+'\x20'+JSON[lIillI(0x2ec,'ijPZ')](IlI1ll)):(iIli11['skipRun']=!![],Iiiil[lIillI(0x212,'wYTO')]('挖宝失败\x20'+Iiiii[lIillI(0x31e,'sQkq')]));}}break;case ll11l[lIillI(0x14b,'3xg[')]:if(IlI1ll?.[lIillI(0x334,'sIt1')]===0x0&&ll11l[lIillI(0x1dd,'eLHs')](IlI1ll?.[lIillI(0x1e8,'Rd#*')],!![]))$['apTaskDetail']=IlI1ll[lIillI(0x234,'b4UZ')];else{if(IlI1ll[lIillI(0x196,'sIt1')]?.[lIillI(0x199,'mIR2')])console['log']('>\x20'+IlI1ll[lIillI(0x297,'wYTO')]?.['bizMsg']+'}');else{if(IlI1ll[lIillI(0x26a,'w2lW')])ll11l[lIillI(0x197,'3%@a')](ll11l['KhoLw'],ll11l[lIillI(0x25a,'ih1y')])?($['skipRun']=!![],console[lIillI(0x2e3,'GB^e')]('>\x20'+IlI1ll[lIillI(0x176,'sVKb')])):lilIil[lIillI(0x22e,'[fCF')](lIillI(0x391,'2(dk'));else IlI1ll[lIillI(0x3a5,'XqWz')]?console['log']('>\x20'+IlI1ll[lIillI(0x3e1,'mQkB')]):'YbLQv'===ll11l[lIillI(0x30b,'fC59')]?I11iII['log']('\x0a📢\x20结束当前关卡,\x20获得'+I1ilIi[lIillI(0x250,'BQRv')]?.[lIillI(0x3c1,'9DAb')]+'现金,\x20'+IiiiI[lIillI(0x3ef,'WMsW')]?.['redValue']+'红包'):console[lIillI(0x22e,'[fCF')]('❓'+IlI1li+'\x20'+JSON[lIillI(0x24b,'2zzN')](IlI1ll));}}break;case ll11l[lIillI(0x135,'w2lW')]:if(IlI1ll?.[lIillI(0x186,'wYTO')]===0x0&&ll11l[lIillI(0x2b3,'iP6w')](IlI1ll?.[lIillI(0x1c6,'6pE7')],!![]))$[lIillI(0x235,'kWW8')]++,console[lIillI(0x37e,'bcSz')](lIillI(0x22b,'9Pe!'));else{if(IlI1ll[lIillI(0x34d,'N*J8')]?.[lIillI(0x228,'6f]&')])console[lIillI(0x2c8,'9DAb')]('\x20>>\x20'+IlI1ll[lIillI(0x16e,'RU&#')]?.[lIillI(0x1bc,'N*J8')]+'}');else{if(IlI1ll[lIillI(0x1ee,'iP6w')])$[lIillI(0x117,'w2lW')]=!![],console[lIillI(0x318,'ZY6#')](lIillI(0x1fd,'3xg[')+IlI1ll[lIillI(0x3e4,'ijPZ')]);else IlI1ll['msg']?ll11l['CVhuY'](ll11l[lIillI(0x3aa,'4#Z*')],lIillI(0x32c,'NmQD'))?llIIli[lIillI(0x31b,'9Pe!')](lIillI(0x268,'N*J8')+lIII1I['msg']):console[lIillI(0x244,'fC59')](lIillI(0x3f4,'RU&#')+IlI1ll[lIillI(0x39f,'3%@a')]):console['log']('❓'+IlI1li+'\x20'+JSON[lIillI(0x18a,'sVKb')](IlI1ll));}}break;case lIillI(0x1df,'I3X7'):if(ll11l[lIillI(0x21b,'sIt1')](IlI1ll?.['code'],0x0)&&ll11l['FoyoL'](IlI1ll?.[lIillI(0x1b6,'mIR2')],!![]))ll11l['tGIKB'](ll11l['qTxyP'],ll11l['qTxyP'])?console[lIillI(0x248,'Rd#*')]('\x0a📢\x20结束当前关卡,\x20获得'+IlI1ll[lIillI(0x2a8,'sVKb')]?.['wxValue']+lIillI(0x209,'Ad@C')+IlI1ll[lIillI(0x1fe,'ZZOd')]?.[lIillI(0x194,'h46O')]+'红包'):IllI1I[lIillI(0x29e,'2zzN')]('❓'+liIii+'\x20'+II1ll1[lIillI(0x390,'7caB')](IlI1Ii));else{if(IlI1ll['data']?.[lIillI(0x264,'ZZOd')])ll11l['Soqqs']==='FNjss'?l1iil['log']('>\x20'+ii1l1[lIillI(0x2ee,'ZZOd')]):console[lIillI(0x3c9,'ZZOd')]('>\x20'+IlI1ll['data']?.['bizMsg']);else{if(IlI1ll[lIillI(0x35d,'a[Ww')])$['skipRun']=!![],console[lIillI(0x3e2,'I3X7')]('>\x20'+IlI1ll[lIillI(0x156,'GB^e')]);else IlI1ll[lIillI(0x2b2,'m!jR')]?ll11l[lIillI(0x143,'Bc1L')]===ll11l['GyiYF']?IilIli['log']('❓'+li1+'\x20'+illIl1['stringify'](l1llII)):console[lIillI(0x325,'ijPZ')]('>\x20'+IlI1ll[lIillI(0x1bd,'BQRv')]):console['log']('❓'+IlI1li+'\x20'+JSON['stringify'](IlI1ll));}}break;case ll11l['hnFFp']:if(ll11l[lIillI(0x12d,'3To[')](IlI1ll?.[lIillI(0x226,'a0u]')],0x0)&&IlI1ll?.['success']===!![]){const I1iI1I=IlI1ll[lIillI(0x2b0,'GYE1')]?.[lIillI(0x2b6,'sVKb')]?.[lIillI(0x227,'fC59')],illll1=IlI1ll[lIillI(0x26d,'mQkB')]?.[lIillI(0x261,'3%@a')]?.['value'],IIIIl1=IlI1ll[lIillI(0x11b,'NmQD')]?.[lIillI(0x1e0,'iP6w')];switch(I1iI1I){case 0x1:console[lIillI(0x2a1,'sQkq')](lIillI(0x329,'sTv@')+$[lIillI(0x387,'2zzN')]+','+$[lIillI(0x1ad,'7caB')]+lIillI(0x2b5,'iP6w')+illll1+'元优惠券\x20🗑️'),$[lIillI(0x243,'ijPZ')]=!![];break;case 0x2:console[lIillI(0x212,'wYTO')](lIillI(0x2bc,'eLHs')+$['rowIdx']+','+$[lIillI(0x2f4,'Rd#*')]+')\x20>\x20🧧\x20'+illll1+lIillI(0x2a9,'Rd#*'));break;case 0x3:console['log'](lIillI(0x20d,'sQkq')+$[lIillI(0x1b8,'RU&#')]+','+$[lIillI(0x205,'w2lW')]+')\x20>\x20💰\x20'+illll1+lIillI(0x2f5,'4#Z*'));break;case 0x4:$['blood']--,$[lIillI(0x1b9,'7caB')]++,console[lIillI(0x212,'wYTO')](lIillI(0x255,'OIES')+$[lIillI(0x328,'GYE1')]+','+$['colIdx']+lIillI(0x3a0,'Rd#*'));break;default:{if(ll11l[lIillI(0x336,'9DAb')](ll11l[lIillI(0x2dc,'CaVI')],ll11l[lIillI(0x14a,'2(dk')])){console['log'](lIillI(0x16f,'Bc1L')+I1iI1I+lIillI(0x399,'Ad@C'));break;}else IiIl[lIillI(0x2e3,'GB^e')](lIillI(0x1ba,'GB^e')+IiIi[lIillI(0x177,'[fCF')]);}}IIIIl1&&typeof IIIIl1===ll11l[lIillI(0x2b7,'ih1y')]&&(ll11l['nyFYf']===ll11l['nyFYf']?($['lastPrize']=!![],$[lIillI(0x2db,'7caB')]++,console[lIillI(0x3b2,'6pE7')](lIillI(0x3cc,'bcSz')+IlI1ll[lIillI(0x27a,'w2lW')]?.[lIillI(0x2da,'ZY6#')]+lIillI(0x201,'I3X7')+IlI1ll[lIillI(0x30a,'Rd#*')]?.[lIillI(0x23b,'XqWz')]+'💰')):(liIl1['log'](lIillI(0x200,'w2lW')),II1lll[lIillI(0x3df,'Rd#*')]=!![]));}else{if(IlI1ll['data']?.[lIillI(0x1bc,'N*J8')])console['log'](lIillI(0x141,'[fCF')+IlI1ll[lIillI(0x2e0,'m!jR')]?.[lIillI(0x11d,'GB^e')]+'}');else{if(IlI1ll[lIillI(0x2eb,'6pE7')]){if(ll11l[lIillI(0x383,'CaVI')](ll11l[lIillI(0x269,'9DAb')],ll11l['NdOnM']))return;else $['skipRun']=!![],console['log']('挖宝失败\x20'+IlI1ll['errMsg']);}else IlI1ll['msg']?console[lIillI(0x253,'h46O')](lIillI(0x346,'GYE1')+IlI1ll['msg']):console[lIillI(0x37e,'bcSz')]('❓'+IlI1li+'\x20'+JSON[lIillI(0x3e8,'ih1y')](IlI1ll));}}break;case ll11l['UOQEb']:if(ll11l['bIUeI'](IlI1ll?.['code'],0x0)&&IlI1ll?.[lIillI(0x21f,'6f]&')]===!![])ll11l[lIillI(0x3ec,'a0u]')](ll11l['EMrrn'],ll11l[lIillI(0x149,'[fCF')])?I1l1Il[lIillI(0x178,'a0u]')]=llIll1[lIillI(0x28a,'ih1y')]||[]:$['superRedBagList']=IlI1ll[lIillI(0x30a,'Rd#*')];else{if(ll11l[lIillI(0x1cb,'iP6w')](IlI1ll?.['code'],'605'))console[lIillI(0x2c1,'wK#0')]('>\x20滑块验证,请尝试手动验证一次或者更换IP'),$['txhot']=!![];else IlI1ll[lIillI(0x37c,'9Pe!')]?console[lIillI(0x2f0,'WMsW')](lIillI(0x356,'4#Z*')+IlI1ll[lIillI(0x1ea,'I3X7')]):console[lIillI(0x3b2,'6pE7')]('❓'+IlI1li+'\x20'+JSON[lIillI(0x19f,'mIR2')](IlI1ll));}break;case'apCashWithDraw':if(ll11l['jDifK'](IlI1ll?.[lIillI(0x3c3,'2zzN')],0x0)&&ll11l[lIillI(0x127,'m!jR')](IlI1ll?.[lIillI(0x353,'sVKb')],!![]))ll11l[lIillI(0x3c5,'[fCF')](ll11l['asiAP'],ll11l[lIillI(0x24f,'m!jR')])?(l1l1I1['skipRun']=!![],I1iIll[lIillI(0x3c9,'ZZOd')]('>\x20'+I1lliI[lIillI(0x2ab,'kWW8')])):$['apCashWithDraw']=IlI1ll[lIillI(0x1f4,'Ad@C')];else{if(ll11l[lIillI(0x310,'w2lW')](IlI1ll?.['code'],'605'))ll11l['GGbrW'](ll11l[lIillI(0x38d,'Bc1L')],ll11l['gjUET'])?lI1IiI[lIillI(0x212,'wYTO')](lIillI(0x36b,'3To[')+i1lI[lIillI(0x238,'2(dk')]()):(console['log'](lIillI(0x2c0,'XqWz')),$[lIillI(0x1db,'iP6w')]=!![]);else IlI1ll[lIillI(0x1f6,'CaVI')]?ll11l[lIillI(0x3d6,'4#Z*')]!==lIillI(0x350,'GB^e')?console['log']('>\x20失败：'+IlI1ll['errMsg']):(iliIIi[lIillI(0x2e3,'GB^e')](ll11l[lIillI(0x2ae,'GYE1')]),ill11I=![]):ll11l[lIillI(0x2de,'3%@a')]===lIillI(0x180,'sIt1')?console[lIillI(0x212,'wYTO')]('❓'+IlI1li+'\x20'+JSON['stringify'](IlI1ll)):(IiI1[lIillI(0x265,'3%@a')](lIillI(0x3c2,'wK#0')),liI[lIillI(0x364,'Ad@C')]=!![]);}break;}}catch(ll11li){console['log']('❌\x20未能正确处理\x20'+IlI1li+'\x20请求响应\x20'+(ll11li[lIillI(0x218,'ijPZ')]||ll11li));}}async function sendRequest(iliIlI){const lI1il1=l1lI1l,lI111I={'qRQYP':lI1il1(0x113,'WMsW'),'LhEDB':lI1il1(0x39c,'wYTO'),'WqqAX':lI1il1(0x188,'sIt1'),'PznGV':lI1il1(0x362,'sIt1'),'XXOBT':'happyDigHelpList','JpnQc':lI1il1(0x32d,'7caB'),'cSsrb':lI1il1(0x114,'WMsW'),'GAAaC':function(ii1II1,iliIll){return ii1II1(iliIll);},'vJfMK':lI1il1(0x34a,'I3X7'),'sbHHZ':'ios','GJEVk':lI1il1(0x25c,'w2lW'),'ttVIm':lI1il1(0x1c2,'6f]&'),'VDSXF':'133','lPUHa':'58530','liuLf':lI1il1(0x15d,'eLHs'),'ZsdrP':lI1il1(0x29d,'GB^e'),'PVLpA':lI1il1(0x1d5,'WMsW'),'mKfLC':lI1il1(0x2f2,'h46O'),'rAxbY':'apCashWithDraw','VKrDZ':lI1il1(0x24d,'b4UZ'),'Qrjjw':lI1il1(0x2f3,'b4UZ'),'YZJnC':function(llliIl,iliIli){return llliIl!==iliIli;},'kJskh':lI1il1(0x1d6,'Ad@C'),'MNAPd':'application/json,\x20text/plain,\x20*/*','WxfFf':'gzip,\x20deflate,\x20br','cTSQi':'keep-alive','fZeJP':lI1il1(0x1ec,'RU&#'),'jjemd':lI1il1(0x389,'BQRv'),'DfZGh':lI1il1(0x392,'ijPZ'),'UTALs':function(illliI,ii1III){return illliI===ii1III;},'SFoVo':lI1il1(0x3ae,'mIR2'),'EDweL':function(i11iIl,ll11ll,l11iIl){return i11iIl(ll11ll,l11iIl);},'zznaW':function(i11iIi,IIIIll){return i11iIi>=IIIIll;}};if($['skipRun'])return;let IlilI='',llIi1=null,IliIII=null,II1l=lI111I[lI1il1(0x3f5,'iP6w')],liiiiI={},II1i={};switch(iliIlI){case lI1il1(0x249,'CaVI'):II1i={'appId':lI1il1(0x298,'mQkB'),'functionId':'happyDigHome','appid':lI111I[lI1il1(0x169,'3%@a')],'clientVersion':common['getLatestAppVersion'](),'client':lI1il1(0x319,'mQkB'),'body':{'linkId':linkId,'round':$['round']},'version':lI111I[lI1il1(0x1cd,'Y&Ft')],'ua':$['UA'],'t':!![]},liiiiI=await H5st[lI1il1(0x3f7,'sIt1')](II1i),IlilI=lI1il1(0x1c1,'ZZOd'),IliIII=liiiiI[lI1il1(0x1f3,'RU&#')];break;case lI1il1(0x3b4,'a[Ww'):II1i={'appId':lI111I['PznGV'],'functionId':lI111I[lI1il1(0x337,'a[Ww')],'appid':lI111I['LhEDB'],'clientVersion':common['getLatestAppVersion'](),'client':lI1il1(0x2e9,'WMsW'),'body':{'pageNum':0x1,'pageSize':0x32,'linkId':linkId},'version':'4.4','ua':$['UA'],'t':!![]},liiiiI=await H5st['getH5st'](II1i),IlilI=lI111I[lI1il1(0x139,'9Pe!')],IliIII=liiiiI['paramsData'];break;case lI111I[lI1il1(0x137,'NmQD')]:bodystr={'linkId':linkId},IlilI=lI1il1(0x2bf,'a[Ww')+lI111I['GAAaC'](encodeURIComponent,JSON[lI1il1(0x2ef,'w2lW')](bodystr))+lI1il1(0x36f,'Bc1L')+time+lI1il1(0x22d,'BQRv');break;case lI111I['vJfMK']:II1i={'appId':lI1il1(0x20b,'sQkq'),'functionId':lI1il1(0x398,'h46O'),'appid':lI111I[lI1il1(0x225,'ijPZ')],'clientVersion':common['getLatestAppVersion'](),'client':lI111I[lI1il1(0x361,'sIt1')],'body':{'taskType':$['taskType'],'taskId':$[lI1il1(0x1f0,'N*J8')],'channel':0x4,'checkVersion':![],'taskInsert':![],'linkId':linkId,'itemId':$[lI1il1(0x247,'3xg[')]},'version':lI111I[lI1il1(0x377,'wK#0')],'ua':$['UA'],'t':!![]},liiiiI=await H5st[lI1il1(0x38f,'7caB')](II1i),IlilI=lI111I[lI1il1(0x34b,'7caB')],IliIII=liiiiI[lI1il1(0x393,'wK#0')];break;case lI111I[lI1il1(0x1c3,'GYE1')]:II1i={'appId':lI111I['ttVIm'],'functionId':lI111I[lI1il1(0x213,'OIES')],'appid':lI111I['LhEDB'],'clientVersion':common[lI1il1(0x3a2,'wK#0')](),'client':lI111I['sbHHZ'],'body':{'linkId':linkId,'taskType':$[lI1il1(0x236,'XqWz')],'taskId':$['taskId'],'channel':0x4,'cityId':lI111I[lI1il1(0x257,'2zzN')],'provinceId':'4','countyId':lI111I[lI1il1(0x192,'OIES')]},'version':'4.4','ua':$['UA'],'t':!![]},liiiiI=await H5st[lI1il1(0x22c,'sQkq')](II1i),IlilI=lI111I[lI1il1(0x184,'N*J8')],IliIII=liiiiI[lI1il1(0x1fa,'wYTO')];break;case lI111I[lI1il1(0x25b,'sIt1')]:II1i={'appId':lI111I[lI1il1(0x396,'ijPZ')],'functionId':lI1il1(0x37a,'mIR2'),'appid':lI111I[lI1il1(0x171,'GB^e')],'clientVersion':common['getLatestAppVersion'](),'client':lI111I['sbHHZ'],'body':{'round':$[lI1il1(0x2aa,'mQkB')],'rowIdx':$[lI1il1(0x39d,'6f]&')],'colIdx':$[lI1il1(0x168,'b4UZ')],'linkId':linkId},'version':lI111I[lI1il1(0x388,'7caB')],'ua':$['UA'],'t':!![]},liiiiI=await H5st[lI1il1(0x290,'m!jR')](II1i),IlilI=lI111I['JpnQc'],IliIII=liiiiI[lI1il1(0x13a,'GYE1')];break;case lI111I[lI1il1(0x2f1,'bcSz')]:II1i={'appId':lI111I[lI1il1(0x3d9,'wK#0')],'functionId':lI111I[lI1il1(0x170,'GB^e')],'appid':lI1il1(0x3c6,'bcSz'),'clientVersion':common['getLatestAppVersion'](),'client':lI111I[lI1il1(0x1ca,'[fCF')],'body':{'round':$[lI1il1(0x3d4,'NmQD')],'linkId':linkId},'version':lI111I['WqqAX'],'ua':$['UA'],'t':!![]},liiiiI=await H5st[lI1il1(0x2a4,'sVKb')](II1i),IlilI=lI1il1(0x3dd,'b4UZ'),IliIII=liiiiI[lI1il1(0x1fa,'wYTO')];break;case lI111I['mKfLC']:II1l=lI1il1(0x12a,'Y&Ft'),II1i={'appId':'f2b1d','functionId':lI111I['mKfLC'],'appid':lI111I['LhEDB'],'clientVersion':common[lI1il1(0x343,'N*J8')](),'client':lI111I[lI1il1(0x148,'NmQD')],'body':{'pageNum':$[lI1il1(0x24c,'a[Ww')],'pageSize':0x32,'linkId':linkId,'associateLinkId':'','business':business},'version':lI111I[lI1il1(0x19e,'eLHs')],'ua':$['UA'],'t':!![]},liiiiI=await H5st[lI1il1(0x2a4,'sVKb')](II1i),IlilI=lI111I[lI1il1(0x27d,'ijPZ')],llIi1=liiiiI[lI1il1(0x263,'4#Z*')];break;case lI111I[lI1il1(0x32f,'WMsW')]:II1l=lI111I[lI1il1(0x38a,'ijPZ')],II1i={'appId':lI1il1(0x293,'Y&Ft'),'functionId':lI111I[lI1il1(0x1e6,'a[Ww')],'appid':lI111I[lI1il1(0x12f,'m!jR')],'clientVersion':common[lI1il1(0x2af,'GB^e')](),'client':lI1il1(0x1ae,'h46O'),'body':{'linkId':linkId,'businessSource':lI111I[lI1il1(0x281,'Rd#*')],'base':$['apCashWithDrawBaseParams']},'version':lI111I['WqqAX'],'ua':$['UA'],'t':!![]},liiiiI=await H5st[lI1il1(0x1e9,'6pE7')](II1i),IlilI=lI1il1(0x3cb,'Ad@C'),llIi1=liiiiI['paramsData'];break;default:console[lI1il1(0x3b9,'Y&Ft')]('❌\x20未知请求\x20'+iliIlI);return;}const illli1={'loginType':'2','loginWQBiz':lI1il1(0x33c,'a0u]'),'uuid':$[lI1il1(0x2d3,'GYE1')],'lang':lI1il1(0x17f,'CaVI'),'osVersion':lI1il1(0x142,'sIt1'),'partner':'-1','cthr':'1','x-api-eid-token':$[lI1il1(0x1f8,'bcSz')]};llIi1&&(llIi1={...llIi1,...illli1});IliIII&&(lI111I[lI1il1(0x279,'h46O')](lI111I[lI1il1(0x384,'wK#0')],lI111I['kJskh'])?li1Ii[lI1il1(0x1fc,'6pE7')]=Iliiii[lI1il1(0x3ef,'WMsW')]:IliIII={...IliIII,...illli1});const I1lII1={'url':IlilI,'method':II1l,'headers':{'Accept':lI111I[lI1il1(0x3f8,'3xg[')],'Accept-Encoding':lI111I[lI1il1(0x3ed,'bcSz')],'Accept-Language':'zh-cn','Connection':lI111I[lI1il1(0x2d4,'mQkB')],'Content-Type':lI111I['fZeJP'],'Cookie':cookie,'Host':lI1il1(0x294,'ijPZ'),'Referer':'https://bnzf.jd.com/index?activityId='+linkId+lI1il1(0x32e,'eLHs'),'Origin':lI111I[lI1il1(0x31d,'2zzN')],'x-rp-client':lI111I['DfZGh'],'User-Agent':$['UA']},'params':IliIII,'data':llIi1,'timeout':0x7530,'httpsTlsOptions':[lI111I[lI1il1(0x288,'3To[')]][lI1il1(0x1f2,'3xg[')](iliIlI)?common[lI1il1(0x39e,'Rd#*')]():null};lI111I['UTALs'](II1l,lI111I[lI1il1(0x162,'sVKb')])&&(delete I1lII1[lI1il1(0x34d,'N*J8')],delete I1lII1[lI1il1(0x13f,'ijPZ')][lI1il1(0x1e3,'fC59')]);!IliIII&&delete I1lII1[lI1il1(0x31c,'w2lW')];const Ill111=0x1;let I1iI11=0x0,II11=null,l1ilII=![];while(I1iI11<Ill111){I1iI11>0x0&&(lI111I['YZJnC'](lI111I[lI1il1(0x351,'Bc1L')],lI111I[lI1il1(0x129,'h46O')])?ii1I1i={...llI,...llliI}:await $[lI1il1(0x2ed,'w2lW')](0x3e8));const II1I=await common[lI1il1(0x161,'bcSz')](I1lII1);if(!II1I['success']){if('TcoUw'!==lI1il1(0x273,'b4UZ'))lllii['message'][lI1il1(0x1a3,'ZZOd')](iI11Ii);else{II11=lI1il1(0x287,'OIES')+iliIlI+'\x20请求失败\x20➜\x20'+II1I[lI1il1(0x18f,'RU&#')],I1iI11++;continue;}}if(!II1I?.[lI1il1(0x2b0,'GYE1')]){II11=lI1il1(0x147,'Y&Ft')+iliIlI+lI1il1(0x1de,'bcSz'),I1iI11++;continue;}lI111I['EDweL'](handleResponse,iliIlI,II1I['data']),l1ilII=![];break;}lI111I[lI1il1(0x326,'4#Z*')](I1iI11,Ill111)&&(console[lI1il1(0x262,'kWW8')](II11),l1ilII&&($['outFlag']=!![],$[lI1il1(0x21c,'sVKb')]&&$[lI1il1(0x348,'9Pe!')][lI1il1(0x1da,'3To[')](II11)));}function gen_jda_cookie(){const liliii=l1lI1l,IliII1={'APCMi':function(i1I11,I1I1i1){return i1I11*I1I1i1;},'kFrTm':function(i1I1l,i1I1i){return i1I1l(i1I1i);},'gBSmb':function(IIiiII,llIiI){return IIiiII-llIiI;},'bHhVD':function(Ilill,Ilili){return Ilill+Ilili;},'EpIfL':function(I1ll1I,Iii1I1){return I1ll1I*Iii1I1;},'uRSrS':'kong','ExiBS':liliii(0x2fe,'CaVI'),'WXLCc':liliii(0x3c4,'Ad@C')},l1iIi1='3';let i1I1I=Math['floor'](IliII1['APCMi'](0x8ca6bff,Math['random']()))['toString'](),llIil=[...IliII1['kFrTm'](Array,0xc)][liliii(0x360,'kWW8')](()=>Math[liliii(0x366,'2(dk')](Math['random']()*0xa))[liliii(0x37d,'GYE1')](''),llIii=IliII1[liliii(0x19b,'ZZOd')](timestamp(),0x30d40),IIiiI1=llIii+Math[liliii(0x36a,'ZY6#')](Math['random']()*0x186a0),IIIIi1=IIiiI1+Math[liliii(0x216,'[fCF')](IliII1[liliii(0x2e2,'WMsW')](Math[liliii(0x124,'iP6w')](),0x2710)),ii1IIl=IliII1[liliii(0x289,'w2lW')](llIii,Math[liliii(0x207,'ijPZ')](IliII1['EpIfL'](Math[liliii(0x158,'ZZOd')](),0x186a0))),ii1IIi=[i1I1I,''+llIii+llIil,llIii[liliii(0x260,'kWW8')](),IIiiI1[liliii(0x1c7,'2(dk')](),IIIIi1[liliii(0x303,'6f]&')](),l1iIi1][liliii(0x165,'I3X7')]('.'),I1ll1l=[i1I1I,llIil['slice'](-0x2),''+llIii+llIil+'|'+l1iIi1,IIIIi1['toString']()][liliii(0x241,'kWW8')]('.'),I1ll1i=i1I1I,i11iII=[i1I1I,IliII1[liliii(0x3ca,'iP6w')],IliII1[liliii(0x11a,'Y&Ft')],IliII1[liliii(0x308,'fC59')],'202054b9f71e49e6a228adc8e665f848',ii1IIl[liliii(0x20f,'XqWz')]()],lI1Ii1=encodeURIComponent(i11iII[liliii(0x395,'2zzN')]('|'));return{'jda':ii1IIi,'jdb':I1ll1l,'jdc':I1ll1i,'jdv':lI1Ii1};}function timestamp(){const iIiilI=l1lI1l,i11iI1={'BarIe':function(Iii1II,llIlI){return Iii1II/llIlI;}};return Math[iIiilI(0x276,'ZZOd')](i11iI1['BarIe'](Date[iIiilI(0x16a,'Ad@C')](),0x3e8));}var version_ = 'jsjiami.com.v7';
// prettier-ignore
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
      const { execSync } = require("child_process");
      execSync("sleep 15");
      return this.send.call(this.env, t);
    }
    post(t) {
      const { execSync } = require("child_process");
      execSync("sleep 15");
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
      const { execSync } = require("child_process");
      execSync("sleep 15");
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
      const { execSync } = require("child_process");
      execSync("sleep 15");
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

