import React from 'react';
// import PropTypes from 'prop-types';
import GigInstrument from '../../shared/GigInstrument/GigInstrument';
import gigInstrumentData from '../../../helpers/data/gigInstrumentData';
// import GigInstrumentPlayer from '../../shared/GigInstrumentPlayer/GigInstrumentPlayer';
// import gigInstrumentPlayerData from '../../../helpers/data/gigInstrumentPlayerData';
import authData from '../../../helpers/data/authData';
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
    // gigInstrumentPlayers: [],
  }

  // getGigInstrumentPlayers = () => {
  //   gigInstrumentPlayerData.getAllGigInstrumentPlayers()
  //     .then((gigInstrumentPlayers) => this.setState({ gigInstrumentPlayers }))
  //     .catch((error) => console.error(error));
  // }

  getGigData = (gigId) => {
    gigData.getGigsByUid(authData.getUid())
      .then((request) => this.setState({ gigs: request }))
      .catch((error) => console.error(error));
  }

  getCurrentGigInstruments = () => {
    const { gigId } = this.props.match.params;
    console.log('gigId', gigId);
    gigInstrumentData.getAllGigInstrumentsByGigId(gigId)
      .then((response) => this.setState({ gigInstruments: response }))
      .catch((error) => console.error(error));
  }

  getCurrentGig = () => {
    const { gigId } = this.props.match.params;
    gigData.getSingleGig(gigId)
      .then((response) => {
        const gig = response.data;
        gig.id = gigId;
        this.setState({ gig: response.data });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getCurrentGigInstruments();
    // this.getGigInstrumentPlayers();
    this.getGigData();
    this.getCurrentGig();
  }

  render() {
    // const { gigId } = this.props.match.params;
    // const { gig } = this.props;
    const { gig } = this.state;
    return (
      <div className="single-gig">
        <h1>SingleGig Page</h1>
        <GigCard key={gig.id} gig={gig}/>
        {/* { gigs.map((gig) => <GigCard key={gig.id} gig={gig} />)} */}
        { this.state.gigInstruments.map((gigInstrument) => <GigInstrument key={gigInstrument.id} gigInstrument={gigInstrument} />) }
        <h1>GigInstrumentPlayers</h1>
        {/* { this.state.gigInstrumentPlayers.map((gigInstrumentPlayer) => <GigInstrumentPlayer key={gigInstrumentPlayer.id} gigInstrumentPlayer={gigInstrumentPlayer} />) } */}
      </div>
    );
  }
}

export default SingleGig;
