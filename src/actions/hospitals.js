const geocode = require('../utils/geocode.js')
const nearbyHospitals = require('../utils/nearbyHospitals.js')

var lattitude = 28.644800;
var longitude = 77.216721;

// navigator.geolocation.getCurrentPosition((position) => {
//   lattitude = position.coords.latitude;
//   longitude = position.coords.longitude;
// })

// SET_EXPENSES
export const setHospitals = (hospitals) => ({
  type: 'SET_HOSPITALS',
  hospitals
});

export const startSetHospitals = (lat = lattitude, long = longitude) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          nearbyHospitals(lat,long, (error, hospitals) => {
            if(error){
                return console.log(error)
            }
            dispatch(setHospitals(hospitals));
            console.log(hospitals)
          })
        );
        // reject('Something went wrong!');
      }, 2000);
    });
  };
};
