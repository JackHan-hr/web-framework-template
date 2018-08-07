### 前端应用框架模板

#### 技术栈
👍🏻[create-react-app](https://github.com/facebookincubator/create-react-app)         
👍🏻[ant design](https://ant.design/index-cn)       
👍🏻[dva.js](https://github.com/dvajs/dva)     
👍🏻[react](https://facebook.github.io/react/)     
👍🏻[react-router](https://github.com/ReactTraining/react-router)      
👍🏻[webpack](https://webpack.js.org/concepts/)      
👍🏻[babel](https://babeljs.io/)     

#### 架构设计

```bash
开箱即用的框架有时候确实能给我们带来快捷启动开发，这是它的优点，同样我们为了满足特定的需求也需要不停的去改变他的配置，甚至去改动它的封装，这样不可避免的就造成了既封装又部分反封装的情况，就好比一个密封的盒子被里面的东西撑得变形，甚至破洞再打补丁，这并不是我们想要的。小型的项目我们当然可以用这种开箱即用的框架来快速开发迭代。但是一旦项目类型偏大，我们就需求自己根据项目发展需要来进行架构，这也是我一直所思考的。

企业微信pc端应用或许不是一个大型项目，至多算得上一个中等项目，但是我依然采用自适应架构来规划我们的项目。

首先，项目是引入了create-react-app作为基础框架，虽然说要自适应架构，但是我们也需要尽量节省开发时间，create-react-app是facebook开源的一个基本配置框架，正因为它简洁，又不需要我们，在底层继续重复造轮子，所以能满足我们的需要。

什么叫自适应？自适应是指我们所架构的框架在满足基本业务的前提下可以根据我们项目的迭代，从各个层面进行扩展，并且不会造成代码混乱，依然如最初构建时那样结构清晰明确，代码规划，层次有序且条理。

其次，从路由层面划分项目结构，顶层路由是最基本的路由配置，包括应用页面、设置页面和异常显示，应用页面里面增加子级路由配置，包括基本页面布局和权限管理。

权限管理配置，在顶层页面进入login的时候配置获取再传入应用页面，在应用页面进行分析处理：

1、处理并缓存角色权限以作全局配置；
2、跟据应用权限进行项目应用划分，这里一般是做微应用的时候进行划分处理，默认通用配置；
3、划分好应用之后再在每一层模块中传入模块权限进行启用关闭或者其他权限处理；
4、最后在每一个模块中传入业务权限进行业务处理。

到这来就基本处理完了一整条权限划分道路，接下来是全局配置，

全局配置包括主题配置、业务配置、css全局配置和语言配置等等。

这些配置就需要我们根据不同的应用场景来，这里就不详细赘诉。

最后回到业务层面，业务开发需要明确css划分，这里采用less的预处理器，并按照组件化进行css引用。

之后，我们顺利进行业务开发...
```


#### 框架特性

```bash
1、项目采用create-react-app作为基础框架原型并eject；
2、自定义webpack配置，js和css分离打包，公共模块抽离，启用cssModule并差异化css和less；
3、代码同时采用按路由分割和按组件分割两种方式进行优化，按需加载，节省资源占比，提示页面渲染速度；
4、引入dva库统一管理react-router-dom和react-router-redux；
5、利用dva的model概念，代码结构清晰，明确数据流向，响应式数据处理；
6、权限分层管理，从角色权限、应用权限、模块权限、业务权限进行划分；
7、采用fetch数据处理；
8、集成es6和es7语法特性；
9、启用eslint配置和stylelint，并加入prettier进行代码美化；
10、自定义主题；
```

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
│ │ └── index.js   # 项目工具配置
│ ├── router.js      # 路由配置
│ ├── index.js      # 入口文件
│ ├── polyfill.js   # 函数全局配置
│ ├── rollbar.js    # 错误追踪
└── package.json    # 项目信息
```
