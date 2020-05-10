import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;
    if (error !== prevProps.error) {
      error.msg.name && alert.error(`Name: ${error.msg.name.join()}`);
      error.msg.email && alert.error(`Email: ${error.msg.email.join()}`);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errorsReducer,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
