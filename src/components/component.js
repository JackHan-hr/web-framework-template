import React, { Component } from 'react';
import { Button } from 'antd';
import ComLess from './component.less';
import avatar from 'assets/img/avatar.png';

class Com extends Component {
  render() {
    return (
      <div className="Com">
        <Button type="primary" className={ComLess.btn}>primary</Button>
        Resolve Component
        <img src={avatar} className={ComLess.avatar} alt="" />
      </div>
    );
  }
}

export default Com;
