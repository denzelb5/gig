import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllInstruments = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/instruments.json`)
    .then((result) => {
      const instrumentObject = result.data;
      const instruments = [];
      if (instrumentObject != null) {
        Object.keys(instrumentObject).forEach((fbId) => {
          instrumentObject[fbId].id = fbId;
          instruments.push(instrumentObject[fbId]);
        });
      }
      resolve(instruments);
    })
    .catch((error) => reject(error));
});

const getSingleGigInstruments = (instrumentId) => axios.get(`${baseUrl}/instruments/${instrumentId}.json`);
const deleteInstruments = (instrumentId) => axios.delete(`${baseUrl}/players/${instrumentId}.json`);
const addInstruments = (newInstrument) => axios.post(`${baseUrl}/players.json`, newInstrument);
const updateInstruments = (instrumentId, newInstrumentInfo) => axios.put(`${baseUrl}/instruments/${instrumentId}.json`, newInstrumentInfo);

export default {
  getAllInstruments,
  addInstruments,
  updateInstruments,
  deleteInstruments,
  getSingleGigInstruments,
};
