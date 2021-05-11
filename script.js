// exercise object
const exerciseCategories = {
    core: ['Crunches', 'Reverse Crunches'],
    arms: ['Push-Ups', 'Shoulder Taps', 'Tripcep Dips'],
    legs: ['Squats', 'Lunges', 'High Knees'],
    wholeBody: ['Burpies', 'Mountain Climbers']
}

// randomization components
const randomCore = exerciseCategories.core[Math.floor(Math.random() * exerciseCategories.core.length)]
const randomArms = exerciseCategories.arms[Math.floor(Math.random() * exerciseCategories.arms.length)]
const randomLegs = exerciseCategories.legs[Math.floor(Math.random() * exerciseCategories.legs.length)]
const randomWholeBody = exerciseCategories.wholeBody[Math.floor(Math.random() * exerciseCategories.wholeBody.length)]
const numReps = Math.ceil(Math.random() * 15)
const numSets = Math.ceil(Math.random() * 10)

// message selections
const coreGenerator = randomCore + ': ' + numReps + ' reps and ' + numSets + ' sets.'
const armsGenerator = randomArms + ': ' + numReps + ' reps and ' + numSets + ' sets.'
const legsGenerator = randomLegs + ': ' + numReps + ' reps and ' + numSets + ' sets.'
const wholeBodyGenerator = randomWholeBody + ': ' + numReps + ' reps and ' + numSets + ' sets.'


console.log(coreGenerator)
console.log(armsGenerator)
console.log(legsGenerator)
console.log(wholeBodyGenerator)