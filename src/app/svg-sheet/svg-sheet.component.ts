import {Component, OnInit, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-svg-sheet',
  templateUrl: './svg-sheet.component.html',
  styleUrls: ['./svg-sheet.component.css']
})

export class SvgSheetComponent implements OnInit {

  @ViewChildren('svg') svgElement : any;
  constructor() {
    debugger;
  }

  ngOnInit() {
  }

}
