import { FaQuoteRight } from "react-icons/fa";
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
import './App.css';

function H_Students(){
    return(
        <>
            <div className='container'>
                    <div className='testimonial'>
                        <div className='test_cnt'>
                            <div className='heading t_head'>
                                <span className='sub_heaing'>
                                    HAPPY STUDENTS
                                </span>
                                <h2>ALUMNI SPEAK</h2>
                            </div>
                            <div className='quote_sec'>
                                <div className='quote'>
                                    <i><FaQuoteRight></FaQuoteRight></i>
                                </div>
                                <div className='nav'>
                                    <div className='nav_btn'>
                                        <i><FaAngleLeft></FaAngleLeft></i>
                                        <i><FaAngleRight></FaAngleRight></i>
                                    </div>
                                </div>
                            </div>
                            <div className='a_text'>
                            <p>Good teaching. Well nature staff.. Good education they provide for every student in the institution... Staff's are very quite,decent ,multi talented and well matured to........ Thank you creative multimedia!!!!</p>
                            </div>
                            <div className='test_user'>
                                <div className='user_img'>
                                    <img src={require(`./image/t1.jpeg`)}></img>
                                </div>
                                <div className='user_info'>
                                    <h3 className='user_name'>KOLADIYA MANSI</h3>
                                    <span>UI/UX Designer</span><p> @ Patoliya Infotech</p>
                                </div>
                            </div>
                        </div>
                        <div className='students'>
                            <div className='img_holder'>
                                <div className='test_shape'>
                                    <img src={require(`./image/test.png`)}></img>
                                </div>
                                <div className='background_bg'></div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default H_Students;