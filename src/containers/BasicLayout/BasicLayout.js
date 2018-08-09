import React from 'react';
import { connect } from 'dva';
import { Switch, Route } from 'dva/router';
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import pathToRegexp from 'path-to-regexp';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import SiderMenu from '../../components/SiderMenu';
import { RouteData } from '../../common/router';
import { getMenuData } from '../../common/menu/menu';

const { Content, Header } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};


let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class BasicLayout extends React.Component {

  constructor(props) {
    super(props);

    this.routeData = RouteData(window.app);
    this.menuDatas = getMenuData();

    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile => {
      this.setState({
        isMobile: mobile,
      });
    });
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }

  // 获取页面标题
  getPageTitle() {
    const { location } = this.props;
    const { pathname } = location;
    let title = '快启-企业微信版';
    let currRouterData = null;
    // 路径匹配
    this.routeData.routes.forEach(route => {
      if (pathToRegexp(route.path).test(pathname)) {
        currRouterData = route;
      }
    });
    if (currRouterData && currRouterData.name) {
      title = `${currRouterData.name} - ${title}`;
    }
    return title;
  }

  handleMenuCollapse = collapsed => {
    const { dispatch } = this.props;
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  };

  render() {
    const routes = this.routeData.routes;
    const NotFound = this.routeData.NotFound;
    const { isMobile: mb } = this.state;
    const { collapsed, location } = this.props;
    const layout = (
      <Layout>
        <SiderMenu
          menuDatas={this.menuDatas}
          isMobile={mb}
          location={location}
          collapsed={collapsed}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <Header
            style={{ background: '#fff', padding: 0 }}
          >
            111
          </Header>
          <Content style={{ margin: '24px', background: '#fff', height: '100%'}}>
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
        </Layout>
      </Layout>
    );

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = (dvaState) => {
  const { global = {}, loading } = dvaState;
  console.log('loading=', loading);
  const newProps = {
    collapsed: global.collapsed,
  }
  return newProps;
};

export default connect(mapStateToProps)(BasicLayout);
