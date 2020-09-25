---
title: "vue-cli 多个api服务地址"
date: 2019/5/10 20:46:25
categories:
  - [Vue]
tags:
  - Vue
  - 多API服务地址
---
{% asset_img api.jpg %}
> 关于在vue-cli框架下，多api服务地址的运用
<!-- more -->

## 原理
api接口携带对应的api标识，传送到request.js，进行接口处理时，request识别api标识，并转为相应的地址，然后在axions里面设置baseurl

## 具体操作

### api佩戴标识
{% codeblock lang:js api.js %}
export const doRegHealth = params => {
  return request({
    url: 'general/regquery',
    method: 'post',
    params: params,
    apiModel: 'MHealth'
  })
}

export const payBill = params => {
  return request({
    url: 'payment/orderPayment',
    method: 'post',
    data: params,
    apiModel: 'MPay'
  })
}
// apiModel: 自定义值，表示api接口标识，不同的value代表不同的访问地址，该例子代表两个api地址
{% endcodeblock %}


### request.js配置

{% codeblock lang:js request.js %}
import axios from 'axios'
import { Message } from 'element-ui'

const getUrl = apiModel => {
  const apiModels = {
    MTest: process.env.TEST_BASE_API,
    MTestPay: process.env.TEST_SWAGGER_BASE_API,
    MHealth: process.env.HEALTH_BASE_API,
    MHisPay: process.env.PAY_HIS_BASE_API,
    MPay: process.env.PAY_BASE_API
  }
  return apiModels[apiModel]
}
// getUrl： 将不同的apiModel转换成对应的地址

// create an axios instance
const service = axios.create({
  // baseURL: process.env.TEST_BASE_API, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 30 * 1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.baseURL = getUrl(config.apiModel)
    // 配置baseurl
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code.
   */
  response => {
    const res = response.data
    if (res.code && res.code !== '0') {
      const message = JSON.parse(res.message)
      Message({
        message: message.respDesc || 'error',
        type: 'error',
        duration: 5 * 1000
      })
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

{% endcodeblock %}

### 配置config相关项目

{% codeblock lang:js dev.env.js %}
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TEST_BASE_API: '"http://localhost:3000"',
  TEST_SWAGGER_BASE_API: '"http://192.168.1.193:8910"',
  HEALTH_BASE_API: '"health-api"',
  PAY_HIS_BASE_API: '"pay-his-api"',
  PAY_BASE_API: '"pay-api"'
})

{% endcodeblock %}

{% codeblock lang:js prod.env.js %}
'use strict'
module.exports = {
  NODE_ENV: '"production"',
  TEST_BASE_API: '"http://localhost:3000"',
  TEST_SWAGGER_BASE_API: '"http://192.168.1.193:8910"',
  HEALTH_BASE_API: '"http://192.168.5.20:1836"',
  PAY_HIS_BASE_API: '"http://192.168.5.20:9205"',
  PAY_BASE_API: '"http://192.168.5.12:9527/pay"'
}
{% endcodeblock %}


### 跨域处理

{% codeblock lang:js index.js %}
proxyTable: {
  '/health-api': {
    target: `http://192.168.5.20:1836/`,
    changeOrigin: true,
    pathRewrite: {
      '^/health-api': ''
    }
  },
  '/pay-his-api': {
    target: `http://192.168.5.20:9205/`,
    changeOrigin: true,
    pathRewrite: {
      '^/pay-his-api': ''
    }
  },
  '/pay-api': {
    target: `http://192.168.5.12:9527/pay/`,
    changeOrigin: true,
    pathRewrite: {
      '^/pay-api': ''
    }
  },
  '/pay-test-api': {
    target: `http://192.168.140.201:9527/pay/`,
    changeOrigin: true,
    pathRewrite: {
      '^/pay-test-api': ''
    }
  }
}

{% endcodeblock %}
