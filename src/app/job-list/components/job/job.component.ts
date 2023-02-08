import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styles: [
  ]
})
export class JobComponent {
  @Input() job:any;
  @Output() filter: EventEmitter<string> = new EventEmitter();


  general(filter: string) {
    this.filter.emit(filter);
  }
}
