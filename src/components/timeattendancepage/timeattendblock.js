import React, { Component } from 'react'
import Timeattenditems from './timeattenditems.js'
import timepic from '../firstpage/figerPrint.svg'


class Timeattendblock extends Component {
    render(){
        return (
            <div className="fp-border">
                <h1 className="titleHeaderBold">Time attendance</h1>
                <h1 className="titleHeader">เข้างาน</h1>
                <div className="tad-block">
                    <Timeattenditems image={timepic} alt="fingerprint" text="กรุณาแสกนเข้างาน" item="tad-item"/>
                    <Timeattenditems image={timepic} alt="fingerprint" text="รูปภาพถ่าย" item="tad-item"/>
                </div>
            </div>
        )
    }
}

export default Timeattendblock