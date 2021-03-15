import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Attendhisitems from './attendhisitems'


class Attendhisblock extends Component {
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
                    <div className="">
                        การเข้างาน
                    </div>
                    <div className="">
                        การลางาน
                    </div>
                </div>
                <div className="attend-ls-topic">
                    <div className="">
                        ชื่อสกุล ↑
                    </div>
                    <div className="">
                        สถานะการเข้างาน
                    </div>
                    <div className="">
                        เวลาเข้างาน
                    </div>
                    <div className="">
                        เวลาออกงาน
                    </div>
                </div>
                <div className="attend-items">
                    <Attendhisitems name="จุทัย สินโพธิ์" status="ปกติ" in="12 ธ.ค. 2563" timein="13:00 น." out="12 ธ.ค. 2563" timeout="16:00 น."/>
                </div>
            </div>
        )
    }
}

export default Attendhisblock