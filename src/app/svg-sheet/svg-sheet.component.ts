import {AfterViewInit, Component, OnInit, Query, ViewChildren} from '@angular/core';
import {Options, OptionsDataService} from "../option-data.service";

declare var SVG:any;
declare var _:any;

//import {Snap} from 'snapsvg';
//import {SVG} from "svg.js";

//import {SVG} from "exports-loader?SVG!svg.js/src/svg.js";

//import {Snap} from "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js";
//import {Snap} from "imports-loader?this=>window,fix=>module.exports=0!snapsvg";



@Component({
  selector: 'app-svg-sheet',
  templateUrl: './svg-sheet.component.html',
  styleUrls: ['./svg-sheet.component.css']
})

export class SvgSheetComponent implements OnInit, AfterViewInit{

  @ViewChildren('svg') svgElement: any;

  constructor(private optionData: OptionsDataService) {
  }

  ngOnInit() {

  }

  private drawSheet(options: Options) {
    debugger;
    let svgPaper = this.svgElement.first;
    if (options.isValid()) {
      debugger;
      drawStuff(svgPaper, options);
    }
  }

  ngAfterViewInit(): void {
    debugger;
    this.drawSheet(this.optionData.options$.getValue());
    this.optionData.options$.subscribe(this.drawSheet);
  }

}


function drawStuff(element, options: Options){


  var W = 297;
  var H = 210;

//To avoid blank page in chrome
  H = H - 1;


  //$("body").append('<svg id="svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + 'mm" height="' + H + 'mm"></svg>')

  element.nativeElement.setAttribute("viewBox", '0 0 ' + W + ' ' + H);

  var s = SVG(element.nativeElement);
  s.clear();
  s.rect(W,H).fill('#fff');


  var MARGIN = 5;
  var STROKE = 0.1;
  var NIB = options.nibSize;

  let ruler = [3, 5, 3]; // first line at 0, second at 2.5, third at (2.5 + 4.5) and so on
//[2,4,2] gothic

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

    (!width) && (width = 1);

    var line = s.line(MARGIN, y, W - MARGIN, y);

    line.stroke({
      color: "#000",
      width: STROKE * width
    });

    styleMixin && line.attr(styleMixin);

  }


  function addLine(x, y, x1, y1, width?) {
    (!width) && (width = 1);
    var line = s.line(x, y, x1, y1);
    line.stroke({
      color: "#000",
      width: STROKE * width
    });
    return line;
  }

  function slantVector(degrees) {
    return [-Math.sin(degrees / 360.0 * 2 * Math.PI), Math.cos(degrees / 360.0 * 2 * Math.PI)];
  }

  let slantLines = [];
  let i = 10;


  let maskRect = s.rect(W - MARGIN * 2, H - availableVerticalMargin).move(MARGIN, topMargin);

  maskRect.attr({
    stroke: '#fff',
    'strokeWidth': 0,
    fill: '#fff'
  });

  let mask = s.mask().add(maskRect);

  for (let i = 1.2; i * NIB < W + H; i += 3 * NIB) {
    let line = addLine(xCoord(i), yCoord(0), xCoord(i + 100 * slantVector(7)[0]), yCoord(100 * slantVector(7)[1]));





    line.maskWith(mask);
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
}
