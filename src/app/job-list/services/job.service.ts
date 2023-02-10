import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job.interface';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient
  ) { }

  get allJobs (): Observable<Job[]> {
    return this.http.get<Job[]>('assets/data.json');
  }

  getGeneralFilter( jobs: Job[], filtro: string): Job[] {
    return jobs.filter( ({role, level, languages, tools }) => {
      return (role == filtro || level == filtro || languages.includes(filtro) || tools.includes(filtro)) 
    } )
  }

}
