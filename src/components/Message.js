import React from 'react'
import ReactEmoji from 'react-emoji'

import '../css/Message.css';

const Message = ({message: {user,text},name}) => {
	let isSentByCurrentUser = false, isAdmin=false;
	const trimmedName = name.trim().toLowerCase();
	if(user === trimmedName) isSentByCurrentUser = true;
	if('admin' === user ) isAdmin = true;
	if(isSentByCurrentUser){
		return(
			<div className="messageContainer justifyEnd">
				<p className="sentText pr-10">{trimmedName}</p>
				<div className="messageBox backgroundBlue">
					<p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
				</div>
	        </div>
        );
    }
    else if(isAdmin){
    	return(
			<div className="adminMessage">
				<p className="adminText colorLight">{ReactEmoji.emojify(text)}</p>
			</div>
        );
    }
    else {
    	return(
			<div className="messageContainer justifyStart">
				<div className="messageBox backgroundLight">
					<p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
				</div>
				<p className="sentText pl-10">{user}</p>
	        </div>
        );
    }
}; 

export default Message