import React from 'react';
import PropTypes from 'prop-types';
import instrumentRowShape from '../../../helpers/propz/instrumentRowShape';
import './InstrumentRow.scss';
import instrumentsCheckboxShape from '../../../helpers/propz/instrumentsCheckboxShape';

class InstrumentRow extends React.Component {
  static propTypes = {
    instrument: instrumentRowShape.instrumentRowShape,
    instrumentsCheckbox: instrumentsCheckboxShape.instrumentsCheckboxShape,
    handleCheckboxes: PropTypes.func,
    // numberChange: PropTypes.func,
  }

  render() {
    const { instrumentsCheckbox, handleCheckboxes } = this.props;
    // const { gigNumber } = this.state;
    return (
      <form>
        <div className="col-auto">
          <div className="form-check mb-2">
            <input className="form-check-input" onChange={handleCheckboxes} type="checkbox" value={instrumentsCheckbox.id} id={instrumentsCheckbox.id}/>
            <label className="form-check-label" htmlFor="autoSizingCheck">
              {instrumentsCheckbox.name}
            </label>
          </div>
          {/* <select onChange={numberChange} value={gigNumber} className="custom-select custom-select-sm col-1">
          <option selected>Qty</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> */}
        </div>
      </form>

    );
  }
}

export default InstrumentRow;
