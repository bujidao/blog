---
title: "Numpy"
date: "2020-02-29"
draft: false
publishdate: "2020-03-03"
categores: ["ML", "Python"]
---

文档参考来源 [https://docs.scipy.org/doc/numpy/user/quickstart.html](https://docs.scipy.org/doc/numpy/user/quickstart.html)  
主要根据个人理解，对文档进行重新梳理
## 个人理解
Numpy是一个同质、多维的数组，里面的元素都具有相同的类型（通常为整数）
<!-- more -->

## The Basics
NumPy's main object is the homogeneous multidimensional array.it is a table of elements(usually numbers), **all of ths same type**, indexed by a tuple of positive integers.In NumPy dimensions are called axes.   
   
For example, the coordinates of a point in 3D space $\left[1, 2, 1\right]$ has one axis. That axis has 3 elements in it, so we say it has a length of 3.In the example pictured below, thte array has 2axes. The first axis has a length of 2, the second axis has a length of 3.

$\left[
  \left[1, 2, 3\right],
  \left[4, 5, 6\right]
\right]$

NumPy's array class is called *ndarray*.It is also knoen by the alias *array*.Note thar *numpy.array* is not rhe same as the Standard Python Library class *array.array*, which only handles one-dimensional arrays and offers less functionality. The more important attributes of an *mdarray* object are:
#### mdarray.ndim
the number of axes(dimensions) of the array.

#### ndarray.shape
the dimensions of the array.This is a tuple of integers indicating the size of the array in each dimension.For a matrix with n rows and m columns, shape will be(n, m).The length of the shape tuple is  therefore the number of axes, ndim

#### ndarray.size
the total number of elements of the array.This is eayal to the product or the elements of shape

#### ndarray.drype
an object describing the type of the elements in the array.One can create or specify dtype's using standard Python types.Additionally Numpy provides types of its own.numpy.int32, numpy.int16, and numpy.float64 are some examples.

#### ndarray.itemsize

#### ndarray.data

### An Example

``` Python
>>> import numpy as np
>>> a = np.arange(15)reshape(3, 5)
>>> a
array([
      [0,  1,  2,  3,  4], 
      [5,  6,  7,  8,  9],
      [10, 11, 12, 13, 14]])

>>> a.shape
(3, 5)

>>> a.ndim
2

>>> a.dtype.name
'int64'

>>> a.itemsize
8

>>> type(a)
<type 'numpy.ndarray'>

>>> b = np.array([6, 7, 8])
>>> b
array([6, 7, 8])

>>> b.dtype
dtype('int64')

>>> type(b)
<type 'numpy.ndarray>

>>> c = np.array([1.2, 3.5, 5.1])
>>> c.dtype
dtype('float64')


```