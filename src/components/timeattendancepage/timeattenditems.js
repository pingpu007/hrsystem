import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Timeattenditems extends Component {
    render() {
        return (
            <div id={this.props.item}>
                <div className={this.props.item}>
                    <div className="" >{this.props.text}</div>
                    <Link to={this.props.tolink}>
                        <img className="" src={this.props.image} alt={this.props.alt} />
                    </Link>
                </div>
            </div>

        )
    }
}

export default Timeattenditems