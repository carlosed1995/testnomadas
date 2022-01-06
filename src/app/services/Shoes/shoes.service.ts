import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable} from "rxjs";  
import { map } from 'rxjs/operators';
import { PathService } from '../Path/path.service';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(private http: HttpClient,public pathurl:PathService) {}

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  
 private basePath = this.pathurl.apiUrl;

 listshoes(): Observable<any>{
  return this.http.get(this.basePath+'shoes/list');
} 

updateShoes(shoes) {
  // TODO: obtener token 
  console.log(shoes); 
 const url_api = this.basePath+`shoes/update/`;
  return this.http
    .put(url_api, shoes,
      {responseType: 'text'})
    .pipe(map(data => data));
}

saveShoes(page) {
  // TODO: obtener token
  // TODO: not null 
  console.log(page)
  const url_api = this.basePath+`shoes/create`;
  return this.http.post(url_api,page,
    {responseType: 'text'})
  .pipe(map(data => data));

  
}

detailshoes(id): Observable<any>{
  return this.http.get(this.basePath+'shoes/read/'+id);
} 

delete(id){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

   const url_api = this.basePath+`shoes/delete/${id}`;
    
  
   return new Promise(resolve => {
    this.http.delete(url_api, httpOptions)       
                   .subscribe(res => {     
                       resolve(res);
                   }, err => {               
                       resolve(err);
                   });
    });
}

}
