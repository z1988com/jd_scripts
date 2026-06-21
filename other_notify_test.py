#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
移动云盘自动签到 v5.0.5

包含以下功能:
1. 每日自动签到 (签到/抽奖/摇一摇/新版云朵领取)
2. 多账号并发支持 (环境变量 & 分隔)
3. 云朵中心新版任务自动处理 (上传/分享/AI相机/月任务补传等)
4. 临时文件智能清理与详细日志推送

更新说明:

### 20260503
v5.0.5:
- 修复分享文件任务流程。
- 新增去体验AI相机任务。
- 新增五一福利任务。

### 20260425
v5.0.4:
- 整合 Authorization 自动刷新、本地 token 缓存与过期前续期。
- 新增账号级 deviceId/token 缓存，支持手动补填 deviceId 并复用。
- 优化 JWT 失败重试、设备信息与启动提示。

### 20260420
v5.0.3:
- 适配新版签到链路，修复旧接口报错。
- 接入云朵中心新版任务。
- 新增 AI 相机、上传清理、分享文件每日自动化与月上传补传能力。
- 优化启动与任务日志输出。

配置说明:
变量名: ydyp
赋值方式:
格式：Authorization值#手机号

⚠️ 依赖安装:
pip3 install requests pycryptodome

定时规则建议 (Cron):
0 0 8,16,20 * * * (每日早中晚执行)

Author: YaoHuo8648
Email: zheyizzf@188.com
Update: 2026.05.03
"""

import base64
import hashlib
import json
import os
import random
import re
import time
import uuid
from datetime import datetime, timezone, timedelta
from os import path
from pathlib import Path
from urllib.parse import unquote

import requests


# 发送通知
def load_send():
    cur_path = path.abspath(path.dirname(__file__))
    notify_file = cur_path + "/notify.py"

    if path.exists(notify_file):
        try:
            import sys
            if cur_path not in sys.path:
                sys.path.insert(0, cur_path)
            from notify import send
            print("加载通知服务成功！")
            return send
        except Exception as e:
            print(f"加载通知服务失败: {e}")
    else:
        print("加载通知服务失败: notify.py不存在")

    return False


    msg = ""

    msg += f"任务详情:\n\n"
    msg += f"云朵汇总:\n"
    


        
    send = load_send()

    if send:
        send('中国移动云盘任务信息', msg)
