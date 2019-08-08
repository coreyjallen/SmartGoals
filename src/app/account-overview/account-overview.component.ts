import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { AppService } from '../services/app/app.service';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss']
})
export class AccountOverviewComponent implements OnInit {

  private goalProgress$: Observable<number>;
  private suggestedTask: string;

  constructor(private accountService: AccountService, private appService: AppService) { 

  }

  ngOnInit() {
    this.goalProgress$ = this.accountService.subscribe2Progress();
  }

  addGoal() {
    // open new form to create goal
    this.appService.openForm('app-smart-goal-form');
  }

  getTask() {
    this.suggestedTask = this.accountService.getTask().title;
  }
}
