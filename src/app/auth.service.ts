import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/authenticate';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, {username, password})
      .pipe(map(
        user => {
          if (user && user.jwtToken) {
            localStorage.setItem('token', user.jwtToken);
          }
        }
      ));
  }

}
