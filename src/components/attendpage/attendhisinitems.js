import React, { Component } from 'react'


class Attendhisinitems extends Component {
    render() {
        return (
                <div className="attend-items">
                    <div className="" style={{paddingLeft:"10px"}}>
                        {this.props.name}
                    </div>
                    <div className="" style={{gridColumnStart:"8",gridColumnEnd:"9"}}>
                        {this.props.status}
                    </div>
                    <div className="" style={{gridColumnStart:"9",gridColumnEnd:"10"}}>
                        <div className="attend-items-time">
                            <div>
                                {this.props.in}
                            </div>
                            <div>
                                {this.props.timein}
                            </div>
                        </div>
                    </div>
                    <div className="" style={{gridColumnStart:"10",gridColumnEnd:"11"}}>
                    <div className="attend-items-time">
                            <div>
                                {this.props.out}
                            </div>
                            <div>
                                {this.props.timeout}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Attendhisinitems