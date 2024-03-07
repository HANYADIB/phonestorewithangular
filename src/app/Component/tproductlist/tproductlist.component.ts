import { Component } from '@angular/core';
import { Iproduct } from '../../Moduels/iproduct';
import { Icatagory } from '../../Moduels/icatagory';
import { ProductsService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tproductlist',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tproductlist.component.html',
  styleUrl: './tproductlist.component.css'
})
export class TproductlistComponent {
  productslist:Iproduct[]=[];
  catList: Icatagory[]=[];
  newPrd: Iproduct= {} as Iproduct;
  currentid:number=0;
  pg:number=1;
  constructor(private prdService :ProductsService,private router: Router 
    , private catservice:ProductsService ,private activeroute:ActivatedRoute) 
  {
     this.activeroute.queryParamMap.subscribe((data: any) =>{
      console.log(data);
     });
    
  }
  ngOnInit(): void {
    
    this.prdService.getall()
          .subscribe(products=>{
            this.productslist=products;
          });this.prdService.getallcat().subscribe(x=>{
            this.catList=x;
          });
          // this.prdService.numberofpages().subscribe(products=>{
          //   this.numberpages=products;
          // });
}


delete(id:number) {
  console.log(id);
  alert("you are sure delete ");
  const observer={
    next: (prd:Iproduct) => {
      alert("Product delete Successfuly"); 
      this.router.navigateByUrl('/product/add');
    },
    error: (err:Error)=>{alert(err.message)}
  }

  this.prdService.deleteProduct(id).subscribe(observer);
}
next()
{
  ++this.pg;
  console.log(this.pg);
}
}
