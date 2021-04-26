import React from 'react';
import { connect } from 'react-redux';
import { startSetHospitals} from '../actions/hospitals';
const geocode = require('../utils/geocode.js')

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      lat: undefined,
      lon: undefined
    };
  }
  onsearchValueChange = (e) => {
    const searchValue = e.target.value;
    this.setState(() => ({ searchValue }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.searchValue !== '')
    {
        new Promise((resolve, reject) => {
        
            setTimeout(() => {
              resolve(
                geocode(this.state.searchValue , (error, r) => {
                if(error)
                {
                    this.props.startSetHospitals(undefined,undefined);
                }
                  this.props.startSetHospitals(r.latitude,r.longitude);
                })
              );
              // reject('Something went wrong!');
            }, 1000);
          }).then(() => {
          })   
    }
  };
  render() {
    return (
        <div className="searchbar">
          <form className="form search" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input
            autoFocus
            type="text"
            placeholder="Name of the Place"
            className="text-input"
            value={this.state.searchValue}
            onChange={this.onsearchValueChange}
            />
            <button className="s_btn">Search</button> 
          </form>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
    startSetHospitals: (lat, lon) => {
    dispatch(startSetHospitals(lat,lon));},
});
  
export default connect(undefined, mapDispatchToProps)(SearchForm);