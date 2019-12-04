# VuePress 使用说明

## 文档中心框架

使用`VuePress` 构建 -- [https://vuepress.vuejs.org/zh/](https://vuepress.vuejs.org/zh/)

## 文档规范

- 文档有且只有一个h1标题 标题将会显示在左侧的侧边栏（文档的h2、h3标题会在点击h1标题之后被提取显示）

## 使用说明

### 添加文档

在`docs`目录下合适的位置添加文档即可

侧边栏配置：[https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%A4%9A%E4%B8%AA%E4%BE%A7%E8%BE%B9%E6%A0%8F](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#多个侧边栏)

### 快速调试预览

> 首次运行需要预先装好npm 或者yarn
>
> 然后安装vuepress：yarn global add vuepress # 或者：npm install -g vuepress

1. 命令行输入：

```shell
yarn docs:dev
```

2. 浏览器打开：[http://localhost:8080/](http://localhost:8080/)
3. 修改文档，保存，浏览器会自动刷新预览

### 服务开机自启

这里采用`pm2`作为进程管理工具

**全局安装**

```shell
npm install pm2 -g
```

**开机自启**

```shell
pm2 startup
```

然后根据输出的提示输入命令行

**文档加入开机自启**

```shell
pm2 start docs.js
```

**log查看**

如果 pm2 管理进程出错，文档服务没有正常启动，可以使用：

```shell
pm2 logs docs
```

排查相关log

更多 pm2 用法 Google 一下。

### 发布

由于最终是链接到了 `GitHub`, 所以需要把 `docs\.vuepress\dist\` 里面的内容拷贝到根目录。
