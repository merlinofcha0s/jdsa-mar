import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './user.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<HttpResponse<Array<User>>> {
    return this.http.get<Array<User>>(this.endpoint, {observe: 'response'});
  }

  getOne(id: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/${id}`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.endpoint, user);
  }
}
