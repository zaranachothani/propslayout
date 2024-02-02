import './App.css';
import partner1 from './image/p1.png';
import partner2 from './image/p2.png';
import partner3 from './image/p3.png';
import partner4 from './image/p4.png';
import partner5 from './image/p5.png';
import partner6 from './image/p6.png';

const partner=[partner1, partner2, partner3, partner4, partner5, partner6];

const tags=["Wordpress Company In Surat","Best Lumion Training Institute","Unity Game Development Course","Best Graphics Design Training Institute In Surat","English Speaking course","Php Institute In Surat","Autocad Training Institute In Mota Varachha","Photoshop Training Institute","Best Nodejs Training Institute","Adobe Illustrator Design","Maya 3d Animation Training Institute In Surat","Civil Engineering Training Institute In Katargam","C++ Programming Launguage Training Institue In Katargam","Laravrl Training Institute","Best Animation Training Course"]

function Placements(){
    return(
        <>
            <div className='spacer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='heading'>
                                <span className='sub_heaing'>
                                    STUDENT PLACEMENT
                                </span>
                                <h2>OUR RECRUITMENT PARTNERS</h2>
                            </div>
                        </div>
                        <div className='partners'>
                            {
                                partner.map((ele,index)=>{
                                    return(
                                        
                                        <div className='p_img'>
                                            <img src={ele}></img>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='tags'>
                        <div className='tag_heading'>
                            <h5>Our Demanded Course -</h5>
                        </div>
                        <div className='tag_name'>
                            {
                                tags.map((ele,index)=>{
                                    return(
                                        <a href='#'>{ele}</a>
                                    )
                                })
                            }
                            <p>Show More</p>
                        </div>
                    </div>
                </div>

                


        </>
    )
}

export default Placements;