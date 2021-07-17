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

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={SocialityLogo} alt="sociality logo" />
            </div>
            <div className="sidebar-content">
                <div className="row-12">
                    <div className="col-xs-2 sidebar-left">
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

                    <div className="col-xs-10 sidebar-right">
                        <div className="side-link">
                            <div className="icon-div">
                                <img src={Icon1}alt="notification icon" />
                            </div>
                            <a href="#/">NOTIFICATIONS</a>
                            <span className="badge">29</span>
                        </div>
                        <div className="side-link">
                            <div className="icon-div">
                                <img src={Icon2} alt="summary icon" />
                            </div>
                            <a href="#/">SUMMARY</a>
                            <p className="sign">+</p>
                        </div>
                        <div className="side-link active">
                            <div className="icon-div">
                                <img src={Icon3} alt="publish icon" />
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
                                <img src={Icon4} alt="engage icon" />
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
                                <img src={Icon6} alt="report icon" />
                            </div>
                            <a href="#/">REPORT</a>
                            <p className="sign">+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;