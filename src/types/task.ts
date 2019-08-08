
// these are the chunks of smart goals that can be accomplished during free time and make measurable progress towards a smart goal
export class Task {
    public estimatedDuration: Number = 0; // the length of time (in minutes) needed to complete this goal
    public priority: Number; //Ranking to determine how crucial this microGoal is
    public interest: Number; // ranking of how interesting this goal is to the user.  This determines their motivation level to tackle this one.
    public result: string = ''; // upon completing this goal, what was the outcome?  Is there something crucial learned?  did this fail? does this prompt a new micro goal creation?
    public constraints: any = { // constraints on when this task needs to be completed
        days: new Array<Days>(),
        hours: new Array<Number>(),
        event: '',
        people: new Array<string>()
    }
    public completed: Boolean = false;
    constructor( public title:string = '', priority?: number, interest?: number){
        if(priority){ this.priority = priority } 
        if(interest) { this.interest = interest }
    }
}

export enum Days {
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday'
}
