import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';



import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustompipePipe } from './custompipe.pipe';
import { Custompipe2Pipe } from './custompipe2.pipe';
import { Custompipe3Pipe } from './custompipe3.pipe';
import { HighlightDirective } from './highlight.directive';
import { StructuralDirective } from './structural.directive';
import { FeedbackComponent } from './feedback/feedback.component';
import { DeleteFeedbackComponent } from './delete-feedback/delete-feedback.component';
import { InsertFeedbackComponent } from './insert-feedback/insert-feedback.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from './footer/footer.component';
import { RazorpayComponent } from './razorpay/razorpay.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    RegisterComponent,
    ContactComponent,
    SidebarComponent,
    LoginComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    CustompipePipe,
    Custompipe2Pipe,
    Custompipe3Pipe,
    HighlightDirective,
    StructuralDirective,
    FeedbackComponent,
    DeleteFeedbackComponent,
    InsertFeedbackComponent,
    UpdateFeedbackComponent,
    FooterComponent,
    RazorpayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    Ng2SearchPipeModule 
  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1234567890-abc123def456.apps.googleusercontent.com'
          ),
        },
      ],
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
