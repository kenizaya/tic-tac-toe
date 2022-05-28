const Gameboard = (() => {
    const gameboard = [['X', 'O', 'X'],
                        ['O', ' ', 'O'],
                        ['O', 'X', 'O']];

    const render = () => {
        const board = document.querySelector(".board");
        let rowIndex = 0;
        let columnIndex = 0;

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