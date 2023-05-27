import React from 'react'
import { Link } from 'react-router-dom'
import "./Messages.scss"
const Messages = () => {
  const currentUser = {
    id:1,
    username:"Demo Seller",
    isSeller:false
};

const message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi magni laborum illum recusandae. Voluptate possimus natus corrupti cum officia a!"


  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
          <td>
            Buyer 1
            
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
            
          </tr>
          <tr className='active'>
          <td>
            Buyer 1
            
            </td>
            <td><Link to='/message/123' className='link'>{message.substring(0,100)}...</Link></td>
            <td>1day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
            
          </tr>
          <tr>
          <td>
            Buyer 1
            
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
            
          </tr>
          <tr>
          <td>
            Buyer 1
            
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
            
          </tr><tr>
          <td>
            Buyer 1
            
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
            
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages