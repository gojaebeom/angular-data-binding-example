import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ScheduleAddComponent } from './schedule-add.component';
import { ScheduleItemComponent } from './schedule-item.component';
import { ScheduleComponent } from './schedule.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleAddComponent,
    ScheduleItemComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [ScheduleComponent],
})
export class SchaduleModule {}
