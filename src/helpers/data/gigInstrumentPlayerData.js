import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllGigInstrumentPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gigInstrumentPlayer.json`)
    .then((result) => {
      const gigInstrumentPlayerObject = result.data;
      const gigInstrumentPlayers = [];
      if (gigInstrumentPlayerObject != null) {
        Object.keys(gigInstrumentPlayerObject).forEach((fbId) => {
          gigInstrumentPlayerObject[fbId].id = fbId;
          gigInstrumentPlayers.push(gigInstrumentPlayerObject[fbId]);
        });
      }
      resolve(gigInstrumentPlayers);
    })
    .catch((error) => reject(error));
});

const deleteGigInstrumentPlayer = (gigInstrumentPlayerId) => axios.delete(`${baseUrl}/gigInstrumentPlayer/${gigInstrumentPlayerId}.json`);
const addGigInstrumentPlayer = (newGigInstrumentPlayer) => axios.post(`${baseUrl}/gigInstrumentPlayer.json`, newGigInstrumentPlayer);
const updateGigInstrumentPlayer = (gigInstrumentPlayerId, newGigInstrumentPlayerInfo) => axios.put(`${baseUrl}/gigInstrumentPlayer/${gigInstrumentPlayerId}.json`, newGigInstrumentPlayerInfo);

export default {
  getAllGigInstrumentPlayers,
  addGigInstrumentPlayer,
  updateGigInstrumentPlayer,
  deleteGigInstrumentPlayer,
};
