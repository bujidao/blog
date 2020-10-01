---
title: TypeScript 教程
categories:
  - [Typescript, 教程]
tags:
  - Typescript
date: 2020/7/13 20:46:25
---

{% asset_img ts.png TypeScript %}
> TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。 
> TypeScript 由微软开发的自由和开源的编程语言。
> TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。

<!-- more -->

## TypeScript 与 JavaScript 的区别
| TypeScript | JavaScript |
|:-:|:-:|
|JavaScript 的超集用于解决大型项目的代码复杂性|一种脚本语言，用于创建动态网页。|
|可以在编译期间发现并纠正错误|作为一种解释型语言，只能在运行时发现错误|
|强类型，支持静态和动态类型|弱类型，没有静态类型选项|
|最终被编译成 JavaScript 代码，使浏览器可以理解	|可以直接在浏览器中使用|
|支持模块、泛型和接口|不支持模块，泛型或接口|
|支持 ES3，ES4，ES5 和 ES6 等|不支持编译其他 ES3，ES4，ES5 或 ES6 功能|
|社区的支持仍在增长，而且还不是很大|	大量的社区支持以及大量文档和解决问题的支持|

## 获取TypeScript
### TypeScript 安装

#### npm安装Typescript
如果你的本地环境已经安装了 npm 工具，可以使用以下命令来安装：
``` bash
npm install -g typescript
```

#### yarn安装Typescript
``` bash
yarn add -g typescript
```

#### 查看已安装的版本号
``` bash
tsc -v
```

### 编译 TypeScript 文件
``` bash
tsc helloworld.ts
```

## TypeScript 断言

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。
类型断言有两种形式：

###  “尖括号” 语法

## Handbook

### Function
Functions are the fundamental building block of any application in JavaScript. They’re how you build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to do things. TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work with.

#### 泛型
{% codeblock lang:ts 例子 %}
function identity<T>(arg: T): T {
  return arg;
}
{% endcodeblock %}

  > `理解一`： 泛型有点像占位符, `T`占用位置， 当调用函数的时候， 如果函数传入了类型， `T`就会生效， 并运用到程序中
  > `理解二`： 泛型的类型，可以当成普通的参数一样传入

{% asset_img T.png 泛型执行流程 %}

``` ts
function identity<T>(arg: T): T {
  return arg;
}

var myVal = '34'
let aa = <string>identity(myVal)
let bb = typeof myVal
console.log('end')

```
{% asset_img T.gif 泛型执行流程 %}
