import React from 'react'
import './Featured.scss'

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Find Your Client and Earn QUICK With <i>FreeLance.Now</i></h1>
                <hr />
                <div className="search">
                   <input type="text" placeholder='Search'/>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Designer</button>
                    <button>Data Analyst</button>
                    <button>Cloud Dev</button>
                    <button>Android Developer</button>
                </div>
            </div>
            <hr />
    
            
        </div>
    </div>
  )
}

export default Featured