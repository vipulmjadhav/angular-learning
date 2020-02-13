//----------------DATA TYPES major 3 ----------------------
let num : number = 10;
let char:string = 'hello';
let bool:boolean = true;
let unknown:any = 234;

console.log(char);

//---------------FUNCTIONS------------------------------

function getnum(num):number {
    return num;
}

let ret = getnum(num);
console.log(ret);

//---------------ARROW FUNCTIONS ------------------
let arrow = ()=>{
    console.log('inside arrow function');
}

arrow();

let arrowwitharg = (charnew:string)=>{
    console.log(`arrow with ${charnew}`)
}

arrowwitharg(char)

//----------------------END--------------------------------