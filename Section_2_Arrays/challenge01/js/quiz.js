

var quizQnA = [
  ['How many cups are in a quart?', 4],
  ['How many inches are in a foot?', 12],
  ['How many days are in a week?', 7]
];
var correct = 0;
var question;
var answer;
var response;
var score;

function print(message) {
  document.write(message);
}
for (var i = 0; i < quizQnA.length; i+=1) {
  question = quizQnA [i][0];
  answer = quizQnA [i][1];
  response = parseInt(prompt(question));
if (response === answer) {
  correct += 1;
}
}
score = ('you answered ' + correct + ' questions correctly');
print (score);
