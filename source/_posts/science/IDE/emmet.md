---
title: Emmet 快速生成 html代码
date: 2018-12-01 13:37:21
tags: 
  - 快速生成html
  - vscode
  - html
category:
  - fast ide
  - vscode
---

{% asset_img logo.png %}

> vscode 快速生成 html代码

<!-- more -->

# 元素

## 子元素： >

使用`>`生成子元素：
```
div>ul>li
```
将生成
``` html
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

## 同级元素： +

使用`+`生成同级元素：
```
div+p+bq
```
将生成
``` html
<div></div>
<p></p>
<blockquote></blockquote>
```

## 父级元素： ^

使用`^`生成父级元素：
```
div+div>p>span+em^bq
```
将生成
``` html
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>
```


```
div+div>p>span+em^^^bq
```
将生成
``` html
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

## 元素加倍： *

使用`*`生成加倍元素：
```
ul>li*5
```
将生成
``` html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```


## 元素编组： ()

使用`()`生成复杂元素：

```
div>(header>ul>li*2>a)+footer>p
```
将生成
``` html
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```


```
(div>dl>(dt+dd)*3)+footer>p
```
将生成
``` html
<div>
  <dl>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
  </dl>
</div>
<footer>
  <p></p>
</footer>
```

# 属性

## id 和 class
`#`: 生成id

`.`: 生成class
```
div#header+div.page+div#footer.class1.class2.class3
```
将生成
``` html
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

## 自定义属性： []
```
td[title="Hello world!" colspan=3]
```
将生成
``` html
<td title="Hello world!" colspan="3"></td>
```

## 数字： $
```
ul>li.item$*5
```
将生成
``` html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>
```

使用`$$$`生成指定长度的数字
```
ul>li.item$$$*5
```
将生成
``` html
<ul>
  <li class="item001"></li>
  <li class="item002"></li>
  <li class="item003"></li>
  <li class="item004"></li>
  <li class="item005"></li>
</ul>
```

使用`$@`更改方向和基础值
```
ul>li.item$@-*5
```
将生成
``` html
<ul>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>
```


```
ul>li.item$@-3*5
```
将生成
``` html
<ul>
  <li class="item7"></li>
  <li class="item6"></li>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
</ul>
```


## 文本： {}
```
a{Click me}
```
将生成
``` html
<a href="">Click me</a>
```



{% blockquote @官方文档 https://docs.emmet.io/ %}
{% endblockquote %}
