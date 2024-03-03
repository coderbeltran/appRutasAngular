import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactosComponent } from './components/contactos/contactos.component';

const routes: Routes = [
  {path:"inicio", component:HomeComponent},
  {path:"nosotros", component:NosotrosComponent},
  {path:"servicios", component:ServiciosComponent},
  {path:"contactos", component:ContactosComponent},
  {path:"", redirectTo:"/inicio", pathMatch:"full"},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
