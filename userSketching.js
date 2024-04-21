// Checks RGBA values in the sliders
var reds, greens, blues, alps;

// Various variables to keep track of the values of user text input, or a randomly-generated number
var name1, action1, place1, pronoun1, action2, action3, place2, info1, info2, thought1, name2, pronoun2, personInfo1, textColor, textBG, randomScore, changeScore, companyName, personInfo2, emotion, quote;

// Values that keeps track of draggable shapes
let square1, triangle1, oval1, circle1, square2, oval2, triangle2, circle2, emoji1, emoji2, emoji3;

function setup() {
  createCanvas(1100, 1000);

  // Creates sliders. Default is 255. Sets up positions to have them "stack" on top
  reds = createSlider(0, 255, 255);
  reds.position(150, 735);

  greens = createSlider(0, 255, 255);
  greens.position(150, 775);

  blues = createSlider(0, 255, 255);
  blues.position(150, 815);

  alps = createSlider(0, 255, 255);
  alps.position(150, 855);

  // Tracks the custom text values the user inputs into he text boxes
  name1 = createInput('(Name Of 1st Character)');
  name1.position(400, 735);
  action1 = createInput('(Action 1)');
  action1.position(575, 735);
  place1 = createInput('(Place 1)');
  place1.position(750, 735);
  pronoun1 = createInput('(Pronoun[s])');
  pronoun1.position(925, 735);
  action2 = createInput('(Action 2)');
  action2.position(400, 765);
  action3 = createInput('(Action 3)');
  action3.position(575, 765);
  place2 = createInput('(Place 2)');
  place2.position(750, 765);
  info1 = createInput('(Info Of Place 2)');
  info1.position(925, 765);
  info2 = createInput('(Info Of Place 1)');
  info2.position(400, 795);
  thought1 = createInput('(Thoughts The Character is Thinking)');
  thought1.position(575, 795);
  name2 = createInput('(Name Of 2nd Character)');
  name2.position(750, 795);
  pronoun2 = createInput('(Pronoun[s] Of 2nd Character)');
  pronoun2.position(925, 795);
  personInfo1 = createInput('(Info Of 2nd Character)');
  personInfo1.position(400, 825);
  personInfo2 = createInput('(Info Of 1st Character)');
  personInfo2.position(575, 825);
  emotion = createInput('(Emotion The 1st Character Is Feeling)');
  emotion.position(750, 825);
  quote = createInput('(Add A Quote [About A Lesson Or From A Famous Person])');
  quote.position(925, 825);

  // Sets up a row of draggable shapes. Tracks their location and even the styling of the shapes
  circle1 = createDiv(' ');
  circle1.position(375, 1030);
  circle1.size(50, 50);
  circle1.style('background', 'yellow');
  circle1.style('border-radius', '50%');
  circle1.style('border', '2px solid black');
  circle1.draggable();

  oval2 = createDiv(' ');
  oval2.position(475, 1030);
  oval2.size(70, 40);
  oval2.style('background', 'white');
  oval2.style('border-radius', '50%');
  oval2.style('border', '2px solid black');
  oval2.draggable();
  
  oval1 = createDiv(' ');
  oval1.position(280, 1030);
  oval1.size(60, 40);
  oval1.style('background', 'gray');
  oval1.style('border-radius', '50%');
  oval1.style('border', '2px solid black');
  oval1.draggable();

  square2 = createDiv(' ');
  square2.position(450, 1030);
  square2.size(10, 40);
  square2.style('background', 'brown');
  square2.style('border', '2px solid black');
  square2.draggable();

  square1 = createDiv(' ');
  square1.position(100, 1030);
  square1.size(50, 50);
  square1.style('background', 'red');
  square1.style('border', '2px solid black');
  square1.draggable();
  
  triangle1 = createDiv(' ');
  triangle1.position(180, 1030);
  triangle1.size(0,0);
  triangle1.style('background', 'transparent');
  triangle1.style('border-left', '46px solid transparent');
  triangle1.style('border-right', '46px solid transparent');
  triangle1.style('border-bottom', '45px solid green');
  triangle1.draggable();

  triangle2 = createDiv(' ');
  triangle2.position(560, 1030);
  triangle2.size(0,0);
  triangle2.style('background', 'transparent');
  triangle2.style('border-left', '30px solid transparent');
  triangle2.style('border-right', '30px solid transparent');
  triangle2.style('border-top', '75px solid crimson')
  triangle2.draggable();

  circle2 = createDiv(' ');
  circle2.position(625, 1030);
  circle2.size(25, 25);
  circle2.style('background', 'black');
  circle2.style('border-radius', '50%');
  circle2.style('border', '1px solid white');
  circle2.draggable();

  emoji1 = createDiv('😊');
  emoji1.position(660, 1030);
  emoji1.size(25, 25);
  emoji1.draggable();

  emoji2 = createDiv('😎');
  emoji2.position(690, 1030);
  emoji2.size(25, 25);
  emoji2.draggable();

  emoji3 = createDiv('😉');
  emoji3.position(720, 1030);
  emoji3.size(25,25);
  emoji3.draggable();

  // Creates a color picker, sets up their positions, and sets up the default color.
  textColor = createColorPicker('black');
  textColor.size(100, 25);
  textColor.position(400, 860);

  textBG = createColorPicker('white');
  textBG.size(100, 25);
  textBG.position(400, 895);

  // Creates a button that calls the "rng" function to generate a random number
  randomScore = createButton('Get a random score');
  randomScore.mousePressed(rng);
  randomScore.position(100, 945);

  //  Sames as the text box inputs. Sets up a text input field and positions them next to the button.
  companyName = createInput('(Insert Company Name)');
  companyName.position(250, 945);
}

// This function generates a random number from 70-100. Number changes every time the button is pressed.
function rng() {
  changeScore = random(70, 100);
}

function draw() {
  background(255);

  // Sets up the background of the canvas, with the values of the background color based off of the sliders
  fill(reds.value(), greens.value(), blues.value(), alps.value());
  rect(0, 0, 1100, 1000);

  // Sets a specific background for the text the user is editing. Uses the color picker to choose the color (Default: white)
  let bg = textBG.value();
  fill(bg);
  rect(10, 100, 1075, 325);

  // Sets the color of the majority of the text (Default: black);
  let colorText = textColor.value();
  fill(colorText);

  // Sets up the title and subheading for the project
  textFont('Impact');
  textSize(40);
  text('How Creative Are You?', 375, 45);

  textSize(25);
  textStyle(BOLDITALIC);
  textFont('Arial');
  text('Try Out Those Creative Skills Here...', 345, 80);

  // Sets up the text the user is editing, while keeping track of their inputs.
  textFont('Times New Roman');
  textSize(16);
  textStyle(NORMAL);
  text(name1.value() + ' ' + action1.value() + ' to the ' + place1.value() + '. ' + pronoun1.value() + ' decides to ' + action2.value() + ' in the ' + place1.value() + '.', 20, 125);
  text(name1.value() + ' would later ' + action3.value() + ' to the ' + place2.value() + '.', 20, 150);
  text(pronoun1.value() + ' heard that ' + place2.value() + ' centers around ' + info1.value() + '.', 20, 175);
  text('What ' + name1.value() + ' known about ' + place1.value() + ' is that ' + info2.value() + '.', 20, 200);
  text('What ' + name1.value() + ' is currently thinking about now is ' + thought1.value() + '.', 20, 225);
  text(name1.value() + ' would later meet up with ' + name2.value() + '.', 20, 250);
  text(name1.value() + ' knows about ' + name2.value() + ' is that ' + pronoun2.value() + ' ' + personInfo1.value() + '.', 20, 275);
  text('After learning about this info ' + name1.value() + ' and knowing that ' + personInfo2.value() + ', ', 20, 300);
  text(pronoun1.value() + ' feels ' + emotion.value() + ' about it.', 30, 325);
  text('" ' + quote.value() + ' "', 100, 350);

  // Sets up the text for the values of the button's random number, with the text input the player uses
  textFont('Arial');
  text(round(changeScore) + '/100 by: ' + companyName.value(), 775, 400);

  // Sets up the title of the array of text inputs for the story
  textFont('Courier New')
  textStyle(BOLD);
  textSize(20);
  text('-- Insert Your Words Here --', 330, 470);

  // Sets up a couple lines of text detailing the RGBA and Hex Codes of the colors chosen for the text color and text background color
  textSize(15);
  textStyle(NORMAL);
  textFont('Arial');
  text('Text Color Hex: ' + textColor.value() + ';                    RGB: ' + textColor.color(), 475, 635);
  text('Text BG Color Hex: ' + textBG.value() + ';                    RGB: ' + textBG.color(), 475, 675);

  // Sets up the labels for each slider, and setting up a line of text showing the specific values of each part of the color for the canvas background color
  textStyle(BOLD);
  text('Reds', 50, 510);
  text("Greens", 50, 550);
  text('Blues', 50, 590);
  text('Alpha', 50, 630);
  textStyle('normal');
  textSize(15);
  text('RGBA: (' + reds.value() + ', ' + greens.value() + ', ' + blues.value() + ', ' + alps.value() + ')', 50, 670);

  // Sets up a subtitle, instructing the user to drag and place the shapes in any way they seek fit
  textSize(20);
  textStyle('bolditalic');
  text('Wanna add some shapes to this design? Place them where you seek are appropriate.', 50, 770);

  // Creates an ellipse/circle that follows the mouse and reacts if the user presses the left or right click.
  if(mouseIsPressed === true) {
    if(mouseButton === LEFT) {
      fill(255);
      ellipse(mouseX, mouseY, 18);
    }
    if(mouseButton === RIGHT) {
      fill(128);
      ellipse(mouseX, mouseY, 17);
    }
  }
  else{
    fill(0);
    ellipse(mouseX, mouseY, 15);
  }
}
