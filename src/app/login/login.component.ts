import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private router: Router, private accountService: AccountService) {
  }

  launchDemoMode() {
    this.accountService.login(); 
    this.router.navigateByUrl('/accountOverview');
  }

  login() {
    alert("Login is currently under construction.  Feel free to try out a demo!")
  }

}
