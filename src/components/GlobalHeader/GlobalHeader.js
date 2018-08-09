import { React } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

export default class GlobalHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header
        style={{ background: '#fff', padding: 0 }}
      >
        111
      </Header>
    );
  }
}
