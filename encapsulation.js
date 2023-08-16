class student{
    #FirstName
    #LastName
    #Score
    constructor(FirstName , LastName , Score){
        this.#FirstName = FirstName;
        this.#LastName = LastName; 
        this.#Score = Score;
    }

    set setFirstName(val){
        this.#FirstName = val;
    }
    set setLastName(val){
        this.#LastName = val;

    }
    set setScore(val){
        if(val < 1){
            console.log("Score cannot be negative number");
        }else if(val >100){
            console.log("Score cannot be dipslayed above 100");
        }else{
            console.log("No display");
        }
    }
    get fullName(){
        return "Your fullName is: ${this.#FirstName},${this.#LastName} and ${this.#Score}";
    }
}
class partTime extends student{
    constructor(FirstName, LastName, Score);
    super(FirstName , LastName ,Score);
}