import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient
  ) { }

  get allJobs () {
    return this.http.get('assets/data.json');
  }

  getFilterJobsByRole( jobs: any, role: string ){
    return jobs.filter( (job:any) => job.role == role )
  }

  getFilterJobsByLevel( jobs: any, level: string){
    return jobs.filter( (job:any) => job.level == level )
  }

  getFilterJobsByLanguages( jobs: any, language: string){
    return jobs.filter( (job:any) => job.languages.includes(language) )
  }


  getGeneralFilter( jobs: any, filtro: string) {
    return jobs.filter( ({role, level, languages, tools }:any) => {
      return (role == filtro || level == filtro || languages.includes(filtro) || tools.includes(filtro)) 
    } )
  }

}
