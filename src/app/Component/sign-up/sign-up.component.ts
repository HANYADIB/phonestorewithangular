import { Component } from '@angular/core';
import { Iuser } from '../../Moduels/iuser';
import { ProductsService } from '../../Services/product.service';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  newUser: Iuser= {} as Iuser;

  constructor(private prdservice:ProductsService ,private router: Router)
  {
  
  }
  adduser() {
    const observer={
      next: (prd:Iuser) => {
        alert("User Register Successfuly"); 
        this.router.navigateByUrl('/pages');
      },
      error: (err:Error)=>{alert(err.message)}
    }
    this.prdservice.Register(this.newUser).subscribe(observer);
    console.log(this.newUser);
  }
}
