import React from 'react';
import SignCustomerLess from './SignCustomer.less';

class SignCustomer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={SignCustomerLess.signCustomer}>签约客户</div>
    );
  }
}

export default SignCustomer;
