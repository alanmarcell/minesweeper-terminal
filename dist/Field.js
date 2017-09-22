'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function logNumBombs(numBombs, numBombsString) {
    switch (numBombs) {
        case 1:
            numBombsString += '\x1b[34m' + numBombs;
            break;
        case 2:
            numBombsString += '\x1b[32m' + numBombs;
            break;
        case 3:
            numBombsString += '\x1b[33m' + numBombs;
            break;
        case 4:
            numBombsString += '\x1b[35m' + numBombs;
            break;
        case 5:
            numBombsString += '\x1b[36m' + numBombs;
            break;
        case 7:
            numBombsString += '\x1b[31m' + numBombs;
            break;
        case 8:
            numBombsString += '\x1b[37m' + numBombs;
            break;
        default:
            numBombsString += '\x1b[37m' + numBombs;
    }
    return numBombsString;
}
// TODO break in small functions
function logField(field, clicked, devMode) {
    var countedField = field;
    var indexColor = '\x1b[37m';
    var resetColor = '\x1b[0m';
    var firstLine = '    ';
    field.map(function (f, index) {
        return firstLine += ' ' + (index + 1) + '  ';
    });
    console.log(indexColor + firstLine + resetColor);
    var row = void 0;
    field.map(function (col, colIndex) {
        var line = '|';
        row = '   ';
        col.map(function (pos, index) {
            var position = countedField[pos.x][pos.y];
            if (index === 0 && colIndex === 0) line = line;
            if (index === 0) line = ' ' + indexColor + (colIndex + 1) + resetColor + ' |';
            if (position.opened || devMode) {
                if (position.isBomb) {
                    var wasClicked = void 0;
                    if (pos.x === clicked.x && pos.y === clicked.y) wasClicked = true;
                    line += wasClicked ? '\x1b[47m' : '';
                    line += '\x1b[31m * ' + resetColor;
                    row += '---';
                } else {
                    var numBombs = countedField[pos.x][pos.y].nearBombs;
                    var _wasClicked = void 0;
                    if (pos.x === clicked.x && pos.y === clicked.y) _wasClicked = true;
                    var numBombsString = _wasClicked ? '\x1b[47m' : '';
                    numBombsString = logNumBombs(numBombs, numBombsString);
                    line += ' ' + numBombsString + resetColor + ' ';
                    row += '---';
                }
            } else if (position.marked === 1) {
                var _wasClicked2 = void 0;
                if (pos.x === clicked.x && pos.y === clicked.y) _wasClicked2 = true;
                line += _wasClicked2 ? '\x1b[47m' : '';
                line += '\x1b[31m |>' + resetColor;
                row += '---';
            } else if (position.marked === 2) {
                var _wasClicked3 = void 0;
                if (pos.x === clicked.x && pos.y === clicked.y) _wasClicked3 = true;
                line += _wasClicked3 ? '\x1b[47m' : '';
                line += '\x1b[31m ? ' + resetColor;
                row += '---';
            } else {
                line += '   ';
                row += '---';
            }
            line += '|';
            row += '-';
        });
        console.log(row);
        console.log(line);
    });
    console.log(row + '\n');
}
exports.logField = logField;
//# sourceMappingURL=Field.js.map
//# sourceMappingURL=Field.js.map