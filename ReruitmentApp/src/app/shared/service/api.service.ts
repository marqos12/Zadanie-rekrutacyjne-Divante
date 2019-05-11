import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../class/class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getItems():Observable<Item[]>{
      return this.http.get<Item[]>("http://localhost:3000/item");
  }

  public getItem(id:string):Observable<Item>{
    return this.http.get<Item>("http://localhost:3000/item/"+id);
}

}
