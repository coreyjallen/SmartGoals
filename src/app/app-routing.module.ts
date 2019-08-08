import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { SmartGoalsComponent } from './smart-goals/smart-goals.component';
import { SmartGoalFormComponent } from './smart-goal-form/smart-goal-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'accountOverview', component: AccountOverviewComponent },
  { path: 'goals', component: SmartGoalsComponent}, 
  { path: 'addGoal', component: SmartGoalFormComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
