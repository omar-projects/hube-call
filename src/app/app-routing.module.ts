import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RechercheAvanceeComponent } from './components/recherche-avancee/recherche-avancee.component';


const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: '',   
    redirectTo: '/home',
    pathMatch: 'full' 
  },
  {
    path: 'advanced-search',
    component: RechercheAvanceeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
