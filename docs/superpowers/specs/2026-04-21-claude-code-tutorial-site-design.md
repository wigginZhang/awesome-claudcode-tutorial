# Claude Code Tutorial Site Design

**Date:** 2026-04-21
**Status:** Approved

## Overview

将 wigginZhang/awesome-claudcode-tutorial 仓库中的 212+ 篇教程文章和 29 个章节，通过 VitePress 构建成静态文档网站，托管到 GitHub Pages。

## Source Content

- **Repo:** https://github.com/wigginZhang/awesome-claudcode-tutorial
- **内容:** docs/zh/articles/ (212+ 篇) + docs/zh/chapters/ (29 个章节)
- **License:** MIT

## Technical Architecture

```
wigginZhang/awesome-claudcode-tutorial
├── .vitepress/
│   ├── config.ts           # 主配置（导航、侧边栏、主题）
│   └── theme/              # 自定义主题
│       ├── index.ts
│       └── styles/         # 自定义样式
├── docs/                   # 现有教程内容（保持不动）
│   └── zh/
│       ├── articles/       # 212+ 篇教程文章
│       └── chapters/       # 29 个章节
├── index.md                # VitePress 入口页面
├── package.json           # 添加 VitePress 依赖
└── .github/workflows/     # GitHub Actions 部署配置
```

## Core Features

| Feature | Implementation |
|---------|----------------|
| 左侧章节导航 | VitePress sidebar，按 docs/zh/ 目录结构自动生成 |
| 右侧页面导航 | VitePress outline 属性，显示 h2/h3 标题锚点 |
| 暗黑/浅色模式 | VitePress 默认支持，一键切换 |
| 全文搜索 | VitePress 内置 local search |
| GitHub Pages 部署 | GitHub Actions 自动构建部署 |

## Sidebar Structure (六大模块)

1. **第一部分：环境搭建与基础交互** (ch01-04)
2. **第二部分：复杂任务处理与终端控制** (ch05-08)
3. **第三部分：多模态与上下文管理** (ch09-15)
4. **第四部分：高级特性与自定义** (ch16-20)
5. **第五部分：企业级应用** (ch21-25)
6. **第六部分：多 Agent 协作** (ch26-29)

## Implementation Steps

1. Fork/clone 原仓库
2. 安装 VitePress 依赖
3. 创建 `.vitepress/config.ts` 配置侧边栏和导航
4. 创建入口页面 `index.md`
5. 配置 GitHub Actions workflow
6. 提交并推送，验证 GitHub Pages 部署

## Deployment Flow

1. Push to `main` branch
2. GitHub Actions triggers `vitepress build`
3. Deploy build output to `gh-pages` branch
4. Site available at `https://wigginZhang.github.io/awesome-claudcode-tutorial/`

## Decisions

- **Framework:** VitePress 1.x
- **Sidebar:** 自动从目录结构生成，手动微调分组
- **Theme:** 默认主题 + 少量自定义 CSS
- **Hosting:** GitHub Pages (免费)
