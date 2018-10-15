import React, { Component } from 'react';

class Home extends Component {
	render() {
		return <div className="container">
        <div class="card border-success mb-3" style={{maxWidth: '80%'}}>
          <div class="card-header">Website Info</div>
          <div class="card-body">
            <h4 class="card-title">project info</h4>
            <p class="card-text">
				I wanted to build a project where I could practice using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank" rel="noopener noreferrer">Fetch API</a> and the <a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">Axios</a> library inside a React app. I found a very nice collection of JSON formatted data at <a href="https://github.com/dariusk/corpora" target="_blank" rel="noopener noreferrer">dariusk's GitHub</a>.
            </p>
            <h4 class="card-title">tools</h4>
            <p class="card-text">
				<li><a href='https://reactjs.org/docs/create-a-new-react-app.html' target="_blank" rel="noopener noreferrer">create-react-app</a></li>
				<li><a href='https://github.com/ReactTraining/react-router' target="_blank" rel="noopener noreferrer">React Router</a></li>
				<li><a href='https://bootswatch.com/flatly/' target="_blank" rel="noopener noreferrer">bootswatch (Flatly Theme)</a></li>
			</p>
          </div>
        </div>
      </div>;
	}
}

export default Home;

