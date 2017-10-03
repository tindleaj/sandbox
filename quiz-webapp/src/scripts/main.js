// Add interactivity to the quiz designs

// Question constructor
function Question(text, options, answer) {
	this.text = text;
	this.options = options;
	this.answer = answer;
};

// QuizUi object literal
var QuizUi = {
	// Needs to fill form with first question, then progress to the next question when an answer is chosen.
	questionIndex: 0,

	numberCorrect: 0,

	displayNext: function() {
		var index = QuizUi.questionIndex;

		var question = document.getElementById('question');
		question.innerHTML = quiz.questions[QuizUi.questionIndex].text;

		var form = document.getElementById('quiz');

		// Cycle through quiz.questions and insert them into the DOM
		for (var i = 0; i < quiz.questions.length; i++) {
			var choice = document.createElement("button");
			choice.className = "item";
			choice.innerHTML = quiz.questions[index].options[i];

			choice.addEventListener('click', QuizUi.clickHandler);
			form.appendChild(choice);
		}
	},

	removeCurrentQuestions: function() {
		var form = document.getElementById('quiz');
		var numberOfQuestions = document.getElementsByClassName('item').length;

		for (var i = 0; i < numberOfQuestions; i++) {
			form.removeChild(document.getElementsByClassName('item')[0]);
		};
	},

	clickHandler: function(event) {

		// Check to see if clicked item is the correct answer
		if (this.innerHTML === quiz.questions[QuizUi.questionIndex].answer) {
			QuizUi.numberCorrect++;
		}

		// Check to see if we're at the end of the quiz
		if (QuizUi.questionIndex < quiz.questions.length-1) {
			// Prevent <input> tag from submitting GET request
			event.preventDefault();

			// Remove current questions
			QuizUi.removeCurrentQuestions();

			// Increment questionIndex
			QuizUi.questionIndex ++;

			// Show next question
			QuizUi.displayNext();

			console.log(quiz.questions.length);
			console.log(QuizUi.questionIndex);
		} else { // Else display the score
			QuizUi.displayScore();
		}	
	},

	displayScore: function() {
		var question = document.getElementById('question');

		event.preventDefault();
		QuizUi.removeCurrentQuestions();
		question.innerHTML = "You got " + QuizUi.numberCorrect + " questions correct.";
	}
}

// Quiz constructor
function Quiz(questions) {

	if (questions === 'default') {
		this.questions = [
			new Question("What is the capital of Florida?", ["Tallando", "Orlando", "Miami", "Tallahassse"], "Tallahassse"),
			new Question("Who was the first president of the United States?", ["Washington", "Clinton", "Clingon", "Walters"], "Washington"),
			new Question("Why use scrubbing bubbles?", ["Cleanliness", "Ugliness", "Snobiness", "Awesomeness"], "Cleanliness"),
			new Question("Who is the man?", ["Austin", "Max", "Ale", "No one"], "Austin")
		];
	} else if (questions !== undefined) {
		this.questions = questions;
	} else {
		this.questions = [];
	}

	this.addQuestion = function(text, options, answer) {
		this.questions.push(new Question(text, options, answer));
	}

	this.removeQuestion = function(questionNumber) {
		var index = questionNumber - 1; // because the user will supply the question # not the index # 
		if (index > -1) {
			console.log("removed: " + "'" + this.questions[index].text + "'");
			this.questions.splice(index, 1);
		}
	}
};

function User() {
	this.localStorage = window.localStorage;

	// Get the user's name
	this.promptUserName = function() {
		if (this.localStorage['userName'] == undefined) {
			var userName = prompt("What's your name?");
			this.localStorage['userName'] = userName;
		} else { // if it's already in localStorage, set it as the <h1>
			document.getElementsByTagName('h1')[0].innerHTML = "Hello " + this.localStorage['userName'];
		}
	}
}

// Main
var user = new User();
user.promptUserName();
var quiz = new Quiz('default');
QuizUi.displayNext();




