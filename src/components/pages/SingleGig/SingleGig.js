import React from 'react';
import { Link } from 'react-router-dom';
import GigInstrument from '../../shared/GigInstrument/GigInstrument';
import SingleGigCard from '../../shared/SingleGigCard/SingleGigCard';

import './SingleGig.scss';
import gigData from '../../../helpers/data/gigData';
import instrumentData from '../../../helpers/data/instrumentData';
import smash from '../../../helpers/data/smash';

class SingleGig extends React.Component {
  state = {
    gig: {},
    gigInstruments: [],
    allInstruments: [],
  }

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
        smash.getCompleteGigInstrumentsWithPlayers(gigId)
          .then((gigInstruments) => {
            this.setState({ gigInstruments, gig });
            this.getInstruments();
          });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getCurrentGig();
  }

  render() {
    const { gig, instrument, gigInstrument } = this.state;
    const { gigId } = this.props.match.params;

    return (
      <div className="single-gig">
        <div>
          <SingleGigCard key={gigId} gig={gig} instrument={instrument} gigInstrument={gigInstrument}/>
        </div>
        <div className="roster-div">
          <div className="">
          <div className="card roster-background">
            <div className="card-header roster-title">
              Instrumentation And Personnel
            </div>
            <div className="d-flex row container personnel">
              {this.state.gigInstruments.length && this.state.allInstruments.length && this.state.gigInstruments.map((gigInst) => <GigInstrument key={gigInst.id} gigInstrument={gigInst} />)}
            </div>
          </div>
        </div>
        </div>
        <div>
          <Link className="btn btn-secondary add-player" to={`/gig/${gigId}/roster`}>Add Players</Link>
        </div>
      </div>
    );
  }
}

export default SingleGig;
