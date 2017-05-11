import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('http://127.0.0.1:10010/login', { username: username, password: password })
            .map((response: Response) => {
                let user = response.json();
                 console.log(response.json());
                if (user) {
                   
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
}