# 阿奇美容院 · ARKIE BEAUTY

重庆市两江新区新牌坊龙溪街道 2-2 · 医疗美容门诊官网

## 技术栈

纯静态站点：HTML + CSS + 原生 JavaScript，无框架、无构建步骤、无外部依赖（除 Google Fonts）。

```
index.html          页面结构
style.css           样式（CSS 变量主题）
script.js           交互（滚动动画 / 移动端菜单 / FAQ / 预约时段）
images/             本地化图片资源
.github/workflows/  GitHub Pages 自动部署
```

## 本地预览

```bash
python3 -m http.server 10021
# 打开 http://localhost:10021
```

## 部署

推送到 `main` 分支即触发 GitHub Actions 自动部署到 GitHub Pages。

首次部署需在仓库 Settings → Pages → Source 选择 **GitHub Actions**。

## 内容说明

- 定位：持证医疗美容门诊，主打「先诊断、后治疗」的透明沟通
- 项目价格均为参考价，实际以面诊报价单为准
- 医疗美容属医疗行为，页面含免责声明，不做疗效承诺

## 设计

- 配色：深墨绿 `#16211b` / 暖米白 `#f7f3ec` / 香槟金 `#b9924f`
- 字体：Noto Serif SC（中文标题）+ Cormorant Garamond（英文小标）+ Noto Sans SC（正文）
