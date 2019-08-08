import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmartGoalFormComponent } from './smart-goal-form/smart-goal-form.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { UniqueNameValidatorDirective } from './validators/unique-name.directive';
import { ActionsBarComponent } from './actions-bar/actions-bar.component';
import { SmartGoalsComponent } from './smart-goals/smart-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountOverviewComponent,
    LoginComponent,
    SmartGoalFormComponent,
    TaskDialogComponent,
    UniqueNameValidatorDirective,
    ActionsBarComponent,
    SmartGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
  entryComponents: [TaskDialogComponent]
})
export class AppModule { }
