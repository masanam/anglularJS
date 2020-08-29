import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = "http://49.128.186.34:2025/api/";

  apilang = new BehaviorSubject<string>('');
  langApi = new BehaviorSubject<string>('');
  

  giveLang(lang_ans: string) {
      this.apilang.next(this.API_URL + lang_ans + '/');
      this.langApi.next(lang_ans);
  }

  getLang(): Observable<string> {
     return this.apilang.asObservable();
  }

  constructor(private httpClient: HttpClient) { 
  }

  getDataApi(param): Observable<any> {
    let url = this.apilang;
    return this.httpClient.get<any>(url.value + param).pipe(catchError(this.errorHandler));
  }
  
  getNextPage(param) {
    return this.httpClient.get<any>(param).pipe(catchError(this.errorHandler));
  }

  postDataApi(param, body): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}`+param, (body)).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
}
