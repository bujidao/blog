---
title: javascript中关于this的意义以及用法
date: 2017-08-26 09:44:35
categories:
  - js
tags:
  - js
---

{% asset_img javascript.jpg %}
# javascript中关于this的意义以及用法
在绝大多数情况下，函数的调用方式决定了 this 的值（运行时绑定）。this 不能在执行期间被赋值，并且在每次函数被调用时 this 的值也可能会不同。ES5 引入了 bind 方法来设置函数的 this 值，而不用考虑函数如何被调用的。ES2015 引入了箭头函数，箭头函数不提供自身的 this 绑定（this 的值将保持为闭合词法上下文的值）。

<!-- more -->

## `全局`上下文
无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指向全局对象。
``` js
// 在浏览器中, window 对象同时也是全局对象：
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```

## `函数`上下文
在函数内部，this的值取决于函数被调用的方式。

因为下面的代码不在严格模式下，且 `this` 的值不是由该调用设置的，所以 `this` 的值默认指向全局对象，浏览器中就是 `window`。
``` js
function f1(){
  return this;
}
//在浏览器中：
f1() === window;   //在浏览器中，全局对象是window

//在Node中：
f1() === globalThis; 
```

然而，在严格模式下，如果进入执行环境时没有设置 `this` 的值，`this` 会保持为 `undefined`，如下：
``` js
function f2(){
  "use strict"; // 这里是严格模式
  return this;
}

f2() === undefined; // true
```

## `类`上下文
`this` 在 `类` 中的表现与在函数中类似，因为类本质上也是函数，但也有一些区别和注意事项。

在类的构造函数中，this 是一个常规对象。类中所有非静态的方法都会被添加到 this 的原型中：

``` js
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first(){}
  second(){}
  static third(){}
}

new Example(); // ['constructor', 'first', 'second']
```

## `this` 和对象转换

``` js
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// 第一个参数是用作“this”的对象
// 其余参数用作函数的参数
add.call(o, 5, 7); // 16

// 第一个参数是用作“this”的对象
// 第二个参数是一个数组，数组中的两个成员用作函数参数
add.apply(o, [10, 20]); // 34
```

## `bind`方法

ECMAScript 5 引入了 `Function.prototype.bind()`。调用`f.bind(someObject)`会创建一个与f具有相同函数体和作用域的函数，但是在这个新函数中，<u>`this`将永久地被绑定到了`bind`的第一个参数</u>，无论这个函数是如何被调用的。

``` js
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a:'yoo'}); // bind只生效一次！
console.log(h()); // azerty

var o = {a:37, f:f, g:g, h:h};
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```
