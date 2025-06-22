const quizData = {
    easy: [
        { question: "What is this?", image: "https://i.ibb.co/W4Yp476p/26-04.jpg", answers: ["Apple", "Orange", "Banana", "Grape"], correct: 0 },
        { question: "How many eyes do you have?",answers: ["One", "Two", "Three", "Four"], correct: 1 },
        { question: "I like to drink __", image: "https://i.ibb.co/Z6v6ftBR/136484236-003229b3-c509-4f21-8dab-a2f2bb8f7165.jpg", answers: ["Water", "Milk", "Juice", "Coffe"], correct: 1 },
        { question: "What color is the sun?", answers: ["Blue", "Green", "Yellow", "Red"], correct: 2 },
        { question: "What do you use to write?", answers: ["Eraser", "Ruler", "Pencil", "Book"], correct: 2 },
        { question: "This is a __", image: "https://i.ibb.co/gMFCz5XB/418637305-8831c122-87df-42de-a86d-44e74ab7a800.jpg", answers: ["Dog", "Cat", "Bird", "Fish"], correct: 1 },
        { question: "How do you say 'selamat pagi' in English?", answers: ["Good afternoon", "Good night", "Good morning", "Good evening"], correct: 2 },
        { question: "What day comes after Monday?", answers: ["Sunday", "Tuesday", "Wednesday", "Thursday"], correct: 1 },
        { question: "My mother is a __", image: "https://i.ibb.co/jvgKZKvB/34733142-6900-7-08.jpg",answers: ["Teacher", "Doctor", "Farmer", "Chef"], correct: 1 },
        { question: "What season is it when the leaves fall?", answers: ["Summer", "Autumn", "Spring", "Winter"], correct: 1 },
    ],
    medium: [
        { question: "My brother __ football every Sunday.", answers: ["play", "plays", "playing", "played"], correct: 1 },
        { question: "There __ three books on the table.", answers: ["is", "am", "are", "be"], correct: 2 },
        { question: "She __ a beautiful song yesterday.", answers: ["sing", "sings", "sang", "sung"], correct: 2 },
        { question: "I usually wake up __ 6 o'clock in the morning.", answers: ["on", "in", "at", "for"], correct: 2 },
        { question: "What time __ you usually go to bed?", answers: ["do", "does", "did", "going"], correct: 0 },
        { question: "The cat is sleeping __ the chair.", answers: ["in", "on", "under", "next to"], correct: 1 },
        { question: "He __ a new bicycle last week.", answers: ["buy", "buys", "boought", "buying"], correct: 2 },
        { question: "__ is your favorite animal?", answers: ["When", "Who", "Where", "What"], correct: 3 },
        { question: "My mother is taller __ my father.", answers: ["as", "then", "than", "from"], correct: 2 },
        { question: "We __ go to the beach tomorrow.", answers: ["wil", "are", "is", "do"], correct: 0 },
    ],
    difficult: [
        {
            story: "My name is Luna. I have a small garden behind my house. In my garden, I grow many kinds of flowers, like roses, sunflowers, and lilies. I also have some vegetables, such as tomatoes and carrots. Every morning, I water the plants and remove the weeds. My grandmother often helps me plant new seeds. I love spending time in my garden because it makes me feel peaceful.",
            question: "What does Luna have behind her house?",
            answers: ["A big house", "A small garden", "A large farm", "A pet shop"],
            correct: 1
        },
        {
            story: "My name is Luna. I have a small garden behind my house. In my garden, I grow many kinds of flowers, like roses, sunflowers, and lilies. I also have some vegetables, such as tomatoes and carrots. Every morning, I water the plants and remove the weeds. My grandmother often helps me plant new seeds. I love spending time in my garden because it makes me feel peaceful.",
            question: "What kinds of flowers does Luna grow?",
            answers: ["Tulips and orchids", "Roses, sunflowers, and lilies", "Daisies and poppies", "Cactuses and succulents"],
            correct: 1
        },
        {
            story: "My name is Luna. I have a small garden behind my house. In my garden, I grow many kinds of flowers, like roses, sunflowers, and lilies. I also have some vegetables, such as tomatoes and carrots. Every morning, I water the plants and remove the weeds. My grandmother often helps me plant new seeds. I love spending time in my garden because it makes me feel peaceful.",
            question: "Besides flowers, what else does Luna grow in her garden?",
            answers: ["Fruits", "Herbs", "Vegetables", "Trees"],
            correct: 2
        },
        {
            story: "My name is Luna. I have a small garden behind my house. In my garden, I grow many kinds of flowers, like roses, sunflowers, and lilies. I also have some vegetables, such as tomatoes and carrots. Every morning, I water the plants and remove the weeds. My grandmother often helps me plant new seeds. I love spending time in my garden because it makes me feel peaceful.",
            question: "What does Luna do every morning in her garden?",
            answers: ["Harvest the vegetables", "Water the plants and remove the weeds", "Plant new seeds", "Decorate the garden"],
            correct: 1
        },
        {
            story: "My name is Luna. I have a small garden behind my house. In my garden, I grow many kinds of flowers, like roses, sunflowers, and lilies. I also have some vegetables, such as tomatoes and carrots. Every morning, I water the plants and remove the weeds. My grandmother often helps me plant new seeds. I love spending time in my garden because it makes me feel peaceful.",
            question: "Who often helps Luna plant new seeds?",
            answers: ["Her mother", "Her father", "Her brother", "Her grandmother"],
            correct: 3
        },
            { question: "If I __ enough money, I __ a new book.", answers: ["have, buy", "had, would buy", "had, buy", "have, will buy"], correct: 3 },
            { question: "She __ for two hours when her mother called her.", answers: ["was studying", "has been studying", "had been studying", "is studying"], correct: 2 },
            { question: "The boy, __ parents are doctors, wants to be an engineer.", answers: ["who", "whom", "whose", "which"], correct: 2 },
            { question: "Despite __ hard, he couldn't pass the exam.", answers: ["studying", "to study", "study", "studied"], correct: 0 },
            { question: "By the time he arrived, the movie __ already __.", answers: ["had, started", "has, started", "was, starting", "is, starting"], correct: 0 }
        ]
    };

const startScreen = document.getElementById('start-screen');
const difficultyScreen = document.getElementById('difficulty-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const playerNameInput = document.getElementById('player-name-input');
const startButton = document.getElementById('start-button');
const playerNameDisplay = document.getElementById('player-name-display');
const totalScoreDisplay = document.getElementById('total-score-display');

const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const storyContainer = document.getElementById('story-container');
const storyText = document.getElementById('story-text');
const questionImageContainer = document.getElementById('question-image-container');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const quizDifficulty = document.getElementById('quiz-difficulty');
const feedbackMessage = document.getElementById('feedback-message');
const finalMessage = document.getElementById('final-message');
const backToLevelsButton = document.getElementById('back-to-levels-button');

let playerName = "";
let currentDifficulty = "";
let currentQuestionIndex = 0;
let scores = { easy: null, medium: null, difficult: null };
let levelAnswers = [];
let totalScore = 0;
let completedLevels = [];

function initializeQuiz() {
    playerName = playerNameInput.value.trim();
    if (playerName === "") {
        alert("Tolong masukkan namamu dulu ya!");
        return;
    }
    playerNameDisplay.textContent = playerName;
    startScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');
    updateScoreDisplays();
}

function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    scores[currentDifficulty] = 0;
    levelAnswers = [];
    difficultyScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizDifficulty.textContent = difficulty;
    showQuestion();
}

function showQuestion() {
    feedbackMessage.textContent = '';
    const levelData = quizData[currentDifficulty];
    const questionData = levelData[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    const totalQuestions = levelData.length;

    if (questionData.story) {
        storyText.textContent = questionData.story;
        storyContainer.classList.remove('hidden');
    } else {
        storyContainer.classList.add('hidden');
    }

    if (questionData.image) {
        questionImageContainer.innerHTML = `<img src="${questionData.image}" alt="Petunjuk Pertanyaan" class="max-h-full max-w-full object-contain rounded-lg">`;
        questionImageContainer.classList.remove('hidden');
    } else {
        questionImageContainer.innerHTML = '';
        questionImageContainer.classList.add('hidden');
    }

    questionCounter.textContent = `Pertanyaan ${questionNumber}/${totalQuestions}`;
    progressBar.style.width = `${(questionNumber / totalQuestions) * 100}%`;
    questionText.innerHTML = questionData.question;
    answersContainer.innerHTML = '';

    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = "w-full p-4 border-2 border-gray-300 rounded-lg text-lg text-gray-700 hover:bg-blue-100 hover:border-blue-400 transition-all duration-200";
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index, button));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex, button) {
    const levelData = quizData[currentDifficulty];
    const questionData = levelData[currentQuestionIndex];

    const correctIndex = questionData.correct;
    const allAnswerButtons = answersContainer.querySelectorAll('button');
    allAnswerButtons.forEach(btn => btn.disabled = true);

    const isCorrect = selectedIndex === correctIndex;
    if (isCorrect) {
        scores[currentDifficulty]++;
        button.classList.add('correct');
        feedbackMessage.textContent = 'Hebat! Jawabanmu Benar 👍';
        feedbackMessage.style.color = '#22c55e';
    } else {
        button.classList.add('incorrect');
        allAnswerButtons[correctIndex].classList.add('correct');
        feedbackMessage.textContent = 'Oops! Coba lagi nanti ya 😟';
        feedbackMessage.style.color = '#ef4444';
    }

    levelAnswers.push({
        question: questionData.question,
        userChoice: questionData.answers[selectedIndex],
        correctChoice: questionData.answers[correctIndex],
        isCorrect: isCorrect
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < levelData.length) {
            showQuestion();
        } else {
            finishLevel();
        }
    }, 2000);
}

function finishLevel() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    populateResults();
}

function populateResults() {
    const levelData = quizData[currentDifficulty];
    const score = scores[currentDifficulty];
    const total = levelData.length;

    document.getElementById('results-score').textContent = `${score}/${total}`;
    document.getElementById('results-total').textContent = total;
    document.getElementById('results-summary-text').textContent = `Anda menjawab ${score} benar dan ${total - score} salah.`;

    const detailsContainer = document.getElementById('results-details-container');
    detailsContainer.innerHTML = '';

    levelAnswers.forEach((answer, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.className = `p-3 rounded-lg flex items-start gap-3 ${answer.isCorrect ? 'bg-green-50' : 'bg-red-50'}`;

        const icon = answer.isCorrect
            ? `<div class="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</div>`
            : `<div class="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 mt-1 text-xs">✗</div>`;

        let answerDetailHTML = `
            <div>
                <p class="font-semibold text-gray-700 text-sm">${answer.question}</p>
                <p class="text-xs ${answer.isCorrect ? 'text-green-800' : 'text-red-800'}">Pilihan Anda: ${answer.userChoice} (${answer.isCorrect ? 'Benar' : 'Salah'})</p>
        `;
        if (!answer.isCorrect) {
            answerDetailHTML += `<p class="text-xs text-gray-500">Jawaban benar: <span class="font-semibold">${answer.correctChoice}</span></p>`;
        }
        answerDetailHTML += `</div>`;

        resultDiv.innerHTML = icon + answerDetailHTML;
        detailsContainer.appendChild(resultDiv);
    });
}

function updateScoreDisplays() {
    totalScore = 0;
    for (const level in scores) {
        const scoreDisplay = document.getElementById(`score-${level}`);
        const levelButton = document.querySelector(`#level-${level} button`);
        const maxScore = quizData[level].length;

        if (scores[level] !== null) {
            scoreDisplay.textContent = `${scores[level]} / ${maxScore}`;
            totalScore += scores[level];
            levelButton.classList.add('disabled-level');
            levelButton.disabled = true;
            levelButton.textContent = 'Selesai';
        } else {
            scoreDisplay.textContent = `- / ${maxScore}`;
        }
    }
    totalScoreDisplay.textContent = totalScore;
}

startButton.addEventListener('click', initializeQuiz);
playerNameInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') initializeQuiz();
});

difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectDifficulty(button.dataset.difficulty);
    });
});

backToLevelsButton.addEventListener('click', () => {
    resultsScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');

    if (!completedLevels.includes(currentDifficulty)) {
        completedLevels.push(currentDifficulty);
    }
    updateScoreDisplays();
    if (completedLevels.length === Object.keys(quizData).length) {
        finalMessage.classList.remove('hidden');
    }
});
