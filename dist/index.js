'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startBattle = exports.clickPosition = undefined;

var _minesweeperCore = require('minesweeper-core');

var _readline = require('readline');

var readline = _interopRequireWildcard(_readline);

var _Field = require('./Field');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fieldConfig = {
    width: 9,
    height: 9,
    bombs: 9
};
var battle = (0, _minesweeperCore.startBattle)(fieldConfig);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var x = void 0,
    y = void 0;
console.log('\x1Bc');
play();
function play() {
    (0, _Field.logField)(battle.field, { x: x, y: y });
    rl.question('Chose row: ', function (answer) {
        console.log('you choose:', answer);
        x = +answer - 1;
        rl.question('Choose col ', function (a) {
            rl.question('Choose mark (m) or open (o) ', function (m) {
                console.log('you choose:', m);
                y = +a - 1;
                console.log('\x1Bc');
                battle = m === 'o' ? (0, _minesweeperCore.clickPosition)(battle, { x: x, y: y }) : (0, _minesweeperCore.battleMarkPosition)(battle, { x: x, y: y });
                console.log('\x1Bc');
                if (battle.message) console.log(battle.message);
                if (!battle.isOver) {
                    play();
                } else {
                    (0, _Field.logField)(battle.field, { x: x, y: y });
                    if (battle.winner) console.log('YOU WIN! =D');else console.log('YOU LOSE! :(');
                    rl.close();
                }
            });
        });
    });
}
exports.clickPosition = _minesweeperCore.clickPosition;
exports.startBattle = _minesweeperCore.startBattle;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map