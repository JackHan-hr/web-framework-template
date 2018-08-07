import React from 'react';
import { Switch, Route } from 'dva/router';
import { RouteData } from '../../common/router';
import { getMenuData } from '../../common/menu/menu';
import { Layout } from 'antd';

const { Content, Header, Footer, Sider } = Layout;

class BasicLayout extends React.Component {

  render() {
    const routeData = RouteData(window.app);
    const routes = routeData.routes;
    const NotFound = routeData.NotFound;
    const menuDatas = getMenuData();
    console.log(menuDatas);
    return (
      <Layout>
        <Sider>111</Sider>
        <Layout>
          <Header>111</Header>
          <Content>
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
          </Content>
          <Footer>233</Footer>
        </Layout>
      </Layout>
    );
  }

}

export default BasicLayout;
