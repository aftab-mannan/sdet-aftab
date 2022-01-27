import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseTutUrl = 'http://localhost:8089/api/contactUses';

  constructor(private httpClient: HttpClient) { }


  

  create(data: any): Observable<any> {
    console.log(data);
    return this.httpClient.post(this.baseTutUrl, data);
  }
}

