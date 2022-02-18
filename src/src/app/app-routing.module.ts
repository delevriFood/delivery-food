import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
const routes: Routes = [
  {path: 'Login', component :LoginComponent},
  {path:'App' , component :AppComponent } ,
  {path:'Singnup' , component :SingnupComponent},
  {path: 'Home', component :HomeComponent},
  {path: 'Admin', component :AdminComponent},
  {path: 'Specialty', component :SpecialtyComponent},
  {path: 'Popular', component :PopularComponent},
  {path: 'Gallery', component :GalleryComponent},
  {path: 'Review', component :ReviewComponent},
  {path: 'Order', component :OrderComponent},
  {path: 'AboutUs', component :AboutUsComponent},
  {path: 'Donatios', component :DonatiosComponent},
  {path:"Verify" , component:VerifyComponent} ,  
  {path: 'Promo', component :PromoComponent} , 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { } ; 

