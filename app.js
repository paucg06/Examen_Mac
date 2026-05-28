document.addEventListener('DOMContentLoaded', () => {
    // Check if data is loaded
    if (typeof testData === 'undefined') {
        alert("Error: No se ha podido cargar la base de datos (data.js).");
        return;
    }

    // DOM Elements
    const screenHome = document.getElementById('screen-home');
    const screenTest = document.getElementById('screen-test');
    const screenResults = document.getElementById('screen-results');
    
    const testListContainer = document.getElementById('test-list');
    const btnExam = document.getElementById('btn-exam');
    
    // Test DOM Elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.getElementById('progress-bar');
    const qCounter = document.getElementById('q-counter');
    const examStats = document.getElementById('exam-stats');
    
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    
    const btnPass = document.getElementById('btn-pass');
    const btnNext = document.getElementById('btn-next');
    const btnQuit = document.getElementById('btn-quit');
    
    // Result DOM Elements
    const scoreCirclePath = document.getElementById('score-circle-path');
    const scoreText = document.getElementById('score-text');
    const resultTitle = document.getElementById('result-title');
    const btnHome = document.getElementById('btn-home');
    
    // State
    let currentQuestions = [];
    let currentIndex = 0;
    let isExamMode = false;
    
    let stats = {
        aciertos: 0,
        fallos: 0,
        blancos: 0
    };

    // Initialize Home Menu
    function initMenu() {
        testListContainer.innerHTML = '';
        Object.keys(testData).forEach(filename => {
            const btn = document.createElement('button');
            btn.className = 'test-btn';
            btn.textContent = filename.replace('.txt', '').replace(/_/g, ' ');
            btn.addEventListener('click', () => {
                // Barajar las preguntas para que salgan en orden aleatorio
                const shuffledQs = [...testData[filename]].sort(() => 0.5 - Math.random());
                startTest(shuffledQs, false);
            });
            testListContainer.appendChild(btn);
        });
        
        btnExam.addEventListener('click', () => {
            startTest(generateRandomExam(), true);
        });
    }

    // Random Exam Logic
    function generateRandomExam() {
        const structure = {
            "MAC_Tema_2_Tests.txt": 4,
            "MAC_Tema_3_Tests.txt": 2,
            "MAC_Tema_4_Tests.txt": 4,
            "MAC_Tema_5_Tests.txt": 5,
            "MAC_Tema_6_Tests.txt": 5
        };
        
        let exam = [];
        for (const [file, count] of Object.entries(structure)) {
            let qs = testData[file] || [];
            if (qs.length === 0) continue;
            
            // shuffle array
            let shuffled = [...qs].sort(() => 0.5 - Math.random());
            exam.push(...shuffled.slice(0, Math.min(count, qs.length)));
        }
        
        return exam.sort(() => 0.5 - Math.random());
    }

    // Flow Control
    function switchScreen(screenElement) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screenElement.classList.add('active');
        window.scrollTo(0,0);
    }

    function startTest(questions, examMode) {
        if (!questions || questions.length === 0) {
            alert("No hay preguntas disponibles para este test.");
            return;
        }
        
        currentQuestions = questions;
        isExamMode = examMode;
        currentIndex = 0;
        stats = { aciertos: 0, fallos: 0, blancos: 0 };
        
        if (isExamMode) {
            examStats.classList.remove('hidden');
            updateStatsBadges();
        } else {
            examStats.classList.add('hidden');
        }
        
        switchScreen(screenTest);
        renderQuestion();
    }

    function updateStatsBadges() {
        document.getElementById('badge-aciertos').textContent = `${stats.aciertos} ✔`;
        document.getElementById('badge-fallos').textContent = `${stats.fallos} ✘`;
        document.getElementById('badge-blancos').textContent = `${stats.blancos} ➖`;
    }

    function renderQuestion() {
        const q = currentQuestions[currentIndex];
        
        // Update UI
        qCounter.textContent = `Pregunta ${currentIndex + 1} de ${currentQuestions.length}`;
        progressBar.style.width = `${(currentIndex / currentQuestions.length) * 100}%`;
        
        questionText.textContent = q.text;
        optionsContainer.innerHTML = '';
        feedbackContainer.classList.add('hidden');
        
        btnPass.classList.remove('hidden');
        btnNext.classList.add('hidden');
        
        // Extract options
        q.options.forEach(optStr => {
            const letter = optStr.charAt(0).toLowerCase();
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = optStr;
            btn.dataset.letter = letter;
            
            btn.addEventListener('click', () => handleAnswer(letter, btn));
            optionsContainer.appendChild(btn);
        });
    }

    function handleAnswer(userAnswer, btnElement) {
        const q = currentQuestions[currentIndex];
        const correcta = q.correcta;
        
        // Disable all options
        const buttons = optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(b => b.disabled = true);
        
        btnPass.classList.add('hidden');
        btnNext.classList.remove('hidden');
        
        if (userAnswer === 'pass') {
            stats.blancos++;
            feedbackMessage.textContent = "⬜ Pregunta dejada en blanco (no resta).";
            feedbackMessage.className = "feedback-message neutral";
            // Show correct answer
            buttons.forEach(b => {
                if (b.dataset.letter === correcta) b.classList.add('correct-reveal');
            });
        } else if (userAnswer === correcta) {
            stats.aciertos++;
            if (btnElement) btnElement.classList.add('selected-correct');
            feedbackMessage.textContent = "✅ ¡Correcto!";
            feedbackMessage.className = "feedback-message success";
        } else {
            stats.fallos++;
            if (btnElement) btnElement.classList.add('selected-wrong');
            buttons.forEach(b => {
                if (b.dataset.letter === correcta) b.classList.add('correct-reveal');
            });
            
            feedbackMessage.textContent = `❌ Incorrecto.`;
            if (isExamMode) feedbackMessage.textContent += " (Penalización: -0.33 pts)";
            feedbackMessage.className = "feedback-message danger";
        }
        
        if (isExamMode) updateStatsBadges();
        
        // Show explanation if exists
        if (q.explicacion) {
            feedbackExplanation.textContent = `EXPLICACIÓN: ${q.explicacion}`;
        } else {
            feedbackExplanation.textContent = '';
        }
        
        feedbackContainer.classList.remove('hidden');
    }

    // Button Listeners
    btnPass.addEventListener('click', () => {
        handleAnswer('pass', null);
    });

    btnNext.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= currentQuestions.length) {
            showResults();
        } else {
            renderQuestion();
        }
    });
    
    btnQuit.addEventListener('click', () => {
        if (confirm("¿Seguro que quieres terminar el test ahora mismo?")) {
            showResults();
        }
    });
    
    btnHome.addEventListener('click', () => {
        switchScreen(screenHome);
    });

    // Results Screen
    function showResults() {
        switchScreen(screenResults);
        
        const totalVistas = Math.min(currentIndex + 1, currentQuestions.length);
        const isCurrentAnswered = document.querySelector('.option-btn:disabled');
        const finalVistas = isCurrentAnswered ? totalVistas : Math.max(0, totalVistas - 1);
        
        document.getElementById('res-total').textContent = finalVistas;
        document.getElementById('res-aciertos').textContent = stats.aciertos;
        document.getElementById('res-fallos').textContent = stats.fallos;
        document.getElementById('res-blancos').textContent = stats.blancos;
        
        const penaltyInfo = document.getElementById('penalty-info');
        let notaSobre10 = 0;
        let percentage = 0;
        
        if (isExamMode) {
            const totalExam = currentQuestions.length; 
            penaltyInfo.classList.remove('hidden');
            
            let netos = stats.aciertos - (stats.fallos / 3.0);
            if (netos < 0) netos = 0;
            
            document.getElementById('res-netos').textContent = `${netos.toFixed(2)} de ${totalExam}`;
            
            notaSobre10 = (netos / totalExam) * 10;
            percentage = notaSobre10 * 10;
            
            scoreText.textContent = `${notaSobre10.toFixed(2)}/10`;
            
            if (notaSobre10 >= 9) {
                resultTitle.textContent = "¡Sobresaliente! 🏆";
                setScoreColor('#10b981'); // success
            } else if (notaSobre10 >= 7) {
                resultTitle.textContent = "¡Notable! Vas genial 🌟";
                setScoreColor('#6366f1'); // primary
            } else if (notaSobre10 >= 5) {
                resultTitle.textContent = "Aprobado. Hay que repasar 📚";
                setScoreColor('#f59e0b'); // warning/amber
            } else {
                resultTitle.textContent = "Suspenso. ¡A darle caña! 💪";
                setScoreColor('#ef4444'); // danger
            }
            
        } else {
            penaltyInfo.classList.add('hidden');
            if (finalVistas > 0) {
                percentage = (stats.aciertos / finalVistas) * 100;
            }
            scoreText.textContent = `${Math.round(percentage)}%`;
            
            if (percentage >= 80) resultTitle.textContent = "¡Excelente Trabajo! 🏆";
            else if (percentage >= 50) resultTitle.textContent = "Buen intento 👍";
            else resultTitle.textContent = "Necesitas repasar más 📚";
            
            setScoreColor(percentage >= 50 ? '#10b981' : '#ef4444');
        }
        
        // Animate circle
        scoreCirclePath.setAttribute('stroke-dasharray', `0, 100`);
        setTimeout(() => {
            scoreCirclePath.setAttribute('stroke-dasharray', `${percentage}, 100`);
        }, 100);
    }
    
    function setScoreColor(color) {
        scoreCirclePath.style.stroke = color;
        scoreText.style.fill = color;
    }

    // Boot
    initMenu();
});
