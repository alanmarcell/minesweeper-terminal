import { clickPosition, IFieldConfig, startBattle } from 'minesweeper-core';
import { logField } from './Field';

const fieldConfig: IFieldConfig = {
    width: 9,
    height: 9,
    bombs: 9
};

var battle = startBattle(fieldConfig);
do {
    const x = Math.floor((battle.field.length - 1) * Math.random() + 1);
    const y = Math.floor((battle.field[0].length - 1) * Math.random() + 1);

    battle = clickPosition(battle, { x, y });
    logField(battle.field);
}
while (!battle.isOver);

export {
    clickPosition, startBattle, IFieldConfig
};
