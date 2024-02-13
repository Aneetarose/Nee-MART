import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';
import { SingleComponent } from '../../Components/single/single.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SlicePipe,RouterLink,SingleComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  data:any=[] 
  slice:any;
  constructor(public api:ApiService){}

  ngOnInit()
  {
      this.api.getdata().subscribe(response=>{
        this.data=response
      })
  }


}


