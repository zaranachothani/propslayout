import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import './App.css';

function Testimonial(){
    return(
        <>
            <div className="spacer">
                <div className="about">
              <div className='about1'>
                <div className="about_shape">
                  <div className="abt_container">
                        <div className='heading abt_heading'>
                            <span className='sub_heaing'>
                                ABOUT US
                            </span>
                            <h2>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h2>
                        </div>
                    <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                    <div className='heading abt_btn'>
                        <a href="#" className='btn_yellow'>Enroll Now..! <i><IoIosArrowRoundForward></IoIosArrowRoundForward></i></a>
                    </div>
                  </div>
                </div>
              </div>  
              <div className='about2'>
                    <img src={require(`./image/about.jpeg`)}></img>
                    <div className="about2_layer">
                      <span><FaPlay></FaPlay></span>
                    </div>
              </div>
          </div>
        </div>
        </>
    )
}

export default Testimonial;