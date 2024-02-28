import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
