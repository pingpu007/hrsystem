import React, { Component } from 'react'
import Menuitemsattendtime from './menuitemsattendtime.js'
import Menuitemsouttime from './menuitemouttime.js'
import Menuitemslogin from './menuitemslogin.js'
import timepic from './figerPrint.svg'
import loginpic from './login.svg'

let time = 9
console.log('time', time)
console.log('8 <= time <= 17 ', 8 <= time <= 17 )
class Menublock extends Component {
    render() {
        return (
            <div className="fp-border">
                <h1 className="titleHeaderBold">HR Self-service</h1>
                <h1 className="titleHeader">Kiosk</h1>
                {time >= 8 && time <= 17 ?
                    <div className="menuitem">
                        <Menuitemsattendtime image={timepic} alt="fingerprint" text="timeattendancetext" item="timeattendance" tolink="/timeattend" />
                        <Menuitemslogin image={loginpic} alt="mail" text="Logintext" item="Login" tolink="/login" />
                    </div>
                    : <div className="menuitem">
                        <Menuitemsouttime image={timepic} alt="fingerprint" text="timeattendancetext" item="timeattendance" tolink="/timeattend" />
                        <Menuitemslogin image={loginpic} alt="mail" text="Logintext" item="Login" tolink="/login" />
                    </div>
                }

            </div>
        )
    }
}

export default Menublock