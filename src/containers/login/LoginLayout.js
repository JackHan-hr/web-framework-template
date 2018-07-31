import React from 'react';
import { Loader } from 'react-loaders';
import LoginLayoutLess from './LoginLayout.less';

class LoginLayout extends React.Component {

  componentDidMount() {

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
