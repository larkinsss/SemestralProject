import { AppComponent } from './app.component';
import { WaitingListComponent } from './waiting-list/waiting-list/waiting-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: AppComponent },
  { path: 'waiting-list', component: WaitingListComponent },
  // { path: 'waiting-list', component: WaitingListComponent },
  // { path: 'waiting-list', component: WaitingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
