import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Timeoffitems from './timeoffitems'
import Emproitems from '../empropage/emproitems'

class Timeoffblock extends Component {
    render() {
        return (
            <div className="tof-block">
                <div className="">
                    <div style={{fontWeight:'bold'}}>
                        Time off Request
                    </div>
                    <div>
                        ใบลางาน
                    </div>
                </div>
                <div className="pf-box">
                    <div style={{fontWeight:'bold',gridColumnStart:"1",gridColumnEnd:"3"}}>
                        ข้อมูลส่วนตัว
                    </div>
                    <Emproitems name="ชื่อ" boxname="สรวิศ" />
                    <Emproitems name="นามสกุล" boxname="ศิริมาลีวัฒนา" />
                    <Emproitems name="รหัสพนักงาน" boxname="00001" />
                    <Emproitems name="เลขที่บัตรปประชาชน" boxname="1100923865199" />
                </div>
                <div className="dp-box">
                    <div style={{fontWeight:'bold',gridColumnStart:"1",gridColumnEnd:"3"}}>
                        ข้อมูลเกี่ยวกับบริษัท
                    </div>
                    <Emproitems name="แผนก :" boxname="Machine Design"/>
                    <Emproitems name="ตำแหน่ง" boxname="Section Lead" />
                    <Emproitems name="วันที่จ้าง" boxname="วัน/เดือน/ปี" />
                    <Emproitems name="วันสิ้นอายุงาน" boxname="วัน/เดือน/ปี" />
                    <Emproitems name="อายุงาน (ปี):" boxname="1.3" />
                    <Emproitems name="ประเภทพนักงาน :" boxname="รายเดือน" />
                </div>
                <div className="tof-dat">
                    <div style={{fontWeight:'bold',gridColumnStart:"1",gridColumnEnd:"3"}}>
                        ข้อมูลการลางาน
                    </div>
                    <Timeoffitems name="เลขที่เอกสาร" type="text" holder="TOF0001"/>
                    <Timeoffitems name="ประเภทการลางาน" type="text" holder="ลางาน" />
                    <Timeoffitems name="วันเริ่มต้นการลางาน" type="date" holder="วัน/เดือน/ปี" />
                    <Timeoffitems name="วันสิ้นสุดการลางาน" type="date" holder="วัน/เดือน/ปี" />
                </div>
            </div>
        )
    }
}

export default Timeoffblock