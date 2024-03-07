import { Component, Input } from '@angular/core';
import { Iproduct } from '../../Moduels/iproduct';
import { ProductsService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Icatagory } from '../../Moduels/icatagory';
import { Pager } from '../../Moduels/pager';
import { Usertoken } from '../../Moduels/usertoken';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  productslist:Iproduct[]=[];
  @Input() sentCatID: number = 0;
  catList: Icatagory[]=[];
  newPrd: Iproduct= {} as Iproduct;
  currentid:number=0;
  numberpages:Pager={} as Pager;
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
ngOnChanges():void{
  if(this.sentCatID ==0)
  {
    this.prdService.getall()
          .subscribe(products=>{
            this.productslist=products;
          });
  }
  else{
  this.prdService.getallproofcat(this.sentCatID)
    .subscribe(products=>{
      this.productslist=products;
    }); }
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
