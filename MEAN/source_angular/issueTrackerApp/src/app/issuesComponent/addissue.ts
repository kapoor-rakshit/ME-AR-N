import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from './issue_service';


@Component({
    templateUrl: './addissue.html'
  })

export class AddIssue implements OnInit{

    severityvals: string[] = ["Minor", "Major", "Critical"];
    statusvals: string[] = ["Open", "In Progress", "Closed"];

    _id : number;
    desc : string;
    severity : string;
    status : string;
    datecr : string;
    daters : string;

    constructor(private _issueService: IssueService, private router: Router) { }

    ngOnInit(){
      var now = new Date();

      var day = now.getDate();
      var month = now.getMonth() + 1;

      var dayval = "";
      var monthval="";

      if(day<10) dayval = "0" + day;
      else dayval = day + "";

      if(month<10) monthval = "0" + month;
      else monthval = month + "";
    
      var today = now.getFullYear() + "-" + monthval + "-" + dayval;
    
      document.getElementById("datecr").setAttribute('min',today);
      document.getElementById("datecr").setAttribute('max',today);
    
      document.getElementById("daters").setAttribute('min',today);
    }

    onSubmit(formValue: any){
        
        let newIssue = {
              _id : 0,
              desc: formValue.desc,
              severity: formValue.severity,
              status: formValue.status,
              datecr: formValue.datecr,
              daters: formValue.daters,
            };

        this._issueService.addIssue(newIssue).subscribe(
          (data:any) => this.router.navigate(['issues']),
          err => console.log(err)
        );
      }
}