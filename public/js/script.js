function playSound(sound) {
    let soundElement = document.getElementById(sound);
    let soundButtonElement = document.querySelector(`button[data-key=${sound}]`);

    if(!soundElement || !soundButtonElement) 
        return;

    soundElement.currentTime = 0;
    soundElement.play();

    soundButtonElement.classList.add('active');
    setTimeout(() => {
        soundButtonElement.classList.remove('active');
    }, 300)
}

function playBeats(beats) {
    beats = beats.split('');

    let wait = 0;

    for(let sound of beats) {
        setTimeout(() => {
            playSound('key' + sound);
        }, wait);

        wait += 250;
    }
}

let soundButtons = document.querySelectorAll('button.button');
let inputBeats = document.getElementById('beats');
let buttonPlayBeats = document.getElementById('play');

soundButtons.forEach( button => {
    button.addEventListener('click', () => {
        playSound(button.getAttribute('data-key'));
    });
});

document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
});


buttonPlayBeats.addEventListener('click', () => {
    playBeats(inputBeats.value);
});