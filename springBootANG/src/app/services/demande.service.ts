import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private baseUrl = 'http://localhost:8080/demandes/add';
  private baseUrl2 = 'http://localhost:8080/demandes/update';

  //
  constructor(private http: HttpClient) { }
  //
  addDemande(demande: Object, idProjet: number, idRecruteur: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${idProjet}/${idRecruteur}`, demande);
  }
  //
  affecterCandidatADemande(idDemande: number, idCandidat: number, value: any): Observable<Object> {

    return this.http.put(`${this.baseUrl2}/${idDemande}/${idCandidat}`, value);
  }

  getDemandeByNom(nom: string): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${nom}`);

  }
}
