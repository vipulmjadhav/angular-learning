import { likesComponent } from './likes.Component';

let component = new likesComponent(9,false);

component.onClick();

console.log(`likes : ${component.likesCount}, isselected:${component.isSelected}`);

