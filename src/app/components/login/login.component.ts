import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() : void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
 
  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      if (email && password) {
        this.authService.signInWithEmailAndPassowrd(email, password)
          .then((userCredential) => {
            // Authentication successful
            // userCredential.user.getIdToken().then((token) => {
            //   if (token) {
            //     console.log('User ID token:', token);
            //   } else {
            //     console.log('User not signed in or token retrieval failed.');
            //   }
            // });
            // Redirect or navigate to another page
          })
          .catch((error) => {
            // Authentication failed
            console.error('Error signing in:', error);
          });
      }
    }
  }


  // onLogin() {
  //   this.authService.signInWithEmailAndPassowrd(email, password)
  //     .then(() => {
  //       // Authentication successful
  //       console.log('User signed in');
  //       // Redirect or navigate to another page
  //     })
  //     .catch((error) => {
  //       // Authentication failed
  //       console.error('Error signing in:', error);
  //     });
  // }
}
