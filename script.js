class Cat{
    constructor(name, age){
        this.name=name;
        this.age= age;

    }
    meow(){
        console.log(`${this.name} meows`);
    }

    purr(){
        console.log(`${this.name} purrs`);
    }

    hiss(){
        console.log(`${this.name} hisses`);
    }
    species= 'feline'
}




const dave = new Cat('dave',4)
const roger = new Cat('roger',2)
console.log(dave.species);
dave.purr()
roger.meow()
dave.hiss()

class Pirate {
    constructor(name, age, weapon = 'sword'){
        this.name= name;
        this.age = age;
        this.weapon = weapon;
    }

    attack(){
        console.log(`${this.name} attacks with ${this.weapon}`);
    }

    taunt(){
        console.log(`Darn you scallywag!`);
    }

    sneeze(){
        console.log('Achooo!');
    }
}


const fred = new Pirate("fred", 23, "musket")
const Davie = new Pirate('Davie', 34)
const Wilhelm = new Pirate("wilhelm", 23, "cannon")
const jollyRoger= [fred,Davie,Wilhelm]



const max = new Pirate("max", 19, "revolver")
const kurt = new Pirate('kurt', 36, 'dagger')
const eddy = new Pirate("Eddy", 23, "club")
const blackPearl= [max,kurt,eddy]


for (pirate of jollyRoger){
    console.log(` name : ${pirate.name}  age : ${pirate.age}  weapon : ${pirate.weapon}`);
}


for (pirate of blackPearl){
    console.log(` name : ${pirate.name}  age : ${pirate.age}  weapon : ${pirate.weapon}`);
}