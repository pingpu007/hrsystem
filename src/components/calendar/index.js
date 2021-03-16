import React, { Component } from 'react';
import Calendarblock from './calendarblock'
import Navbars from '../Navbars'

class Calendarpage extends Component {
    render(){
        return(
            <>
            <Navbars />
            <Calendarblock />
            </>
        )
    }
}

export default Calendarpage;