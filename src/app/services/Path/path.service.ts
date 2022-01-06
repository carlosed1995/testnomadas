import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  public apiUrl = 'http://darient-api-shoes.somee.com/';

  constructor() { }
}
