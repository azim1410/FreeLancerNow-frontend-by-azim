import React from 'react'
import { useState } from 'react'
import { gigs } from '../../data';
import GigCard from '../../components/gigCard/GigCard';
import "./Gigs.scss"
const Gigs = () => {
  const[open ,setOpen] = useState(false);
  const[sort , setSort] = useState("sales");

  const reSort = (type) =>{
    setSort(type)
    setOpen(false)

  }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FLN - GraphicDesign</span>
        <h1>AI Artists</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolor maiores labore voluptatem numquam reprehenderit eveniet corporis dolorum assumenda praesentium.</p>
      </div>
      <div className="menu">
        <div className="left">
          <span>Budget</span>
          <input type="text" placeholder='min' />
          <input type="text" placeholder='max' />
          <button>Apply</button>
        </div>
        <div className="right">
          <span className="sortBy">Sort By</span>
          <span className="sortType">{sort === 'sales' ? "Best Selling" : "Newest"}</span>
          <h1 onClick={() => setOpen(!open)}>+</h1>
          {open &&(
            <div className="rightMenu">
            {sort == "sales" ? <span onClick={()=>reSort("createdAt")}>Newest</span> :
            <span onClick={()=>reSort("createdAt")}>bestselling</span>}
          </div>
          )}
        </div>
      </div>
      <div className="cards">
        {gigs.map((gig) =>(
          <GigCard key={gig.id} item={gig} />
        ))}
      </div>
    </div>
  )
}

export default Gigs