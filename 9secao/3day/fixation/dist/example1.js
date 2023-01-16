"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.youCharacter = exports.LongRangeCharacter = exports.MeleeCharacter = exports.Character = void 0;
class Character {
}
exports.Character = Character;
class MeleeCharacter extends Character {
    talk() {
        console.log('You talk me?');
    }
    ;
    specialMove() {
        console.log('Look this special move!');
    }
}
exports.MeleeCharacter = MeleeCharacter;
class LongRangeCharacter extends Character {
    talk() {
        console.log('You want talk me?');
    }
    ;
    specialMove() {
        console.log('Congratulations! You move is special!');
    }
}
exports.LongRangeCharacter = LongRangeCharacter;
const youCharacter = (character) => {
    character.talk();
    character.specialMove();
};
exports.youCharacter = youCharacter;
