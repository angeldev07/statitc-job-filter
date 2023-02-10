import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../interfaces/job.interface';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styles: [
  ]
})
export class JobListComponent implements OnInit {
  
  jobs: Job[] = [];
  filters: string[]= [];

  constructor ( 
    private jobServices: JobService
  ) { }

  ngOnInit(): void {
    this.jobServices.allJobs.subscribe({
      next: job => {
        this.jobs = job
      }
    })
  }

  agregarAlFiltro( filter: string) {
    if(this.filters.includes(filter))
      return
    this.filters.push(filter)
  }

  general(filter: string) {
    this.jobs = this.jobServices.getGeneralFilter([...this.jobs], filter);
    this.agregarAlFiltro(filter)
  }

  actualizar(event: string[]) {
    console.log(this.filters.length);
    
    // this.jobServices.allJobs.subscribe({
    //   next: job => {
    //     this.jobs = job;

    //     this.filters.forEach( filtro => {
    //       this.jobs =  this.jobServices.getGeneralFilter([...this.jobs], filtro);
    //     })

    //   }
    // })
    
    this.jobServices.allJobs
        .pipe(
            map(jobs => {
              this.filters.forEach(filter => {
                jobs = this.jobServices.getGeneralFilter([...jobs],filter)
              })
              return jobs;
            })
        ).subscribe(
            {
              next: jobs => this.jobs = jobs
            }
    )
    
  }

}
