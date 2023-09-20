import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpAuthInterceptor } from './shared/http-auth.interceptor';
import { ParksComponent } from './components/parks/parks.component';
import { MaterialModule } from './modules/material/material.module';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'parks', component: ParksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
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
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
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
