import React from 'react';

import './GigInstrument.scss';


class GigInstrument extends React.Component {
  render() {
    const { gigInstrument } = this.props;

    return (
      <div className="card border-dark gigInstrument">
        <div>
          <div className="card-body">
              <div className="rosterCard-header">{gigInstrument.name}(s) Needed: {gigInstrument.number}</div>
              {gigInstrument.players.map((player) => <p key={player.id}>{player.name}</p>)}
          </div>
        </div>
      </div>
    );
  }
}

export default GigInstrument;
