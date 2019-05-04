import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
              private router: Router,
              private _localStorageService: LocalStorageService){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let id = this._localStorageService.getIdUser();
    if (id) {
      // all ok, proceed navigation to routed component
      return true;
    } else{
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
