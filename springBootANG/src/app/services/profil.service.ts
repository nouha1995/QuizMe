import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }


  getAllProfil(): Observable<any> {
    return this.http.get('http://localhost:8080/profiles');
  }
}
