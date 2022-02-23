import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditStudentPageComponent} from "./pages/edit-student-page/edit-student-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'student/:id', component: EditStudentPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
