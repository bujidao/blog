
---
title: "forEach、map、for、forin的区别"
date: 2020-01-23
publishdate: 2020-01-23
categories: ["js"]
tags: ["foreach", "map", "for", "forin", "forof"]
---

本文主要讨论js中几种循环的方式以及特点

测试中用到的数据
``` js
var arr = [23, 5, 12, 7245, 1235, 7, 13]
```

## 函数用法
### 一般循环
``` js
var arr = ['element1', 'element2', 'element3'];
for (var i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
}
// element1
// element2
// element3

```
这是一段标准的for循环代码，通过变量i去追踪数组arr的索引，达到访问数组中每一位元素的目的。
但不得不说，这是非常原始的一种方法，存在着几个显著缺点：
1. 无法只关注元素本身，需要花费精力去维护变量i以及边界len；
2. 当存在着多重嵌套时，将需要跟踪维护多个变量i，代码会非常复杂；
3. 需要花费精力去处理越界问题，一些编译型语言在遇到数组索引越界时会报错，而JavaScript引擎将不会告诉你任何错误信息，错误定位成本会比较高。

### forEach循环
``` js
var arr = ['element1', 'element2', 'element3'];

arr.forEach(function(value, index, arr) {
    console.log(value);
});

// element1
// element2
// element3
```
一切看起来都是那样的完美，即不需要花费精力去追踪索引，又无需担心越界问题，简直美滋滋。But，如果遍历到某个特定条件想退出咋整？
``` js
var arr = ['element1', 'element2', 'element3'];

arr.forEach(function(value, index, arr) {
  if (index === 1) {
    break;
  } else {
    console.log(value);
  }
});

// Uncaught SyntaxError: Illegal break statement
```
比较遗憾的是以上的代码未能按照我们的预期运行（break、continue等语句跨越了函数边界），所以这个看似完美的办法实际上只能**一条道走到黑**，像吃了炫迈一样根本停不下来。当数组很大，没办法通过提前终止遍历来节省资源。

### for in 循环
饭要一口一口的吃（饭桶请忽略），我们可以先解决花费时间防止数组越界的问题，例如可以使用for in循环：
``` js
var arr = ['element1', 'element2', 'element3'];

for (var i in arr) {
    console.log(arr[i]);
}

// element1
// element2
// element3
```
for in语句是一种精准的迭代语句，可以枚举对象的所有可枚举属性(可以使用Object.getOwnPropertyDescriptor(targetObj, attrName)方法来查看对象的某个属性是否可枚举)。It means that，可以用它来遍历对象：
``` js
var obj = {
  a: 1,
  b: 1,
  c: 1
};

for (let attr in obj) {
  console.log(attr, obj[attr]);
}

// a 1
// b 1
// c 1
```
除了遍历对象、数组之外，for in循环还可兼职遍历字符串：
``` js
var str = 'I am a handsome boy!';

for (var i in str) {
  console.log(str[i]);
}

// 太帅(chang)了，结果就不打印了
```
当然，也支持break、continue的操作，例子我就不写了。

这玩意看起来非常的牛*，简直就是万能的。But，一般看上去什么都会的人，实际上什么都做不精（我就不一样了，我不仅看上去什么都不会，还做不好），这个玩意也是一样的，看看例子：
``` js
    var father = {
        fatherAttr: 1
    };

    // 以father为原型创建对象实例instance
    var instance = Object.create(father);

    instance.a = 1;
    instance.b = 1;
    instance.c = 1;

    for (var attr in instance) {
        console.log(attr, instance[attr]);
    }

    // a 1
    // b 1
    // c 1
    // fatherAttr 1

    // 获取instance实例的自有属性名
    console.log(Object.getOwnPropertyNames(instance));

    // ["a", "b", "c"]

```
上面这个例子中，首先以father对象为原型创建了一个对象实例instance，然后为这个实例instance添加了a、b、c三个属性，接着使用for in循环遍历这个对象。通过查看instance的自有属性可以发现，fatherAttr并不是instance的属性，而是其原型father的属性，for in循环会将对象的原型属性也一并列举出来。故使用此方法去遍历对象属性的时候，需要加多一层判断：
``` js
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            // 是对象的自有属性，可以尽情的玩耍了
        }
    }

```
for in循环枚举原型属性这个弊端，在操作数组上也是有同样的问题，但是一般情况下，使用它遍历数组还是比较保险的；毕竟数组的原型是JavaScript内建对象Array，Array对象的默认属性都是不可枚举的；但如果你连Array对象都敢修改的话，这个小小的bug对你来说也不是事了。
不得不说，for in循环还是比较普遍使用的遍历对象的方法，这主要得益于其兼容性。当然，遍历对象还有其他的方法，稍迟再讲。我们继续审判for in循环：
``` js
    var str = 'a𠮷c';

    for (let index in str) {
        console.log(str[index]);
    }

    // a
    // 无法用言语描述的字符
    // 无法用言语描述的字符
    // c

```
ES5及之前处理字符串时，是以16位编码单位为基础的；16位编码显然无法给世界上所有的字符编码，所以某些字符就需要使用32位进行编码了，例如’𠮷‘字。
所以上面的例子出现打印四个字符的结果就不难理解了。按照道理来说，这不应该是for in循环的锅，但是有些时候就是不想讲道理。
虽然es6处理字符串强制使用UTF-16字符串来解决上述的问题（下面会有相关的例子），但for in循环依旧会存在上述的问题

### for of循环
通过for in循环可以解决传统for循环需要维护边界的问题，但也引入了一些新问题，跟搬砖工作者的日常操作“解决3个bug，引入8个新bug”场景极度相似。

所以换个es6定义的for of循环操作试试：
``` js
    let str = 'a 𠮷 c';

    for (let char of str) {
        if (char === ' ') {
            continue;
        } else {
            console.log(char);
        }
    }

    // a
    // 𠮷
    // c

```
从上面的例子来看，效果简直是perfect：索引去掉了，边界去掉了，想继续就继续，想退出就退出，还能顺便解决一下字符串的编码问题。
for of循环是一种依赖对象迭代器（迭代器的相关内容放在下一篇）的遍历方法，每一次执行都会执行迭代器的next方法，返回正确的值。通过for of循环，无需花费精力去追踪复杂的条件，降低了出错的概率。
根据先褒后贬的套路，接下来看看其一些限制性：

- 运行环境为ES6及以上版本，所以兼容性没有for in循环以及传统的操作好，如果需要考虑兼容上世纪的浏览器，就不能使用这个东西
- 只能用于遍历可迭代对象，即存在生成器方法（用于产生迭代器）的对象，如果用于遍历不可迭代对象，分分钟报错没商量。可以通过检测对象的Symbol.iterator方法（相关内容将放在下一篇）是否为函数来判断对象是否可迭代。

``` js
    let arr = ['a', 'b', 'c'];

    // 判断其Symbol.iterator属性是否为函数
    if ((typeof arr[Symbol.iterator]).toUpperCase() === 'FUNCTION') {
        for (let element of arr) {
            console.log(element);
        }
    } else {
        console.log('此对象不可迭代');
    }

    // a
    // b
    // c

```
实际上，大多数JavaScript的内置对象都支持迭代，例如：Array、Set、Map、String等，当使用for of循环遍历上述对象时，会使用其默认的生成器生成的迭代器：
``` js
    let map = new Map([['a', 1], ['b', 1], ['c', 1], ['d', 1]]);

    // 正经操作
    for (let item of map) {
        console.log(item);
    }

    // ["a", 1]
    // ["b", 1]
    // ["c", 1]
    // ["d", 1]

    // 使用解构，方便读取值
    for (let [key, value] of map) {
        console.log(key, value);
    }

    // a 1
    // b 1
    // c 1
    // d 1

```
上面的例子使用了for of遍历了Map类型实例map，迭代对象为Map类型的默认生成器生成的迭代器。当然，像Array、Set、Map类型还提供了一些特殊的生成器，可以让搬砖工作者更方便的去处理其想关注的内容：

- entries() 返回一个迭代器，其返回值为键值对数组（Map集合的默认迭代器；对于Set集合，返回值数组的元素相同，即value）


- keys() 返回一个迭代器，其返回值为集合的键名（对于Set集合，此迭代器跟values迭代器返回值相同;对于数组，此迭代器返回值为索引）


- values() 返回一个迭代器，其返回值为集合的值（Array、Set集合的默认迭代器）

``` js
    let arr = ['a', 'b', 'c', 'd']
    let set = new Set(arr);

    for (let item of set.entries()) {
        console.log(item);
    }
    for (let item of arr.entries()) {
        console.log(item);
    }

    // ["a", "a"]
    // ["b", "b"]
    // ["c", "c"]
    // ["d", "d"]
    // [0, "a"]
    // [1, "b"]
    // [2, "c"]
    // [3, "d"]

    for (let item of set.keys()) {
        console.log(item);
    }
    for (let item of arr.keys()) {
        console.log(item);
    }

    // a
    // b
    // c
    // d
    // 0
    // 1
    // 2
    // 3

    for (let item of set.values()) {
        console.log(item);
    }
    for (let item of arr.values()) {
        console.log(item);
    }

    // a
    // b
    // c
    // d
    // a
    // b
    // c
    // d

```

除了JavaScript的内置对象，一些DOM标准的类型如NodeList也可以使用for of循环进行遍历：

``` js
    let containers = document.querySelectorAll('.container');

    for (let node of containers) {
        // 搞事情专用注释
    }

```

很遗憾的是，for of循环居然不支持自定义对象的遍历（心中一万匹***奔腾而过......），所以如果不想使用for in循环遍历对象，只能转个弯了。

## 遍历对象的转弯操作

### Object.keys()获取键名数组
使用Object.keys()可以获取到对象实例的所有可枚举属性，其返回值为一个数组，数组元素为对象的键名：
``` js
    let father = {
        fatherAttr: 1
    };

    // 以father为原型创建对象实例instance
    let instance = Object.create(father);

    instance.a = 1;
    instance.b = 1;
    instance.c = 1;

    Object.defineProperty(instance, 'd', {
        writable: true,
        value: 1,
        enumerable: false,
        configurable: true
    });

    for (let key of Object.keys(instance)) {
        console.log(key);
    }

    // a
    // b
    // c

```
从上面的例子中可以看出，Object.keys()方法并不会获取对象的原型属性以及自身不可枚举属性，这个是比较符合我们的需求的；并且，这个玩意是ES5的特性，兼容性还是比较好的，是笔者比较喜欢使用的方法。
当然，如果作死，往这个方法传入非对象参数(如字符串)，其在ES5环境和ES6环境的表现是不一样的：
``` js
    console.log(Object.keys('I am a handsome boy!'));

    // ES5 直接报错，但说不定是浏览器嫉妒我的帅气才会报错的

    // ES6 估计见多了大风大浪，没啥感觉了
    // ["0", "1", "2", "3", "4", "5", ...]

```

另外，需要注意的一点，ES标准没有规定这个枚举顺序，也就是说此方法的返回值的顺序是不确定的（包括下面的各种方法），如果对顺序有要求，可以尽量使用map或者set集合进行操作。

### Object.getOwnPropertyNames()获取键名数组
此方法跟keys方法表现一样，所不同的是，其返回的数组包含了对象的不可枚举属性：
``` js
    let father = {
        fatherAttr: 1
    };

    let instance = Object.create(father);

    instance.a = 1;
    instance.b = 1;
    instance.c = 1;

    Object.defineProperty(instance, 'd', {
        writable: true,
        value: 1,
        enumerable: false,
        configurable: true
    });

    for (let key of Object.getOwnPropertyNames(instance)) {
        console.log(key);
    }

    // a
    // b
    // c
    // d

```
如果你还是想作死，试试传入一个字符串会发生什么事，可以自己去试试，然后评论区留下实验结果。
### Object.entries()获取键值对数组

这个方法返回什么东西就无需多言了吧，看例子：
``` js
    let father = {
        fatherAttr: 1
    };

    let instance = Object.create(father);

    instance.a = 1;
    instance.b = 1;
    instance.c = 1;

    Object.defineProperty(instance, 'd', {
        writable: true,
        value: 1,
        enumerable: false,
        configurable: true
    });

    for (let key of Object.entries(instance)) {
        console.log(key);
    }

    // ["a", 1]
    // ["b", 1]
    // ["c", 1]

```
所以当使用一个对象初始化一个Map实例时，可以使用这个方法：
``` js
    let obj = { a: 1, b: 1, c: 1 },
        map = new Map(Object.entries(obj));
    
    console.log(map.get('a'));
    console.log(map.get('b'));
    console.log(map.get('c'));

    // 1
    // 1
    // 1

```

### Object.values()获取对象的属性值数组

### Object.getOwnPropertySymbols()获取Symbol属性名
上面提到的几个方法都无法获取到对象实例的Symbol类型的属性名，如果需要遍历这个玩意，需要使用Object.getOwnPropertySymbols()方法：
``` js
    let father = {
        fatherAttr: 1
    };

    let instance = Object.create(father);

    instance.a = 1;
    instance.b = 1;
    instance.c = 1;

    instance[Symbol('I am a handsome boy!')] = 1;

    for (let key of Object.keys(instance)) {
        console.log(key);
    }

    // a
    // b
    // c

    for (let key of Object.getOwnPropertySymbols(instance)) {
        console.log(key);
    }

    // Symbol(I am a handsome boy!)

```
上面列举了一些遍历的方法，一般可以满足日常的工作需要。但是上面都是ES内置的方法，不能定制化。在这个个性张扬的时代，如果你想搞点特殊，可以自定义一个迭代器；通过一些封装，甚至可以使用for of循环枚举对象。

## 其他

### map & foreach

map 创建一个新数组， 并且可以对旧数组进行处理后，返回新数组

foreach 可以对数组进行一次循环， 但是总是返回为underfine，可以理解为没有返回
``` js
var array1 = [1,2,3,4,5];
var x = array1.forEach(function(value,index){
  console.log(value);   //可遍历到所有数组元素
  return value + 10
});
console.log(x);   //undefined    无论怎样，总返回undefined

var y = array1.map(function(value,index){
  console.log(value);   //可遍历到所有数组元素
  return value + 10
});
console.log(y);   //[11, 12, 13, 14, 15]   返回一个新的数组
```
## 参考
>  JavaScript骚操作之遍历、枚举与迭代:[https://juejin.im/post/5bfbbe2df265da61407e95a3](https://juejin.im/post/5bfbbe2df265da61407e95a3)