
---
title: "Code Style Test"
date: "2020-03-05"
draft: false
publishdate: "2020-03-07"
author: Alex Ceng
---

代码样式

-----
分割线
===

## 引用

* 区块引用
  > asdfa
    >> 2
    >> 3
  > asdf
  > 肯定的
  > yes you changed

## Bash
``` bash
cd your-hexo-site
git clone https://github.com/iissnan/hexo-theme-next
```
## Html

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>数据可视化监控大屏</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```

## JavaScript
``` javascript
function filterData(origin, callback) {
  var result = []
  origin.forEach(element => {
    var flag = true
    result.forEach(ele => ele.date === element.date ? flag = false : '')
    if (flag) {
      result.push({
        date: element.date,
        data: origin.filter(res => res.date === element.date && Object.keys(res.cond) == 10)
      })
    }
  });
  callback(result)
}

```

## CSS

``` css
.box-style {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.06) 0px 3px 1px -2px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.09) 0px -1px 0.5px 0px;
  background-color: rgba(255, 255, 255, 0.875);
  margin-bottom: 10px;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

ul {
  padding: 0;
  margin: 0;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  -webkit-text-size-adjust: none;
}
```