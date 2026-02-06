---
title: "图像特征检测工具包"
date: 2024-11-20
category: "Computer Vision"
description: "封装 SuperPoint、LoFTR 等前沿特征匹配算法的统一接口工具包，支持批量处理与可视化输出。"
tags: ["PyTorch", "OpenCV", "ONNX"]
language: "Python"
lang_class: "python"
license: "Apache-2.0"
repo_name: "cv-feature-matcher"
github_url: "https://github.com/your-username/cv-feature-matcher"
status: "Stable"
---

## 项目简介

cv-feature-matcher 提供了一个统一的接口来调用多种主流图像特征匹配算法，包括 SuperPoint + SuperGlue、LoFTR、DISK 等。目标是降低这些算法的使用门槛，并提供方便的批量处理和结果可视化功能。

## 支持的算法

工具包当前集成了以下特征匹配管线：SuperPoint + SuperGlue（基于 GNN 的学习型匹配），LoFTR（无检测器的端到端匹配），DISK（可微分的关键点检测与描述），以及传统方法 SIFT + FLANN 作为基线对照。

## 使用示例

```python
from cv_matcher import FeatureMatcher

matcher = FeatureMatcher(method="superglue", device="cuda")

# 匹配两张图像
result = matcher.match("image_a.jpg", "image_b.jpg")

# 可视化结果
result.visualize(save_path="output.png")

# 批量处理
results = matcher.batch_match("./image_pairs/", output_dir="./results/")
```

## 性能对比

工具包内置了基准测试脚本，可以在自定义数据集上对比不同算法的匹配精度、召回率和推理速度，自动生成对比报告。
