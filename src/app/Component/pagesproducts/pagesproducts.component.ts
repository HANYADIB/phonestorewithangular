import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-pagesproducts',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './pagesproducts.component.html',
  styleUrl: './pagesproducts.component.css',
})
export class PagesproductsComponent {
  productslist: any[] = [];
  filterObj = {
    item: '',
    catagorgsId: 0,
    suppliersId: 0,
    pg: 1,
  };
  constructor(
    private httpclient: HttpClient,
    private router: Router,
    private loginservice: LoginService
  ) {}
  // ngOnChanges(): void {
  //   this.filetrCandidates('');
  // }
  ngOnInit(): void {
    // this.loginservice.setCountry('Admin');

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

  // filetrCandidates(catagorgsId:any) {
    // this.httpclient.get
    // (`https://localhost:44380/api/Product/Num?catagorgsId=${this.filterObj.catagorgsId}&suppliersId=${this.filterObj.suppliersId}
    // &pg=${this.filterObj.pg}&item=${this.filterObj.item}`)
  //  this.router.navigate(['/pages'], { queryParams: {catagorgsId} });

  // }
}
