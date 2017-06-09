import {AfterViewInit, Component, OnInit, ViewChildren} from '@angular/core';
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
  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    debugger;
    this.svgElement.first.nativeElement;
    //Snap("toto");
    //SVG("svg-section").rect(100, 100).attr({ fill: '#f06' });


  }

}
