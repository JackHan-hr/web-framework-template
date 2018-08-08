import React from 'react';
import DevCustomerLess from './DevCustomer.less';

class DevCustomer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={DevCustomerLess.devCustomer}>开发客户</div>
    );
  }
}

export default DevCustomer;
