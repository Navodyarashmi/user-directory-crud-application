import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) {}

  // ✅ GET ALL USERS
  getUsers() {
    return this.http.get(this.api);
  }

  // ✅ ADD USER
  addUser(data: any) {
    return this.http.post(this.api, data);
  }

  // ✅ DELETE USER
  deleteUser(id: any) {
    return this.http.delete(this.api + '/' + id);
  }

  // 🔥 NEW: UPDATE USER (VERY IMPORTANT)
  updateUser(id: any, data: any) {
    return this.http.post(this.api + '/' + id + '?_method=PUT', data);
  }
}
