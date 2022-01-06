import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable} from "rxjs";  
import { map } from 'rxjs/operators';
import { PathService } from '../Path/path.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,public pathurl:PathService,public router: Router) {}

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  
 private basePath = this.pathurl.apiUrl;

 login(): Observable<any>{

  return this.http.get(this.basePath+'users/list');

}
 private extractData(res: Response) {
  let body = res.json();
  return body;
  }

  get isLogged() {
    if(localStorage.getItem('currentUser')){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
  setUser(user): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

}
