import React from 'react';
import ClueLibraryLess from './ClueLibrary.less';

class ClueLibrary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ClueLibraryLess.clueLibrary}>线索引擎</div>
    );
  }
}

export default ClueLibrary;
