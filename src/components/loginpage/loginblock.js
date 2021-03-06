import React, { Component } from 'react'
import timepic from '../firstpage/figerPrint.svg'

import Loginitems from './loginitems'
class Loginblock extends Component {
    render() {
        return (
            <div className="login-border">
                <div className="login-block">
                    <div className="lg-logo-line">
                        <h4 className="lg-kiosk-tx">HR Kiosk</h4>
                        <img className="lg-logo" src={timepic} alt=" " />
                    </div>
                    <div style={{fontWeight:"bold",display:"flex",paddingBottom:"2%"}}>เข้าสู่ระบบ 
                        <div style={{fontWeight:"normal",fontSize:"10px",paddingTop:"2.5%"}}>(Authentical via LDAP)</div>
                    </div>
                    <div>
                        <Loginitems />
                    </div>
                </div>
            </div>
        )
    }
}

export default Loginblock