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
  constructor() { }

  ngOnInit(): void {
  }

}
