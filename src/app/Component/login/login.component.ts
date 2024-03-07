import { Component } from '@angular/core';
import { ProductsService } from '../../Services/product.service';
import { Router } from '@angular/router';
import { Usertoken } from '../../Moduels/usertoken';
import { Ilogin } from '../../Moduels/ilogin';
import { FormsModule } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { response } from 'express';
import { LoginService } from '../../Services/login.service';
import { LocalstorageService } from '../../Services/localstorage.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  responsedata:any;
   helper = new JwtHelperService(); 
  loginObj:Ilogin ={}as Ilogin;
  body :any;
  user = {}as Usertoken;
  islogged:string='';
  private readonly token_name ='token';
  get token():any
  {
    return localStorage.getItem(this.token_name)
  }
  constructor(private prdservice :ProductsService ,
    private router:Router,private loginservice : LoginService,
    private storageservice :LocalstorageService)
  {
   
  }
  // login() {
  //   this.prdservice.onLogin(this.loginObj).subscribe((res:any)=> {
    
  //     if(res != null) {
  //       this.responsedata=res;
  //       localStorage.setItem('token', this.responsedata.token);
  //      this.user = this.prdservice.getuser(this.responsedata.token)
  //       this.router.navigateByUrl('/pages');
  //     } else {
  //       alert(res.message)
  //     }
  //   },error=>{
  //     alert("Wrong Credentials")
  //   })
  // }

  // login() {
  //   this.prdservice.onLogin(this.loginObj).subscribe((res:any)=> {
    
  //     if(res != null) {
  //       this.responsedata=res;
  //     //  this.user = this.prdservice.getuser(this.responsedata.token);
  //      // this.islogged='Admin';
       
  //      const decodedToken = this.helper.decodeToken(this.responsedata.token);
       
  //      this.user.name=this.responsedata.name;
  //      this.user.role=this.responsedata.role;
  //      this.user.user_Id=this.responsedata.userId;
  //     //  const mo =decodedToken.getTokenExpirationDate;
  //     //  this.user.name=decodedToken.getAuthScheme.name;

  //      //console.log(this.user.role);
  //     // this.loginservice.sent(this.islogged);
  //     //  console.log(decodedToken.name);
  //      localStorage.setItem('token', this.responsedata.token);
  //      this.loginservice.setCountry('Admin');
  //      //this.loginservice.changelog('Admin');
  //     // this.loginservice.setCountry('Admin');
  //       this.router.navigateByUrl('/pages');

  //     } else {
  //       alert(res.message)
  //     }
  //   },error=>{
  //     alert("Wrong Credentials")
  //   })
  // }
  
 


  login() {

    this.prdservice.onLogin(this.loginObj).subscribe((res:any)=> {
    
      if(res != null) {
        this.responsedata=res;
      //  this.user = this.prdservice.getuser(this.responsedata.token);
       // this.islogged='Admin';
       
       const decodedToken = this.helper.decodeToken(this.responsedata.token);
       
       this.storageservice.saveId(res.userId);
       this.storageservice.saveuserRole(res.role);
       this.user.user_Id=this.responsedata.userId;
      //  const mo =decodedToken.getTokenExpirationDate;
      //  this.user.name=decodedToken.getAuthScheme.name;
   
       //console.log(this.user.role);
      // this.loginservice.sent(this.islogged);
      //  console.log(decodedToken.name);
       localStorage.setItem('token', this.responsedata.token);
       this.loginservice.isloggedSubject.next(true);
       this.loginservice.IsRoleSubject.next(this.responsedata.role);
      //  this.loginservice.isRoleLogged.next(this.responsedata.role);
        //console.log(this.responsedata.role);
       this.loginservice.setCountry('Admin');
       this.loginservice.changelog(this.responsedata.role);
      // this.loginservice.setCountry('Admin');
      
        this.router.navigateByUrl('/home');
          
      } else {
        alert(res.message)
      }
    },error=>{
      alert("Wrong Credentials")
    })
  }
    
}
