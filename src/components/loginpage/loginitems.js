import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Loginitems extends Component {
    render() {
        return (
            <div id="">
                <form>
                    <div className="loginitem">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <input className="submit-btn" type="submit" value="เข้าสู่ระบบ" />
                </form>
            </div>
        )
    }
}

export default Loginitems