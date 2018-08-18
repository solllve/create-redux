import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../store/actions'

const mapStateToProps = (state) => ({
  alertsTest: state.settings.alerts
})


const AlertButton = ({alertsTest, dispatch}) => (
  <div>
    <button>
      Activate Lasers
    </button>
  </div>
)

export default connect(mapStateToProps)(AlertButton)
