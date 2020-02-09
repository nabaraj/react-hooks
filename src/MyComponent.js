import React, { useState, useEffect } from 'react';
import Drawer from './Drawer.js'

export default () => {
    const [ drawerStatus, toggleDrawer ] = useState("close");
    useEffect(() => {
        setTimeout(() => toggleDrawer("open"), 1000)
    })
    return (
        <div className="myComponent">
        <button className={`${drawerStatus==="open"?"active":""}`} onClick={() => drawerStatus === 'open' ? toggleDrawer("close") : toggleDrawer("open")}>
            Toggle Drawer
        </button>
        {
            drawerStatus === "open" ?
                <Drawer />
            : null                
        }
        </div>
    )
}