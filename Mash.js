function mash(){
    return "You will live in a " + getHome() + " and you will have " + getChildrenCount() + " kids and you'll drive a " + getCar() + " and your wife will be " + nameOfSpouse(); 
}


let mixup = ["Mansion" , "Apartment" , "Shack", "House" , process.argv[2] ];
function getHome(){
    let randomizer = Math.floor(Math.random() * mixup.length);
    if(process.argv[2] == undefined){
        mixup.pop(process.argv[2]);
        randomizer = Math.floor(Math.random() * mixup.length);
        return mixup[randomizer];
    }
    return mixup[randomizer];

}

function getChildrenCount(){
    let GCCR = Math.floor(Math.random() * 100 + 1);
    let arr = [GCCR , process.argv[3]];
    let fiftyfiftyRandomizer = Math.floor(Math.random() * arr.length);
    if(process.argv[3] == undefined){
        arr.pop(process.argv[3]);
        fiftyfiftyRandomizer = Math.floor(Math.random() * arr.length);
        return arr[fiftyfiftyRandomizer];
    }
        return arr[fiftyfiftyRandomizer];
}

let cars = ["lambo" , "convertible" , "box with wheels" , "BMW X6" , "Buggati" , "Corvet" , "Dodge Charger", "Honda Accord", process.argv[4]];
function getCar(){  
         let randCar = Math.floor(Math.random() * cars.length);
         if(process.argv[4] == undefined){
            mixup.pop(process.argv[4]);
            randCar = Math.floor(Math.random() * cars.length);
            return cars[randCar];
        }else{
            return cars[randCar];
        }
}

let spouse = [" Sarah" , " Betty", " Mariah", " Elaine", " Sophia" , " Cindy" , " Lindsy", " Stephanie"]; 
function nameOfSpouse(){
    let randSpouse = Math.floor(Math.random()* spouse.length);
    return spouse[randSpouse];
}

console.log(mash());