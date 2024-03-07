import { Component } from '@angular/core';
import { ProductsService } from '../../Services/product.service';
import { Icatagory } from '../../Moduels/icatagory';
import { TproductlistComponent } from '../tproductlist/tproductlist.component';
import { Iproduct } from '../../Moduels/iproduct';

@Component({
  selector: 'app-testhome',
  standalone: true,
  imports: [TproductlistComponent],
  templateUrl: './testhome.component.html',
  styleUrl: './testhome.component.css'
})
export class TesthomeComponent {
  chooseCatID:any ;
  catagorylist:Icatagory[]=[];
  productslist:Iproduct[]=[];
 constructor(private catservice :ProductsService ,private prdService:ProductsService )
 {}
 ngOnInit(): void {
   this.catservice.getallcat()
     .subscribe(data=>{
       this.catagorylist=data;
     }); 
 }
 change(event :any):any{
  debugger;
  this.prdService.getallproofcat(event.target.value)
    .subscribe(products=>{
      this.productslist=products;
      console.log(event.target.value);
    });
}
}
