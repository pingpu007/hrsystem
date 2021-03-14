import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Fpitemslogin extends Component {
    render() {
        return (
            <div id={this.props.item}>
                <Link className={this.props.item} to={this.props.tolink}>
                    <img className="f-logo" src={this.props.image} alt={this.props.alt} />
                    <div className={this.props.text} >Login</div>
                    <div className="fp-e-maillogin">เข้าสู่ระบบผ่าน E-mail</div>
                    </Link>
            </div>
        )
    }
}

export default Fpitemslogin