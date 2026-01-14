// Exercise data
const exerciseGuides = {
    "5-4-3-2-1 Technique": {
        title: "5-4-3-2-1 Grounding Technique",
        content: `
            <h4>Duration: 3-5 minutes</h4>
            <p>This sensory grounding exercise helps bring your awareness back to the present moment by engaging all five senses.</p>
            
            <div class="exercise-step">
                <h5>Step 1: Identify 5 Things You Can See</h5>
                <p>Look around and name 5 things you can see. They can be simple: a tree, your hand, the sky, a chair, etc.</p>
            </div>
            
            <div class="exercise-step">
                <h5>Step 2: Identify 4 Things You Can Touch</h5>
                <p>Notice 4 things you can touch. Feel their texture: soft, rough, warm, cold. Maybe your shirt, a wall, or the ground.</p>
            </div>
            
            <div class="exercise-step">
                <h5>Step 3: Identify 3 Things You Can Hear</h5>
                <p>Listen carefully for 3 sounds. This could be traffic, birds, the wind, music, or even silence.</p>
            </div>
            
            <div class="exercise-step">
                <h5>Step 4: Identify 2 Things You Can Smell</h5>
                <p>Notice 2 scents around you. Maybe fresh air, food, flowers, or your environment.</p>
            </div>
            
            <div class="exercise-step">
                <h5>Step 5: Identify 1 Thing You Can Taste</h5>
                <p>Notice the taste in your mouth. Maybe mint, coffee, or just your natural taste.</p>
            </div>
            
            <p style="margin-top: 1.5rem; padding: 1rem; background: #f0fdf4; border-radius: 6px;">
                <strong>✓ Well done!</strong> You've completed the 5-4-3-2-1 technique. Notice how you feel now. This grounding exercise brings awareness to the present moment and can help reduce anxiety.
            </p>
        `
    },
    "Box Breathing": {
        title: "Box Breathing Technique",
        content: `
            <h4>Duration: 2-3 minutes</h4>
            <p>Box breathing is a simple technique used by athletes and military personnel to calm the nervous system and reduce stress.</p>
            
            <div class="exercise-step">
                <h5>How It Works</h5>
                <p>Box breathing involves breathing in a pattern: Inhale, Hold, Exhale, Hold - each for 4 counts.</p>
            </div>
            
            <div class="breathing-pattern">
                <div class="breath-phase">
                    <strong>Inhale</strong>
                    <p>Count: 1... 2... 3... 4</p>
                </div>
                <div class="breath-phase">
                    <strong>Hold</strong>
                    <p>Count: 1... 2... 3... 4</p>
                </div>
                <div class="breath-phase">
                    <strong>Exhale</strong>
                    <p>Count: 1... 2... 3... 4</p>
                </div>
                <div class="breath-phase">
                    <strong>Hold</strong>
                    <p>Count: 1... 2... 3... 4</p>
                </div>
            </div>
            
            <div class="exercise-step">
                <h5>Instructions</h5>
                <ol>
                    <li>Sit comfortably with your back straight</li>
                    <li>Breathe in slowly through your nose for 4 counts</li>
                    <li>Hold your breath for 4 counts</li>
                    <li>Exhale slowly through your mouth for 4 counts</li>
                    <li>Hold empty for 4 counts</li>
                    <li>Repeat 5-10 times</li>
                </ol>
            </div>
            
            <p style="margin-top: 1.5rem; padding: 1rem; background: #f0fdf4; border-radius: 6px;">
                <strong>✓ Great work!</strong> Box breathing helps activate your parasympathetic nervous system, promoting calm and relaxation.
            </p>
        `
    },
    "Progressive Relaxation": {
        title: "Progressive Muscle Relaxation",
        content: `
            <h4>Duration: 5-10 minutes</h4>
            <p>This technique involves systematically tensing and relaxing different muscle groups to release physical tension and stress.</p>
            
            <div class="exercise-step">
                <h5>Instructions</h5>
                <p>Find a comfortable position. Work through each muscle group:</p>
            </div>
            
            <div class="muscle-group">
                <h5>1. Feet & Toes (1 min)</h5>
                <p>Tense your feet by curling your toes for 5 seconds. Release and notice the relaxation.</p>
            </div>
            
            <div class="muscle-group">
                <h5>2. Calves (1 min)</h5>
                <p>Point your toes downward, tensing your calves for 5 seconds. Release.</p>
            </div>
            
            <div class="muscle-group">
                <h5>3. Thighs (1 min)</h5>
                <p>Squeeze your thigh muscles tightly for 5 seconds. Release.</p>
            </div>
            
            <div class="muscle-group">
                <h5>4. Buttocks (1 min)</h5>
                <p>Clench your buttock muscles for 5 seconds. Release.</p>
            </div>
            
            <div class="muscle-group">
                <h5>5. Abdomen (1 min)</h5>
                <p>Pull your stomach muscles in tightly for 5 seconds. Release.</p>
            </div>
            
            <div class="muscle-group">
                <h5>6. Hands & Forearms (1 min)</h5>
                <p>Make tight fists and tense your arms for 5 seconds. Release.</p>
            </div>
            
            <div class="muscle-group">
                <h5>7. Shoulders & Neck (1 min)</h5>
                <p>Shrug your shoulders up to your ears for 5 seconds. Release.</p>
            </div>
            
            <div class="muscle-group">
                <h5>8. Face (1 min)</h5>
                <p>Scrunch all your facial muscles for 5 seconds. Release.</p>
            </div>
            
            <p style="margin-top: 1.5rem; padding: 1rem; background: #f0fdf4; border-radius: 6px;">
                <strong>✓ Excellent!</strong> Progressive relaxation helps you recognize physical tension and release it, promoting deep relaxation.
            </p>
        `
    },
    "Mindful Grounding": {
        title: "Mindful Grounding Exercise",
        content: `
            <h4>Duration: 2-3 minutes</h4>
            <p>A quick grounding exercise to bring you back to the present moment.</p>
            
            <div class="exercise-step">
                <h5>Get Comfortable</h5>
                <p>Sit or stand with your feet firmly on the ground.</p>
            </div>
            
            <div class="exercise-step">
                <h5>Feel Your Feet</h5>
                <p>Notice the sensation of your feet on the ground. Feel the weight, temperature, and contact.</p>
            </div>
            
            <div class="exercise-step">
                <h5>Breathe Naturally</h5>
                <p>Take slow, natural breaths. Notice the air entering and leaving your body.</p>
            </div>
            
            <div class="exercise-step">
                <h5>Scan Your Body</h5>
                <p>Starting from your head, slowly notice sensations throughout your body without judgment.</p>
            </div>
            
            <div class="exercise-step">
                <h5>Return to Now</h5>
                <p>Gently open your eyes and notice your surroundings. You are safe, you are here, you are now.</p>
            </div>
            
            <p style="margin-top: 1.5rem; padding: 1rem; background: #f0fdf4; border-radius: 6px;">
                <strong>✓ Well done!</strong> Mindful grounding brings you back to the present moment and your physical body.
            </p>
        `
    }
};

// Open Chat Modal
function openChat() {
    document.getElementById('chatModal').style.display = 'block';
}

// Close Chat Modal
function closeChat() {
    document.getElementById('chatModal').style.display = 'none';
}

// Open Reminder Modal
function openReminder() {
    document.getElementById('reminderModal').style.display = 'block';
}

// Close Reminder Modal
function closeReminder() {
    document.getElementById('reminderModal').style.display = 'none';
}

// Start Exercise
function startExercise(exerciseName) {
    const modal = document.getElementById('exerciseModal');
    const exercise = exerciseGuides[exerciseName];
    
    if (exercise) {
        document.getElementById('exerciseName').textContent = exercise.title;
        document.getElementById('exerciseContent').innerHTML = exercise.content;
        modal.style.display = 'block';
    }
}

// Close Exercise Modal
function closeExercise() {
    document.getElementById('exerciseModal').style.display = 'none';
}

// Send Chat Message
function sendMessage(message = null) {
    const chatInput = document.getElementById('chatInput');
    const input = message || chatInput.value;
    
    if (!input.trim()) return;
    
    const chatBox = document.querySelector('.chat-box');
    
    // User message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user-message';
    userMsg.innerHTML = `<p style="color: #667eea; text-align: right;">${input}</p>`;
    chatBox.appendChild(userMsg);
    
    // Clear input
    if (chatInput) chatInput.value = '';
    
    // Bot response (simulated)
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot-message';
        const response = generateBotResponse(input);
        botMsg.innerHTML = `<p>${response}</p>`;
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

// Handle Enter key in chat
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Generate AI-like responses
function generateBotResponse(input) {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('stress')) {
        return 'I understand you\'re feeling stressed. Let\'s try a grounding exercise to help you feel better. Would you like to try the 5-4-3-2-1 technique or box breathing?';
    } else if (lowerInput.includes('anxiety') || lowerInput.includes('anxious')) {
        return 'Anxiety can feel overwhelming. Remember, you\'re safe right now. Try taking some deep breaths with me. Would box breathing help?';
    } else if (lowerInput.includes('grounding')) {
        return 'Great! Grounding exercises help bring you back to the present moment. I recommend starting with the 5-4-3-2-1 technique. It\'s quick and very effective. Ready to begin?';
    } else if (lowerInput.includes('burnout')) {
        return 'Burnout is serious and it\'s good you\'re seeking support. Remember, you deserve rest. Progressive relaxation could help your body release tension. Also, make sure to take breaks from your responsibilities when possible.';
    } else {
        return 'Thank you for sharing. I\'m here to support you. Would you like to try a grounding exercise, mood tracking, or just talk more about what you\'re experiencing?';
    }
}

// Handle Reminder Form
document.addEventListener('DOMContentLoaded', function() {
    const reminderForm = document.getElementById('reminderForm');
    if (reminderForm) {
        reminderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const date = document.getElementById('reminderDate').value;
            const time = document.getElementById('reminderTime').value;
            const type = document.getElementById('reminderType').value;
            
            alert(`✓ Reminder set!\n\nDate: ${date}\nTime: ${time}\nType: ${type}\n\nYou'll receive a notification at this time.`);
            closeReminder();
            reminderForm.reset();
        });
    }
});

// Close modals when clicking outside
window.onclick = function(event) {
    const chatModal = document.getElementById('chatModal');
    const reminderModal = document.getElementById('reminderModal');
    const exerciseModal = document.getElementById('exerciseModal');
    
    if (event.target === chatModal) {
        chatModal.style.display = 'none';
    }
    if (event.target === reminderModal) {
        reminderModal.style.display = 'none';
    }
    if (event.target === exerciseModal) {
        exerciseModal.style.display = 'none';
    }
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mood tracking feedback
document.addEventListener('DOMContentLoaded', function() {
    const moodButtons = document.querySelectorAll('.mood');
    moodButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mood = this.getAttribute('title');
            // Visual feedback
            moodButtons.forEach(btn => btn.style.opacity = '0.5');
            this.style.opacity = '1';
            
            // Message
            setTimeout(() => {
                alert(`Thanks for sharing! You're feeling ${mood}. Remember, it's okay to feel this way. Would you like to talk to our wellness assistant?`);
            }, 300);
        });
    });
});
