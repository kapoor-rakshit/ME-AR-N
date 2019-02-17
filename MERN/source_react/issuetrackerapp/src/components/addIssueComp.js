
import React, { Component } from 'react';      // Member imports using {  }
import  {withRouter} from 'react-router-dom';

import IssueService from './issueService';

import {
	Jumbotron,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Container
} from 'reactstrap';

class AddIssueComp extends Component {

	 constructor(props) {
      super(props);
      
      this.saveIssue = this.saveIssue.bind(this);
    }

    saveIssue(event){
    	 event.preventDefault();
      	 var issue = {};
      	 issue.desc = this.refs.desc.value;
      	 issue.seve = this.refs.seve.value;
      	 issue.stat = this.refs.stat.value;
      	 issue.datecr = this.refs.datecr.value;
      	 issue.daters = this.refs.daters.value;

    	IssueService.createIssue(issue);
        this.props.history.push('/issues');
    }

	render(){
		return(
			<Container>
				<Jumbotron>
    			<h1>Add Issue</h1>
    			<Form onSubmit={this.saveIssue}>
      				<FormGroup>
        				<Label for="desc">Description</Label>
        				<Input type="text" className="form-control" id="desc" ref="desc" required minLength="3"/>
      				</FormGroup>
      				<FormGroup>
        				<Label for="severity">Severity</Label>
        				<Input type="select" className="form-control" id="severity" ref="seve">
          					<option value="minor">Minor</ option>
          					<option value="major">Major</ option>
          					<option value="critical">Critical</ option>
        				</Input>
      				</FormGroup>
      				<FormGroup>
        				<Label for="status">Status</Label>
        				<Input type="select" className="form-control" id="status" ref="stat">
            				<option value="open">Open</option>
            				<option value="in progress">In Progress</ option>
            				<option value="closed">Closed</ option>
          				</ Input>
      				</FormGroup>
      				<FormGroup>
        				<Label for="datecr">Date Created</Label>
        				<Input className="form-control" type="date" id="datecr" ref="datecr" required/>
      				</FormGroup>
      				<FormGroup>
        				<Label for="daters">Expected Resolution Date</Label>
        				<Input className="form-control" type="date" id="daters" ref="daters" required/>
      				</FormGroup>
      				<Button type="submit" color="primary">Submit</ Button>
      				<br/><br/>
    			</Form>
				
  				</Jumbotron>
			  </Container>
			
			);
	}

}

export default withRouter(AddIssueComp);

