import React from 'react';
import { Spin } from 'antd';
import Styles from './index.less';

export default class Loading extends React.Component {

  render() {
    return (
      <div className={Styles.loading}>
        <Spin size="large" className="globalSpin" />
      </div>
    );
  }

}
