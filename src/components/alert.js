import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setAlert} from "../store/actions"

const mapStateToProps = (state) => ({
  alertsTest: state.alert ? 'on' : 'off'
})

class AlertButton extends Component {
  setAlert() {
    this.props.dispatch(setAlert())
  }
  render() {
    const alert = this.props.alertsTest;
    return (
      <div>
      <button onClick={this.setAlert.bind(this)}>load</button>
      <p>{alert}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AlertButton)
