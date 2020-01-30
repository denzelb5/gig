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
    numberChange: PropTypes.func,
  }

  render() {
    const {
      instrumentsCheckbox,
      handleCheckboxes,
      handleNumChange,
    } = this.props;

    // const numbers = [1, 2, 3, 4, 5, 6];

    return (
      <form>
        <div className="col-auto">
          <div className="form-check mb-2">
            <input className="form-check-input" onChange={handleCheckboxes} type="checkbox" value={instrumentsCheckbox.id} id={instrumentsCheckbox.id}/>
            <label className="form-check-label" htmlFor="autoSizingCheck">
              {instrumentsCheckbox.name}
            </label>
          </div>
          <div className=" col-md-4">
        <div className="form-group">
          <input
          type="number"
          id={`input-${instrumentsCheckbox.id}`}
          className="form-control quantity-input"
          placeholder="Enter Quantity"
          value={instrumentsCheckbox.numPlayers.toString()}
          onChange={handleNumChange}
          />
        </div>
        </div>
        </div>
      </form>

    );
  }
}

export default InstrumentRow;
