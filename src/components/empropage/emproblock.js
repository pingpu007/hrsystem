import React, { Component } from 'react'
import Emproitems from './emproitems.js'
import pslphoto from './photo.svg'

class Emproblock extends Component {
    render() {
        return (
            <div className="emplo-block" >
                <div className="" style={{gridColumnStart:"1",gridColumnEnd:"3"}}>
                    <div style={{fontWeight:'bold'}}>
                        Employee Profile
                    </div>
                    <div>
                        ข้อมูลส่วนตัวพนักงาน
                    </div>
                </div>
                <div className="pf-box">
                    <div style={{fontWeight:'bold',gridColumnStart:"1",gridColumnEnd:"3"}}>
                        ข้อมูลส่วนตัว
                    </div>
                    <Emproitems name="ชื่อ" boxname="สรวิศ" />
                    <Emproitems name="นามสกุล :" boxname="ศิริมาลีวัฒนา" />
                    <div>
                        <div>
                            เพศ
                        </div>
                        <div>
                            <input type="checkbox" id="" name="" value=""></input>
                            <label >ชาย</label>
                            <input type="checkbox" id="" name="" value=""></input>
                            <label >หญิง</label>
                        </div>
                    </div>
                    <div>
                        <div>คำนำหน้า</div>
                        <div>
                        <input type="checkbox" id="" name="" value=""></input>
                            <label >นาย</label>
                            <input type="checkbox" id="" name="" value=""></input>
                            <label >นาง</label>
                            <input type="checkbox" id="" name="" value=""></input>
                            <label >นางสาว</label>
                        </div>
                    </div>
                    <Emproitems name="ชื่อเล่น :" boxname="โดนัท" />
                    <Emproitems name="เลขบัตรประชาชน :" boxname="1100923865199" />
                    <Emproitems name="วันเกิด :" boxname="วัน/เดือน/ปี" />
                    <Emproitems name="วุฒิการศึกษา :" boxname="ปริญญาตรี" />
                    <Emproitems name="รหัสพนักงาน :" boxname="000001" />
                </div>
                <div className="pf-pic">
                    <div style={{fontWeight:'bold'}}>
                        รูปถ่าย
                    </div>
                    <div style={{}}>
                        <img src={pslphoto} alt="personalphoto" />
                    </div>
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
                <div className="chief-data-box">
                    <div style={{fontWeight:'bold',gridColumnStart:"1",gridColumnEnd:"3"}}>
                        หัวหน้าผู้ดูแล
                    </div>
                    <Emproitems name="ชื่อ :" boxname="อาทิตยา" />
                    <Emproitems name="นามสกุล" boxname="แสงงาม" />
                </div>
            </div>
        )
    }
}

export default Emproblock