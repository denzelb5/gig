import React from 'react';
import { Link } from 'react-router-dom';
import gigData from '../../../helpers/data/gigData';
import authData from '../../../helpers/data/authData';
import GigCardSmall from '../../shared/GigCardSmall/GigCardSmall';

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
      <Link className="btn btn-secondary" to="/gig/:gigId/roster">To Roster</Link>
      {this.state.gigs.map((gig) => <GigCardSmall key={gig.id} gig={gig} />)}
      </div>
    );
  }
}

export default Gig;
