
// Here I am creating the array that contains all the Bubble solutions.
var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var costs =  [.25, .27, .25, .25, .25, .25,
              .33, .31, .25, .29, .27, .22,
              .31, .25, .25, .33, .21, .25,
              .25, .25, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25,
              .25, .25, .27, .25, .26, .29];

// Here i will loop over each score in the scores array and print it on the console.
function printAndGetHighScore(scores) {
    var output;
    var highScore = 0;
    for (var i = 0; i < scores.length; i++) {
        output = ("Bubble solution #" + i + " score: " + scores[i]);
        console.log(output);
// Here we are finding the highest value in the scores array.
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}
// Now that we found the highest score we will iterate one more time over the array to find 
// if there more then one solution that have the same score and in that case push them in to the winningScores array
function getBestResult(scores) {
    var winningScores = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            winningScores.push(i);
        }
    }
    return winningScores;
}
// Here we created a function that will filter from the winningScore array the cheapest one and return it.
function ultimateWinnerByCost() {
    var x = 100;
    var ultimateWinner;
    for (var i = 0; i < winningScores.length; i++) {
        if (x > costs[winningScores[i]]) {
            x = costs[winningScores[i]];
            ultimateWinner = winningScores[i];
        }
    }
    return ultimateWinner;
}
// Here we are Login onto the console all the data we gatherd and filtert out above
var highScore = printAndGetHighScore(scores);
var winningScores = getBestResult(scores);
var ultimateWinner = ultimateWinnerByCost();
console.log(" ");
console.log("Total Bubble solution tests: " + scores.length);
console.log("Highest Bubble score: " + highScore);
console.log("Solutions with highest score: " + winningScores);
console.log("The ultimate winner is: " + ultimateWinner);