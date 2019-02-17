
import React, { Component } from 'react';      // Member imports using {  }
import { Link, withRouter } from 'react-router-dom';

import IssueService from './issueService';

import {
	Table,
	Button,
	Input,
	Container
} from 'reactstrap';

class IssuesComp extends Component {

	constructor(props) {
      super(props);

      this.state = {
        issues: [],
        descv: true,
        sevev: true,
        statv: true,
        datecrv: true,
        datersv: true,
				selectall: false,
				chkvar: false
  		};

  		this.changeDesc = this.changeDesc.bind(this);
  		this.changeSeve = this.changeSeve.bind(this);
  		this.changeStat = this.changeStat.bind(this);
  		this.changeDatecr = this.changeDatecr.bind(this);
  		this.changeDaters = this.changeDaters.bind(this);
  		this.toggleall = this.toggleall.bind(this);
		this.deleteMultiple = this.deleteMultiple.bind(this);
		this.togglechk = this.togglechk.bind(this);
      	this.deleteIssue = this.deleteIssue.bind(this);
    }

    componentDidMount() {
      this.setState({ issues: IssueService.readIssues()});          // call service to get list of issues using SERVICE
    }

    changeDesc(){
    	this.setState({descv: !this.state.descv});
    }

    changeSeve(){
    	this.setState({sevev: !this.state.sevev});
    }

    changeStat(){
    	this.setState({statv: !this.state.statv});
    }

    changeDatecr(){
    	this.setState({datecrv: !this.state.datecrv});
    }

    changeDaters(){
    	this.setState({datersv: !this.state.datersv});
    }

    toggleall(){
		this.setState({selectall: !this.state.selectall});
		this.setState({chkvar: this.state.selectall});
	}
	
	togglechk(){
		this.setState({chkvar: !this.state.chkvar});
	  }
  
	deleteIssue(id){
		IssueService.deleteIssue(id);
		this.props.history.push('/issues');
	  }

    deleteMultiple(){

    	// call deleteIssue(id) from service for each selected issue

    	this.props.history.push('/issues');
		}

		createTable = () => {
			let table = [];

			var row;
			// Outer loop to create parent
			for (row in this.state.issues) {

				let children = [];
				//Inner loop to create children
			
					children.push(<td><Input type="checkbox" onChange={this.togglechk}/></td>);
					children.push(<td>{row.desc}</td>);
					children.push(<td>{row.seve}</td>);
					children.push(<td>{row.stat}</td>);
					children.push(<td>{row.datecr}</td>);
					children.push(<td>{row.daters}</td>);
					children.push(<td><Link to={`/issues/editissue/${row._id}`}><Button color="primary">Update</Button></Link></td>);
					children.push(<td><Button onClick={this.deleteIssue(row._id)} color="danger">Delete</ Button></td>);

				//Create the parent and add the children
				table.push(<tr>{children}</tr>);
			}
			return table
		}

	render(){

		return(
			<Container>
    			<div className='panel-body'>
        			<div className='row'>
            			<div className='col-md-2'>Search: <Input type='text' /></div>
        			</div>

        			<br/>
        			<Input type="checkbox" onChange={this.changeDesc} defaultChecked={this.state.descv}/> Description <br/>
        			<Input type="checkbox" onChange={this.changeSeve} defaultChecked={this.state.sevev}/> Severity    <br/>
        			<Input type="checkbox" onChange={this.changeStat} defaultChecked={this.state.statv}/> Status      <br/>
        			<Input type="checkbox" onChange={this.changeDatecr} defaultChecked={this.state.datecrv}/> Date Created <br/>
        			<Input type="checkbox" onChange={this.changeDaters} defaultChecked={this.state.datersv}/> Date Resolved / Expected <br/><br/>

        			{/* code for populating table, with ref to SEARCH , CHECKBOX */}

        			<div>
								<Table>
								<thead>
									<tr>
										<th><Input type="checkbox" onChange={this.toggleall} /></th>        {/* select all on toggle */}
										<th>Description</th>
              			<th>Severity</th>
              			<th>Status</th>
              			<th>Date Created</th>
              			<th>Date Resolved / Expected</th>
              			<th></th>
              			<th><Button onClick={this.deleteMultiple} color="danger">Delete Multiple</Button></th>             {/* call service for deleting */}
										</tr>
          			</thead>
								<tbody>
								{this.createTable()}
								</tbody>
								</Table>
							</div>
							<br></br>
        			<Link to="/issues/addissue"><Button color="primary">New Issue</Button></Link>
        		</div>
        	</Container>
			
			);
	}

}


export default withRouter(IssuesComp);

