import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CategoriaComponent } from './component/categoria/categoria.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'categoria', component:CategoriaComponent}
    
];
