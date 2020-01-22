import React from 'react';
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
        <div class="card">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Concert Date: {gig.concertDate}</li>
    <li class="list-group-item">Concert Time: {gig.concertTime}</li>
    <li class="list-group-item">Concert Location: {gig.concertLocation}</li>
    <li class="list-group-item">Concert Date: {gig.concertDress}</li>
    <li class="list-group-item">Concert Time: {gig.basePayTotal}</li>
    <li class="list-group-item">Concert Location: {gig.rehearsalDate}</li>
    <li class="list-group-item">Concert Location: {gig.rehearsalTime}</li>
    <li class="list-group-item">Concert Location: {gig.rehearsalLocation}</li>
    <li class="list-group-item">Concert Location: {gig.contractorEmail}</li>
    <li class="list-group-item">Concert Location: {gig.contractorPhone}</li>
    <li class="list-group-item">Concert Location: {gig.reportoire}</li>
    <li class="list-group-item">Concert Location: {gig.isOutside}</li>
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
