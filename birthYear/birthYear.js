

function ageClassification() {
    let yearOfBirth = prompt("What is your year of birth?", "1990");

    let age = 2023 - yearOfBirth
    if (yearOfBirth < 1900 || yearOfBirth > 2023) {
        console.log("This is not a valid year of birth!")
    } else {

        if (age < 18) {
            console.log("You are " + age + " years old and you are a MINOR.")

        } else if (age < 35) {
            console.log("You are " + age + " years old and you are a YOUTH.")

        } else {
            console.log("You are " + age + " years old and you are an ELDER.")

        }

    }

}

console.log(ageClassification())