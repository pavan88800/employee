import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark	">
				<Link to="/" className="navbar-brand">
					Employee
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link to="/" className="nav-link">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item active">
							<Link to="/about" className="nav-link">
								About Project <span className="sr-only">(current)</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</Fragment>
	);
};
export default Navbar;
