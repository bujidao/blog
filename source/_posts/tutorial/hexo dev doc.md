---
title: Hexo常用语法命令
categories:
  - ['教程', 'hexo']
date: 2017/7/13 20:46:25
tags:
  - hexo
top: true
---
{% asset_img post-image hexo.png hexo 图标 %}
> This tutorial is about how to use hexo and note some useful commands
<!-- more -->

## Front-matter
|参数|描述|默认值|
|---|---|---|
|layout|布局||
|title|标题|文章的文件名|
|date|建立日期|文件建立日期|
|updated|更新日期|文件更新日期|
|comments|开启文章评论功能|true|
|tags|标签||
|categories|分类||
|permalink|覆盖文章网址||
|top|是否置顶|false|
### OfficeSite

``` bash
$ https://theme-next.js.org/docs/getting-started/
```

## 标签插件

> https://hexo.io/zh-cn/docs/tag-plugins.html

### 引用块

在文章中插入引言，可包含作者、来源和标题。

##### 别号： quote

``` bash
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

#### 样例
##### 没有提供参数，则只输出普通的 blockquote
``` bash
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

##### 引用书上的句子
``` bash
{% blockquote alex ceng, bing %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```
{% blockquote alex ceng, bing %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

##### 引用 Twitter
``` bash
{% blockquote @文章来源 https://bujidao.github.io/blog %}
NEW: DevDocs now comes with syntax highlighting. 
{% endblockquote %}
```
{% blockquote @文章来源 https://bujidao.github.io/blog %}
NEW: DevDocs now comes with syntax highlighting. 
{% endblockquote %}

### 代码块

#### 普通的代码块
```bash
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

#### 指定语言
```bash
{% codeblock lang:js %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock lang:js %}
alert('Hello World!');
{% endcodeblock %}

#### 附加说明
```bash
{% codeblock 弹框 %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock 弹框 %}
alert('Hello World!');
{% endcodeblock %}

### 引用文章

引用其他文章的链接。

#### 用法
``` bash
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

##### 例子
``` bash
如未安装Typescript，请移步{% post_link science/typescript/ts TypeScript教程 %}
```

如未安装Typescript，请移步{% post_link science/typescript/ts TypeScript教程 %}

### 引用资源

#### 用法
```
{% asset_path filename %}
{% asset_img [class names] slug [width] [height] [title text [alt text]] %}
{% asset_link filename [title] [escape] %}
```

##### 例子
```
{% asset_img hexo.png 'hexo 图标' 100 100 %}
```

{% asset_img hexo.png 'hexo 图标' 100 100 %}
