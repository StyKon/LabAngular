import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [
  { path: "",
  pathMatch: 'full',
  component : MemberListComponent,
} ,
{
  path: ":id/edit",
pathMatch: 'full',
component : MemberFormComponent,
},
{
  path: "add",
pathMatch: 'full',
component : MemberFormComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
