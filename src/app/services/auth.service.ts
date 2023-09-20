import { Injectable } from '@angular/core';
import { Auth, provideAuth, getAuth, signInWithEmailAndPassword, signOut, User} from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {  

  private _user: User;
  private _loginChangedSubject = new Subject<boolean>();

  public loginChanged$ = this._loginChangedSubject.asObservable();

  constructor(private auth: Auth) {}

  // Sign in with email and password
  signInWithEmailAndPassowrd(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password).then(userCredential => {
       if (this._user !== userCredential.user) {
        this._user = userCredential.user;
        this._loginChangedSubject.next(true);
       }
    })
  }

  signInWithOAuthProviderComplete(user: User) {
      this._user = user;
      this._loginChangedSubject.next(true);
  }

  signOutWithProviderComplete() {
    this._loginChangedSubject.next(true);
  }

  isLoggedIn() : Promise<boolean> {
    if (this._user) {
      return this._user.getIdTokenResult().then(token => {
        return new Date(token.expirationTime) >= new Date()
      });
    }
    else 
    {
      return new Promise<boolean>((resolve) => {
        resolve(false);
      });
    }
      
  }

  // Sign out
  signOut() {
    return signOut(this.auth);
  }

  getAccessToken() {
    return this._user.getIdToken().then(token => {
        return token;
    });
  }

  getExpirationTime() {
    return this._user.getIdTokenResult().then(result => {
        return result.expirationTime;
    });
  }
   

  //See all other methods to implement here https://www.linkedin.com/pulse/angular-14-firebase-authentication-tutorial-attia-imed/

}
