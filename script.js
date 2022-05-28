const Gameboard = (() => {
    let gameboard = [['', '', ''],
                        ['', '', ''],
                        ['', '', '']];

    const board = document.querySelector(".board");
    const h2 = document.querySelector("h2");
    const btn = document.querySelector("button");
    let rIndex;
    let cIndex;
    let marker = "X";

    const play = (e) => {
        rIndex = e.target.parentNode.dataset.attr;
        cIndex = e.target.dataset.attr;

        if (!e.target.textContent) {
            e.target.textContent = marker;
            gameboard[rIndex][cIndex] = marker;
            marker = marker === "X" ? "O": "X";

            // check if game won
            if (isOver()) {
                btn.textContent = "Play Again";
                document.querySelectorAll("span").forEach(span => span.style.cssText = "pointer-events: none");
            }
            }
        
        console.log([rIndex, cIndex]);
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
                console.log(column);
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
        while (board.hasChildNodes()) {
            board.removeChild(board.firstChild);
        }

        h2.textContent = "Your turn";
        btn.textContent = "Restart";
        render();
    }

    const isOver = () => {
        for (let i = 0; i < gameboard.length; i++) {
            console.log(i);
            if (gameboard[i][1] && (gameboard[i][0] === gameboard[i][1] &&
                gameboard[i][1] === gameboard[i][2])) {
                    h2.textContent = `Congrats! ${gameboard[i][1]} won!`;
                    return true;

            } else if (gameboard[1][i] && (gameboard[0][i] === gameboard[1][i] &&
                gameboard[1][i] === gameboard[2][i])) {
                    h2.textContent = `Congrats! ${gameboard[1][i]} won!`;
                    return true;
            } else if (gameboard[1][1] && (gameboard[0][0] === gameboard[1][1] &&
                gameboard[1][1] === gameboard[2][2])) {
                    h2.textContent = `Congrats! ${gameboard[1][1]} won!`;
                    return true;
            } else if (gameboard[1][1] && (gameboard[0][2] === gameboard[1][1] &&
                gameboard[1][1] === gameboard[2][0])) {
                    h2.textContent = `Congrats! ${gameboard[1][1]} won!`;
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