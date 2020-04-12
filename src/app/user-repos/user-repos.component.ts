import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GithubService } from "../github.service";
import { GhRepo } from "../gh-repo";
import { GhUser } from "../gh-user";

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {
  user: GhUser;
  repos: GhRepo[];

  username = this.route.snapshot.paramMap.get("username");

  constructor(
    private route: ActivatedRoute,
    private ghService: GithubService
  ) {}

  ngOnInit() {
    this.getUser();
    this.getUserRepos();
  }

  getUser() {
    this.ghService.getUser(this.username).subscribe(user => (this.user = user));
  }

  getUserRepos() {
    this.ghService
      .getUserRepos(this.username)
      .subscribe(repos => (this.repos = repos));
  }
}