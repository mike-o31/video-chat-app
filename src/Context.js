import React, { createContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();
const socket = io('http://localhost:3000');

const iceConfig = {
	iceServers: [{ urls: 'stun:stun4.1.google.com:19302' }],
};
const peerConnection = new RTCPeerConnection(iceConfig);

const Context = ({ children }) => {
	const [stream, setStream] = useState();
	const [myID, setMyID] = useState('');
	const [username, setUsername] = useState('');
	const [input, setInput] = useState('');
	const [inputDisabled, setInputDisabled] = useState(false);

	const mediaConstraints = { audio: true, video: { facingMode: 'user' } };
	const localVideo = useRef();
	const remoteVideo = useRef();

	useEffect(() => {
		socket.on('socketid', (id) => {
			setMyID(id);
		});
	}, []);

	const handleLogin = (e) => {
		e.preventDefault();

		if (!input) {
			alert('You need a name...');
			console.log('No Username');
		} else {
			setInputDisabled(true);
			setUsername(input);
		}
		setInput('');

		// socket.emit('user', { username, userID });
	};

	const offer = () => {};

	const answer = () => {};

	return (
		<SocketContext.Provider
			value={{ handleLogin, myID, username, input, setInput, inputDisabled }}>
			{children}
		</SocketContext.Provider>
	);
};

export { Context, SocketContext };
