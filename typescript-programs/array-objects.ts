//typed arrays
let arr:string[] = ['green','red','white','black'];

//generic arrays
let numarr:Array<number> = [1,2,3,4,5,6];

//objects

let obj = {
    firstname:'vipul',
    lastname:'jadhav',
    getFullName : function(){
        console.log(this.firstname)
    }
}

obj.getFullName()

//---------------------array methods ---------------------------
let colorarr:string[] = [];

function pushColor(color:string):void{

    colorarr.push(color);
}

function removeColor(color:string):void{

    colorarr.splice(colorarr.indexOf(color),1);
}

function getColors():void {

    for(let i of colorarr){
        console.log(i);
    }
}

pushColor('red');
pushColor('black');
pushColor('white');

getColors();
removeColor('black');
pushColor('yellow');
pushColor('green');

getColors();
removeColor('green');

getColors();