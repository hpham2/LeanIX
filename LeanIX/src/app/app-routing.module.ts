import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  {path: 'repo/:id' , component: RepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
