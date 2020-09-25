---
title: vscode 快速生成 html
date: 2017-10-25 11:17:23
tags: 
  - 快速生成html
  - vscode
  - html
category:
  - fase ide
  - vscode
---

{% asset_img vscode.jpg %}

> vscode 快速生成html

<!-- more -->

## 语法

> 说明： 输入以下代码，敲击回车，就会快速生成指定的代码

### 生成class

* 写法

``` html
div.btn
```

* 效果

``` html
<div class="btn"></div>
```

### 生成id

* 写法

``` html
div#app
```

* 效果

``` html
<div id="app"></div>
```

### 携带初始值

#### 固定值

* 写法

``` html
li{测试}
```

* 效果

``` html
<li>测试</li>
```

#### 变量

* 写法

``` html
li{$$}*10
```

* 效果

``` html
  <li>01</li>
  <li>02</li>
  <li>03</li>
  <li>04</li>
  <li>05</li>
  <li>06</li>
  <li>07</li>
  <li>08</li>
  <li>09</li>
  <li>10</li>
```

`说明`：
  1.后面必须跟一个`*1`，否则ide会`$`当成普通字符串
  2.`$$`位数代表生成数字的长度

### 批量生成

只需要在代码后面添加`*10`，即可

* 写法

``` html
li.btn*10
```

* 效果

``` html
  <li class="btn"></li>
  <li class="btn"></li>
  <li class="btn"></li>
  <li class="btn"></li>
  <li class="btn"></li>
  <li class="btn"></li>
  <li class="btn"></li>
  <li class="btn"></li>
  <li class="btn"></li>
  <li class="btn"></li>
```

## 综合

* 写法

``` html
ul#wrapper>li.item.item2[type={$$}]{item$$}*10
```

* 效果

``` html
<ul id="wrapper">
  <li class="item item2" type="01">item01</li>
  <li class="item item2" type="02">item02</li>
  <li class="item item2" type="03">item03</li>
  <li class="item item2" type="04">item04</li>
  <li class="item item2" type="05">item05</li>
  <li class="item item2" type="06">item06</li>
  <li class="item item2" type="07">item07</li>
  <li class="item item2" type="08">item08</li>
  <li class="item item2" type="09">item09</li>
  <li class="item item2" type="10">item10</li>
</ul>
```
