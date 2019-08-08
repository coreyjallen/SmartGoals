import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SmartGoal } from 'src/types/smart-goal';
import { Task } from 'src/types/task';
import { demoGoals } from '../../assets/demo/demoGoals';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private smartGoals: Array<SmartGoal> = [];
  private smartGoalsEmitter: BehaviorSubject<SmartGoal[]> = new BehaviorSubject(this.smartGoals); 
  private loggedIn: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  private mode: BehaviorSubject<String> = new BehaviorSubject('demo');
  private totalProgress: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
  }
  
  public addGoal(addMe: SmartGoal): void {
    this.smartGoals.push(addMe);
    this.smartGoals.sort((a,b) => a.progress-b.progress);
    this.smartGoalsEmitter.next(this.smartGoals);
  }

   // grabs a task that needs to be done!
   public getTask(): Task {
    
    // find the goal with the most tasks
    this.smartGoals.sort((a,b) => a.progress-b.progress);

    // suggest a random task from that goal
    const eligibleTasks = this.smartGoals[0].tasks.filter(task => !task.completed);
    const luckyTask = Math.floor(Math.random() * eligibleTasks.length);
    return eligibleTasks[luckyTask];
  }
 
  public login(user?: any) {
    
    // demo mode
    if(!user) {
      this.smartGoals = demoGoals;
      this.smartGoals.sort((a,b) => a.progress - b.progress); // show the least progress goal first
      this.smartGoalsEmitter.next(this.smartGoals);
      this.loggedIn.next(true);
      this.calculateProgress();
    } else {
      // FUTURE: validate credentials & emit loggedIn state

      this.mode.next('full');
    }
  }

  public toggleTask(goalIndex: number, taskIndex: number): void {
    let currentGoal = this.smartGoals[goalIndex];

    currentGoal.tasks[taskIndex].completed = !currentGoal.tasks[taskIndex].completed;

    const numCompleted = (currentGoal.tasks.filter(task => task.completed)).length;
    currentGoal.progress = (numCompleted / currentGoal.tasks.length) * 100;

    this.smartGoalsEmitter.next(this.smartGoals);
    this.calculateProgress();
  }

  private calculateProgress(): void {
    
    const accumulatedProgress = this.smartGoals
      .map(goal => goal.progress)
      .reduce((total, current) => (total + current));

    this.totalProgress.next(accumulatedProgress / this.smartGoals.length);
  }

  /************************** Subscriptions **************************/
  public subscribe2LoggedIn(): Observable<Boolean> {
    return this.loggedIn.asObservable();
  }

  public subscribe2Progress(): Observable<number> {
    return this.totalProgress.asObservable();
  }

  public subscribe2SmartGoals(): Observable<SmartGoal[]> {
    return this.smartGoalsEmitter.asObservable();
  }
}
