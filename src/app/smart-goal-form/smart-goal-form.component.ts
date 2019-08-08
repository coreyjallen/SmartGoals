import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../services/app/app.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from 'src/types/task';
import { AccountService } from '../services/account.service';
import * as moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-smart-goal-form',
  templateUrl: './smart-goal-form.component.html',
  styleUrls: ['./smart-goal-form.component.scss']
})
export class SmartGoalFormComponent implements OnInit {
  
  private title: String;
  private date: Date;  
  private tasks: Array<Task>;

  private dialogRef: MatDialogRef<TaskDialogComponent>;
  private activeForm$: Observable<Boolean>; 

  constructor(
    private appService: AppService,
    private dialog: MatDialog,
    private accountService: AccountService,
    private location: Location
    ) {
      this.tasks = new Array<Task>();
  }

  ngOnInit() {
    this.activeForm$ = this.appService.subscribe2ActiveForm('app-smart-goal-form');
  }

  editTask(task: Task) {
    const editIndex = this.tasks.indexOf(task);

    this.dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '1000px',
      data: {
        newGoal: {...task},
        existingTitles: this.tasks.map(task => task.title),
        editMode: true
      } 
    });

    this.dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.tasks[editIndex] = result;
      }
    });
  }

  openTaskDialog(task?: Task) {
    if(!task){ task = new Task() }

    this.dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '1000px',
      data: {
        newGoal: {...task},
        existingTitles: this.tasks.map(task => task.title)
      } 
    });

    this.dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.tasks.push(result);
      }
    });
  }

  removeTask(removeMe: Task) {
    const iGoal = this.tasks.indexOf(removeMe);

    if (iGoal >= 0) {
      this.tasks.splice(iGoal, 1);
    }
  }

  onSubmit() {
      this.accountService.addGoal({
        title: this.title,
        time: moment(this.date).format('MM-DD-YY'),
        tasks: this.tasks,
        progress: 0 
      });

      this.appService.closeForms();
      this.tasks = [];
      this.location.back();
  }
}
