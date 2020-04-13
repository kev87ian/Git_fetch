import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from "./user-search/user-search.component";
import { UserReposComponent } from "./user-repos/user-repos.component";

const routes: Routes = [
  { path: "", redirectTo: "/user-repos/kev87ian", pathMatch: "full" },
  { path: "user-search", component: UserSearchComponent },
  { path: "user-repos/:username", component: UserReposComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
