import React from 'react';
// import { Link } from 'react-router-dom';
import gigData from '../../../helpers/data/gigData';
import authData from '../../../helpers/data/authData';
import GigCard from '../../shared/GigCard/GigCard';

import './Gigs.scss';

class Gig extends React.Component {
  state = {
    allGigs: [],
  }

  getGigs = () => {
    gigData.getGigsByUid(authData.getUid())
      .then((request) => this.setState({ allGigs: request }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getGigs();
  }

  deleteGig = (gigId) => {
    gigData.deleteGig(gigId)
      .then(() => this.getGigs())
      .catch((error) => console.error(error));
  }

  render() {
    return (

        <div className="gigs">
          {this.state.allGigs.map((gig) => <GigCard key={gig.id} gig={gig} deleteGig={this.deleteGig} />)}
        </div>

    );
  }
}

export default Gig;
