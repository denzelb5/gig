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
        <ul>
          <li className="list-group-item">Id: {gigInstrument.id}</li>
          <li className="list-group-item">Instrument Id: {gigInstrument.instrumentId}</li>
          <li className="list-group-item">Gig Id: {gigInstrument.gigId}</li>
          <li className="list-group-item">Number: {gigInstrument.number}</li>
        </ul>
      </div>
    );
  }
}

export default GigInstrument;
