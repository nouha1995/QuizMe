import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private baseUrl = 'http://localhost:8080/candidats/update';

  constructor(private http: HttpClient) { }
//
  getAllCandidats(): Observable<any> {
    return this.http.get('http://localhost:8080/candidats');
  }
  addCandidat(candidat: Object): Observable<Object> {
    return this.http.post('http://localhost:8080/candidats/add', candidat);
  }
  modifierStatus(idCandidats: number, status: string, value: any): Observable<Object> {

    return this.http.put(`${this.baseUrl}/${idCandidats}/${status}`, value);
  }
}
