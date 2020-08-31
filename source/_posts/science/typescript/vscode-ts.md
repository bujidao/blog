---
title: 在vscode中自动编译并debug调试Typescript代码
date: 2020-05-25 13:48:44
categories:
  - [Typescript, vscode插件]
tags:
  - Typescript
  - vscode插件
---

{% asset_img vscode-typescript.jpg ts vs vscode %}
> 关于在vscode中自动编译Typescript, 并对Typescript代码进行debugger的说明文档

<!-- more -->

## 准备工作
确保已经系统已经安装好Typescript

如未安装Typescript，请移步{% post_link science/typescript/ts TypeScript教程 %}

## 生成配置文件
配置文件名为`tsconfig.json`, 位于项目的根目录
如果没有这个文件， 则需要手动创建
### 快速生成
项目根目录打开cmd， 输入一下代码
```bash
tsc --init
```
### 手动创建
在项目的根目录， 创建tsconfig.json文件， 并在文件中写入如下代码
``` bash
{
  "compilerOptions": {
      "module": "commonjs",
      "target": "es5",
      "noImplicitAny": true,
      "outDir": "./dist",
      "sourceMap": true
  },
  "include": [
      "src/**/*"
  ]
}
```

#### 细节
`compilerOptions`： (编译器选项), 如果未指定， 则使用默认选项

##### 编译选项
|  选项   | 类型  | 默认值 | 描述 |
|  :--  | :----  | :---- | :------ |
| `target`  | `string` | `"ES3"` |	编译成指定ECMAScript目标版本："ES3"（默认），"ES5"， "ES6"/ "ES2015"， "ES2016"， "ES2017"或 "ESNext"。|
| `outDir`  | `string` | 当前目录 |	重定向输出目录（相对于根目录） |
| `version`  | | |	打印编译器版本号。 |

`include`: 包含的目录

`exclude`: 排除的目录

### 自动编译ts
做好上面的工作以后， 在键盘上同时按下<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>b</kbd>， 即可弹出ts的编辑选项， 选择`watch`即可实时监控你的`ts`代码， 并转编译为`js`, 然后在你的页面中引入这个js文件即可
{% asset_img watch-ts-to-js.png Watch TS %}

## Debug调试

1. 点开调试
2. 点击debug
3. 选中node.js

{% asset_img ts-debug.png 调试ts步骤 %}
{% asset_img ts-debug2.png 调试ts界面 %}