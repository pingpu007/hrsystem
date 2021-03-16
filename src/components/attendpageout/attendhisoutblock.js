import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Attendhisoutitems from './attendhisoutitems'


class Attendhisoutblock extends Component {
    render() {
        return (
            <div className="attend-block">
                <div className="attend-topic">
                    <div className="fw-bold">
                        Attendance History
                    </div>
                    <div className="" style={{fontFamily:"fantasy"}}>
                        ประวัติการเข้างาน
                    </div>
                </div>
                <div className="attend-menu">
                    <Link className="attend-link-n-ln" to="attendinpage">
                        <div className="">
                            การเข้างาน
                        </div>
                    </Link>
                    <Link className="attend-link-ln" to="attendoutpage">
                        <div className="">
                            การลางาน
                        </div>
                    </Link>
                </div>
                <div className="attend-ls-topic-out">
                    <div className="" >
                        ชื่อสกุล ↑
                    </div>
                    <div className="" style={{gridColumnStart:"7",gridColumnEnd:"8"}}>
                        สถานะการเข้างาน
                    </div>
                    <div className="" style={{gridColumnStart:"8",gridColumnEnd:"9"}}>
                        เวลาเข้างาน
                    </div>
                    <div className="" style={{gridColumnStart:"9",gridColumnEnd:"10"}}>
                        เวลาออกงาน
                    </div>
                    <div className="" style={{gridColumnStart:"10",gridColumnEnd:"11"}}>
                        สถานะการอนุมัติ
                    </div>
                </div>
                <div className="attend-items-bx">
                    <Attendhisoutitems name="จุทัย สินโพธิ์" statusattend="ปกติ" in="12 ธ.ค. 2563" timein="13:00 น." out="12 ธ.ค. 2563" timeout="16:00 น." statusconfirm="รอการอนุมัติ"/>
                </div>
            </div>
        )
    }
}

export default Attendhisoutblock;
