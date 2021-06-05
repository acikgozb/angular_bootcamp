import {BehaviorSubject} from "rxjs";
import {AuthService} from "./auth/auth.service";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //! This component must know the status of user's authentication to change it's template.
  //! To do so, we can subscribe to the BehaviorSubject by calling authService.isSignedIn$.subscribe();
  //! But there is also another way that handles all the logic of setting an Observable value:

  //! Enter Async pipe.

  //! Async pipe evaluates the latest value of observable and makes changes in template accordingly.
  //! There is no need to subscribe to the observable in ngOnInit, pipe handles all those by itself.

  //! This is not a better way or worse way, just 'another way' of doing things.
  signedIn$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.isSignedIn$;
  }

  ngOnInit() {
    this.authService.checkAuthStatus().subscribe(() => {});
  }
}
