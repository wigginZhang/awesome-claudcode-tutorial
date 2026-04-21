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