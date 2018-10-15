import React from 'react';
import '../css/styles.css';
const Api = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/music/rock_hall_of_fame.json';
export default class RockHall extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			artists: [],
			isLoading: false
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });

		fetch(Api)
			.then(response => response.json())
			.then(data => this.setState({ 
				artists: data.artists,
				isLoading: false
			}))		
			.catch(function(error) {
				console.log(error);
			});
	}

	render() {
		const {artists, isLoading} = this.state;
		if (isLoading) {
    		return <div className='wraploader'><div className="loader" /></div>;
    	}
		return (
			<div className="container">
				<h1>Rock and Roll Hall of Fame</h1>
				<h5>source: Wikipedia</h5>
				<table className="table table-hover">
				<thead>
				<tr>
					<th>year</th>
					<th>Name</th>
				</tr>
				</thead>
				<tbody>
				{artists.map(artist => <tr key={artist.name} className="table-info">
					<td>{artist.year}</td>
					<td>{artist.name}</td>
					</tr>)}
				</tbody>
				</table>
			</div>
		);
	}
}