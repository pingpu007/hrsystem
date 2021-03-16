import React, { Component } from 'react'


class Attendhisoutitems extends Component {
    render() {
        return (
                <div className="attend-items-out">
                    <div className="" style={{paddingLeft:"10px"}}>
                        {this.props.name}
                    </div>
                    <div className="" style={{gridColumnStart:"7",gridColumnEnd:"8"}}>
                        {this.props.statusattend}
                    </div>
                    <div className="" style={{gridColumnStart:"8",gridColumnEnd:"9"}}>
                        <div className="attend-items-time">
                            <div>
                                {this.props.in}
                            </div>
                            <div>
                                {this.props.timein}
                            </div>
                        </div>
                    </div>
                    <div className="" style={{gridColumnStart:"9",gridColumnEnd:"10"}}>
                        <div className="attend-items-time">
                            <div>
                                {this.props.out}
                            </div>
                            <div>
                                {this.props.timeout}
                            </div>
                        </div>
                    </div>
                    <div className="" style={{gridColumnStart:"10",gridColumnEnd:"11"}}>
                        {this.props.statusconfirm}
                    </div>
                </div>
        )
    }
}

export default Attendhisoutitems