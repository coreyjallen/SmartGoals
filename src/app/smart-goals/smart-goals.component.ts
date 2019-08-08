import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';
import { SmartGoal } from '../../types/smart-goal';

@Component({
  selector: 'app-smart-goals',
  templateUrl: './smart-goals.component.html',
  styleUrls: ['./smart-goals.component.scss']
})

/*  Provide a card view of all Current Smart goals in the app */
export class SmartGoalsComponent implements OnInit {
  
  public smartGoals$: Observable<SmartGoal[]>;
  
  constructor(private accountService: AccountService) { 
  }

  ngOnInit() {
    this.smartGoals$ = this.accountService.subscribe2SmartGoals();
  }

  toggleTask(goalIndex: number, taskIndex: number) {
    this.accountService.toggleTask(goalIndex, taskIndex);
  }
}
