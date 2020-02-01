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

    return (
      <div className="single-gig">
        <div>
          <SingleGigCard key={gig.id} gig={gig} instrument={instrument} gigInstrument={gigInstrument}/>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-header">
              Instrumentation
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{ this.state.gigInstruments.length && this.state.allInstruments.length && this.state.gigInstruments.map((gigInst) => <GigInstrument key={gigInst.id} instrument={this.state.allInstruments.find((i) => i.id === gigInst.instrumentId)} gigInstrument={gigInst} />) }</li>
            </ul>
          </div>
        </div>
        <div className="personnel">
          <Link className="btn btn-secondary" to={`/gig/${gig.id}/roster`}>Add Players</Link>
          <h1>Personnel</h1>
        </div>
        {/* { this.state.gigInstrumentPlayers.map((gigInstrumentPlayer) => <GigInstrumentPlayer key={gigInstrumentPlayer.id} gigInstrumentPlayer={gigInstrumentPlayer} />) } */}
      </div>
    );
  }
}

export default SingleGig;
