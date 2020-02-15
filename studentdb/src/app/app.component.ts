import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    name:string='';

    names = ['vipul','aakash','akshay','prakash'];
    remove(name:string){

    this.names.splice(this.names.indexOf(name),1);

   }

   add(name:string){
     this.names.push(name);
   }

  
}
