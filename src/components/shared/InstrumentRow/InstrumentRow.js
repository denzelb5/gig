import React from 'react';
import instrumentRowShape from '../../../helpers/propz/instrumentRowShape';
import './InstrumentRow.scss';

class InstrumentRow extends React.Component {
  static propTypes = {
    instrument: instrumentRowShape.instrumentRowShape,
  }

  render() {
    const { instrument } = this.props;
    return (
      <div className="instrument">
      <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id={instrument.id}/>
    <label className="form-check-label" htmlFor={instrument.id}>{instrument.name}</label>
      </div>
      </div>
    );
  }
}

export default InstrumentRow;
