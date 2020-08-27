---
title: "有意思的算法"
date: 2020/03/09 20:46:25
categories: ["算法", "js"]
tags: ["算法", "js"]
---

{% asset_img algorithms.png Algorithms %}
收藏一些有意思的算法

<!-- more -->

## 睡眠排序

### 源码
``` js
const original = [3, 5, 2, 2, 66, 745, 6]
const result = []
original.forEach(n => setTimeout(() => result.push(n), n))
```

### 原理
运用了setTimeout的异步运行， 把所有的值都放入内存，每n个时间单位，往result里面push当前的值， n越小， 就最先被push到result。

### 改进封装
由于上述源码在排序完成之前，不能输出正常的结果，且， 若原始数组的数值比较大的话，可能造成长时间的排序，因此， 对源代码进行改进了一下
``` js
function sortArray (original, timeLimit, callback) {
  const result = []
  original.forEach(n => setTimeout(() => result.push(n), Math.atan(n)*2/Math.PI*timeLimit))
  setTimeout(() => callback(result), timeLimit)
}

const arr = [3, 5, 2, 2, 66, 745, 6, 999998098, 1]
const timeLimit = 1000
sortArray(arr, timeLimit, (res) => {
  console.log(res)
})
```
### 缺点
只能对能转换成数字的数组进行排序，对于非数字的不能进行排序


