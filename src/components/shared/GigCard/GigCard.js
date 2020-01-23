import React from 'react';
// import { Link } from 'react-router-dom';
import gigShape from '../../../helpers/propz/gigShape';


import './GigCard.scss';

class GigCard extends React.Component {
  static propTypes = {
    gig: gigShape.gigShape,
  }


  render() {
    const { gig } = this.props;
    return (
      <div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Name: {gig.name}</h5>
        <p className="card-text">Info: {gig.description}</p>
        <div className="card">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Concert Date: {gig.concertDate}</li>
    <li className="list-group-item">Concert Time: {gig.concertTime}</li>
    <li className="list-group-item">Concert Location: {gig.concertLocation}</li>
    <li className="list-group-item">Concert Date: {gig.concertDress}</li>
    <li className="list-group-item">Concert Time: {gig.basePayTotal}</li>
    <li className="list-group-item">Rehearsal Date: {gig.rehearsalDate}</li>
    <li className="list-group-item">Rehearsal Time: {gig.rehearsalTime}</li>
    <li className="list-group-item">Rehearsal Location: {gig.rehearsalLocation}</li>
    <li className="list-group-item">Contractor Email: {gig.contractorEmail}</li>
    <li className="list-group-item">Contractor Phone: {gig.contractorPhone}</li>
    <li className="list-group-item">Reportoire: {gig.reportoire}</li>
    <li className="list-group-item">Outdoors: {gig.isOutside}</li>
  </ul>
</div>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default GigCard;
