import React from 'react';
import PropTypes from 'prop-types';

import './InstrumentMenu.scss';

class InstrumentMenu extends React.Component {
  static propTypes = {
    numberChange: PropTypes.func,
  }

  render() {
    const { gigInstrument, instrument, numberChange } = this.props;
    return (
      <div>
      <p>Is this printing?</p>
      <h1>{instrument.name}</h1>
      </div>
    );
  }
}

export default InstrumentMenu;
