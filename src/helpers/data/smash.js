import instrumentData from './instrumentData';
import playerData from './playerData';
import gigInstrumentData from './gigInstrumentData';

const getCompleteInstrumentsThatBelongToGig = (gigId) => new Promise((resolve, reject) => {
  instrumentData.getAllInstruments()
    .then((instruments) => {
      gigInstrumentData.getAllGigInstrumentsByGigId(gigId)
        .then((gigInstruments) => {
          const instrumentsToKeep = [];
          gigInstruments.forEach((gigInstrument) => {
            const currentInstrument = instruments.find((x) => x.id === gigInstrument.instrumentId);
            currentInstrument.number = gigInstrument.number;
            instrumentsToKeep.push(currentInstrument);
          });
          resolve(instrumentsToKeep);
        });
    })
    .catch((error) => reject(error));
});

const getInstrumentPlayersForRoster = (gigId) => new Promise((resolve, reject) => {
  getCompleteInstrumentsThatBelongToGig(gigId)
    .then((instruments) => {
      playerData.getAllPlayers()
        .then((players) => {
          const newArray = [];
          instruments.forEach((inst) => {
            const newInst = { ...inst };
            const instrumentalist = players.filter((x) => x.instrumentId === inst.id);
            newInst.players = instrumentalist;
            newArray.push(newInst);
          });
          resolve(newArray);
        });
    })
    .catch((error) => reject(error));
});

// const getHiredPlayer = (gigId) => new Promise((resolve, reject) => {
//   playerData.getAllPlayers()
//     .then((players) => {
//       gigPlayers.getAllGigPlayersByGigId(gigId)
//         .then((gigPlayers) => {
//           // const instrumentsToKeep = [];
//           // gigInstruments.forEach((gigInstrument) => {
//           //   const currentInstrument = instruments.find((x) => x.id === gigInstrument.instrumentId);
//           //   currentInstrument.number = gigInstrument.number;
//           //   instrumentsToKeep.push(currentInstrument);
//           // console.log(gigPlayers);
//           resolve(instrumentsToKeep);
//           });
//         });
//     })
//     .catch((error) => reject(error));
// });


const getInstrumentPlayersForGigId = (gigId) => new Promise((resolve, reject) => {
  getCompleteInstrumentsThatBelongToGig(gigId)
    .then((instruments) => {
      playerData.getAllPlayers()
        .then((players) => {
          const newArray = [];
          instruments.forEach((inst) => {
            const newInst = { ...inst };
            const instrumentalist = players.filter((x) => x.instrumentId === inst.id);
            newInst.players = instrumentalist;
            newArray.push(newInst);
          });
          resolve(newArray);
        });
    })
    .catch((error) => reject(error));
});

export default { getInstrumentPlayersForRoster, getInstrumentPlayersForGigId };
