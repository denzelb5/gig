import React from 'react';
import GigInstrument from '../../shared/GigInstrument/GigInstrument';
import gigInstrumentData from '../../../helpers/data/gigInstrumentData';
import GigInstrumentPlayer from '../../shared/GigInstrumentPlayer/GigInstrumentPlayer';
import gigInstrumentPlayerData from '../../../helpers/data/gigInstrumentPlayerData';

import './SingleGig.scss';

class SingleGig extends React.Component {
  state = {
    gigInstruments: [],
    gigInstrumentPlayers: [],
  }

  getGigInstruments = () => {
    gigInstrumentData.getAllGigInstruments()
      .then((gigInstruments) => this.setState({ gigInstruments }))
      .catch((error) => console.error(error));
  }

  getGigInstrumentPlayers = () => {
    gigInstrumentPlayerData.getAllGigInstrumentPlayers()
      .then((gigInstrumentPlayers) => this.setState({ gigInstrumentPlayers }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getGigInstruments();
    this.getGigInstrumentPlayers();
  }

  render() {
    return (
      <div className="single-gig">
        <h1>SingleGig Page</h1>
        { this.state.gigInstruments.map((gigInstrument) => <GigInstrument key={gigInstrument.id} gigInstrument={gigInstrument} />) }
        <h1>GigInstrumentPlayers</h1>
        { this.state.gigInstrumentPlayers.map((gigInstrumentPlayer) => <GigInstrumentPlayer key={gigInstrumentPlayer.id} gigInstrumentPlayer={gigInstrumentPlayer} />) }
      </div>
    );
  }
}

export default SingleGig;
