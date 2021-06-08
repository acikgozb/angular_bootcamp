import {AuthService} from "./../auth.service";
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  //! Enter navigating programmatically.

  //! need to get access to Router by using DI.

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.signOut().subscribe(() => {
      // navigate to signIn page.
      // or navigate to some other component.
      this.router.navigateByUrl("/");
    });
  }

}
