import { Component } from '@angular/core';
import { getAuth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in-facebook-button',
  templateUrl: './sign-in-facebook-button.component.html',
  styleUrls: ['./sign-in-facebook-button.component.scss']
})

export class SignInFacebookButtonComponent {

  constructor(public provider: FacebookAuthProvider, private authService: AuthService ) {

  }

  loginWithFacebook() {
    const auth = getAuth();

    this.provider.setCustomParameters({
      'display': 'popup'
    });


    signInWithPopup(auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          this.authService.signInWithOAuthProviderComplete(user);
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  }

}
