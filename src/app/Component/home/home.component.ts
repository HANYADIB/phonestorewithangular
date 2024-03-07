import { Component } from '@angular/core';
import { Icatagory } from '../../Moduels/icatagory';
import { ProductsService } from '../../Services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from "../productlist/productlist.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [FormsModule, ProductlistComponent]
})
export class HomeComponent {
  chooseCatID:any=0 ;
  catagorylist:Icatagory[]=[];
 
 constructor(private catservice :ProductsService )
 {
  
 }
 ngOnInit(): void {
   this.catservice.getallcat()
     .subscribe(data=>{
       this.catagorylist=data;
     }); 
 }
}
