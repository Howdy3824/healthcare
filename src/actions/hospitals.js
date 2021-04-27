const rgeocode = require('../utils/rgeocode.js')
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
            var data = [];
            hospitals.forEach(pital => {
              rgeocode(pital.location.lat, pital.location.lng , (error, r) => {
                if(error)
                {
                    console.log(error);
                }
                data.push({pital, r})
                //console.log(hospital,r);
                });
              //console.log(hospitals.location.lat, hospitals[0].location.lng)
            });
            setTimeout(() => {
              console.log(data);
              dispatch(setHospitals(data));
            },2000)
            
          })
        );
        // reject('Something went wrong!');
      }, 2000);
    });
  };
};
