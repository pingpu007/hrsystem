import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Timeattenditems extends Component {
    render() {
        return (
            <div id={this.props.item}>
                <div className={this.props.item}>
                    <div className={this.props.text} >Time Attendance</div>
                    <img className="f-logo" src={this.props.image} alt={this.props.alt} />
                </div>
            </div>

        )
    }
}

export default Timeattenditems