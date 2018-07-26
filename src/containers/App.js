import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Spin } from 'antd';
import './App.less';

class App extends React.Component {

  render() {

    const { global } = this.props;
    const { menuMode, fakeGlobal } = global;

    return (
      <div>
        <Spin size="large" spinning={fakeGlobal}>
          {
            menuMode === 'left' ?
              <div>left</div>
              :
              <div>top</div>
          }
        </Spin>
      </div>
    );
  }
}

export default withRouter(connect(({ global }) => ({ global }))(App));
