import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RechercheAvanceeComponent } from './components/recherche-avancee/recherche-avancee.component';
import { ResultatDeRechercheComponent } from './components/resultat-de-recherche/resultat-de-recherche.component';


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
  },
  {
    path: 'advanced-search/result',
    component: ResultatDeRechercheComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
