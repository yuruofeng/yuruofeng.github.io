# Jenna's Tech Space — GitHub Pages 个人站点

一个基于 Jekyll 的科技风格个人主页，用于展示技术笔记、研究论文和开源项目。

## 📁 项目结构

```
site/
├── _config.yml              # Jekyll 配置（站点信息、集合定义）
├── Gemfile                   # Ruby 依赖
│
├── _layouts/                 # 页面布局模板
│   ├── default.html          #   └─ 基础布局（导航+背景+页脚）
│   ├── post.html             #   └─ 技术笔记详情页
│   ├── paper.html            #   └─ 研究论文详情页
│   └── project.html          #   └─ 项目详情页
│
├── _includes/                # 可复用组件
│   ├── head.html             #   └─ <head> 标签（CSS、MathJax、SEO）
│   ├── nav.html              #   └─ 导航栏
│   └── footer.html           #   └─ 页脚
│
├── _notes/                   # ★ 技术笔记（Markdown 文件）
│   ├── 2025-01-15-superpoint-superglue.md
│   ├── 2025-01-20-openskill-design.md
│   ├── 2025-02-01-feasibility-study.md
│   └── 2024-12-10-laser-thermal-shock.md
│
├── _papers/                  # ★ 研究论文（Markdown 文件）
│   ├── 2025-03-01-laser-rock-breaking.md
│   ├── 2024-09-15-digital-skills-ai.md
│   ├── 2024-06-20-digital-home-school.md
│   └── 2023-11-10-regional-policy.md
│
├── _projects/                # ★ 开源项目（Markdown 文件）
│   ├── openskill-agent.md
│   ├── cv-feature-matcher.md
│   ├── endo-simulator.md
│   └── viral-script-analyzer.md
│
├── assets/
│   ├── css/main.css          # 主样式表
│   ├── js/main.js            # 粒子动画、滚动效果、筛选
│   └── images/               # 图片资源目录
│
├── index.html                # 首页
├── notes.html                # 笔记列表页（支持标签筛选）
├── research.html             # 研究列表页（时间轴）
└── projects.html             # 项目列表页
```

---

## ✍️ 如何添加内容

### 添加技术笔记

在 `_notes/` 目录下创建 Markdown 文件，文件名格式为 `YYYY-MM-DD-slug.md`：

```markdown
---
title: "你的笔记标题"
date: 2025-03-01
category: "Computer Vision"      # 分类（用于筛选）
icon: "🔬"                       # 卡片图标
description: "简短描述，显示在卡片上"
tags: ["PyTorch", "CNN"]         # 技术标签
math: true                       # 是否启用 LaTeX 公式（可选）
---

## 正文内容

正文使用标准 Markdown 语法书写。

### 代码块

\```python
print("Hello World")
\```

### 数学公式（需 math: true）

行内公式 $E = mc^2$，独立公式：

$$\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$$

### 图片

![描述](/assets/images/your-image.png)

### 表格

| 列A | 列B |
|-----|-----|
| 1   | 2   |
```

### 添加研究论文

在 `_papers/` 目录下创建 Markdown 文件：

```markdown
---
title: "论文标题"
date: 2025-01-01
venue: "发表期刊/会议名称"
venue_type: "Journal Paper"      # Journal Paper / Conference / Thesis / Proposal
authors: ["Author1", "Author2"]
description: "论文简要描述"
tags: ["keyword1", "keyword2"]
pdf_url: "/assets/papers/paper.pdf"   # PDF链接（可选）
doi: "10.1234/xxxxx"                  # DOI号（可选）
code_url: "https://github.com/..."    # 代码链接（可选）
math: true                            # 公式支持（可选）
---

## 摘要

论文摘要内容...

## 研究方法

研究方法详述...
```

### 添加开源项目

在 `_projects/` 目录下创建 Markdown 文件：

```markdown
---
title: "项目名称"
date: 2025-01-01
category: "Framework"
description: "项目简要描述"
tags: ["Python", "API"]
language: "Python"
lang_class: "python"             # python / js / cpp / rust（决定颜色点）
license: "MIT"
repo_name: "repo-name"
github_url: "https://github.com/your-username/repo-name"
demo_url: "https://demo.example.com"   # 在线演示（可选）
status: "Active Development"           # Active / Stable / Maintained / Archived
---

## 项目简介

详细的项目介绍...
```

---

## 🚀 部署到 GitHub Pages

### 方法一：直接推送（推荐）

GitHub Pages 原生支持 Jekyll，无需本地构建。

```bash
# 1. 创建 GitHub 仓库，名为 your-username.github.io
#    （或者任意仓库名，使用 gh-pages 分支）

# 2. 将 site/ 目录下所有文件推送到仓库根目录
cd site
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main

# 3. 在仓库 Settings → Pages 中：
#    - Source: Deploy from a branch
#    - Branch: main / root
#    - 保存后等待 1-2 分钟即可访问
```

### 方法二：本地预览后部署

```bash
# 安装 Ruby 和 Bundler（如尚未安装）
# macOS:  brew install ruby
# Ubuntu: sudo apt install ruby-full

# 安装依赖
cd site
bundle install

# 本地启动预览
bundle exec jekyll serve
# 访问 http://localhost:4000

# 确认无误后推送到 GitHub
```

---

## ⚙️ 自定义配置

### 修改个人信息

编辑 `_config.yml` 中的以下字段：

```yaml
url: "https://your-username.github.io"
author:
  name: Your Name
  email: your-email@example.com
  github: your-username
  scholar: "https://scholar.google.com/citations?user=YOUR_ID"
```

### 修改首页统计数字

首页统计栏会自动读取各集合的文件数量（`site.notes | size` 等）。如果需要手动设置固定数字，可直接编辑 `index.html` 中 stats-bar 部分。

### 添加新的内容分类

如果需要添加笔记或论文之外的新分类（例如"读书笔记"），在 `_config.yml` 中添加集合定义：

```yaml
collections:
  readings:
    output: true
    permalink: /readings/:slug/
```

然后创建 `_readings/` 目录、对应的 layout 文件和列表页面即可。

### 自定义主题颜色

编辑 `assets/css/main.css` 顶部的 CSS 变量：

```css
:root {
  --accent-cyan: #00e5ff;    /* 主强调色 */
  --accent-blue: #3d5afe;    /* 次强调色 */
  --accent-purple: #7c4dff;  /* 第三强调色 */
  --accent-green: #00e676;   /* 标签色 */
  --bg-primary: #0a0e17;     /* 主背景 */
}
```

---

## 📝 写作提示

**Markdown 语法**: 所有内容文件使用标准 GitHub Flavored Markdown (GFM)，支持代码高亮、表格、任务列表等。

**LaTeX 公式**: 在 front matter 中设置 `math: true` 即可使用 MathJax 渲染数学公式。行内公式用 `$...$`，独立公式用 `$$...$$`。

**图片管理**: 将图片放在 `assets/images/` 目录下，在 Markdown 中使用 `![alt](/assets/images/xxx.png)` 引用。

**PDF 论文**: 可将 PDF 文件放在 `assets/papers/` 目录下，在论文的 front matter 中通过 `pdf_url` 字段链接。
