---
title: 'nodejs利用images为图片添加水印'
category:
  - ['nodejs', 'images']
tags:
  - '水印'
---

> Cross-platform image decoder(png/jpeg/gif) and encoder(png/jpeg) for Node.js

<!-- more -->

## 准备工作
 
1. 确保本地安装了node环境
查看是否装node
``` bash
node --version
```

2. 安装images库
``` bash
yarn add images
```

## 添加水印
``` js
var images = require("images");

images("D:/Project/IIS/localBackendServer/service/upload/26char/A.jpg")                     //Load image from file 
  .size(400)                          //Geometric scaling the image to 400 pixels width
  .draw(images("D:/Project/IIS/localBackendServer/service/upload/logo.png"), 10, 10)   //Drawn logo at coordinates (10,10)
  .save("D:/Project/IIS/localBackendServer/service/upload/new/A.jpg", {               //Save the image to a file, with the quality of 50
    quality: 50
});
```

