import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Timeoffitems from './timeoffitems'
import Emproitems from '../empropage/emproitems'
import pslphoto from '../empropage/photo.svg'
import upload from './upload.svg'

class Timeoffblock extends Component {
    render() {
        return (
            <div className="tof-block">
                <div className="" style={{display:"grid",gridColumnStart:"1",gridColumnEnd:"3"}}>
                    <div style={{fontWeight:'bold'}}>
                        Time off Request
                    </div>
                    <div style={{gridRowStart:"2",gridRowEnd:"3"}}>
                        ใบลางาน
                    </div>
                    <div className="" style={{gridRowStart:"1",gridRowEnd:"3",gridColumnStart:"29",gridColumnEnd:"30"}}>
                        <input className="tof-btn" type="submit" value="ส่งใบงาน" />
                    </div>
                </div>
                <div className="pf-box-with-dp-box">
                    <div className="pf-box">
                        <div style={{fontWeight:'bold',gridColumnStart:"1",gridColumnEnd:"3"}}>
                            ข้อมูลส่วนตัว
                        </div>
                        <Emproitems name="ชื่อ" boxname="สรวิศ" />
                        <Emproitems name="นามสกุล" boxname="ศิริมาลีวัฒนา" />
                        <Emproitems name="รหัสพนักงาน :" boxname="00001" />
                        <Emproitems name="เลขที่บัตรประชาชน :" boxname="1100923865199" />
                    </div>
                    <div className="dp-box">
                        <div style={{fontWeight:'bold',gridColumnStart:"1",gridColumnEnd:"3"}}>
                            ข้อมูลเกี่ยวกับบริษัท
                        </div>
                        <Emproitems name="แผนก :" boxname="Machine Design"/>
                        <Emproitems name="ตำแหน่ง :" boxname="Section Lead" />
                        <Emproitems name="วันที่จ้าง :" boxname="วัน/เดือน/ปี" />
                        <Emproitems name="วันสิ้นอายุงาน :" boxname="วัน/เดือน/ปี" />
                        <Emproitems name="อายุงาน (ปี):" boxname="1.3" />
                        <Emproitems name="ประเภทพนักงาน :" boxname="รายเดือน" />
                    </div>
                </div>
                <div className="tof-dat" style={{gridColumnStart:"2",gridColumnEnd:"3",gridRowStart:"2",gridRowEnd:"3"}}>
                    <div style={{fontWeight:'bold',gridColumnStart:"1",gridColumnEnd:"3"}}>
                        ข้อมูลการลางาน
                    </div>
                    <Timeoffitems name="เลขที่เอกสาร" type="text" holder="TOF0001"/>
                    <Timeoffitems style={{width:"100%"}} name="ประเภทการลางาน" type="text" holder="ลางาน" />
                    <Timeoffitems name="วันเริ่มต้นการลางาน :" type="date" holder="วัน/เดือน/ปี" />
                    <Timeoffitems name="วันสิ้นสุดการลางาน :" type="date" holder="วัน/เดือน/ปี" />
                    <div className="pf-pic" style={{gridColumnStart:"2",gridColumnEnd:"3",gridRowStart:"2",gridRowEnd:"6",gridGap:"10px"}}>
                        <div style={{fontWeight:'bold',gridColumnStart:'1',gridColumnEnd:'3'}}>
                            รูปถ่าย
                        </div>
                        <div style={{gridColumnStart:'2',gridColumnEnd:'3'}}>
                            <img src={pslphoto} alt="personalphoto" />
                        </div>
                    </div>
                    <div style={{gridColumnStart:"1",gridColumnEnd:"3"}}>

                    </div>
                    <div className="" style={{padding:"20px 20px 20px 20px",boxShadow:"0px 4px 4px rgb(0 0 0 / 25%)",gridColumnStart:"1",gridColumnEnd:"3"}}>
                        <div>
                            เอกสารที่เกี่ยวข้อง
                        </div>
                        <div>
                            <label className="label-imginput" for="file-input">
                                <img src={upload} alt="uploading cover" />
                            </label>
                            <input style={{display:'none'}} id="file-input" type="file"  ></input>
                        </div>
                    </div>
                    <div style={{gridColumnStart:"1",gridColumnEnd:"3"}}>
                        <div>
                            หมายเหตุ :
                        </div>
                        <div>
                            <input style={{width:"100%",paddingBottom:"100px"}} type="text" id="note" name="note" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeoffblock