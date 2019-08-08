import { Component } from '@angular/core';
import { AppService } from '../services/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss']
})
export class ActionsBarComponent {

  constructor(private appService: AppService, private router: Router) { }

  addNewGoal() {
    this.appService.openForm('app-smart-goal-form');
    this.router.navigateByUrl('/addGoal');
  }
}
