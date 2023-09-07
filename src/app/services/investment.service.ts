import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investment } from '../interfaces/investment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private investmentUrl = "https://cloud-run-service-gxnjs4mbgq-uc.a.run.app/firestoredata";

  constructor(private http: HttpClient) { }

  getInvestments() : Observable<Investment[]> {
    return this.http.get<Investment[]>(this.investmentUrl);
  }

  // private handleError(err: any): Observable<never> {
  //   let errorMessage:string;
  //   if (err.error instanceof ErrorEvent) {
  //     errorMessage = `An error occurred : ${err}`
  //   }
  // }

}

