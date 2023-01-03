import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InsertFeedbackComponent } from './insert-feedback/insert-feedback.component';
import { DeleteFeedbackComponent } from './delete-feedback/delete-feedback.component';
import { RazorpayComponent } from './razorpay/razorpay.component';
import { FooterComponent } from './footer/footer.component';





const routes: Routes = [
  { path: 'header', component: HeaderComponent }, 
  { path: 'homepage', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductComponent },
  { path: 'sidebar', component: SidebarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'delete-feedback', component: DeleteFeedbackComponent},
  { path: 'razorpay', component: RazorpayComponent},

  { path: 'update-feedback', component: UpdateFeedbackComponent},
  { path: 'insert-feedback', component: InsertFeedbackComponent},
  { path: 'footer', component: FooterComponent},

  { path: '',redirectTo: '/homepage',pathMatch: 'full' ,}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
