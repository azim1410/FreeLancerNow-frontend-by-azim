import React from 'react'
import "./gigCard.scss"
import { Link } from 'react-router-dom'

const GigCard = ({item}) => {
  return (
    <div className="outerbox">
    <Link to="/gig/123" className='Gcontainer'>
        <div className="gigCard">
            <img src={item.img} alt="" />
            <div className="info">
                <div className="user">
                    <img src={item.pp} alt="" />
                    <span>{item.username}</span>
                </div>
            </div>
            <p>{item.desc}</p>
            <div className="star">
                <span>Rating - {item.star}</span>
            </div>
            <div className="details">
                <span>starting at</span>
                <span>{item.price}</span>
            </div>
        </div>
    </Link>
    </div>
    
    
  )
}

export default GigCard