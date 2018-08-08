import React from 'react';
import { Loader } from 'react-loaders';
import LoginLayoutLess from './LoginLayout.less';
import _ from 'lodash';

class LoginLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let self = this;
    _.delay(() => {
      self.props.history.push('/home/dashboard');
    }, 1000);
  }

  render() {
    return (
      <div className={LoginLayoutLess.loginLayout}>
        <div className={LoginLayoutLess.ball}>
          <Loader type="ball-pulse-rise" active />
        </div>
      </div>
    );
  }

}

export default LoginLayout;
