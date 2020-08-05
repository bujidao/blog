---
title: "Computed & Watch & Methods"
date: "2019-03-10"
draft: false
publishdate: "2019-03-11"
---

## Computed & Watch & methods

1. watch和computed都是以Vue的依赖追踪机制为基础的，它们都试图处理这样一件事情：当某一个数据（称它为依赖数据）发生变化的时候，所有依赖这个数据的“相关”数据“自动”发生变化，也就是自动调用相关的函数去实现数据的变动。
2. 对methods:methods里面是用来定义函数的，很显然，它需要手动调用才能执行。而不像watch和computed那样，“自动执行”预先定义的函数。

### 使用场景
1. watch擅长处理的场景：**一个数据影响多个数据**
2. computed擅长处理的场景：**一个数据受多个数据影响**

### watch用法
> **一个数据影响多个数据**
``` js
// 在watch中，一旦groupName（海贼团名称）发生改变，data选项中的船员名称全部会自动改变
// 多个船员名称数据-->依赖于 -->（1个)海贼团名称数据一个数据变化--->多个数据全部变化
data: {
  groupName: '草帽海贼团',
  suoLong: '索隆',
  naMei: '娜美',
  xiangJiShi: '香吉士'
},
watch: {
  haiZeiTuan_Name: function (newName) {
    this.suoLong = newName + '索隆'
    this.naMei = newName + '娜美'
    this.xiangJiShi = newName + '香吉士'
  }
}

console.log(this.suoLong) // '草帽海贼团索隆'
// 更改watch监控的主数据groupName
vm.groupName = '橡胶海贼团'
console.log(this.suoLong) // '橡胶海贼团索隆'
```

### computed用法
> 只在相关响应式依赖发生改变时它们才会重新求值。**一个数据受多个数据影响**
``` js
// 监听firstName，secName，thirdName的值, 一旦它们的值发生变化，就会改变luFei_Name的值
data: {
  // 路飞的全名：蒙奇·D·路飞
  firstName: '蒙奇',
  secName: 'D',
  thirdName: '路飞'
},
computed: {
  luFei_Name: function () {
    return this.firstName + this.secName + this.thirdName
  }
}

console.log(this.luFei_Name) // 蒙奇·D·路飞
// 将“路飞”改为“海军王”
vm.thirdName = '海军王' 
console.log(this.luFei_Name) // 蒙奇·D·海军王
```

### methods vs computed
``` js
new Vue({
  el: '#app',
  // 设置两个button，点击分别调用getMethodsDate,getComputedDate方法
  template: 
  '<div id="app">
      <button @click="getMethodsDate">methods</button>
      <button @click="getComputedDate">computed</button>
  </div>',
  methods: {
    getMethodsDate: function () {
      alert(new Date())
    },
    // 返回computed选项中设置的计算属性——computedDate
    getComputedDate: function () {
      alert(this.computedDate)
    }
  },
  computed: {
    computedDate: function () {
      return new Date()
    }
  }
})
```

1. 两次点击methods返回的时间是不同的
2. 注意两次点击computed返回的时间是相同的

【注意】为什么两次点击computed返回的时间是相同的呢？new Date()不是依赖型数据（不是放在data等对象下的实例数据），所以computed只提供了缓存的值，而没有重新计算
**只有符合：1.存在依赖型数据 2.依赖型数据发生改变这两个条件,computed才会重新计算**


