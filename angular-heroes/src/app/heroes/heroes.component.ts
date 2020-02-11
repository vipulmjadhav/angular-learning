import { Component ,OnInit} from "@angular/core";
import { Hero } from "./heroes";
import {HEROES} from "./mock-heroes";

@Component({
    selector:'app-heroes',
    templateUrl:'./heroes.component.html',
    styleUrls:['./heroes.component.css']
})

export class heroesComponent implements OnInit{

    hero:Hero[] = HEROES;

    selectedHero:Hero;

    constructor(){

    }

    ngOnInit(){

    }

    onSelect(hero:Hero): void{

        this.selectedHero = hero;

    }
}

