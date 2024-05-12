document.getElementById('submitQuiz').addEventListener('click', function() {
    const answers = ['Laugh Out Loud', 'Woman Yelling at Cat', 'Distracted Boyfriend'];
    const userAnswers = [
        prompt('1. What does "LOL" stand for?'),
        prompt('2. Which meme features a white cat with a confused expression?'),
        prompt('3. What is the name of the meme with a distracted boyfriend?')
    ];

    let correctAnswers = 0;
    for (let i = 0; i < answers.length; i++) {
        if (userAnswers[i].toLowerCase() === answers[i].toLowerCase()) {
            correctAnswers++;
        }
    }

    const quizResult = document.getElementById('quizResult');
    quizResult.textContent = `You got ${correctAnswers} out of ${answers.length} correct!`;
});
