import React, { Component } from 'react'


class Timeoffitems extends Component {
    render() {
        return (
                <div className="tof-box">
                    <div className="tof-name">
                        {this.props.name}
                    </div>
                    <div className="tof-bx-name">
                        <input type={this.props.type} placeholder={this.props.holder}></input>
                    </div>
                </div>
        )
    }
}

export default Timeoffitems