import React, { Component, Fragment } from 'react';

// State For Employee Form
class Employee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emp: '',
			designation: '',
			skills: [{}],
			date: '',
			id: Math.floor(Math.random() * 100 + 1),
			users: [{ number: '', contact: 'primary ' }],
		};
	}

	// Onchange for Getting value from input filed
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// Submiting From Data
	onsubmit = (e) => {
		e.preventDefault();
		this.props.empUser(this.state);
		this.setState({
			emp: '',
			designation: '',
			date: '',
			skills: [{}],
			id: Math.floor(Math.random() * 100 + 1),
			users: [{ number: '', contact: ' ' }],
		});
	};

	//  Add click for to add Number Contact
	addClick = () => {
		this.setState((prevState) => ({
			users: [...prevState.users, { number: '', contact: '' }],
		}));
	};

	addSkills = () => {
		this.setState((prevState) => ({
			skills: [...prevState.skills, {}],
		}));
	};
	//  Hnalde Number Contact in Users
	handleChange(i, e) {
		const { name, value } = e.target;
		let users = [...this.state.users];
		users[i] = { ...users[i], [name]: value };
		this.setState({ users });
	}
	//  handleSkills
	handleSkills(i, e) {
		const { name, value } = e.target;
		let skills = [...this.state.skills];
		console.log(skills);
		skills[i] = { ...skills[i], [name]: value };
		this.setState({ skills });
	}

	// Creating Dynamic From
	createUI = () => {
		return this.state.users.map((from, i) => (
			<div className="row" key={i}>
				<div className="col">
					<div className="form-group ">
						<select
							id="inputState"
							className="form-control"
							name="contact"
							value={from.contact || ''}
							onChange={this.handleChange.bind(this, i)}
						>
							<option selected>primary </option>
							<option>emergency</option>
						</select>
					</div>
				</div>
				<div className="col">
					<input
						type="number"
						name="number"
						className="form-control"
						placeholder="Phone Number"
						value={from.number || ''}
						onChange={this.handleChange.bind(this, i)}
					/>
				</div>{' '}
				<i className="fas fa-plus-circle" style={{ marginTop: '9px', fontSize: '25px' }} onClick={this.addClick} />
			</div>
		));
	};

	// Creating Dynamic From Skills
	skillsUI = () => {
		return this.state.skills.map((from, i) => (
			<div className="row mb-2" key={i}>
				<div className="col">
					<input
						type="text"
						className="form-control"
						placeholder="Skills"
						name="skills"
						value={from.skills || ''}
						onChange={this.handleSkills.bind(this, i)}
					/>
				</div>{' '}
				<i className="fas fa-plus-circle" style={{ marginTop: '9px', fontSize: '25px' }} onClick={this.addSkills} />
			</div>
		));
	};
	render() {
		return (
			<Fragment>
				<h1 className="display-4 mt-3 text-center">Employee Data </h1>
				<div className="card mt-5 mx-auto" style={{ width: '700px' }}>
					<div className="card-body">
						<form onSubmit={this.onsubmit}>
							<div className="form-group ">
								<input
									type="text"
									name="emp"
									className="form-control"
									aria-describedby="emailHelp"
									placeholder="Enter Name * "
									value={this.state.emp}
									onChange={this.onChange}
									required="true"
								/>
							</div>
							<div className="form-group ">
								<input
									type="text"
									name="designation"
									className="form-control"
									aria-describedby="emailHelp"
									placeholder="Enter Designation *"
									value={this.state.designation}
									onChange={this.onChange}
									required="true"
								/>
							</div>
							{this.createUI()} {this.skillsUI()}
							<div className="form-group mt-3">
								<input
									type="date"
									name="date"
									className="form-control"
									aria-describedby="emailHelp"
									placeholder="Enter Date"
									value={this.state.date}
									onChange={this.onChange}
								/>
							</div>
							<button className="btn btn-primary btn-block ">View Data</button>
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default Employee;
