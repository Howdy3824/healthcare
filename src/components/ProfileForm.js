import React from 'react';

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.profile ? props.profile.name : '',
      email: props.profile ? props.profile.email : '',
      phone: props.profile ? props.profile.phone : '',
      address: props.profile ? props.profile.address : '',
      experience: props.profile ? props.profile.experience : '',
      pdonor: props.profile ? props.profile.pdonor : false,
      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
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
      if (e.target.value === 'true') {
        this.setState(() => ({ pdonor: true }));
      } else if (e.target.value === 'false') {
        this.setState(() => ({ pdonor: false }));
      }
  }
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.address || !this.state.email || !this.state.name || !this.state.phone) {
      this.setState(() => ({ error: 'Please prvide name, email, phone and address.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        email: this.state.email,
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
        placeholder="Name"
        className="text-input"
        value={this.state.name}
        onChange={this.onNameChange}
        />
        <input
        type="email"
        placeholder="Email"
        className="text-input"
        value={this.state.email}
        onChange={this.onEmailChange}
        />
          <input
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
