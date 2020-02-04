import React from 'react';
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
        this.setState({ instrumentsCheckboxes: newInstruments });
      })
      .catch((error) => console.error(error));
  }

  getGigData = () => {
    const { gigId } = this.props.match.params;
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
    this.getInstrumentCheckboxData();
    this.getGigInstrumentData();
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
        const newGigInstrument = {
          instrumentId: instrument.id,
          gigId,
          number: instrument.numPlayers,
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

    return (
      <div className="gigForm">
        <h3 className="gigForm-header">Enter Your Gig Information Here:</h3>
        <form className="gig-form">
          <div className="d-flex flex-wrap">
          <div className="col-md-3">
            <div className="form-group gig-box">
              <input
              type="text"
              className="form-control"
              id="gig-name"
              placeholder="Name"
              value={gigName}
              onChange={this.nameChange}
              />
            </div>
            <div className="form-group gig-box">
              <input
              type="text"
              className="form-control"
              id="gig-description"
              placeholder="Description"
              value={gigDescription}
              onChange={this.descriptionChange}
              />
            </div>
            <div className="form-group gig-box">
              <input
              type="text"
              className="form-control"
              id="gig-concertDate"
              placeholder="Concert Date"
              value={gigConcertDate}
              onChange={this.concertDateChange}
              />
            </div>
            <div className="form-group gig-box">
              <input
              type="text"
              className="form-control"
              id="gig-concertTime"
              placeholder="Concert Time"
              value={gigConcertTime}
              onChange={this.concertTimeChange}
              />
            </div>
              <div className="form-group gig-box">
                <input
                type="text"
                className="form-control"
                id="gig-concertLocation"
                placeholder="Concert Location"
                value={gigConcertLocation}
                onChange={this.concertLocationChange}
                />
              </div>
              </div>
            <div className="col-md-3">
              <div className="form-group gig-box">
                <input
                type="text"
                className="form-control"
                id="gig-concertDress"
                placeholder="Concert Dress"
                value={gigConcertDress}
                onChange={this.concertDressChange}
                />
              </div>
              <div className="form-group gig-box">
                <input
                type="text"
                className="form-control"
                id="gig-basePayTotal"
                placeholder="Base Pay Total"
                value={gigBasePayTotal}
                onChange={this.basePayTotalChange}
                />
              </div>
              <div className="form-group gig-box">
                <input
                type="text"
                className="form-control"
                id="gig-rehearsalDate"
                placeholder="Rehearsal Date"
                value={gigRehearsalDate}
                onChange={this.rehearsalDateChange}
                />
              </div>
              <div className="form-group gig-box">
                <input
                type="text"
                className="form-control"
                id="gig-rehearsalTime"
                placeholder="Rehearsal Time"
                value={gigRehearsalTime}
                onChange={this.rehearsalTimeChange}
                />
              </div>
              <div className="form-group gig-box">
                <input
                type="text"
                className="form-control"
                id="gig-rehearsalLocation"
                placeholder="Rehearsal Location"
                value={gigRehearsalLocation}
                onChange={this.rehearsalLocationChange}
                />
              </div>
              </div>
            <div className="col-md-3">
              <div className="form-group gig-box">
                <input
                type="text"
                className="form-control"
                id="gig-contractorEmail"
                placeholder="Contractor Email"
                value={gigContractorEmail}
                onChange={this.contractorEmailChange}
                />
              </div>
              <div className="form-group gig-box">
                <input
                type="text"
                className="form-control"
                id="gig-contractorPhone"
                placeholder="Contractor Phone"
                value={gigContractorPhone}
                onChange={this.contractorPhoneChange}
                />
              </div>
              <div className="form-group gig-box">
                <input
                type="text"
                className="form-control"
                id="gig-reportoire"
                placeholder="Reportoire"
                value={gigReportoire}
                onChange={this.reportoireChange}
                />
              </div>
              <div className="form-group gig-box">
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
          </div>
          </form>
      <div className="checkboxes-div">
      {instrumentsCheckboxes.map((instrumentsCheckbox) => <InstrumentRow key={instrumentsCheckbox.id} instrumentsCheckboxName={instrumentsCheckbox.name} instrumentsCheckbox={instrumentsCheckbox} handleCheckboxes={this.handleCheckboxes} handleNumChange={this.handleNumChange} />)}
      </div>
      { !gigId
        ? <button className="btn btn-warning gig-form-button" onClick={this.saveGigEvent}>Save Gig</button>
        : <button className="btn btn-primary gig-form-button" onClick={this.editGigEvent}>Edit Gig</button>
        }
      </div>
    );
  }
}

export default GigForm;
