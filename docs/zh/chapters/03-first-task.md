# 03. 第一个实战问题

## 🎯 学习目标

通过实际操作，学习如何：
- 使用 Claude Code 分析代码库
- 让 Claude Code 帮助修复问题
- 理解基本的交互模式

## 📝 示例项目：修复一个 Bug

让我们从一个简单的例子开始 - 假设你发现了一个 bug，需要修复它。

### 场景描述

你有一个 JavaScript 项目，其中一个函数有问题：

```javascript
// utils/math.js
export function calculateAverage(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}
```

问题：当传入空数组时会返回 `NaN`。

## 🚀 开始解决

### 步骤 1: 启动 Claude Code

在项目根目录运行：

```bash
claude
```

### 步骤 2: 描述问题

在 Claude Code 提示符下，清晰地描述你的问题：

```
我发现 math.js 中的 calculateAverage 函数有问题。
当传入空数组时，它会返回 NaN。我想要它返回 0。
你能帮我修复吗？
```

### 步骤 3: Claude Code 的响应

Claude Code 会：

1. **读取文件** - 自动找到并读取相关文件
2. **分析问题** - 理解代码逻辑和问题所在
3. **提出方案** - 解释如何修复
4. **执行修改** - 编辑文件（需要你确认）

示例响应：

```
我来帮你修复这个问题。

问题分析：
当 numbers 是空数组时，sum 为 0，length 为 0，导致 0/0 = NaN。

修复方案：
添加对空数组的检查，在数组为空时返回 0。

我将修改 utils/math.js 文件：
```

### 步骤 4: 确认修改

Claude Code 会显示具体的修改内容，使用 diff 格式：

```diff
 export function calculateAverage(numbers) {
+  if (numbers.length === 0) {
+    return 0;
+  }
   const sum = numbers.reduce((a, b) => a + b, 0);
   return sum / numbers.length;
 }
```

根据你的权限设置：
- **默认模式**: 需要你输入 `y` 确认
- **自动模式**: 直接应用修改
- **规划模式**: 先展示完整计划，等你批准后执行

### 步骤 5: 验证修复

修改完成后，可以要求 Claude Code 帮你测试：

```
能帮我写几个测试用例来验证这个修复吗？
```

Claude Code 可能会创建：

```javascript
// utils/math.test.js
import { calculateAverage } from './math.js';

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([])); // 0 (之前是 NaN)
console.log(calculateAverage([10])); // 10
```

然后运行测试：

```bash
node utils/math.test.js
```

## 💡 实用技巧

### 1. 提供上下文

如果项目较大，告诉 Claude Code 相关信息：

```
这是一个使用 React 的前端项目，使用 TypeScript。
我在组件 Home.tsx 中遇到了一个状态更新的问题。
```

### 2. 使用文件路径

直接指定文件可以加快处理：

```
请检查 src/components/Header.tsx 第 45 行附近的问题
```

### 3. 分步骤进行

对于复杂任务，可以分步骤：

```
首先，帮我分析一下当前的代码结构
然后，找出可能导致内存泄漏的地方
最后，提供修复建议
```

## 📊 其他常见场景

### 场景 1: 理解陌生代码

```
这个项目是别人留下的，你能帮我分析一下
src/services/api.js 是做什么的吗？
```

### 场景 2: 添加新功能

```
我想在用户登录后显示一个欢迎消息，
你能帮我实现吗？使用现有的 toast 组件。
```

### 场景 3: 代码重构

```
这个函数太长了（150 行），能帮我拆分成
更小的、可复用的函数吗？
```

### 场景 4: 性能优化

```
这个页面加载很慢，能帮我找出性能瓶颈吗？
```

## 🎓 最佳实践

### ✅ DO - 应该做的

1. **清晰描述问题** - 提供足够的上下文
2. **指定文件位置** - 当你知道问题在哪时
3. **分步骤** - 对复杂任务进行拆解
4. **验证结果** - 让 Claude Code 帮你测试
5. **学习交流** - 询问 Claude Code "为什么这样修改"

### ❌ DON'T - 避免做的

1. **模糊不清** - "代码有问题" 太笼统
2. **一次做太多** - 复杂任务应该分步进行
3. **不验证** - 修改后应该测试
4. **不理解就接受** - 有疑问时要求解释

## 🛠️ 权限模式

你的第一个任务会根据当前权限模式有不同的体验：

### 默认模式（推荐新手）

```bash
# 每个操作都需要确认
y - 同意
n - 不同意
s - 跳过此操作
```

### 自动模式

```bash
# 启动时使用
claude --auto-approve

# 所有操作自动执行，适合信任 Claude 的场景
```

### 规划模式

```bash
# 启动时使用（按两次 Shift+Tab）
claude --plan-mode

# 先看到完整计划，批准后执行
```

## 📚 下一步

完成第一个任务后，继续学习 [04. 三种模式详解](./04-modes.md)

## 🎉 恭喜！

🎊 你已经完成了与 Claude Code 的第一次交互！接下来的章节会教你更高级的功能。

## 🔗 相关资源

- [官方快速入门](https://code.claude.com/docs/zh-CN/quickstart)
- [常见工作流](https://code.claude.com/docs/zh-CN/workflows)


---

> 💡 **API 推荐**：[https://apipro.maynor1024.live/](https://apipro.maynor1024.live/) - 一站式接入各种AI服务，注册即送0.2刀
