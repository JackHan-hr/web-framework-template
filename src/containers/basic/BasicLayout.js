import React from 'react';
import { Switch, Route } from 'dva/router';
import { RouteData } from '../../common/router';

class BasicLayout extends React.Component {

  render() {
    const routeData = RouteData(window.app);
    const routes = routeData.routes;
    const NotFound = routeData.NotFound;

    return (
      <div>
        <div>left</div>
        <div>header</div>
        <Switch>
          {
            routes.map(({ path, exact, component }, key) => (
              <Route
                key={key}
                path={path}
                exact={exact}
                component={component}
              />
            ))
          }
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }

}

export default BasicLayout;
