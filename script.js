// components
const exerciseType = ['Squats', 'Lunges', 'Burpies', 'Push-Ups', 'Crunches']
const randomExercise = exerciseType[Math.floor(Math.random() * exerciseType.length)]
const numReps = Math.floor(Math.random() * 15)
const numSets = Math.floor(Math.random() * 10)

// message selections
const exerciseGenerator = randomExercise + ': ' + numReps + ' number of reps and ' + numSets + ' number of sets'
