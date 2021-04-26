import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { startEditProfile, startRemoveProfile } from '../actions/profile';

export class ProfilePage extends React.Component {
  onSubmit = (profile) => {
    this.props.startEditProfile(profile);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveProfile();
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Profile</h1>
          </div>
        </div>
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
  startRemoveProfile: () => dispatch(startRemoveProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

