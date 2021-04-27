import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: '',
  pathMatch:'full',
  component: MemberListComponent
 },
 { path: 'login',
  pathMatch:'full',
  component: LoginComponent
 },
  { path: ':id/edit',
  pathMatch:'full',
  component: MemberFormComponent },
  { path: 'add',
  pathMatch:'full',
  component: MemberFormComponent
 },
 { path: 'members',
  pathMatch:'full',
  component: MemberListComponent
 },
 { path: 'dashboard',
  pathMatch:'full',
  component: DashbordComponent
 },
 { path: 'tools',
  pathMatch:'full',
  component: ToolsComponent
 },
 { path: 'articles',
  pathMatch:'full',
  component: ArticlesComponent
 },
 { path: 'events',
  pathMatch:'full',
  component: EventsComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
