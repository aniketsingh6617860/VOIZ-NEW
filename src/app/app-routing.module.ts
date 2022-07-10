import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CorporateloginComponent } from './corporatelogin/corporatelogin.component';
import { CreateanaccountComponent } from './createanaccount/createanaccount.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { DongleComponent } from './dongle/dongle.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PrepaidComponent } from './prepaid/prepaid.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'contactus' ,component:ContactUsComponent},
  {path: 'customerlogin',component:CustomerloginComponent},
  {path: 'corporatelogin',component:CorporateloginComponent},
  {path: 'createanaccount',component:CreateanaccountComponent},
  {path: 'forgotpassword',component:ForgotpasswordComponent},
  {path: 'prepaid',component:PrepaidComponent},
  {path: 'postpaid',component:PostpaidComponent},
  {path: 'dongle',component:DongleComponent},
  {path: 'newpassword',component:NewpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
