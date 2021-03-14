import React, { Component } from 'react'

class Emproitems extends Component {
    render() {
        return (
                <div className="em-box">
                    <div className="em-name">
                        {this.props.name}
                    </div>
                    <div className="em-bx-name">
                        {this.props.boxname}
                    </div>
                </div>
        )
    }
}

export default Emproitems