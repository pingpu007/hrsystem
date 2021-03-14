import React, { Component } from 'react'
import timepic from '../firstpage/figerPrint.svg'
import { Link } from 'react-router-dom'
import Menuitems from './menuitems.js'

class Menublock extends Component {
    render() {
        return (
            <div className="login-border">
                <div className="login-block">
                    <div className="lg-logo-line">
                        <h4 className="lg-kiosk-tx">HR Kiosk</h4>
                        <Link style={{width:"50%",marginLeft:"50%"}} to="/">
                            <img className="lg-logo" src={timepic} alt=" " />
                        </Link>
                    </div>
                    <div style={{fontWeight:"bold",display:"flex",paddingBottom:"2%"}}>เข้าสู่ระบบ 
                        <div style={{fontWeight:"normal",fontSize:"10px",paddingTop:"1%",marginLeft:"2%"}}>(Authentical via LDAP)</div>
                    </div>
                    <div>
                        <Menuitems />
                    </div>
                </div>
            </div>
        )
    }
}

export default Menublock