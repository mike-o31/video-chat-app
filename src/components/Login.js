import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const Login = () => {
	const { handleLogin, myID, username, input, setInput, inputDisabled } =
		useContext(SocketContext);

	return (
		<div style={{ border: '1px solid black' }}>
			<h2>My name: {username}</h2>
			<h2>My ID: {myID}</h2>
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
