---
title: nginx 反向代理 upstream
date: 2020-09-22 13:38:37
tags:
  - nginx
  - nginx反向代理
category:
  - nginx
---

{% asset_img nginx.png Nginx 反向代理 %}

<!-- more -->

# 使用场景

经常遇到跨域的情况，为了处理这种跨域，通常是通过后端修改配置，以达到处理跨域的功能，但是这样不可避免的会耽误时间，而且对后端可能造成不安全的后果

因此，这里通过`nginx`反向代理的形式解决跨域

# 使用方法

`目标地址`： `http://192.168.1.56:8585/single-code/list`

`本机地址`： `http://192.168.1.144`

## nginx 配置

在nginx.conf 添加如下代码

``` c nginx.conf
upstream testNode {
  server 192.168.1.56:8585;
}

server {
  listen       9521;
  server_name  192.168.1.144;
  
  location / {
    proxy_pass http://testNode/;
    proxy_set_header Proxy-Client-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-For $http_x_forwarded_for;
  }
}
```

## 字段说明
`testNode`: 即将要指向的服务地址

## 流程

本机访问`http://192.168.1.144:9521/single-code/list`，地址被代理到`http://192.168.1.56:8585/single-code/list`
