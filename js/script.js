const elePlayButton = document.querySelector('.play-button');
const eleGameContainers = document.querySelector('.game-containers');
const eleNumbersCont = document.querySelector('.numbers-containers');

elePlayButton.addEventListener('click', gameScript)

function gameScript() {
    let arrListNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 8) + 1);
    eleGameContainers.classList.add('show')
    for(i = 0; i < arrListNumbers.length; i++) {
        const eleSpan = document.createElement('span');
        eleSpan.classList.add('arr-numbers');
        eleSpan.innerHTML = arrListNumbers[i];
        eleNumbersCont.append(eleSpan);
    }
    setTimeout(removeShows, 5000);
    function removeShows() {
        eleNumbersCont.classList.add('hidden');
    }

    let counter = 0;
    let arrNumGuessed = [];

    setTimeout(whichNumbersTime, 10000);
    function whichNumbersTime() {
        for(i = 0; i < arrListNumbers.length; i++){
            let whichNumber = parseInt(prompt("What numbers?"));
            if (whichNumber == arrListNumbers[i]) {
                counter++;
                arrNumGuessed.push(whichNumber);
            }
        }
        console.log(counter);
        console.log(arrNumGuessed);
        const eleWin = document.createElement('div');
        eleWin.innerHTML = `You matched: ${counter}`;
        eleGameContainers.append(eleWin);

        for(i = 0; i < arrNumGuessed.length; i++) {
            const eleGuesed = document.createElement('span');
            eleGuesed.innerHTML = arrNumGuessed[i];
            eleGameContainers.append(eleGuesed);
        }
    }
}