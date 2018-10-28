
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = 'http://localhost:8080/projets';
  //
  //
  constructor(private http: HttpClient) {
  }
  //
  getAllProjet(): Observable<any> {
    return this.http.get('http://localhost:8080/projets');
  }
  //
  getBy_projet_seniorite_profil(project: string, seniorite: string, profil: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${project}/${seniorite}/${profil}`);
  }
  getById(idProjct: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idProjct}`);
    // return this.http.get('http://localhost:8080/projets/1');
  }

}
