import React, { Component } from 'react'
import Fpitemsattendtime from './fpitemsattendtime.js'
import Fpitemsouttime from './fpitemsouttime.js'
import Fpitemslogin from './fpitemslogin.js'
import timepic from './figerPrint.svg'
import loginpic from './login.svg'

let time = 9
console.log('time', time)
console.log('8 <= time <= 17 ', 8 <= time <= 17 )
class Fpmenublock extends Component {
    render() {
        return (
            <div className="fp-border">
                <h1 className="titleHeaderBold">HR Self-service</h1>
                <h1 className="titleHeader">Kiosk</h1>
                {time >= 8 && time <= 17 ?
                    <div className="fp-menuitem">
                        <Fpitemsattendtime image={timepic} alt="fingerprint" text="timeattendancetext" item="fp-timeattendance" tolink="/timeattend" />
                        <Fpitemslogin image={loginpic} alt="mail" text="Logintext" item="fp-Login" tolink="/login" />
                    </div>
                    : <div className="fp-menuitem">
                        <Fpitemsouttime image={timepic} alt="fingerprint" text="timeattendancetext" item="fp-timeattendance" tolink="/timeattend" />
                        <Fpitemslogin image={loginpic} alt="mail" text="Logintext" item="Login" tolink="/login" />
                    </div>
                }

            </div>
        )
    }
}

export default Fpmenublock