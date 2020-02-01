import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllGigPlayersByGigId = (gigId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gigPlayers.json?orderBy="gigId"&equalTo="${gigId}"`)
    .then((result) => {
      const gigPlayers = result.data;
      const final = [];
      if (gigPlayers != null) {
        Object.keys(gigPlayers).forEach((fbId) => {
          gigPlayers[fbId].id = fbId;
          final.push(gigPlayers[fbId]);
        });
      }
      resolve(final);
    })
    .catch((error) => reject(error));
});

const addGigPlayer = (newPlayer) => axios.post(`${baseUrl}/gigPlayers.json`, newPlayer);

const deleteGigPlayer = (gigPlayerId) => axios.delete(`${baseUrl}/gigPlayers/${gigPlayerId}.json`);

export default { getAllGigPlayersByGigId, addGigPlayer, deleteGigPlayer };
