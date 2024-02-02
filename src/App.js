
import About from './About';
import './App.css';
import Course from './Cource';
import Header from './Header';
import Slider from './Slider';
import Counter from './Counter';
import H_Students from './H_Students';
import W_Choose from './W_Choose';
import Placements from './Placements';
import Footer from './Footer';
import { IoIosArrowRoundForward } from "react-icons/io";
// import { FaCertificate,FaFacebookF,FaTwitter,FaLinkedinIn,FaAngleDown,FaPlay,FaAngleRight,FaAngleLeft } from "react-icons/fa6";
import course1 from './image/b1.webp';
import course2 from './image/b2.webp';
import course3 from './image/b3.webp';
import course4 from './image/b4.webp';
import course5 from './image/b5.webp';
import course6 from './image/b6.webp';
import choose1 from './image/c1.png';
import choose2 from './image/c2.png';
import choose3 from './image/c3.png';
import choose4 from './image/c4.png';
import choose5 from './image/c5.png';
import choose6 from './image/c6.png';

const choose = [
    { img: choose1, title: 'Industry Experts As Trainers', info: 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.' },
    { img: choose2, title: 'Latest Curriculum', info: 'We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.' },
    { img: choose3, title: 'Latest Technology', info: 'We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.' },
    { img: choose4, title: 'Interview Assistance', info: 'At the end of each training,our training instructor will go through the possible technical questions you may be asked.' },
    { img: choose5, title: 'Free Upgradation', info: 'We will be provided free upgradation for any newer version of the course you have.' },
    { img: choose6, title: 'Lifetime Support', info: 'We will provide you lifetime support on all the courses you learned from us.' },
]

const course_obj=[
    {c_img:course1,info:"Development Courses"},
    {c_img:course2,info:"Design Courses"},
    {c_img:course3,info:"Promgramming IT"},
    {c_img:course4,info:"Trendy Courses"},
    {c_img:course5,info:"Civil-Mech. Engineering"},
    {c_img:course6,info:"Business Development"},
]


const counter_obj = [
  { cnt_img: require('./image/cnt1.png'), num: "18000+", text: "HAPPY STUDENTS" },
  { cnt_img:  require('./image/cnt2.png'), num: "10+", text: "CERTIFICATION APPROVAL" },
  { cnt_img:  require('./image/cnt3.png'), num: "100+", text: "CERTIFIED TEACHERS" },
  { cnt_img:  require('./image/cnt4.png'), num: "12000+", text: "STUDENTS PLACED" },
];


function App() {
  return (
    <>    
      <Header/>
      <Slider/>
      <div className="courses">
                <div className="spacer">
                    <div className="container">
                    <div className='heading'>
                        <span className='sub_heaing'>
                            creative course
                        </span>
                        <h2>OFFERED COURSES</h2>
                    </div>
                        <div className="all_courses">
                            {
                                course_obj.map((ele, ind) => {
                                return (
                                  <Course img={ele.c_img} info={ele.info}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="view_all_course">
                        <span>View All Course <IoIosArrowRoundForward></IoIosArrowRoundForward></span>
                    </div>
                </div>
            </div>
      
      <About/>
      <div className='row'>
                    <div className='counter spacer'>
                        <div className='cnt_img'>
                            <div className='cnt_2 container'>
                                {
                                    counter_obj.map((ele,index)=>{
                                        return(
                                          <Counter img={ele.cnt_img} num={ele.num} text={ele.text}/> 
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
      
      <H_Students/>
      <div className="creative">
            <div className='bgcolor'>
                <div className="spacer">
                    <div className="container">
                        <div className='heading'>
                            <span className='sub_heaing'>
                                READ OUR DIFFERENCE
                            </span>
                            <h2>WHY CHOOSE CREATIVE</h2>
                        </div>
                        <div className="all_why">
                            {choose.map((ele, ind) => {
                                return (
                                  <W_Choose img={ele.img} title={ele.title} info={ele.info}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      <Placements/>
      <Footer/>
    </>
  );
}

export default App;
