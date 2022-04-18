import { NavLink } from "react-router-dom";
const HeaderPanel = () => {
	return (
		<section>
			<h1>Welcome</h1>
			
			<nav>
				<NavLink to="/" activeClassName="selected">Home</NavLink>
				<NavLink to="about">About</NavLink>									
			</nav>
			
		</section>
	);
}
export default HeaderPanel;