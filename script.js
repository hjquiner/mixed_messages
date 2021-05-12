// exercise object
const exerciseCategories = {
    core: ['Crunches', 'Reverse Crunches'],
    arms: ['Push-Ups', 'Shoulder Taps', 'Tripcep Dips'],
    legs: ['Squats', 'Lunges', 'High Knees'],
    wholeBody: ['Burpies', 'Mountain Climbers']
}
// rep & set randomization
function randomInteger(max) {
    return Math.ceil(Math.random() * max)
}

function getRandomNumSet() {
    return randomInteger(10)
}

function getRandomNumRep() {
    return randomInteger(15)
}

function workoutGenerator() {
    for(const key in exerciseCategories){
        let randomExersice = exerciseCategories[key][Math.floor(Math.random() * exerciseCategories[key].length)]
        let exerciseGenerator = randomExersice + ': ' + getRandomNumRep() + ' reps and ' + getRandomNumSet() + ' sets.'
        console.log(exerciseGenerator)
    }
}

workoutGenerator()