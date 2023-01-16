export abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void
}

export class MeleeCharacter extends Character {
  talk(): void {
    console.log('You talk me?');
  };

  specialMove(): void {
    console.log('Look this special move!');
  }
}

export class LongRangeCharacter extends Character {
  talk(): void {
    console.log('You want talk me?');
  };

  specialMove(): void {
    console.log('Congratulations! You move is special!');
  }
}

export const youCharacter = (character: Character): void => {
  character.talk()
  character.specialMove();
}