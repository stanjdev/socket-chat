// https://css-tricks.com/build-a-chat-app-using-react-hooks-in-100-lines-of-code/
// https://github.com/akash-joshi/socket-server
// https://www.valentinog.com/blog/socket-react/ - explains Node.js, express 

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import useSocket from 'use-socket.io-client'; // https://socket.io/docs
// import {useImmer} from 'use-immer';
import './App.css';
// import socketIOClient from "socket.io-client";

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

// const ENDPOINT = "localhost:5000";
// const socket = socketIOClient(ENDPOINT);


// const Messages = props => props.data.map(m => m[0] !== '' ? 
// (<li key={m[0]}><strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div></li>)
// : (<li key={m[1]} className="update">{m[1]}</li>) );

// const Online = props => props.data.map(m => <li id={m[0]}>{m[1]}</li>);


function App() {
  // const [id, setId] = useState("");
  // const [nameInput, setNameInput] = useState("");
  // const [room, setRoom] = useState("");
  // const [input, setInput] = useState("");
  // // const [socket] = useSocket(ENDPOINT); // tripping out. Makes a bunch of error requests
  // // socket.connect();
  // // console.log(socket);
  // const [response, setResponse] = useState("");

  // const [messages, setMessages] = useImmer([["dog", "woof"], ["cow", "bark"]]);
  // const [online, setOnline] = useImmer([]);

  
  // useEffect(() => {
    
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });

  //   socket.on('message que', (nick, message) => {
  //     setMessages(draft => {
  //       draft.push([nick, message])
  //     })
  //   });

  //   socket.on('update', message => setMessages(draft => {
  //     draft.push(['', message]);
  //   }));

  //   socket.on('people-list', people => {
  //     let newState = [];
  //     for (let person in people) {
  //       newState.push([people[person].id, people[person].nick]);
  //     }
  //     setOnline(draft => {draft.push(...newState)});
  //     console.log(online);
  //   });

  //   socket.on('add-person', (nick, id) => {
  //     setOnline(draft => {
  //       draft.push([id, nick])
  //     })
  //   });

  //   socket.on('remove-person', id => {
  //     setOnline(draft => draft.filter(m => m[0] !== id))
  //   });

  //   socket.on('chat message', (nick, message) => {
  //     setMessages(draft => {draft.push([nick, message])})
  //     console.log("chat msg triggered!")
  //   });

    
  //   return () => socket.disconnect();
  // }, [online, setMessages, setOnline]);



  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log([nameInput, room]);
  //   if (!nameInput) {
  //     return alert("Name can't be empty!");
  //   }
  //   setId(nameInput);
  //   socket.emit("join", nameInput, room);
  // };


  // const handleSend = e => {
  //   e.preventDefault();
  //   console.log(input)
  //   if (input !== '') {
  //     socket.emit('chat message', input, room);
  //     setInput('');
  //   }
  // };


  return  (
        <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat} />
        </Router>
  );
}


export default App;



