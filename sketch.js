let input, button;
let slider = [100];
let i = 0;
let j = 0;
let ysel = 1;
let y = [];
let percentages = [];
let ptext = [];
let btext = [];
let income

function setup() {
  canvas = createCanvas(200, 400);
  canvas.position(windowWidth / 2 - 30, 400);
  income_input = createInput();
  income_input.position(windowWidth / 2, 0);
  while (i < 10) {
    slider[i] = createSlider(0, 1, 0, 0.01);
    i++;
  }
  while (j < 10) {
    y[j] = ysel * 30;
    j++;
    ysel++;
  }
  slider[0].position(windowWidth / 2, 30);
  slider[1].position(windowWidth / 2, 60);
  slider[2].position(windowWidth / 2, 90);
  slider[3].position(windowWidth / 2, 120);
  slider[4].position(windowWidth / 2, 150);
  slider[5].position(windowWidth / 2, 180);
  slider[6].position(windowWidth / 2, 210);
  slider[7].position(windowWidth / 2, 240);
  slider[8].position(windowWidth / 2, 270);
  slider[9].position(windowWidth / 2, 300);
}

function draw() {
  background(255);
  income = income_input.value();
  
  // ptext[0] = text(slider[0].value(), slider[0].x, slider[0].y + 17);
  // ptext[1] = text(slider[1].value(), slider[1].x, slider[1].y + 17);
  // ptext[2] = text(slider[2].value(), slider[2].x, slider[2].y + 17);
  // ptext[3] = text(slider[3].value(), slider[3].x, slider[3].y + 17);
  // ptext[4] = text(slider[4].value(), slider[4].x, slider[4].y + 17);
  // ptext[5] = text(slider[5].value(), slider[5].x, slider[5].y + 17);
  // ptext[6] = text(slider[6].value(), slider[6].x, slider[6].y + 17);
  // ptext[7] = text(slider[7].value(), slider[7].x, slider[7].y + 17);
  // ptext[8] = text(slider[8].value(), slider[8].x, slider[8].y + 17);
  // ptext[9] = text(slider[9].value(), slider[9].x, slider[9].y + 17);
  
  btext[0] = income * slider[0].value();
  btext[1] = income * slider[1].value();
  btext[2] = income * slider[2].value();
  btext[3] = income * slider[3].value();
  btext[4] = income * slider[4].value();
  btext[5] = income * slider[5].value();
  btext[6] = income * slider[6].value();
  btext[7] = income * slider[7].value();
  btext[8] = income * slider[8].value();
  btext[9] = income * slider[9].value();
  
  finaltext = text(btext[0], canvas.width / 2, canvas.height - 390) && text(btext[1], canvas.width / 2, canvas.height - 370) && text(btext[2], canvas.width / 2, canvas.height - 350) &&   text(btext[3], canvas.width / 2, canvas.height - 330) && text(btext[4], canvas.width / 2, canvas.height - 310) && text(btext[5], canvas.width / 2, canvas.height - 290) && text(btext[6], canvas.width / 2, canvas.height - 270) && text(btext[7], canvas.width / 2, canvas.height - 250) && text(btext[8], canvas.width / 2, canvas.height - 230) && text(btext[9], canvas.width / 2, canvas.height - 210)
}