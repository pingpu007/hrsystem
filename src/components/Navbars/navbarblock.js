import React, { Component } from 'react'
import innotechlg from './innotechlg.svg'
import Navbaritems from './navbaritems.js'

class Menublock extends Component {
    render() {
        return (
            <div className="navbar-block">
                <Navbaritems image={innotechlg} alt="innotechlogo" tolink="mennu" />
            </div>
        )
    }
}

export default Menublock