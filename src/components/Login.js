import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const Login = () => {
	const [input, setInput] = useState('');
	const [username, setUsername] = useState('');
	const [userID, setUserID] = useState('');
	const [user, setUser] = useState({});
	const [inputDisabled, setInputDisabled] = useState(false);

	socket.on('socketid', (id) => {
		setUserID(id);
	});

	const handleLogin = (e) => {
		e.preventDefault();

		if (!input) {
			alert('You need a name...');
			console.log('No Username');
		} else {
			// setInputDisabled(true);
			setUsername(input);
			console.log(username);
			setUser({
				userID: userID,
				username: username,
			});
		}
		setInput('');

		socket.emit('user', { username, userID });
	};

	return (
		<div style={{ border: '1px solid black' }}>
			<form onSubmit={handleLogin}>
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					disabled={inputDisabled}
				/>
				<button type='submit' disabled={inputDisabled}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
