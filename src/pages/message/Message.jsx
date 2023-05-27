import React from 'react'
import { Link } from 'react-router-dom'
import "./Message.scss"
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumds">
          <Link to="/messages">Messages -- Chat</Link>
        </span>
        <div className="messages">
          <div className="item">
            <img src="../../../public/img/man.png" className='msgpp' alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis voluptate debitis quasi cumque repudiandae, quia unde aliquam expedita nihil, corrupti nostrum quibusdam facere. Incidunt recusandae officia deserunt hic harum!</p>
          </div>
          <div className="item owner">
            <img src="../../../public/img/man.png" className='msgpp' alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis voluptate debitis quasi cumque repudiandae, quia unde aliquam expedita nihil, corrupti nostrum quibusdam facere. Incidunt recusandae officia deserunt hic harum!</p>
          </div>
          <div className="item">
            <img src="../../../public/img/man.png" className='msgpp' alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis voluptate debitis quasi cumque repudiandae, quia unde aliquam expedita nihil, corrupti nostrum quibusdam facere. Incidunt recusandae officia deserunt hic harum!</p>
          </div>
          <div className="item owner">
            <img src="../../../public/img/man.png" className='msgpp' alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis voluptate debitis quasi cumque repudiandae, quia unde aliquam expedita nihil, corrupti nostrum quibusdam facere. Incidunt recusandae officia deserunt hic harum!</p>
          </div>
          <div className="item">
            <img src="../../../public/img/man.png" className='msgpp' alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis voluptate debitis quasi cumque repudiandae, quia unde aliquam expedita nihil, corrupti nostrum quibusdam facere. Incidunt recusandae officia deserunt hic harum!</p>
          </div>
          <div className="item owner">
            <img src="../../../public/img/man.png" className='msgpp' alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem perferendis voluptate debitis quasi cumque repudiandae, quia unde aliquam expedita nihil, corrupti nostrum quibusdam facere. Incidunt recusandae officia deserunt hic harum!</p>
          </div>
        </div>
        <hr />
        <div className="write">
            <textarea name="" placeholder="write a message.. " id="" cols="30" rows="10"></textarea>
            <button>Send</button>
          </div>
      </div>
    </div>
  )
}

export default Message