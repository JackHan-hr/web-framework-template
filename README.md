### 前端应用框架模板

#### 技术栈
👍🏻[create-react-app](https://github.com/facebookincubator/create-react-app)         
👍🏻[ant design](https://ant.design/index-cn)       
👍🏻[dva.js](https://github.com/dvajs/dva)     
👍🏻[react](https://facebook.github.io/react/)     
👍🏻[react-router](https://github.com/ReactTraining/react-router)      
👍🏻[webpack](https://webpack.js.org/concepts/)      
👍🏻[babel](https://babeljs.io/)     

#### 特性

1、

#### 目录结构

```bash
├── /build/           # 打包输出
├── /config/          # create-react-app + 自定义配置
│ ├── /webpack.config.dev.js/   # 开发配置
│ ├── /webpack.config.prod.js/  # 生产配置 staging配置
├── /public/         # 公共文件
├── /scripts/        # create-react-app + 环境变量 脚本
├── /src/            # 项目源码
│ ├── /assets/      # 资源文件
│ ├── /common/      # 公共文件
│ ├── /components/  # 示例组件
│ ├── /containers/  # layout 组件
│ ├── /models/      # dva 数据模型
│ ├── /theme/       # 皮肤样式
│ ├── /utils/       # 工具函数
│ │ └── config.js   # 项目配置
│ ├── route.js      # 路由配置
│ └── index.js      # 入口文件
└── package.json    # 项目信息
```
