import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private url = "https://frontiercodingtests.azurewebsites.net/api/accounts/getall";
  constructor( private http:HttpClient) { }

  getData(){
    //let url="https://frontiercodingtests.azurewebsites.net/api/accounts/getall";
  
    


    return this.http.get(this.url).pipe(
      map(result=>{
       return result;
      })
    );

  }


}
