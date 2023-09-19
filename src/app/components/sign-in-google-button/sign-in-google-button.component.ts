import { Component } from '@angular/core';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in-google-button',
  templateUrl: './sign-in-google-button.component.html',
  styleUrls: ['./sign-in-google-button.component.scss']
})
export class SignInWithGoogleButtonComponent {

  constructor(public provider: GoogleAuthProvider, private authService: AuthService ) {

  }

  loginWithGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        this.provider.setCustomParameters({
          prompt: 'select_account'
        });

        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          //const token = credential.accessToken;
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
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }


  logoutOfGoogle() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.

    });
  }

}
