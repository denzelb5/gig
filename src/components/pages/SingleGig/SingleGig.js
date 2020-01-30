import React from 'react';
import { Link } from 'react-router-dom';
import GigInstrument from '../../shared/GigInstrument/GigInstrument';
import gigInstrumentData from '../../../helpers/data/gigInstrumentData';
import SingleGigCard from '../../shared/SingleGigCard/SingleGigCard';

import './SingleGig.scss';
import gigData from '../../../helpers/data/gigData';
import instrumentData from '../../../helpers/data/instrumentData';

class SingleGig extends React.Component {
  state = {
    gig: {},
    gigs: [],
    instrument: {},
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
    const { gig, instrument, gigInstrument } = this.state;

    console.log('why am i undefined', this.state.gigInstruments);
    return (
      <div className="single-gig">
        <h1>SingleGig Page</h1>
        {/* {this.state.gigInstruments.map((gigInstrument) => <GigInstrument key={gigInstrument.id} gigInstrument={gigInstrument} />)} */}
        <SingleGigCard key={gig.id} gig={gig} instrument={instrument} gigInstrument={gigInstrument}/>
        { this.state.gigInstruments.length && this.state.allInstruments.length && this.state.gigInstruments.map((gigInstrument) => <GigInstrument key={gigInstrument.id} instrument={this.state.allInstruments.find((i) => i.id === gigInstrument.instrumentId)} gigInstrument={gigInstrument} />) }
        <Link className="btn btn-secondary" to="/gig/:gigId/roster">To Roster</Link>
        <h1>GigInstrumentPlayers</h1>
        {/* { this.state.gigInstrumentPlayers.map((gigInstrumentPlayer) => <GigInstrumentPlayer key={gigInstrumentPlayer.id} gigInstrumentPlayer={gigInstrumentPlayer} />) } */}
      </div>
    );
  }
}

export default SingleGig;
