import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  constructor(private http: HttpClient) { }

  getAllNiveau(): Observable<any> {
    return this.http.get('http://localhost:8080/niveaux');
  }
}
