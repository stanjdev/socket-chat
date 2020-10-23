import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users, name }) => (
  <div className="textContainer">
    <div>
      <h1>Real-time Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Made with React, Express, Node.js, and Socket.IO <span role="img" aria-label="emoji">😊</span></h2>
    </div>
    {
      users ? (
        <div>
          <h1>Currently in chatroom: </h1>
          <div className="activeContainer">
            <h2>
              {users.map((user, i) => <div className="activeItem" key={i}>{user.name}<img src={onlineIcon} alt="user is online"/></div>)}
            </h2>
          </div>
        </div>

      )
      : null
    }
  </div>
)

export default TextContainer;