
import axios from 'axios';

class IssueService {

	_issuesUrl = "http://localhost:5000/issues";     /* URL of Express server */

	static readIssues(){

		axios.request({
			method: "get",
			url: this._issuesUrl,
			crossDomain: true
		}).then((res) => {
			return res.data;
		}).catch((error) => {
			throw error;
		});
     
	}

	static readIssue(id){

		axios.request({
			method: "get",
			url: this._issuesUrl+"/"+id,
			crossDomain: true
		}).then((res) => {
			return res.data;
		}).catch((error) => {
			throw error;
		});

	}

	static createIssue(issue){
	
		axios.request({
			method: "post",
			url: this._issuesUrl,
			data: issue,
			crossDomain: true
		}).then((res) => {
			return res.data;
		}).catch((error) => {
			throw error;
		});

	}

	static updateIssue(id, updatedissue){
	
		axios.request({
			method: "put",
			url: this._issuesUrl+"/"+id,
			data: updatedissue,
			crossDomain: true
		}).then((res) => {
			return res.data;
		}).catch((error) => {
			throw error;
		});

	}

	static deleteIssue(id){

		axios.request({
			method: "delete",
			url: this._issuesUrl+"/"+id,
			crossDomain: true
		}).then((res) => {
			return res.data;
		}).catch((error) => {
			throw error;
		});

	}

}


export default IssueService;

