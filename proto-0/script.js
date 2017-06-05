//297x210. Remove a cm to avoid printing one blank page.
//TODO use NIB coordinates.
/*
  function realCoord(x,y){
    return NIB*x + MARGIN //or viewport[x/y] etc.
  }

*/


var W = 297;
var H = 210;

//To avoid blank page in chrome
H = H - 1


$("body").append('<svg id="svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + 'mm" height="' + H + 'mm"></svg>')


var s = Snap("#svg");


var MARGIN = 5;
var STROKE = 0.1;
var NIB = 3.8;

let ruler = [3, 5, 3]; // first line at 0, secon at 2.5, third at (2.5 + 4.5) and so on
let lineWidth = [0.3, 0.3, 3];
let styleMixin = [undefined, undefined, undefined];



//Sum of height (in nibs)
let rulerSize = _.reduce(ruler, reduceAdder);

//Number of complete lines
let max = Math.floor((H - MARGIN * 2) / (NIB * rulerSize));

let availableVerticalMargin = H - rulerSize * max * NIB;
let topMargin = 0.5 * availableVerticalMargin;

function xCoord(xNib) {
  return MARGIN + xNib * NIB;
}

function yCoord(yNib) {
  return topMargin + yNib * NIB
}

function xFromNibs(nibs) {
  //TODO dirty fix to have more space on top
  return topMargin + nibs * NIB;
}


function addHorizontaLine(y, width, styleMixin) {

  console.log(y, width, styleMixin);

  (!width) && (width = 1);

  var line = s.line(MARGIN, y, W - MARGIN, y);

  line.attr({
    stroke: "#000",
    strokeWidth: STROKE * width
  });

  styleMixin && line.attr(styleMixin);

}


function addLine(x, y, x1, y1, width) {
  (!width) && (width = 1);
  var line = s.line(x, y, x1, y1);
  line.attr({
    stroke: "#000",
    strokeWidth: STROKE * width
  });
  return line;
}

function slantVector(degrees) {
  return [-Math.sin(degrees / 360.0 * 2 * Math.PI), Math.cos(degrees / 360.0 * 2 * Math.PI)];
}

let slantLines = [];
let i = 10;
for (let i = 1.2; i * NIB < W + H; i += 3 * NIB) {
  let line = addLine(xCoord(i), yCoord(0), xCoord(i + 100 * slantVector(7)[0]), yCoord(100 * slantVector(7)[1]));

  let mask = s.rect(MARGIN, topMargin, W - MARGIN * 2, H - availableVerticalMargin);
  mask.attr({
    stroke: 'silver',
    'strokeWidth': 0,
    fill: 'silver'
  });


  line.attr({
    mask: mask
  });
  // s.group(line).attr({
  //   mask: mask
  // });
}


for (let i = 0; i < max; i++) {
  let start = i * rulerSize;
  addHorizontaLine(xFromNibs(start), lineWidth[0], styleMixin[0]);
  for (let j = 0; j < ruler.length - 1; j++) {
    let offset = _.reduce(ruler.slice(0, j + 1), reduceAdder);
    addHorizontaLine(xFromNibs(start + offset), lineWidth[j + 1], styleMixin[j + 1]);
  }
}

addHorizontaLine(xFromNibs(rulerSize * max), lineWidth[0], styleMixin[0]);



function reduceAdder(memo, item) {
  return memo + item;
}

/*
, {
    "stroke-dasharray": "0.7, 0.7"
  }
  */


// let styleMixin = [undefined, {
//   "stroke-dasharray": "0.7, 0.7"
// }, undefined];
