import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

/************************************************************************************************
 *  This is an appwide service to handle global application state, like a simple store
 ***********************************************************************************************/

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  private activeFormEmitter$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { 
  }

  public subscribe2ActiveForm(formName): Observable<boolean> {
    return this.activeFormEmitter$.asObservable().pipe(
      map((activeForm) => activeForm !== formName)
    );
  }
  
  public openForm(formName: string) {
    this.activeFormEmitter$.next(formName);
  }

  public closeForms() {
    this.activeFormEmitter$.next('none');
  }
}
