import React from 'react';
// import PropTypes from 'prop-types';
import GigInstrument from '../../shared/GigInstrument/GigInstrument';
import gigInstrumentData from '../../../helpers/data/gigInstrumentData';
import InstrumentMenu from '../../shared/InstrumentMenu/InstrumentMenu';
// import GigInstrumentPlayer from '../../shared/GigInstrumentPlayer/GigInstrumentPlayer';
// import gigInstrumentPlayerData from '../../../helpers/data/gigInstrumentPlayerData';
import authData from '../../../helpers/data/authData';
// import gigData from '../../../helpers/data/gigData';
// import gigShape from '../../../helpers/propz/gigShape';
import GigCard from '../../shared/GigCard/GigCard';

import './SingleGig.scss';
import gigData from '../../../helpers/data/gigData';
import instrumentData from '../../../helpers/data/instrumentData';

class SingleGig extends React.Component {
  state = {
    gig: {},
    gigs: [],
    gigInstrument: {},
    gigInstruments: [],
    allInstruments: [],
    // gigInstrumentPlayers: [],
  }

  // getGigInstrumentPlayers = () => {
  //   gigInstrumentPlayerData.getAllGigInstrumentPlayers()
  //     .then((gigInstrumentPlayers) => this.setState({ gigInstrumentPlayers }))
  //     .catch((error) => console.error(error));
  // }


  getInstruments = () => {
    instrumentData.getAllInstruments()
      .then((response) => {
        this.setState({ allInstruments: response });
      })
      .catch((error) => console.error(error));
  }


  getCurrentGig = () => {
    const { gigId } = this.props.match.params;
    gigData.getSingleGig(gigId)
      .then((response) => {
        const gig = response.data;
        gig.id = gigId;
        gigInstrumentData.getAllGigInstrumentsByGigId(gigId)
          .then((gigInstruments) => {
            console.log(response, 'response from getallinstrums');
            this.setState({ gigInstruments, gig: response.data });
            this.getInstruments();
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    // this.getCurrentGigInstruments();
    // this.getGigInstrumentPlayers();
    this.getCurrentGig();
  }

  render() {
    const { gig } = this.state;

    console.log('why am i undefined', this.state.gigInstruments);
    return (
      <div className="single-gig">
        <h1>SingleGig Page</h1>
        {/* {this.state.gigInstruments.map((gigInstrument) => <GigInstrument key={gigInstrument.id} gigInstrument={gigInstrument} />)} */}
        <GigCard key={gig.id} gig={gig}/>
        { this.state.gigInstruments.length && this.state.allInstruments.length && this.state.gigInstruments.map((gigInstrument) => <GigInstrument key={gigInstrument.id} instrument={this.state.allInstruments.find((i) => i.id === gigInstrument.instrumentId)} gigInstrument={gigInstrument} />) }
        <h1>GigInstrumentPlayers</h1>
        {/* { this.state.gigInstrumentPlayers.map((gigInstrumentPlayer) => <GigInstrumentPlayer key={gigInstrumentPlayer.id} gigInstrumentPlayer={gigInstrumentPlayer} />) } */}
      </div>
    );
  }
}

export default SingleGig;
