window.playBeep = function (frequency = 440, duration = 500) {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = "sine"; // Can be "square", "sawtooth", "triangle"
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, duration);
};
