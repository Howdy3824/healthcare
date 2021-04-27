import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setAtextFilter } from '../actions/dfilter';

export class PdonorListFilter extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onAtextChange = (e) => {
    this.props.setAtextFilter(e.target.value);
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
            type="text"
            className="text-input"
            placeholder="Search Bloodgroup ( like A+, B-, etc. )"
            value={this.props.dfilter.text}
            onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <input
            type="text"
            className="text-input"
            placeholder="Search Address"
            value={this.props.dfilter.atext}
            onChange={this.onAtextChange}
            />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  dfilter: state.dfilter
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setAtextFilter: (atext) => dispatch(setAtextFilter(atext))
});

export default connect(mapStateToProps, mapDispatchToProps)(PdonorListFilter);
