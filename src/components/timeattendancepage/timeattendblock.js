import React, { Component } from 'react'
import Timeattenditems from './timeattenditems.js'
import timepic from '../firstpage/figerPrint.svg'

class Timeattendblock extends Component {
    render(){
        return (
            <div className="fp-border">
                <h1 className="titleHeaderBold">Time attendance</h1>
                <h1 className="titleHeader">เข้างาน</h1>
                <div className="menuitem">
                    <Timeattenditems image={timepic} alt="fingerprint" text="timeattendancetext" item="timeattendance"/>
                </div>
            </div>
        )
    }
}

export default Timeattendblock