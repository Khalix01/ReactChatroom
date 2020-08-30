import React , { useState, useEffect }from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Infobar from './InfoBar.js'
import Input from './Input.js'
import Messages from './Messages.js'

import '../css/Chat.css'

let socket;

const Chat = ({location}) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const SERVER = 'https://react-chatroom-server.herokuapp.com/'
	useEffect (() => {
		const { name, room } = queryString.parse(location.search);

		socket=io(SERVER);

		setName(name);
		setRoom(room);
		socket.emit('join',{name:name,room:room},() => { });

		return () => {
			socket.emit('disconnect');
			socket.off();
		}
	},[SERVER,location.search]);

	useEffect(() => {
		socket.on('message',(message)=>{
			setMessages([...messages,message]);
		});
	}, [messages]);

	const sendMessage = (event) => {
		event.preventDefault();

		if(message) {
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	}



	return(
		<div className="outerContainer">
			<div className="container">
				<Infobar room={room}/>
				<Messages messages={messages} name={name} />
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
			</div>
		</div>
	)
};

export default Chat 