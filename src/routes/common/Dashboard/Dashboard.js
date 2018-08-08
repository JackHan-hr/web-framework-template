import React from 'react';
import DashboardLess from './Dashboard.less';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={DashboardLess.Dashboard}>Welcome To React</div>
    );
  }
}

export default Dashboard;
