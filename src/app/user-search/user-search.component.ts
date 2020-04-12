import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { GithubService } from "../github.service";

@Component({
  selector: "app-user-search",
  templateUrl: "./user-search.component.html",
  styleUrls: ["./user-search.component.css"]
})
export class UserSearchComponent implements OnInit {
  userFound: boolean;
  
  constructor(private router: Router, private ghService: GithubService) {}

  ngOnInit() {}

  onSubmit(username: string): void {
    this.ghService
      .searchUsers(username)
      .subscribe(users =>
        users.find(user => username === user.login)
          ? (this.userFound = false) 
          : (this.userFound = true)
      );
    this.router.navigate([`/user-repos/${username}`]);
  }
}