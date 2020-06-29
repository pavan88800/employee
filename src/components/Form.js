import React, { Fragment } from 'react';
import '../App.css';
const Form = (props) => {
	return (
		<Fragment>
			{props.emps.length > 1 && <h2 className="mt-4 text-center">Employee Data </h2>}
			{props.emps.map((user) => (
				<div className="card text-left mx-auto mt-5 mb-5" id="show" style={{ width: '600px' }}>
					<ul>
						<li>
							{'Employee Id  : '} {`# ${user.id}`}
						</li>
						<li>
							{'Employee Name  : '} {user.emp}
						</li>
						<li>
							{'designation: '} {user.designation}
						</li>

						<li>
							{'date: '} {user.date}
						</li>

						{user.users.map((data) => (
							<li>
								{'Number: '}
								{data.number} {'Contact: '}
								{data.contact}
							</li>
						))}

						{user.skills.map((data) => (
							<li>
								{'Skills: '}
								{data.skills}
							</li>
						))}
					</ul>
				</div>
			))}
		</Fragment>
	);
};

export default Form;
