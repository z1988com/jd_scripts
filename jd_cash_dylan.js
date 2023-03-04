/*
签到领现金
活动入口：京东APP搜索领现金进入
更新时间：2022-08-02
定时自定义，一天跑两次就行了
 */

const $ = new Env('签到领现金_Dylan');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let jdNotify = true;
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
const JD_API_HOST = 'https://api.m.jd.com/client.action';
let allMessage = '';

!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      message = '';
      await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      await jdCash()
    }
  }
  if (allMessage) {
    if ($.isNode() && (process.env.CASH_NOTIFY_CONTROL ? process.env.CASH_NOTIFY_CONTROL === 'false' : !!1)) await notify.sendNotify($.name, allMessage);
    $.msg($.name, '', allMessage);
  }
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })
async function jdCash() {
  $.signMoney = 0;

  await appindex()
  await index()
  await appindex(true)
}

async function appindex(info=false) {
  let functionId = "cash_homePage"
  let sign = `body=%7B%7D&build=167968&client=apple&clientVersion=10.4.0&d_brand=apple&d_model=iPhone13%2C3&ef=1&eid=eidI25488122a6s9Uqq6qodtQx6rgQhFlHkaE1KqvCRbzRnPZgP/93P%2BzfeY8nyrCw1FMzlQ1pE4X9JdmFEYKWdd1VxutadX0iJ6xedL%2BVBrSHCeDGV1&ep=%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22screen%22%3A%22CJO3CMeyDJCy%22%2C%22osVersion%22%3A%22CJUkDK%3D%3D%22%2C%22openudid%22%3A%22CJSmCWU0DNYnYtS0DtGmCJY0YJcmDwCmYJC0DNHwZNc5ZQU2DJc3Zq%3D%3D%22%2C%22area%22%3A%22CJZpCJCmC180ENcnCv80ENc1EK%3D%3D%22%2C%22uuid%22%3A%22aQf1ZRdxb2r4ovZ1EJZhcxYlVNZSZz09%22%7D%2C%22ts%22%3A1648428189%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D&ext=%7B%22prstate%22%3A%220%22%2C%22pvcStu%22%3A%221%22%7D&isBackground=N&joycious=104&lang=zh_CN&networkType=3g&networklibtype=JDNetworkBaseAF&partner=apple&rfs=0000&scope=11&sign=98c0ea91318ef1313786d86d832f1d4d&st=1648428208392&sv=101&uemps=0-0&uts=0f31TVRjBSv7E8yLFU2g86XnPdLdKKyuazYDek9RnAdkKCbH50GbhlCSab3I2jwM04d75h5qDPiLMTl0I3dvlb3OFGnqX9NrfHUwDOpTEaxACTwWl6n//EOFSpqtKDhg%2BvlR1wAh0RSZ3J87iAf36Ce6nonmQvQAva7GoJM9Nbtdah0dgzXboUL2m5YqrJ1hWoxhCecLcrUWWbHTyAY3Rw%3D%3D`
  return new Promise((resolve) => {
    $.post(apptaskUrl(functionId, sign), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`appindex API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if(data.code===0 && data.data.result){
              if(info){
                if (message) {
                  message += `当前现金：${data.data.result.totalMoney}元`;
                  allMessage += `京东账号${$.index}${$.nickName}\n${message}${$.index !== cookiesArr.length ? '\n\n' : ''}`;
                }
                console.log(`\n\n当前现金：${data.data.result.totalMoney}元`);
                return
              }
              $.signMoney = data.data.result.totalMoney;
              // console.log(`您的助力码为${data.data.result.invitedCode}`)
              //console.log(`\n【京东账号${$.index}（${$.UserName}）的好友互助码】${data.data.result.invitedCode}\n`);
              let helpInfo = {
                'inviteCode': data.data.result.invitedCode,
                'shareDate': data.data.result.shareDate
              }
              $.shareDate = data.data.result.shareDate;
              // $.log(`shareDate: ${$.shareDate}`)
              // console.log(helpInfo)
              for (let task of data.data.result.taskInfos) {
                if (task.type === 4) {
                  for (let i = task.doTimes; i < task.times; ++i) {
                    console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                    await appdoTask(task.type, task.jump.params.skuId)
                    await $.wait(5000)
                  }
                } else if (task.type === 2) {
                  for (let i = task.doTimes; i < task.times; ++i) {
                    console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                    await appdoTask(task.type, task.jump.params.shopId)
                    await $.wait(5000)
                  }
                } else if (task.type === 30) {
                  for (let i = task.doTimes; i < task.times; ++i) {
                    console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                    await appdoTask(task.type, task.jump.params.path)
                    await $.wait(5000)
                  }
                } else if (task.type === 16 || task.type===3 || task.type===5 || task.type===17 || task.type===35)  {
                  for (let i = task.doTimes; i < task.times; ++i) {
                    console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                    await appdoTask(task.type, task.jump.params.url)
                    await $.wait(5000)
                  }
                }else if (task.type === 7) {
                  for (let i = task.doTimes; i < task.times; ++i) {
                    console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                    await appdoTask(task.type, 1)
                    await $.wait(5000)
                  }
                }
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
function index() {
  return new Promise((resolve) => {
    $.get(taskUrl("cash_mob_home"), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`index API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.code === 0 && data.data.result) {
              for (let task of data.data.result.taskInfos) {
                if (task.type === 4) {
                  for (let i = task.doTimes; i < task.times; ++i) {
                    console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                    await doTask(task.type, task.jump.params.skuId)
                    await $.wait(5000)
                  }
                } else if (task.type === 2) {
                  for (let i = task.doTimes; i < task.times; ++i) {
                    console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                    await doTask(task.type, task.jump.params.shopId)
                    await $.wait(5000)
                  }
                } else if (task.type === 31) {
                  for (let i = task.doTimes; i < task.times; ++i) {
                    console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                    await doTask(task.type, task.jump.params.path)
                    await $.wait(5000)
                  }
                } else if (task.type === 16 || task.type===3 || task.type===5 || task.type===17 || task.type===21) {
                  for (let i = task.doTimes; i < task.times; ++i) {
                    console.log(`去做${task.name}任务 ${i+1}/${task.times}`)
                    await doTask(task.type, task.jump.params.url)
                    await $.wait(5000)
                  }
                }
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

async function appdoTask(type,taskInfo) {
  let functionId = 'cash_doTask'
  let body = {"type":type,"taskInfo":taskInfo}
  for (let i=0; i<3; i++){
  var sign = await _0x5f5391(functionId, body)
  if(sign) break;
  await $.wait(5000)
  } 
  if(sign){
    return new Promise((resolve) => {
      $.post(apptaskUrl(functionId, sign), (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`)
            console.log(`appdoTask API请求失败，请检查网路重试`)
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              if(data.code === 0) {
                console.log(`任务完成成功`)
              } else {
                console.log(JSON.stringify(data))
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
}
function doTask(type,taskInfo) {
  return new Promise((resolve) => {
    $.get(taskUrl("cash_doTask",{"type":type,"taskInfo":taskInfo}), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`doTask API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if( data.code === 0){
              console.log(`任务完成成功`)
              // console.log(data.data.result.taskInfos)
            }else{
              console.log(data)
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
function _0x5f5391(_0xc35c7a, _0x5c2be3) {
    var _0x3ff539 = {
        'qnkzK': function _0xef2dd8(_0x4d8bf6, _0x2a8877) {
            return _0x4d8bf6(_0x2a8877);
        }
    };
    var _0x392cb3 = '';
    let _0xea6584 = 'functionId=' + _0xc35c7a + '&body=' + _0x3ff539['qnkzK'](encodeURIComponent, JSON['stringify'](_0x5c2be3));
    return new Promise(_0x43920b => {
        var _0x2f634c = {
            'eJJWu': function _0x14f4a2(_0x189ed5, _0x20f992) {
                return _0x189ed5 === _0x20f992;
            },
            'lqdkv': 'JCa',
            'mjijq': 'https://jd.nbplay.xyz/dylan/getsign',
            'jevvt': 'application/x-www-form-urlencoded',
            'FUioU': '连接DY服务成功',
            'xKHvI': function _0x475a98(_0x25fc74, _0x5774d4) {
                return _0x25fc74 != _0x5774d4;
            },
            'uunzQ': function _0xd6bde5(_0x15839b, _0x46ee8b) {
                return _0x15839b(_0x46ee8b);
            },
            'Lvnwu': '签名获取失败,换个时间再试.'
        };
        if (_0x2f634c['eJJWu'](_0x2f634c['lqdkv'], _0x2f634c['lqdkv'])) {
            let _0x3ea383 = {
                'url': _0x2f634c['mjijq'],
                'body': _0xea6584,
                'headers': {
                    'Content-Type': _0x2f634c['jevvt']
                },
                'timeout': 0x7530
            };
            $['post'](_0x3ea383, async (_0x3e64e3, _0x81717a, _0x272316) => {
                var _0x288cda = {
                    'HlBBx': function _0x4cbdf3(_0x158797, _0x24fb51) {
                        return _0x158797 !== _0x24fb51;
                    },
                    'SvFFX': 'PTC',
                    'BhduL': 'Xnt',
                    'WUUwX': function _0x3c5053(_0x48851f, _0x1427a4) {
                        return _0x48851f == _0x1427a4;
                    },
                    'qRdEK': function _0x207c67(_0x31b831, _0x4995bc) {
                        return _0x31b831 === _0x4995bc;
                    },
                    'DXVal': 'fAY',
                    'yUNRl': 'XMT',
                    'cHvzH': function _0xaf3377(_0x38ce65, _0x5c1d79) {
                        return _0x38ce65(_0x5c1d79);
                    },
                    'TMiVM': '连接DY服务成功',
                    'LVGAH': function _0xc9ecf1(_0x156581, _0x2f4ef2) {
                        return _0x156581 != _0x2f4ef2;
                    },
                    'GjOSG': function _0x506080(_0x2f9ba2, _0x30b248) {
                        return _0x2f9ba2 === _0x30b248;
                    },
                    'frjAj': 'Jlb',
                    'HttIM': 'BuJ',
                    'kgfpv': function _0x2e37cc(_0x416391, _0x4c4ca3) {
                        return _0x416391(_0x4c4ca3);
                    },
                    'wVZsV': '签名获取失败,换个时间再试.',
                    'OFGOB': function _0x47e6cf(_0x316dc4, _0x546e6a) {
                        return _0x316dc4 !== _0x546e6a;
                    },
                    'gZjJY': 'Hrg',
                    'fKCzV': 'zHw',
                    'wXbiY': function _0xf35a32(_0xc215bb, _0x46a2c1) {
                        return _0xc215bb + _0x46a2c1;
                    },
                    'MBDum': '版本号，js会定期弹窗，还请支持我们的工作',
                    'omqbh': function _0x15b6fc(_0x133176, _0x2c8fab) {
                        return _0x133176 === _0x2c8fab;
                    },
                    'SHnyi': 'Zbh',
                    'ndGTX': '连接连接DY服务失败，重试。。。',
                    'JxXxR': 'ert',
                    'GJBBw': 'undefined',
                    'aMCmx': function _0x16efe8(_0x5322b9, _0x86ec8a) {
                        return _0x5322b9 === _0x86ec8a;
                    },
                    'QcCsO': 'jsjiami.com.v5',
                    'UEGLE': function _0x2d8384(_0x3d3070, _0x37f2a3) {
                        return _0x3d3070 + _0x37f2a3;
                    },
                    'NaWLn': '删除版本号，js会定期弹窗'
                };
                try {
                    if (_0x272316) {
                        if (_0x288cda['HlBBx'](_0x288cda['SvFFX'], _0x288cda['BhduL'])) {
                            _0x272316 = JSON['parse'](_0x272316);
                            if (_0x272316 && _0x288cda['WUUwX'](_0x272316['code'], 0x0)) {
                                if (_0x288cda['qRdEK'](_0x288cda['DXVal'], _0x288cda['yUNRl'])) {
                                    _0x288cda['cHvzH'](_0x43920b, _0x392cb3);
                                } else {
                                    console['log'](_0x288cda['TMiVM']);
                                    if (_0x272316['data']) {
                                        _0x392cb3 = _0x272316['data'] || '';
                                    }
                                    if (_0x288cda['LVGAH'](_0x392cb3, '')) {
                                        if (_0x288cda['GjOSG'](_0x288cda['frjAj'], _0x288cda['HttIM'])) {
                                            $['logErr'](e, _0x81717a);
                                        } else {
                                            _0x288cda['kgfpv'](_0x43920b, _0x392cb3);
                                        }
                                    } else console['log'](_0x288cda['wVZsV']);
                                }
                            } else {
                                if (_0x288cda['OFGOB'](_0x288cda['gZjJY'], _0x288cda['fKCzV'])) {
                                    console['log'](_0x272316['msg']);
                                } else {
                                    console['log'](_0x272316['msg']);
                                }
                            }
                        } else {
                            w[c](_0x288cda['wXbiY']('删除', _0x288cda['MBDum']));
                        }
                    } else {
                        if (_0x288cda['omqbh'](_0x288cda['SHnyi'], _0x288cda['SHnyi'])) {
                            console['log'](_0x288cda['ndGTX']);
                        } else {
                            c = 'al';
                            try {
                                c += _0x288cda['JxXxR'];
                                b = encode_version;
                                if (!(_0x288cda['OFGOB'](typeof b, _0x288cda['GJBBw']) && _0x288cda['aMCmx'](b, _0x288cda['QcCsO']))) {
                                    w[c](_0x288cda['UEGLE']('删除', _0x288cda['MBDum']));
                                }
                            } catch (_0x2f8729) {
                                w[c](_0x288cda['NaWLn']);
                            }
                        }
                    }
                } catch (_0x32234b) {
                    $['logErr'](_0x32234b, _0x81717a);
                } finally {
                    _0x288cda['kgfpv'](_0x43920b, _0x392cb3);
                }
            });
        } else {
            console['log'](_0x2f634c['FUioU']);
            if (_0xea6584['data']) {
                _0x392cb3 = _0xea6584['data'] || '';
            }
            if (_0x2f634c['xKHvI'](_0x392cb3, '')) {
                _0x2f634c['uunzQ'](_0x43920b, _0x392cb3);
            } else console['log'](_0x2f634c['Lvnwu']);
        }
    });
};
(function(_0x155952, _0x50db9e, _0x32dc5f) {
    var _0x529a04 = function() {
        var _0x26c92a = !![];
        return function(_0x216265, _0x518ec2) {
            var _0x51d69e = _0x26c92a ? function() {
                if (_0x518ec2) {
                    var _0x3fbec9 = _0x518ec2['apply'](_0x216265, arguments);
                    _0x518ec2 = null;
                    return _0x3fbec9;
                }
            } : function() {};
            _0x26c92a = ![];
            return _0x51d69e;
        };
    }();
    var _0x35bbf9 = _0x529a04(this, function() {
        var _0x453188 = function() {
                return 'dev';
            },
            _0x518bc4 = function() {
                return 'window';
            };
        var _0x5f1d7f = function() {
            var _0xc0728a = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
            return !_0xc0728a['test'](_0x453188['toString']());
        };
        var _0x49246a = function() {
            var _0x42aa1b = new RegExp('(\\\\[x|u](\\w){2,4})+');
            return _0x42aa1b['test'](_0x518bc4['toString']());
        };
        var _0x428533 = function(_0x285c50) {
            var _0x2b6ac4 = ~-0x1 >> 0x1 + 0xff % 0x0;
            if (_0x285c50['indexOf']('i' === _0x2b6ac4)) {
                _0x375256(_0x285c50);
            }
        };
        var _0x375256 = function(_0x4aa102) {
            var _0x1265b0 = ~-0x4 >> 0x1 + 0xff % 0x0;
            if (_0x4aa102['indexOf']((!![] + '')[0x3]) !== _0x1265b0) {
                _0x428533(_0x4aa102);
            }
        };
        if (!_0x5f1d7f()) {
            if (!_0x49246a()) {
                _0x428533('indеxOf');
            } else {
                _0x428533('indexOf');
            }
        } else {
            _0x428533('indеxOf');
        }
    });
    _0x35bbf9();
    var _0x38b1d3 = {
        'AZVdm': 'ert',
        'GGWoW': function _0x34c501(_0x16b66f, _0x7ea67b) {
            return _0x16b66f !== _0x7ea67b;
        },
        'jAPrq': 'undefined',
        'WAEub': function _0x3ce93d(_0x5b4432, _0x451f5b) {
            return _0x5b4432 === _0x451f5b;
        },
        'iTBJa': 'jsjiami.com.v5',
        'EEwcl': 'kvr',
        'VRcwi': 'dsK',
        'MGpgs': function _0x230b8e(_0x45ffa7, _0x49b34) {
            return _0x45ffa7 !== _0x49b34;
        },
        'YrecC': function _0x4ffa1d(_0xb9b23e, _0x6beea4) {
            return _0xb9b23e === _0x6beea4;
        },
        'BZUzg': function _0x381da9(_0x2d657e, _0x233750) {
            return _0x2d657e + _0x233750;
        },
        'oGtxu': '版本号，js会定期弹窗，还请支持我们的工作',
        'luroO': function _0x259a86(_0x565c60, _0x11dc37) {
            return _0x565c60 + _0x11dc37;
        },
        'SLsjp': '删除版本号，js会定期弹窗'
    };
    _0x32dc5f = 'al';
    try {
        _0x32dc5f += _0x38b1d3['AZVdm'];
        _0x50db9e = encode_version;
        if (!(_0x38b1d3['GGWoW'](typeof _0x50db9e, _0x38b1d3['jAPrq']) && _0x38b1d3['WAEub'](_0x50db9e, _0x38b1d3['iTBJa']))) {
            if (_0x38b1d3['WAEub'](_0x38b1d3['EEwcl'], _0x38b1d3['VRcwi'])) {
                _0x32dc5f += _0x38b1d3['AZVdm'];
                _0x50db9e = encode_version;
                if (!(_0x38b1d3['MGpgs'](typeof _0x50db9e, _0x38b1d3['jAPrq']) && _0x38b1d3['YrecC'](_0x50db9e, _0x38b1d3['iTBJa']))) {
                    _0x155952[_0x32dc5f](_0x38b1d3['BZUzg']('删除', _0x38b1d3['oGtxu']));
                }
            } else {
                _0x155952[_0x32dc5f](_0x38b1d3['luroO']('删除', _0x38b1d3['oGtxu']));
            }
        }
    } catch (_0x1231b8) {
        _0x155952[_0x32dc5f](_0x38b1d3['SLsjp']);
    }
}());;
encode_version = 'jsjiami.com.v5';


function randomString(e) {
  e = e || 32;
  let t = "abcdef0123456789", a = t.length, n = "";
  for (let i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
}
function showMsg() {
  return new Promise(resolve => {
    if (!jdNotify) {
      $.msg($.name, '', `${message}`);
    } else {
      $.log(`京东账号${$.index}${$.nickName}\n${message}`);
    }
    resolve()
  })
}


function deepCopy(obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        //判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepCopy(obj[key]);
        } else {
          //如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

function apptaskUrl(functionId = "", body = "") {
  return {
    url: `${JD_API_HOST}?functionId=${functionId}`,
    body,
    headers: {
      'Cookie': cookie,
      'Host': 'api.m.jd.com',
      'Connection': 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Referer': '',
      'User-Agent': 'JD4iPhone/167774 (iPhone; iOS 14.7.1; Scale/3.00)',
      'Accept-Language': 'zh-Hans-CN;q=1',
      'Accept-Encoding': 'gzip, deflate, br',
    }
  }
}
function taskUrl(functionId, body = {}) {
  return {
    url: `${JD_API_HOST}?functionId=${functionId}&body=${encodeURIComponent(JSON.stringify(body))}&appid=CashRewardMiniH5Env&appid=9.1.0`,
    headers: {
      'Cookie': cookie,
      'Host': 'api.m.jd.com',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json',
      'Referer': 'http://wq.jd.com/wxapp/pages/hd-interaction/index/index',
      'User-Agent': $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      'Accept-Language': 'zh-cn',
      'Accept-Encoding': 'gzip, deflate, br',
    }
  }
}


function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
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
function randomString(e) {
  e = e || 32;
  let t = "abcdef0123456789", a = t.length, n = "";
  for (i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
}
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
