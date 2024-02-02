import './App.css';
// import './demo.css';
// import mycss from './App.module.css';
// import image from './image/t2.jpg';
// import { FcClock } from "react-icons/fc";
import { BsPlayBtn,BsWhatsapp } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { TfiGoogle } from "react-icons/tfi";
import { FaHandPointRight,FaUniversity } from "react-icons/fa";
import flogo from "./image/creative-logo-white.svg";
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa6";

const footer_icon = [<FaFacebookF></FaFacebookF>, <FaTwitter></FaTwitter>, <TfiGoogle></TfiGoogle>, <FaLinkedinIn></FaLinkedinIn>, <ImInstagram></ImInstagram>, <BsPlayBtn></BsPlayBtn>, <BsWhatsapp></BsWhatsapp>]
const footer_menu1 = ['About Us', 'Blogs', 'Join Us', 'Company Login', 'Certificate Verification'];
const footer_menu2=['Katargam','Mota Varachha','Adajan','Navsari'];


function Footer(){
    return(
        <>
            <footer>
                    <div className='bgblue spacer'>
                        <div className='container'>
                            <div className='f_row'>
                                <div className='f_logo'>
                                    <div className='footer_logo'>
                                        <a href='#'><img src={flogo}></img></a>
                                    </div>
                                    <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                    <h6>FOLLOW US ON</h6>
                                    <ul className="icons ">
                                    {
                                        footer_icon.map((ele, ind) => {
                                            return (
                                                <li key={ind} className='f-icons'><a href="#" target="_blank"><i>{ele}</i></a></li>
                                            )
                                        })
                                    }
                                    </ul>
                                </div>
                                <div className='feature'>
                                    <h6 className='f_title'>FEATURES LINKS</h6>
                                    <ul className='feature_name'>
                                        {
                                            footer_menu1.map((ele, ind) => {
                                                return (
                                                    <li key={ind}><a href="#"><FaHandPointRight></FaHandPointRight>{ele}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className='contact'>
                                    <h6 className='f_title'>CONTACT US</h6>
                                    <div className='head_office'>
                                        <h6><a href='#'>HEAD OFFICE - YOGICHOWK</a></h6>     
                                    </div>
                                    <span className='address'>401-404,4<sup>th</sup>Floor,City Center Complex,Nr.YogiChowk,
                                        Varachha,Surat.</span>
                                    <p>Mo.<a href='#' className='mo'>+91 90333 16003</a></p>
                                    <div className='head_office'>
                                        <h6><a href='#'>OTHER BRANCHES</a></h6>     
                                    </div>
                                    <ul className='feature_name'>
                                        {
                                            footer_menu2.map((ele, ind) => {
                                                return (
                                                    <li key={ind}><a href="#"><FaUniversity></FaUniversity>{ele}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom_footer dark_blue'>
                        <div className='container'>
                            <div className='bottom'>
                                <p class="copyright m-md-0 text-center text-md-left">© 2023 All Rights Reserved by Creative Design &amp; Multimedia Institute.</p>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    )
}

export default Footer;