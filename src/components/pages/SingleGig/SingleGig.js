import React from 'react';
import GigInstrument from '../../shared/GigInstrument/GigInstrument';
import gigInstrumentData from '../../../helpers/data/gigInstrumentData';

import './SingleGig.scss';

class SingleGig extends React.Component {
  state = {
    gigInstruments: [],
  }

  getGigInstruments = (gigId) => {
    gigInstrumentData.getAllGigInstrumentsByGigId(gigId)
      .then((gigInstruments) => this.setState(gigInstruments))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    const { gigId } = this.props.match.params;
    this.getGigInstruments();
  }

  render() {
    const { gigId } = this.props.match.params;
    return (
      <div className="single-gig">
        {this.state.gigInstruments.map((gigInstrument) => <GigInstrument key={gigInstrument.id} gigInstrument={gigInstrument} gigId={gigId} />)}
      </div>
    );
  }
}

export default SingleGig;
