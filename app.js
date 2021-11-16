function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    };
}

let favoriteNumber = 42

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "that is my favorite!"
}

const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!"
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

function createAnimal(animal, verb, noise) {
    return {
        species: animal,
        verb,

        noise() {
            return (`${noise}`)
        },
    }
}