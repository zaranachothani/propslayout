import './App.css';

import { BsEnvelope,BsPlayBtn,BsWhatsapp } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { TfiGoogle } from "react-icons/tfi";
import logo from "./image/creative-logo-blue.svg";
import { FaCertificate,FaFacebookF,FaTwitter,FaLinkedinIn,FaAngleDown} from "react-icons/fa6";

const header_obj = [
    { icon: <BsEnvelope></BsEnvelope>, info: " info@gmail.in" },
    { icon: <FaCertificate></FaCertificate>, info: " Verify Certificate" },
]
const header_icon = [<FaFacebookF></FaFacebookF>, <FaTwitter></FaTwitter>, <TfiGoogle></TfiGoogle>, <FaLinkedinIn></FaLinkedinIn>, <ImInstagram></ImInstagram>, <BsPlayBtn></BsPlayBtn>, <BsWhatsapp></BsWhatsapp>]
const header_menu = ['HOME', 'COURSE', 'ACTIVITIES', 'BLOG', 'KNOW US', 'GET IN TOUCH', 'STUDENT ZONE'];


function Header(props){
    return (
        <>
            <header>
                <div className="header_color">
                    <div className="container">
                        <div className="info">
                            <ul className="left_info">
                                    {
                                        header_obj.map((ele, ind) => {
                                            return (
                                                <li key={ind}><i>{ele.icon}</i>{ele.info}</li>
                                            )
                                        })
                                    }
                            </ul>
                            <ul className="middle_info">
                                <li className="center">
                                    <p>HAVE ANY QUESTION ? +91 90333 16003</p>
                                </li>
                            </ul>
                            <div className="right_info">
                                <ul className="icons">
                                    {
                                        header_icon.map((ele, ind) => {
                                            return (
                                                <li key={ind}><a href="#" target="_blank"><i>{ele}</i></a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>       
                </div>
                <div className="container">
                    <div className="logo_header">
                        <div className="logo">
                            <a href='www.cdmi.in'><img src={logo} alt=''></img></a>
                        </div>
                        <div className="menus">
                            <ul className="main_menu">
                                {
                                    header_menu.map((ele, ind) => {
                                        return (
                                            <li key={ind}><a href="#">{ele}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div> 
                </div>
            </header>

        </>
    )
}

export default Header;

