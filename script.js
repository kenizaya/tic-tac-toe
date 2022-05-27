const Gameboard = (() => {
    const gameboard = [['X', 'O', 'X'],
                        ['O', 'X', 'O'],
                        ['O', 'X', 'O']];

    const render = () => {
        const board = document.querySelector(".board");
        let cc = "";

        gameboard.forEach(row => {

            const div = document.createElement("div");
            let span;
            div.classList.add("row");
            board.appendChild(div);

            row.forEach(column => {
                span = document.createElement("span");
                span.textContent = column;
                console.log(column);
                span.classList.add("column");
                div.appendChild(span);
            });
        });
    }

    return {render};


})();


const Player = (name) => {
    return {name};
}