import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbaritems extends Component {
    render() {
        return (
            <div id="">
                <div className="navbar-item">
                    <Link to={this.props.tolink} >
                        <img className="navbar-lg" src={this.props.image} alt={this.props.alt} />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbaritems