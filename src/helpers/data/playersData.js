import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json`)
    .then((result) => {
      const playerObject = result.data;
      const players = [];
      if (playerObject != null) {
        Object.keys(playerObject).forEach((fbId) => {
          playerObject[fbId].id = fbId;
          players.push(playerObject[fbId]);
        });
      }
      resolve(players);
    })
    .catch((error) => reject(error));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/players/${playerId}.json`);
const addPlayer = (newPlayer) => axios.post(`${baseUrl}/players.json`, newPlayer);
const updatePlayer = (playerId, newPlayerInfo) => axios.put(`${baseUrl}/players/${playerId}.json`, newPlayerInfo);

export default {
  getPlayers,
  addPlayer,
  updatePlayer,
  deletePlayer,
};
