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
  }

  render() {
    const { instrumentsCheckbox, handleCheckboxes } = this.props;
    return (
      // <div className="instrument d-flex">
      //   <div className="form-row form-check">
      //     <input type="checkbox" className="form-check-input" id={instrument.id}/>
      //     <label className="form-check-label" htmlFor={instrument.id}>{instrument.name}</label>
      //   <div class="form-group col-md-1">
      //     <label for="inputZip">How Many?</label>
      //     <input type="text" class="form-control" id="inputZip"/>
      //   </div>
      //   </div>
      // </div>
      <div className="instrumentRow">
      <form>
  <div className="form-row align-items-center">
  <div className="col-auto">
      <label className="sr-only" htmlFor="inlineFormInput">Name</label>
      <input type="text" className="form-control" id="inlineFormInput" placeholder="Qty"/>
    </div>
  <div className="col-auto">
      <div className="form-check mb-2">
        <input className="form-check-input" onChange={handleCheckboxes} type="checkbox" value={instrumentsCheckbox.id} id={instrumentsCheckbox.id}/>
        <label className="form-check-label" htmlFor="autoSizingCheck">
          {instrumentsCheckbox.name}
        </label>
      </div>
    </div>
  </div>
</form>
</div>
    );
  }
}

export default InstrumentRow;
