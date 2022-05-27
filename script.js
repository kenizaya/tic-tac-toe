const Gameboard = (() => {
    const gameboard = [['X', 'O', 'X'],
                        ['O', 'X', 'O'],
                        ['O', 'X', 'O']];

    const render = () => {
        const div = document.querySelector(".container");
        let cc = "";

        gameboard.forEach(row => {
            row.forEach(column => {
                cc += column + " ";
            });
            console.log(cc);
            // console.log("\n");
            cc = "";

        });
    }

    return {render};


})();


const Player = (name) => {
    return {name};
}