// Your Star Wars trivia game logic goes here
// You can define and implement the quiz questions, options, and scoring in this file

const questions = [
    {
      question: "What planet is home to Chewbacca?",
      options: ["Tatooine", "Kashyyyk", "Hoth", "Endor"],
      answer: "Kashyyyk",
    },
    {
      question: "Who is the father of Luke Skywalker?",
      options: ["Darth Vader", "Obi-Wan Kenobi", "Yoda", "Han Solo"],
      answer: "Darth Vader",
    },
    {
      question: "What color is a lightsaber typically associated with Sith?",
      options: ["Blue", "Green", "Red", "Purple"],
      answer: "Red",
    },
    {
      question: "Who is the Jedi Master who trained Obi-Wan Kenobi?",
      options: ["Qui-Gon Jinn", "Yoda", "Mace Windu", "Anakin Skywalker"],
      answer: "Qui-Gon Jinn",
    },
    {
      question: "What is the name of Han Solo's ship?",
      options: ["Millennium Falcon", "X-wing", "TIE Fighter", "Slave I"],
      answer: "Millennium Falcon",
    },
    {
      question: "Which planet is known as the desert planet?",
      options: ["Dagobah", "Tatooine", "Hoth", "Naboo"],
      answer: "Tatooine",
    },
    {
      question: "Who is known as the Dark Lord of the Sith?",
      options: ["Count Dooku", "Darth Sidious", "Darth Maul", "Kylo Ren"],
      answer: "Darth Sidious",
    },
    {
      question: "What species is Yoda?",
      options: ["Human", "Wookiee", "Rodian", "Yoda's species"],
      answer: "Yoda's species",
    },
    {
      question: "What is the primary weapon of a Jedi?",
      options: ["Blaster", "Lightsaber", "Bowcaster", "E-11 Blaster Rifle"],
      answer: "Lightsaber",
    },
    {
      question: "Who played the role of Princess Leia?",
      options: ["Natalie Portman", "Carrie Fisher", "Keira Knightley", "Daisy Ridley"],
      answer: "Carrie Fisher",
    },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
questionElement.style.color = "red"; // Set text color to red
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
resultElement.style.color = "red"; // Set text color to red
const nextButton = document.getElementById("next-button");

function displayQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.id = `option${index + 1}`;
    button.addEventListener("click", checkAnswer);
    optionsElement.appendChild(button);
  });

  resultElement.textContent = "";
  nextButton.style.display = "none";
}

function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const question = questions[currentQuestion];
  if (selectedOption === question.answer) {
    resultElement.textContent = "Correct!";
    score++;
  } else {
    resultElement.textContent = "Wrong!";
  }

  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    if (score === 10) {
      resultElement.textContent = "You are a Jedi Master!";
    } else if (score >= 6) {
      resultElement.textContent = "You are a Jedi Knight!";
    } else if (score >= 1) {
      resultElement.textContent = "You are a Padawan!";
    } else {
      resultElement.textContent = "You have much to learn.";
    }
    resultElement.textContent += ` You got ${score} out of ${questions.length} questions right.`;
    nextButton.style.display = "none";
  }
}

displayQuestion();
nextButton.addEventListener("click", nextQuestion);
