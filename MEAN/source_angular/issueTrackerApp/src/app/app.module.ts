import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { IssuesComponent } from './issuesComponent/issuesComp';
import { HomeComponent } from './homeComponent/homeComp';
import { AddIssue } from './issuesComponent/addissue';
import { EditIssue } from './issuesComponent/editissue';
import { IssueFilter } from './issuesComponent/issues.pipe';
import { IssueService } from './issuesComponent/issue_service';

import 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    IssueFilter,
    IssuesComponent,
    AddIssue,
    HomeComponent,
    EditIssue
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routing
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
