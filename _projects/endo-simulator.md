---
title: "内窥镜模拟器"
date: 2024-08-15
category: "Simulation"
description: "基于物理引擎的内窥镜操作模拟软件，支持实时渲染与力反馈交互，用于医学培训场景。"
tags: ["C++", "OpenGL", "Physics Engine"]
language: "C++"
lang_class: "cpp"
license: "GPL-3.0"
repo_name: "endo-simulator"
github_url: "https://github.com/your-username/endo-simulator"
status: "Maintained"
---

## 项目简介

endo-simulator 是一个面向医学教育的内窥镜操作模拟系统。它基于物理引擎实现了柔性管道在人体腔道内的实时物理仿真，结合 OpenGL 实时渲染管线提供逼真的视觉反馈。

## 技术特点

系统的核心在于柔性体物理仿真模块，采用基于位置的动力学（PBD）方法实现内窥镜柔性管体的实时变形模拟，同时使用有符号距离场（SDF）进行高效的碰撞检测。渲染管线基于延迟渲染架构，支持 PBR 材质和环境光遮蔽等效果，以提升视觉真实感。

## 构建方式

```bash
git clone https://github.com/your-username/endo-simulator.git
cd endo-simulator
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make -j$(nproc)
./endo_simulator
```

## 应用场景

该系统可用于医学院校的内窥镜操作培训、手术方案的术前规划模拟以及医疗器械设计的人因工程评估。
