---
title: Markdown 语法
date: 2017-07-13 14:52:41
categories:
  - [教程, markdown]
tags:
  - markdown
---

{% asset_img markdown.png Markdown 图标 %}
> Markdown 能被使用来撰写电子书，如：Gitbook

<!-- more -->

## 标题
Markdown 标题有两种格式。

### 使用 = 和 - 标记一级和二级标题

格式如下

``` bash
我展示的是一级标题
=================

我展示的是二级标题
-----------------
```

### 使用 # 号标记
使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。
```bash
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## Markdown 段落

### 段落
Markdown 段落没有特殊的格式，直接编写文字就好，段落的换行是使用两个以上空格加上回车。

### 字体
``` bash
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
```

### 分隔线
你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
```bash
***
* * *
*****
- - -
----------
```

### 删除线
如果段落上的文字要添加删除线，只需要在文字的两端加上两个波浪线 ~~ 即可，实例如下
``` bash
~~BAIDU.COM~~
```

### 下划线
下划线可以通过 HTML 的 <u\> 标签来实现：
``` bash
# <u>带下划线文本</u>
```

### 脚注
脚注是对文本的补充说明。

Markdown 脚注的格式如下:

``` bash
[^要注明的文本]
```

## 列表

### 无序列表

无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记，这些标记后面要添加一个空格，然后再填写内容：

``` bash
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项
```

### 有序列表
``` bash
1. 第一项
2. 第二项
3. 第三项
```

### 列表嵌套
列表嵌套只需在子列表中的选项前面添加四个空格即可：

``` bash
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
```

## 区块
Markdown 区块引用是在段落开头使用 > 符号 ，然后后面紧跟一个空格符号：
```bash
> 区块引用
> 学的不仅是技术更是梦想
```

## 代码
如果是段落上的一个函数或片段的代码可以用反引号把它包起来（`），例如：
```bash
`console.log('hello markdown')`
```
`console.log('hello markdown')`

### 代码区块
代码区块使用 4 个空格或者一个制表符（Tab 键）。
```bash
    console.log('hello markdown')
```
    console.log('hello markdown')

## 链接

``` bash
[链接名称](链接地址)

或者

<链接地址>

这是一个连接地址：[Bing](https://www.bing.com)
```
这是一个连接地址：[Bing](https://www.bing.com)

### 直接使用链接地址
``` bash
<https://www.bing.com>
```
<https://www.bing.com>

## 图片

``` bash
{% asset_img markdown.png Markdown %}

![alt 属性文本](图片地址)

<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">
```

## 表格
Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行。
``` bash
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```

|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

### 对齐方式

- 默认居中
- `-:` 设置内容和标题栏居右对齐。
- `:-` 设置内容和标题栏居左对齐。
- `:-:` 设置内容和标题栏居中对齐。

## 高级技巧
### 支持的 HTML 元素
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。

目前支持的 HTML 元素有：`<kbd>` `<b>` `<i>` `<em>` `<sup>` `<sub>` `<br>`等 ，如：

``` bash
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
```
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

### Note

{% note default %}
default 提示块标签
{% endnote %}

{% note primary %}
primary 提示块标签
{% endnote %}

{% note success %}
success 提示块标签
{% endnote %}

{% note info %}
info 提示块标签
{% endnote %}

{% note warning %}
warning 提示块标签
{% endnote %}

{% note danger %}
danger 提示块标签
{% endnote %}