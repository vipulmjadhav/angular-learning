import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dirchild',
  templateUrl: './dirchild.component.html',
  styleUrls: ['./dirchild.component.css']
})
export class DirchildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() num:number[] = [];


}
