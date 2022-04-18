import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfoMain = () => {
	// We'll use the history to navigate the user
	// programmtically later on (we're not using it yet)

	const history = useNavigate();

	// There states are bound to the values of the text inputs
	// on the page (see JSX below).
	const [favoriteFood, setFavoriteFood] = useState('');
	const [hairColor, setHairColor] = useState('');
	const [bio, setBio] = useState('');


	// There state variables control whether or not we show
	// the success and error message sections after making
	// a network requrest (see JSX below).

	const [showSuccessMessage, setShowSuccessMessge] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	// This useEffect hook automatically hides the
	// success and error messeages after 3 seconds when they're shown.
	// Just a little user interface improvement.

	useEffect(() => {
		if(showErrorMessage || showSuccessMessage) {
			setTimeout(() => {
				setShowErrorMessage(false);
				setShowSuccessMessge(false);
			}, 3000);
		}
	}, [showSuccessMessage, showErrorMessage]);

	const saveChanges = () => {
		// Send a request to the server to.
		// update the user's info with any changes we've
		// made to the text input values
		console.log(`Logout functionality not impremented yet`);
	}

	const logOut = () => {
		// We'll want to log the user out here
		// and send them to the 'login page'
		console.log(`logout functionality not impremented yet`);
	}

	const resetValues = () => {
		// Reset the text input values to
		// their starting values (the data we loaded from the server)
		console.log('Reset functionality not impremented yet');
	}

	// And here we have the JSX for our component. It's pretty straightforward
	return(
		<div className="content-container">
			<h1>Info for .........</h1>
			{
				showSuccessMessage && <div className="success">Successfunlly saved user data</div>
			}

			{
				showErrorMessage && <div className="fail">Uh oh. Something went wrong and we could'nt save changes</div>
			}
			<label>
				Favoriate Food:
				<input
					onChange={(e) => setFavoriteFood(e.target.value)}
				/>
			</label>

			<label>
				Main Color
				<input 
					onChange={e => setHairColor(e.target.value)}
					value={hairColor}
				/>
			</label>
			<label>
				Bios:
				<input
					onChange={e => setBio(e.target.value)}
					value={bio}
				/>
				<hr/>
				<button onClick={saveChanges}>Save Changes</button>
				<button onClick={resetValues}>Reset Values</button>
				<button onClick={logOut}>Log Out</button>
			</label>
		</div>
	)
}

export default UserInfoMain;