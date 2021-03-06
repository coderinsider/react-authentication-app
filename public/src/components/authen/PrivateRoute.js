import { Navigate, Outlet, Route } from 'react-router-dom';

export const PrivateRoute = props => {
	const user = 1; // determine if authorized, from context or however you're doing it
	
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ? <Outlet {...props}/> : <Navigate to="/login" />;


}