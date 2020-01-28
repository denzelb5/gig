import React from 'react';
import gigInstrumentShape from '../../../helpers/propz/gigInstrumentShape';

import './GigInstrument.scss';

class GigInstrument extends React.Component {
  static propTypes = {
    gigInstrument: gigInstrumentShape.gigInstrumentShape,
  }

  render() {
    const { gigInstrument } = this.props;
    return (
      <div className="gig-instrument">
        <h3 className="instrumentName">{gigInstrument.name}</h3>
        <h5 className="list-group-item">Number: {gigInstrument.number}</h5>
      </div>
    );
  }
}

export default GigInstrument;
