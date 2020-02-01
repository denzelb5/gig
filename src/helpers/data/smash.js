import instrumentData from './instrumentData';
import playerData from './playerData';
import gigInstrumentData from './gigInstrumentData';
import gigPlayersData from './gigPlayerData';

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
  getCompleteInstrumentsThatBelongToGig(gigId).then((instruments) => {
    playerData.getAllPlayers().then((players) => {
      gigPlayersData.getAllGigPlayersByGigId(gigId).then((gigPlayers) => {
        const newArray = [];
        instruments.forEach((inst) => {
          const newInst = { ...inst };
          const instrumentalist = players.filter((x) => x.instrumentId === inst.id);
          newInst.players = instrumentalist;
          newInst.players.forEach((player) => {
            const gigPlayerRecord = gigPlayers.find((w) => w.playerId === player.id);
            if (gigPlayerRecord) {
              // eslint-disable-next-line no-param-reassign
              player.gigPlayerId = gigPlayerRecord.id;
            } else {
              // eslint-disable-next-line no-param-reassign
              player.gigPlayerId = 'none';
            }
          });
          newArray.push(newInst);
        });
        resolve(newArray);
      });
    });
  }).catch((error) => reject(error));
});

const getCompleteGigInstrumentsWithPlayers = (gigId) => new Promise((resolve, reject) => {
  const finalInstruments = [];
  gigInstrumentData.getAllGigInstrumentsByGigId(gigId).then((gigInstruments) => {
    instrumentData.getAllInstruments().then((instruments) => {
      playerData.getAllPlayers().then((players) => {
        gigPlayersData.getAllGigPlayersByGigId(gigId).then((gigPlayers) => {
          const selectedPlayers = [];
          gigPlayers.forEach((gigPlayer) => {
            const currentPlayer = players.find((x) => x.id === gigPlayer.playerId);
            const newPlayer = { ...currentPlayer };
            newPlayer.gigPlayerId = gigPlayer.id;
            selectedPlayers.push(newPlayer);
          });
          // eslint-disable-next-line no-param-reassign
          gigInstruments.forEach((gigInstrument) => {
            const selectedInstrument = instruments.find((m) => m.id === gigInstrument.instrumentId);
            const newInstrument = { ...selectedInstrument };
            newInstrument.gigInstrumentId = gigInstrument.id;
            newInstrument.number = gigInstrument.number;
            newInstrument.players = selectedPlayers.filter((y) => y.instrumentId === gigInstrument.instrumentId);
            finalInstruments.push(newInstrument);
          });
          resolve(finalInstruments);
        });
      });
    });
  }).catch((error) => reject(error));
});


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

export default { getInstrumentPlayersForRoster, getInstrumentPlayersForGigId, getCompleteGigInstrumentsWithPlayers };
