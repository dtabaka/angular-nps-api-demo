import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkResponse } from '../interfaces/park';

@Injectable({
  providedIn: 'root'
})
export class NpsService {

  private url = "https://firestore-apis---secure-cors-details-1bkt07r7.uc.gateway.dev/nps-cloud-function?searchTerm=cave";
  //private url = "https://us-central1-gcp-developer-1.cloudfunctions.net/getNpsParks?searchTerm=cave";

  constructor(private http: HttpClient) { }

  getParks() : Observable<ParkResponse> {
    return this.http.get<ParkResponse>(this.url);
  }

}
