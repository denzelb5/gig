import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getGigsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gigs.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const gigObject = result.data;
      const gigs = [];
      if (gigObject != null) {
        Object.keys(gigObject).forEach((fbId) => {
          gigObject[fbId].id = fbId;
          gigs.push(gigObject[fbId]);
        });
      }
      resolve(gigs);
    })
    .catch((error) => reject(error));
});

const getSingleGig = (gigId) => axios.get(`${baseUrl}/gigs/${gigId}.json`);
const deleteGig = (gigId) => axios.delete(`${baseUrl}/gigs/${gigId}.json`);
const addGig = (newGig) => axios.post(`${baseUrl}/gigs.json`, newGig);
const updateGig = (gigId, newGigInfo) => axios.put(`${baseUrl}/gigs/${gigId}.json`, newGigInfo);

export default {
  getGigsByUid,
  getSingleGig,
  addGig,
  updateGig,
  deleteGig,
};
