import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CorporateloginComponent } from './corporatelogin/corporatelogin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateanaccountComponent } from './createanaccount/createanaccount.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    CustomerloginComponent,
    CorporateloginComponent,
    ForgotpasswordComponent,
    CreateanaccountComponent,
    PrepaidComponent,
    PostpaidComponent,
    DongleComponent,
    NewpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
