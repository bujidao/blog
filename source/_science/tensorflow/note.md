---
title: "Tensorflow学习笔记"
date: "2020-02-29"
draft: false
publishdate: "2020-03-03"
---

## 学习笔记

## 目标函数
- 机器学习不能一次性获得结果，而是通过目标函数逐步调整， 逼近正确值
- 目标函数可以帮助衡量模型的好坏。具体放到某一个样本上，可以判断这个预测结果是对或者错
- 分类问题
  - 需要衡量目标类别于当前预测的差距
  - **One-hot编码**： 把正整数变成向量表达
    - 生成一个长度不小于正整数的向量， 只有正整数的位置处为1， 其余位置都为0 。 (eg: 2 $\rightarrow$ $\left[ 0, 0, 1\right]$， 在第二个位置为1，其余位置为0)
  - 函数
    - 平方差损失
    [\frac{1}{n} \sum_{x}^y \frac{1}{2} (y-Model(x))^2]
    ``` bash
    例子
    预测值： [0.2, 0.7, 0.1]
    真实值： [0, 0, 1]
    损失函数值： [(0-0.2)^2 + (0-0.7)^2 + (1-0.1)^2] * 0.5 = 0.67
    ```
    - 交叉熵损失
    [\frac{1}{n} \sum_{x}^y y \ln (Model(x))]
    - 回归问题
      - 预测值于真实值的差距、平方差损失、绝对值损失

**目标函数的作用： 模型的训练就是调整参数， 是的目标函数逐渐变小的过程**

## 引入包
``` Python
import matplotlib as mpl
import matplotlib.pyplot as plt
%matplotlib inline

import numpy as np
import sklearn
import os
import sys
import time
import pandas as pd

import tensorflow as tf
from tensorflow import keras

print(tf.__version__)
print(sys.version_info)
for module in mpl, np, pd, sklearn, tf, keras:
    print(module.__name__, module.__version__)

# 2.0.0-alpha0
# sys.version_info(major=3, minor=7, micro=3, releaselevel='final', serial=0)
# matplotlib 3.1.1
# numpy 1.16.4
# pandas 0.25.1
# sklearn 0.21.3
# tensorflow 2.0.0-alpha0
# tensorflow.python.keras.api._v2.keras 2.2.4-tf
```

## 加载测试数据

``` Python
fashion_mnist = keras.datasets.fashion_mnist
(x_train_all, y_train_all), (x_test, y_test) = fashion_mnist.load_data()
x_valid, x_train = x_train_all[:5000], x_train_all[5000:]
y_valid, y_train = y_train_all[:5000], y_train_all[5000:]

print(x_valid.shape, y_valid.shape)
print(x_train.shape, y_train.shape)
print(x_test.shape, y_test.shape)

# (5000, 28, 28) (5000,)
# (55000, 28, 28) (55000,)
# (10000, 28, 28) (10000,)
```




``` Python

```
``` Python

```
``` Python

```
``` Python

```
``` Python

```