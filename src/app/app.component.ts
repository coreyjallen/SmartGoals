import { Component } from '@angular/core';
import { AccountService } from './services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smart-goal-client';
  loggedIn$: Observable<Boolean>;;

  constructor(private accountService: AccountService) {
    this.loggedIn$ = accountService.subscribe2LoggedIn();
  }
}
