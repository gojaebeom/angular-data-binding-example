import { Component } from '@angular/core';
import { Schedule } from './schedule.type';

@Component({
  selector: 'app-schedule',
  template: `
  <h1>투두리스트</h1>
  <app-schedule-add 
    (createdSchedule)="addSchedule($event)"
  ></app-schedule-add>
  <ul>
    <app-schedule-item 
      *ngFor="let schedule of schedules" 
      [schedule]="schedule"
      (changedSchedule)="editSchedule($event)"
      (toBeDeletedScheduleId)="destorySchedule($event)"
    ></app-schedule-item>
  </ul>
  `,
})
export class ScheduleComponent {
  schedules: Schedule[] = [];

  addSchedule(schedule: Schedule) {
    console.log(schedule);
    this.schedules.push(schedule);
  }

  editSchedule(changedSchedule: Schedule) {
    console.log(changedSchedule);
    const changedSchedules = this.schedules.map((schedule) => {
      if (schedule.id === changedSchedule.id) {
        return changedSchedule;
      }

      return schedule;
    });
    this.schedules = changedSchedules;
  }

  destorySchedule(scheduleId: number) {
    const changedSchedules = this.schedules.filter(
      (schedule) => schedule.id !== scheduleId
    );
    this.schedules = changedSchedules;
  }
}
