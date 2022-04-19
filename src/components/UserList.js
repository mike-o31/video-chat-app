import React, { useState } from 'react';

const UserList = () => {
	// const [userList, setUserList] = useState([]);

	return (
		<div
			style={{
				border: '1px solid black',
				width: '250px',
				height: '100vh',
			}}>
			<h1 style={{ borderBottom: '1px solid black' }}>User List</h1>
			{/* {userList.map((user) => (
				<li>{user}</li>
			))} */}
		</div>
	);
};

export default UserList;
