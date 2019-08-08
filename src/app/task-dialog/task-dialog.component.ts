import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Task } from '../../types/task';
import { Days } from '../../types/task';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {
  private newGoal: Task;
  private editMode: Boolean;

  private existingTitles: Array<String>;
  private numberRatings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private dayOptions = Object.keys(Days);

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newGoal = data.newGoal;
    this.existingTitles = data.existingTitles;
    this.editMode = data.editMode;

    // pop the current name off existingTitles so that there isnt a unique name error when editing the name
    if(data.editMode) {
      this.existingTitles.splice(this.existingTitles.indexOf(data.newGoal.title), 1);
    }
  }
  
  addDay(addMe: Days) {
    const iDay = this.newGoal.constraints.days.indexOf(addMe);

    if(iDay >= 0) {
      this.newGoal.constraints.days.splice(iDay, 1);
    } else {
      this.newGoal.constraints.days.push(addMe);
    }
  }

  isDayChecked(dayName: string) { 
    return this.newGoal.constraints.days.includes(dayName); 
  }

  onSubmit(): void { 
    this.dialogRef.close({...this.newGoal});
  }
}
