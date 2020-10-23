import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return(
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value) } /></div>
        <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} onKeyPress={event => event.key === "Enter" ? alert("click the button, fool!") : null}/></div>
        <Link 
          onClick={event => (!name || !room) ? event.preventDefault() : null} 
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit" >Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;


/* 
OLD JOIN PAGE
<p>Current time: <time dateTime={response}>{response}</time></p>
        <h3>
          Enter your name and create a room!
        </h3>

        <div style={{ textAlign: "center", margin: "7vh auto", padding: "5vmin 0", width: "70%" }}>
          <form onSubmit={event => handleSubmit(event)} style={{display: "flex", flexDirection: "column", width: "20em", margin: "1em auto"}}>
            <input 
              id="name" 
              onChange={e => setNameInput(e.target.value.trim())}
              required
              placeholder="What is your name .."
              value={nameInput}
            />
            <input 
              id="room" 
              onChange={e => setRoom(e.target.value.trim())}
              placeholder="What is your room .." 
              value={room}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>

*/