import { Injectable } from '@angular/core';
import { AuthRESTService } from './auth-rest.service';
@Injectable({
  providedIn: 'root'
})
export class virtualRouter {
  constructor(
    public authRESTService:AuthRESTService
  ){

  }
   routerActive:string= "home";

    setRoute(route: string) {
      const userType = this.authRESTService.getType();
      this.routerActive = route;

    }
  
  }
  

