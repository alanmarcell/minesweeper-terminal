import { IField } from 'minesweeper-core';

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
function logField(field, clicked: { x, y }): void {
    const countedField: IField = field;
    const indexColor = '\x1b[37m';
    const resetColor = '\x1b[0m';
    let firstLine = '    ';
    field.map((f, index) => firstLine += ' ' + (index + 1) + '  ');
    console.log(indexColor + firstLine + resetColor);
    let row: string;
    field.map((col, colIndex) => {
        var line = '|';
        row = '   ';
        col.map((pos, index) => {
            if (index === 0 && colIndex === 0)
                line = line;
            if (index === 0)
                line = ' ' + indexColor + (colIndex + 1) + resetColor + ' |';
            if (countedField[pos.x][pos.y].opened) {
                if (countedField[pos.x][pos.y].isBomb) {
                    let wasClicked;
                    if (pos.x === clicked.x && pos.y === clicked.y)
                        wasClicked = true;
                    line += wasClicked ? '\x1b[47m' : '';
                    line += '\x1b[31m * ' + resetColor;
                    row += '---';
                } else {
                    const numBombs = countedField[pos.x][pos.y].nearBombs;
                    let wasClicked;
                    if (pos.x === clicked.x && pos.y === clicked.y)
                        wasClicked = true;
                    let numBombsString = wasClicked ? '\x1b[47m' : '';
                    numBombsString = logNumBombs(numBombs, numBombsString);

                    line += ' ' + numBombsString + resetColor + ' ';
                    row += '---';
                }
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

export {
    logField
};
