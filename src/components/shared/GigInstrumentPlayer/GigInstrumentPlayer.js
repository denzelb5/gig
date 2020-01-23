import React from 'react';
import gigInstrumentPlayerShape from '../../../helpers/propz/gigInstrumentPlayerShape';

import './GigInstrumentPlayer.scss';

class GigInstrumentPlayer extends React.Component {
  static propTypes = {
    gigInstrument: gigInstrumentPlayerShape.gigInstrumentPlayerShape,
  }

  render() {
    const { gigInstrumentPlayer } = this.props;
    return (
      <div className="gig-instrument">
        <ul>
          <li className="list-group-item">Id: {gigInstrumentPlayer.id}</li>
          <li className="list-group-item">Gig Instrument Id: {gigInstrumentPlayer.gigInstrumentId}</li>
          <li className="list-group-item">Player Id: {gigInstrumentPlayer.playerId}</li>
          <li className="list-group-item">Yes: {gigInstrumentPlayer.isYes}</li>
          <li className="list-group-item">No: {gigInstrumentPlayer.isNo}</li>
        </ul>
      </div>
    );
  }
}

export default GigInstrumentPlayer;
