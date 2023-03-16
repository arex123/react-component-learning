import React from 'react'
import '../App.css';
import { sidebarData } from './SidebarData';
function SideBar(){
    return (
        <div className='Sidebar'>
           <ul className='sidebarlist'>
            {sidebarData.map((val,key)=>{
                return (
                    <li className='row'
                        id={window.location.pathname==val.link?"active":""}
                     key={key} onClick={()=>{
                        window.location.pathname=val.link
                    }}>
                        {" "}
                        <div id='icon'>{val.icon}</div>
                        <div id='title'>{val.title}</div>
                    </li>
                )
            })

            }
            </ul>
        </div>
    )
}

export default SideBar