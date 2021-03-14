import React, { Component } from 'react'
import Menuitems from './menuitems.js'
import kioskimg from './kiosk.svg'


class Menublock extends Component {
    render() {
        return (
            <div className="menu-block" >
                <div className="menu-topic" >
                    <div style={{fontWeight:'bold'}}>
                        Topic
                    </div>
                    <div>
                        หัวข้อ
                    </div>
                </div>
                <div className="menu-content">
                    <div className="menu-item">
                        <div className="menu-list">
                            <Menuitems topic="Employee Profile" detail="ข้อมูลส่วนตัวพนักงาน" tolink="empropage"/>
                            <Menuitems topic="Time off Request" detail="ใบลางาน" tolink=""/>
                            <Menuitems topic="Time Attendance" detail="เวลาเข้างาน" tolink=""/>
                            <Menuitems topic="Event Calendar" detail="ปฏิทินบริษัท" tolink=""/>
                            <Menuitems topic="Approval" detail="การอนุมัติ" tolink=""/>
                            <Menuitems topic="Report" detail="รายงาน" tolink=""/>
                        </div>
                        <div className="survey-block">
                            <div>
                                <div>Survey</div>
                                <div>- สำรวจความพึงพอใจ</div>
                            </div>
                        </div>
                    </div>
                    <img style={{width:"450px"}} src={kioskimg} alt="kioskimg" />
                </div>
            </div>
        )
    }
}

export default Menublock