---
title: 【亲测】在npm上发布自己的npm包
date: 2020-12-26 15:25:41
description:
category: 
  - webpack
  - npm
tags:
  - webpack
  - npm
---

{% asset_img logo.png %}

<!-- more -->

## 安装

### 一、准备工作

在正式开始演示前，我们还需要做两项准备工作：

#### 注册npm账户

* 全名：
* 邮箱：
* 用户名：`重要！发布scoped包时会用到`
* 密码：

#### 全局安装nrm

```bash
npm i nrm -g
```

`nrm`是npm仓库管理的软件，可用于npm仓库的快速切换

`nrm` 常用命令：
```bash
nrm //展示nrm可用命令
nrm ls //列出已经配置的所有仓库
nrm test //测试所有仓库的响应时间
nrm add <registry> <url> //新增仓库
nrm use <registry> //切换仓库
```

### 二、发布包

开始演示前做两个简短说明：

（1）npm官方建议规范的包，<strong>至少</strong>包含：
* package.json（包的基本信息）
* README.m d（文档）
* index.js （入口文件）

后续的演示都遵循此规范

（2）本次仅演示个人账户的包发布，包括一个unscoped包和一个scoped的包。团体账户下的包发布流程和个人账户差别不大，在此不做展开。

#### 发布unscoped包

`pks-cli`

##### 第一步：创建项目

<strong>（1）创建工程文件夹</strong>

``` bash
mkdir yuyy-test-pkg && cd yuyy-test-pkg
```

<strong>（2）创建package.json </strong>

``` bash
yarn
```

```bash
{
  "name": "pks-cli",
  "version": "1.0.0",
  "description": "packageing script(ts/js) together and used in html",
  "main": "src/index.ts",
  "license": "MIT",
  "author": "AlexCeng <izengjing.cn@gmail.com>",
  "scripts": {
    "dev": "webpack --watch --progress --config build/webpack.dev.js",
    "build": "webpack --config build/webpack.prod.js"
  },
  "keywords": [
    "webpack",
    "typescript",
    "javascript",
    "html",
    "package"
  ],
  "dependencies": {},
  "devDependencies": {
    "@types/node": "^14.14.16",
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^4.5.0",
    "lodash": "^4.17.20",
    "ts-loader": "^8.0.12",
    "typescript": "^4.1.3",
    "webpack": "^5.11.0",
    "webpack-cli": "^4.2.0",
    "webpack-dev-server": "^3.11.0",
    "webpack-merge": "^5.7.2"
  }
}

```

<strong>（3）创建README.md</strong>

```bash
<p align="center">
  <h1>Docs</h1>
</p>

<p align="center">
  <img src="./pks-logo.png" height="200px" />
</p>

  [English](./README.zh-CN.md) | 简体中文

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

## Install

* npm

  npm install pks-cli


* yarn


  yarn add pks-cli


## Build


# development
npm run dev

# publish
npm run build

## License

Copyright (c) 2017-present Alex Ceng


[npm-image]: https://img.shields.io/npm/v/pks-cli.svg
[npm-url]: https://npmjs.org/package/pks-cli
[downloads-image]: https://img.shields.io/npm/dm/pks-cli.svg
[downloads-url]: https://npmcharts.com/compare/pks-cli?minimal=true
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/pks-cli
[coveralls-image]: https://img.shields.io/coveralls/expressjs/pks-cli/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/pks-cli?branch=master

```


<p>最终的目录结构：</p>
<pre class="hljs css"><code>└── <span class="hljs-selector-tag">pks-cli</span>
    ├── <span class="hljs-selector-tag">README</span><span class="hljs-selector-class">.md</span>
    ├── <span class="hljs-selector-tag">index</span><span class="hljs-selector-class">.js</span>
    └── <span class="hljs-selector-tag">package</span><span class="hljs-selector-class">.json</span></code></pre>

##### 第二步：发布

``` bash
npm publish
```

<i>此时，可能出现报错，可能出现的报错见<a href="#可能报错">报错分析</a></i>

<p>以上问题解决后再次执行发布命令<code>npm publish</code>，发布成功</p>

##### 第三步：去npm 官网搜索

有可能有延迟，不能立马看不到。

#### 2.发布scoped包

<p>@yuyy/babel</p>

<h5><strong>第一步：创建项目</strong></h5>

<p><strong>（1）创建工程文件夹</strong></p>

<pre class="hljs perl"><code style="word-break: break-word; white-space: initial;"><span class="hljs-keyword">mkdir</span> babel &amp;&amp; cd babel</code></pre>

<p><strong>（2）创建package.json </strong></p>

<pre class="hljs swift"><code style="word-break: break-word; white-space: initial;">npm <span class="hljs-keyword">init</span></code></pre>

<p>按提示操作，最终结果：</p>

<pre class="hljs json"><code>{
  <span class="hljs-attr">"name"</span>: <span class="hljs-string">"babel"</span>,
  <span class="hljs-attr">"version"</span>: <span class="hljs-string">"1.0.0"</span>,
  <span class="hljs-attr">"description"</span>: <span class="hljs-string">"my scoped test package"</span>,
  <span class="hljs-attr">"main"</span>: <span class="hljs-string">"index.js"</span>,
  <span class="hljs-attr">"scripts"</span>: {
    <span class="hljs-attr">"test"</span>: <span class="hljs-string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span>
  },
  <span class="hljs-attr">"keywords"</span>: [
    <span class="hljs-string">"npm"</span>,
    <span class="hljs-string">"package"</span>
  ],
  <span class="hljs-attr">"author"</span>: <span class="hljs-string">"yuyy"</span>,
  <span class="hljs-attr">"license"</span>: <span class="hljs-string">"ISC"</span>
}</code></pre>

<p><strong>（3）创建README.md</strong><br>内容：</p>

<pre class="hljs kotlin"><code>### <span class="hljs-meta">@yuyy</span>/babel

This <span class="hljs-keyword">is</span> my scoped npm <span class="hljs-keyword">package</span>!

It <span class="hljs-keyword">is</span> just <span class="hljs-keyword">for</span> learn.</code></pre>
<p><strong>（4）创建index.js</strong><br>内容：</p>
<pre class="hljs javascript"><code><span class="hljs-built_in">module</span>.exports = {
    <span class="hljs-attr">printMsg</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'this message is from @yuyy/babel!'</span>);
    }
}</code></pre>
<p>最终的目录结构：</p>
<pre class="hljs css"><code>└── <span class="hljs-selector-tag">babel</span>
    ├── <span class="hljs-selector-tag">README</span><span class="hljs-selector-class">.md</span>
    ├── <span class="hljs-selector-tag">index</span><span class="hljs-selector-class">.js</span>
    └── <span class="hljs-selector-tag">package</span><span class="hljs-selector-class">.json</span></code></pre>

<h5><strong>第二步：发布</strong></h5>

<pre class="hljs nginx"><code style="word-break: break-word; white-space: initial;"><span class="hljs-attribute">npm</span> publish</code></pre>
<p>报错：没有发布权限<br><code>npm ERR!</code> publish Failed PUT 401<br><code>npm ERR!</code> code E401<br><code>npm ERR!</code> This package requires that publishers enable TFA and provide an OTP to publish. For more info, visit: <a href="https://go.npm.me/2fa-guide" rel="nofollow noreferrer" target="_blank">https://go.npm.me/2fa-guide</a> : babel</p>
<p>原因：已经存在babel包，而我又不是babel的发布者</p>
<p>解决：包名和域名差不多，先到先得，如果我非要发布一个叫babel的包，只能给它加作用域放到我的命名空间下</p>
<h5><strong>第三步：加作用域</strong></h5>
<pre class="hljs kotlin"><code style="word-break: break-word; white-space: initial;">npm <span class="hljs-keyword">init</span> --scope=<span class="hljs-meta">@yuyy</span> -y</code></pre>
<p>@符号后面的是你注册npm账户时的username，如果不记得可以通过<code>npm whoami</code>查询。<br>上面的命令其实是在重新生成package.json，只是会给包增加了作用域，执行完后package.json现在的内容：</p>
<pre class="hljs json"><code>{
  <span class="hljs-attr">"name"</span>: <span class="hljs-string">"@yuyy/babel"</span>,
  <span class="hljs-attr">"version"</span>: <span class="hljs-string">"1.0.0"</span>,
  <span class="hljs-attr">"description"</span>: <span class="hljs-string">"my scoped test package"</span>,
  <span class="hljs-attr">"main"</span>: <span class="hljs-string">"index.js"</span>,
  <span class="hljs-attr">"scripts"</span>: {
    <span class="hljs-attr">"test"</span>: <span class="hljs-string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span>
  },
  <span class="hljs-attr">"keywords"</span>: [
    <span class="hljs-string">"npm"</span>,
    <span class="hljs-string">"package"</span>
  ],
  <span class="hljs-attr">"author"</span>: <span class="hljs-string">"yuyy"</span>,
  <span class="hljs-attr">"license"</span>: <span class="hljs-string">"ISC"</span>
}</code></pre>
<p>唯一的变化是name字段由原来的babel变成了@yuyy/babel。</p>
<h5><strong>第四步：再次发布</strong></h5>
<pre class="hljs nginx"><code style="word-break: break-word; white-space: initial;"><span class="hljs-attribute">npm</span> publish</code></pre>
<p>报错：<br><code>npm ERR!</code> publish Failed PUT 402<br><code>npm ERR!</code> code E402<br><code>npm ERR!</code> You must sign up for private packages : @yuyy/babel</p>
<p>原因：</p>
<ul>
<li>
<code>npm publish</code> 命令执行，默认是进行私有发布，参见<a href="https://docs.npmjs.com/cli/publish.html" rel="nofollow noreferrer" target="_blank">官网publish命令</a>
</li>
</ul>
<p>解决：如果不想花钱，那只能将包面向公共发布，这也符合npm鼓励开源的精神，这一点和GitHub创建仓库类似。</p>
<h5><strong>第五步：公共发布</strong></h5>
<pre class="hljs swift"><code style="word-break: break-word; white-space: initial;">npm publish --access <span class="hljs-keyword">public</span></code></pre>
<p>值得注意的一点：我们的项目名是babel，最终发布的包名是@yuyy/babel，可见<strong>发布的包名可以和项目名不一致，包名取决于package.json中的name字段。</strong></p>
<h5><strong>第六步：npm官网搜索</strong></h5>

## 可能报错

#### 错误代码404

``` bash
ERR! code E404
npm ERR! 404 Not Found - PUT https://npm.pkg.github.com/xxxxx
npm ERR! 404
npm ERR! 404  'xxxxx@1.0.0' is not in the npm registry.
npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
npm ERR! 404
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url
```

* 错误原因一

  可能原因：未登录npm账户

  解决办法： 登录npm账户

  输入`npm adduser`

  * 用户名
  * 密码
  * email邮箱

* 错误原因二

  可能原因：登录账户以后，才运行`nrm use npm`切换到npm来源。npm来源切换以后，以前的登录不生效，账户需要在`nrm use npm`执行以后进行登录

  解决办法：登录npm账户

  输入`npm adduser`

  * 用户名
  * 密码
  * email邮箱

#### 错误代码ENEEDAUTH
``` bash
npm ERR! code ENEEDAUTH
npm ERR! need auth auth required for publishing
npm ERR! need auth You need to authorize this machine using npm adduser
```

 * 错误原因：未登录npm账户

    解决办法： 登录npm账户

    输入`npm adduser`

    * 用户名
    * 密码
    * email邮箱

###### 可能原因

* 未登录npm账号

  处理方法：登录账号

* 已经登录账号

  * 登录账号以后，运行`nrm use npm`


#### 错误代码403

#### 报错代码
``` bash
npm ERR! code E403
npm ERR! 403 403 Forbidden - GET xxxxxxx
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy.
```

* 可能原因： 新注册用户，没有验证邮箱

  处理办法：前往邮箱进行账号验证

> 编后语：
> 文章是亲自从注册到安装，一步一步的调试过的，网络上很多类似的文章，就不赘述了。这里主要说一点就是发布的时候，可能有一系列的报错，主要包括“注册以后没验证邮箱、切换了npm来源没有重新登录账号”，希望以后的小伙伴看到这个文章，能注意一下
> 文章参考来源：https://segmentfault.com/a/1190000017463371

