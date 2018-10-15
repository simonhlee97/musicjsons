import React from "react";
import '../css/styles.css';

const Api = "https://raw.githubusercontent.com/dariusk/corpora/master/data/music/female_classical_guitarists.json";

export default class Guitarists extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			guitarists: [],
			isLoading: false
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		fetch(Api)
			.then(response => response.json())
			.then(fetchedData => this.setState({ guitarists: fetchedData.data, isLoading: false }))
			.then(this.state.guitarists.splice(20,1))
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		const { guitarists, isLoading } = this.state;
		// console.log(this.state.guitarists);
		this.state.guitarists.splice(20,1);
		// splice -> (remove Index #20, 1 item);
		// console.log(this.state.guitarists);

		if (isLoading) {
			return <div className="wraploader">
          <div className="loader" />
        </div>;
		}

		return (
			<div className="container">
				<h1>Female Classical Guitarists</h1>
				<h5>source: Wikipedia</h5>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Name</th>
							<th>Wiki</th>
						</tr>
					</thead>
					<tbody>
						{guitarists.map(artist => <tr key={artist.name} className="table-info">
							<td>{artist.name}</td>
							<td><a href={artist.wiki}><span id="wiki">{artist.wiki}</span></a></td>
						</tr>)}
					</tbody>
				</table>
				
			</div>
		);
	}
}
