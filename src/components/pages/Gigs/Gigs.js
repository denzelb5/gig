import React from 'react';
import { Link } from 'react-router-dom';
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


  render() {
    return (
      <div className="Gigs">
      <h2>Gigs Page</h2>
      <Link className="btn btn-secondary" to="/gig/:gigId/roster">To Roster</Link>
      {this.state.allGigs.map((gig) => <GigCard key={gig.id} gig={gig} />)}
      </div>
    );
  }
}

export default Gig;
