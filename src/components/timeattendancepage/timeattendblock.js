import React, { Component } from 'react'
import Timeattenditems from './timeattenditems.js'
import timepic from '../firstpage/timeattendance.png'

class Timeattendblock extends Component {
    render(){
        return (
            <div className="fp-border">
                <h2>HR Self-service</h2>
                <h4>Kiosk</h4>
                <div className="menuitem">
                    <Timeattenditems image={timepic} alt="fingerprint" item="timeattendance" tolink="/timeattend" />
                </div>
            </div>
        )
    }
}

export default Timeattendblock