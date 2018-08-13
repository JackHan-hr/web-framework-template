import React from 'react';
import PropTypes from 'prop-types';
import { routerRedux, Switch, Route, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const { ConnectedRouter } = routerRedux;

const Routers = ({ history, app }) => {
  window.app = app;
  const LoginLayout = dynamic({
    app,
    models: () => [import('./models/login')],
    component: () => import('./containers/LoginLayout/LoginLayout'),
  });

  const BasicLayout = dynamic({
    app,
    component: () => import('./containers/BasicLayout/BasicLayout'),
  });

  const SettingLayout = dynamic({
    app,
    component: () => import('./containers/SettingLayout/SettingLayout'),
  });

  const NotFound = dynamic({
    app,
    component: () => import('./routes/NotFound/NotFound'),
  });

  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/login' />} />
          <Route exact path='/login' component={LoginLayout} />
          <Route exact path='/home' render={() => <Redirect to='/home/dashboard' />} />
          <Route path='/home' component={BasicLayout} />
          <Route path='/setting' component={SettingLayout} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  )
};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

Routers.defaultProps = {
  history: 'history',
  app: 'app',
}

export default Routers;
