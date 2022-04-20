import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPanel = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const onLoginClicked = () => {
		alert(`login`);
	}

	const onForgotPasswordClicked = () => {
		alert('forgot password');
		navigate('/reset-password');
	}

	const onSignUpClicked = () => {
		alert('signup clicked');
		navigate('/sign-in');
	}
	return (
		<div className="content-container">
			<h1>Log In</h1>
			{ errorMessage && <div className="fail">{errorMessage}</div>}
			<input
				value={email}
				type="text"
				placeholder="someone@gmail.com"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>

			<input
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				value={password}
				type="password"
				placeholder="password"
			/>

			<button 
				disabled={!email || !password}
				onClick={onLoginClicked}>Log In</button>
			<button onClick={onForgotPasswordClicked}>Forgot your password?</button>
			<button onClick={onSignUpClicked}>Don't have an account? Sign Up</button>
		</div>
	);
}

export default LoginPanel;