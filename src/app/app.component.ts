import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ApiService } from './api.service';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ContactComponent } from './Pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe,NavbarComponent,FooterComponent,ProductsComponent,NotFoundComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='ecommerce';
  data:any =[]
  constructor(public api:ApiService){}

  ngOnInit()
  {
      this.api.getdata().subscribe(response=>{
        this.data=response
      })
  }


}