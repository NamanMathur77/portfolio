import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileReadServiceService {

  constructor(private http:HttpClient) {
   }
   public getJSON():Observable<any>{
    return this.http.get("./assets/userdata.json");
   }

}
