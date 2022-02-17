import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingnupComponent } from './singnup/singnup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { PopularComponent } from './popular/popular.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewComponent } from './review/review.component';
import { OrderComponent } from './order/order.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonatiosComponent } from './donatios/donatios.component';
import { VerifyComponent } from './verify/verify.component';
import { PromoComponent } from './promo/promo.component';

@NgModule({
  declarations: [
    AppComponent,
    SingnupComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    SpecialtyComponent,
    PopularComponent,
    GalleryComponent,
    ReviewComponent,
    OrderComponent,
    AboutUsComponent,
    DonatiosComponent,
    VerifyComponent,
    PromoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 

      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

