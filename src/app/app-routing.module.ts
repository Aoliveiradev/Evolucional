import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditStudentPageComponent} from "./pages/edit-student-page/edit-student-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {EditDegreesPageComponent} from "./pages/edit-degrees-page/edit-degrees-page.component";
import {EditClassesPageComponent} from "./pages/edit-classes-page/edit-classes-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'students/:id', component: EditStudentPageComponent},
  {path: 'degrees/:id', component: EditDegreesPageComponent},
  {path: 'classes/:id', component: EditClassesPageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
