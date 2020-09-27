---
title: javascript bind与apply
date: 2018-02-27 15:11:31
description:
category:
  - [javascript, bind]
  - [javascript, apply]
tags:
  - js
  - bind
  - apply
  - apply与bind对比
---

{% asset_img logo.jpg %}

<!-- more -->

## bind

``` js
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

### 参数

- `thisArg`
调用绑定函数时作为 `this` 参数传递给目标函数的值。 如果使用new运算符构造绑定函数，则忽略该值。当使用 bind 在 `setTimeout` 中创建一个函数（作为回调提供）时，作为 `thisArg` 传递的任何原始值都将转换为 `object`。如果 `bind` 函数的参数列表为空，或者`thisArg`是`null`或`undefined`，执行作用域的 `this` 将被视为新函数的 `thisArg`。
- `arg1, arg2, ...`
当目标函数被调用时，被预置入绑定函数的参数列表中的参数。

## apply

``` js
function.apply(thisArg, [argsArray])
```

- `thisArg`
必选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
- `argsArray`
可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。 浏览器兼容性 请参阅本文底部内容。

## apply与bind差别

函数传参类型不一样