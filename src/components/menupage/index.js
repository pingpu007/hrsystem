import React, { Component } from 'react';
import Menublock from './menublock.js'
import Navbars from '../Navbars'

class Menupage extends Component {
    render(){
        return(
            <>
            <Navbars />
            <Menublock />
            </>
        )
    }
}

export default Menupage;
