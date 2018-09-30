import { Component, OnInit } from "@angular/core";
import { IssueService } from "./issue_service";
import { Issue } from './issueinterface';

@Component({
    templateUrl : './issuesComp.html',
    })

export class IssuesComponent implements OnInit{
issues : Issue[];
selectedissues : Issue[];
selectAll : boolean;
descv:boolean = true;
sevev:boolean = true;
statv:boolean = true;
datecrv:boolean = true;
datersv:boolean = true;
descFilter: string; 

 constructor(private _issueService: IssueService) {
      this.getIssues();               // for reloading page when navigated here from other component
 }

ngOnInit() {
    
  }

  getIssues() {
    this._issueService.getIssues().subscribe(
      (issues:any) =>  this.issues = issues,
      err => console.log(err)
    );
  }

  deleteissue(id) {
    this._issueService.deleteIssue(id).subscribe(
      (data:any) => this.getIssues(),
      err => console.log(err)
    );
  }

  deletemultipleissue(){
    this.selectedissues = this.issues.filter(issue => issue.selected);

    var selectedissuesid = [];
    for(let iss of this.selectedissues) selectedissuesid.push(iss.id);

    for(let i of selectedissuesid){
    this._issueService.deleteIssue(i).subscribe(
      (data:any) => this.getIssues(),
      err => console.log(err)
    );
    }
  }

  toggleChk(){
    this.issues.forEach(issue => issue.selected = this.selectAll);
  }
}