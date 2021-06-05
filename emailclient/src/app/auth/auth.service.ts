import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from "rxjs";
import {tap} from "rxjs/operators";


interface UsernameAvailableResponse {
  available: boolean;
}

interface SignUpCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignUpResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootURL = "https://api.angular-email.com";

  isSignedIn$ = new BehaviorSubject(false);

  //! Problem: We need to store the value of whether or not the user is signed in.

  //! Solution 1: Using a boolean field, simply toggle with functions.
  //! Not enough because: It is really hard to tell to other components when this simple boolean field is changed.
  //! To notice other components and make them "react" to this change, we need to create an Observable.

  //! Solution 2: Using an Observable.
  //! Not enough because: We need to be able to manually emit values from outside of the Observable.

  //! using a plain Observable does not suffice for cases where outside code wants to emit from an Observable.
  //! the only time where an Observable emits a value, is in it's callback function.
  //! To bypass this limitation, we can use a Subject which is both a subscriber and an observer.
  //! it is possible to call .next() from outside with a Subject.

  //! Solution 3: Using a Subject.
  //! Not enough because: Since it is a hot Observable, it doesn't emit values when a component subscribes.
  //! It only emits when it is triggered thus any components which subscribed late might miss the current value.

  //! Also we need to have a default value for isSignedIn state which is not possible with Subjects.

  //! REQUIREMENTS FOR REAL SOLUTION:

  //! 1 - We must be able to get it to emit a new value "from the outside",
  //! 2 - We must be able to give it a default, or starting, value,
  //! 3 - New subscribers must be given the value from it immediately after subscribing.

  //! Real solution: Enter BehaviorSubject.

  //! BehaviorSubject can get a default value, allow others to emit values and new subscribers will get the latest value when they are subscribed.

  constructor(private httpClient: HttpClient) {}

  usernameAvailable(username: string): Observable<UsernameAvailableResponse> {
    return this.httpClient.post<UsernameAvailableResponse>(
      `${this.rootURL}/auth/username`,
      {
        username: username
      }
    );
  }

  signUp(credentials: SignUpCredentials) {
    return this.httpClient.post<SignUpResponse>(
      `${this.rootURL}/auth/signup`,
      credentials
    )
      .pipe(
        tap(value => { //! Tap operator is skipped when endpoint returns an error.
          this.isSignedIn$.next(true);
        })
      );
  }

  checkAuthStatus() {
    return this.httpClient.get<SignedInResponse>(
      `${this.rootURL}/auth/signedin`,
    )
      .pipe(
        tap(({authenticated}) => {
          this.isSignedIn$.next(authenticated);
        })
      )
  }
}
