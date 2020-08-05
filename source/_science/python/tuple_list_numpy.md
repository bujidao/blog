---
title: "tuple & list & numpy"
date: "2019-10-01"
draft: false
publishdate: "2019-10-01"
categores: ["Python"]
tags: ["tuple", "list", "numpy"]
---

## tuple & list & numpy

### list
``` Python
list1=['两点水','twowter','liangdianshui',123]
```
|函数方法|描述|
|:---|:---|
|cmp(list1, list2)|比较两个列表的元素|
|list(seq)|将元组转为列表|
|list.count(obj)|统计某个元素在列表中出现的次数|
### tuple
与list 类似，但是不同的是，tuple 一旦初始化，就不能修改，只能读取。  
创建空元组
``` Python
tuple()
```
创建只有一个元素的元组
``` Python
tuple(123, ) // 必须添加一个',', 否则会被视为一个字符串
```
- tuple值的不可变，指的是在内存中的地址不变，因此，在同一个地址上，可以更改里面的list，这样达到更改tuple的目的