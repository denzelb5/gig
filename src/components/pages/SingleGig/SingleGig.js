import React from 'react';
// import PropTypes from 'prop-types';
import GigInstrument from '../../shared/GigInstrument/GigInstrument';
import gigInstrumentData from '../../../helpers/data/gigInstrumentData';
import GigInstrumentPlayer from '../../shared/GigInstrumentPlayer/GigInstrumentPlayer';
import gigInstrumentPlayerData from '../../../helpers/data/gigInstrumentPlayerData';
// import gigData from '../../../helpers/data/gigData';
// import gigShape from '../../../helpers/propz/gigShape';
import GigCard from '../../shared/GigCard/GigCard';

import './SingleGig.scss';
import gigData from '../../../helpers/data/gigData';

class SingleGig extends React.Component {
  state = {
    gig: {},
    gigs: [],
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

  getGigData = (gigId) => {
    gigData.getGigsByUid(gigId)
      .then((gigs) => this.setState({ gigs }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    const { gigId } = this.props.match.params;
    console.error('gigId', gigId);
    gigData.getSingleGig(gigId)
      .then((response) => {
        this.setState({ gig: response.data });
        this.getGigData(gigId);
        console.error('gig', response.data);
      })
      .catch((error) => console.error(error));
    this.getGigInstruments();
    this.getGigInstrumentPlayers();
  }

  render() {
    // const { gigId } = this.props.match.params;
    // const { gig } = this.props;
    // const { gig } = this.state;
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
