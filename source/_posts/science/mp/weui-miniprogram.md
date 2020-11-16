---
title: wepy 使用 weui-miniprogram
date: 2020-11-16 15:42:28
description:
category:
  - weui
tags:
  - wepy
  - weui
  - 小程序
  - mp
---

{% asset_img logo.jpg %}

> 如何在 wepy 中安装 weui-miniprogram

<!-- more -->

## 安装 weui-minprogram包
```
yarn add weui-miniprogram
```

## 引入 weui-miniprogram 到项目中

[官方文档](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/quickstart.html#%E5%BC%95%E5%85%A5%E7%BB%84%E4%BB%B6)

[官方文档2](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#useExtendedLib)

[参考](https://blog.csdn.net/meteorsshower2013/article/details/105706415)


在 app.wpy 文件中加入
```
{
  "useExtendedLib": {
    "weui": true
  }
}
```