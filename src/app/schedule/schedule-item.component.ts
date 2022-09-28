import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Schedule } from './schedule.type';

@Component({
  selector: 'app-schedule-item',
  template: `
  <li>
    <span>{{schedule.title}}</span>
    <br/>
    <span>{{schedule.content}}</span>
    <br/>
    <button (click)="onEdit()">수정</button>
    <button (click)="onDestory()">삭제</button>
  </li>
  `,
})
export class ScheduleItemComponent {
  @Input() schedule: Schedule;
  @Output() changedSchedule = new EventEmitter<Schedule>();
  @Output() toBeDeletedScheduleId = new EventEmitter<number>();

  onEdit() {
    const titleResult = window.prompt(
      '제목을 수정하세요.',
      this.schedule.title
    );
    console.log(titleResult);
    if (!titleResult) {
      return;
    }

    const contentResult = window.prompt(
      '내용을 수정하세요.',
      this.schedule.content
    );
    console.log(contentResult);
    if (!contentResult) {
      return;
    }

    console.log('수정함!');
    this.changedSchedule.emit({
      ...this.schedule,
      title: titleResult,
      content: contentResult,
    });
  }

  onDestory() {
    const result = window.confirm('정말 삭제하시겠어요?');
    if (!result) {
      return;
    }

    this.toBeDeletedScheduleId.emit(this.schedule.id);
  }
}
