import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { SingleComponent } from './Components/single/single.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'Product',component:ProductsComponent},
    {path:'Contact',component:ContactComponent},
    {path:'Product/:id',component:SingleComponent},

    {path:'**',component:NotFoundComponent}
];
