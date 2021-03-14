import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menuitems extends Component {
    render() {
        return (
            <Link className="menu-text" to={this.props.tolink} >
                    <div className="fw-bold">
                        {this.props.topic}
                    </div>
                    <div className=" ">
                        {this.props.detail}
                    </div>
            </Link>
        )
    }
}

export default Menuitems