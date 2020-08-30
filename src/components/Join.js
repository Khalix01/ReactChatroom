import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Join.css'

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const checkEmpty = (event) => {
    	if((!name||!room)){
    		event.preventDefault();
    		alert("Username or Room ID is blank");
    	}
  	}
	return(
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Join</h1>
				<div>
					<input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
				</div>
				<div>
					<input placeholder="Room" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} />
				</div>
				<Link onClick={event =>	checkEmpty(event)} to={`/ReactChatroom/chat?name=${name}&room=${room}`}>
					<button className='button' type="submit">Sign In</button>
				</Link>
			</div>
		</div>
	)
};

export default Join