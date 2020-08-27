---
title: "Matplotlib"
date: "2019-10-02"
draft: false
publishdate: "2019-10-02"
categores: ["Python"]
tags: ["tuple", "list", "numpy"]
---

## Matplotlib
> 文档： [https://matplotlib.org/users/index.html](https://matplotlib.org/users/index.html)

### A simple example
Matplotlib graphs your data on Figure s(i.e., indows, Jupyter widgets, etc.), each of which can contain one or more Axes(i.e.,an area where points can be specified in terms of x-y coordinates(or theta-r in a polar plot, or x-y-z in a 3D plot, etc.).The most simple way of creating a figure with an axes is using pyplot.subplots. We can then use Axes.plot to drew some data on the axes.

``` Python
fig, ax = plt.subplots()  # Create a figure containing a single axes.
ax.plot([1, 2, 3, 4], [1, 4, 2, 3])  # Plot some data on the axes.

```







