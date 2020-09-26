---
title: python三大神器之virtualenv
date: 2020-09-26 20:24:15
description: 
category:
  - [Python, virtualenv]
tags:
  - virtualenv
  - virtualenv教程
---

{% asset_img virtualenv.jpg %}

> * pip, virtualenv, fabric通称为pythoner的三大神器。
> * 用来建立一个虚拟的python环境，一个专属于项目的python环境。用virtualenv 来保持一个干净的环境非常有用

<!-- more -->

|||
|  ----  | ----  |
| 安装平台  | window 10 |
| 安装环境  | python 3.0 |
|管理包版本|pip3|


# 基本安装

1. 安装virtualenv
{% codeblock lang:bath %}
pip3 install virtualenv
{% endcodeblock %}

2. 查看安装版本
{% codeblock lang:bath %}
virtualenv --version
{% endcodeblock %}

3. 为一个工程项目搭建一个虚拟环境
{% codeblock lang:bath %}
cd my_project
virtualenv my_project_env
{% endcodeblock %}

  另外，如果存在多个python解释器，可以选择指定一个Python解释器（比如``python2.7``），没有指定则由系统默认的解释器来搭建：
  {% codeblock lang:bath %}
  virtualenv -p /usr/bin/python2.7 my_project_env
  {% endcodeblock %}

  将会在当前的目录中创建一个名`my_project_env`的文件夹，这是一个独立的`python`运行环境，包含了`Python`可执行文件， 以及 `pip` 库的一份拷贝，这样就能安装其他包了，不过已经安装到系统Python环境中的所有第三方包都不会复制过来，这样，我们就得到了一个不带任何第三方包的“干净”的Python运行环境来。

  要开始使用虚拟环境，其需要被激活：
  {% codeblock lang:bath %}
  source my_project_env/bin/activate
  {% endcodeblock %}

  停用虚拟环境：

  {% codeblock lang:bath %}
  deactivate
  {% endcodeblock %}

  停用后将回到系统默认的Python解释器


# 安装遇到的问题总结

## OSError: [WinError 1] 函数不正确

* 问题复现

当运行以下命令，创建虚拟运行环境的时候
{% codeblock lang:bath%}
virtualenv venv
{% endcodeblock %}

命令框提示`OSError: [WinError 1] 函数不正确`

* 解决办法

暂未处理
