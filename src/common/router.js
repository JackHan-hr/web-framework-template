import Loadable from 'react-loadable';
import Loading from 'components/Loading';

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

  const LoadableXmap = Loadable({
    loader: component,
    loading: Loading,
  });

  return LoadableXmap;
};

// 组件路由配置
const RouteData = app => {

  const routes = [
    {
      path: '/dashboard',
      exact: true,
      component: dynamicWrapper(app, [], () => import('../routes/common/Dashboard/Dashboard')),
    },
    {
      path: '/user',
      exact: true,
      component: dynamicWrapper(app, ['user'], () => import('../routes/common/Dashboard/User')),
    },
    {
      path: '/customer/development',
      exact: true,
      component: dynamicWrapper(app, [], () => import('../routes/common/Customer/DevCustomer/DevCustomer')),
    },
    {
      path: '/customer/signcontract',
      exact: true,
      component: dynamicWrapper(app, [], () => import('../routes/common/Customer/SignCustomer/SignCustomer')),
    },
    {
      path: '/clue/library',
      exact: true,
      component: dynamicWrapper(app, [], () => import('../routes/common/Clue/ClueLibrary/ClueLibrary')),
    },
  ];

  const basePath = '/home';
  routes.forEach((route) => {
    route.path = basePath + route.path;
  });

  const NotFound = Loadable({
    loader: () => import('../routes/NotFound/NotFound'),
    loading: Loading,
  });

  return { routes, NotFound };
}

export { RouteData }
