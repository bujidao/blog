---
title: "Vue export、export default、module.exports"
date: "2019-03-10"
draft: false
publishdate: "2019-03-10"
categories: ["vue"]
tags: ["export"]
---

## export
export 配合 import 使用  

### 挨个导出
export  (export.js)
``` js
export const printParams = params => {
  return (
    console.log("your params is :" + params)
  )
}
```

import  
``` js
import {
  printParams
} from './test/export.js'
```

usage
``` js
created() {
  printParams("haha") // your params is : haha
}
```

### 批量导出
export  (export.js)
``` js
const way11 = params => {
  return (
    console.log('way11 params is :' + params)
  )
}

const way12 = params => {
  return (
    console.log('way12 params is :' + params)
  )
}

const way13 = params => {
  return (
    console.log('way13 params is :' + params)
  )
}

export {
  way11,
  way12,
  way13
}
```

import
``` js
import {
  way11,
  way12,
  way13
} from './test/export.js'
```

usage
``` js
created() {
    way11("haha") // way11 params is: haha
    way12("hehe") // way11 params is: hehe
    way13("xixi") // way11 params is: xixi
  }
```
### 批量导出2
export  (export.js)
``` js
const way11 = params => {
  return (
    console.log('way11 params is :' + params)
  )
}

const way12 = params => {
  return (
    console.log('way12 params is :' + params)
  )
}

const way13 = params => {
  return (
    console.log('way13 params is :' + params)
  )
}

export {
  way11,
  way12,
  way13
}
```

import
``` js
import * as way from './test/export.js'
```

usage
``` js
created() {
  way.way11("haha") // way11 params is: haha
  way.way12("hehe") // way11 params is: hehe
  way.way13("xixi") // way11 params is: xixi
}
```