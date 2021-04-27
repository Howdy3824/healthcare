import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import Summary from './Summary';
import { startEditProfile, startRemoveProfile } from '../actions/profile';
import {startSetProfiles} from '../actions/profiles';

export class ProfilePage extends React.Component {
  onSubmit = (profile) => {
    this.props.startEditProfile(profile);
    this.props.startSetProfiles();
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveProfile();
    this.props.startSetProfiles();
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
      <Summary />
        <div className="content-container">
          <ProfileForm
          profile={this.props.profile}
          onSubmit={this.onSubmit}
          />

          
          <button className="button button--secondary" onClick={this.onRemove}>Remove Profile</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  profile: state.profile
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditProfile: (profile) => {
    console.log(profile);
    dispatch(startEditProfile(profile));},
  startRemoveProfile: () => dispatch(startRemoveProfile()),
  startSetProfiles: () => dispatch(startSetProfiles())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

