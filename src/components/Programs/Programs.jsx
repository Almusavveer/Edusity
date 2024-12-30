import React from 'react'
import './Programs.css'
import { images } from "../../assets/images";
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={images.program_1} alt="" />
            <div className="caption">
                <img src={images.program_icon_1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={images.program_2} alt="" />
            <div className="caption">
                <img src={images.program_icon_2} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={images.program_3} alt="" />
            <div className="caption">
                <img src={images.program_icon_3} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs