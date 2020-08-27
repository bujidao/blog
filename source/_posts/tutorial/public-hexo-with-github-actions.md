---
title: Hexo通过GitHub Actions持续集成发布
date: 2017-10-13 14:52:41
categories:
  - [教程, hexo]
  - [教程, github]
tags:
  - hexo
  - github
---

Hexo博客源文件,通过GitHub Action自动发布推送
## 简介

将hexo源文件发布到GitHub, 并通过github action持续集成发布, 可以实现网站的发布、访问功能。并且，由于将hexo源文件发布到github服务器上，因此在任何地方都可以clone源码进行编辑、更新等操作，而不必担心源码丢失导致网页无法持续编辑。
本教程将详细讲解发布hexo的步骤。
<!-- more -->
## 环境
window 10、 node.js 12.14.0、 hexo-cli 3.1.0、 git 2.24.1
这是我的环境，实际情况不一定非得和上面一样，具体视hexo官方的文档为主

## 原理

简单来说,原理就是将所有本地编辑的hexo源文件推送当前的Blog分支blog(这里的blog是我的分支名), 然后在Blog分支添加一个Action, 每当这个分支接收到更新, github就自动就触发一次Action, 通过配置action, 在Github提供的免费服务器上安装一系列环境, 比如：node.js、hexo等, 然后等待github的服务器生成静态页面, 推送到当前repo的master分支, 最后，配置github page, 即可实现网站的访问。

简易流程：
本地编辑--->push到github blog/blog 分支 ---> github actions监听到代码变化 ---> 自动运行设定的程序并打包生成静态页面 ---> 自动push到 github blog/master分支 ---> 手动设置并发布blog/masger静态页面 ---> 页面访问

## 详细步骤
### 准备工作
* 本地准备
  1. 搭建node环境 [官网](https://nodejs.org/en/)
  2. 搭建git环境 [官网](https://git-scm.com/)
  3. 搭建hexo环境 [官网](https://hexo.io/zh-cn/index.html)
  4. 生成一个hexo项目，作为测试使用， 具体生成hexo项目步骤见[官网](https://hexo.io/zh-cn/index.html)
* github准备
  * 在github上创建一个repo blog（我的叫blog， 也可以是其他名字）

### 生成一对公钥和私钥

由于需要将本地的hexo博客的代码通过ssh推送到你的github的分支,因此需要创建一对公钥和私钥。 
在本地打开git bash(没有安装git的同学需要安装[git](https://git-scm.com/))， 输入
``` bash
ssh-keygen
```
输入以上代码以后，直接连敲3个回车就可以了，这样就生成了一对公钥私钥。
{% asset_img git-ssh-keygen.png 生成公钥私钥截屏 %}
打开公钥私钥的本地文件地址， 文件地址见上面截图(我的是c/Users/youname/.ssh)
id_rsa：    私钥
id_rsa.pub  公钥
本地生成密钥以后，就可以开始配置你的repo密钥了
登录github, 打开你的blog repo， 进入Settings界面，

#### 设置github repo的私钥
进入你的blog repo以后， 点击**Secrets**开始设置私钥
点击**Add a new secret**新增一个私钥
私钥的Name:  *ACTION_DEPLOY_KEY_BLOG*（可以自由命名）
私钥的Value: 用记事本打开刚才本地git生成**id_rsa**，然后复制进来就可以

{% asset_img settings-secrets.png 设置私钥%}

#### 设置github repo的公钥
接着上一步， 点击**Deploy keys**开始设置公钥
点击**Add deploy keys**新增一个公钥
公钥的Name:  *github-actions-pubkey-blog*（可以自由命名）
公钥的Value: 用记事本打开刚才本地git生成**id_rsa.pub**，然后复制进来就可以
{% asset_img settings-deploy-keys.png 设置公钥%}

### 修改hexo 配置文件
打开hexo 的 _config.yml文件， 修改为如下代码(repo为自己博客的地址)
``` bash
deploy:
  type: 'git'
  repo: git@github.com:bujidao/blog.git
  branch: 'master'
```
这行代码表示自动推送的类型、地址和分支
修改好以后，就可以执行下一步推送代码到github了

### 推送项目到github

设置好上述条件以后，就可以把项目推送到github blog/blog，**此步不会发布生成可浏览的页面**，github的推送方式有两种，一种是ssh、另一种是https, 这里**一定要选用ssh**， 否则会影响后面的在线打包的流程。具体的push代码到github，请自行上网查找。

### 设置Actions自动生成静态文件
设置github actions 有两种方式，一种是本地通过代码，写好配置文件以后，跟普通的代码操作一样，push 到github就可以，另一种是在github 网页端通过鼠标点击进行配置。
由于本地配置，修改比较方便，操作也跟其他代码的方式一样，因此这里介绍一下怎么通过本地写代码的方式设置action

1. 在hexo 的根目录，新建文件夹
    ``` bash
    .github
    ```
    进入这个文件夹，再新建一个文件夹
    ``` bash
    workflows
    ```
    进入这个文件夹，新建一个.yml 文件, 文件名随意
    ``` bash
    main.yml
    ```
2. 写入文件信息
    打开main.yml， 复制粘贴如下代码
    ``` bash
    name: Publish Hexo Blog
    on: [push]
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout Blog Branche
            uses: actions/checkout@v2
            with: 
              ref: blog
          - name: Install Node.js 12
            uses: actions/setup-node@v1
            with:
              node-version: 12.x
          - name: Set Git Config
            env:
              ACTION_DEPLOY_KEY: ${{ secrets.ACTION_DEPLOY_KEY_BLOG }}
            run: |
              mkdir -p ~/.ssh/
              echo "$ACTION_DEPLOY_KEY" | tr -d '\r' > ~/.ssh/id_rsa
              chmod 600 ~/.ssh/id_rsa
              ssh-keyscan github.com >> ~/.ssh/known_hosts
              git config --global user.name 'your name'
              git config --global user.email 'your email'
          - name: Install Hexo
            run: |
              npm i -g hexo-cli 
              npm i
              npm install hexo-deployer-git --save
          - name: Deploy Hexo
            run: |
              hexo g -d
    ```
    请仔细阅读上面代码，并根据自己实际情况进行修改

    | 名字                            | 说明           |
    | -------------                   | -------------:|
    | ACTION_DEPLOY_KEY               | 请对照你生成公钥的名字 |
    | git config --global user.name   | 请输入你的名字 |
    | git config --global user.email  | 请输入你的github邮箱 |

3. push到github
  上面一切完成以后，把修改后的代码通过git工具push到你的github blog/blog， 此时你的blog应该只有一个分支(blog)。
  推送代码到github后， github会自动检测你main.yml里面的代码，并执行相应的指令， 这个过程会持续一段时间，大概1-2分钟。如果没有异常的话,你此时应该有两个分支了：一个是blog分支，里面保存的是你的源文件; 一个是master分支，里面是生成的静态文件, 这个master分支里面的代码，是你即将要发布的页面代码。

### 发布页面
  进入Setting--->Options--->Github Pages 按照图示，在github pages 的source, 选择master branch，选择以后，就会出现一个网址，点击这个网址，就是你发布的博客
  {% asset_img settings-options.png%}
  {% asset_img settings-github-page.png%}

## 结束
到此， 整个hexo的详细发布教程，就已经结束了

## 感谢
本文主要参考了[Hexo通过GitHub Actions持续集成发布](https://jiayaoo3o.github.io/2019/12/21/Hexo%E9%80%9A%E8%BF%87GitHubActions%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E5%8F%91%E5%B8%83/)， 这篇文章说的很详细, 并且本人的博客搭建工作也多亏这篇文章，我的博客搭建好以后，根据我个人在搭建博客过程中的认识以及学习，在原博客的基础上，进行更加细致的完善，对一些我不懂的步骤进行了补充，希望这篇文章能起到对小白搭建博客的一个良好的技术指导。

