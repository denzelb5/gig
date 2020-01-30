import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gigData from '../../../helpers/data/gigData';
import authData from '../../../helpers/data/authData';
import instrumentData from '../../../helpers/data/instrumentData';
import gigInstrumentData from '../../../helpers/data/gigInstrumentData';
import InstrumentRow from '../../shared/InstrumentRow/InstrumentRow';
import gigInstrumentShape from '../../../helpers/propz/gigInstrumentShape';

import './GigForm.scss';


class GigForm extends React.Component {
  static propTypes = {
    allGigInstruments: PropTypes.arrayOf(gigInstrumentShape.gigInstrumentShape),
  }

  state = {
    allGigInstruments: [],
    instrumentsCheckboxes: [],
    gigName: '',
    gigDescription: '',
    gigConcertDate: '',
    gigConcertTime: '',
    gigConcertLocation: '',
    gigConcertDress: '',
    gigBasePayTotal: '',
    gigRehearsalDate: '',
    gigRehearsalTime: '',
    gigRehearsalLocation: '',
    gigContractorEmail: '',
    gigContractorPhone: '',
    gigReportoire: '',
    gigIsOutside: '',
    gigNumber: '',
  }


  handleCheckboxes = (event) => {
    const { instrumentsCheckboxes } = this.state;
    instrumentsCheckboxes.forEach((instrumentsCheckbox) => {
      if (instrumentsCheckbox.id === event.target.value) {
        // eslint-disable-next-line no-param-reassign
        instrumentsCheckbox.isChecked = event.target.checked;
        console.log('checked', instrumentsCheckbox.isChecked);
      }
    });
    this.setState({ instruments: this.instrument });
  }

  handleNumChange = (event) => {
    event.preventDefault();
    const newValue = parseInt(event.target.value, 10) || 0;
    const instrumentId = event.target.id.split('-')[1];
    const newCheckboxes = [...this.state.instrumentsCheckboxes];
    const correctCheckbox = newCheckboxes.findIndex((obj) => obj.id === instrumentId);
    newCheckboxes[correctCheckbox].numPlayers = newValue;
    this.setState({ instrumentsCheckboxes: newCheckboxes });
  }

  getInstrumentCheckboxData = () => {
    instrumentData.getAllInstruments()
      .then((result) => {
        const instrumentsArr = result;
        const newInstruments = [];
        Object.keys(instrumentsArr).forEach((fbId) => {
          instrumentsArr[fbId].isChecked = false;
          instrumentsArr[fbId].numPlayers = 0;
          newInstruments.push(instrumentsArr[fbId]);
        });
        console.log('zoe', newInstruments);
        this.setState({ instrumentsCheckboxes: newInstruments });
      })
      .catch((error) => console.error(error));
  }

  getGigData = () => {
    const { gigId } = this.props.match.params;
    console.error('gigId fo sho', gigId);
    if (gigId) {
      gigData.getSingleGig(gigId)
        .then((response) => {
          this.setState({
            gigName: response.data.name,
            gigDescription: response.data.description,
            gigConcertDate: response.data.concertDate,
            gigConcertTime: response.data.concertTime,
            gigConcertLocation: response.data.concertLocation,
            gigConcertDress: response.data.concertDress,
            gigBasePayTotal: response.data.basePayTotal,
            gigRehearsalDate: response.data.rehearsalDate,
            gigRehearsalTime: response.data.rehearsalTime,
            gigRehearsalLocation: response.data.rehearsalLocation,
            gigContractorEmail: response.data.contractorEmail,
            gigContractorPhone: response.data.contractorPhone,
            gigReportoire: response.data.reportoire,
            gigIsOutside: response.data.isOutside,
          });
        })
        .catch((error) => console.error(error));
    }
  }

  getGigInstrumentData = () => {
    gigInstrumentData.getAllGigInstruments()
      .then((response) => this.setState({ allGigInstruments: response }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getGigData();
    // this.getInstruments();
    this.getInstrumentCheckboxData();
    this.getGigInstrumentData();
    // this.getGigInstruments();
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ gigName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ gigDescription: e.target.value });
  }

  concertDateChange = (e) => {
    e.preventDefault();
    this.setState({ gigConcertDate: e.target.value });
  }

  concertTimeChange = (e) => {
    e.preventDefault();
    this.setState({ gigConcertTime: e.target.value });
  }

  concertLocationChange = (e) => {
    e.preventDefault();
    this.setState({ gigConcertLocation: e.target.value });
  }

  concertDressChange = (e) => {
    e.preventDefault();
    this.setState({ gigConcertDress: e.target.value });
  }

  basePayTotalChange = (e) => {
    e.preventDefault();
    this.setState({ gigBasePayTotal: e.target.value });
  }

  rehearsalDateChange = (e) => {
    e.preventDefault();
    this.setState({ gigRehearsalDate: e.target.value });
  }

  rehearsalTimeChange = (e) => {
    e.preventDefault();
    this.setState({ gigRehearsalTime: e.target.value });
  }

  rehearsalLocationChange = (e) => {
    e.preventDefault();
    this.setState({ gigRehearsalLocation: e.target.value });
  }

  contractorEmailChange = (e) => {
    e.preventDefault();
    this.setState({ gigContractorEmail: e.target.value });
  }

  contractorPhoneChange = (e) => {
    e.preventDefault();
    this.setState({ gigContractorPhone: e.target.value });
  }

  reportoireChange = (e) => {
    e.preventDefault();
    this.setState({ gigReportoire: e.target.value });
  }

  isOutsideChange = (e) => {
    e.preventDefault();
    this.setState({ gigIsOutside: e.target.value });
  }

  saveGigEvent = (e) => {
    e.preventDefault();
    const newGig = {
      name: this.state.gigName,
      description: this.state.gigDescription,
      concertDate: this.state.gigConcertDate,
      concertTime: this.state.gigConcertTime,
      concertLocation: this.state.gigConcertLocation,
      concertDress: this.state.gigConcertDress,
      basePayTotal: this.state.gigBasePayTotal,
      rehearsalDate: this.state.gigRehearsalDate,
      rehearsalTime: this.state.gigRehearsalTime,
      rehearsalLocation: this.state.gigRehearsalLocation,
      contractorEmail: this.state.gigContractorEmail,
      contractorPhone: this.state.gigContractorPhone,
      reportoire: this.state.gigReportoire,
      isOutside: this.state.gigIsOutside,
      uid: authData.getUid(),
    };
    gigData.addGig(newGig)
      .then((result) => {
        this.saveGigInstruments(result.data.name);
        this.props.history.push(`/gig/${result.data.name}`);
      })
      .catch((error) => console.error(error));
  }

  saveGigInstruments = (gigId) => {
    const { instrumentsCheckboxes } = this.state;
    const myInstruments = instrumentsCheckboxes.filter((x) => x.isChecked);
    if (myInstruments.length) {
      myInstruments.forEach((instrument) => {
        console.log(myInstruments);
        console.log('instrument from gigform', myInstruments);
        const newGigInstrument = {
          instrumentId: instrument.id,
          gigId,
          number: 1, // instrument.number
        };
        gigInstrumentData.addGigInstrument(newGigInstrument)
          .then()
          .catch((error) => console.error(error));
      });
    }
  }

  editGigEvent = (e) => {
    e.preventDefault();
    const { gigId } = this.props.match.params;
    const editGig = {
      name: this.state.gigName,
      description: this.state.gigDescription,
      concertDate: this.state.gigConcertDate,
      concertTime: this.state.gigConcertTime,
      concertLocation: this.state.gigConcertLocation,
      concertDress: this.state.gigConcertDress,
      basePayTotal: this.state.gigBasePayTotal,
      rehearsalDate: this.state.gigRehearsalDate,
      rehearsalTime: this.state.gigRehearsalTime,
      rehearsalLocation: this.state.gigRehearsalLocation,
      contractorEmail: this.state.gigContractorEmail,
      contractorPhone: this.state.gigContractorPhone,
      reportoire: this.state.gigReportoire,
      isOutside: this.state.gigIsOutside,
      uid: authData.getUid(),
      number: this.state.gigNumber,
    };
    console.log('editGig', editGig);
    gigData.updateGig(gigId, editGig)
      .then(() => this.props.history.push(`/gig/${gigId}`))
      .catch((error) => console.error(error));
  }

  render() {
    const {
      gigName,
      gigDescription,
      gigConcertDate,
      gigConcertTime,
      gigConcertLocation,
      gigConcertDress,
      gigBasePayTotal,
      gigRehearsalDate,
      gigRehearsalTime,
      gigRehearsalLocation,
      gigContractorEmail,
      gigContractorPhone,
      gigReportoire,
      gigIsOutside,
      instrumentsCheckboxes,
    } = this.state;


    const { gigId } = this.props.match.params;
    const { gigInstrument } = this.props;

    return (
      <div className="gigForm">
      <h1>GigForm add</h1>
      <form className="Auth">
        <div className=" col-md-4">
        <div className="form-group">
          <input
          type="text"
          className="form-control"
          id="gig-name"
          placeholder="Enter Gig Name"
          value={gigName}
          onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-description">Description</label>
          <input
          type="text"
          className="form-control"
          id="gig-description"
          placeholder="Enter Gig Description"
          value={gigDescription}
          onChange={this.descriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-concertDate">Concert Date</label>
          <input
          type="text"
          className="form-control"
          id="gig-concertDate"
          placeholder="Enter Gig concertDate"
          value={gigConcertDate}
          onChange={this.concertDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-concertTime">Concert Time</label>
          <input
          type="text"
          className="form-control"
          id="gig-concertTime"
          placeholder="Enter Gig Concert Time"
          value={gigConcertTime}
          onChange={this.concertTimeChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-concertLocation">Concert Location</label>
          <input
          type="text"
          className="form-control"
          id="gig-concertLocation"
          placeholder="Enter Gig Concert Location"
          value={gigConcertLocation}
          onChange={this.concertLocationChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-concertDress">Concert Dress</label>
          <input
          type="text"
          className="form-control"
          id="gig-concertDress"
          placeholder="Enter Gig Concert Dress"
          value={gigConcertDress}
          onChange={this.concertDressChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-basePayTotal">Base Pay Total</label>
          <input
          type="text"
          className="form-control"
          id="gig-basePayTotal"
          placeholder="Enter Gig Base Pay Total"
          value={gigBasePayTotal}
          onChange={this.basePayTotalChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-rehearsalDate">Rehearsal Date</label>
          <input
          type="text"
          className="form-control"
          id="gig-rehearsalDate"
          placeholder="Enter Gig Rehearsal Date"
          value={gigRehearsalDate}
          onChange={this.rehearsalDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-rehearsalTime">Rehearsal Time</label>
          <input
          type="text"
          className="form-control"
          id="gig-rehearsalTime"
          placeholder="Enter Gig Rehearsal Time"
          value={gigRehearsalTime}
          onChange={this.rehearsalTimeChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-rehearsalLocation">Rehearsal Location</label>
          <input
          type="text"
          className="form-control"
          id="gig-rehearsalLocation"
          placeholder="Enter Gig Rehearsal Location"
          value={gigRehearsalLocation}
          onChange={this.rehearsalLocationChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-contractorEmail">Contractor Email</label>
          <input
          type="text"
          className="form-control"
          id="gig-contractorEmail"
          placeholder="Enter Gig Contractor Email"
          value={gigContractorEmail}
          onChange={this.contractorEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-contractorPhone">Contractor Phone</label>
          <input
          type="text"
          className="form-control"
          id="gig-contractorPhone"
          placeholder="Enter Gig Contractor Phone"
          value={gigContractorPhone}
          onChange={this.contractorPhoneChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-reportoire">Reportoire</label>
          <input
          type="text"
          className="form-control"
          id="gig-reportoire"
          placeholder="Enter Gig Reportoire"
          value={gigReportoire}
          onChange={this.reportoireChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gig-isOutside">Outdoors?</label>
          <input
          type="text"
          className="form-control"
          id="gig-isOutside"
          placeholder="Gig Outdoors Yes/No?"
          value={gigIsOutside}
          onChange={this.isOutsideChange}
          />
        </div>
        </div>
      </form>
      {instrumentsCheckboxes.map((instrumentsCheckbox) => <InstrumentRow key={instrumentsCheckbox.id} instrumentsCheckboxName={instrumentsCheckbox.name} instrumentsCheckbox={instrumentsCheckbox} handleCheckboxes={this.handleCheckboxes} handleNumChange={this.handleNumChange} />)}
      <div>
      </div>
      { !gigId
        ? <button className="btn btn-warning" onClick={this.saveGigEvent}>Save Gig</button>
        : <button className="btn btn-primary" onClick={this.editGigEvent}>Edit Gig</button>
        }
      </div>
    );
  }
}

export default GigForm;
