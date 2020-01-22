import React from 'react';
import { Link } from 'react-router-dom';
import gigData from '../../../helpers/data/gigData';
import authData from '../../../helpers/data/authData';
import GigCard from '../../shared/GigCard/GigCard';

import './Gigs.scss';

class Gig extends React.Component {
  state = {
    gigs: [],
  }

  getGigs = () => {
    gigData.getGigsByUid(authData.getUid())
      .then((gigs) => this.setState({ gigs }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getGigs();
  }

  render() {
    // const { gig } = this.props;
    return (
      <div className="Gigs">
      <h2>Gigs Page</h2>
      {this.state.gigs.map((gigs) => <GigCard key={gigs.id} gig={gigs} />)}
      <Link className="btn btn-secondary" to="/gig/:gigId/roster">To Roster</Link>
      </div>
    );
  }
}

export default Gig;
