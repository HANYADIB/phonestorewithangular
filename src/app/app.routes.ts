import { Routes } from '@angular/router';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { LoginComponent } from './Component/login/login.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductlistComponent } from './Component/productlist/productlist.component';
import { PagesproductsComponent } from './Component/pagesproducts/pagesproducts.component';
import { AddproductComponent } from './Component/addproduct/addproduct.component';
import { TesthomeComponent } from './Component/testhome/testhome.component';
import { MasterComponent } from './Component/master/master.component';
import { CatagorylistComponent } from './Component/catagorylist/catagorylist.component';

export const routes: Routes = [
    {path: 'signup', component:SignUpComponent},
    {path: 'login', component:LoginComponent},
    {path: 'header', component:HeaderComponent},
    {path: 'home', component:HomeComponent},
    {path: 'product', component:ProductlistComponent},
    {path: 'Signup', component:SignUpComponent},
    {path: 'pages', component:PagesproductsComponent},
    {path: 'add', component:AddproductComponent},
    {path: 'testhome', component:TesthomeComponent},
    {path: 'master', component:MasterComponent},
    {path: 'catagory', component:CatagorylistComponent},
    
];
