
import React, { Component } from 'react';      // Member imports using {  }
import { Link } from 'react-router-dom';

import{
    Jumbotron,
    Container
} from 'reactstrap';

class NotFoundComp extends Component {

	render() {
        return (
            <Container>
            <Jumbotron>
                <h1>Not Found</h1>
                <p>The requested page was not found.</p>
                <p><Link to="/">Back to Home</Link></p>
            </Jumbotron>
            </Container>
        );
    }

}


export default NotFoundComp;

