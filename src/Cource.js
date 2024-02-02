import "./App.css";
// import flogo from "./image/creative-logo-white.svg";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";


function Course(props) {
  return (
    <>
      <div className="single_course">
        <div className="course_img">
          <img src={props.img}></img>
        </div>
        <h3>{props.info}</h3>
        <div className="ranking">
          <ul>
            <li>
              <IoIosStar></IoIosStar>
            </li>
            <li>
              <IoIosStar></IoIosStar>
            </li>
            <li>
              <IoIosStar></IoIosStar>
            </li>
            <li>
              <IoIosStar></IoIosStar>
            </li>
            <li>
              <IoStarHalfSharp></IoStarHalfSharp>
            </li>
          </ul>
          <div className="know_more">
            <span>Know More..!</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
