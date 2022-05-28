const Gameboard = (() => {
    let gameboard = [['', '', ''],
                        ['', '', ''],
                        ['', '', '']];

    const board = document.querySelector(".board");
    const h2 = document.querySelector("h2");
    const btn = document.querySelector("button");
    let rIndex;
    let cIndex;
    let turns = 0;

    const play = (e) => {
        
        rIndex = e.target.parentNode.dataset.attr;
        cIndex = e.target.dataset.attr;
        let brIndex = Math.floor(Math.random() * 3);
        let bcIndex = Math.floor(Math.random() * 3);


        if (!e.target.textContent) {
            let marker = "X";
            e.target.textContent = marker;
            gameboard[rIndex][cIndex] = marker;
            turns++;
            marker = marker === "X" ? "O": "X";
            
            

            // check if game won
            if (isOver()) {
                btn.textContent = "Play Again";
                document.querySelectorAll("span").forEach(span => span.style.cssText = "pointer-events: none");
            } else {
                while (gameboard[brIndex][bcIndex] != "") {
                    brIndex = Math.floor(Math.random() * 3);
                    bcIndex = Math.floor(Math.random() * 3);   
                }
                const sp = document.querySelector(`div[data-attr="${brIndex}"] span[data-attr="${bcIndex}"]`);
                gameboard[brIndex][bcIndex] = marker;
                sp.textContent = marker;
                turns++;
            }

            if (isOver()) {
                btn.textContent = "Play Again";
                document.querySelectorAll("span").forEach(span => span.style.cssText = "pointer-events: none");
            } 
             
            }
    }

    const render = () => {
        let rowIndex = 0;
        let columnIndex = 0;
        let span;
        gameboard.forEach(row => {

            const div = document.createElement("div");
            div.classList.add("row");
            div.dataset.attr = rowIndex;
            board.appendChild(div);
            rowIndex++;
            columnIndex = 0;

            row.forEach(column => {
                span = document.createElement("span");
                span.textContent = column;
                span.classList.add("column");
                span.dataset.attr = columnIndex;
                div.appendChild(span);
                columnIndex++;

                span.addEventListener('click', play)
            });

            
        });
    }

    const restart = () => {
        gameboard = [['', '', ''],
                    ['', '', ''],
                    ['', '', '']];
        turns = 0;
        while (board.hasChildNodes()) {
            board.removeChild(board.firstChild);
        }

        h2.textContent = "Your turn";
        btn.textContent = "Restart";
        render();
    }

    const isOver = () => {
        let winner;

        for (let i = 0; i < gameboard.length; i++) {
            if (gameboard[i][1] && (gameboard[i][0] === gameboard[i][1] &&
                gameboard[i][1] === gameboard[i][2])) {
                    winner = gameboard[i][1] === "X" ? "Congrats! You" : "OOPS! Bot";
                    h2.textContent = `${winner} won!`;
                    return true;

            } else if (gameboard[1][i] && (gameboard[0][i] === gameboard[1][i] &&
                gameboard[1][i] === gameboard[2][i])) {
                    winner = gameboard[1][i] === "X" ? "Congrats! You" : "OOPS! Bot";
                    h2.textContent = `${winner} won!`;
                    return true;
            } else if (gameboard[1][1] && (gameboard[0][0] === gameboard[1][1] &&
                gameboard[1][1] === gameboard[2][2])) {
                    winner = gameboard[1][1] === "X" ? "Congrats! You" : "OOPS! Bot";
                    h2.textContent = `${winner} won!`;
                    return true;
            } else if (gameboard[1][1] && (gameboard[0][2] === gameboard[1][1] &&
                gameboard[1][1] === gameboard[2][0])) {
                    winner = gameboard[1][1] === "X" ? "Congrats! You" : "OOPS! Bot";
                    h2.textContent = `${winner} won!`;
                    return true;
            } else if (turns >= 9) {
                    h2.textContent = `It's a tie!`;
                    return true;
            }
        }
    }

    btn.addEventListener('click', restart);

    return {render};
})();


const Player = (name) => {
    return {name};
}

const Game = (() => {

})


Gameboard.render();