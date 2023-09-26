import React, { Component } from 'react'

export default class Courses extends Component {
  render() {
    return (      
      <div className='coursesSection'>
        <div className="leftSide">
            <h3 className="coursesTitle">
              Each course of the <br /> program comprises:
            </h3>
            <h4>
              Tech Skills:
            </h4>
            <p>
            Simple Text. Lorem agdgd agdgeehh age ahhahha ehhhe ahhe ahhhhhe hahhefbbd ahdgdggve avdgdgve avggvd <br />
            gdgfdtaftdyfg dhdgyavdvy dgatydf advtdfyd adgydgfd dgtydf.
            </p>
            <a href="#" className="btn">LEARN MORE</a>
          </div>

          <div className="middleSide">
            <img src="" alt="courses" />
          </div>

          <div className="rightSide">
            <div className="rightTop">
              <h1>65%</h1>
              <h3>Sample Headline</h3>
              <p>Sample Text. Click to Select Text Element</p>
            </div>
            
            <div className="rightBottom">
              <h1>20%</h1>
              <h3>Sample Headline</h3>
              <p>Sample Text. Click to Select Text Element</p>
            </div>
          </div>
        </div>
    )
  }
}
