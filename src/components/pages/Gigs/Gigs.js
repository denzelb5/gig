import React from 'react';
import { Link } from 'react-router-dom';

import './Gigs.scss';

class Gig extends React.Component {
  render() {
    return (
      <div>
      <h2>Gigs Page</h2>
      <Link className="btn btn-secondary" to="/gig/:gigId/roster">To Roster</Link>
      </div>
    );
  }
}

export default Gig;
