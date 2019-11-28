import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';  

const routes: Routes = [
    //{
    //    path: 'app', component: AppComponent
    //}, {
    //    path: 'category', component: CategoryComponent
    //},
    //{
    //    path: '', redirectTo: '/app', pathMatch: 'full'
    //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
