---
title: react 学习笔记
date: 2020-12-02 10:39:07
description:
category:
tags:
---

{% asset_img logo.png %}

> react 学习笔记

<!-- more -->

## 开发前导

1. ts语言
2. 

## 具体案例和错误分析

### 组件传入Object值报错

提示`Property 'xxx' does not exist on type 'Readonly<{}> & Readonly<{ children?: ReactNode; }>'`

#### 图片

{% asset_img code1.png %}

#### 代码

``` ts
class MenuListItem extends React.Component {

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    history.push(this.props.itemInfo.linkTo)
  }

  render() {
    return (
      < li onClick={this.handleClick}>{this.props.itemInfo.label}< /li>
    )
  }
}

const menuListItems = menuListData.map(item => {
  return < MenuListItem itemInfo={item} key={item.linkTo}/>
})

```


#### 解决

这个问题的原因是用了`ts`语法，因此需要对`itemInfo`进行定义，因此，重新定义一下`itemInfo`就可以了。

1. 添加以下代码

``` ts
export type MentItemType = {
  itemInfo: {
    label: string,
    linkTo: string
  }
}
```

2. 引入到组件

``` ts
class MenuListItem extends React.Component<MentItemType> {
  // more code
}
```

