import React, { Component } from 'react'
import {connect} from 'react-redux'
import {praiseCrom} from "../store/actions"
import Conan from '../conan.gif'

const mapStateToProps = (state) => ({
  letsPraiseCrom: state.cromPraised ? '--showArnold' : '--hideArnold'
})

class CromPraisingComponent extends Component {
  praiseCrom() {
    this.props.dispatch(praiseCrom())
  }
  render() {
    const conanCrushEnemies = this.props.letsPraiseCrom;
    return (
      <div>
        <img src={Conan} className={conanCrushEnemies} />
        <button onClick={this.praiseCrom.bind(this)} className="btn-primary">Praise Crom \o/</button>
      </div>
    )
  }
}
export default connect(mapStateToProps)(CromPraisingComponent)
