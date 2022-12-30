import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }
  getAllGroups() {
    return this.http.get('http://localhost:9090/groups');
  }

  getGroupById(id: number) {
    return this.http.get('http://localhost:9090/groups/' + id);
  }
  
}
