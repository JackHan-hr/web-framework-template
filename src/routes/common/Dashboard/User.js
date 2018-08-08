import React from 'react';
import UserLess from './User.less';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={UserLess.user}>User</div>
    );
  }
}

export default User;
