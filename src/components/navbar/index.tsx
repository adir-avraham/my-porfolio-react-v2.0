import React, { Fragment, useState } from 'react';
import "./style.css";



export default function Navbar() {

    const [open, setOpen] = useState("0%"); 

    

    return (
        <Fragment>

        <div id="mySidenav" className="sidenav" style={{height: open}}>
            <a href="javascript:void(0)" className="closebtn" onClick={()=>{setOpen("0%")}}>&times;</a>
            <a href="#" >ראשי</a>
            <a href="#">התמחויות</a>
            <a href="#">אודות</a>
            <a href="#" >צור קשר</a>
        </div>
        <span style={{fontSize: "30px", cursor: "pointer", position: "fixed", color: "#fff", top: "5%", right: "5%"}}  onClick={()=>{setOpen("100%")}} >&#9776;</span>
        </Fragment>
    )


}