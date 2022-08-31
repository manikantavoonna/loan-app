import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ValidateComponent } from '../validate/validate.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }



  postLoan(loanid: any) {
    return this.http.post<any>("http://localhost:8080?loanid=" + loanid, "");
  }
  getAllLoan() {
    let response = this.http.get<any>("http://localhost:8080").subscribe(data => {
      return data;
    });

    const mock = [{ "creance": "test2", "dateMaj": "2022-08-29 12:03:46.541" }, { "creance": "test", "dateMaj": "2022-08-29 12:03:25.921" }, { "creance": "test1", "dateMaj": "2022-08-29 12:03:44.838" }, { "creance": "test3", "dateMaj": "2022-08-29 12:03:48.943" }, { "creance": "test4", "dateMaj": "2022-08-29 12:03:50.522" }];

    return mock;
  }
  getByLoanId(loanid: any) {
    return this.http.get<any>("http://localhost:8080/loan?loanid=" + loanid);
  }
  deleteByLoanId(loanid: any) {
    return this.http.get<any>("http://localhost:8080?loanid=" + loanid);
  }
}
