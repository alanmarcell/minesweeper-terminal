import { battleMarkPosition, clickPosition, IFieldConfig, startBattle } from 'minesweeper-core';
import * as readline from 'readline';
import { logField } from './Field';
const fieldConfig = {
    width: 3,
    height: 3,
    bombs: 3
};
var battle = startBattle(fieldConfig);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let x, y;
console.log('\x1Bc');
play();
function play() {
    logField(battle.field, { x, y });
    rl.question('Chose vertical col: ', (answer) => {
        console.log('you choose:', answer);
        x = +answer - 1;
        rl.question('Chose horizontal pos ', (a) => {
            rl.question('Chose mark (m) or open (o) ', (m) => {
                console.log('you choose:', m);
                y = +a - 1;
                console.log('\x1Bc');
                battle = m === 'o' ? clickPosition(battle, { x, y }) : battleMarkPosition(battle, { x, y });
                console.log('\x1Bc');
                if (battle.message)
                    console.log(battle.message);
                if (!battle.isOver) {
                    play();
                }
                else {
                    logField(battle.field, { x, y });
                    if (battle.winner)
                        console.log('YOU WIN! =D');
                    else
                        console.log('YOU LOSE! :(');
                    rl.close();
                }
            });
        });
    });
}
export { clickPosition, startBattle, IFieldConfig };
//# sourceMappingURL=index.js.map