import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { UsersService} from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'coding-test';
  data : any

  constructor( private user:UsersService){
    this.user.getData().subscribe(data=>{
      console.warn(data)
      //this.data = data
      if(Array.isArray(data)){
        this.data = data.filter(
        res => res.PaymentDueDate   !== null);
     }
     
     
      
    })
  }
}
