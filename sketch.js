let input, button;
let input2 = [];
let slider = [100];
let i = 0;
let j = 0;
let ysel = 1;
let y = [];
let percentages = [];
let ptext = [];
let btext = [];
let income;
let over;

function setup() {
  canvas = createCanvas(200, 400);
  canvas.position(windowWidth / 2 - 30, 400);
  income_input = createInput();
  income_input.position(windowWidth / 2, 0);
  
  while (i < 10) {
    slider[i] = createSlider(0, 1, 0, 0.01);
    input2[i] = createInput();
    i++;
  }
  // while (j < 10) {
  //   y[j] = ysel * 30;
  //   j++;
  //   ysel++;
  // }
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
  
  input2[0].position(windowWidth / 2 - 180, slider[0].y);
  input2[1].position(windowWidth / 2 - 180, slider[1].y);
  input2[2].position(windowWidth / 2 - 180, slider[2].y);
  input2[3].position(windowWidth / 2 - 180, slider[3].y);
  input2[4].position(windowWidth / 2 - 180, slider[4].y);
  input2[5].position(windowWidth / 2 - 180, slider[5].y);
  input2[6].position(windowWidth / 2 - 180, slider[6].y);
  input2[7].position(windowWidth / 2 - 180, slider[7].y);
  input2[8].position(windowWidth / 2 - 180, slider[8].y);
  input2[9].position(windowWidth / 2 - 180, slider[9].y);
}

function draw() {
  background(255);
  income = income_input.value();
  
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
  
  percentageText1 = text(slider[0].value(), 0, canvas.height - 390);
  percentageText2 = text(slider[1].value(), 0, canvas.height - 370);
  percentageText3 = text(slider[2].value(), 0, canvas.height - 350);
  percentageText4 = text(slider[3].value(), 0, canvas.height - 330);
  percentageText5 = text(slider[4].value(), 0, canvas.height - 310);
  percentageText6 = text(slider[5].value(), 0, canvas.height - 290);
  percentageText7 = text(slider[6].value(), 0, canvas.height - 270);
  percentageText8 = text(slider[7].value(), 0, canvas.height - 250);
  percentageText9 = text(slider[8].value(), 0, canvas.height - 230);
  percentageText10 = text(slider[9].value(), 0, canvas.height - 210);
  
  categoriesText1 = text(input2[0].value(), canvas.width / 2 - 60, canvas.height - 390);
  categoriesText2 = text(input2[1].value(), canvas.width / 2 - 60, canvas.height - 370);
  categoriesText3 = text(input2[2].value(), canvas.width / 2 - 60, canvas.height - 350);
  categoriesText4 = text(input2[3].value(), canvas.width / 2 - 60, canvas.height - 330);
  categoriesText5 = text(input2[4].value(), canvas.width / 2 - 60, canvas.height - 310);
  categoriesText6 = text(input2[5].value(), canvas.width / 2 - 60, canvas.height - 290);
  categoriesText7 = text(input2[6].value(), canvas.width / 2 - 60, canvas.height - 270);
  categoriesText8 = text(input2[7].value(), canvas.width / 2 - 60, canvas.height - 250);
  categoriesText9 = text(input2[8].value(), canvas.width / 2 - 60, canvas.height - 230);
  categoriesText10 = text(input2[9].value(), canvas.width / 2 - 60, canvas.height - 210);
  
  finaltext1 = text(btext[0], canvas.width / 2, canvas.height - 390);
  finaltext2 = text(btext[1], canvas.width / 2, canvas.height - 370);
  finaltext3 = text(btext[2], canvas.width / 2, canvas.height - 350);
  finaltext4 = text(btext[3], canvas.width / 2, canvas.height - 330);
  finaltext5 = text(btext[4], canvas.width / 2, canvas.height - 310);
  finaltext6 = text(btext[5], canvas.width / 2, canvas.height - 290);
  finaltext7 = text(btext[6], canvas.width / 2, canvas.height - 270);
  finaltext8 = text(btext[7], canvas.width / 2, canvas.height - 250);
  finaltext9 = text(btext[8], canvas.width / 2, canvas.height - 230);
  finaltext10 = text(btext[9], canvas.width / 2, canvas.height - 210);


  total = btext[0] + btext[1] + btext[2] + btext[3] + btext[4] + btext[5] + btext[6] + btext[7] + btext[8] + btext[9];
  
  totaltext = text("Total: " + total, canvas.width / 2 - 20, canvas.height - 170);
  text(over, canvas.width / 2 - 40, canvas. height - 150)
  
  if (total > income) {
    over = "OVER BUDGET!!!"
  } else if (total == income) {
    over = "On Budget"
  } else if (total <= income) {
    over = "Under Budget"
  }
}