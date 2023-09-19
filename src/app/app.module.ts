import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './components/demo-component/demo-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { InvestmentListComponent } from './components/investment-list/investment-list.component'; // Import RouterModule and Routes
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { SignInWithEmailButtonComponent } from './components/sign-in-email-button/sign-in-email-button.component';
import { SignInFacebookButtonComponent } from './components/sign-in-facebook-button/sign-in-facebook-button.component';
import { SignInWithGoogleButtonComponent } from './components/sign-in-google-button/sign-in-google-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpAuthInterceptor } from './shared/http-auth.interceptor';
import { SignInTwitterButtonComponent } from './components/sign-in-twitter-button/sign-in-twitter-button.component';
import { ParksComponent } from './components/parks/parks.component';
import { MaterialModule } from './modules/material/material.module';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'parks', component: ParksComponent }
];


 

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    InvestmentListComponent,
    SignInWithEmailButtonComponent,
    SignInFacebookButtonComponent,
    SignInWithGoogleButtonComponent,
    SignInTwitterButtonComponent,
    ParksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    provideFirebaseApp(() => initializeApp(
      {
        apiKey: "AIzaSyCRxebCj12lI3bt8ve5GUhkBTbDqpLEHDo",
        authDomain: "gcp-developer-1.firebaseapp.com",
        projectId: "gcp-developer-1",
        storageBucket: "gcp-developer-1.appspot.com",
        messagingSenderId: "103566812227",
        appId: "1:103566812227:web:cdb321537c2e4f9412e0f6"
      }
    )),
    provideAuth(() => getAuth())
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true},
    GoogleAuthProvider,
    FacebookAuthProvider,
    TwitterAuthProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
