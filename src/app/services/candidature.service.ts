import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { candidature } from '../model/candidature';
import { MailRequest, MailResponse } from '../model/mail';


@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private apiUrl = 'http://localhost:9090/candidature/sendingEmail';
  private baseUrl = 'http://localhost:9090/candidature';
  private generatePdfUrl = '/generate-pdf';
  constructor(private http: HttpClient) {
  }


  addCandidature(candidature: any) {
//json-server db.json --watch
    return this.http.post('http://localhost:9090/candidature/upload', candidature)
  }

  filtrerMoyenne():Observable<candidature[]>{
    return  this.http.get<candidature[]>('http://localhost:9090/candidature/MoyenneFilter/15/20');


  }
 
getReleveDeNoteById(idCandidature: any): Observable<any> {
  return this.http.get(`http://localhost:9090/candidature/upload/${idCandidature}`, { responseType: 'blob' });
}

sendMail(request: MailRequest): Observable<MailResponse> {
  return this.http.post<MailResponse>(this.apiUrl, request);
}
 
updateCandidature(identifiant: string) {
  const url = `${this.baseUrl}/${identifiant}`;
  return this.http.put(url, null);
}
generatePdf(): Observable<Blob> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/pdf', 'Accept': 'application/pdf' });
  return this.http.get<Blob>(this.generatePdfUrl, { headers: headers, responseType: 'blob' as 'json' });
}
 
}