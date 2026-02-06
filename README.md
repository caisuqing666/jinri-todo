# 今日todo

Astro 静态站：将方法论和内页分开管理。

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:4321

## 新增一页

在 `src/content/pages/` 下创建 `.md` 文件：

```markdown
---
title: "页面标题"
description: "简短描述"
slug: "url-路径"
---

页面内容（Markdown）
```

## 部署

### Vercel（推荐）

1. 连接 GitHub 仓库
2. Framework preset: **Astro**
3. Deploy

### GitHub Pages

1. Settings → Pages → Source: **GitHub Actions**
2. 自动部署

## 项目结构

```
src/
├── content/pages/*.md  # 内页（5个）
├── layouts/Layout.astro # 统一模板
└── pages/
    ├── index.astro     # 首页
    └── [slug].astro   # 动态路由
public/
    └── jinri_todo_cover.png
```

## 内链说明

所有内页链接使用相对路径，确保在子路径和根域名下都能正常访问。
