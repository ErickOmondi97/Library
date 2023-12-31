import React from 'react'

//Imported Icons
import { AiOutlineArrowRight } from 'react-icons/ai'

function Cards() {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <div className="cardContent">
            <img src="" alt="cardIcon" className='cardIcon'/>
            <h2>Visualize it</h2>
            <p>
            Sample text. Click to select the text <br /> box. Click again or double click 
            to <br /> start editing the text.
            </p>
            <AiOutlineArrowRight className="arrowRight" />
          </div>
        </div>
        <div className="card">
          <div className="cardContent">
            <img src="" alt="cardIcon" className='cardIcon'/>
            <h2>Create it</h2>
            <p>
            Sample text. Click to select the text <br /> box. Click again or double click 
            to <br /> start editing the text.
            </p>
            <AiOutlineArrowRight className="arrowRight" />
          </div>
        </div>
        <div className="card">
          <div className="cardContent">
            <img src="" alt="cardIcon" className='cardIcon'/>
            <h2>Grow it</h2>
            <p>
            Sample text. Click to select the text <br /> box. Click again or double click 
            to <br /> start editing the text.
            </p>
            <AiOutlineArrowRight className="arrowRight" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards