import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllGigInstruments = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gigInstruments.json`)
    .then((result) => {
      const gigInstrumentObject = result.data;
      const gigInstruments = [];
      if (gigInstrumentObject != null) {
        Object.keys(gigInstrumentObject).forEach((fbId) => {
          gigInstrumentObject[fbId].id = fbId;
          gigInstruments.push(gigInstrumentObject[fbId]);
        });
      }
      resolve(gigInstruments);
      console.log('from gig ints data file on wednesday', gigInstruments);
    })
    .catch((error) => reject(error));
});

const getAllGigInstrumentsByGigId = (gigId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gigInstruments.json?orderBy="gigId"&equalTo="${gigId}"`)
    .then((result) => {
      const gigInstrumentObject = result.data;
      const gigInstruments = [];
      if (gigInstrumentObject != null) {
        Object.keys(gigInstrumentObject).forEach((fbId) => {
          gigInstrumentObject[fbId].id = fbId;
          gigInstruments.push(gigInstrumentObject[fbId]);
        });
      }
      resolve(gigInstruments);
    })
    .catch((error) => reject(error));
});

const deleteGigInstrument = (gigInstrumentId) => axios.delete(`${baseUrl}/gigInstruments/${gigInstrumentId}.json`);
const addGigInstrument = (newGigInstrument) => axios.post(`${baseUrl}/gigInstruments.json`, newGigInstrument);
const updateGigInstrument = (gigInstrumentId, newGigInstrumentInfo) => axios.put(`${baseUrl}/gigInstruments/${gigInstrumentId}.json`, newGigInstrumentInfo);

export default {
  getAllGigInstruments,
  getAllGigInstrumentsByGigId,
  addGigInstrument,
  updateGigInstrument,
  deleteGigInstrument,
};
