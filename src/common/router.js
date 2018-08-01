import dynamic from 'dva/dynamic';

const modelNotExisted = (app, model) =>
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  });

// 构造dynamicWrapper 按需注册model
const dynamicWrapper = (app, models, component) => {

  models.forEach(model => {
    if (modelNotExisted(app, model)) {
      app.model(require(`../models/${model}`).default);
    }
  });

  const Route = dynamic({
    app,
    component,
  });

  return Route;
};

// 组件路由配置
const RouteData = app => {

  const routes = [
    {
      path: '',
      exact: true,
      component: dynamicWrapper(app, [], () => import('../routes/Dashboard/Dashboard')),
    },
    {
      path: '/user',
      exact: true,
      component: dynamicWrapper(app, ['user'], () => import('../routes/Dashboard/User')),
    },
  ];

  const basePath = '/dashboard';
  routes.forEach((route) => {
    route.path = basePath + route.path;
  });

  const NotFound = dynamic({
    app,
    component: () => import('../routes/NotFound/NotFound'),
  });

  return { routes, NotFound };
}

export { RouteData }
