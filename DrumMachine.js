document.addEventListener("DOMContentLoaded", function() {
    const drumPads = document.querySelectorAll('.drum-pad');
    const display = document.getElementById('display');
    const audioElements = document.querySelectorAll('.clip');
    let powerOn = true;
    let currentBank = 'HeaterKit'; 
    

    drumPads.forEach(pad => {
        pad.addEventListener('click', function() {
            if (powerOn) {
                const audio = this.querySelector('audio');
                display.innerText = this.id;
                audio.currentTime = 0; 
                audio.play();
            }
        });
    });

    document.addEventListener('keydown', function(event) {
        if (!powerOn) return;
        const key = event.key.toUpperCase();
        const drumPad = document.getElementById(key);

        if (drumPad) {
            const audio = drumPad.querySelector('audio');
            display.innerText = key;
            audio.currentTime = 0; 
            audio.play();
        }
    });

    const powerButton = document.getElementById('powerbutton');
    powerButton.addEventListener('click', function() {
        powerOn = !powerOn;
        display.innerText = powerOn ? 'PowerOn' : 'PowerOff';

        if (!powerOn) {
            drumPads.forEach(pad => {
                pad.classList.add('dis');
            });
        } else {
            drumPads.forEach(pad => {
                pad.classList.remove('dis');
            });
        }
    });

    const bankButton = document.getElementById('bankbutton');
    bankButton.addEventListener('click', function() {
        if (powerOn) {
            currentBank = (currentBank === 'HeaterKit') ? 'SmoothPianoKit' : 'HeaterKit';
            currentSounds = (currentBank === 'HeaterKit') ? e : t;
            display.innerText = currentBank;
        }
    });

    const volumeSlider = document.getElementById('volume-slider-input');

    volumeSlider.addEventListener('input', function() {
        const volumeValue = parseFloat(volumeSlider.value);

        audioElements.forEach(audio => {
            audio.volume = volumeValue;
        });
    });
});
