---
title: TypeScript 教程
categories:
  - [Typescript, 教程]
tags:
  - Typescript
date: 2020/7/13 20:46:25
top: true
---

{% asset_img ts.png TypeScript %}
> TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。 
> TypeScript 由微软开发的自由和开源的编程语言。
> TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。

<!-- more -->
## TypeScript 安装

### npm安装Typescript
如果你的本地环境已经安装了 npm 工具，可以使用以下命令来安装：
``` bash
npm install -g typescript
```

### yarn安装Typescript
``` bash
yarn add -g typescript
```

## 查看已安装的版本号
``` bash
tsc -v
```
## Handbook

### Function
Functions are the fundamental building block of any application in JavaScript. They’re how you build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to do things. TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work with.