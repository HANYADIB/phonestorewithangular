import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../Services/product.service';
import { pipe, tap } from 'rxjs';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  productslist: any[] = [];
  y: number = 0;
  filterObj = {
    item: '',
    catagorgsId: 0,
    suppliersId: 0,
    pg: 1,
  };

  maount: number = 1;

  constructor(
    private httpclient: HttpClient,
    private router: Router,
    private loginservice: LoginService,
    private prdservices: ProductsService
  ) {}

  ngOnInit(): void {
    this.filetrCandidates('');
  }
  onPrevious() {
    if (this.filterObj.pg > 1) {
      this.filterObj.pg--;
      this.filetrCandidates('');
    }
  }
  onNext() {
    this.filterObj.pg++;
    this.filetrCandidates('');
  }

  filetrCandidates(hany: any) {
    this.httpclient
      .get(
        `https://localhost:44380/api/Product/Num?catagorgsId=${this.filterObj.catagorgsId}&suppliersId=${this.filterObj.suppliersId}
    &pg=${this.filterObj.pg}&item=${this.filterObj.item}`
      )
      .subscribe((res: any) => {
        this.productslist = res;
      });
  }
  addtocart(Id: number) {
    this.prdservices.addToCart(Id).subscribe(
      (res: any) => {
        this.prdservices.Refresh.next();
      },
      (error) => {  
        alert('Wrong Credentials');
      }
    );
  }
}
