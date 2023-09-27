function pyramid(base, increment) {
  let finalPyramidHeight = 0;
  let stone = 0;
  let marble = 0;
  let lapaz = 0;
  let gold = 0;

  while (base >= 0) {
    let materialsPerStep = base * base; //121
    base -= 2;
    let stonesPerStep = base * base * increment;
    materialsPerStep -= stonesPerStep;
    marble = materialsPerStep;

    console.log(materialsPerStep, stonesPerStep, marble);
  }

  //bulk is stone, outer is marble, ever 5th step of outer is LAPAZ instead of marble
  //final step is gold
  //the first step is equal to the base
  //every step is reduced by 2block (1x1)
}
pyramid(11, 1);
/*
Stone required: 165 1 Marble required: 112
Lapis Lazuli required: 8
Gold required: 1
Final pyramid height: 6*/
