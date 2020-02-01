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
      console.error('final', final);
    })
    .catch((error) => reject(error));
});

const addGigPlayer = (newPlayer) => axios.post(`${baseUrl}/gigPlayers.json`, newPlayer);

export default { getAllGigPlayersByGigId, addGigPlayer };
