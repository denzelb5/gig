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


    return (
      <form>
        <div className="row">
          <div className="col-2 instrument-checkbox-div">
          <div className="form-check  mb-2">
            <input className="form-check-input instrument-checkboxes" onChange={handleCheckboxes} type="checkbox" value={instrumentsCheckbox.id} id={instrumentsCheckbox.id}/>
            <label className="form-check-label ins-names" htmlFor="autoSizingCheck">
              {instrumentsCheckbox.name}
            </label>
          </div>
          </div>
          <div className="col-1">
            <div className="number-input">
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
