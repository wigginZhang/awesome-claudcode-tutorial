# Claude Code Tutorial Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 wigginZhang/awesome-claudcode-tutorial 仓库的教程内容通过 VitePress 构建为静态文档网站，托管到 GitHub Pages

**Architecture:** VitePress 1.x 静态网站，从 docs/zh/ 目录读取 Markdown 内容，配置自动生成的侧边栏和页面导航，GitHub Actions 自动部署

**Tech Stack:** VitePress 1.x, Node.js, GitHub Actions, GitHub Pages

---

## File Structure

```
wigginZhang/awesome-claudcode-tutorial/
├── .vitepress/
│   ├── config.ts           # 主配置：导航、侧边栏、主题
│   └── theme/
│       ├── index.ts        # 自定义主题入口
│       └── styles/
│           └── custom.css  # 自定义样式
├── docs/
│   └── zh/                 # 现有教程内容（保持不动）
│       ├── articles/       # 212+ 篇教程
│       └── chapters/       # 29 个章节
├── index.md                # VitePress 入口页面
├── package.json           # VitePress 依赖
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions 部署配置
└── README.md
```

---

## Tasks

### Task 1: 初始化 package.json 添加 VitePress 依赖

**Files:**
- Modify: `package.json`

- [ ] **Step 1: 添加 VitePress 依赖到 package.json**

```json
{
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.5.0"
  }
}
```

- [ ] **Step 2: 运行 npm install 安装依赖**

Run: `npm install`

- [ ] **Step 3: 提交**

```bash
git add package.json package-lock.json
git commit -m "chore: add VitePress dependencies"
```

---

### Task 2: 创建 .vitepress 目录和基础配置

**Files:**
- Create: `.vitepress/config.ts`
- Create: `.vitepress/theme/index.ts`
- Create: `.vitepress/theme/styles/custom.css`

- [ ] **Step 1: 创建 .vitepress/config.ts 主配置文件**

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Claude Code 从入门到精通',
  description: '最全面的 Claude Code 中文教程',
  srcDir: 'docs',
  lang: 'zh-CN',

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '文章学习', link: '/zh/articles/' },
      { text: '章节学习', link: '/zh/chapters/' },
      { text: 'GitHub', link: 'https://github.com/wigginZhang/awesome-claudcode-tutorial' }
    ],

    // 左侧侧边栏 - 按六大模块组织
    sidebar: [
      {
        text: '第一部分：环境搭建与基础交互',
        collapsed: false,
        items: [
          { text: '01. 安装 Claude Code', link: '/zh/chapters/01-installation' },
          { text: '02. 登录与授权', link: '/zh/chapters/02-login' },
          { text: '03. 第一个实战问题', link: '/zh/chapters/03-first-task' },
          { text: '04. 三种模式详解', link: '/zh/chapters/04-modes' }
        ]
      },
      {
        text: '第二部分：复杂任务处理与终端控制',
        collapsed: false,
        items: [
          { text: '05. 复杂任务处理', link: '/zh/chapters/05-complex-tasks' },
          { text: '06. 终端控制基础', link: '/zh/chapters/06-terminal-basics' },
          { text: '07. 终端控制进阶', link: '/zh/chapters/07-terminal-advanced' },
          { text: '08. 任务规划与执行', link: '/zh/chapters/08-task-planning' }
        ]
      },
      {
        text: '第三部分：多模态与上下文管理',
        collapsed: false,
        items: [
          { text: '09. 上下文管理', link: '/zh/chapters/09-context' },
          { text: '10. 多模态交互', link: '/zh/chapters/10-multimodal' }
        ]
      },
      {
        text: '第四部分：高级特性与自定义',
        collapsed: false,
        items: [
          { text: '16. MCP协议入门', link: '/zh/chapters/16-mcp-intro' },
          { text: '17. MCP协议进阶', link: '/zh/chapters/17-mcp-advanced' }
        ]
      },
      {
        text: '第五部分：企业级应用',
        collapsed: false,
        items: [
          { text: '21. 企业部署', link: '/zh/chapters/21-enterprise' },
          { text: '22. 权限与安全', link: '/zh/chapters/22-security' }
        ]
      },
      {
        text: '第六部分：多 Agent 协作',
        collapsed: false,
        items: [
          { text: '26. Agent 协作基础', link: '/zh/chapters/26-multi-agent' },
          { text: '27. 协作模式', link: '/zh/chapters/27-collaboration' }
        ]
      },
      {
        text: '文章索引',
        collapsed: true,
        link: '/zh/articles/'
      }
    ],

    // 右侧页面导航 (outline)
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    // 搜索配置
    search: {
      provider: 'local',
      lang: 'zh-CN'
    },

    // 底部 footer
    footer: {
      message: '基于 MIT 协议开源',
      copyright: 'Copyright © 2024-PRESENT wigginZhang'
    }
  },

  // Vite 配置
  vite: {
    server: {
      port: 3000
    }
  }
})
```

- [ ] **Step 2: 创建 .vitepress/theme/index.ts 自定义主题入口**

```typescript
import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'

export default {
  extends: DefaultTheme
}
```

- [ ] **Step 3: 创建 .vitepress/theme/styles/custom.css 自定义样式**

```css
/* 自定义颜色变量 */
:root {
  --vp-c-brand-1: #D77757;  /* Claude Orange */
  --vp-c-brand-2: #5769F7; /* Claude Blue */
}

/* 导航栏样式 */
.vp-nav {
  background: linear-gradient(135deg, #D77757 0%, #5769F7 100%);
}

/* 侧边栏样式优化 */
.vp-sidebar-item {
  font-size: 14px;
}

/* 阅读内容区样式 */
.vp-doc h1 {
  font-size: 2rem;
  border-bottom: 2px solid var(--vp-c-brand-1);
}
```

- [ ] **Step 4: 提交**

```bash
git add .vitepress/
git commit -m "feat: add VitePress configuration with sidebar and theme"
```

---

### Task 3: 创建入口页面 index.md

**Files:**
- Create: `index.md`

- [ ] **Step 1: 创建首页入口文件**

```markdown
---
layout: home

hero:
  name: "Claude Code 从入门到精通"
  text: "最全面的 Claude Code 中文教程"
  tagline: "212+ 篇文章 · 29 个章节 · 持续更新"
  actions:
    - theme: brand
      text: 开始学习
      link: /zh/chapters/
    - theme: alt
      text: 文章索引
      link: /zh/articles/

features:
  - title: 系统化学习路径
    details: 从环境搭建到企业级应用，六大模块循序渐进
  - title: 实战导向
    details: 300+ 代码示例，100+ 实战案例
  - title: 持续更新
    details: 跟随官方最新功能，保持内容新鲜
---
```

- [ ] **Step 2: 提交**

```bash
git add index.md
git commit -m "docs: add VitePress home page"
```

---

### Task 4: 配置 GitHub Actions 自动部署

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: 创建 GitHub Actions workflow 文件**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build VitePress site
        run: npm run docs:build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: 提交**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Actions deploy workflow"
```

---

### Task 5: 更新根目录 README.md

**Files:**
- Modify: `README.md`

- [ ] **Step 1: 在 README.md 添加网站访问说明**

在现有 README 基础上添加：

```markdown
## 在线阅读

网站已部署到 GitHub Pages，可在线阅读：

**https://wigginZhang.github.io/awesome-claudcode-tutorial/**

### 本地开发

```bash
npm install
npm run docs:dev
```

然后访问 http://localhost:3000
```

- [ ] **Step 2: 提交**

```bash
git add README.md
git commit -m "docs: add online reading info and local dev instructions"
```

---

### Task 6: 验证构建

- [ ] **Step 1: 本地构建测试**

Run: `npm run docs:build`
Expected: 构建成功，生成 `docs/.vitepress/dist/` 目录

- [ ] **Step 2: 本地预览（可选）**

Run: `npm run docs:preview`
Expected: 本地预览网站正常显示

- [ ] **Step 3: 推送到远程仓库**

```bash
git push origin main
```

- [ ] **Step 4: 验证 GitHub Actions**

1. 访问 https://github.com/wigginZhang/awesome-claudcode-tutorial/actions
2. 确认 deploy workflow 正在运行或已完成
3. 确认 GitHub Pages 部署成功

- [ ] **Step 5: 访问网站验证**

访问: `https://wigginZhang.github.io/awesome-claudcode-tutorial/`
确认：首页、侧边栏导航、右侧页面导航均正常显示

---

## 注意事项

1. **侧边栏链接需要与实际文件路径匹配** - 需确认 docs/zh/chapters/ 下的实际文件名
2. **如果目录结构不同** - 需调整 config.ts 中的 sidebar 配置
3. **GitHub Pages 需要在仓库设置中启用** - Settings → Pages → Source: GitHub Actions

---

## 验证清单

- [ ] VitePress 构建成功
- [ ] 侧边栏按六大模块显示
- [ ] 右侧页面导航显示 h2/h3 标题
- [ ] 暗黑/浅色模式切换正常
- [ ] 全文搜索可用
- [ ] GitHub Pages 部署成功
- [ ] 网站可正常访问
