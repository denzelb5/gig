import React from 'react';
import gigInstrumentShape from '../../../helpers/propz/gigInstrumentShape';

import './GigInstrument.scss';
import instrumentRowShape from '../../../helpers/propz/instrumentRowShape';

class GigInstrument extends React.Component {
  static propTypes = {
    gigInstrument: gigInstrumentShape.gigInstrumentShape,
    instrumentsCheckbox: instrumentRowShape.instrumentRowShape,
  }

  render() {
    const { gigInstrument, instrument } = this.props;
    return (
      <div className="gig-instrument">
        <h1>{instrument.name}</h1>
        <h5 className="list-group-item">Number: {gigInstrument.number}</h5>
      </div>
    );
  }
}

export default GigInstrument;
