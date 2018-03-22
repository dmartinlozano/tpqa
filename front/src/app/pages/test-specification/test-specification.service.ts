import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TestSpecificationService {

  constructor(private http:Http) { }
  async loadTree(){
    //TODO change by environment url
    const response = await this.http.get("http://localhost:8080/api/tree/1").toPromise();
    return response.json();
  }

}