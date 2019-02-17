
import React, { Component } from 'react';      // Member imports using {  }

import {
	Jumbotron,
	Container
} from 'reactstrap';

class HomeComp extends Component {

	render(){
		return(
			<Container>
				<Jumbotron>
				
			<h1>Welcome to IssueTrackerApp</h1>
			<p>we are right here at home</p>
				
				</Jumbotron>
			</Container>
			
			);
	}

}


export default HomeComp;

