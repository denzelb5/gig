import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <Link className="btn btn-danger" to="/gigs">to gigs</Link>
    );
  }
}

export default Home;
