// This page was not required. 
// It was created for only creating a responsive design.

import React from 'react'

// Assets
// Logos
import Logo1 from "../assets/icons/sidebar/logos/Logo1.svg"
import Logo2 from "../assets/icons/sidebar/logos/Logo2.svg"
import Logo3 from "../assets/icons/sidebar/logos/Logo3.svg"
import Logo4 from "../assets/icons/sidebar/logos/Logo4.svg"
import Logo5 from "../assets/icons/sidebar/logos/Logo5.svg"
import Logo6 from "../assets/icons/sidebar/logos/Logo6.svg"
import SocialityLogo from "../assets/icons/sidebar/logos/Sociality-logo.svg"

// Icons
import Icon1 from "../assets/icons/sidebar/Icon1.svg"
import Icon2 from "../assets/icons/sidebar/Icon2.svg"
import Icon3 from "../assets/icons/sidebar/Icon3.svg"
import Icon4 from "../assets/icons/sidebar/Icon4.svg"
import Icon5 from "../assets/icons/sidebar/Icon5.svg"
import Icon6 from "../assets/icons/sidebar/Icon6.svg"
import Menu from "../assets/icons/sidebar/menu.svg"


function SidebarMobile() {
    // Handling Click (to Bars Icon) Event For Dropdown Menu in Mobile Screens
    const handleClick = () => {
        let sidebarContent = document.getElementsByClassName("sidebar-mobile-content")[0]
            
        if(sidebarContent.style.display === "flex"){
            // Already displaying dropdown menu
            // Closing Menu
            sidebarContent.style.display = "none"
        }
        else {
            // Menu is not displaying
            // Opening Menu
            sidebarContent.style.display = "flex"
        }
    }
    
    return (
        <div className="sidebar-mobile">
             <div className="sidebar-mobile-header">
                <div className="sidebar-logo">
                    <img src={SocialityLogo} alt="sociality logo" />
                </div>
                <div onClick={handleClick} className="sidebar-icon">
                    <img src={Menu} alt="sidebar icon" />
                </div>
            </div>
            
            <div className="sidebar-mobile-content">
                <div className="sm-left">
                <div className="client-logo">
                            <img src={Logo1} alt="client logo" />
                        </div>
                        <div className="client-logo">
                            <img src={Logo2} alt="client logo" />
                            <span className="client-badge">99</span>
                        </div>
                        <div className="client-logo">
                            <img src={Logo3} alt="client logo" />
                        </div>
                        <div className="client-logo">
                            <img src={Logo4} alt="client logo" />
                        </div>
                        <div className="client-logo">
                            <img src={Logo5} alt="client logo" />
                        </div>
                        <div className="client-logo">
                            <img src={Logo6} alt="client logo" />
                        </div>
                </div>
                <div className="sm-right">
                    <div className="side-link">
                        <div className="icon-div">
                            <img src={Icon1}alt="Summary Icon" />
                        </div>
                        <a href="#/">NOTIFICATIONS</a>
                        <span className="badge">29</span>
                    </div>
                    <div className="side-link">
                        <div className="icon-div">
                            <img src={Icon2} alt="Summary Icon" />
                        </div>
                        <a href="#/">SUMMARY</a>
                        <p className="sign">+</p>
                    </div>
                    <div className="side-link active">
                        <div className="icon-div">
                            <img src={Icon3} alt="Publish Icon" />
                        </div>
                        <a href="#/">PUBLISH</a>
                        <p className="sign">+</p>
                    </div>
                    <ul className="active-links">
                        <li>Compose</li>
                        <li className="link-active">Feed</li>
                    </ul>
                    <div className="side-link">
                        <div className="icon-div">
                            <img src={Icon4} alt="Publish Icon" />
                        </div>
                        <a href="#/">ENGAGE</a>
                        <p className="sign">+</p>
                    </div>
                    <div className="side-link">
                        <div className="icon-div">
                            <img src={Icon5}alt="Publish Icon" />
                        </div>
                        <a href="#/">LISTEN</a>
                        <p className="sign">+</p>
                    </div>
                    <div className="side-link">
                        <div className="icon-div">
                            <img src={Icon6} alt="Publish Icon" />
                        </div>
                        <a href="#/">REPORT</a>
                        <p className="sign">+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarMobile;