import React from 'react';
import instrumentRowShape from '../../../helpers/propz/instrumentRowShape';
import './InstrumentRow.scss';

class InstrumentRow extends React.Component {
  static propTypes = {
    instruments: instrumentRowShape.instrumentRowShape,
  }

  render() {
    const { instruments } = this.props;
    return (
      <div className="instrument">
      <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id={instruments.id}/>
    <label className="form-check-label" for={instruments.id}>{instruments.name}</label>
      </div>
      </div>
    );
  }
}

export default InstrumentRow;
