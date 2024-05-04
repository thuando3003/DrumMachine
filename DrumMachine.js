document.addEventListener("DOMContentLoaded", function() {
    const drumPads = document.querySelectorAll('.drum-pad');
    const display = document.getElementById('display');
    const audioElements = document.querySelectorAll('.clip');

    drumPads.forEach(pad => {
        pad.addEventListener('click', function() {
            const audio = this.querySelector('audio');
            display.innerText = this.id;
            audio.currentTime = 0; 
            audio.play();
        });
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key.toUpperCase();
        const drumPad = document.getElementById(key);

        if (drumPad) {
            const audio = drumPad.querySelector('audio');
            display.innerText = key;
            audio.currentTime = 0; 
            audio.play();
        }
    });

    let powerOn = false; // Biến để theo dõi trạng thái bật/tắt của Power
    let currentBank = 'HeaterKit'; // Biến để lưu trữ trạng thái hiện tại của Bank

    // Xử lý sự kiện khi nhấp vào nút Power
    const powerButton = document.getElementById('power-btn');
    powerButton.addEventListener('click', function() {
        powerOn = !powerOn; // Đảo ngược trạng thái Power
        display.innerText = powerOn ? 'PowerOn' : 'PowerOff';
    });

    // Xử lý sự kiện khi nhấp vào nút Bank
    const bankButton = document.getElementById('bank-btn');
    bankButton.addEventListener('click', function() {
        if (powerOn) {
            // Nếu Power đang bật, chuyển đổi Bank
            currentBank = (currentBank === 'HeaterKit') ? 'SmoothPianoKit' : 'HeaterKit';
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
