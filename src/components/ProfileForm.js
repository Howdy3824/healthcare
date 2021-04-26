import React from 'react';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: props.profile ? props.profile.phone : '',
      address: props.address ? props.profile.address : '',
      experience: props.profile ? props.profile.experience : '',
      pdonor: props.profile ? props.profile.pdonor : false,
      error: ''
    };
  }
  onPhoneChange = (e) => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };
  onExperienceChange = (e) => {
    const experience = e.target.value;
    this.setState(() => ({ experience }));
  };
  onPdonorChange = (e) => {
    var checkBox = document.getElementById("myCheck");
      if (e.target.value === 'true') {
        this.setState(() => ({ pdonor: true }));
      } else if (e.target.value === 'false') {
        this.setState(() => ({ pdonor: false }));
      }
  }
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.address || !this.state.phone) {
      this.setState(() => ({ error: 'Please prvide address and phone.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        phone: this.state.phone,
        address: this.state.address,
        experience: this.state.experience,
        pdonor: this.state.pdonor
      });
    }
  };
  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
        autoFocus
        type="text"
        placeholder="Phone"
        className="text-input"
        value={this.state.phone}
        onChange={this.onPhoneChange}
      />
          <input
            type="text"
            placeholder="Address"
            className="text-input"
            value={this.state.address}
            onChange={this.onAddressChange}
          />
          <textarea
            placeholder="Add your experience as a covid-19 patient."
            className="textarea"
            value={this.state.experience}
            onChange={this.onExperienceChange}
          >
          </textarea>
          <select
              className="select"
              value={this.state.pdonor}
              onChange={this.onPdonorChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          <div>
            <h1></h1>
            <button className="button">Save Profile</button>          
          </div>
        </form>
    )
  }
}
