document.addEventListener("DOMContentLoaded", function() {

    const e = [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    }, {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    }, {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    }, {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    }, {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    }, {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    }, {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    }, {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    }, {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }];
    
    const t = [{
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    }, {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    }, {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    }, {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    }, {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    }, {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    }, {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    }, {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    }, {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }];

    const drumPads = document.querySelectorAll('.drum-pad');
    const display = document.getElementById('display');
    const audioElements = document.querySelectorAll('.clip');
    let powerOn = true;
    let currentBank = 'HeaterKit'; 
    let currentSounds = e;

    drumPads.forEach(pad => {
        pad.addEventListener('click', function() {
            if (powerOn) {
                const sound = currentSounds.find(sound => sound.keyTrigger === this.id);
                if (sound) {
                    const audio = new Audio(sound.url);
                    audio.volume = volumeSlider.value;
                    audio.currentTime = 0; 
                    audio.play();
                    display.innerText = sound.id;
                }
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
