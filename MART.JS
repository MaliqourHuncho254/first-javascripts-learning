class Student {
    #firstName;
    #lastName;
    #score;

    constructor(firstName, lastName, score) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#score = score;
    }

    set setFirstName(val) {
        this.#firstName = val;
    }

    set setLastName(val) {
        this.#lastName = val;
    }

    set setScore(val) {
        if (val < 0) {
            console.log("Score cannot be a negative number");
        } else if (val > 100) {
            console.log("Score cannot be above 100");
        } else {
            this.#score = val;
        }
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }
}

let student1 = new Student("Collins", "Powell", 57);
console.log(student1.fullName);