# 01. 安装 Claude Code

## 📥 什么是 Claude Code？

Claude Code 是一个由 AI 驱动的编码助手，它可以：
- 🔍 读取和理解你的整个代码库
- ✏️ 编辑文件并运行命令
- 🤖 跨多个文件和工具协作完成任务
- 🎯 在终端、IDE、桌面应用和浏览器中使用

## 🖥️ 支持的平台

Claude Code 支持多种开发环境：

| 环境 | 说明 | 推荐指数 |
|------|------|----------|
| **Terminal CLI** | 功能完整的命令行界面 | ⭐⭐⭐⭐⭐ |
| **VS Code** | 编辑器内联差异、@-提及 | ⭐⭐⭐⭐⭐ |
| **Cursor** | AI 原生编辑器集成 | ⭐⭐⭐⭐⭐ |
| **Desktop App** | 独立桌面应用 | ⭐⭐⭐⭐ |
| **Web** | 浏览器中运行，无需安装 | ⭐⭐⭐⭐ |
| **JetBrains** | IntelliJ IDEA、PyCharm 等 | ⭐⭐⭐⭐ |

## 📦 安装方法

### 方法一：原生安装（推荐）

#### macOS、Linux、WSL

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

#### Windows PowerShell

```powershell
irm https://claude.ai/install.ps1 | iex
```

#### Windows CMD

```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

**注意**: Windows 需要先安装 [Git for Windows](https://git-scm.com/download/win)

### 方法二：Homebrew（macOS）

```bash
brew install --cask claude-code
```

### 方法三：WinGet（Windows）

```powershell
winget install Anthropic.ClaudeCode
```

## ✅ 验证安装

安装完成后，在终端中运行：

```bash
claude --version
```

如果显示版本号，说明安装成功！

## 🚀 首次启动

在任意项目目录中运行：

```bash
claude
```

首次使用时，系统会提示你登录授权。

## 🔧 VS Code 扩展安装

1. 打开 VS Code 扩展视图（`Cmd+Shift+X` / `Ctrl+Shift+X`）
2. 搜索 "Claude Code"
3. 点击安装
4. 安装后打开命令面板（`Cmd+Shift+P` / `Ctrl+Shift+P`）
5. 输入 "Claude Code"，选择"在新标签页中打开"

## 📱 JetBrains 插件安装

1. 打开你的 JetBrains IDE（IntelliJ IDEA、PyCharm、WebStorm 等）
2. 进入 `File` → `Settings` → `Plugins`
3. 搜索 "Claude Code"
4. 安装并重启 IDE

## 🌐 Web 版使用

无需安装，直接在浏览器中访问：

👉 **[claude.ai/code](https://claude.ai/code)**

## ⚠️ 常见问题

### Q: Windows 上推荐使用什么环境？

**A**: 推荐使用 **WSL (Windows Subsystem for Linux)**，因为它提供最佳的原生兼容性。

### Q: 安��后找不到命令？

**A**: 确保已将 Claude Code 添加到系统 PATH。重启终端或检查安装路径。

### Q: 需要付费吗？

**A**: Claude Code 需要 Claude 订阅或 Anthropic Console 账户。Terminal CLI 和 VS Code 也支持第三方提供商。

## 📚 下一步

安装完成后，继续学习 [02. 登录与授权](./02-authentication.md)

## 🔗 相关资源

- [官方安装文档](https://code.claude.com/docs/zh-CN/quickstart)
- [B站视频教程](https://www.bilibili.com/video/BV1KzYQzWEPx/)
