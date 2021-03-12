import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Menuitemsattendtime extends Component {
    render() {
        return (
            <div id={this.props.item}>
                <Link className={this.props.item} to={this.props.tolink}>
                    <img className="f-logo" src={this.props.image} alt={this.props.alt} />
                    <div className={this.props.text} >Time Attendance</div>
                    <div className="timeattend-out" >
                        <div className="time-color">เข้างาน</div>
                        <div className="">/</div>
                        <div className="time-no-color">ออกงาน</div>
                    </div>
                    </Link>
            </div>
        )
    }
}

export default Menuitemsattendtime