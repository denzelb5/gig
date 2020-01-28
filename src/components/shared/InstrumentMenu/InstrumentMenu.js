import React from 'react';

import './InstrumentMenu.scss';

class InstrumentMenu extends React.Component {
  render() {
    const { instrumentsCheckboxName } = this.props;
    return (
      <div>
      <p>Is this printing?</p>
      <h1>{instrumentsCheckboxName}</h1>
      </div>
    );
  }
}

export default InstrumentMenu;
