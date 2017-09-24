import { battleMarkPosition, clickPosition, startBattle } from 'minesweeper-core';
import * as readline from 'readline';
import { logField } from './Field';
const fieldConfig = {
    width: 9,
    height: 9,
    bombs: 9
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
    rl.question('Chose row: ', (answer) => {
        console.log('you choose:', answer);
        x = +answer - 1;
        rl.question('Choose col ', (a) => {
            rl.question('Choose mark (m) or open (o) ', (m) => {
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
export { clickPosition, startBattle };
//# sourceMappingURL=index.js.map