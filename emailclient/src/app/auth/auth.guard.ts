import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import {filter, map, skipWhile, take, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  //! Make sure to mark the return Observable as complete for canLoad otherwise Angular will keep waiting for it to finish.
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isSignedIn$.pipe(
      filter((isSignedIn): isSignedIn is boolean => isSignedIn !== null),
      take(1),
      tap(isSignedIn => {
        if (!isSignedIn) {
          this.router.navigateByUrl("");
        }
      })
    );
  }
}
