import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gigShape from '../../../helpers/propz/gigShape';


import './GigCard.scss';

class GigCard extends React.Component {
  render() {
    const { gig } = this.props;
    return (
      <div className="gigCard">
      <div className="card mb-3">
  <div className="row">
    <div className="col-md-4">
    <img src="https://www.goodfreephotos.com/cache/vector-images/violin-vector-art.png" className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Name: {gig.name}</h5>
        <p className="card-text">Info: {gig.description}</p>
        <div className="d-flex flex-wrap">
        <div className="col-5">
    <p>Concert Date: {gig.concertDate}</p>
    <p>Concert Time: {gig.concertTime}</p>
    <p>Concert Location: {gig.concertLocation}</p>
    <p>Concert Dress: {gig.concertDress}</p>
    <p>Outdoors: {gig.isOutside}</p>
    </div>
    <div className="col-5">
    <p>Rehearsal Date: {gig.rehearsalDate}</p>
    <p>Rehearsal Time: {gig.rehearsalTime}</p>
    <p>Rehearsal Location: {gig.rehearsalLocation}</p>
    <p>Reportoire: {gig.reportoire}</p>
  </div>
  <p>Contractor Email: {gig.contractorEmail}</p>
    <p>Contractor Phone: {gig.contractorPhone}</p>
</div>
<Link className="btn btn-success" to={`/gig/:${gig.id}`}>View Gig</Link>
</div>
      </div>
    </div>
  </div>
  </div>
    );
  }
}

export default GigCard;
