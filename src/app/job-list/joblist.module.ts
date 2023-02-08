import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './components/job-list/job-list.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';



@NgModule({
  declarations: [
    JobListComponent,
    TableFilterComponent
  ], 
  exports: [
    JobListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JoblistModule { }
