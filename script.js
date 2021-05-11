// exercise object
const exerciseCategories = {
    core: ['Crunches', 'Reverse Crunches'],
    arms: ['Push-Ups', 'Shoulder Taps', 'Tripcep Dips'],
    legs: ['Squats', 'Lunges', 'High Knees'],
    wholeBody: ['Burpies', 'Mountain Climbers']
}

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
    // randomization components
    const randomCore = exerciseCategories.core[Math.floor(Math.random() * exerciseCategories.core.length)]
    const randomArms = exerciseCategories.arms[Math.floor(Math.random() * exerciseCategories.arms.length)]
    const randomLegs = exerciseCategories.legs[Math.floor(Math.random() * exerciseCategories.legs.length)]
    const randomWholeBody = exerciseCategories.wholeBody[Math.floor(Math.random() * exerciseCategories.wholeBody.length)]
    //const numReps = Math.ceil(Math.random() * 15)
    //const numSets = Math.ceil(Math.random() * 10)

    // message selections
    const coreGenerator = randomCore + ': ' + getRandomNumRep() + ' reps and ' + getRandomNumSet() + ' sets.'
    const armsGenerator = randomArms + ': ' + getRandomNumRep() + ' reps and ' + getRandomNumSet() + ' sets.'
    const legsGenerator = randomLegs + ': ' + getRandomNumRep() + ' reps and ' + getRandomNumSet() + ' sets.'
    const wholeBodyGenerator = randomWholeBody + ': ' + getRandomNumRep() + ' reps and ' + getRandomNumSet() + ' sets.'


    console.log(coreGenerator)
    console.log(armsGenerator)
    console.log(legsGenerator)
    console.log(wholeBodyGenerator)
}

workoutGenerator()