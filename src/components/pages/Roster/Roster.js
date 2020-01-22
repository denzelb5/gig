import React from 'react';
import { Link } from 'react-router-dom';

import './Roster.scss';

class Roster extends React.Component {
  render() {
    return (
      <div className="roster">
      <h1>Roster page</h1>
      <Link className="btn btn-success" to="/gig/:gigId/edit">to gig edit</Link>
      </div>
    );
  }
}

export default Roster;
