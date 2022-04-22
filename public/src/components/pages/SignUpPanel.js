import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const SignUpPanel = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const signUpAccountRoute  = () => {
		navigate('/sign-up');
	}

	const loginPanelRoute = ()  => {
		navigate('/login');
	}
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

			<button onClick={signUpAccountRoute}>Sign Up</button>
			<button onClick={loginPanelRoute}>Already have an account? Log in</button>				
		</div>
	);
}