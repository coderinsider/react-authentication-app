import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const SignUpPanel = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="content-container">
			<h1>Sign Up</h1>

			<input
				value={email}
				type="text"
				placeholder="someone@gmail.com"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<input
				value={password}
				type="password"
				placeholder="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<input
				value={password}
				type="password"
				placeholder="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>		
			<hr/>

			<button>Sign Up</button>
			<button>Already have an account? Log in</button>				
		</div>
	);
}