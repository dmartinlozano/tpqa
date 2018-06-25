import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RoleService {

  constructor(private http:HttpClient) { }
  async list(): Promise<any>{
    //TODO change by environment url
    return await this.http.get(`http://localhost:8080/api/roles`).toPromise();
  }
  async getRolesByTestProject(): Promise<any>{
    //TODO change by environment url
    return await this.http.get(`http://localhost:8080/api/roles/testproject`).toPromise();
  }
}