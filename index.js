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
let isPaused = false;
let questionStartTime = null;
let timeSpentOnQuestion = 0;
let totalTimeSpent = 0;

// HCI Principle: Error Prevention & User Control
function validatePlayerName(name) {
    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
        return { valid: false, message: "Nama tidak boleh kosong" };
    }
    if (trimmedName.length < 2) {
        return { valid: false, message: "Nama harus berisi minimal 2 karakter" };
    }
    if (trimmedName.length > 50) {
        return { valid: false, message: "Nama tidak boleh lebih dari 50 karakter" };
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
        return { valid: false, message: "Nama hanya boleh berisi huruf dan spasi" };
    }
    return { valid: true, message: "" };
}

// HCI Principle: Visibility of System Status
function showMessage(elementId, message, type = 'info') {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.className = `${type}-message`;
    element.innerHTML = `
        <span>${type === 'error' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️'}</span>
        <span>${message}</span>
    `;
    element.classList.remove('hidden');

    if (type !== 'error') {
        setTimeout(() => element.classList.add('hidden'), 3000);
    }
}

// HCI Principle: User Control and Freedom
function pauseQuiz() {
    isPaused = !isPaused;
    const pauseBtn = document.getElementById('pause-quiz-btn');
    const answersContainer = document.getElementById('answers-container');

    if (isPaused) {
        pauseBtn.innerHTML = '▶️ Lanjut';
        pauseBtn.setAttribute('aria-label', 'Lanjutkan kuis');
        answersContainer.style.opacity = '0.5';
        answersContainer.style.pointerEvents = 'none';
        showMessage('quiz-messages', 'Kuis dijeda. Klik "Lanjut" untuk melanjutkan.', 'warning');
    } else {
        pauseBtn.innerHTML = '⏸️ Jeda';
        pauseBtn.setAttribute('aria-label', 'Jeda kuis');
        answersContainer.style.opacity = '1';
        answersContainer.style.pointerEvents = 'auto';
        document.getElementById('quiz-messages').classList.add('hidden');
        questionStartTime = Date.now(); // Reset question start time
    }
}

// HCI Principle: Aesthetic and Minimalist Design + Consistency
function updateConfidenceDisplay() {
    if (totalScore === 0) return;

    const maxPossibleScore = Object.keys(scores).filter(level => scores[level] !== null).length * 10;
    const confidence = Math.round((totalScore / maxPossibleScore) * 100);

    document.getElementById('confidence-fill').style.width = `${confidence}%`;
}

function initializeQuiz() {
    const nameInput = playerNameInput.value;
    const validation = validatePlayerName(nameInput);

    // Clear previous error messages
    document.getElementById('name-error').classList.add('hidden');

    if (!validation.valid) {
        showMessage('name-error', validation.message, 'error');
        playerNameInput.focus();
        return;
    }

    playerName = nameInput.trim();

    // Show loading state
    const startBtn = document.getElementById('start-button');
    const startBtnText = document.getElementById('start-button-text');
    startBtn.disabled = true;
    startBtnText.innerHTML = '<span class="loading-spinner"></span>Memuat...';

    // Simulate brief loading for better UX
    setTimeout(() => {
        playerNameDisplay.textContent = playerName;
        startScreen.classList.add('hidden');
        difficultyScreen.classList.remove('hidden');
        updateScoreDisplays();

        // Reset button state
        startBtn.disabled = false;
        startBtnText.textContent = 'Mulai Kuis!';

        // Announce transition for screen readers
        showMessage('quiz-messages', `Selamat datang ${playerName}! Silakan pilih tingkat kesulitan.`, 'success');
    }, 800);
}

function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    scores[currentDifficulty] = 0;
    levelAnswers = [];
    totalTimeSpent = 0;

    difficultyScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizDifficulty.textContent = difficulty;

    // Initialize quiz controls
    document.getElementById('pause-quiz-btn').addEventListener('click', pauseQuiz);
    document.getElementById('skip-question-btn').disabled = false;

    showQuestion();
}

function showQuestion() {
    if (isPaused) return;

    feedbackMessage.textContent = '';
    document.getElementById('quiz-messages').classList.add('hidden');

    const levelData = quizData[currentDifficulty];
    const questionData = levelData[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    const totalQuestions = levelData.length;

    // Track time for this question
    questionStartTime = Date.now();

    // HCI Principle: Visibility of System Status - Enhanced progress indication
    questionCounter.textContent = `Pertanyaan ${questionNumber}/${totalQuestions}`;
    const progressPercentage = (questionNumber / totalQuestions) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.setAttribute('aria-valuenow', progressPercentage);
    document.getElementById('progress-text').textContent = `${Math.round(progressPercentage)}%`;

    // Show story if exists with better accessibility
    if (questionData.story) {
        storyText.textContent = questionData.story;
        storyContainer.classList.remove('hidden');
    } else {
        storyContainer.classList.add('hidden');
    }

    // Show image with better accessibility
    if (questionData.image) {
        questionImageContainer.innerHTML = `
            <img src="${questionData.image}"
                 alt="Gambar petunjuk untuk pertanyaan ini"
                 class="max-h-full max-w-full object-contain rounded-lg"
                 onerror="this.style.display='none'; this.parentNode.innerHTML='<div class=\\'text-gray-500\\'>Gambar tidak dapat dimuat</div>'">
        `;
        questionImageContainer.classList.remove('hidden');
    } else {
        questionImageContainer.innerHTML = '';
        questionImageContainer.classList.add('hidden');
    }

    questionText.textContent = questionData.question;
    answersContainer.innerHTML = '';

    // HCI Principle: Consistency & Usability - Enhanced answer buttons
    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = "answer-button w-full p-4 border-2 border-gray-300 rounded-lg text-lg text-gray-700 hover:bg-blue-100 hover:border-blue-400 transition-all duration-200";
        button.textContent = answer;
        button.setAttribute('role', 'radio');
        button.setAttribute('aria-checked', 'false');
        button.setAttribute('tabindex', index === 0 ? '0' : '-1');
        button.addEventListener('click', () => {
            if (!isPaused) selectAnswer(index, button);
        });

        // Keyboard navigation support
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (!isPaused) selectAnswer(index, button);
            }
        });

        answersContainer.appendChild(button);
    });

    // Focus management for accessibility
    const firstAnswer = answersContainer.querySelector('.answer-button');
    if (firstAnswer) {
        setTimeout(() => firstAnswer.focus(), 100);
    }
}

function selectAnswer(selectedIndex, button) {
    if (isPaused) return;

    // Calculate time spent on this question
    if (questionStartTime) {
        timeSpentOnQuestion = Date.now() - questionStartTime;
        totalTimeSpent += timeSpentOnQuestion;
    }

    const levelData = quizData[currentDifficulty];
    const questionData = levelData[currentQuestionIndex];

    const correctIndex = questionData.correct;
    const allAnswerButtons = answersContainer.querySelectorAll('button');
    allAnswerButtons.forEach(btn => {
        btn.disabled = true;
        btn.setAttribute('aria-checked', 'false');
    });

    const isCorrect = selectedIndex === correctIndex;

    // Update selected button state
    button.setAttribute('aria-checked', 'true');

    if (isCorrect) {
        scores[currentDifficulty]++;
        button.classList.add('correct');
        // feedbackMessage.textContent = 'Hebat! Jawabanmu Benar 👍';
        // feedbackMessage.style.color = '#22c55e';

        // HCI Principle: Aesthetic Design - Positive reinforcement
        showMessage('quiz-messages', 'Excellent! Jawaban Anda benar!', 'success');
    } else {
        button.classList.add('incorrect');
        allAnswerButtons[correctIndex].classList.add('correct');
        // feedbackMessage.textContent = 'Oops! Coba lagi nanti ya 😟';
        // feedbackMessage.style.color = '#ef4444';

        // HCI Principle: Error Prevention - Learning from mistakes
        const correctAnswer = questionData.answers[correctIndex];
        showMessage('quiz-messages', `Jawaban yang benar adalah: "${correctAnswer}"`, 'error');
    }

    levelAnswers.push({
        question: questionData.question,
        userChoice: questionData.answers[selectedIndex],
        correctChoice: questionData.answers[correctIndex],
        isCorrect: isCorrect,
        timeSpent: timeSpentOnQuestion
    });

    // HCI Principle: User Control - Consistent timing with option to continue
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < levelData.length) {
            showQuestion();
        } else {
            finishLevel();
        }
    }, 2500);
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
    const percentage = Math.round((score / total) * 100);

    // HCI Principle: Visibility of System Status - Comprehensive feedback
    document.getElementById('results-score').textContent = `${score}/${total}`;
    document.getElementById('results-total').textContent = total;
    document.getElementById('results-percentage').textContent = `${percentage}%`;
    document.getElementById('results-summary-text').textContent = `Anda menjawab ${score} benar dan ${total - score} salah.`;

    // Performance level feedback
    let performanceLevel = '';
    let feedbackMessage = '';
    let feedbackClass = '';

    if (percentage >= 90) {
        performanceLevel = 'Luar Biasa!';
        feedbackMessage = '🌟 Prestasi sempurna! Anda menguasai materi dengan sangat baik. Teruslah berlatih!';
        feedbackClass = 'success-message';
    } else if (percentage >= 70) {
        performanceLevel = 'Bagus Sekali!';
        feedbackMessage = '👍 Kerja yang baik! Anda memiliki pemahaman yang solid. Sedikit lagi untuk sempurna!';
        feedbackClass = 'success-message';
    } else if (percentage >= 50) {
        performanceLevel = 'Lumayan';
        feedbackMessage = '📚 Masih ada ruang untuk perbaikan. Review materi dan coba lagi untuk hasil yang lebih baik!';
        feedbackClass = 'warning-message';
    } else {
        performanceLevel = 'Perlu Belajar Lagi';
        feedbackMessage = '💪 Jangan menyerah! Belajar lagi dan coba sekali lagi. Setiap kesalahan adalah langkah menuju kesuksesan!';
        feedbackClass = 'error-message';
    }

    document.getElementById('performance-level').textContent = performanceLevel;
    const feedbackDiv = document.getElementById('performance-feedback');
    feedbackDiv.className = feedbackClass;
    feedbackDiv.innerHTML = `<span>📊</span><span>${feedbackMessage}</span>`;

    // Calculate average time per question
    const avgTime = totalTimeSpent > 0 ? Math.round(totalTimeSpent / total / 1000) : 0;

    const detailsContainer = document.getElementById('results-details-container');
    detailsContainer.innerHTML = '';

    // Add summary statistics
    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'bg-blue-50 p-3 rounded-lg mb-4 border border-blue-200';
    summaryDiv.innerHTML = `
        <h4 class="font-bold text-blue-800 mb-2">📈 Statistik Kuis</h4>
        <div class="text-sm text-blue-700">
            <p>⏱️ Rata-rata waktu per soal: ${avgTime} detik</p>
            <p>🎯 Tingkat akurasi: ${percentage}%</p>
            <p>📊 Level performa: ${performanceLevel}</p>
        </div>
    `;
    detailsContainer.appendChild(summaryDiv);

    // Detailed answer breakdown with enhanced UX
    levelAnswers.forEach((answer, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.className = `p-3 rounded-lg border-l-4 ${
            answer.isCorrect
                ? 'bg-green-50 border-l-green-500'
                : 'bg-red-50 border-l-red-500'
        }`;

        const icon = answer.isCorrect
            ? `<div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">✓</div>`
            : `<div class="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">✗</div>`;

        const questionTime = answer.timeSpent ? Math.round(answer.timeSpent / 1000) : 0;

        let answerDetailHTML = `
            <div class="flex items-start gap-3">
                ${icon}
                <div class="flex-1">
                    <p class="font-semibold text-gray-700 text-sm mb-1">Soal ${index + 1}: ${answer.question}</p>
                    <p class="text-xs ${answer.isCorrect ? 'text-green-800' : 'text-red-800'} mb-1">
                        🗣️ Jawaban Anda: <span class="font-medium">${answer.userChoice}</span>
                        ${answer.isCorrect ? '✅ Benar' : '❌ Salah'}
                    </p>
        `;

        if (!answer.isCorrect) {
            answerDetailHTML += `<p class="text-xs text-gray-600 mb-1">✅ Jawaban benar: <span class="font-semibold text-green-700">${answer.correctChoice}</span></p>`;
        }

        if (questionTime > 0) {
            answerDetailHTML += `<p class="text-xs text-gray-500">⏱️ Waktu: ${questionTime} detik</p>`;
        }

        answerDetailHTML += `</div></div>`;

        resultDiv.innerHTML = answerDetailHTML;
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
            levelButton.textContent = '✅ Selesai';
            levelButton.setAttribute('aria-label', `Level ${level} telah selesai dengan skor ${scores[level]} dari ${maxScore}`);
        } else {
            scoreDisplay.textContent = `- / ${maxScore}`;
            levelButton.setAttribute('aria-label', `Mulai level ${level} - ${maxScore} pertanyaan`);
        }
    }
    totalScoreDisplay.textContent = totalScore;
    updateConfidenceDisplay();
}

// HCI Principle: User Control - Skip question functionality
function skipQuestion() {
    if (isPaused) return;

    const levelData = quizData[currentDifficulty];
    const questionData = levelData[currentQuestionIndex];

    // Record as incorrect answer
    levelAnswers.push({
        question: questionData.question,
        userChoice: "Dilewati",
        correctChoice: questionData.answers[questionData.correct],
        isCorrect: false,
        timeSpent: questionStartTime ? Date.now() - questionStartTime : 0
    });

    feedbackMessage.textContent = 'Pertanyaan dilewati ⏭️';
    feedbackMessage.style.color = '#f59e0b';

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < levelData.length) {
            showQuestion();
        } else {
            finishLevel();
        }
    }, 1500);
}

// HCI Principle: User Control - Review mistakes functionality
function reviewMistakes() {
    const mistakes = levelAnswers.filter(answer => !answer.isCorrect);

    if (mistakes.length === 0) {
        alert('🎉 Hebat! Tidak ada kesalahan untuk direview!');
        return;
    }

    let reviewText = `📋 Review ${mistakes.length} Kesalahan:\n\n`;
    mistakes.forEach((mistake, index) => {
        reviewText += `${index + 1}. ${mistake.question}\n`;
        reviewText += `   ❌ Jawaban Anda: ${mistake.userChoice}\n`;
        reviewText += `   ✅ Jawaban Benar: ${mistake.correctChoice}\n\n`;
    });

    alert(reviewText);
}

// Event Listeners with Enhanced HCI Principles
startButton.addEventListener('click', initializeQuiz);

// HCI Principle: User Control - Multiple input methods
playerNameInput.addEventListener('keyup', (event) => {
    // Clear error on typing
    document.getElementById('name-error').classList.add('hidden');

    if (event.key === 'Enter') {
        initializeQuiz();
    }
});

// Real-time validation feedback
playerNameInput.addEventListener('input', (event) => {
    const validation = validatePlayerName(event.target.value);
    const errorDiv = document.getElementById('name-error');

    if (event.target.value.length > 0 && !validation.valid) {
        showMessage('name-error', validation.message, 'error');
    } else {
        errorDiv.classList.add('hidden');
    }
});

difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectDifficulty(button.dataset.difficulty);
    });

    // HCI Principle: Accessibility - Keyboard navigation
    button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            selectDifficulty(button.dataset.difficulty);
        }
    });
});

backToLevelsButton.addEventListener('click', () => {
    resultsScreen.classList.add('hidden');
    difficultyScreen.classList.remove('hidden');

    if (!completedLevels.includes(currentDifficulty)) {
        completedLevels.push(currentDifficulty);
    }
    updateScoreDisplays();

    // HCI Principle: Visibility of System Status - Completion feedback
    if (completedLevels.length === Object.keys(quizData).length) {
        finalMessage.classList.remove('hidden');
        showMessage('quiz-messages', 'Selamat! Anda telah menyelesaikan semua level!', 'success');
    }
});

// Add event listeners for new controls
document.addEventListener('DOMContentLoaded', () => {
    // Skip question functionality
    const skipBtn = document.getElementById('skip-question-btn');
    if (skipBtn) {
        skipBtn.addEventListener('click', skipQuestion);
    }

    // Review mistakes functionality
    const reviewBtn = document.getElementById('review-mistakes-btn');
    if (reviewBtn) {
        reviewBtn.addEventListener('click', reviewMistakes);
    }

    // HCI Principle: Accessibility - Focus management
    document.addEventListener('keydown', (event) => {
        // Global keyboard shortcuts
        if (event.ctrlKey && event.key === 'h') {
            event.preventDefault();
            alert('🔗 Bantuan Navigasi:\n\n• Tab: Navigasi antar elemen\n• Enter/Space: Pilih jawaban\n• Ctrl+P: Jeda/Lanjut (saat kuis)\n• Esc: Kembali ke menu utama');
        }

        if (event.key === 'Escape' && !startScreen.classList.contains('hidden') === false) {
            // Return to difficulty selection
            if (!quizScreen.classList.contains('hidden')) {
                if (confirm('Yakin ingin kembali ke menu utama? Progress akan hilang.')) {
                    quizScreen.classList.add('hidden');
                    difficultyScreen.classList.remove('hidden');
                }
            }
        }
    });
});
