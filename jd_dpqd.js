/*
常规店铺签到
环境变量: export DPQDTK="token1&token2" 或 export DPQDTK="token1\ntoken2"

定时建议自行修改
cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#常规店铺签到
1 1 1 1 * jd_dpqd.js, tag=常规店铺签到, enabled=true
*/

const $ = new Env('常规店铺签到')
var version_='jsjiami.com.v7';const IIIlii=iii1II;function iii1II(_0x28ab08,_0xcbeae3){const _0x43e161=Iii11l();return iii1II=function(_0x38dc96,_0x6a09d7){_0x38dc96=_0x38dc96-0x1d5;let _0x5462f7=_0x43e161[_0x38dc96];if(iii1II['fVxbrE']===undefined){var _0x71f5b7=function(_0x1cb797){const _0x3234b1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x305a8d='',_0x23b9eb='';for(let _0x352f65=0x0,_0xe4a74a,_0x514a3a,_0xa944fd=0x0;_0x514a3a=_0x1cb797['charAt'](_0xa944fd++);~_0x514a3a&&(_0xe4a74a=_0x352f65%0x4?_0xe4a74a*0x40+_0x514a3a:_0x514a3a,_0x352f65++%0x4)?_0x305a8d+=String['fromCharCode'](0xff&_0xe4a74a>>(-0x2*_0x352f65&0x6)):0x0){_0x514a3a=_0x3234b1['indexOf'](_0x514a3a);}for(let _0x8259f9=0x0,_0x38a507=_0x305a8d['length'];_0x8259f9<_0x38a507;_0x8259f9++){_0x23b9eb+='%'+('00'+_0x305a8d['charCodeAt'](_0x8259f9)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x23b9eb);};const _0x3d1b9e=function(_0xd67d41,_0x50ef3d){let _0x517be4=[],_0x2072e7=0x0,_0x210a6e,_0x4684b9='';_0xd67d41=_0x71f5b7(_0xd67d41);let _0x450e83;for(_0x450e83=0x0;_0x450e83<0x100;_0x450e83++){_0x517be4[_0x450e83]=_0x450e83;}for(_0x450e83=0x0;_0x450e83<0x100;_0x450e83++){_0x2072e7=(_0x2072e7+_0x517be4[_0x450e83]+_0x50ef3d['charCodeAt'](_0x450e83%_0x50ef3d['length']))%0x100,_0x210a6e=_0x517be4[_0x450e83],_0x517be4[_0x450e83]=_0x517be4[_0x2072e7],_0x517be4[_0x2072e7]=_0x210a6e;}_0x450e83=0x0,_0x2072e7=0x0;for(let _0x41e406=0x0;_0x41e406<_0xd67d41['length'];_0x41e406++){_0x450e83=(_0x450e83+0x1)%0x100,_0x2072e7=(_0x2072e7+_0x517be4[_0x450e83])%0x100,_0x210a6e=_0x517be4[_0x450e83],_0x517be4[_0x450e83]=_0x517be4[_0x2072e7],_0x517be4[_0x2072e7]=_0x210a6e,_0x4684b9+=String['fromCharCode'](_0xd67d41['charCodeAt'](_0x41e406)^_0x517be4[(_0x517be4[_0x450e83]+_0x517be4[_0x2072e7])%0x100]);}return _0x4684b9;};iii1II['DiKzOp']=_0x3d1b9e,_0x28ab08=arguments,iii1II['fVxbrE']=!![];}const _0x1565f6=_0x43e161[0x0],_0x65aff5=_0x38dc96+_0x1565f6,_0x59d5e2=_0x28ab08[_0x65aff5];return!_0x59d5e2?(iii1II['vLCuOu']===undefined&&(iii1II['vLCuOu']=!![]),_0x5462f7=iii1II['DiKzOp'](_0x5462f7,_0x6a09d7),_0x28ab08[_0x65aff5]=_0x5462f7):_0x5462f7=_0x59d5e2,_0x5462f7;},iii1II(_0x28ab08,_0xcbeae3);}function Iii11l(){const ii1i1i=(function(){return[version_,'GljDHsxYjMiPaMmUCPiXwk.cdIomSI.SlTvd7BYW==','mc3cICo9uW','ymo2s8k6wCoPpSoYW6NcTeTjmq','kqFdSr/dSa','WRLHW6nN','56YW5yQD5OQV5yMz','W6KXWRldS8oe','WQjLW6r0sCk4','5B295yQR5BwF562I5yMWlq','cwaIW649','hfxdRCo1mmkVg8kPF8oYWPDSWOlcPgD4W7uxW5JdTvCaWO/cOSoNWQFcRSkGWPHNwSkLWQFdLwSrWRTUi8k2a0b4W6bAjmoaW7VdPSkOWQ9ZW4VdHCo9arNdVYddULqwvSk9W5lcKc0MBSoJW5lcVg7dO8kODej0W6RcR3ddSCorW6NdRCo9WR/dUsqLmmovwCoYb8k9W6NcS8owWQ0sgXBcTSoCWQhdQ8ojmmoptXrZWOqve8k+zhVdHdldI8o4W4FcQvzNyaVdPCo3W61xfx8','CcRcK2Cyd8kK','hw/cQIPL','kSksACo0W6u','tCkjW4L5','W5PIW4Ku','WOLsm8kyxq','W50zW5nfcMS','jrhdSbK','WPFdOmoLWOxdV8kBu8kIWQJcImkjW5ZdOX0','WQ/cUev1W4O','W47cUCkUBmoO','WR3cRCkuWPJcUmoPEN3cRW','W5VcGmkfs8ogoq','nSomh1ba','W59YzCkvWRG','dZxcKSofwq','W4RcUmk8W57cPa','ntVdHaJdSa','W5lcNXfdkW','baRcK8oYrW','W4hcKwzqWR9tWPS','WPtNUztMNlxML7ZPL4lVVia','WR0tcSoCW4a','ycRdMK8','iqZcGNiMEmo9WRNcQKy9gfxdK8keWRjrgSoMWOddJxxdK8ktW5BcSmoFW4CeW4SLoCkeW6CnoSonWRhcQchcP8onW5HLp8ktW4jqWRbBhIeUdMhdQhddNSkDWPDtW6bEW5ZdGCoVlMXkomkzyfpdVSoYWRVdLCoyacS','oCkEl8oooa','xSkhW59Vjq','aSkpWQikW4C','Fs7dJgmj','nCkmWRxdUv7cUWqCadv8qXZdKINdJmkEW4m','B+w5RUMqJ+MsUUAmTo++MSkUp1zodCo4nrODzmksWOVdT8oVFdpcJ8oQWPXfW7GIW6/cHc8ccCk7t3BdJdW','dX3cQSoBFSki','lmogW4VcNSoM','WONcHSk8WPhcUa','k1lcVsvw','EshcLCofW6K','WRijWOFcRxO','W7qYWOddRmoYmCokjg5aW4pOR5NMS5tLP5ZOTRFIGOFVUBO','W53cMbLsnGe','l8kbWPSJW6m','aNm1W7quW7OJW4RcImk+W7ldPICZW6PTWORcVmkilSoFWQTetfTcAezFeJhdTrTlF8kFF1lcS2qLurPGW6JdOW/cTSkHjcFdISkAW7xdPaJcTsldLSkzuhSyWRiEW6D7WRxcMYRcRCoXW5ddM8kUW4nojqisx8oEWOq/WPSHWQHzWP0kW43dIcRcTCoMywNcJ8kgDLakEdGOWQ/cSSoCz8kNWObKgSk2iSolW6bvWOvbWOSSW5zJvaqecmoIa8okWOtdRvhcT3VdGGSdkvFcJ3nbW5NcVhXiW5NcSZq0W7RdTuaAi8oLcmkdvmkOqaJdG2tcJfxdISo4qSkatCkyyCo4cf7cUJKDW7flgSkzW7KeW4KHW6VdV1ldLCofW4iaW6HUvmkYfKyDlrDkr8omhSkaC8olwSoLjIOEuZxdKmkDWQSCWO9ieCkpi8oJnSoKW4ldLKf5WODRWP7dLCoBW5ewW7StWQtdTZiOWOVcTcdcG8oBW5NdTCoJW4ddNHRcRSkcW5mdsWdcLtVcNhtdSCkXW5jmWPJcQLKqWRaCWRSMpJhcUMfbF8kBrf7cOJahWQ1ZsmoLW6nwjmkND8kYEKtcPJZdNCkcW63dVGeGy8kWW5RcO8oPo3TVgSkOsINcQSkVArBdGYfVBSkyWODCwL1pWPnDEsH6WQhdQspdPCkpWP3dGCkfxmopiCkHWQjPW4WwlmoSW4ZcS0CZW53cUmohiSkrW7ldNSoEWPy5WPldU8k2WQK+g0adqWmNnXNdICkbv8kglSoLW6uOESoos1/dQchcMJ/cNSksue9uWPNcLmkjsa/cLCoiASoHWRiquCkPlSoJW45qWOOmWPL8t8kHW5xdHmoNWRzRWRBcNCkBrCkTomkSFhxcHgjSiYuaCvldRuJcGmkIW6DtWR9qW4DbWQDCEZm+bCobmepcSYX4B8k9WP7dNcxdTqrae8oJW6RdUaDWtxRcHIP9WO7cLSoAWR7cGGJdQfzzW6XAW6ZcMHzxpqGSzcFdQmkJWOxdQdNdSSkDW63cMSoQW4msWONdVxxcQJJcNmk3W5dcL3BcKKldNMSszSoFgSkWWQddGSoVg8kbW7uTWPfqy8kUW5PbhMRdI8kkW6FdRmkHcCoJxIqBpZ/cQSkWW5rxhmkkWPZdKmo/WP7dLSkgWPO1jCkRW7tcQ8kAx8oLW4jwdKddJmkDucBcVb1xwCkepwngW5ldSSk9rxpcJdZdU2jtnG1RoCkSWRi5DSkTW4dcPX99WQD5W7NdTZNdSa','o8oIWOpdHEIVH+AYMUwLGEI1Ko+9O+IURoAIK+AFJEE8V+I1MUMgGEITRq','W4SEWPLdnJuMySo6asylowG','W50tW5PNdhe','vmoiW4X3WQhcUCo+iMfWeSkZvq','pCokWQRcTL0','W7ZdGtjZzq','W7ZcHYfkkG','cCkwWPi','nConWOpcSLvBjHK4','rCkFW5q','mcFdGr7dKG','mfVcSd1W','asNcT3Gr','eGldUXFdVW','dmoAmq','lbxcHNyS','gvNcRcPLsrK','W7BcUCktW5hcNa','WPD5bCoBDmo4ktZcSee','w8krW502h8kw','WOObfmoIW6lcL8ohfai','WOn4dSofpCkBqINcL0PmW5bbWP3dTXpdPtqH','W6FdMCk5rKG','W4icW4zPfN4','n8ouW5BcTmoR','WQbHW6D2','x+ISSEMgTEAuS+EyL+w+J+IoSEwnI8krWPLTzqvKW5fyWR/cSa7dGx/dLHuVW7RdGdu2vwdcQdy+WQKFWOD9cSkTefXGWPalBJefarhcGmoDW5a','b8oIW5lcLCo9','WPHVW58auSoqW7fGcCkbeK8KW7lcOLxdQdPTemkyymoJWRbQWO/dVW','WRSjWRe','W6GXWOu','W7pcV8kZ','W7JdR8kW','W7/dPb5JqhpdP3GCW7BcLW','W6m8WOhdTa','iSocW5G','eeddRCoK','hmoaWObRrCoiW7mmWOddGCkKW7vC','W5FcNHi','Ac7dGeKshG','t8kFW4exeCkyWQm','BY/cGCoLW6K','W5nWW5C','WQtcRatdNSor','AHtcQCowW5a','b8oiWOhcU28','WPRdMCk7vmkOWRG','mCk5W64zWPldNCowAq','nWJdVa4','jXVdGJtdHq','W7CYWPRdSW','oHhcTComrW','W5xcUSkYW4tcJSoifCo2WOtcS8kkW6e','W5dcThi4W6NcPmoADSoIWQBcUmoYwq','FK/cMg1W','mSk+vCopW6C','D8olWQBdM1O','dJhcOe0W','tspcJ8og','WONdLdXzWRS','BCogWR3dQfxcQJKr','WOSccmoyW7S','W6rWsZy','W4VdTa94EhVdVMq','W5dcVx06W6ZcQCowzSoMWQBcS8oMFq','E8kBW50/bW','l8kyWOCPW7G','eu/dRW','BvjWbgS','m8kJW48IWR0','ggVcRfNdQq','W6z4uYnHW4q','W6fHtZTTW5vwqCkqWOZdHCkYW55HW53cRSkwumoLn8kYWOPBWRRdIXi/h0OIWPGN','tsVcGCoiW67cImkhWR4','WP7cHmkWW6pcTmoCiG','mXZdTHNdRviF','W6WQWPBcTSoWW77cVmoDomo+W50rjx4BvXxdLSoajmo2lCopW7BcPCoZW4KijKZcQvrStGeKhx/cHmoCwL7cMfhcScxdV8kOjJLyW5BdHXPXWO4hWPmFWP3dOWuKx8ohhW1iW5GStw42W4XhwmkPtCkkymkNeqldHaeRiINcTmoqWRdcOmok','W7pcPratFa','W6FdJmkJzwO','p1VdM8oica','W6ZcOmk4zSoM','wwntm1RcMa','W5m5W6fTdG','nhhcRxtdNa','W5jSW5C','nXWO','emovWR/cLN8','oqBdUaNdNW','jtNcPvmJ','WOldRfxcNhu','WQZcR8knWO7cTmogCNRcSSofzgXdWOSrWQ0','W4JcH8oSfmoAW7SNW5NcPqa7qWS','zspcI8oaW6O','W4mGW7Tlfa','umogWPddUNS','D8ogWQxdQvW','WR/cTKH+W58','W59HW5uaBq','kdhdRWddOq','W7GeWPOx','cCoBmKnF','ew3dTmoHmG','WQxcS8oUduFcKSkEcSk+xa','WOvLc8k6Ca','eg/dICowjG','dSo8debb','zSo/sSkWwCoOn8opW5pcTxPBma','ee7dT8oG','WQX/W6b2WPK','c04DW40p','bhGZ','W41MW54dDCorW5fWh8kD','W5qyW5buexq5','hSk6W7OcWR8','d03cRIvH','56+f5yUb5OML5yQ5','bmouiKC','5P2H6k685BM16zc85zko56s0W5tcLY3dNCoCudGEef5EWPxdRHNcKoIUUEAZOEwMRUI3PEkcOE+6SG','lrRdTHxdNW','WPNcOLi','cmkBEmo4W4DlWPpdGa','W6G7WOZcOCo3WQW','WPqgbCoKW5S','W7FcPmkGF8oHsmoHWOJdJN7cGYNcO8o7rmkalCkIcSoXx8kFuNSYW5ldMY7cIIKUkmowW4lcSbvCW7xdPxJdL30AdqyEwmkRWQW0trT4qCkoWPzVy8krDmkNWQanbsyiWONcImkEW6tcGCkXzCkbu8okjqiVEq','tvFcT8ozzmkeWRFdOdldQSk5wW','B2r4jNG','lmk2rmoxW4XOWQVdOG','5PYy6k+O5BUq6zcm5zce56AJfCkfW6VcR8oqW7pdICo1f2ZcLmkHD8ktWP3OR4ZMSRdLPihOTj3IGyZVU5a'].concat((function(){return['r0NcU2bjW4ehehi','W4RcVCk6','WPv8nSkeyq','WOyNWPFcO1K','WO1RW51JuG','WP1nW7TeWOHOr8oc','WQnEW4OpW6i','WQ/cR2b1W6u','WO3cQX0','W5y/t8kb','WP/cV0jVW6G','l8kXW78bWRK','Evj2fG','W4HPeSkaDSoA','nSk+W7KxWQ7dNCoyEef6WRbaW5W7bH8TcmoQWO7dGtf7EZddRKDmW6KFpSoVWOJdVa5SbSozvsa','WPldPhNcLvq','b38AW6GV','5BA756Yg5yUg77Yy','WPhdPMa','W78wWPK9WQq','W5BcGHi','WPjMW7HHWQu','jSkNfCoMqCkPB8oPW74','h8omWOJcVeq','W67dNGTAFG','dK/dTmoRoG','ivBcR37dKW','W6OQWQRcNmoQ','ka7cSLO7','44k25OYc56EN44kL6kY75yEH6i+r5y2f5lMH5lUb6lEk5y255lQ5gunCW77cPsRcU+EzIUAmMEs8N+EwIcL4W6urk8kg55UG5lIA5lM7562u5yQz6i2Q5yYA','WR4vWPJcQ24a','WPpcTub86kY65RgI5AEp6lEh77+j6kYn5QkB5PYi576H6ls96yEh6k6I','W7BdR8kZrG','zYtdGfOpgmonWOKzWPCBxmk9smoxe8olhw8ebG','WQXhW6aCW7S','WOFdKxJcG0u','W6NcMLrZWOe','W7FdR8k4velcPG','W6mcWRFdTZK','iCkWsCoiW6TNWRpdOSodW6iiWOa0WQrJW5ZdU8o+hcyh','WQPHW75Y','WRNLUApPK6RPK4VMJAJVVlRcLSkwWRhcIIJdL8oFW715hZ7dOmkSWOixW6fuW5NcG2RdJcWFh27dOX3dMmkEW5FdRaq','W7RcOuPcWQi','nmofWPlcHCoMo8kBjmotW6ymWQRcItXIWPClW47cUtjvW4XgeHZdG8kvhNrvpKW+WOddKa','WP3dU1JcLulcOq','W7hcSXPXjW','s8k1W55poq','WPlcPuDxW4pdG8orWQW','W7NcSe9XWOHIWQVcPq','itJdPXddHW','FSonWQu','W6NcUrSiv8kvk0yjzmoiWPBdTSkSW5LdWR18WQFdSSkW','lmkrW6hdMfhcGHS4jq','WRKpWRxcR0qesqa','W4zLW7SRFW','A8orWRRdTLxcLbKggW','eEw4ToMqQEMrSUAoLE+/GHGbgYSGeKhcMJ/dKmkeW5ikWPBcQSo1CaGPW7hdIfKPxf/dSSk2jwuZDxi','d2lLP5pOTOBcOCoj5y215zI7dSox','iJFcSmo6ra','rCkdW4XZgG','tCkjW4j3kwJLT6xLPPRMLBj+BmkS','WR5HW7HGwa','tu7cRgzL','mSkUcCohiG','WQ9lW58','W77cUbPtaW','tSkvW4C','h8kyWRKuW7C','omkJW7SMWPu','W7ZcSCkGBmo6','kb3dOqRdUXTdySoDg1NdTCk9W4vjsCovfmkQWPevpCk1mCkAW6BdNSkiWP5zg8k8W6KVWRNcOSo6tHxdHLaOECotqCobW6/cK8kfW4dcSCkSWQRcKq','kHFcMhy8lmkNW7pcKGf6dX7dQ8kvW7bxoCoIW5ZdMW','W7xcLxLwWQC','WO9jW6fb','wW7cM2S2dWTEWP1tWQlcQCkByr7cNCkGWO8lFhBdSSk+n8obWOzmW6hcTqG1sqjXW58e','W5/cM3DWWR9s','tIpcKG','WP/dG1JcJhe','W7y5WR7dI8oR','hNi6W6abWRmlW4a','W7VcUCkNBmo9b8kGW5m','qdFdSa3cOSkZpJ3dSfpdPaxcIsG','rmkdW5q','WRa0WRNcLM4','WRjuW60oW7CceW','WP0ueSoQ','gfpcQGTLxHa','jqFdOW','WRJdQWvTx3tdH3GPW73dJHfLc0SVkSoBo8kJd8kuW7FcLX3cMLiS','tmkqzbrthSojxalcJZ/cLCoEW6tcLmowWRHDWRPEW4JcUH3dNaFcLhCBkmoaW4G','W4iRrCkA','CSonWRFdQuG','WRhdV8k+A8orhCkHW4ZdJY4','tY3cHq','WPRcOb3dMmoAaSoZ','hmktiSo0aW','jSoHjfvD','kEw7LEMqMoMrNEAmPE+/S8kcWQ9aWODbl1iVW5qRWOVdTCo3WRJdSHLtW6tcOSoDW6yEfCk7W4HrW41clCoufhu','W5ZcUNzmWPS','W7TurCkbWQC','562k5yIn5AAF5yQ477Y9','W6HutW5Q','W4OLw8kSASoB','W5jMW54at8ow','W6qYWOFdPG','WODcW7rkWOu','jCkNcSoWcq','W68wWOpdOCoK','WQ9JW756s8k5W4ldVmk7WP13','FSkfW7PjbW','fSoIW5JcNSoe','dSouo0m','ycldNu0ja8owWPG','wmkdW4n4jx9EW48','l3FcUszE','ef3cTsS','WPpcRKH6W5S','W4xcVCkZW4dcPCohe8o2WP3cR8kfW7tdNcHzx8oWWOaMW4ldIG','jZFcLwes','BLTTb0ZcSSkGWQ/dKuJdOCkr','nCkjBCo2W5u','W5uxW4bH','WOBdUcXdWQ4','W5RcHZf+pq','W7m5wCkBvSoihtO','WO7cPaFdJSon','ESoaWQFdPuBcSqqmjJ8','CIRdGLSdoCoE','5BYL5yUV5BsE566N5yImhG','W5NcJwPeWRG','5lMr5lIw6lwH5yYb','B2nVoNO','cmobiLzuxCkwfK/cIcpdGSofWRJcJCoEWRfbWRGF','W7xcVCkXzmo7','eqxdSIldOq','W4ntw8khWQu','W7qRWPhcRG','pCofW5dcTSoQDSkskCkHW7LxW7u','WQXuW7SNW7K','i8oEW5G','W41NFSkjWPG','WObgW5jwfvegta','WQr1W55lsa','W4XrumknWQ8','sIZcHSogW7G','wvZcUq','pX3cMgyWmmkBW7i','W5hdJSkDzwm','W7BcSCkkW6hcIW','WQ1RpSkhwG','W6C2WOpcTmocWRa','aNqhW5C+','udlcJSokW7q','f8obWPJcSePxisO1DW','amk2nSoujq','W4SRsmkkCa','W6XIgSkOwa','W67cTWeD','W4aJuSkiDmofcq','W7LMW5uaBW','W7CRWOhcPCoMWRFdOa','W5xcGx5wWRLjWPhcJmkmWP4','W58FW5DRnNGXBW','WORdMCk1vSkNWQ16W70','W5WfW5m','rCkdW4HSBwX7W4jmoW','W6W8WPq','r1xcPNLPW4CdeW','u1JcVq','W7eixG','jaJdOrS','44kA5lM65lMP6lwA5y+j','W6zEW6ddTt9rebWtoWa6WOm','W7/cJejXWOO','bJtcQCoyEW','W7ldQa0','W4dcPwL3WRu','W4zswa','W4L/gW','grddQCo/rmomWOpdP33dSSoIeJ3cGa5IFmobCmoQv3jBW77cSclcQ8oiWPajrb7cRw1B','W45Cs8kd'].concat((function(){return['WQNcVSkjWOm','W6HykSkoBq','W58kWOeDWQSZrXBdPG','566R5yIbW4OdW7eymq/dJLqxWR3dQb9oW4/dRcdcHvddO+IVGEAXTUwKL+I0Q+kaOU+4TG','omk1hW','W7imWO0DWOW3ydC','aCktWROaW7i','W5n3EtH0','WPJdP3e','mXVcK8oPtq','W4zswmkNWQ9S','44gH5lQP5lUu6lsA5y2M','W53dQavHx3/dMuvR','o8oeW7lcTCor','W68XDSkCyG','WQFcUCoLdb7dSCo2o8k0FvVdGua','wSkeW4e7hSkCWQifWOS','xCkFW789e8kAWQCgWQhdSmkeW4r2W54','amkwWQedW6a','W6ZdOH5Pwx7dTG','peC3W4aq','W7uEWONdHCo2','WRXFW70pW64','WOPVdSoBECokbdBcHe1CW4X6WRdcTGtdPtW','W7PtW6eJB8o1','jCk6sCoPW7bLWPBdPSoHW7emWOK','C8kQf8oKbCk0uSoKW6VcLcqJu33cMbJdVSkIvSokySkxfNhcOCkuk2u','kSohb0jW','W7qjwSk7EWqMW5y','nmk6sCoyW6D7WO/dOW','omk3cSoFW6W','5lQ35lQ/6lE15y27','rYpcM8oq','jCk0eCo5cCkwB8oUW68','5P666kYY5BIA6zkiWPVdMCopENT3WRflW5OxegaFmmom6kYj5Roq5AwP6ls54OcP77MG','WOPQ5Asn6lEmoCkj5y+V5zQ/W4Ge','ufZcVwG','W6y0WRq3WRi','dh4NW6ClWRqSW5a','laBdSJ/dULm','rqVcP8ozzmkfWO/dRIRcVSoT','df3cTIPRua','W4HbstLd','WRjuW60','gSonWOS','CmogWQRdVW','W4tcMKLRW7xdL8o4','W7akWOK','WRRcR8kXsKxcOmkZamktvXFdOZdcNMrtWPO6u8ob','fSkjWPKTW6u','W591v8kbWRe','WRS9dSoXW4q','WRSgsCkNzWr+W5ziW4jise3cIw/dMuLNW7pdKSoeW63cOhZdKCkvWPeyWQGWyXFdQWlcRmosW7Lge3OHx8k8W5RcQSo6WPiLntFcR8kCW4JcVmk4hSkjW7mHCCkVWQZdNw4zmmkKca88WO9oW5ldVCotW4hdKYPDFsZdS8kxWPSVW6xdKmoVob9Ks8kAW7u','W6SaxCkDEa','iCk+tmo4W4C','WPVdOmkRACkb','lGJdUb8','gNJcMWP2','efxcUYvkxbvu','W5DLW4eXxW','jCk6u8oyW6n9WQC','W4FcHmkUW4xcJW','WR0Ln8opW5JcUW','W6RdQczLvxVdV2qkW6ZcGuOTbG','i8kTWOC3W6S','ddhcMxCf','W5qoW5fJ','WQPTW6X5WOK','eLpcVW','kMeNW40D','W4GPWRNdKCoS','W4rCuSkh','W7xcMwnAWQ4','Ee7dGdbMDCoIW5FcPZbyjra','W6KQWRqbWQC','cu46W44I','dXFcOW','kCkMW4qqWQ0','fSkbW6WxWQu','u1JcVw1gW5ip','WQXjW6esW6m','oCkPhW','iLJdKmoZja','WRLuW7CnW6iE','WO/dLmk0qSkmWR5EW7W','W4HJgW','562J5yId5AsZ6lws','mXBcM2WS','W7BdK8k+v3m','W6pcUaeztmkApvCgDCoeWOldP8kBW55WWQTyWQhdSCkxtmkqW4vHW4lcGSoolmkTqIqEW5xcVepcVdq1W4O','WPHyW7LjWPK','WQZdMSkiz8kM','5BAe56+C5yUC77+d','WPxcUCkEWQ3cSa','WPlcTSk8WOFdVW','j8odW5VcO8oq','WOZdOgBcKLa','bSodW5NcICoY','5BAW566H5yIx776M','WPdcO0m','WRnSW5dcKSoIWP7dUmk/eW','WRVcOY3dKSoy','f8kyWPSGW77dRq','ACknW4bUkq','WP9Rnmkt','bHBcSG','hwRcRW','WOBcRaJdLSoMemo7fG','cCkCWPSJW6xdQa','iqRdOrpdVKGynmoJdG','xeNcVxLuWPXbwxJdPKiFxrhcHx9JW4qWCsK1','W516bCkrBW','ofVcRcbt','WPHaW7PqWQn7y8od','dmkkWRSRW7xdPq','W55KuCkKtmkEW7/dGv9MWQ5Wr8o9','5lUL5lMK5P+75yQJ5zI96l6w5zIm56US5PAY5OYD','W6WQWPBcTSoWW77cVmoDomo+W50rjx4BvXxdLSoajmo2l8otW7BdVW','5BQ56zcC5zkG56ES772A','p8kLdCouba','WRjlW7aAWRPwfGxdHfqtWQRdUq','WP0uh8o4','W7pcSXCXuq','W7pcOCk4W4BcGSoic8o2','B8omWP/dO1pcUrWqpc8HqqddKG','56+a5yIZ5AEM5yUw77YH','CYxdL3O3','WPb1W48pW4W','WQXQW55zWQC','W47cPSkPW4tcV8ktsCk8WQxdQmocW6pcLXbihCo2WQmIWP4','W6VcRmkEWOFcS8oazw/cT8kxoa','xmknW4y','vSkoW5Hilq','m8obn29G','wflcRG','nSk+W7KxWQ7dNCoyEef6WRbaW5W7bH8TcmoQWO7dGtf7EZddUKTFW4y/jCoQWPldSbLHcmoEvtS','e8omWPO','44gE5lIb5lQJ6lEG5y2F','W5qRuSknD8oe','i8kJfSoNcCkOt8o5','hgtcVf/dUq','hgpdLmoteG','hLtdJCoDnG','W7pcMmkeW4ZcLa','W5JdNIfSWPhdNCky','lCkVWPmgW6C','a8oAofjocComxhFdJ2tdLCkoWOdcNmkCWRDIWRXdW4W','WONdJtrqWRG','W7ddPGDV','W79vtSk3WPi','W4KwWOSeWOW3ydC','W7m7WPZdT8oPiSolyq','e8kHdmoToW','WQnOW7aRW58','WQbPW6L4C8kXW5VdOa','Fmo6WPVdQxu','bKddT8oHlmo4','dSkCW6ieWRu','W5XaW6OIBq','g8oEW5RcTmoMDSkmkq','mmkXWRyfW7q','jSk1W68/WRm','xdpdUxCn','WRJcNhv4W5NdQq','eSkyWPWW','abFcQ8oxy8kf','WQ7dJrb+WOW','FCocWR/dV1u','WR4iWRlcOxi','W5WfvCk1Fq','W4jjs8ksWQ4KW5RcTWDaW5awWOJcQbhdHSkWbglcItddV8kXxbm','WPL3W6vKua','iHRcQmoEEq','WO9mW6zpWRu','CGNcG8olW5O','WOBcScddKSoD','W40UWO8EWPG','W5q9WRxcK8oe','CvXL'];}()));}()));}());Iii11l=function(){return ii1i1i;};return Iii11l();};(function(i11ll,Ili11I,i11li,Illil,iil11i,Ill1II,llIili){return i11ll=i11ll>>0x1,Ill1II='hs',llIili='hs',function(Illii,iIlI11,IIII,l1IIlI,iil111){const illil1=iii1II;l1IIlI='tfi',Ill1II=l1IIlI+Ill1II,iil111='up',llIili+=iil111,Ill1II=IIII(Ill1II),llIili=IIII(llIili),IIII=0x0;const llIil1=Illii();while(!![]&&--Illil+iIlI11){try{l1IIlI=parseInt(illil1(0x353,'vVuM'))/0x1+-parseInt(illil1(0x3c7,'@d@W'))/0x2*(-parseInt(illil1(0x379,'[]Wt'))/0x3)+-parseInt(illil1(0x348,'vVuM'))/0x4*(parseInt(illil1(0x205,'Iwf)'))/0x5)+parseInt(illil1(0x338,'1%T1'))/0x6+parseInt(illil1(0x23c,'[]Wt'))/0x7*(parseInt(illil1(0x25b,'Ytlu'))/0x8)+-parseInt(illil1(0x2bd,'vVuM'))/0x9*(-parseInt(illil1(0x276,'8DSL'))/0xa)+-parseInt(illil1(0x3e4,'z6bS'))/0xb;}catch(iiiIII){l1IIlI=IIII;}finally{iil111=llIil1[Ill1II]();if(i11ll<=Illil)IIII?iil11i?l1IIlI=iil111:iil11i=iil111:IIII=iil111;else{if(IIII==iil11i['replace'](/[lMDSYBPWIXxkHdCwTGU=]/g,'')){if(l1IIlI===iIlI11){llIil1['un'+Ill1II](iil111);break;}llIil1[llIili](iil111);}}}}}(i11li,Ili11I,function(Ill1I1,lIi1ii,lIi1il,liI11i,l1l1l,illilI,IiIli){return lIi1ii='\x73\x70\x6c\x69\x74',Ill1I1=arguments[0x0],Ill1I1=Ill1I1[lIi1ii](''),lIi1il='\x72\x65\x76\x65\x72\x73\x65',Ill1I1=Ill1I1[lIi1il]('\x76'),liI11i='\x6a\x6f\x69\x6e',(0x138ec9,Ill1I1[liI11i](''));});}(0x17e,0xcb0a4,Iii11l,0xc1),Iii11l)&&(version_=Iii11l);const lil1i=$[IIIlii(0x3bf,'zV!T')]()?require(IIIlii(0x38f,'yHz8')):'',liiiil=$['isNode']()?require(IIIlii(0x3ef,'hLLt')):'',IIIIli=require(IIIlii(0x25d,'[]Wt')),lllIi=require(IIIlii(0x307,'@d@W'));let lil1l=[];process[IIIlii(0x296,'yHz8')][IIIlii(0x2d0,'Ytlu')]&&(process[IIIlii(0x38a,'Ytlu')]['DPQDTK'][IIIlii(0x249,'**3u')]('\x0a')?lil1l=[...process['env'][IIIlii(0x26b,'iY$I')][IIIlii(0x363,'hLLt')]('\x0a'),...lil1l]:lil1l=[...process[IIIlii(0x3ea,'l9qH')][IIIlii(0x245,'FabQ')][IIIlii(0x287,'nE2A')]('&'),...lil1l]);let lllIl=[],Iliii='',illlii='',I1lIIi;const l1i1i='https://api.m.jd.com/api?appid=interCenter_shopSign';$[IIIlii(0x1f6,'@d@W')]='',$[IIIlii(0x34f,'@d@W')]='',$[IIIlii(0x334,'w4Oo')]=![];if($['isNode']()){Object[IIIlii(0x25a,'@d@W')](liiiil)[IIIlii(0x3e9,'OmL(')](l1i11l=>{const iil11I=IIIlii;lllIl[iil11I(0x39c,'q#qB')](liiiil[l1i11l]);});if(process[IIIlii(0x3a5,'zV!T')]['JD_DEBUG']&&process[IIIlii(0x2b5,'RyF)')][IIIlii(0x3c3,'OGWi')]===IIIlii(0x1f5,'Gz3!'))console['log']=()=>{};}else{let liiil1=$[IIIlii(0x323,'OmL(')]('CookiesJD')||'[]';liiil1=lil1I(liiil1),lllIl=liiil1[IIIlii(0x209,'js!k')](lllII=>lllII[IIIlii(0x3b8,'[]Wt')]),lllIl[IIIlii(0x1d6,'Gz3!')](),lllIl['push'](...[$[IIIlii(0x27c,'js!k')](IIIlii(0x22f,']Ar7')),$[IIIlii(0x269,'t)h*')]('CookieJD')]),lllIl['reverse'](),lllIl=lllIl[IIIlii(0x310,'w2Bk')](l11iII=>l11iII!==''&&l11iII!==null&&l11iII!==undefined);}!(async()=>{const iII1II=IIIlii,l1i11i={'eLmdq':function(l11iI1,IliiI){return l11iI1!==IliiI;},'KxvGG':function(lI111i,I1lIII){return lI111i||I1lIII;},'yvyvm':function(liIlll,I1iI1I){return liIlll<I1iI1I;},'ScDIh':function(illll1,IIIIl1){return illll1*IIIIl1;},'uRQrx':function(liiilI,lI111l){return liiilI===lI111l;},'Ajwpc':iII1II(0x262,'**3u'),'tXtnT':iII1II(0x2e0,'yHz8'),'EIouP':'https://bean.m.jd.com/bean/signIndex.action','mscoW':iII1II(0x311,'Y5dI'),'oNfyV':function(liiii1,IIiiIl){return liiii1(IIiiIl);},'vYiAI':function(l1ilIl,IIiiIi){return l1ilIl+IIiiIi;},'WcPHp':iII1II(0x31f,'8DSL'),'znmny':'sPahG','aQrjO':function(l1ilIi,l11iIi){return l1ilIi(l11iIi);},'pNTdZ':function(ll11li){return ll11li();},'OrYCm':function(iliIlI,lI111I,IlilI){return iliIlI(lI111I,IlilI);}};if(!lllIl[0x0]){if(l1i11i[iII1II(0x2fb,'l9qH')](l1i11i[iII1II(0x384,'niJ3')],l1i11i[iII1II(0x2ef,'O@gF')]))lI1IIl[iII1II(0x342,'niJ3')]=i1ilI[iII1II(0x352,'w4Oo')];else{$[iII1II(0x22a,'%9O&')]($[iII1II(0x32c,'EXMF')],iII1II(0x3b0,'&Ir$'),'https://bean.m.jd.com/bean/signIndex.action',{'open-url':l1i11i[iII1II(0x26e,'8DSL')]});return;}}for(let IliIII=0x0;l1i11i[iII1II(0x29c,'%9O&')](IliIII,lllIl[iII1II(0x309,'yHz8')]);IliIII++){if(lllIl[IliIII]){if(l1i11i[iII1II(0x389,'l9qH')]!==l1i11i[iII1II(0x38d,'iY$I')])illIil['isNode']()&&(llI1I1['msg'](IlIlil['name'],'',iII1II(0x238,'z6bS')+lIli1I[iII1II(0x359,'z6bS')]+'】'+II1il[iII1II(0x267,'OmL(')]+'\x0a'+lllI11),I1lIll+='【京东账号'+I1lIli[iII1II(0x2d5,'Q5At')]+'】'+II1ii[iII1II(0x3c8,'Q5At')]+'\x0a'+IIIIII+(l1i11i[iII1II(0x226,'yHz8')](lillII[iII1II(0x3ee,'@d@W')],ii1ilI[iII1II(0x315,'Iwf)')])?'\x0a\x0a':''));else{Iliii=lllIl[IliIII],$['UserName']=l1i11i[iII1II(0x1da,'OGWi')](decodeURIComponent,Iliii[iII1II(0x2b9,'z6bS')](/pt_pin=([^; ]+)(?=;?)/)&&Iliii[iII1II(0x213,'q#qB')](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$['index']=l1i11i['vYiAI'](IliIII,0x1),$['isLogin']=!![],$[iII1II(0x232,']Ar7')]='',I1lIIi='',console['log']('\x0a******开始【京东账号'+$[iII1II(0x243,'kyiK')]+'】'+($[iII1II(0x2c7,'EXMF')]||$[iII1II(0x352,'w4Oo')])+'******\x0a');if(!$['isLogin']){if(l1i11i[iII1II(0x378,'XV(Z')](l1i11i['WcPHp'],'LDQwP')){$[iII1II(0x3a7,'w2Bk')]($[iII1II(0x274,'$(KT')],'【提示】cookie已失效',iII1II(0x1fa,'O@gF')+$[iII1II(0x377,'UoW5')]+'\x20'+($[iII1II(0x298,'Gz3!')]||$[iII1II(0x2cc,'GbfI')])+iII1II(0x32d,'0kO$'),{'open-url':l1i11i[iII1II(0x3d4,'w2Bk')]});if($[iII1II(0x29f,'Y5dI')]()){if(l1i11i[iII1II(0x284,'8DSL')]!==l1i11i[iII1II(0x3ac,'XV(Z')]){i1iIi1=l1i11i['KxvGG'](l1l1il,0x20);let II1i='abcdef0123456789',illli1=II1i[iII1II(0x280,'kyiK')],I1lII1='';for(I11i1I=0x0;l1i11i[iII1II(0x3b5,'kyiK')](iliIi1,l1l1ii);Il1i1I++)I1lII1+=II1i[iII1II(0x20e,'0K5W')](Ii1iii[iII1II(0x207,'$(KT')](l1i11i['ScDIh'](iIIilI[iII1II(0x2c9,'XV(Z')](),illli1)));return I1lII1;}else await lil1i[iII1II(0x382,'FabQ')]($['name']+iII1II(0x3cf,'aTce')+$[iII1II(0x1f4,'q#qB')],iII1II(0x24c,'@d@W')+$[iII1II(0x3aa,'RyF)')]+'\x20'+$['UserName']+'\x0a请重新登录获取cookie');}continue;}else lilIli[iII1II(0x235,'zV!T')]('','❌\x20'+Iliili[iII1II(0x34d,'vlyB')]+iII1II(0x3cc,'vlyB')+Iliill+'!','');}$['UA']=await l1i11i[iII1II(0x3c4,'l9qH')](lllIi,$[iII1II(0x2c3,']Ar7')]),await l1i11i[iII1II(0x31d,'l9qH')](I1iI1i),await $[iII1II(0x2e3,'EXMF')](l1i11i['OrYCm'](parseInt,l1i11i[iII1II(0x2c6,'kyiK')](l1i11i[iII1II(0x39a,'Ytlu')](Math[iII1II(0x2b7,'q#qB')](),0x5dc),0x5dc),0xa));}}}})()[IIIlii(0x3d8,'hLLt')](I1iI11=>{const IiIll=IIIlii;$[IiIll(0x227,'w4Oo')]('','❌\x20'+$[IiIll(0x1e7,'UoW5')]+IiIll(0x250,'q#qB')+I1iI11+'!','');})[IIIlii(0x216,'q#qB')](()=>{const llIilI=IIIlii;$[llIilI(0x37e,'XV(Z')]();});async function I1iI1i(){const IlliI=IIIlii,II11={'nIZff':'签到失败：','DYAse':IlliI(0x283,'g!^H'),'KzBMK':function(ii1II1,iliIll){return ii1II1<iliIll;},'Ablbs':'ilpsq','rVOKl':function(llliIl,iliIli){return llliIl==iliIli;},'UhqUO':function(illliI,ii1III,i11iIl){return illliI(ii1III,i11iIl);},'XxWYk':function(ll11ll,l11iIl){return ll11ll*l11iIl;},'qywGQ':function(i11iIi,IIIIll){return i11iIi(IIIIll);},'gYHeE':function(liiiii,II1I,lI1111){return liiiii(II1I,lI1111);},'grWNM':function(Ilil1,IliII1){return Ilil1*IliII1;},'hMNHg':IlliI(0x366,'z6bS'),'hBMVQ':function(l1iIi1,i1I1I){return l1iIi1(i1I1I);},'rPmMt':function(llIil,llIii,IIiiI1){return llIil(llIii,IIiiI1);},'Wwowm':function(IIIIi1,ii1IIl,ii1IIi){return IIIIi1(ii1IIl,ii1IIi);},'Riidy':function(I1ll1l,I1ll1i){return I1ll1l+I1ll1i;},'jcuWh':function(i11iII,lI1Ii1){return i11iII*lI1Ii1;},'VEXAZ':function(i1I11,I1I1i1,i1I1l,i1I1i){return i1I11(I1I1i1,i1I1l,i1I1i);}};for(var l1ilII=0x0;II11[IlliI(0x362,'XV(Z')](l1ilII,lil1l[IlliI(0x33a,'9NxD')]);l1ilII++){if(II11[IlliI(0x2d6,'**3u')]===II11[IlliI(0x2d9,'yHz8')]){if(II11['rVOKl'](lil1l[l1ilII],'')){if('jyzqu'!==IlliI(0x1f9,'OGWi'))i1ilI1[IlliI(0x259,'RyF)')](IlliI(0x2a1,'8DSL'));else continue;}await $[IlliI(0x343,'l9qH')](II11[IlliI(0x2c2,'$(KT')](parseInt,II11[IlliI(0x2cf,'9NxD')](Math[IlliI(0x293,'Y5dI')](),0x1f4)+0x1f4,0xa)),await II11['qywGQ'](l1i1l,lil1l[l1ilII]),await $[IlliI(0x2d1,'Y5dI')](II11[IlliI(0x2c8,'@d@W')](parseInt,II11[IlliI(0x2fd,'yHz8')](Math[IlliI(0x256,'OmL(')](),0x1f4)+0x1f4,0xa));if(II11[IlliI(0x370,'Iwf)')]($[IlliI(0x3e2,'4xt%')],''))continue;II11[IlliI(0x23b,'**3u')]($[IlliI(0x359,'z6bS')],0x1)&&(II11[IlliI(0x2ec,'t)h*')]!==II11['hMNHg']?iIli1l[IlliI(0x3e5,'1%T1')]?iI11II[IlliI(0x331,'0K5W')](II11[IlliI(0x37c,'UoW5')]+iIII1I?.[IlliI(0x231,'0kO$')]):(ilil1i[IlliI(0x330,'Q5At')](II11[IlliI(0x30b,'0FqE')]),IlIIi[IlliI(0x21e,'he!b')](IiI1l[IlliI(0x393,'js!k')](illlII))):(await II11[IlliI(0x2ba,'XV(Z')](I1iI1l,$['venderId']),await $[IlliI(0x345,'he!b')](II11['UhqUO'](parseInt,II11[IlliI(0x344,'l9qH')](Math['random'](),0x1f4)+0x1f4,0xa)))),await II11[IlliI(0x1fb,'g!^H')](illlil,lil1l[l1ilII],$[IlliI(0x398,'nE2A')]),await $['wait'](II11[IlliI(0x2d8,'EXMF')](parseInt,II11['Riidy'](II11[IlliI(0x2a4,'0kO$')](Math['random'](),0x1f4),0x1f4),0xa)),await II11['VEXAZ'](Iliil,lil1l[l1ilII],$[IlliI(0x1e9,'aTce')],$[IlliI(0x211,'RyF)')]);}else il1iIi[IlliI(0x321,'UoW5')](''+iii1il[IlliI(0x327,'iY$I')](II11li)),I1l11i[IlliI(0x282,'%9O&')](iIIiiI[IlliI(0x1eb,'OmL(')]+IlliI(0x3b2,'OGWi'));}}async function l1i1l(Ilili){const I1I1I1=IIIlii,I1ll1I={'cYIIk':function(Iii1I1,i11iI1){return Iii1I1!=i11iI1;},'PkNeP':function(Iii1II,llIlI){return Iii1II+llIlI;},'Nghst':I1I1I1(0x32e,'GbfI'),'CzlBR':function(l1iIil,l1iIii){return l1iIil(l1iIii);},'gZAkE':function(illllI,II1II){return illllI!==II1II;},'FYJGO':'QncNk','lrGpY':I1I1I1(0x257,'3)PT'),'wBjZE':function(ii1l11,IIIIii,liiill){return ii1l11(IIIIii,liiill);},'abegV':I1I1I1(0x2b0,'RyF)'),'jmeki':'gzip,\x20deflate,\x20br','IQaey':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','xhphv':I1I1I1(0x1fc,'UoW5')};return new Promise(async IIIIil=>{const Il11=I1I1I1,lI1lIl={'sWtDB':function(liiili,I1ll11){const IIIlil=iii1II;return I1ll1I[IIIlil(0x380,'4xt%')](liiili,I1ll11);},'eoQip':function(lI1lIi,Iii1Ii){return lI1lIi-Iii1Ii;},'PcWUG':function(Iii1Il,i1l1I1){const Ili111=iii1II;return I1ll1I[Ili111(0x324,'&Ir$')](Iii1Il,i1l1I1);},'VyIvg':I1ll1I[Il11(0x31e,'OmL(')],'FTrsz':function(lI1lI1,llIl1){const iiil11=Il11;return I1ll1I[iiil11(0x373,'Ytlu')](lI1lI1,llIl1);},'GGlzX':function(l1iIiI,illlli){return l1iIiI==illlli;},'uuKMI':function(illlll,IIIIiI){return illlll!==IIIIiI;},'rwnSw':Il11(0x225,'OGWi')};if(I1ll1I[Il11(0x204,'$(KT')](I1ll1I['FYJGO'],I1ll1I['lrGpY'])){const II1I1={'functionId':Il11(0x3a1,'niJ3'),'appid':'interCenter_shopSign','body':{'token':Ilili,'venderId':''}},i1i111=await I1ll1I['wBjZE'](l1l1Ii,Il11(0x3b9,'Q5At'),II1I1),ii1l1I={'url':'https://api.m.jd.com/api?'+i1i111+Il11(0x247,'0kO$'),'headers':{'accept':I1ll1I[Il11(0x374,'FabQ')],'accept-encoding':I1ll1I[Il11(0x1fd,'hLLt')],'accept-language':I1ll1I[Il11(0x27b,'niJ3')],'cookie':Iliii,'referer':I1ll1I[Il11(0x28d,'zV!T')],'User-Agent':$['UA']},'timeout':0xf*0x3e8};$[Il11(0x220,'js!k')](ii1l1I,(lI1lII,lIill1,iiI1i1)=>{const llII1I=Il11;try{lI1lIl[llII1I(0x27f,'XV(Z')]!==lI1lIl[llII1I(0x2f7,'UoW5')]?I11iI1[llII1I(0x20a,'8DSL')]=l1lIil?.[llII1I(0x251,'js!k')]?.[llII1I(0x281,'$al3')]:lI1lII?(console[llII1I(0x297,'z6bS')]('查询店铺GetvenderId\x20API请求失败‼️'),console[llII1I(0x31c,'1%T1')](lI1lIl[llII1I(0x26d,'Y5dI')](String,lI1lII))):(iiI1i1=JSON['parse'](/{(.*)}/g[llII1I(0x2f1,'l9qH')](iiI1i1)[0x0]),lI1lIl['GGlzX'](iiI1i1[llII1I(0x2ed,'aTce')],0x192)?($[llII1I(0x24a,'t)h*')]='',console[llII1I(0x332,'hLLt')]('活动已失效'),$[llII1I(0x1e4,'EXMF')]=!![]):$['venderId']=iiI1i1?.[llII1I(0x1f1,'Iwf)')]?.[llII1I(0x2b8,'0kO$')]);}catch(iIiil1){if(lI1lIl['uuKMI'](lI1lIl['rwnSw'],lI1lIl[llII1I(0x350,'iY$I')])){const l1lI1l=IillIl[llII1I(0x3dc,'nE2A')][llII1I(0x1ed,'&Ir$')][llliil]['level'],l1I1Il=liIl1['data'][llII1I(0x3c6,'GTbY')][II1lll][llII1I(0x24e,'0kO$')][0x0][llII1I(0x253,'4xt%')];lI1lIl['sWtDB'](II1lli,lI1lIl[llII1I(0x30e,'Q5At')](ii1I1I['data'][llII1I(0x3ba,'t)h*')][llII1I(0x3a0,'%9O&')],0x1))?iI1ll1+=lI1lIl['PcWUG'](lI1lIl[llII1I(0x20c,'&Ir$')](l1lI1l+'天',l1I1Il),'豆，'):IlI1Il+=lI1lIl[llII1I(0x2de,'0K5W')](lI1lIl[llII1I(0x236,'yHz8')](lI1lIl[llII1I(0x1e5,'aTce')](l1lI1l,'天'),l1I1Il),'豆');}else $[llII1I(0x3de,'OGWi')](iIiil1,lIill1);}finally{lI1lIl[llII1I(0x1d8,'UoW5')](IIIIil,iiI1i1);}});}else IiilI1[Il11(0x3c5,'@d@W')]['DPQDTK']['includes']('\x0a')?IlI11=[...iIIIIl[Il11(0x296,'yHz8')][Il11(0x2f6,'hLLt')][Il11(0x210,'vlyB')]('\x0a'),...II1Il]:lilIlI=[...iIIIIi[Il11(0x356,'XV(Z')][Il11(0x364,'g!^H')][Il11(0x25e,'Y5dI')]('&'),...iii1I1];});}async function I1iI1l(IIlili){const ilI1II=IIIlii,IIlill={'oefFx':function(IllllI,liliil){return IllllI+liliil;},'wvvLu':function(I1iil1,lIillI){return I1iil1==lIillI;},'ghqDN':ilI1II(0x368,'g!^H'),'GWuVt':ilI1II(0x2a0,'%9O&'),'BvsIy':function(lI1il1,liliii){return lI1il1*liliii;}};return new Promise(iIiilI=>{const iillI1=ilI1II,iIiiil={'ljajh':function(ilIlIi,ilIlIl){return IIlill['oefFx'](ilIlIi,ilIlIl);},'ehKnF':function(l1lI1I,ll1llI){return l1lI1I+ll1llI;},'ddsoX':function(i11lIl,l1lI11){return IIlill['wvvLu'](i11lIl,l1lI11);}},iIiiii={'url':iillI1(0x35f,'0K5W')+IIlili+'%22%2C%22stamp%22%3A%221%22%2C%22%24taroTimestamp%22%3A'+new Date()[iillI1(0x1f7,'9NxD')]()+iillI1(0x3dd,'OmL(')+new Date()['valueOf']()+iillI1(0x261,'**3u'),'headers':{'accept':IIlill[iillI1(0x3d2,'0kO$')],'accept-language':IIlill[iillI1(0x37f,'nE2A')],'sec-fetch-dest':iillI1(0x322,'8DSL'),'sec-fetch-mode':iillI1(0x335,'he!b'),'sec-fetch-site':iillI1(0x3a9,'0kO$'),'Referer':iillI1(0x29b,'js!k'),'User-Agent':$['UA']},'timeout':IIlill[iillI1(0x272,'4xt%')](0xf,0x3e8)};$[iillI1(0x258,'kyiK')](iIiiii,(lI1iii,i11lIi,ll1ll1)=>{const IlllI=iillI1,lilil1={'uOZwe':function(lIilli,I1iiii){return lIilli(I1iiii);},'eEzIK':function(iiI1iI,I1iiil){return iIiiil['ljajh'](iiI1iI,I1iiil);},'yseoB':function(Illll1,lI1iil){const i11l1=iii1II;return iIiiil[i11l1(0x1e1,'nE2A')](Illll1,lI1iil);},'cswKf':function(lIilll,iIiiiI){return iIiiil['ehKnF'](lIilll,iIiiiI);},'IVKuP':function(ilI11i,ilI11l){return iIiiil['ljajh'](ilI11i,ilI11l);}};try{if(IlllI(0x3db,'OGWi')!==IlllI(0x36f,'vlyB')){liIiI[IlllI(0x290,'Ytlu')]('开始时间：'+new l1il1I(lilil1[IlllI(0x2f8,'$(KT')](Iiili,IilIli))[IlllI(0x26c,'w4Oo')]()+IlllI(0x2ff,'w4Oo')+new li1(lilil1[IlllI(0x277,']Ar7')](illIl1,l1llII))['toLocaleString']());let IIliil='';for(let ll1liI=0x0;ll1liI<l1il11[IlllI(0x215,'GTbY')][IlllI(0x3b4,'9NxD')][IlllI(0x1df,'FabQ')];ll1liI++){const lI1iiI=l11i1l[IlllI(0x351,'3)PT')]['continuePrizeRuleList'][ll1liI][IlllI(0x372,'@d@W')],i11lII=lIII11[IlllI(0x301,'9NxD')][IlllI(0x3ba,'t)h*')][ll1liI][IlllI(0x2f5,'0FqE')][0x0][IlllI(0x1e8,'9NxD')];ll1liI!=IiilI[IlllI(0x39f,'g!^H')][IlllI(0x2bf,'UoW5')][IlllI(0x38c,'0K5W')]-0x1?IIliil+=lilil1['eEzIK'](lilil1[IlllI(0x360,'GTbY')](lI1iiI+'天',i11lII),'豆，'):IIliil+=lilil1[IlllI(0x3d1,'js!k')](lilil1['yseoB'](lI1iiI,'天')+i11lII,'豆');}lI11I1[IlllI(0x336,'GbfI')](lilil1[IlllI(0x3a6,']Ar7')](lilil1[IlllI(0x33f,'vlyB')](IlllI(0x1dc,'js!k'),IIliil),'\x0a'));}else{if(lI1iii)console[IlllI(0x229,'$(KT')](IlllI(0x388,'0K5W')),console[IlllI(0x394,'&Ir$')](String(lI1iii));else{ll1ll1=JSON[IlllI(0x39e,'niJ3')](ll1ll1);if(iIiiil[IlllI(0x2da,'nE2A')]($[IlllI(0x2fc,'w2Bk')],0x1)){let iIIlli=ll1ll1?.['data']?.[IlllI(0x1ef,'g!^H')]?.[IlllI(0x29e,'nE2A')];console[IlllI(0x221,'**3u')]('店铺名称：'+iIIlli+IlllI(0x3bc,'OGWi')+IIlili),I1lIIi+=iIiiil['ljajh'](iIiiil[IlllI(0x2fa,'&Ir$')]('【',iIIlli),'】');}}}}catch(ll1li1){$[IlllI(0x1de,'q#qB')](ll1li1,i11lIi);}finally{iIiilI(ll1ll1);}});});}async function illlil(iIIlll,I1iiiI){const iliIl=IIIlii,iiI1il={'QAAgS':function(iiI1ii,I1iii1){return iiI1ii+I1iii1;},'lsBPa':function(lilii1,iIiii1){return lilii1+iIiii1;},'VGOKf':iliIl(0x300,'iY$I'),'bktXN':function(ll1lil,IIlil1){return ll1lil(IIlil1);},'AOtFN':function(I1Illl,ll1lii){return I1Illl==ll1lii;},'nuKou':function(li11,ilIlI1){return li11(ilIlI1);},'bCZEV':function(I1Illi,IIlilI){return I1Illi<IIlilI;},'zzvCa':function(Illlll,Illlli){return Illlll===Illlli;},'thIQb':iliIl(0x25f,'$(KT'),'nPrqv':function(llli1l,lI1ii1){return llli1l!=lI1ii1;},'Zcwfi':function(llli1i,iiI1l1){return llli1i-iiI1l1;},'HzJVK':function(i11lI1,liliiI){return i11lI1+liliiI;},'Fmsoc':function(ilIIiI,lIl1ii){return ilIIiI+lIl1ii;},'yyirC':function(lIl1il,Ii1l11){return lIl1il(Ii1l11);},'GoCXS':iliIl(0x286,'GTbY'),'cakDE':'interCenter_shopSign','cSrda':function(IIlii1,iiI1lI,IliIlI){return IIlii1(iiI1lI,IliIlI);},'yNmAH':iliIl(0x28b,'&Ir$'),'bOUmv':'accept','HVfBv':iliIl(0x2a5,'kyiK'),'iSgyN':iliIl(0x22b,'yHz8'),'lMVyS':function(IIliiI,i1111l){return IIliiI*i1111l;}};return new Promise(async i1111i=>{const IiIi1i=iliIl,iliiI1={'yebMo':function(lIl1l1,li1i){const ii1i11=iii1II;return iiI1il[ii1i11(0x396,'Q5At')](lIl1l1,li1i);},'QKahZ':function(ilIIil,lIili1){const ll11II=iii1II;return iiI1il[ll11II(0x358,'niJ3')](ilIIil,lIili1);},'FgtnW':function(li1l,iliiII){return li1l(iliiII);},'YiqpM':function(iiI1li,IIliii){return iiI1li!==IIliii;},'UnekR':function(i1111I,IliIl1){return i1111I+IliIl1;},'hEpYn':iiI1il['VGOKf'],'SgHfw':function(lIl1lI,iiI1ll){const liIlII=iii1II;return iiI1il[liIlII(0x30a,'GbfI')](lIl1lI,iiI1ll);},'BRbPW':'eZZGE','AEyYd':function(lIiliI,iIiill){const Il1I=iii1II;return iiI1il[Il1I(0x3cd,'yHz8')](lIiliI,iIiill);},'oEpfC':function(Ii1IIi,Ii1IIl){const iii1i=iii1II;return iiI1il[iii1i(0x2dc,'Gz3!')](Ii1IIi,Ii1IIl);},'hbzoh':function(l111I,ll1lli){const iii1l=iii1II;return iiI1il[iii1l(0x2cb,'FabQ')](l111I,ll1lli);},'LmcFi':function(ll1lll,Illlil){return iiI1il['zzvCa'](ll1lll,Illlil);},'ibAtc':iiI1il['thIQb'],'wVJJW':function(I1iili,lililI){return iiI1il['nPrqv'](I1iili,lililI);},'QlgXi':function(lI1ill,Illlii){const iliIi=iii1II;return iiI1il[iliIi(0x30d,'vlyB')](lI1ill,Illlii);},'StaIG':function(lI1ili,Il1II){const iiil1I=iii1II;return iiI1il[iiil1I(0x273,'he!b')](lI1ili,Il1II);},'uNUaL':function(i1lll,Ii11I){const llII11=iii1II;return iiI1il[llII11(0x275,'OGWi')](i1lll,Ii11I);},'ntHZi':function(I1iill,i1lli){const lIiI1=iii1II;return iiI1il[lIiI1(0x32b,'GbfI')](I1iill,i1lli);}},Illli1={'functionId':iiI1il['GoCXS'],'appid':iiI1il[IiIi1i(0x263,'t)h*')],'body':{'token':iIIlll,'venderId':I1iiiI}},ilIIii=await iiI1il[IiIi1i(0x2eb,'OmL(')](l1l1Ii,iiI1il[IiIi1i(0x3a8,'nE2A')],Illli1),l1111={'url':IiIi1i(0x2a2,'0K5W')+ilIIii+IiIi1i(0x3eb,'w4Oo'),'headers':{'accept':iiI1il[IiIi1i(0x365,'Iwf)')],'accept-encoding':iiI1il[IiIi1i(0x2be,'Y5dI')],'accept-language':iiI1il['iSgyN'],'cookie':Iliii,'referer':IiIi1i(0x38e,'hLLt')+iIIlll+IiIi1i(0x2af,'0FqE'),'User-Agent':$['UA']},'timeout':iiI1il[IiIi1i(0x2f9,'yHz8')](0xf,0x3e8)};$[IiIi1i(0x3d5,'1%T1')](l1111,(i11111,lIl1li,Il1I1)=>{const llII1i=IiIi1i,lIilii={'hXzzi':function(lIilil,lIl1ll){const llII1l=iii1II;return iliiI1[llII1l(0x29d,'OmL(')](lIilil,lIl1ll);},'zaLPf':function(Ii111,Ii1III){const iil11l=iii1II;return iliiI1[iil11l(0x30c,'OmL(')](Ii111,Ii1III);},'QLovi':function(ilIIi1,l111i){return ilIIi1+l111i;},'IgpnB':function(l111l,I1iilI){const IiIi1l=iii1II;return iliiI1[IiIi1l(0x1ea,'OmL(')](l111l,I1iilI);}};try{if(iliiI1[llII1i(0x1dd,'3)PT')]==='CzWtK')iiilil=iil1li[llII1i(0x1e2,'0kO$')](/{(.*)}/g[llII1i(0x26f,'Iwf)')](lillIl)[0x0]),iIiIl['log'](iliiI1[llII1i(0x202,'kyiK')](iliiI1[llII1i(0x2ce,'niJ3')]('当前已签到\x20',iiilii?.[llII1i(0x1e0,'he!b')]?.['days']),'\x20天')),li1i1i+=iliiI1[llII1i(0x306,'9NxD')](iliiI1[llII1i(0x2dd,']Ar7')](llII1i(0x3a4,'8DSL'),IlIli1?.[llII1i(0x387,'UoW5')]?.[llII1i(0x2a6,'iY$I')]),'天\x0a');else{if(i11111)console['log']('查询活动信息GetActivityInfo\x20API请求失败‼️'),console[llII1i(0x259,'RyF)')](iliiI1['SgHfw'](String,i11111));else{if(llII1i(0x3e0,'zV!T')===iliiI1['BRbPW'])iliiI1[llII1i(0x2c5,'0kO$')](ilI1lI,IiiIll);else{Il1I1=JSON[llII1i(0x34a,'t)h*')](/{(.*)}/g['exec'](Il1I1)[0x0]),$[llII1i(0x29a,'l9qH')]=Il1I1[llII1i(0x3bb,'EXMF')]['id'];let IliIli=Il1I1['data']['startTime'],lI1ilI=Il1I1[llII1i(0x22c,'$(KT')][llII1i(0x383,'Iwf)')];if(iliiI1[llII1i(0x270,'nE2A')]($[llII1i(0x28c,'GbfI')],0x1)){console[llII1i(0x279,'yHz8')]('开始时间：'+new Date(iliiI1['SgHfw'](parseInt,IliIli))[llII1i(0x2a9,'@d@W')]()+'\x0a结束时间：'+new Date(iliiI1[llII1i(0x1e3,'he!b')](parseInt,lI1ilI))[llII1i(0x23e,'1%T1')]());let IllliI='';for(let IliIll=0x0;iliiI1['hbzoh'](IliIll,Il1I1[llII1i(0x22d,'0FqE')]['continuePrizeRuleList']['length']);IliIll++){if(iliiI1[llII1i(0x33c,'vlyB')]('acpsX',iliiI1[llII1i(0x2e5,'he!b')]))iil1l1?(iI11I1[llII1i(0x2b3,'js!k')]('taskUrl\x20API请求失败‼️'),il1i1l['log'](lIilii[llII1i(0x375,'l9qH')](IlIlll,IIIl1I))):(iil1ii=IlIlli[llII1i(0x357,'g!^H')](/{(.*)}/g['exec'](il1i1i)[0x0]),lil111[llII1i(0x271,'OmL(')](lIilii[llII1i(0x3d6,'Y5dI')](lIilii[llII1i(0x2ca,'niJ3')](llII1i(0x2e7,'aTce'),i11ilI?.[llII1i(0x337,'XV(Z')]?.[llII1i(0x2ee,'FabQ')]),'\x20天')),ii1ii1+=lIilii['IgpnB'](llII1i(0x28f,'t)h*'),llllI?.['data']?.[llII1i(0x2ee,'FabQ')])+'天\x0a');else{const lilill=Il1I1[llII1i(0x215,'GTbY')]['continuePrizeRuleList'][IliIll]['level'],IilI1=Il1I1[llII1i(0x376,']Ar7')]['continuePrizeRuleList'][IliIll][llII1i(0x3ca,'@d@W')][0x0][llII1i(0x3e3,'hLLt')];iliiI1[llII1i(0x1f0,'t)h*')](IliIll,iliiI1[llII1i(0x1fe,'l9qH')](Il1I1[llII1i(0x3e8,'iY$I')][llII1i(0x3da,'8DSL')][llII1i(0x2e6,'EXMF')],0x1))?iliiI1['YiqpM'](llII1i(0x3b6,'zV!T'),llII1i(0x329,'[]Wt'))?(II1iI[llII1i(0x203,'GbfI')](llI1II[llII1i(0x265,'l9qH')],'','【京东账号'+lIli1l['index']+'】'+lillIi[llII1i(0x21a,'Iwf)')]+'\x0a'+illIi1),ii1ili+=llII1i(0x223,'GTbY')+liil1i[llII1i(0x2e2,'l9qH')]+'】'+lI1lil[llII1i(0x391,'t)h*')]+'\x0a'+i1l1iI+(iliiI1[llII1i(0x346,'yHz8')](liil1l[llII1i(0x1ff,'$(KT')],lI1lii[llII1i(0x299,'Y5dI')])?'\x0a\x0a':'')):IllliI+=iliiI1[llII1i(0x2a7,'GTbY')](lilill+'天',IilI1)+'豆，':IllliI+=iliiI1[llII1i(0x2db,'vlyB')](iliiI1[llII1i(0x2f3,'Ytlu')](iliiI1[llII1i(0x2b2,'UoW5')](lilill,'天'),IilI1),'豆');}}console['log'](iliiI1['uNUaL'](llII1i(0x2aa,'FabQ'),IllliI)+'\x0a');}}}}}catch(Ili1I1){$[llII1i(0x237,'$(KT')](Ili1I1,lIl1li);}finally{iliiI1[llII1i(0x3ae,'0K5W')](i1111i,Il1I1);}});});}async function Iliil(lI1I1i,liI1II,i1Iii1){const illI1I=IIIlii,l1liii={'jcSSZ':function(I1Ili1,l1liil){return I1Ili1+l1liil;},'JanCa':function(i1ll1,lilI1I){return i1ll1(lilI1I);},'sLtZA':function(lI1I1l,Il1Il){return lI1I1l!==Il1Il;},'YTpkt':illI1I(0x3ce,'aTce'),'xiwmo':function(i1IiiI,lI1I1I){return i1IiiI===lI1I1I;},'uMzBQ':illI1I(0x2f4,'hLLt'),'KeCvK':function(l1lII,lilI1l){return l1lII===lilI1l;},'Gkmri':illI1I(0x2e4,'GbfI'),'wnyTQ':function(l1liiI,I1iI1){return l1liiI+I1iI1;},'GIVOe':illI1I(0x1ec,'Ytlu'),'vvIbq':'LdELo','avDXn':illI1I(0x1f2,'vVuM'),'UJYxX':'interCenter_shopSign','zQZAp':'4da33','BXiuE':'gzip,\x20deflate','oBtuk':function(lilI1i,Il1Ii){return lilI1i*Il1Ii;}};return new Promise(async Ii11l=>{const ilI1Ii=illI1I,liI1I1={'functionId':ilI1Ii(0x2b4,'niJ3'),'appid':l1liii[ilI1Ii(0x2bc,'&Ir$')],'body':{'token':lI1I1i,'venderId':liI1II,'activityId':i1Iii1,'type':0x38,'actionType':0x7}},Ii11i=await l1l1Ii(l1liii[ilI1Ii(0x252,']Ar7')],liI1I1),i1llI={'url':ilI1Ii(0x2d7,'$(KT')+Ii11i+ilI1Ii(0x32f,'FabQ'),'headers':{'accept':'accept','accept-encoding':l1liii['BXiuE'],'accept-language':ilI1Ii(0x3be,'GbfI'),'cookie':Iliii,'referer':ilI1Ii(0x302,'8DSL')+lI1I1i+ilI1Ii(0x255,'yHz8'),'User-Agent':$['UA']},'timeout':l1liii['oBtuk'](0xf,0x3e8)};$['get'](i1llI,(iIIli1,Ii1l1i,l1lIl)=>{const illI11=ilI1Ii,Ii1l1l={'EDVeZ':function(i1Iiil,i1Iiii){const ilI1Il=iii1II;return l1liii[ilI1Il(0x20f,'4xt%')](i1Iiil,i1Iiii);},'bSihX':function(l1lIi,l1lili){return l1liii['JanCa'](l1lIi,l1lili);}};if(l1liii[illI11(0x361,'[]Wt')](illI11(0x37a,'O@gF'),l1liii['YTpkt']))try{if(l1liii['xiwmo'](l1liii[illI11(0x242,'he!b')],illI11(0x1db,'$(KT'))){if(iIIli1)console[illI11(0x25c,']Ar7')](illI11(0x230,'kyiK')),console[illI11(0x332,'hLLt')](String(iIIli1));else{l1lIl=JSON[illI11(0x34a,'t)h*')](/{(.*)}/g['exec'](l1lIl)[0x0]);if(l1lIl[illI11(0x35e,'l9qH')]&&l1liii[illI11(0x371,'@d@W')](l1lIl[illI11(0x218,'0K5W')],!![]))console[illI11(0x227,'w4Oo')](l1liii[illI11(0x294,'aTce')]);else{if(l1lIl[illI11(0x21c,'Iwf)')])console[illI11(0x381,'4xt%')](l1liii[illI11(0x2ab,'9NxD')]('签到失败：',l1lIl?.['msg']));else{if(l1liii['sLtZA'](l1liii[illI11(0x34c,'8DSL')],l1liii[illI11(0x27a,'niJ3')]))console['log']('签到失败'),console[illI11(0x235,'zV!T')](JSON['stringify'](l1lIl));else{let lI1I11=l1iil?.[illI11(0x222,'l9qH')]?.[illI11(0x201,'GbfI')]?.[illI11(0x2c4,'he!b')];ii1l1['log'](illI11(0x2a3,'aTce')+lI1I11+illI11(0x308,'Y5dI')+lIIill),I11iIi+=Ii1l1l[illI11(0x2ac,'kyiK')]('【',lI1I11)+'】';}}}}}else IilIiI['log']('签到SignCollectGift\x20API请求失败‼️'),i1i1I1['log'](IlII1(IiI11));}catch(IilIi){l1liii[illI11(0x1f3,'w2Bk')]===l1liii[illI11(0x3af,'8DSL')]?$[illI11(0x1de,'q#qB')](IilIi,Ii1l1i):(ii1li['log']('查询店铺名称GetShopName\x20API请求失败‼️'),IIll1[illI11(0x21e,'he!b')](Ii1l1l[illI11(0x285,'[]Wt')](ll1il,IiiIiI)));}finally{Ii11l(l1lIl);}else l1i111[illI11(0x31a,'Y5dI')](illI11(0x24f,'niJ3')),iliII1['log'](II11I1(Iii11I));});});}async function I1lIIl(iilIIi,I1iII){const ll11Ii=IIIlii,IIlI1i={'PayqS':ll11Ii(0x233,'Y5dI'),'Liocy':function(iiiI1i,iiiI1l){return iiiI1i+iiiI1l;},'IGLWP':ll11Ii(0x36d,'0FqE'),'GvTly':'gzip,\x20deflate,\x20br','sQyBx':function(Ili1Ii,Ii1l1I){return Ili1Ii*Ii1l1I;}};return new Promise(iilII1=>{const ll11Il=ll11Ii,iiiI11={'FHMOi':function(i1Iil1,liI1Ii){return i1Iil1!==liI1Ii;},'bFXyS':IIlI1i[ll11Il(0x20d,'O@gF')],'ifqVd':function(l1lil1,i1lil){return l1lil1(i1lil);},'xfKLD':function(I1iIl,IilII){return I1iIl+IilII;},'UHCAe':function(ili1l,i1lii){const i11lI=ll11Il;return IIlI1i[i11lI(0x33e,'Gz3!')](ili1l,i1lii);},'XfcOm':function(iilIII,liI1Il){return iilIII+liI1Il;}},l1lilI={'url':ll11Il(0x2e9,'XV(Z')+iilIIi+ll11Il(0x328,'q#qB')+I1iII+ll11Il(0x244,'q#qB')+$['activityId']+ll11Il(0x3ec,'UoW5'),'headers':{'accept':IIlI1i['IGLWP'],'accept-encoding':IIlI1i[ll11Il(0x319,'w2Bk')],'accept-language':ll11Il(0x314,'Iwf)'),'cookie':Iliii,'referer':ll11Il(0x2ae,'&Ir$'),'User-Agent':$['UA']},'timeout':IIlI1i[ll11Il(0x228,'OGWi')](0xf,0x3e8)};$['get'](l1lilI,(I1iIi,iiiI1I,lilI11)=>{const Illl1=ll11Il;try{if(I1iIi){if(iiiI11['FHMOi'](iiiI11['bFXyS'],iiiI11[Illl1(0x318,'w4Oo')])){iilll['isLogin']=![];return;}else console[Illl1(0x367,'FabQ')](Illl1(0x30f,'he!b')),console[Illl1(0x31a,'Y5dI')](iiiI11['ifqVd'](String,I1iIi));}else lilI11=JSON['parse'](/{(.*)}/g['exec'](lilI11)[0x0]),console[Illl1(0x339,'w2Bk')](iiiI11[Illl1(0x3c9,'FabQ')](iiiI11[Illl1(0x2cd,'Y5dI')](Illl1(0x1f8,'RyF)'),lilI11?.[Illl1(0x22c,'$(KT')]?.[Illl1(0x24d,'vlyB')]),'\x20天')),I1lIIi+=iiiI11[Illl1(0x28a,'0FqE')](iiiI11['UHCAe'](Illl1(0x289,'RyF)'),lilI11?.[Illl1(0x3bb,'EXMF')]?.[Illl1(0x3ed,'q#qB')]),'天\x0a');}catch(ili1i){$['logErr'](ili1i,iiiI1I);}finally{iiiI11[Illl1(0x268,'FabQ')](iilII1,lilI11);}});});}async function l1ilI1(){const iii1I=IIIlii,IiIi1={'Rknmw':function(l1Ii1,i1IilI){return l1Ii1===i1IilI;},'ZDmvA':iii1I(0x2d4,'@d@W'),'aYnJF':iii1I(0x264,'$al3'),'gRoRd':function(III1I1,ilI111){return III1I1!==ilI111;}};if($[iii1I(0x3b1,'Q5At')]()){if(IiIi1[iii1I(0x354,'1%T1')](IiIi1[iii1I(0x278,'4xt%')],iii1I(0x37b,'XV(Z'))){lilIiI['keys'](i1l1I)[iii1I(0x33b,'1%T1')](IIlI11=>{i1lI['push'](IlI1l[IIlI11]);});if(iii1Ii[iii1I(0x39b,'Gz3!')]['JD_DEBUG']&&IiIi1[iii1I(0x320,'l9qH')](iii1Il[iii1I(0x38a,'Ytlu')][iii1I(0x38b,'t)h*')],IiIi1['ZDmvA']))lI1IiI['log']=()=>{};}else $[iii1I(0x33d,'FabQ')]($[iii1I(0x2c1,'w4Oo')],'',iii1I(0x2b6,'GbfI')+$[iii1I(0x3ee,'@d@W')]+'】'+$['nickName']+'\x0a'+I1lIIi),illlii+='【京东账号'+$['index']+'】'+$['nickName']+'\x0a'+I1lIIi+(IiIi1[iii1I(0x3e6,'Q5At')]($[iii1I(0x3aa,'RyF)')],lllIl[iii1I(0x315,'Iwf)')])?'\x0a\x0a':'');}}function l1l1Il(){const iliII=IIIlii,iIIll1={'GeegT':function(llIIII,ilI11I){return llIIII==ilI11I;},'juTXu':function(ili1I,iilIIl){return ili1I+iilIIl;},'KeMgh':iliII(0x31b,'RyF)'),'vjMLL':function(i1Iili,i1Iill){return i1Iili(i1Iill);},'XOgXl':iliII(0x239,'w4Oo'),'WaNaI':'CookieJD','dDCDr':function(l1IiI,l1lill){return l1IiI!==l1lill;},'UpNWI':iliII(0x214,'%9O&'),'JrQdW':iliII(0x240,'w4Oo'),'SfFop':iliII(0x34b,'@d@W'),'aVsqC':function(i1li1,iIIllI){return i1li1===iIIllI;},'eoTGq':iliII(0x2e8,'4xt%'),'vdCfS':iliII(0x295,'O@gF'),'cxGRO':iliII(0x305,'Y5dI'),'yxxxu':function(I1Ill1,ili11){return I1Ill1!==ili11;},'TPcDt':iliII(0x2d3,'vVuM'),'gsvTI':iliII(0x23a,'GbfI'),'HuIey':function(IiIiIi,llIIIl){return IiIiIi===llIIIl;},'hvqrh':function(IIlI1I){return IIlI1I();},'RHYlc':function(llIIIi,IiIiIl){return llIIIi==IiIiIl;},'KhFoa':iliII(0x35b,'3)PT'),'rWzQv':'gzip,\x20deflate,\x20br','csfSe':iliII(0x21d,'aTce'),'JBoWt':'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2','RUTUD':function(I1Ilil,l1I1I1){return I1Ilil*l1I1I1;}};return new Promise(async I1Ilii=>{const liIlI1=iliII,l1Iii={'SaVkx':function(III1Ii){const ii1i1I=iii1II;return iIIll1[ii1i1I(0x395,'O@gF')](III1Ii);},'xhuTm':liIlI1(0x386,'w2Bk'),'lXWMT':function(III1Il,iIIliI){return iIIll1['RHYlc'](III1Il,iIIliI);},'fwSOC':function(IiIil,IiIii){const iillIl=liIlI1;return iIIll1[iillIl(0x2bb,'XV(Z')](IiIil,IiIii);}},l1Iil={'url':liIlI1(0x3d9,'l9qH'),'headers':{'Accept':iIIll1[liIlI1(0x317,'RyF)')],'Content-Type':'application/x-www-form-urlencoded','Accept-Encoding':iIIll1[liIlI1(0x390,'g!^H')],'Accept-Language':liIlI1(0x24b,'t)h*'),'Connection':iIIll1[liIlI1(0x39d,'Ytlu')],'Cookie':Iliii,'Referer':iIIll1[liIlI1(0x3c0,'w2Bk')],'User-Agent':liIlI1(0x312,'4xt%')},'timeout':iIIll1['RUTUD'](0xf,0x3e8)};$['post'](l1Iil,(iill1l,IiIiII,iill1i)=>{const iliI1=liIlI1,l1Il1={'Jarmi':function(iill11,I1IliI){const IiIi1I=iii1II;return iIIll1[IiIi1I(0x217,'FabQ')](iill11,I1IliI);},'hXxPg':function(III1II,l1I1II){return III1II+l1I1II;},'qjmbS':function(iIIlil,IiIiI1){const iillIi=iii1II;return iIIll1[iillIi(0x206,'EXMF')](iIIlil,IiIiI1);},'viQHs':iIIll1['KeMgh'],'yomsW':function(iIIlii,llIII1){const iii11=iii1II;return iIIll1[iii11(0x3e1,'he!b')](iIIlii,llIII1);},'CkWpo':iIIll1[iliI1(0x1e6,'GbfI')],'ohNlK':iIIll1['WaNaI']};try{if(iill1l){if(iIIll1[iliI1(0x266,'OmL(')](iIIll1[iliI1(0x212,'0kO$')],iliI1(0x28e,'GbfI'))){if(I1l1I1)lIIii1[iliI1(0x321,'UoW5')](iliI1(0x392,'O@gF')),ll1i1[iliI1(0x1d5,'vlyB')](IIli1i(I1iIi1));else{lliil1=IIllI['parse'](lliilI);if(l1Il1[iliI1(0x355,'Y5dI')](lili1['index'],0x1)){let iill1I=l1ii1?.['data']?.[iliI1(0x347,'&Ir$')]?.[iliI1(0x21f,'js!k')];ii1ll['log']('店铺名称：'+iill1I+iliI1(0x1d9,'vlyB')+IliI1l),lliiil+=l1Il1[iliI1(0x34e,'vVuM')](l1Il1[iliI1(0x340,'RyF)')]('【',iill1I),'】');}}}else console[iliI1(0x25c,']Ar7')](''+JSON[iliI1(0x23d,'1%T1')](iill1l)),console[iliI1(0x332,'hLLt')]($['name']+iliI1(0x313,'@d@W'));}else{if(iill1i){iill1i=JSON[iliI1(0x3d0,'EXMF')](iill1i);if(iill1i[iIIll1[iliI1(0x248,'UoW5')]]===0xd){if(iIIll1[iliI1(0x234,'3)PT')]!==iIIll1[iliI1(0x292,'Gz3!')])l1Iii['SaVkx'](IllIiI);else{$['isLogin']=![];return;}}if(iIIll1[iliI1(0x26a,'&Ir$')](iill1i[iIIll1[iliI1(0x349,'js!k')]],0x0)){if(iIIll1['eoTGq']===iIIll1[iliI1(0x23f,'Y5dI')])$[iliI1(0x3c2,'Ytlu')]=iill1i[iIIll1[iliI1(0x36c,'zV!T')]][iliI1(0x35c,'vlyB')];else{let lIIi1i=i1III[iliI1(0x3e7,'kyiK')](l1Il1['viQHs'])||'[]';lIIi1i=l1Il1[iliI1(0x36a,'l9qH')](Ii1iIi,lIIi1i),iliIIl=lIIi1i[iliI1(0x3df,'vlyB')](liI11I=>liI11I[iliI1(0x2d2,'yHz8')]),Ii1iIl[iliI1(0x2fe,'OGWi')](),iliIIi[iliI1(0x200,'0K5W')](...[ill11I['getdata'](l1Il1[iliI1(0x397,'EXMF')]),Iliiil['getdata'](l1Il1[iliI1(0x3a3,'4xt%')])]),li1Il['reverse'](),li1Ii=Iliiii[iliI1(0x35a,'3)PT')](III1=>III1!==''&&III1!==null&&III1!==i1IIl);}}else iIIll1['dDCDr'](iIIll1['cxGRO'],iIIll1['cxGRO'])?liIlI[iliI1(0x333,'[]Wt')](l1Iii[iliI1(0x2b1,'aTce')]):$['nickName']=$[iliI1(0x2a8,'&Ir$')];}else iIIll1[iliI1(0x27d,'kyiK')](iIIll1[iliI1(0x241,'4xt%')],iIIll1[iliI1(0x3d7,'niJ3')])?console[iliI1(0x367,'FabQ')]('京东服务器返回空数据'):llll1['log']('签到失败：'+lil11l?.['msg']);}}catch(lIIi1l){if(iIIll1['HuIey']('cykgR',iliI1(0x260,'iY$I'))){ii1lI=I1ilIl['parse'](I11iII);if(l1Iii[iliI1(0x303,'0kO$')](I1ilIi[iliI1(0x208,'vlyB')],0x1)){let illili=Iiii1?.['data']?.['shopBaseInfo']?.[iliI1(0x21b,'$al3')];lIIili[iliI1(0x2df,'g!^H')]('店铺名称：'+illili+iliI1(0x3cb,'@d@W')+IiiIil),IiiIii+=l1Iii[iliI1(0x369,'RyF)')]('【',illili)+'】';}}else $[iliI1(0x254,'l9qH')](lIIi1l,IiIiII);}finally{I1Ilii();}});});}function lil1I(iiiII1){const i11iI=IIIlii,liI111={'eSsSy':function(IiIlI,iIlI1i){return IiIlI+iIlI1i;},'voSet':function(iII1Il,IIIliI){return iII1Il+IIIliI;},'cnSdM':function(iII1Ii,iIlI1l){return iII1Ii==iIlI1l;},'IzVKS':function(llIill,l1IIii){return llIill!==l1IIii;},'IUZwo':i11iI(0x2c0,'vVuM'),'lASQv':i11iI(0x2ad,'nE2A'),'GgEmK':'fNGUR','ENJZH':'请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie'};if(liI111['cnSdM'](typeof iiiII1,i11iI(0x32a,'Iwf)'))){if(liI111['IzVKS'](liI111[i11iI(0x1d7,'0kO$')],liI111[i11iI(0x3bd,'OGWi')]))return IIliI1[i11iI(0x1e2,'0kO$')](il1lI);else try{return JSON[i11iI(0x304,'aTce')](iiiII1);}catch(l1IIil){if(liI111[i11iI(0x36b,'8DSL')]!==liI111['GgEmK'])return console[i11iI(0x27e,'0kO$')](l1IIil),$[i11iI(0x3e5,'1%T1')]($['name'],'',liI111[i11iI(0x20b,'[]Wt')]),[];else IlI1Ii+=liI111[i11iI(0x3c1,'aTce')](liI111[i11iI(0x399,'kyiK')](i11I1I,'天'),l1il1i)+'豆，';}}}async function l1l1Ii(I1lI1I,lIi1i1){const lIiII=IIIlii,l1l11={'ZnDFL':lIiII(0x1ee,'8DSL'),'PSgBB':lIiII(0x288,'$al3')};try{if(l1l11[lIiII(0x3b7,'OGWi')]===l1l11[lIiII(0x3ad,'z6bS')])llI1Il[lIiII(0x2f0,'Iwf)')](ii1iii,i11iil);else{let IIIli1=new IIIIli({'appId':I1lI1I,'appid':'interCenter_shopSign','pin':$[lIiII(0x2c3,']Ar7')],'ua':$['UA'],'version':lIiII(0x3d3,']Ar7')});return await IIIli1['genAlgo'](),body=await IIIli1[lIiII(0x246,'t)h*')](lIi1i1[lIiII(0x219,'OGWi')],lIi1i1[lIiII(0x3b3,'[]Wt')]),body;}}catch(I1lI11){}}function IIIIlI(I1I1Il){const l1lii1=IIIlii,l1l1I={'pYaPH':function(IIIl,IIIi){return IIIl||IIIi;},'LTVio':'abcdef0123456789','qqvke':function(l1IIli,iII1I1){return l1IIli<iII1I1;}};I1I1Il=l1l1I[l1lii1(0x3ab,'w4Oo')](I1I1Il,0x20);let iIlI1I=l1l1I[l1lii1(0x22e,'%9O&')],I1I1Ii=iIlI1I['length'],IiIl1='';for(i=0x0;l1l1I[l1lii1(0x385,'OmL(')](i,I1I1Il);i++)IiIl1+=iIlI1I[l1lii1(0x341,'$al3')](Math[l1lii1(0x3a2,'zV!T')](Math[l1lii1(0x326,'1%T1')]()*I1I1Ii));return IiIl1;}var version_ = 'jsjiami.com.v7';
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
      return this.send.call(this.env, t);
    }
    post(t) {
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
		const {execSync} = require('child_process');
		execSync('sleep 15');
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
		const {execSync} = require('child_process');
		execSync('sleep 15');
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

