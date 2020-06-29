import React, { Fragment, Component } from 'react';

class Data extends Component {
	//  used to downlaod Data
	download = () => {
		if (this.props.emps.length === 0) {
			alert('No Data to downlaod File ');
		} else {
			const element = document.createElement('a');
			const json = { text: JSON.stringify(this.props.emps) };
			const file = new Blob([json.text], { type: 'text/json' });
			element.href = URL.createObjectURL(file);
			element.download = 'myFile.json';
			document.body.appendChild(element);
			element.click();
		}
	};

	render() {
		return (
			<div>
				<div className="container mx-auto mt-4" style={{ width: '200px' }}>
					<button type="button" className="btn btn-light" data-toggle="modal" id="exportJSON" onClick={this.download}>
						Download JOSN
					</button>
				</div>
			</div>
		);
	}
}

export default Data;
