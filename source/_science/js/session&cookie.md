---
title: "SESSION & COOKIE"
date: "2020-03-07"
draft: false
publishdate: "2020-03-08"
tags: ["Cookie", "Session"]
categories: ["js"]
---

## Cookie和Session

Cookie和Session都是用来跟踪浏览器用户会话方式

## 区别

### 保存状态
  > Cookie 保存在浏览器端， Session保存在服务器端

### 使用方式
#### Cookie机制：
  - 如果不在浏览器中设置过期时间， cookie会被保存在内存中， 生命周期随着浏览器的关闭而结束， 这种又被称为**会话Cookie**。
  - Cookie是服务器发给客户端的特殊信息，cookie是以文本的方式保存在客户端，每次请求时都带上它
#### Session机制：
  * 当服务器收到请求需要创建session对象的时候， 会首先客户端的请求中是否包含由sessionsid,？如果有sessionid，服务器会根据这个sessionsid 返回相应的session对象。如果请求中没有sessionid， 服务器会创建一个sessionid， 并把这个sessionid返回给客户端。
  - 客户端通常使用cookie方式保存sessionid，

#### 存储内容
  - Cookie只能以文本的方式，保存字符串类型；
  - session通过类似于Hashtable的数据结构保存， 能支持任意格式的对象。
#### 存储大小
  - Cookie只能保存4kb的数据;
  - session没有限制。
#### 安全性
  * Cookie安全性大于session
    1. sessionid存储于cookie中，要攻破session， 首先需要攻破cookie
    2. sessionid是要有人登录， 或者*session_start*才会有， 所以攻破cookie不一定能得到sessionid
    3. 第二次启动session_start后，前一次的sessionID就是失效了，session过期后，sessionID也随之失效
    4. sessionID是加密的
#### 应用场景
  * Cookie
    1. 判断用户是否登录
    2. 上次登录的时间
    3. 浏览次数
    4. 上次查看的页面
  * Session
    - 保存每个用户的专有信息
    1. 登录信息
    2. 购物车信息
    3. etc
#### 缺点
  - cookie
    1. 用户可操作cookie, 功能受限
    2. 大小受限
    3. 安全性低
    4. 每次都要传送cookie到服务器， 浪费带宽
  - session
    1. Session保存的东西越多，就越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大
    2. 依赖于cookie（sessionID保存在cookie），如果禁用cookie，则要使用URL重写，不安全
    3. 创建Session变量有很大的随意性，可随时调用，不需要开发者做精确地处理，所以，过度使用session变量将会导致代码不可读而且不好维护。

## 使用语法
### Cookie
运用js设置cookie、读取cookie、删除cookie
#### 设置Cookie

  ``` js
  function setCookie(COOKIE_KEY, COOKIE_VALUE, EXDAYS) {
    if (EXDAYS) {
      var d = new Date();
      d.setTime(d.getTime() + (EXDAYS*24*60*60*1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = COOKIE_KEY + "=" + COOKIE_VALUE + "; " + expires;
    } else {
      document.cookie = COOKIE_KEY + "=" + COOKIE_VALUE
    }
  }
  ```
#### 获取Cookie
  > 我个人喜欢把cookie保存为键值对的形式， 保存的时候，将值全部转为字符串， 使用的时候，按照实际情况把值转为json， 这样的好处是cookie里面的*key*值只有一个，方便开发人员记忆，也减小了cookie占用的容量, 下面列举了三种，基本的逻辑都是一样（获取全部cookie字符串、从cookie字符串晒选并匹配出当前的值、处理结果并返回）
  ``` js
  var key = 'BUJIDAO_COOKIE_KEY'
  ```
  - 第一种
  ``` js
  function getCookie(COOKIE_KEY) {
    var arr, reg = new RegExp("(^| )" + COOKIE_KEY + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }
  getCookie(key)
  ```

  - 第二种
  ``` js
  function getCookie(COOKIE_KEY){
      if (document.cookie.length>0){//判断cookie是否存在
        //获取cookie名称加=的索引值
        var c_start = document.cookie.indexOf(COOKIE_KEY + "=");
        if (c_start!=-1){ //说明这个cookie存在
          //获取cookie名称对应值的开始索引值
          c_start=c_start + COOKIE_KEY.length+1
          //从c_start位置开始找第一个分号的索引值，也就是cookie名称对应值的结束索引值
          c_end=document.cookie.indexOf(";",c_start)  
          //如果找不到，说明是cookie名称对应值的结束索引值就是cookie的长度
          if (c_end==-1) c_end=document.cookie.length
          //unescape() 函数可对通过 escape() 编码的字符串进行解码
          //获取cookie名称对应的值，并返回
          return unescape(document.cookie.substring(c_start,c_end))
        }
      }
      return "" //不存在返回空字符串
  }
  getCookie(key)
  ```

  - 第三种
  ``` js
  function getCookie(COOKIE_KEY){
      var strcookie = document.cookie;//获取cookie字符串
      var arrcookie = strcookie.split("; ");//分割
      //遍历匹配
      for ( var i = 0; i < arrcookie.length; i++) {
          var arr = arrcookie[i].split("=");
          if (arr[0] == COOKIE_KEY){
              return arr[1];
          }
      }
      return "";
  }
  getCookie(key)
  ```
#### 清除Cookie

  ``` js
  function clearCookie(COOKIE_KEY) { 
    setCookie(COOKIE_KEY, "", -1); 
  }
  ```

### Session
运用js设置session、读取session、删除session
#### 设置Session
``` js
sessionStorage.setItem('key', 'value');
```
#### 获取Session
``` js
sessionStorage.getItem('key');
```
#### 清除Session
``` js
sessionStorage.removeItem('key');
```
#### 清除所有Session
``` js
sessionStorage.clear();
```