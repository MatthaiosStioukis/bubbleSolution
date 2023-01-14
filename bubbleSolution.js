
// Here I am creating the array that contains all the Bubble solutions.
var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var winningScores = [];              

var output;
var highScore = 0;

// Here i will loop over each score in the scores array and print it on the console.
for (var i = 0; i < scores.length; i++) {
    output = ("Bubble solution #" + i + " score: " + scores[i]);
    console.log(output);
// Here we are finding the highest value in the scores array.
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}

// Now that we found the highest score we will iterate one more time over the array to find 
// if there more then one solution that have the same score and in that case push them in to the winningScores array
for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        winningScores.push(i);
    }
}

// Here we are Login onto the console all the data we gatherd and filtert out above
console.log(" ");
console.log("Total Bubble solution tests: " + scores.length);
console.log("Highest Bubble score: " + highScore);
console.log("Solutions with highest score: " + winningScores);