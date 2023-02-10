import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styles: [
  ]
})
export class TableFilterComponent {
  @Input() filtros!: string[];
  @Output() filterDelete: EventEmitter<string[] > = new EventEmitter();

  borrarFiltro( filterIndex: number ){
    
    if(filterIndex === -1 ){
      this.filtros.length = 0;
    }
    else
      this.filtros.splice(filterIndex,1); //eliminamos el elemento seleccionado 

    this.filterDelete.emit()
  }
}


