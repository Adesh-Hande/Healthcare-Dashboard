import React from "react";


import '../../styles/AnatomySection.css';

const AnatomySection = () => {

  return (
    <>
      <div id="anatomy-box" style={{ border: "", display: "flex" }}>
        <div className="humanbody">
          <img src="./src/assets/images/humanbody.jpg" alt="" />
          <div id="note-heart" className="heart-note note"><img style={{ width: "20px" }} src="./src/assets/images/red-heart.png" alt="" />Healthy Heart</div>
          <div id="note-leg"className="leg-note note"><img style={{ width: "15px" }} src="./src/assets/images/leg.png" alt="" />Healthy Leg</div>
          <div id="square-leg" className="square-leg"></div>
          <div id="square-heart" className="square-heart"></div>
          <div className="search"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
            <path d="M17 17L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.5 11L14.5 11M11 7.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg></div>
        </div>


        <div  id="humanpart-box" className="humanpart">

          <div className="lungs">
            <div >
              <img src="./src/assets/images/lungs.jpg" alt="" /><span>Lungs</span>
            </div>
            <p style={{ fontSize: "12px" }}>Date:26 Oct 2021</p>
            <div className="bar ">
              <div className="bar-containt"></div>
            </div>
          </div>

          <div className="lungs teeth">
            <div >
              <img src="./src/assets/images/teeth1-.png" alt="" /><span>Teeth</span>
            </div>
            <p style={{ fontSize: "12px" }}>Date:26 Oct 2021</p>
            <div className="bar ">
              <div className="bar-containt"></div>
            </div>
          </div>

          <div className="bone lungs">
            <div >
              <img style={{ mixBlendMode: "darken" }} src="./src/assets/images/bone.jpg" alt="" /><span>Bone</span>
            </div>
            <p style={{ fontSize: "12px" }}>Date:26 Oct 2021</p>
            <div className="bar ">
              <div className="bar-containt"></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AnatomySection