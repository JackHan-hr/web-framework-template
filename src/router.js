import React from 'react';
import PropTypes from 'prop-types';
import { routerRedux, Switch, Route, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import App from './containers/App';
import NotFound from './routes/NotFound/NotFound';

const { ConnectedRouter } = routerRedux;

dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className="globalSpin" />;
});

const Routers = ({ history, app }) => {
  const routes = [];

  const Notfound = dynamic({
    app,
    component: () => NotFound,
  });

  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="" />)} />
            {
              routes.map(({ path, ...dynamics }, key) => (
                <Route
                  key={key}
                  exact
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics,
                  })}
                />
              ))
            }
            <Route component={Notfound} />
          </Switch>
        </App>
      </ConnectedRouter>
    </LocaleProvider>
  )
};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers;
