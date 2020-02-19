import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  names = ['ajay','vijay','sujay','manay','tanay'];
  numbers = [40,46,30,67,35,12,34,10,26];

}
