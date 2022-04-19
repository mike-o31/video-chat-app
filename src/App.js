import React from 'react';
import ChatInterface from './components/ChatInterface';
import Login from './components/Login';
import UserList from './components/UserList';
import VideoInterface from './components/VideoInterface';

function App() {
	return (
		<div>
			<Login />
			<UserList />
			<ChatInterface />
			<VideoInterface />
		</div>
	);
}

export default App;
