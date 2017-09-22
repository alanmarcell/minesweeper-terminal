import { battleMarkPosition, clickPosition, IFieldConfig, startBattle } from 'minesweeper-core';
import * as readline from 'readline';
import { logField } from './Field';

const fieldConfig: IFieldConfig = {
    width: 9,
    height: 9,
    bombs: 9
};

var battle = startBattle(fieldConfig);
// do {
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let x, y;
play();
function play() {
    rl.question('Chose vertical col: ', (answer) => {
        // TODO: Log the answer in a database
        console.log('you choose:', answer);
        x = +answer - 1;
        // rl.close();
        rl.question('Chose horizontal pos ', (a) => {
            rl.question('Chose mark (m) or open (o)  pos ', (m) => {
                // TODO: Log the answer in a database
                console.log('you choose:', a);
                y = +a - 1;
                battle = m === 'o' ? clickPosition(battle, { x, y }) : battleMarkPosition(battle, { x, y });
                logField(battle.field, { x, y });
                if (!battle.isOver) {
                    play();
                } else {
                    rl.close();
                }
            });
        });
    });
}
// const x = Math.floor((battle.field.length - 1) * Math.random() + 1);
// const y = Math.floor((battle.field[0].length - 1) * Math.random() + 1);

// }
// while (!battle.isOver);

export {
    clickPosition, startBattle, IFieldConfig
};
