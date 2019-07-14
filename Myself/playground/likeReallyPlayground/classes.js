class Creature {
  constructor(type = "hamster",legs = 4,head = 1){
    this.type = type
    this.legs = legs
    this.head = head
  }
}

class Human extends Creature {
  constructor(lang,color,job){
    super(lang,color,job)
    this.lang = lang
    this.color = color
    this.job = job
  }
  
  get work (){
    return `This dude is not a rapper`
  }
}


const creature = new Creature('dog',4,1)
const hamster = new Creature()

console.log(`${creature.type} has a ${creature.legs} legs`)
console.log(`${hamster.type} has a ${hamster.legs} legs`)
console.log(`This ${builder.lang} speaking ${builder.color} man is a ${builder.work}`)
