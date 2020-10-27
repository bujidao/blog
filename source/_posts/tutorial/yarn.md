---
title: yarn 用法
date: 2018-10-20 14:29:35
description:
category:
  - yarn
tags:
  - yarn
---

<!-- {% asset_img logo.jpg %} -->

<!-- more -->

#### 显示命令列表

``` 
yarn help
```

#### 初始化一个新项目
``` 
yarn init
```

#### 安装所有依赖项
``` 
yarn
yarn install
```

#### 添加依赖项

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

#### 将依赖项添加到不同的依赖类别中

```
yarn add [package] --dev  # dev dependencies
yarn add [package] --peer # peer dependencies
```

#### 更新依赖项

```
yarn up [package]
yarn up [package]@[version]
yarn up [package]@[tag]
```

#### 删除依赖项

```
yarn remove [package]
```

#### 更新 Yarn 本体

```
yarn set version latest
yarn set version from sources
```


