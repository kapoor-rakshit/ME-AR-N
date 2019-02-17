
import React, { Component } from 'react';      // Member imports using {  }
import {withRouter} from 'react-router-dom';

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

class EditIssueComp extends Component {

	constructor(props) {
	  super(props);
	  
	  this.state={
		  issuedetails : {}
	  };
      
      this.saveIssue = this.saveIssue.bind(this);
	}
	
	componentDidMount(){
		this.setState({issuedetails: IssueService.readIssue(this.props.match.params.id)});
	}

    saveIssue(event){
    	 event.preventDefault();
      	 var issue = {};
      	 issue.desc = this.refs.desc.value;
      	 issue.seve = this.refs.seve.value;
      	 issue.stat = this.refs.stat.value;
      	 issue.datecr = this.refs.datecr.value;
      	 issue.daters = this.refs.daters.value;

    	IssueService.updateIssue(this.props.match.params.id, issue);
        this.props.history.push('/issues');
    }

	render(){
		return(
			<Container>
			<Jumbotron>
    			<h1>Edit Issue</h1>
    			<Form onSubmit={this.saveIssue}>
      				<FormGroup>
        				<Label for="desc">Description</Label>
        				<Input type="text" class="form-control" id="desc" ref="desc" value={this.state.issuedetails.desc} required minlength="3"/>
      				</FormGroup>
      				<FormGroup>
        				<Label for="severity">Severity</Label>
        				<Input type="select" class="form-control" id="severity" value={this.state.issuedetails.seve} ref="seve">
          					<option value="minor">Minor</ option>
          					<option value="major">Major</ option>
          					<option value="critical">Critical</ option>
        				</ Input>
      				</FormGroup>
      				<FormGroup>
        				<Label for="status">Status</Label>
        				<Input type="select" class="form-control" id="status" value={this.state.issuedetails.stat} ref="stat">
            				<option value="open">Open</option>
            				<option value="in progress">In Progress</ option>
            				<option value="closed">Closed</ option>
          				</ Input>
      				</FormGroup>
      				<FormGroup>
        				<Label for="datecr">Date Created</Label>
        				<Input class="form-control" type="date" id="datecr" value={this.state.issuedetails.datecr} ref="datecr" required/>
      				</FormGroup>
      				<FormGroup>
        				<Label for="daters">Expected Resolution Date</Label>
        				<Input class="form-control" type="date" id="daters" value={this.state.issuedetails.daters} ref="daters" required/>
      				</FormGroup>
      				<Button type="submit" color="primary">Submit</ Button>
      				<br/><br/>
    			</Form>
  			</Jumbotron>
			</Container>
			
			);
	}

}

export default withRouter(EditIssueComp);

