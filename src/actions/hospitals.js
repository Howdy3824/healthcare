const geocode = require('../utils/geocode.js')
const nearbyHospitals = require('../utils/nearbyHospitals.js')

var lat;
var long;

navigator.geolocation.getCurrentPosition((position) => {
  lat = position.coords.latitude;
  long = position.coords.longitude;
})

// SET_EXPENSES
export const setHospitals = (hospitals) => ({
  type: 'SET_HOSPITALS',
  hospitals
});

export const startSetHospitals = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log()
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          nearbyHospitals(lat,long, (error, hospitals) => {
            console.log(lat,long)
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
