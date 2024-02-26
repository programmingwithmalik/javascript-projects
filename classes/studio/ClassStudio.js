//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate{
    constructor(name = "", mass ="", scores = []){
        this.name = name
        this.mass = mass
        this.scores = scores //[]

    }
    addScore(newScore){
       this.scores.push(newScore)
    }
    average(){
        let total = 0;
        for(let i = 0; i < this.scores.length; i++){
            total += this.scores[i]
        }
        let average = Math.round(total/this.scores.length *10)/10;
        return average
    }

    status () {
        let average = this.average(

        )
    if (average >=90){
    return "Accepted" 
    }
    
    else if (average >=80 )
      {
        return "Reserved"
        }


    else if (average>=70 )
      {
        return "Probationary"
        }

    else
    {
      return "Rejected!"
    }


  }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135,[88,85,90])
let merryMaltese = new CrewCandidate("Merry Maltese",1.5,[93,88,97])
let gladGator = new CrewCandidate("Glad Gator",225,[75,78,62])
bubbaBear.addScore(83)
console.log(bubbaBear.scores)
console.log(merryMaltese.average())


