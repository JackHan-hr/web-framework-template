import React from 'react';
import { connect } from 'dva';
import { Switch, Route } from 'dva/router';
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import { enquireScreen, unenquireScreen } from 'enquire-js';
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
    const layout = (
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
    );

    return (
      <DocumentTitle title='设置'>
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
