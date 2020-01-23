import React from 'react';
import GigInstrument from '../../shared/GigInstrument/GigInstrument';
import gigInstrumentData from '../../../helpers/data/gigInstrumentData';

import './SingleGig.scss';

class SingleGig extends React.Component {
  state = {
    gigInstruments: [],
  }

  getGigInstruments = () => {
    gigInstrumentData.getAllGigInstruments()
      .then((gigInstruments) => this.setState({ gigInstruments }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getGigInstruments();
  }

  render() {
    return (
      <div className="single-gig">
        <h1>SingleGig Page</h1>
        { this.state.gigInstruments.map((gigInstrument) => <GigInstrument key={gigInstrument.id} gigInstrument={gigInstrument} />) }
      </div>
    );
  }
}

export default SingleGig;
