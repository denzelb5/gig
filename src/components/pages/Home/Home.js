import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div>
      <Link className="btn btn-danger" to="/gigs">to gigs</Link>
      </div>
    );
  }
}

export default Home;
