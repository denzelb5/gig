import React from 'react';

import './SingleGigCard.scss';

class SingleGigCard extends React.Component {
  render() {
    const { gig } = this.props;
    return (
<div className="container gig-sheet">
  <div className="jumbotron">
    <h1 className="display-4">{gig.name}</h1>
    <p className="lead">{gig.description}</p>
    <hr className="my-4"/>
    <div className="d-flex flex-wrap">
      <div className="col-5 gig-details">
        <p>Concert Date: {gig.concertDate}</p>
        <p>Concert Time: {gig.concertTime}</p>
        <p>Concert Location: {gig.concertLocation}</p>
        <p>Concert Dress: {gig.concertDress}</p>
        <p>Outdoors: {gig.isOutside}</p>
        <p>Contractor Email: {gig.contractorEmail}</p>
      </div>
      <div className="col-5 gig-details">
        <p>Rehearsal Date: {gig.rehearsalDate}</p>
        <p>Rehearsal Time: {gig.rehearsalTime}</p>
        <p>Rehearsal Location: {gig.rehearsalLocation}</p>
        <p>Reportoire: {gig.reportoire}</p>
        <p>Contractor Phone: {gig.contractorPhone}</p>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default SingleGigCard;
