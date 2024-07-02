// Define an array of music tracks
var musicTracks = [
    { title: 'Track 1', src: 'Train+Wreck-James+Arthur+_sample.mp3' },
    { title: 'Track 2', src: 'James_Arthur_-_Can_I_Be_Him_CeeNaija.com_.mp3' }
];

function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatBox = document.getElementById('chat-box');
    
    // Display user message
    var userMessage = document.createElement('p');
    userMessage.className = 'user-message';
    userMessage.textContent = 'You: ' + userInput;
    chatBox.appendChild(userMessage);
    
    // Check for music play command
    if (userInput.toLowerCase().includes('play music')) {
        var musicMessage = document.createElement('p');
        musicMessage.textContent = 'Bot: Please select a track:';
        chatBox.appendChild(musicMessage);
        
        // Display buttons for each music track
        for (var i = 0; i < musicTracks.length; i++) {
            var trackButton = document.createElement('button');
            trackButton.textContent = musicTracks[i].title;
            trackButton.setAttribute('data-src', musicTracks[i].src);
            trackButton.addEventListener('click', function() {
                playMusic(this.getAttribute('data-src'));
            });
            chatBox.appendChild(trackButton);
        }
    } else {
        var botMessage = document.createElement('p');
        botMessage.textContent = 'Bot: Sorry, I don\'t understand.';
        chatBox.appendChild(botMessage);
    }
    
    // Clear input field
    document.getElementById('user-input').value = '';
}

function playMusic(trackSrc) {
    // Stop any currently playing music (if applicable)
    var currentlyPlaying = document.querySelector('audio');
    if (currentlyPlaying) {
        currentlyPlaying.pause();
        currentlyPlaying.parentNode.removeChild(currentlyPlaying);
    }
    
    // Create a new audio element and start playing the selected track
    var audio = new Audio(trackSrc);
    audio.setAttribute('autoplay', 'true');
    audio.setAttribute('controls', 'true');
    chatBox.appendChild(audio);
}
