import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todoArr = []

  addTodo(value){

    this.todoArr.push(value);
  }

  deleteTodo(value){

    for(let i=0;i<=this.todoArr.length;i++){
      if(value == this.todoArr[i]){
        this.todoArr.splice(i,1);
      }
    }
    
  }
}
