import React, { Component } from 'react'


class Attendhisitems extends Component {
    render() {
        return (
                <div className="">
                    <div className="">
                        {this.props.name}
                    </div>
                    <div className="">
                        {this.props.status}
                    </div>
                    <div className="">
                        {this.props.in}
                        {this.props.timein}
                    </div>
                    <div className="">
                        {this.props.out}
                        {this.props.timeout}
                    </div>
                </div>
        )
    }
}

export default Attendhisitems