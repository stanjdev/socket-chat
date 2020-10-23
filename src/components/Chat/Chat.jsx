import React, { useState, useEffect } from 'react';
import queryString from 'query-string'; // retrieving data from URL
import io from 'socket.io-client';

import "./Chat.css";

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';


let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  // const ENDPOINT = 'localhost:5000'; -- for local development mode 
  const ENDPOINT = 'https://chat-server-web-socket.herokuapp.com/'; // for production mode with my newly pushed heroku server

  // First useEffect hook: for USERS JOINING and DISCONNECTING
  useEffect(() => {
    const { name, room } = queryString.parse(location.search) // location comes from react-router 

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);
    console.log("client side emit!")
    socket.emit('join', { name, room }, () => { // emitting events from client-side
       
    });

    // CLEAN UP THE EFFECT - good if the component ever toggle disappears or navigate to a new page. This way we effectively close the connection when the component unmounts.
    return () => {
      socket.emit("disconnect");
      socket.off(); // turns this instance of socket io OFF.
    }
  }, [ENDPOINT, location.search])
  

  
  // for HANDLING MESSAGES
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]); // don't overwrite all previous messages, just spread existing messages and add this new message on top of the rest.
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);


  // function for sending messages
  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage('')) // this 3rd argument is the callback() method from the server.js. It just cleans/resets the message.
    }
    console.log(message, messages);
  }
  

  return (
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={room}/>
          <Messages messages={messages} name={name}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
          <TextContainer users={users} />
      </div>
  )
}

export default Chat;


/* 
Old Chat
    <section style={{ display: "flex", flexDirection: "row" }}>
      <ul id="messages"><Messages data={messages} /></ul>
      <span id="online" role="img" aria-label="this is an emoji!">{" "}&#x1f310; : <Online data={online}/>{" "}</span>
      <div id="sendform">
        <form onSubmit={e => handleSend(e)} style={{ display: "flex" }}>
          <input id="m" onChange={e => setInput(e.target.value.trim())} value={input}/>
          <button style={{ width: "75px" }} type="submit">Send</button>
        </form>
      </div>
    </section>

*/