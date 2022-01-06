import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable} from "rxjs";  
import { map } from 'rxjs/operators';
import { PathService } from '../Path/path.service';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http: HttpClient,public pathurl:PathService) {}

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  
 private basePath = this.pathurl.apiUrl;

 liststores(): Observable<any>{

  return this.http.get(this.basePath+'stores/list');

}

}
