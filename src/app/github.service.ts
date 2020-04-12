import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../environments/environment";
import { GhUser } from "./gh-user";
import { GhRepo } from "./gh-repo";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = "https://api.github.com";
  private apiKey = environment.authToken;
  constructor(private http: HttpClient) { }

  searchUsers(username: string): Observable<GhUser[]> {
    const searchUsersUrl = `${this.apiUrl}/search/users`;
    return this.http
      .get<GhUser[]>(searchUsersUrl, {
        params: { q: username, access_token: this.apiKey }
      })
      .pipe(map(users => users["items"]));
  }

  getUser(username: string): Observable<GhUser> {
    const userUrl = `${this.apiUrl}/users/${username}`;
    return this.http.get<GhUser>(userUrl, {
      params: { access_token: this.apiKey }
    });
  }

  getUserRepos(username: string): Observable<GhRepo[]> {
    const userReposUrl = `${this.apiUrl}/users/${username}/repos`;
    return this.http.get<GhRepo[]>(userReposUrl, {
      params: { access_token: this.apiKey }
    });
  }
}
