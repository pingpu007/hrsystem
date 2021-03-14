import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Fpitemsattendtime extends Component {
    render() {
        return (
            <div id={this.props.item}>
                <Link className={this.props.item} to={this.props.tolink}>
                    <img className="f-logo" src={this.props.image} alt={this.props.alt} />
                    <div className={this.props.text} >Time Attendance</div>
                    <div className="fp-timeattend-out" >
                        <div className="fp-time-cl">เข้างาน</div>
                        <div className="">/</div>
                        <div className="fp-time-no-cl">ออกงาน</div>
                    </div>
                    </Link>
            </div>
        )
    }
}

export default Fpitemsattendtime