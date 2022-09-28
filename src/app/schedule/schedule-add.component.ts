import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Schedule } from './schedule.type';

@Component({
  selector: 'app-schedule-add',
  template: `
  <form (submit)="onSubmit()" #scheduleForm="ngForm">
    <input 
      name="title" 
      ngModel
      placeholder="제목"
    />
    <br/>
    <textarea 
      name="content" 
      placeholder="내용"
      ngModel
    ></textarea>
    <br/>
    <button>생성</button>
  </form>
  `,
})
export class ScheduleAddComponent {
  @ViewChild('scheduleForm') scheduleForm: NgForm;
  @Output() createdSchedule = new EventEmitter<Schedule>();
  private autoIncrementId = 1;

  onSubmit() {
    this.createdSchedule.emit({
      id: this.autoIncrementId++,
      ...this.scheduleForm.value,
    });

    this.scheduleForm.reset();
  }
}
