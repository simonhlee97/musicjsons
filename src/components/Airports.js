import React from 'react';
import axios from 'axios';
export default class Airports extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			airports: []
		};
	}

	componentDidMount() {
		axios.get("https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/us_airport_codes.json")
    		.then(response => {
				this.setState({ airports: response.data.states })
				console.log(response.data.states[0]);
			})
			.catch(function(error) {
    			console.log(error);
    		});
	}

	render() {
		// const airports = this.state.airports;

		return (
			<p>
				Hello Airports!
			</p>
		);
	}
}