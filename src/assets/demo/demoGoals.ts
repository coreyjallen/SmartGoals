import { Task } from '../../types/task';
import { SmartGoal } from '../../types/smart-goal';

export const demoGoals: SmartGoal[] = [
    {
        title: 'Lose 10 LBS',
        time: '12-31-19',
        progress: 0,
        tasks: [
            new Task('Track calorie intake in MyFitnessPal', 10, 8),
            new Task('Determine calorie goal', 7, 5),
            new Task('Determine what physical activities you want to incorporate', 10, 2),
            new Task('Visit nutritionist', 10, 9),
            new Task('Take up one new physical hobby', 2, 5), 
            new Task('Buy fitbit', 4, 10),
            new Task('Find an accountability partner', 10, 8)
        ]
    },
    {
        title: 'Learn Angular',
        time: '9-31-19',
        progress: 42.86,
        tasks: [
            new Task('Take pluralsight course', 10, 8),
            new Task('Attend NG-PHX Meetup', 7, 5),
            new Task('Create development environment', 10, 2),
            new Task('Follow hello world guide on angular.com', 10, 9),
            new Task('Define an app you desire to make', 2, 5),
            new Task('Code your desired app UI', 4, 10),
            new Task('Get feedback from peers', 10, 8)
        ]
    },
    {
        title: 'Make a cool demo app',
        time: '8-6-19',
        progress: 75,
        tasks: [
            new Task('Use cool UI elements', 10, 8),
            new Task('Add input validation effects', 7, 5),
            new Task('Make it oops proof.  Try making a new goal, and mess up a task.  Click the task bubble to edit', 10, 2),
            new Task('Provide demo collateral to populate the app', 10, 9),
            new Task('Make login page without accounts', 2, 5),
            new Task('Add limited routing that doesn\'t work for URL manipulation', 4, 10),
            new Task('Get feedback from awesome company that is playing with this', 10, 8),
            new Task('Offer to make another app that meets their requirements', 10, 8)
        ]
    }, 
];

(function () {
    demoGoals[1].tasks[0].completed = true;
    demoGoals[1].tasks[3].completed = true;
    demoGoals[1].tasks[4].completed = true;

    demoGoals[2].tasks[0].completed = true;
    demoGoals[2].tasks[1].completed = true;
    demoGoals[2].tasks[2].completed = true;
    demoGoals[2].tasks[3].completed = true;
    demoGoals[2].tasks[4].completed = true;
    demoGoals[2].tasks[5].completed = true;
})()
