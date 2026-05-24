# emu-stu.github.io
>
> [!WARNING]
> **本仓库是自动生成的静态托管容器仓库，请勿在此仓库中人为直接提交代码修改**
>
> 本仓库内的所有网页代码内容均是由**源码仓库（EMU-Stu-Site）** 的 Action 自动编译生成，任何在此处进行的手动修改都将在下一次 Action 自动构建中**被覆盖**。

## 源码

要查看或贡献 EMU-Stu 官网的前端/后端源码，请移步至我们的官方源码开发仓库： **[EMU-Stu-Site 源码仓库](https://github.com/emu-stu/EMU-Stu-Site)**

## 运作机制

本仓库的代码完全由 [EMU-Stu-Site](https://github.com/emu-stu/EMU-Stu-Site) 中的 GitHub Actions 工作流自动发布。当源码仓库中的代码有更新时，Actions 会自动拉取、使用 Vite 编译打包，并将最终的静态文件跨仓库推送至本仓库的 `main` 分支进行 GitHub Pages 托管发布。
