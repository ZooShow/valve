let valves = document.querySelectorAll('.valve');

function swap(valve) {
    let line = valve.classList.item(1);
    let row = valve.classList.item(2);
    for (let node of valves) {
        if (node.classList.contains(line) || node.classList.contains(row)) {
            node.classList.toggle('rotate');
        }
    }
}

let startGame = function() {
    console.log('st');
    for (let i = 0; i < 1; ++i) {
        let number = Math.floor((Math.random() * 16) + 1);
        let newNode = document.querySelector(".g" + number);
        swap(newNode);
    }

}



let checkAll = function() {
    let isNotRotate = true;
    let checkNodes = document.querySelectorAll('.valve');
    for (let checkNode of checkNodes) {
        if (checkNode.classList.contains('rotate')) {
            isNotRotate = false;
        }
    }
    return isNotRotate;
}

let play = document.getElementById('play');
play.onclick = function() {
    document.querySelector('.gameStart').classList.add('none');
    document.querySelector('.gameBackground').classList.remove('none');
    startGame();
    for (let valve of valves) {
        valve.onclick = function() {
            swap(valve);
            if (checkAll()) {
                document.querySelector('.gameBackground').classList.add('none');
                document.querySelector('.gameEnd').classList.remove('none');
            };
        }
    }

}

let rePlay = document.getElementById('retry');
rePlay.onclick = function() {
    document.querySelector('.gameBackground').classList.remove('none');
    document.querySelector('.gameEnd').classList.add('none');
    startGame();
}