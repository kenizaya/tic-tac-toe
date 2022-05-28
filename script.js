const Gameboard = (() => {
    const gameboard = [['', '', ''],
                        ['', '', ''],
                        ['', '', '']];

    const render = () => {
        const board = document.querySelector(".board");
        let rowIndex = 0;
        let columnIndex = 0;
        let rIndex;
        let cIndex;
        let marker = "X";

        gameboard.forEach(row => {

            const div = document.createElement("div");
            let span;
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

                span.addEventListener('click', (e) => {
                    rIndex = e.target.parentNode.dataset.attr;
                    cIndex = e.target.dataset.attr;

                    if (!e.target.textContent) {
                        e.target.textContent = marker;
                        gameboard[rIndex][cIndex] = marker;
                        marker = marker === "X" ? "O": "X";

                        // check if game won
                        for (let i = 0; i < gameboard.length; i++) {
                            if ((gameboard[i][1] && (gameboard[i][0] === gameboard[i][1] && gameboard[i][1] === gameboard[i][2])) ||
                                (gameboard[1][i] && (gameboard[0][i] === gameboard[1][i] && gameboard[1][i] === gameboard[2][i]))) {
                                    console.log(true);
                                }
                    }}
                    
                    console.log([rIndex, cIndex]);
                })
            });

            
        });
    }

    return {render};
})();


const Player = (name) => {
    return {name};
}

const Game = (() => {

})

Gameboard.render();