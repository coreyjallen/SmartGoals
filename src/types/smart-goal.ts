import { Task } from './task';

export interface SmartGoal {
    title: String,
    time: String,
    tasks: Array<Task>,
    progress: number, // percent
}
