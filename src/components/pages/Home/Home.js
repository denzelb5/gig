import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="home d-flex justify-content-center">
        <div className="card home-gig-card col-8">
          <img src="https://storage.needpix.com/rsynced_images/band-silhouette.jpg" className="card-img-top home-maestro" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">My Gigs</h5>
            <p className="card-text">View your scheduled gigs here.</p>
            <Link className="btn btn-primary" to="/gigs">My Gigs</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
