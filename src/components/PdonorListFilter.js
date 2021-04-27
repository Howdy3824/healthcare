import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/dfilter';

export class PdonorListFilter extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PdonorListFilter);
