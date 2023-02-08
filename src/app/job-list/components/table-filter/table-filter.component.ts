import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styles: [
  ]
})
export class TableFilterComponent {
  @Input() filtros!: string[];
  @Output() nueva: EventEmitter<any> = new EventEmitter();

  borrarFiltro( a: string ){
    if(a == '')
      this.filtros = []
    else
      this.filtros = this.filtros.filter(f => f!=a)
    
    this.nueva.emit(a == '' ? [] : a)
  }
}
