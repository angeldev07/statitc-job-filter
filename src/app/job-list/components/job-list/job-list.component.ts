import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styles: [
  ]
})
export class JobListComponent implements OnInit {
  
  jobs:any;
  importante: any;
  filtros: string[]= [];

  constructor ( 
    private jobServices: JobService
  ) { }

  ngOnInit(): void {
    this.jobServices.allJobs.subscribe({
      next: (job:any) => {
        this.jobs = job
      }
    })
  }

  agregarAlFiltro( filtro: string) {
    if(this.filtros.includes(filtro))
      return
    this.filtros.push(filtro)
  }

  general(filtro: string) {
    this.jobs = this.jobServices.getGeneralFilter([...this.jobs], filtro);
    this.agregarAlFiltro(filtro)
  }

  get jobsS () {
    return [...this.jobs];
  }

  actualizar(event: any) {
    if(Array.isArray(event))
      this.filtros = []
    else
      this.filtros = this.filtros.filter(f => f!=event)
    
    this.jobServices.allJobs.subscribe({next: jobs => this.jobs = jobs})
    this.filtros.forEach( filtro => {
      this.jobs =  this.jobServices.getGeneralFilter(this.jobsS, filtro);
    })
  }

}
