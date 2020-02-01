import React from 'react';
// import gigInstrumentShape from '../../../helpers/propz/gigInstrumentShape';

import './GigInstrument.scss';
// import instrumentRowShape from '../../../helpers/propz/instrumentRowShape';

class GigInstrument extends React.Component {
  static propTypes = {
    // gigInstrument: gigInstrumentShape.gigInstrumentShape,
    // instrumentsCheckbox: instrumentRowShape.instrumentRowShape,
  }

  render() {
    const { gigInstrument } = this.props;
    return (
      // <div className="gig-instrument">
      //   <h3>Instrumentation</h3>
      //   <p>{instrument.name}</p>
      //   <p className="list-group-item">Number: {gigInstrument.number}</p>
      // </div>
      <div className="card gigInstrument">
        <div className="">
          <div className="card-body">
              <p className="card-text">{gigInstrument.name}: {gigInstrument.number}</p>
              {gigInstrument.players.map((player) => <p key={player.id}>{player.name}</p>)}
          </div>
        </div>
      </div>
    );
  }
}

export default GigInstrument;
